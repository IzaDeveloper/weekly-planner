import React, { useEffect, useState } from "react";
import { useTaskStore } from "../store/TaskStore";
import { v4 as uuidv4 } from "uuid";
import { useTranslation } from "react-i18next";

function TaskModal({ isOpen, onClose, taskToEdit }) {
  const { t } = useTranslation();
  const addTask = useTaskStore((state) => state.addTask);
  const updateTask = useTaskStore((state) => state.updateTask);

  const daysObj = t("days", { returnObjects: true });

  const days = Object.entries(daysObj).map(([key, label]) => ({
    key,
    label,
  }));

  const [title, setTitle] = useState("");
  const [day, setDay] = useState("mon");

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDay(taskToEdit.day);
    } else {
      setTitle("");
      setDay("mon");
    }
  }, [taskToEdit]);

  const handleSave = () => {
    if (!title.trim()) return;

    if (taskToEdit) {
      updateTask({ ...taskToEdit, title, day });
    } else {
      addTask({ id: uuidv4(), title, day });
    }
    setTitle("");
    setDay("mon");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center z-10">
      <div className="bg-zinc-100 dark:bg-gray-700 w-full max-w-md rounded shadow-lg p-6">

        <div className="flex items-center justify-between border-b pb-3 rounded-t dark:border-gray-600 border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {taskToEdit ? t("edit_task") : t("new_task")}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            aria-label={t("close_modal")}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>

        <form className="py-5 flex flex-col gap-5" onSubmit={e => e.preventDefault()}>
          <div>
            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              {t("title")}
            </label>
            <input
              id="title"
              type="text"
              placeholder={t("placeholder_title")}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-gray-200 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>

          <div>
            <label htmlFor="day" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              {t("day_of_week")}
            </label>
            <select
              id="day"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              className="bg-gray-200 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:placeholder-gray-400 dark:text-white"
            >
              {days.map(({ key, label }) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </form>

        <div className="flex justify-end gap-2">
          <button
            className="py-2.5 px-5 text-sm font-medium text-white focus:outline-none bg-gray-500 rounded-lg hover:bg-gray-600 dark:bg-gray-900 dark:hover:bg-gray-800"
            onClick={onClose}
          >
            {t("cancel")}
          </button>

          <button
            className="py-2.5 px-5 text-sm font-medium text-white focus:outline-none bg-blue-500 rounded-lg hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-600"
            onClick={handleSave}
          >
            {taskToEdit ? t("save_changes") : t("add_task")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskModal;