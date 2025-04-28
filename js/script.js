const lightSwitch = document.getElementById("lightswitch");
const lightBulb = document.getElementById("bulb");

lightSwitch.addEventListener("click", function () {
  if (lightSwitch.classList.contains("on")) {
    lightSwitch.classList.remove("on");
    lightSwitch.innerText = "Accendi la luce";
    lightBulb.src = "./img/white_lamp_1.png";
  } else {
    lightSwitch.classList.add("on");
    lightSwitch.innerText = "Spegni la luce";
    lightBulb.src = "./img/yellow_lamp_1.png";
  }
});
