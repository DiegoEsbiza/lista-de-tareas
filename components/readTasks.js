import { createTask } from "./addTask.js";
export const readTasks = () => {
  const list = document.querySelector("[date-list]");
  console.log(list);
  const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
  console.log(taskList);

  taskList.forEach((task) => {
    list.appendChild(createTask(task));
  });
};
