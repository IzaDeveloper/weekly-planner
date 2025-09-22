import React, { useState } from "react";
import ThemeToggle from '../components/ThemeToggle';
import DayColumn from "../components/DayColumn";
import TaskModal from "../components/TaskModal";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { useTaskStore } from "../store/TaskStore";
import AddTask from "../components/AddTask";
import { useTranslation } from "react-i18next";

function Planner() {
  const moveTask = useTaskStore((state) => state.moveTask);

  const [taskToEdit, setTaskToEdit] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { t } = useTranslation();

  const daysObj = t("days", { returnObjects: true });

  const daysArray = Object.entries(daysObj);

  const handleDrop = (e, day) => {
    const taskId = e.dataTransfer.getData("text/plain");
    moveTask(taskId, day);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleEditTask = (task) => {
    setTaskToEdit(task);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setTaskToEdit(null);
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex gap-5 pb-5 flex-wrap justify-between flex-col-reverse sm:flex-row">
        <AddTask onClickProps={() => {
          setTaskToEdit(null);
          setIsModalOpen(true);
        }} />

        <div className="flex justify-between sm:justify-end items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {daysArray.map(([dayKey, dayLabel]) => (
          <div
            key={dayKey}
            onDrop={(e) => handleDrop(e, dayKey)}
            onDragOver={handleDragOver}
          >
            <DayColumn dayKey={dayKey} dayLabel={dayLabel} onEditTask={handleEditTask} />
          </div>
        ))}
      </div>

      <TaskModal isOpen={isModalOpen} onClose={handleCloseModal} taskToEdit={taskToEdit} />
    </div>
  );
};

export default Planner;