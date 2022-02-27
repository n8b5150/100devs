//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

// document.querySelector('#check').addEventListener('click', check)

// function check() {

//   const day = document.querySelector('#day').value.toLowerCase()

//   if(day === "tuesday" || day === "thursday"){
//     document.querySelector('h2').innerText = "YOU HAVE CLASS"
//   }else if( day === "saturday" || day === "sunday"){
//     document.querySelector('').innerText = "Its The Weekend"
//   }else{
//     document.querySelector('').innerText = "BORING"
//   }

// }

document.querySelector('#check').addEventListener('click',check)
//array of elements with class daySelector
const daySelector = document.querySelectorAll('.daySelector')
//add event listener for enter key to each input with class daySelector
Array.from(daySelector).forEach(element => element.addEventListener('keypress', function(event){
  if (event.keyCode === 13){
  event.preventDefault()
  document.querySelector('#check').click()
  }
}))

function check() {
  if ( document.querySelector('#tuesday').checked === true || document.querySelector('#thursday').checked === true){
    document.querySelector('#placeToSee').innerText = "Class Day!"
  }else if ( document.querySelector('#wednesday').checked === true || document.querySelector('#monday').checked === true){
    document.querySelector('#placeToSee').innerText = "Boring!"
  }else if ( document.querySelector('#friday').checked === true || document.querySelector('#saturday').checked === true || document.querySelector('#sunday').checked === true){
    document.querySelector('#placeToSee').innerText = "Weekend!"
  }else {
    document.querySelector('#placeToSee').innerText = "Select something, will ya?!"
  }
}

// function check() {
//   const day = document.querySelector('#day').value.toLowerCase()
//   if ( day === 'tuesday' || day === 'thursday'){
//     document.querySelector('#placeToSee').innerText = "Class Day!"
//   }else if ( day === 'wednesday' || day === 'monday'){
//     document.querySelector('#placeToSee').innerText = "Boring!"
//   }else if ( day === 'friday' || day === 'saturday' || day === 'sunday'){
//     document.querySelector('#placeToSee').innerText = "Weekend!"
//   }else {
//     document.querySelector('#placeToSee').innerText = "Check yo spellin'!"
//   }
// }