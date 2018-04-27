const inputCode = [];
const konamiCode =
  "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightbabaEnter";

window.addEventListener("keyup", e => {
  inputCode.push(e.key);
  inputCode.splice(
    -konamiCode.length - 1 + 4,
    inputCode.length - konamiCode.length
  ); // splice method starts from the end of the array to grab the exact length
  if (inputCode.join("").includes(konamiCode)) {
    alert("EASTER EGG ENGAGED! TIME TO EXPERIENCE UNICORN OVERLOAD");
    cornify_add();
  }
  console.log(inputCode);
});
