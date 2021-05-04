import Project from '../models/Project';
import Task from '../models/Task'
export async function createTask(req, res) {
    try {
        const { name, done, projectid } = req.body
        console.log("antes de crear")
        let newTask = await Task.create({
            name,
            done,
            projectid
        }, {
            fields: ['name', 'done', 'projectid']
        });
        console.log("despues")
        if (newTask) {
            return res.json({ message: "new task created", data: newTask })
        }
    } catch (e) { 
        return res.json({error:e});
    }
}

export async function getTasks(req, res) {
    const tasks = await Task.findAll({
        attibutes:['id','projectId','name','done'],
        order:[
            ['id','DESC']
        ]

    })
    res.json({tasks})
}

export async function updateTask(req, res) {
  const { id } = req.params;
  const {name,done, projectid} = req.body

//   const task = await Task.findOne({
//     attibutes : ['name','done','projectid','id'], //obtener los datos
//     where:{ id }
//   })
  const updatedTask = await Task.update({
      name,
      done,
      projectid
  },{
      where:{id}
  })
  res.json({
      message:'Task updated',
      updatedTask
  })
}

export async function deleteTask(req, res) {
    const {id} =  req.params
    const deleteRowCount = await Task.destroy({
        where:{
            id
        }
    })
    res.json({message:'task deleted'})
}

export async function getOneTask(req, res) {
    const {id} =  req.params
    const task = await Task.findOne({
        where:{id}
    })
    return res.json({data:task})
}

export async function getTasksByProject(req, res) {
    const {projectid} = req.params
    // const tasksByProject = await Task.findAll({
    //     where:{
    //         projectid
    //     }
    // })
    /*INDICIANDOLE ALGUNOS ATRIBUTOS */
    const tasksByProject = await Task.findAll({
        attributes:['id','name'],
        where:{
            projectid
        }
    })
    return res.json({tasks:tasksByProject})
}