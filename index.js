const pluse = document.querySelector(".like");
const number = document.querySelector(".button-div1");

const pluseButton = function pluseButton() {
  const current = parseInt(number.innerText, 10);
  number.innerText = current + 1;
};

pluse.addEventListener("click", pluseButton);

function onClick() {
  document.querySelector(".modal_wrap").style.display = "block";
  document.querySelector(".modal_bg").style.display = "block";
}

function closeClick() {
  document.querySelector(".modal_wrap").style.display = "none";
  document.querySelector(".modal_bg").style.display = "none";
}

function onCommitClick() {
  document.querySelector(".modal_wrap1").style.display = "block";
  document.querySelector(".modal_bg1").style.display = "block";
}

function closeCommitClick() {
  document.querySelector(".modal_wrap1").style.display = "none";
  document.querySelector(".modal_bg1").style.display = "none";
}

document.getElementById("modal_btn").addEventListener("click", onClick);
document.getElementById("modal_btn1").addEventListener("click", onCommitClick);
document.querySelector(".modal_close").addEventListener("click", closeClick);
document
  .querySelector(".modal_close1")
  .addEventListener("click", closeCommitClick);

let commnetInput = document.getElementsByClassName("text_commit")[0];
let submitButton = document.getElementsByClassName("submit")[0];

function submit_() {
  const box = document.getElementsByClassName("write_comment")[0];

  const commnet = document.createElement("div");
  const userName = document.createElement("span");
  const mainText = document.createElement("p");

  commnet.classList.add("write_comment_box");
  userName.classList.add("userName");
  mainText.classList.add("mainText");

  userName.innerText = "익명";
  mainText.innerText = commnetInput.value;

  commnet.appendChild(userName);
  commnet.appendChild(mainText);

  box.appendChild(commnet);
}

submitButton.addEventListener("click", (e) => {
  TMB_();
  submit_();
  commnetInput.value = "";
});

commnetInput.addEventListener("keypress", (e) => {
  if (e.code === "Enter") {
    submit_();
    commnetInput.value = "";
  }
});
