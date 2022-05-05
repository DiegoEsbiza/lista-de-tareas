import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";
//Se crea una IIFE (Inmediately Invoked Fuction Expression) para quitar las funciones creadas del "scope global", es decir, que ninguna de las funciones dentro del IIFE sean accesibles por fuera de ella, limitando asi el acceso al usuario, console.log(s) y a otras funciones que intenten invocarlas externamente
(() => {
  //abriendo IIFE
  //seleccion del input submit (boton) mediante el atributo "data" en este caso "data-form(de formulario)-btn(boton)" => "data-form-btn".
  const btn = document.querySelector("[data-form-btn]");

  const createTask = (event) => {
    //funcion crear tarea, mediante "arrow function" (funcion anonima).
    event.preventDefault(); //evita comportamiento por defecto.
    const input = document.querySelector("[data-form-input]"); //selecciona el "input text" mediante el atributo "data" => data-form-input.
    const value = input.value; //captura del valor (value) del "input text".
    const list = document.querySelector("[date-list]"); //elemento padre ("ul") que se le va a crear el elemento (mediante appenchild).
    const task = document.createElement("li"); //creación del elemento "li".
    task.classList.add("card"); //agregado de clase al lemento "li" creado.
    input.value = ""; //reiniciar el contenido del input text dejandolo vacio.
    const taskContent = document.createElement("div"); //creando elemento padre "div".
    taskContent.appendChild(checkComplete()); //agregado del elemento hijo "checkComplete".
    const titleTask = document.createElement("span"); //creando el elemnto span que contiene el "value" ingresado.
    titleTask.classList.add("task"); //agregando clase "task" al span "titleTask" creado.
    titleTask.innerText = value; //agregandole el "value" ingresado en el input al "task" creado.
    taskContent.appendChild(titleTask);
    const content = `<i class="fas fa-trash-alt trashIcon icon"></i>`; //contenido, etiqueta que sera agregada al DOM entre "backticks".
    //task.innerHTML = content; //el contenido que tendra el nuevo elemento creado.
    task.appendChild(taskContent); //el contenido que tendra el nuevo elemento "li" creado.
    task.appendChild(deleteIcon()); //agregado icono de borrar.
    list.appendChild(task); //agregado del nuevo elemento "li" al elemento padre ("ul").
  };

  btn.addEventListener("click", createTask); //escuchador de evnto, al hacer click en el boton (btn) se ejecutara la función "createTask".
})(); //cerrando IIFE
