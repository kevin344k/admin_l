const socket = io();

const irwin1 = document.querySelector("#irwin_1");
const nameOp = document.querySelector("#nameOp");
const nameProd = document.querySelector("#nameProd");
const myModal = document.getElementById("modal1");
const btnLoad = document.querySelector("#btnLoad");
const nameMachine = document.querySelector("#nameMachine");
const msg = document.querySelector("#msg");
const blockRun = document.querySelector("#blockRun");
const blockLoader = document.querySelector("#blockLoader");
const spanNamePag = document.querySelector("#spanNamePag");

blockRun.style.display = "none";

irwin1.addEventListener("click", () => {
  nameMachine.innerHTML = irwin1.value;

  $("#modal1").modal("show");
});

btnLoad.addEventListener("click", () => {
  if (nameOp.value == "" && nameProd.value == "") {
    let err = document.createElement("div");
    err.innerHTML = `<div class="alert alert-danger" role="alert">
     ¡Ingresa los datos!
  </div> `;
    msg.appendChild(err);
  } else {
    if (socket.connected) {
      socket.emit("datosMaquina", {
        nombre: nameMachine.textContent,
        operador: nameOp.value,
        producto: nameProd.value,
      });

      blockRun.style.display = "block";
      blockLoader.style.display = "none";
      $("#modal1").modal("hide");
      spanNamePag.textContent = ` ${irwin1.value}( ${nameProd.value} ) `;
      nameOp.value = "";
      nameProd.value = "";
    } else {
      alert("Error de conexión, no se puede continuar");
      nameOp.value = "";
      nameProd.value = "";
    }
  }
});

const butRun = document.querySelector("#butRun");
const stopped = document.querySelector("#stopped");
const change = document.querySelector("#change");
let setIntervalRun, setIntervalChange, setIntervalStop;

//RUN
butRun.addEventListener("click", () => {
  butRun.classList.add("butRun");
  stopped.classList.remove("butStop");
  change.classList.remove("butChange");

  setIntervalRun = setInterval(() => {
    socket.volatile.emit("run", "var(--bs-success)");
    console.log("run");
  }, 3000);

  clearInterval(setIntervalStop);
  clearInterval(setIntervalChange);
});
//STOPPED
stopped.addEventListener("click", () => {
  stopped.classList.add("butStop");
  butRun.classList.remove("butRun");
  change.classList.remove("butChange");
  setIntervalStop = setInterval(() => {
    socket.volatile.emit("stop", "var(--bs-danger)");
    console.log("stop");
  }, 3000);
  clearInterval(setIntervalRun);
  clearInterval(setIntervalChange);
});
//CHANGE
change.addEventListener("click", () => {
  change.classList.add("butChange");
  butRun.classList.remove("butRun");
  stopped.classList.remove("butStop");
  setIntervalChange = setInterval(() => {
    socket.volatile.emit("change", "var(--bs-warning)");
    console.log("change");
  }, 3000);
  clearInterval(setIntervalStop);
  clearInterval(setIntervalRun);
});
