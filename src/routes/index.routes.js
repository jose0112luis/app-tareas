import { Router } from "express";
import Task from "../models/Task";

const router = Router();

router.get("/", async (req, res) => {
    const tasks = await Task.find().lean();
    res.render('index', { tasks: tasks });
});

router.post('/tasks/add', async (req,res) => {
    try {
        const task = Task(req.body);
        await task.save();
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }
});

router.get("/about", (req,res) => {
    res.render('about');
});

router.get("/edit/:id", async (req,res) => {
    try {
        const task = await Task.findById(req.params.id).lean();
        res.render('edit', {task: task});
    } catch (error) {
        console.log(error);
    }
});

router.post('/edit/:id', async (req,res) => {
    const result = await Task.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/');
});

router.get('/delete/:id', async (req,res) => {
    const id = req.params.id;
    await Task.findByIdAndDelete(id);
    res.redirect('/');
});

export default router;