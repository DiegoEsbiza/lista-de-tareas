import { addTask } from "./components/addTask.js";
import { readTasks } from "./components/readTasks.js";

const btn = document.querySelector("[data-form-btn]");

btn.addEventListener("click", addTask); //escuchador de evnto, al hacer click en el boton (btn) se ejecutara la función "createTask".
readTasks();
