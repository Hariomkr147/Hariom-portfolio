import { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import setCharacter from "./utils/character";
import setLighting from "./utils/lighting";
import { useLoading } from "../../context/LoadingProvider";
import handleResize from "./utils/resizeUtils";
import {
  handleMouseMove,
  handleTouchEnd,
  handleHeadRotation,
  handleTouchMove,
} from "./utils/mouseUtils";
import setAnimations from "./utils/animationUtils";
import { setProgress } from "../Loading";
import { setAllTimeline } from "../utils/GsapScroll";

// If the avatar is slow or fails, reveal the site anyway instead of trapping visitors on the loader.
const REVEAL_TIMEOUT_MS = 15000;

const Scene = () => {
  const canvasDiv = useRef<HTMLDivElement | null>(null);
  const hoverDivRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef(new THREE.Scene());
  const { setLoading } = useLoading();

  useEffect(() => {
    const canvasEl = canvasDiv.current;
    if (!canvasEl) return;
    const rect = canvasEl.getBoundingClientRect();
    const scene = sceneRef.current;
    let disposed = false;

    const progress = setProgress((value) => setLoading(value));
    const revealWithoutCharacter = () => {
      progress.clear();
      setAllTimeline();
      gsap.set(".what-box-in", { display: "flex" });
    };

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    } catch (err) {
      // No WebGL (old device, disabled GPU): the site still works, just without the avatar.
      console.error("WebGL unavailable, showing site without the 3D character:", err);
      revealWithoutCharacter();
      return;
    }
    renderer.setSize(rect.width, rect.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    canvasEl.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(14.5, rect.width / rect.height, 0.1, 1000);
    camera.position.set(0, 13.1, 24.7);
    camera.zoom = 1.1;
    camera.updateProjectionMatrix();

    let headBone: THREE.Object3D | null = null;
    let screenLight: THREE.Mesh | null = null;
    let mixer: THREE.AnimationMixer | undefined;
    let onResize: (() => void) | undefined;

    const clock = new THREE.Clock();
    const light = setLighting(scene);
    const { loadCharacter } = setCharacter(renderer, scene, camera);
    const revealTimer = setTimeout(revealWithoutCharacter, REVEAL_TIMEOUT_MS);

    loadCharacter()
      .then((gltf) => {
        clearTimeout(revealTimer);
        if (disposed) return;
        const animations = setAnimations(gltf);
        if (hoverDivRef.current) animations.hover(gltf, hoverDivRef.current);
        mixer = animations.mixer;
        const character = gltf.scene;
        scene.add(character);
        headBone = character.getObjectByName("spine006") || null;
        screenLight = (character.getObjectByName("screenlight") as THREE.Mesh) || null;
        progress.loaded().then(() => {
          setTimeout(() => {
            light.turnOnLights();
            animations.startIntro();
          }, 2500);
        });
        onResize = () => handleResize(renderer, camera, canvasDiv, character);
        window.addEventListener("resize", onResize);
      })
      .catch((err) => {
        console.error("Character failed to load, showing site without it:", err);
        clearTimeout(revealTimer);
        if (!disposed) revealWithoutCharacter();
      });

    let mouse = { x: 0, y: 0 };
    let interpolation = { x: 0.1, y: 0.2 };
    let tracking = false;
    let debounce: number | undefined;

    const onMouseMove = (event: MouseEvent) =>
      handleMouseMove(event, (x, y) => (mouse = { x, y }));
    const onTouchStart = () => {
      debounce = window.setTimeout(() => (tracking = true), 200);
    };
    const onTouchMove = (event: TouchEvent) => {
      if (tracking) handleTouchMove(event, (x, y) => (mouse = { x, y }));
    };
    const onTouchEnd = () => {
      clearTimeout(debounce);
      tracking = false;
      handleTouchEnd((x, y, interpolationX, interpolationY) => {
        mouse = { x, y };
        interpolation = { x: interpolationX, y: interpolationY };
      });
    };

    document.addEventListener("mousemove", onMouseMove);
    const landingDiv = document.getElementById("landingDiv");
    landingDiv?.addEventListener("touchstart", onTouchStart);
    landingDiv?.addEventListener("touchmove", onTouchMove);
    landingDiv?.addEventListener("touchend", onTouchEnd);

    let raf = 0;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      if (headBone) {
        handleHeadRotation(
          headBone,
          mouse.x,
          mouse.y,
          interpolation.x,
          interpolation.y,
          THREE.MathUtils.lerp
        );
        light.setPointLight(screenLight);
      }
      mixer?.update(clock.getDelta());
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      clearTimeout(debounce);
      clearTimeout(revealTimer);
      if (onResize) window.removeEventListener("resize", onResize);
      document.removeEventListener("mousemove", onMouseMove);
      landingDiv?.removeEventListener("touchstart", onTouchStart);
      landingDiv?.removeEventListener("touchmove", onTouchMove);
      landingDiv?.removeEventListener("touchend", onTouchEnd);
      scene.clear();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [setLoading]);

  return (
    <div className="character-container">
      <div className="character-model" ref={canvasDiv}>
        <div className="character-rim"></div>
        <div className="character-hover" ref={hoverDivRef}></div>
      </div>
    </div>
  );
};

export default Scene;
