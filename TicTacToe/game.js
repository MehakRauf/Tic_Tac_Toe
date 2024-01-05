let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".resetbtn");
let newbtn = document.querySelector(".new");
let msg = document.querySelector(".msg-container");
let msg1 = document.querySelector(".msg");

let turn0 = true;
let patterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [0, 4, 8]];

let disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

let enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
let showWinner = (p1) => {
    msg1.innerText = `Congratulations! Winner is ${p1}`;
    msg.classList.remove("hide");
    disableBoxes();
}

const resetBtn=()=>{
    turn0=true;
    enableBoxes();
    msg.classList.add("hide");
}
let decideWinner = () => {
    for (let pattern of patterns) {
        let p1 = boxes[pattern[0]].innerText;
        let p2 = boxes[pattern[1]].innerText;
        let p3 = boxes[pattern[2]].innerText;
        if (p1 != "" && p2 != "" && p3 != "") {
            if ((p1 == p2) && (p2 == p3)) {
                showWinner(p1);
            }
        }
    }
}
boxes.forEach((choices) => {
    choices.addEventListener("click", () => {
        if (turn0) {
            choices.innerText = "O";
            turn0 = false;
        }
        else {
            choices.innerText = "X";
            turn0 = true;
        }
        choices.disabled = true;
        decideWinner();
    })
})

resetbtn.addEventListener("click",resetBtn);
newbtn.addEventListener("click",resetBtn);
