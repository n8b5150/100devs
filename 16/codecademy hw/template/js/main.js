let raceNumber = Math.floor(Math.random() * 1000)

let registeredEarly = true

raceNumber >=500 ? registeredEarly = true
: registeredEarly = false

let ageRunner = Math.floor(Math.random() * 100) 

if (ageRunner >= 18 && registeredEarly === true) { raceNumber+=1000 }

console.log(`rN: ${raceNumber}  rE: ${registeredEarly}  aR: ${ageRunner}`)

ageRunner >= 18 && registeredEarly === true ? console.log(`Bib number ${raceNumber}, your race starts at 9:30am.`)
: ageRunner >= 18 && registeredEarly === false ? console.log(`Bib number ${raceNumber}, your race starts at 11:00am.`)
: console.log(`Bib number ${raceNumber}, your race starts at 12:30pm.`)