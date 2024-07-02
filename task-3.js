"use strict";

function getElementWidth(content, padding, border) {
  const paddingValue = parseFloat(padding);
  const contentValue = parseFloat(content);
  const borderValue = parseFloat(border);

  const totalWidth = paddingValue + contentValue + borderValue;
  return totalWidth;
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));
