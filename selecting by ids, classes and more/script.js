// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// boxes.style.backgourndcolor = "red";


document.getElementById("red_box").style.backgroundColor = "red";
document.querySelector(".box").style.backgroundColor = "green";

document.querySelectorAll(".box").forEach(element => {
    element.style.backgroundColor = "red";
});

let arr = document.querySelectorAll(".box");

console.log(arr + typeof arr)

console.log(document.getElementsByTagName("div"))