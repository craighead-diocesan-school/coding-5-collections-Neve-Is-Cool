// ####################################
// ##### ----- Subject List ----- #####
// ####################################

let subjects = [
  'English',
  'Digital Technology',
  'Science',
  'Geography',
]

//Outputs the newest version of the list of subjects
function showSubjects() {
  let arrayLength = subjects.length
  let count = 0
  let subjectList = ''
  while (count<arrayLength) {
  subjectList = subjectList + subjects[count] + ', '
  count = count + 1
  }
  alert(subjectList)
} 

function addSubject() {
  //Asks the user which subject they would like to add, adds the subjects then continues asking until the user says 'stop'.
  let newSubject = ''
  while (newSubject != 'stop') {
    newSubject = prompt ("What subject would you like to add, please say 'stop' when you are finished adding subjects")
    if (newSubject != 'stop') {
      subjects.push(newSubject)
    }
  } 
}

function removeSubject() {
  //Asks the user which index they would like to remove and either removes it, or if an invalid number is entered, it suggests to the user how the array works.
  showSubjects()
  let index = prompt('Type the number in the list that you wish to remove')
  let arrayLength = subjects.length
  index = Number(index)
  index = index - 1

  if (index >= 0 && index <= arrayLength) {
    subjects.splice(index, 1)
    } else {
    alert('Something went wrong :(')
  }
}