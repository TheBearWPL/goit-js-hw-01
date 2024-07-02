"use strict";

function getElementWidth(content, padding, border) {
  const paddingValue = parseFloat(padding);
  const contentValue = parseFloat(content);
  const borderValue = parseFloat(border);
}

function (const totalWidth = paddingValue + contentValue + borderValue){;
return totalWidth;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
