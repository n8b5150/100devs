//Example fetch using pokemonapi.co 0385472579
document.querySelector('button').addEventListener('click', getFetch)
document.querySelector('h2').innerText = localStorage.getItem('books')
let books
function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://openlibrary.org/api/books?bibkeys=ISBN:${choice}&jscmd=data&format=json`
  
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        // if(data.media_type === "image"){
        //   document.querySelector('img').src = data.hdurl
        // }else if(data.media_type === 'video'){
        //   document.querySelector('iframe').src = data.url
        // }else{
        //   alert('Media Not Supported - Contact NASA IMMEDIATLY')
        // }
        if (!localStorage.getItem('books')){
          localStorage.setItem('books', data[`ISBN:${choice}`].title)
        } else{
          books = localStorage.getItem('books')  + " ; " +  data[`ISBN:${choice}`].title
        } 
        document.querySelector('h3').innerText = localStorage.getItem('books')
        localStorage.setItem('books', books)
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

