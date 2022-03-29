Part 1: Object literal notation
    let user = {
        name: "John",
        age: 30,
        "likes birds": true //multiword property name must be inside quotes
    }

    delete user.age //deletes age property

    user["likes birds"] = false //use brackets and quotes to change/add multiword properties

    let key = "likes birds"
    user.[key] = true   //using a variable as a key name
    let key1 = "name"
    console.log(user.key1) //undefined, doesn't work with dot notation

Property name from variable
    let fruit = prompt ("Which fruit to buy?", "apple")
    let bag = {
        [fruit]: 5
    }
    alert ( bag.apple ) // 5 if fruit="apple"

Property value shorthand
    function makeUser(name, age) {
        return {
            name: name,
            age: age,
        }
    }
    let user = makeUser("John", 30)
    alert(user.name) //John

Property existence, "in" operator
    console.log( "name" in user) //true

    "for...in" loop
    for (let key in user) {
        console.log( key ) //name, age, ...
        console.log( user[key]) //John, 30, ...
    }

Part 2: Object references and copying
    When a primitive (ex. string) is assigned to variable, it is stored in memory.

    let message = 'Hello'
    let newMessage = message
    newMessage = 'olleH'
    console.log( message + newMessage) //'HelloolleH', each variable has its own memory address


    A variable assigned to an object stores the objects address in memory, ie a reference to the object.
    The object is stored in memory, the variable references the object.

    let user = { name: 'John'}
    let admin = user
    let admin.name = 'Pete'
    console.log(user.name) //'Pete', user.name and admin.name reference the same memory address

    Comparison by reference
    let a = {}
    let b = a
    a == b //true, references to the same object
    a === b //true

    let c = {}
    let d = {}
    c == d //false, two independent objects

    Cloning and merging, Object.assign
    Object.assign(dest, [src1, src2,...]) //copies all properties from src to dest and returns dest
        dest = target object
        srcN = source objects
    let clone = Object.assign({}, user)
    //copies user into an empty object, assigned to clone

    Nested cloning
    https://lodash.com/docs#cloneDeep
    _.cloneDeep(obj) from JS library lodash

    Const objects can be modified
    const user = {
        name: "John",
    };
    user.name = "Pete"; // (*)
    alert(user.name); // Pete

Part 3: Garbage collection
    How does JS decide to free up memory?
    Reachability
        -roots: global variables, current chain of functions ( nested calls, local variables and parameters), executing funtion, variable, and parameters
        -reference from root or chain of references
    Garbage collector marks reachables and sweeps objects that are not marked (unreachable)

Part 4: Object methods, "this"
    Access information stored in the object
    The value of this is the object “before dot”, the one used to call the method.
    let user = {
        name: {"John"},
        sayHi() {       //method shorthand
            alert(this.name) //equivalent to alert(user.name)
        }
    }

Part 5: Constructor, operator "new"
    function User(name) {
        this.name = name
        this.isAdmin = false
        this.sayHi = function() {
            alert("My name is: " + this.name)
        }
    }
    let user = new User("Jack") //see below
    alert(user.name)  // Jack
    alert(user.isAdmin) // false
    A new empty object is created and assigned to this, function body executes, adds new properties to this, returns this

Part 6: Optional chaining '?.'
    The optional chaining ?. stops the evaluation if the value before ?. is undefined or null and returns undefined.
    let user = {}; // user has no address

    alert(user.address ? user.address.street ? user.address.street.name : null : null);

    alert( user?.address?.street ); // undefined (no error)

    We should use ?. only where it’s ok that something doesn’t exist.
    The ?. immediately stops (“short-circuits”) the evaluation if the left part doesn’t exist.
    user?.sayHi(x++); // no "user", so the execution doesn't reach sayHi call and x++
    
    Other variants: ?.(), ?.[]
    The optional chaining ?. is not an operator, but a special syntax construct, that also works with functions and square brackets.

    For example, ?.() is used to call a function that may not exist.

    We can use ?. for safe reading and deleting, but not writing
    The optional chaining ?. syntax has three forms:

    obj?.prop – returns obj.prop if obj exists, otherwise undefined.
    obj?.[prop] – returns obj[prop] if obj exists, otherwise undefined.
    obj.method?.() – calls obj.method() if obj.method exists, otherwise returns undefined.

Part 7: Symbol Type
    Object property keys are either strings or symbols
    Symbol represents a unique identifier
    Hidden properties of an object are created using symbols
    Symbols are skipped by for...in and Object.keys()
    Object.assign copies both string and symbol properties

    let id = Symbol("id");
    let user = {
        [id]: 123
    };

    for (let key in user) alert(key); // nada
    let clone = Object.assign({}, user);

    alert( clone[id] ); // 123


    Simple Example To Understand Symbol:

    let lib = {
        name: "ABC",
    };

    lib["id"] = 5;
    lib["id"] = 6; // The value is changed because it is String [KEY]!!

    lib[Symbol("id")] = 123;
    lib[Symbol("id")] = 124; //Not changed

    console.log(lib); // { name: "ABC", id: 6, Symbol(id): 123, Symbol(id): 124 }

    Global Symbols

    System Symbols

    Summary
    Symbol is a primitive type for unique identifiers.

    Symbols are created with Symbol() call with an optional description (name).

    Symbols are always different values, even if they have the same name. If we want same-named symbols to be equal, then we should use the global registry: Symbol.for(key) returns (creates if needed) a global symbol with key as the name. Multiple calls of Symbol.for with the same key return exactly the same symbol.

    Symbols have two main use cases:

    “Hidden” object properties. If we want to add a property into an object that “belongs” to another script or a library, we can create a symbol and use it as a property key. A symbolic property does not appear in for..in, so it won’t be accidentally processed together with other properties. Also it won’t be accessed directly, because another script does not have our symbol. So the property will be protected from accidental use or overwrite.

    So we can “covertly” hide something into objects that we need, but others should not see, using symbolic properties.

    There are many system symbols used by JavaScript which are accessible as Symbol.*. We can use them to alter some built-in behaviors. For instance, later in the tutorial we’ll use Symbol.iterator for iterables, Symbol.toPrimitive to setup object-to-primitive conversion and so on.

    Technically, symbols are not 100% hidden. There is a built-in method Object.getOwnPropertySymbols(obj) that allows us to get all symbols. Also there is a method named Reflect.ownKeys(obj) that returns all keys of an object including symbolic ones. So they are not really hidden. But most libraries, built-in functions and syntax constructs don’t use these methods.

Part 8: Object to primitive conversion
    Summary
    The object-to-primitive conversion is called automatically by many built-in functions and operators that expect a primitive as a value.

    There are 3 types (hints) of it:

    "string" (for alert and other operations that need a string)
    "number" (for maths)
    "default" (few operators)
    The specification describes explicitly which operator uses which hint. There are very few operators that “don’t know what to expect” and use the "default" hint. Usually for built-in objects "default" hint is handled the same way as "number", so in practice the last two are often merged together.

    The conversion algorithm is:

    Call obj[Symbol.toPrimitive](hint) if the method exists,
    Otherwise if hint is "string"
    try obj.toString() and obj.valueOf(), whatever exists.
    Otherwise if hint is "number" or "default"
    try obj.valueOf() and obj.toString(), whatever exists.
    In practice, it’s often enough to implement only obj.toString() as a “catch-all” method for string conversions that should return a “human-readable” representation of an object, for logging or debugging purposes.

    As for math operations, JavaScript doesn’t provide a way to “override” them using methods, so real life projects rarely use them on objects.