const inputCode = [];
const konamiCode =
  "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowLeftArrowRightArrowRightbabaEnter";

window.addEventListener("keyup", e => {
  inputCode.push(e.key);
  inputCode.splice(
    -konamiCode.length - 1,
    inputCode.length - konamiCode.length
  );
  console.log(inputCode);
});
