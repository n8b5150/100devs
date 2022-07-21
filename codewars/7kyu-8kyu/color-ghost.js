// Color Ghost
// Create a class Ghost

// Ghost objects are instantiated without any arguments.

// Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

// ghost = new Ghost();
// ghost.color //=> "white" or "yellow" or "purple" or "red"


// class Something {
//     constructor(defaultFoo) {
//         this._foo = defaultFoo;
//     }
//     get Foo() { return this._foo; }
//     set Foo(value) { this._foo = value; }
// }

// https://www.codewars.com/kata/53f1015fa9fe02cbda00111a

class Ghost {
    constructor(color){
        this.color = this.color()
    }
    color() {
        let num = Math.floor(Math.random() * 4)
        switch (num) {
            case 0:
                return 'red';
            case 1:
                return 'purple';
            case 2:
                return 'yellow';
            case 3:
                return 'white';
          }
    }
}

// function Ghost() {
//     this.color = this.randomColor,
//     this.randomColor = function() {
//         let num = Math.floor(Math.random() * 4)
//         switch (num) {
//             case 0:
//                 return 'red';
//             case 1:
//                 return 'purple';
//             case 2:
//                 return 'yellow';
//             case 3:
//                 return 'white';
//           }
//     }
// }

let ghost = new Ghost()
let ghost1 = new Ghost()
let ghost2 = new Ghost()
let ghost3 = new Ghost()

console.log(ghost.color)
console.log(ghost1.color)
console.log(ghost2.color)
console.log(ghost3.color)

// best answers
// class Ghost {
//     constructor() {
//       this.color = [`red`, `yellow`, `purple`, `white`][Math.random() * 4 ^ 0];
//     }
//   }

//   var Ghost = function() {
//     var a = ['white', 'yellow', 'purple', 'red'];
//     this.color = a[Math.floor(Math.random() * a.length)];
//   };

//   class Ghost {
//     constructor(){
//       this.colors = ["white", "yellow", "purple", "red"]
//     }
//     get color(){
//       return this.colors[Math.floor(Math.random() * this.colors.length)]
//     }
//   };