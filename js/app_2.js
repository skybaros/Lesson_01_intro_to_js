var x1, x2, y1, y2;
x2 = prompt("Enter X of a point A:","0");
y2 = prompt("Enter Y of a point A:","0");
x1 = 4;
y1 = 7;
var result = Math.sqrt((Math.pow(x1-x2),2) + Math.pow((y1-y2),2));// аналогічно - краще оголосити змінну тут, чи рядком вище і окремо?
alert("The distance between points A and B = "+result);
