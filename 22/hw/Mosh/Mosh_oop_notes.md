Object Oriented Programming 
        Combines related variables (properties) and functions (methods)
            localStorage {
                item
                setItem()
                removeItem()
            }

    Encapsulation - group related variables and functions together, reduce complexity, increase reusability
        Method has no parameters because the properties are highly related (all inside the object)
        let employee = {
            baseSalary: 30_000,
            overtime: 10,
            rate: 20,
            getWage: function() {
                return this.baseSalary + (this.overtime * this.rate)
            }
        }
        employee.getWage

    Abstraction - reduce complexity, isolate impact of changes
        Hides some methods and properties from outside world
        Makes interface simpler
        Reduce impact of change

    Inheritance - eliminate redundant code
        Eliminate redundancy
        


    Polymorphism - refactor ugly switch/case statements
        Eliminate switch/case, etc



--------------------
Creating Objects
    Object Literals 


Factories and Constructors
    constructor use 'this'

Primitives and Reference Types
    Primitives: Number, String, Boolean, Symbol, undefined, null
    Reference: Object, Function, Array (functions and arrays are objects)

Working with Properties


Private Properties
    scope
    closure

Getter/Setters


-------------
Stopwatch
start()
stop()
reset()
duration
