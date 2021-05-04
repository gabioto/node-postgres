import {Router} from "express";
const router=  Router();
import {createTask,getTasks,getTasksByProject,getOneTask,deleteTask,updateTask} from '../controllers/task.controller'

router.post("/",createTask);
router.get("/",getTasks);
router.get("/:id",getOneTask);
router.get("/project/:projectid",getTasksByProject);
router.delete("/:id",deleteTask);
router.put("/:id",updateTask);
export default  router;