// #####################################
// ##### ----- Number Search ----- #####
// #####################################

let numberArray = [
  1,
  100,
  1000,
  10000,
  1234567890,
  31243546760,
  123456789098,
  9999999999999
]

function searchNumbers() {
  //asks the user what index they want within the array.
  let searchTarget = prompt ('What number would you like to search the array for...')
  let searchResult = false

  for (let currentNumber of numberArray) {
    //Finds whether the number they selected is within the array.
    if (currentNumber == searchTarget) {
      searchResult = true
    }
  }

  if (searchResult == true) {
    //Alerts whether the searchTarget is within the array and says 'Welcome, you are correct' otherwise says 'Failure, number not found'.
    alert ('Welcome, you are correct')
  } else {
    alert ('Failure, number not found')
  }


}
