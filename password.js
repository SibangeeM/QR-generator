const user_input = document.querySelector(".result-container");
const gen = document.getElementById("generate");
const imgElement = document.querySelector("img");

gen.addEventListener("click", function () {
  const kk = user_input.value;

  imgElement.setAttribute(
    "src",
    `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${kk}`
  );
  user_input.value = "";
});

const downloadBtn = document.querySelector("#dnload");

downloadBtn.addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = imgElement.src;
  link.download = "qr_code.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
