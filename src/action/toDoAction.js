import{ADD, UPDATE,COMPLETE,DELETE,} from "./type"


export const addToDo = (input) => {
  return (
    {
      type: ADD,
      payload: input
    }
  );
}

export const deleteToDo = (id) => {
  return (
    {
      type: DELETE,
      payload: id
    }
  );
}

export const completeToDo = (id) => {
  return (
    {
      type: COMPLETE,
      payload: id
    }
  );
}