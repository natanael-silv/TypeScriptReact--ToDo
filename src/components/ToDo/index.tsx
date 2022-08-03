import React, { FC, ChangeEvent, useState, useEffect } from "react";
import "./ToDo.scss";
import { ITask } from "../../Interfaces";

import List from "../List";

const ToDo: FC = () => {
  const [task, setTask] = useState<string>("");
  const [toDo, setToDo] = useState<ITask[]>([]);

  const handeChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTask(event.target.value);
  };
  const addTask = (): void => {
    if (task === "") {
      alert("Please add a task to submit");
      return;
    }

    const newTask = { taskName: task };

    setToDo([...toDo, newTask]);
    localStorage.setItem("tasks", JSON.stringify([...toDo, newTask]));
    setTask("");
  };

  useEffect(() => {
    if (localStorage.getItem("tasks")) {
      const storedList = JSON.parse(localStorage.getItem("tasks") || "");
      setToDo(storedList);
    }
  }, []);
  const completeTask = (taskNameToDelete: string): void => {
    const deleted = toDo.filter((task) => {
      return task.taskName != taskNameToDelete;
    });
    setToDo(deleted);
    localStorage.setItem("tasks", JSON.stringify(deleted));
  };
  return (
    <div className="toDoContainer">
      <div className="toDoContainer__inputArea">
        <input
          value={task}
          type="text"
          placeholder="Enter a new task"
          className="toDoContainer__input"
          onChange={handeChange}
        />
        <button className="toDoContainer__btn" onClick={addTask}>
          Add
        </button>
      </div>

      {toDo.map((task: ITask, key: number) => {
        return <List key={key} task={task} completeTask={completeTask} />;
      })}
    </div>
  );
};

export default ToDo;
