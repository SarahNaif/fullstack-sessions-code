import { NextFunction, Response, Request } from "express";
import todoData from "../models/todos";

export const getAllTodos = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.send(todoData);
};

export const getOneTodos = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  var newArray = todoData.todoData.filter((el) => el.id == id);
  res.send(newArray[0]);
};

export const putTodo = (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  todoData.todoData.forEach((ele, i) => {
    if (ele.id == id) {
      todoData.todoData[i] = req.body;
    }
  });

  return res.json({ message: `The task with ID ${id} has been updated` });
};

export const createTodos = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const body = req.body;
  body.isDone = false;
  todoData.todoData.push(body);
  return res.json({ message: "The Task has been added" });
};
export const deleteTodos = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  const array = todoData.todoData.findIndex((t) => t.id == id);
  todoData.todoData.splice(array, 1);
  return res.json({ message: `The Task with ID ${id} has been deleted` });
};
