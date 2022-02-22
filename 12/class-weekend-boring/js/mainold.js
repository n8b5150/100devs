document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase()

  //Conditionals go here

  if (day === "tuesday" || day === "thursday") {
    document.querySelector('#placeToSee').innerText = 'Class Day!'
  }else if (day === "saturday" || day === "friday"){
    document.querySelector('#placeToSee').innerText ='Weekend!'
  }else {
    document.querySelector('#placeToSee').innerText ='Boring!'
  }
}
