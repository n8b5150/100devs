function removeExclamationMarks(s) {
    return s.split('!').join('')


    //codewars does not accept replaceAll
    //return s.replaceAll('!','')
  }

  console.log(removeExclamationMarks("Hello World!!!"))
  console.log(removeExclamationMarks("LktrCPogBm!gfnLTHQBgMOZjvHNWsQi!VeoPcNpblZ"))