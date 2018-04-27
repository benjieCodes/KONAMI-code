const inputCode = [];
const konamiCode =
  "MetaArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightbabaEnter";

window.addEventListener("keyup", e => {
  inputCode.push(e.key);
  console.log(e.key);

  inputCode.splice(
    -konamiCode.length - 1,
    inputCode.length - konamiCode.length
  ); // splice method starts from the end of the array to grab the exact length
  console.log(inputCode.join(""));

  if (inputCode.join("").includes(konamiCode)) {
    console.log("hooray");
  }
  console.log(inputCode);
});
