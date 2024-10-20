//Counter App
var count = 0
document.getElementById("count-el").innerText = count
let string = document.getElementById("save-el").innerHTML

function increment() {
    count++
    console.log("clicked")
    document.getElementById("count-el").innerText = count
    console.log(count)
}

function save() {
    document.getElementById("save-el").innerHTML = document.getElementById("save-el").innerHTML + count + " - "
}

function decrease() {
    count--
    document.getElementById("count-el").innerText = count
}

function reset() {
    count = 0
    document.getElementById("count-el").innerText = count
}