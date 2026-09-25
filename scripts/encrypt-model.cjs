// Re-encrypts the avatar after editing it: node scripts/encrypt-model.cjs character.glb
// Password must match src/components/Character/utils/decrypt.ts (obfuscation only, not security).
const crypto = require("crypto");
const fs = require("fs");

const [input = "character.glb", output = "public/models/character.enc"] = process.argv.slice(2);
const key = crypto.createHash("sha256").update("MyCharacter12").digest();
const iv = crypto.randomBytes(16);
const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
fs.writeFileSync(output, Buffer.concat([iv, cipher.update(fs.readFileSync(input)), cipher.final()]));
console.log(`wrote ${output}`);
