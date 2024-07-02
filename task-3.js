"use strict";

function getElementWidth(content, padding, border) {
  const paddingValue = number.parseFloat(padding);
  const contentValue = number.parseFloat(content);
  const borderValue = number.parseFloat(border);
}

const totalWidth = paddingValue + contentValue + borderValue;

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
