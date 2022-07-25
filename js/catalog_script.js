$(document).on("click", ".cont__model-btn", function () {
  const button = document.querySelector(".cont__model-btn");
  const list = document.querySelector(".cont__model-car");
  button.style.display = "none";
  list.style.width = "100%";
  list.style.height = "auto";
});
