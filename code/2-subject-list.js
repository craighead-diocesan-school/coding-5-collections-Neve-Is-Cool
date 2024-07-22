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
 while (newSubject != 'stop') {
  let newSubject = prompt ('What subject would you like to add')
  // add a new item to the end of the subjects array
  subjects.push(newSubject)
} 


}

function removeSubject() {
  let index = prompt ('Select an index that you wish to remove from the list. The first is numebered 0, the second is 1, the third is 2, and so forth.')

  // remove 1 item at the index position of the subjects array
  subjects.splice(index, 1)
}


