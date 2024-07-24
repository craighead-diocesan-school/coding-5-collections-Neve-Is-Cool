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
  alert(subjects)
}

function addSubject() {
  let newSubject = ''
  while (newSubject != 'stop') {
  newSubject = prompt ('What subject would you like to add')
  if (newSubject != 'stop') {
  subjects.push(newSubject)
  }
} 
}

function removeSubject() {
  let index = prompt ('Select an index that you wish to remove from the list.' )
  let arraylength = subjects.length
  if (index >= 0 && index <= arraylength) {
    subjects.splice(index, 1)
  } else {
    let = prompt ('That is an invalid numberm The Array goes from 0 to ' + arraylength + 'moving down the list')
  }
}