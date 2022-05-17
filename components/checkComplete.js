const checkComplete = () => {
  //funcion crear el elemento "i" (icono check).
  const i = document.createElement("i"); //creando la etiqueta
  i.classList.add("far", "fa-check-square", "icon"); //agregando clases.
  i.addEventListener("click", completeTask); //agregando escuchador de evento con la funcion "completeTask" (tarea completa).
  return i; //retornando el valor del icono.
};

const completeTask = (event) => {
  const element = event.target;
  element.classList.toggle("fas");
  element.classList.toggle("completeIcon");
  element.classList.toggle("far"); //
};

export default checkComplete;
