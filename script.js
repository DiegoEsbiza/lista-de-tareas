import { addTask } from "./components/addTask.js";

(() => {
  //abriendo IIFE
  //seleccion del input submit (boton) mediante el atributo "data" en este caso "data-form(de formulario)-btn(boton)" => "data-form-btn".
  const btn = document.querySelector("[data-form-btn]");

  btn.addEventListener("click", addTask); //escuchador de evnto, al hacer click en el boton (btn) se ejecutara la función "createTask".
})(); //cerrando IIFE
