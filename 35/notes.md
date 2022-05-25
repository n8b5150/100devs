javascript is synchronous and does not wait for functions to complete
javascript is single-threaded/blocking code

higher order functions (ex. addEventListener('click',callback)) have callback functions
callback functions fires when an async TASK or another function is done

browser/web api's provide methods to make javascript wait

promises are objects that may have content in the future
fetch is a web api that returns a promise

3 promise states - pending, rejected, fulfilled

async await is syntactical sugar that is just promises under the hood

javascript doesn't have access to the DOM by itself
it is sandboxed in the browser and only has access to the tools in the sandbox

node gives javascript access to the internet and databases
    node is a Javascript runtime built on Chrome v8 javascript engine
    aka, allows javascript to run on desktop, servers, etc.

node modules:
    http: web access
    fs: file system


