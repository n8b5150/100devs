// Example fetch using DnD5eAPI - place subclasses in ul
// https://www.dnd5eapi.co/docs/#overview--getting-started
document.querySelector('button').addEventListener('click', getFetch)
const spell = document.getElementById('spell')
const cls = document.getElementById('cls')
const subCls = document.getElementById('subCls')
const iframe = document.querySelector('iframe')
const ul = document.querySelector('ul')
const li = document.createElement('li')



function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        displayResponse(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function displayResponse(data){
    spell.innerText = data.name
    cls.innerText = concatArray(data.classes)
    data.subclasses.length == 0 ? ul.innerText = 'None' : ul.innerHTML = fillList(data.subclasses)
}

function concatArray(arr){
    let classesList = []
    for ( i = 0; i < arr.length; i++){
        console.log(arr[i].name)
        classesList.push(arr[i].name)
    }
    return classesList.join(' & ')
}

function fillList(arr){
    let listItems = ''
    for ( i = 0; i < arr.length; i++){
        console.log(arr[i].name)
        listItems+=`<li>${arr[i].name}</li>`
        // make this work?
        // li.textContent = arr[i].name
        // ul.appendChild(li)
    }
    return listItems
}