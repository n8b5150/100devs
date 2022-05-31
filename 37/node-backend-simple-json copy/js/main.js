document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){

  //const userName = document.querySelector("#userName").value;
  //const res = await fetch(`/api?student=${userName}`)
  const res = await fetch(`/api`)
  const data = await res.json()

  console.log(data);
  document.querySelector("#mathStatus").textContent = data.number
  document.querySelector("#coinStatus").textContent = data.status
  document.querySelector("img").src = data.image
}