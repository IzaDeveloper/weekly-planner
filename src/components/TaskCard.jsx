import { PencilSimpleIcon, TrashIcon } from "@phosphor-icons/react";
import { useTaskStore } from "../store/TaskStore";
import { useTranslation } from "react-i18next";

function TaskCard({ task, onEdit }) {
  const deleteTask = useTaskStore((state) => state.deleteTask);
  const { t } = useTranslation();

  return (
    <div
      className="bg-white dark:bg-zinc-900 p-2 shadow rounded cursor-move flex justify-between items-center"
      draggable
      onDragStart={(e) => {
        e.dataTransfer.setData("text/plain", task.id);
      }}
    >
      <p className="flex-1 text-sm text-gray-800 dark:text-gray-100">{task.title}</p>

      <div className="flex items-center gap-2 ml-2">
        {onEdit && (
          <button
            className="text-blue-500 hover:text-blue-700"
            onClick={() => onEdit(task)}
            aria-label={t("edit")}
            title={t("edit")}
          >
            <PencilSimpleIcon size={20} />
          </button>
        )}

        <button
          className="text-red-500 hover:text-red-700"
          onClick={() => deleteTask(task.id)}
          aria-label={t("delete")}
          title={t("delete")}
        >
          <TrashIcon size={20} />
        </button>
      </div>
    </div>
  );
}

export default TaskCard;