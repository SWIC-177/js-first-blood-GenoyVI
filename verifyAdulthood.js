const name = "aaron hart";
const age = 19;
function verifyAdulthood(sir, old) {
  if (age === 18) {
    return `Welcome ${sir}!,  ${old}!`;
  }
  if (age > 18) {
    return `Hello ${sir}!, you are old enough to enter ${sir}!`;
  }
  return `Sorry ${sir}!, you are not old enough to enter #{sir}!. if that is your real name!`;
}

const message = verifyAdulthood(name, age);

console.log(message);
