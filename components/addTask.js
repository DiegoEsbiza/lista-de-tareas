import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";

export const addTask = (event) => {
  event.preventDefault(); //evita comportamiento por defecto.

  const list = document.querySelector("[date-list]"); //elemento padre ("ul") que se le va a crear el hijo (mediante appenchild).
  const input = document.querySelector("[data-form-input]"); //selecciona "input text" mediante "data" => data-form-input.
  const calendar = document.querySelector("[data-form-date]"); //selecciona "input datetime" en constante "calendar"

  const value = input.value; //captura valor (value) del "input text".
  const date = calendar.value; // crea constante "date" y se asigna información de constante "calendar"
  const dateFormat = moment(date).format("DD/MM/YY");

  input.value = ""; //reiniciar contenido del input text.
  calendar.value = "";

  const taskObj = {
    value,
    dateFormat,
  };

  const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
  taskList.push({ value, dateFormat });
  localStorage.setItem("tasks", JSON.stringify(taskList));

  const task = createTask(taskObj);
  list.appendChild(task); //agregadonuevo elemento "li" al padre ("ul").
};

export const createTask = ({ value, dateFormat }) => {
  //funcion crear tarea, mediante "arrow function" (funcion anonima).
  const task = document.createElement("li"); //creación del elemento "li".
  task.classList.add("card");

  const taskContent = document.createElement("div"); //creando elemento padre "div".

  const titleTask = document.createElement("span"); //creando elemnto span que contiene "value".
  titleTask.classList.add("task"); //agregando clase "task" al span "titleTask" creado.
  titleTask.innerText = value; //agregandole "value" ingresado en input al "task" creado.
  taskContent.appendChild(checkComplete());
  taskContent.appendChild(titleTask);
  
  const dateElement = document.createElement("span"); //creando elemento que mostrara la fecha en la tarea creada
  dateElement.innerHTML = dateFormat; //elemento "dateElement" sera igual a dateformat"
  task.appendChild(taskContent); //contenido que tendra nuevo elemento "li" creado.
  task.appendChild(dateElement); //agregando fecha a tarea creada
  task.appendChild(deleteIcon()); //agregado icono borrar.
  return task;
};
