/**
 * Scope and the var statement
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
 */

let color = "purple";

document.querySelector(".left").style.backgroundColor = color;
document.querySelector(".left .color-value").innerHTML = color;



function headingColor() {
  let ccolor = "blue";
  document.querySelector(".title").style.color = ccolor;
  console.log(color)
}

headingColor();


document.querySelector(".right").style.backgroundColor = color;
document.querySelector(".right .color-value").innerHTML = color;

// function headingColor() {
//   color = "blue";
//   document.querySelector(".title").style.color = color;
// }

// headingColor();
