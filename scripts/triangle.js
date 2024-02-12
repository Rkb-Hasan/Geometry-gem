const output = document.getElementById("output");

// function triangleArea() {
//   const inputBase = document.getElementById("trBase").value;
//   const base = parseFloat(inputBase);
//   const inputHeight = document.getElementById("trHeight").value;
//   const height = parseFloat(inputHeight);

//   output.style.padding = "8px";

//   const trArea = 0.5 * base * height;

//   if (isNaN(trArea)) {
//     return (output.innerText = "please input number");
//   }

//   return (output.innerHTML = `Triangle-area : ${trArea} cm<sup>2</sup> `);
// }

// function rectangleArea() {
//   const inputWidth = document.getElementById("rWidth").value;
//   const width = parseFloat(inputWidth);
//   const inputLength = document.getElementById("rLength").value;
//   const length = parseFloat(inputLength);
//   output.style.padding = "8px";
//   const rArea = length * width;

//   if (isNaN(rArea)) {
//     return (output.innerText = "please input number");
//   }

//   return (output.innerHTML = `Rectangle-area : ${rArea} cm<sup>2</sup> `);
// }

// common functions-------------------------------------------------------

function getInputIdValue(inputId) {
  inputValue = document.getElementById(inputId).value;
  value = parseFloat(inputValue);
  return value;
}

function printArea(printId, area, shape) {
  output.style.padding = "8px";
  if (isNaN(area)) {
    return (printId.innerText = "please input number");
  }
  return (printId.innerHTML = `${shape}-area : ${area} cm<sup>2</sup> `);
}
//---------------------------------------------------------------------------

function triangleArea() {
  const base = getInputIdValue("trBase");
  const height = getInputIdValue("trHeight");
  const trArea = 0.5 * base * height;
  printArea(output, trArea, "Triangle");
}
function rectangleArea() {
  const width = getInputIdValue("rWidth");
  const length = getInputIdValue("rLength");
  const rArea = width * length;
  printArea(output, rArea, "Rectangle");
}
