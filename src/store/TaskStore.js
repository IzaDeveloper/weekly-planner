import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useTaskStore = create(persist((set) => ({
    tasks: [],
    addTask: (task) =>
        set((state) => ({
            tasks: [...state.tasks, task],
        })),

    moveTask: (taskId, newDay) =>
        set((state) => ({
            tasks: state.tasks.map((task) =>
                task.id === taskId ? { ...task, day: newDay } : task
            ),
        })),

    updateTask: (updatedTask) =>
        set((state) => ({
            tasks: state.tasks.map((task) =>
                task.id === updatedTask.id ? updatedTask : task
            ),
        })),

    deleteTask: (taskId) =>
        set((state) => ({
            tasks: state.tasks.filter((task) => task.id !== taskId),
        })),
}), {
    name: "planner-tasks",
}));