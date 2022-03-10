import { Router } from "express";
import {
    renderTasks,
    createTask,
    renderEditTask,
    editTask,
    deleteTask,
    taskToggleDone,
} from "../controllers/task.controller";

const router = Router();

router.get("/", renderTasks);

router.post("/tasks/add", createTask);

router.get("/editTask/:id", renderEditTask);

router.post("/editTask/:id", editTask);

router.get("/deleteTask/:id", deleteTask);

router.get("/toggleDoneTask/:id", taskToggleDone);

export default router;
