'use strict'
const Course = use('App/Models/Course')
const Lesson = use('App/Models/Lesson')

class LessonController {
    async store({ params, request }){
        const course = await Course.findOrFail(params.id)
        let lessonData = request.only(['title', 'description', ])
    }
}

module.exports = LessonController
