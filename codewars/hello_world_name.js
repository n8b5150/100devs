function hello(name) {
    return name ? `Hello, ${name[0].toUpperCase()+name.slice(1,name.length).toLowerCase()}!`: `Hello, World!`
  }

  //best answer
  const hello = s =>
  `Hello, ${s ? (s[0].toUpperCase() + s.slice(1).toLowerCase()) : 'World'}!`;