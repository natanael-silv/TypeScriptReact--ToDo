import { FaTrashAlt } from "react-icons/fa";
import { ITask } from "../../Interfaces";

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}
const List = ({ task, completeTask }: Props) => {
  return (
    <div className="toDoContainer__tasks">
      <div className="toDoContainer__item">
        <input type="checkbox" className="toDoContainer__checkbox" />
        <div className="toDoContainer__txt">{task.taskName}</div>
      </div>

      <button
        onClick={() => {
          completeTask(task.taskName);
        }}
      >
        <FaTrashAlt />
      </button>
    </div>
  );
};

export default List;
