// ! Test pour vérifier que le mot de passe "plein" soit bien hash
const User = require("./models/user");

// User.hashPassword("myPlainPassword").then((hashedPassword) => {
//   console.log(hashedPassword);
// });

// ! Test pour vérifier que le mot de passe "plein" correspond bien à sa version hashed
User.verifyPassword(
  "myPlainPassword",
  "$argon2id$v=19$m=65536,t=5,p=1$6F4WFjpSx9bSq9k4lp2fiQ$cjVgCHF/voka5bZI9YAainiaT+LkaQxfNN638b/h4fQ"
).then((passwordIsCorrect) => {
  console.log(passwordIsCorrect);
});
