document.getElementById('purple').onclick = partyPurple
document.getElementById('green').onclick = partyGreen
document.getElementById('blue').onclick = partyBlue
document.getElementById('grad').onclick = partyGrad
document.getElementById('rad').onclick = partyRadGrad
document.getElementById('rain').onclick = rainbow


function partyPurple() {
  document.querySelector('div').classList.remove('wrapper')
  document.querySelector('body').style.background = 'rgba(241,63,247,1)'
  document.querySelector('body').style.color = 'white'
}

function partyGreen() {
  document.querySelector('div').classList.remove('wrapper')
  document.querySelector('body').style.background = 'rgba(0,253,81,1)'
  document.querySelector('body').style.color = 'white'
}

function partyBlue() {
  document.querySelector('div').classList.remove('wrapper')
  document.querySelector('body').style.background = 'rgba(0,254,255)'
  document.querySelector('body').style.color = 'white'
}

function partyGrad() {
  document.querySelector('div').classList.remove('wrapper')
  document.querySelector('body').style.background = 'linear-gradient(to top,rgba(0,254,255,1),rgba(255,254,0,1))'
  document.querySelector('body').style.color = 'black'
}

function partyRadGrad() {
  document.querySelector('div').classList.remove('wrapper')
  document.querySelector('body').style.background = 'radial-gradient(rgba(255,0,255,1) 1%,rgba(0,255,255,1) 60%, rgba(0,255,255,1))'
  document.querySelector('body').style.color = 'black'
}

function rainbow() {
  document.querySelector('body').style.background = ''
  document.querySelector('div').classList.add('wrapper')
  document.querySelector('body').style.color = 'black'
}