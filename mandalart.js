const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.setAttribute("contenteditable", "true");
});
