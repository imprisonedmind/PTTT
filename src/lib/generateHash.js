// generateHash.js
import bcrypt from "bcryptjs";

(async function generateHash() {
  const plainTextPassword = "1234";
  const hashedPassword = await bcrypt.hash(plainTextPassword, 12);
  console.log("Hashed password:", hashedPassword);
})();
