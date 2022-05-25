Two important data structures when understanding how js runs in the browser and node

Queue - FIFO structure
Stack - LIFO structure

ex.
let stack = []
stack.push(2)
stack.push(5)
let i = stack.pop() //removes last in
alert(i) //displays 5

libevent
Event loop monitors callback and job queue and decides what to put on the call stack

task queue (fifo) items are added to call stack (lifo)