export const filterTaskList = (taskArray, boolCase) =>
  taskArray.filter(task => task.isChecked === boolCase);

export const getfilteredListLength = (taskArray, boolCase) =>
  taskArray.filter(task => task.isChecked === boolCase).length;
