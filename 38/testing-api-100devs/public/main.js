const deletePark = document.querySelectorAll('.fa-trash')
const thumbText = document.querySelectorAll('.fa-thumbs-up')

Array.from(deleteText).forEach((element)=>{
    element.addEventListener('click', deletePark)
})

Array.from(thumbText).forEach((element)=>{
    element.addEventListener('click', addLike)
})

async function deletePark(){
    const pName = this.parentNode.childNodes[1].innerText
    const pAddress = this.parentNode.childNodes[3].innerText
    try{
        const response = await fetch('deletePark', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'parkNameS': pName,
                'parkAddressS': pAddress,
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.error(err)
    }
}

async function addLike(){
    const pName = this.parentNode.childNodes[1].innerText
    const pAddress = this.parentNode.childNodes[3].innerText
    const tLikes = Number(this.parentNode.childNodes[5].innerText)
    try{
        const response = await fetch('addOneLike', {
            methode: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'parkNameS': pName,
                'parkAddressS': pAddress,
                'likesS': tLikes
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()
        }catch(err){
        console.error(err)
    }
}