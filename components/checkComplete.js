const checkComplete = () => {
  //funcion crear el elemento "i" (icono check).
  const i = document.createElement("i"); //creando la etiqueta
  i.classList.add("far", "fa-check-square", "icon"); //agregando clases.
  i.addEventListener("click", completeTask); //agregando escuchador de evento con la funcion "completeTask" (tarea completa).
  return i; //retornando el valor del icono.
};

const completeTask = (event) => {
  //creando funcion para que cambie de color clickear en el target (el icono "i")
  const element = event.target; //indicando que la funcion se ejecutara al clickear en el taget
  element.classList.toggle("fas"); //mediante toggle se cambiara el color del icono al clickear en el
  element.classList.toggle("completeIcon"); //clase css para cambiar el color al clickear en el icono "i"
  element.classList.toggle("far"); //mediante toggle se cambiara el color del icono al clickear en el
};

export default checkComplete;
