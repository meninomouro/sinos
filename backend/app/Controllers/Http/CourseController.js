'use strict'
const Course = use('App/Models/Course')
const Musician = use('App/Models/Musician')

class CourseController {
  async store({ params, request }){
    const musician_id = params.id
    const musician = await Musician.find(musician_id)

    if(musician){
      let courseData = request.all()
      courseData["musician_id"] = musician["id"]
      const course = Course.create(courseData)
      
      return course
    } else{
      return "Invalid musician"
    }
  }
  async edit ({ params, request }){
    const course = await Course.findOrFail(params.id)
    course.name = request.input('name')
    await course.save()

    return course

  }
}

module.exports = CourseController
