export const filterTaskList = (taskArray, boolCase) =>
  taskArray.filter(task => task.isChecked === boolCase);

export const getfilteredListLenght = (taskArray, boolCase) =>
  taskArray.filter(task => task.isChecked === boolCase).length;
