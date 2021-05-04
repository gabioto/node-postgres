import {Router} from "express";
const router=  Router();
import {createProject,getProjects,getOneProject,deleteProject,udpateProject} from '../controllers/project.controller'
//api/projects
router.post("/",createProject);
router.get("/",getProjects);
router.get("/:id",getOneProject);
router.delete("/:id",deleteProject);
router.put('/:id',udpateProject)
export default  router;
