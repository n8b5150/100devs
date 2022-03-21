function abbrevName(name){
    let arrName = name.split(' ')
    let firstName = arrName[0]
    let secondName = arrName[1]
    console.log(arrName)
    console.log(firstName)
    console.log(secondName)
      // code away
   return firstName[0].toUpperCase()+'.'+secondName[0].toUpperCase()
  }

  console.log(abbrevName('Sam Harris'))

  //top answer
  function abbrevName(name){
    let nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
  }

  //concise
  function abbrevName(name){
    return name.split(' ').map(i => i[0].toUpperCase()).join('.')
}