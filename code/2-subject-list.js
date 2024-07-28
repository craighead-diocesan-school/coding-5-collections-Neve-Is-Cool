// ####################################
// ##### ----- Subject List ----- #####
// ####################################

let subjects = [
  'English',
  'Digital Technology',
  'Science',
  'Geography',
]

function showSubjects() {
  //Outputs the newest version of the list of subjects
  alert(subjects)
}

function addSubject() {
  //Asks the user which subject they would like to add, adds the subjects then continues asking until the user says 'stop'.
  let newSubject = ''
  while (newSubject != 'stop') {
  newSubject = prompt ('What subject would you like to add')
  if (newSubject != 'stop') {
  subjects.push(newSubject)
  }
} 
}

const minNumber = 0
const removesItem = 1

function removeSubject() {
  //Asks the user which index they would like to remove and either removes it, or if an invalid number is entered, it suggests to the user how the array works.
  let index = prompt ('Select an index that you wish to remove from the list.' )
  let arraylength = subjects.length
  if (index >= minNumber && index <= arraylength) {
    subjects.splice(index, removesItem)
  } else {
    let = prompt ('That is an invalid numberm The Array goes from 0 to ' + arraylength + 'moving down the list')
  }
}