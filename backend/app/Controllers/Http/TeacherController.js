'use strict'
const Teacher = use('App/Models/Teacher')
const User = use('App/Models/User')

const Database = use('Database')

class TeacherController {
    async store ({ request }){
        const query = Database.table('projects')
        const key = request.only('key')
        const project = await query.where('key', key["key"]).first()

        const Userdata = request.only(['name', 'password', 'email'])

        if (project){
        
            let teacherData = await request.only(['name', 'last_name', 'email', 'instruments'])
            teacherData['project_name'] = project.name
            teacherData['project_id'] = project.id
            teacherData['project_key'] = key["key"]
        
            const teacher = await Teacher.create(teacherData)
            const user = await User.create(Userdata)
        
            return teacher
        }else{
            return "Insert a valid key"
        }
    }
}

module.exports = TeacherController
