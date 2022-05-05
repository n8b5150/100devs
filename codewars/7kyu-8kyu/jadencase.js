
String.prototype.toJadenCase = function () {
    let arr = this.split(' ')
    let arr2 = arr.map( (e,i) => e[0].toUpperCase()+e.slice(1) )
    return arr2.join(' ')
  };


//best answer
String.prototype.toJadenCase = function () { 
    return this.split(" ").map(function(word){
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  }