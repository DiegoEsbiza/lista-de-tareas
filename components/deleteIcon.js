const deleteIcon = () => {
  //creacion del icono de borrar mediante funcion flecha
  const i = document.createElement("i"); //creando el elemnto icono
  i.classList.add("fas", "fa-trash-alt", "icon"); //asignando clases al icono
  i.addEventListener("click", deleteTask); //asignando evento click para llamar a la funcion deleteTAsk al clickear

  return i; //devolver el valor del elemento "i" (icono) creado
};

const deleteTask = (event) => {
  //funcion borrar tarea
  const parent = event.target.parentElement; //seleccionar mediante el "target" al "elemento padre" (en este caso el "li class="card" creado)
  parent.remove(); //remover el elemento padre
};

export default deleteIcon;
