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
  let searchTarget = prompt ('What number would you like to search the array for...')
  let searchResult = false

  for (let currentNumber of numberArray) {
    if (currentNumber == searchTarget) {
      searchResult = true
    }
  }

  if (searchResult == true) {
    alert ('Welcome, you are correct')
  } else {
    alert ('Failure, number not found')
  }


}
