const bcrypt = require("bcryptjs");

const password = "Jainish@123";

bcrypt.hash(password, 10).then((hash) => {
  console.log("Hashed Password:", hash);
});
