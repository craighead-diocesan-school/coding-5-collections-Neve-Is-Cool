// ##################################
// ##### ----- Future Job ----- #####
// ##################################

let jobs = [
  'astronaut',
  'firefighter',
  'police officer',
  'space doctor',
  'teacher',
  'f1 engineer'
]

const randomNumberGenerator = 5

function getJob() {
  //Generates a random career out of array and outputs the career.
  let index = Math.floor (Math.random() *randomNumberGenerator)
  alert('Your future job will be ' + jobs[index])

}
