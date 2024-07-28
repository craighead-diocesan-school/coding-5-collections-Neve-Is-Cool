// #####################################
// #### ----- Subject Details ----- ####
// #####################################

let subject = {
  name: 'DigiTech',
  room: 'Room 9',
  students: 150,
  teacher: 'Random middle-aged man'
}

function showSubject() {
  //Outputs the subjects name and classroom and teacher together.
  alert(subject.name + ' in ' + subject.room + ' with ' + subject.teacher )
}

function changeSubject() {
  //Allows the user to change the subject from DigiTech to Typing Skills.
  let newName = 'Typing Skills'

  subject.name = newName
}

function changeTeacher () {
  //Allows the user to enter the name of their teacher.
let newTeacher = prompt ("What's your teachers name?")

subject.teacher = newTeacher

}