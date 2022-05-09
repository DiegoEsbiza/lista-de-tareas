import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";
//Se crea una IIFE (Inmediately Invoked Fuction Expression) para quitar las funciones creadas del "scope global", es decir, que ninguna de las funciones dentro del IIFE sean accesibles por fuera de ella, limitando asi el acceso al usuario, console.log(s) y a otras funciones que intenten invocarlas externamente

export const addTask = (event) => {
  const list = document.querySelector("[date-list]"); //elemento padre ("ul") que se le va a crear el elemento (mediante appenchild).
  const task = createTask(event);
  list.appendChild(task); //agregado del nuevo elemento "li" al elemento padre ("ul").
};

const createTask = (event) => {
  //funcion crear tarea, mediante "arrow function" (funcion anonima).
  event.preventDefault(); //evita comportamiento por defecto.
  const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
  console.log(taskList);
  const input = document.querySelector("[data-form-input]"); //selecciona el "input text" mediante el atributo "data" => data-form-input.
  const calendar = document.querySelector("[data-form-date]"); //selecciona el "input datetime" en la constante "calendar"
  const date = calendar.value; //se crea la constante "date" y se le asigna la información de la constante "calendar"
  const dateFormat = moment(date).format("DD/MM/YY");
  console.log(date);
  const value = input.value; //captura del valor (value) del "input text".
  const task = document.createElement("li"); //creación del elemento "li".
  task.classList.add("card"); //agregado de clase al lemento "li" creado.
  input.value = ""; //reiniciar el contenido del input text dejandolo vacio.
  const taskContent = document.createElement("div"); //creando elemento padre "div".
  console.log(value, dateFormat);
  const taskObj = {
    value,
    dateFormat,
  };

  taskList.push(taskObj);

  localStorage.setItem("tasks", JSON.stringify(taskList));

  taskContent.appendChild(checkComplete()); //agregado del elemento hijo "checkComplete".
  const titleTask = document.createElement("span"); //creando el elemnto span que contiene el "value" ingresado.
  titleTask.classList.add("task"); //agregando clase "task" al span "titleTask" creado.
  titleTask.innerText = value; //agregandole el "value" ingresado en el input al "task" creado.
  taskContent.appendChild(titleTask);
  const dateElement = document.createElement("span"); //creando el elemento que mostrara la fecha en la tarea creada
  dateElement.innerHTML = dateFormat; //el elemento "dateElement" sera igual al dateformat"
  task.appendChild(taskContent); //el contenido que tendra el nuevo elemento "li" creado.
  task.appendChild(dateElement); //agregando la fecha a la tarea creada
  task.appendChild(deleteIcon()); //agregado icono de borrar.
  return task;
};
