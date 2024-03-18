let userInput = document.getElementById("textBar")


function reverseString(str) {
    //var re = /[\W_]/g;
    // split into array then reverses the array then join it again
    return str.split("").reverse().join("");
}

function palinCheck() {
    const value = userInput.value;
    const reverse = reverseString(value);

    if (value === reverse) {
        alert("A palindrome");
    }
    else {
        alert(`Not a palidrome: ${value}\nthe reverse value ${reverse}`);
    }

    userInput.value = "";
}
