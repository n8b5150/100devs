function remove(str) {
    return str[str.length-1] == '!' ? str.slice(0,str.length-1) : str
  }

  //best answer without regex

  function remove1(s) {
    return s.endsWith('!') ? s.slice(0, -1) : s;
  }