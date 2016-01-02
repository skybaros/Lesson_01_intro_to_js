"Use strict";

while (1) {
    var numb = prompt("Try to guess a number!");
    var rand = parseInt((Math.random() * 100) + 1);
    if (numb != rand) {
        if (numb < rand) {
            alert("Our number is higher, try again!");
        } else
            alert("Our number is lower, try again!");
    } else
        alert("You are right, the number is " + rand);
}