import TaskCard from "./TaskCard";
import { useTaskStore } from "../store/TaskStore";

function DayColumn({ dayKey, dayLabel, onEditTask }) {
  const { tasks } = useTaskStore();

  const dayTasks = tasks.filter((task) => task.day === dayKey);

  return (
    <div className="w-full min-h-[100px] bg-zinc-200 dark:bg-zinc-500 rounded-lg p-2">
      <h2 className="font-bold text-lg mb-2">{dayLabel}</h2>
      <div className="space-y-2 min-h-[100px]">
        {dayTasks.map((task) => (
          <TaskCard key={task.id} task={task} onEdit={onEditTask} />
        ))}
      </div>
    </div>
  );
}

export default DayColumn;
