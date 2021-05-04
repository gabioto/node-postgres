import Project from '../models/Project'

export async function createProject(req, res) {
    try {
        const { name, priority, description, deliverydate } = req.body
        let newProject = await Project.create({
            name,  //= name:name
            priority,
            description,
            deliverydate
        }, {
            fields: ['name', 'priority', 'description', 'deliverydate']
        });
        if (newProject) {
            return res.json({ message: 'porjct created succesfully', data: newProject });
        }
    } catch (e) {
        res.status(500).json({
            message: 'something goes wrong',

        })
        console.log(e)
    }
}

export async function getProjects(req, res) {
    try {
        const projects = await Project.findAll();
        res.json({
            data: projects
        });
    } catch (e) {

    }
}

export async function getOneProject(req,res){
    const {id} = req.params
    const project = await Project.findOne({
        where:{
            id
        }
    });
    res.json({
        data:project
    })
}

export async function deleteProject(req,res){
    const {id} = req.params
    const deleteRowCount = await Project.destroy({
        where:{
            id
        }
    });
    res.json({
        message:"project elimindo satisfactoriamente",
        count: deleteRowCount
    })
}

export async function udpateProject(req,res){
    const {id} = req.params
    const { name, priority, description, deliverydate } = req.body

    const projects = await Project.findAll ({
        attributes: ['id','name','priority','description','deliverydate'],
        where:{
            id
        }
    })
    console.log(projects)
    if(projects.length > 0){
        projects.forEach(async project => {
            await project.update({
                name,
                priority,
                description,
                deliverydate
            })
        })
    }
    return res.json({
        message:'projet updated successfully',
        data:projects 
    })
}