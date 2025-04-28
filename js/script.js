const lightSwitch = document.getElementById("lightswitch");
const lightBulb = document.getElementById("bulb");

lightSwitch.addEventListener("click", function () {
  if (lightSwitch.classList.contains("on")) {
    lightSwitch.classList.remove("on");
    lightSwitch.innerText = "Luce spenta";
    lightBulb.src = "./img/white_lamp_1.png";
  } else {
    lightSwitch.classList.add("on");
    lightSwitch.innerText = "Luce accesa";
    lightBulb.src = "./img/yellow_lamp_1.png";
  }
});
