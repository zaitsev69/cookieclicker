
let dpc = 10;

var life = 100;

var coutDague = 30;

var coutKatana = 150;

var coutMarteau = 300;

var broyeurTitan = 1000;

var messageDiv = document.getElementById("message-div");




var counter = document.getElementById("counter");
var incrementButton = document.getElementById("incrementButton");
var count = 0;

var power = 10;

function updateCounter() {
  counter.innerHTML = count;
}

incrementButton.addEventListener("click", function () {
  const audio = new Audio('coup.wav');
  audio.play();
  count++;
  updateCounter();
  let health = document.getElementById("health")
  health.value -= power;
  if (health.value == 0) {
    health.value = 400;
    count += 50;
    const audio = new Audio('sonmort.mp3');
    audio.play();

  }
});


setInterval(function () {
  count++;
  document.getElementById("counter").innerHTML = count;
}, 1000);

boutonitem1.addEventListener("click", function () {
  if (count >= 30) {
    count -= 30;
    counter.innerHTML = count;
    dpc = 20;
    dpcCounter.textContent = dpc;
    power = 20;
    boutonitem1.disabled = true;
    boutonitem1.innerText = "Equipé !";
  }

});

boutonitem2.addEventListener("click", function () {
  if (count >= 150) {
    count -= 150;
    counter.innerHTML = count;
    dpc = 30;
    dpcCounter.textContent = dpc;
    power = 30;
    boutonitem2.disabled = true;
    boutonitem2.innerText = "Equipé !";
  }

});

boutonitem3.addEventListener("click", function () {
  if (count >= 300) {
    count -= 300;
    counter.innerHTML = count;
    dpc = 40;
    dpcCounter.textContent = dpc;
    power = 40;
    boutonitem3.disabled = true;
    boutonitem3.innerText = "Equipé !";
  }

});

boutonitem4.addEventListener("click", function () {
  if (count >= 1000) {
    count -= 1000;
    counter.innerHTML = count;
    dpc = 50;
    dpcCounter.textContent = dpc;
    power = 50;
    boutonitem4.disabled = true;
    boutonitem4.innerText = "Equipé !";
  }

});







var button = document.getElementById("incrementButton");
button.addEventListener("click", function (event) {


  var circle = document.createElement("div");
  circle.style.width = "10px";
  circle.style.height = "45px";
  circle.style.borderRadius = "50%";
  circle.style.backgroundColor = "rgb(136, 8, 8)";
  circle.style.position = "absolute";
  circle.style.left = event.clientX + "px";
  circle.style.top = event.clientY + "px";

  document.body.appendChild(circle);

  setTimeout(function () {
    circle.remove();
  }, 500);

  var monstreElem = document.getElementById("monstre");
  monstreElem.src = "monstre2.png";
  setTimeout(function () {
    monstreElem.src = "Monstre.png";
  }, 100);

});







