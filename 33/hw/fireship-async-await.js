// https://www.youtube.com/watch?v=vn3tm0quoqE

// Event loop
// runs syncronous, queues async
// macro and micro tasks
// move sync functions that take a long time to async so they run in the background
// use await with async to pause the function until something is resolved

//https://youtu.be/vn3tm0quoqE?t=108
// L1
console.log('🥪 Synchronous 1');

// L2
setTimeout(_ => console.log(`🍅 Timeout 2`), 0);

// L3
Promise.resolve().then(_ => console.log('🍍 Promise 3'));

// L4
console.log('🥪 Synchronous 4');

//--------------------------
// Consume Promise https://youtu.be/vn3tm0quoqE?t=167

const promise = fetch('https://jsonplaceholder.typicode.com/todos/1')

promise
    .then(res => res.json())
    .then(todo => {
        throw new Error('uh oh')
        return todo
    })
    .then(todo => console.log('smilie', todo.title))
    .catch(err => console.error('crying face', err))

console.log('Synchronous')

//---------------------------------
// Create Promise https://youtu.be/vn3tm0quoqE?t=241

const tick = Date.now();
const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick}ms`);

const codeBlocker = () => {

    // Blocking

    // let i = 0;
    // while(i < 1000000000) { i++;}

    // return '🐷 billion loops done';


    // Async blocking

    // return new Promise((resolve, reject) => {

    //     let i = 0;
    //     while(i < 1000000000) { i++;}
 
    //     resolve('🐷 billion loops done');
    // })


    // Non-blocking

    return Promise.resolve().then(v =>  {
        let i = 0;
        while(i < 1000000000) { i++; }
        return '🐷 billion loops done';
    })

}

log('🥪 Synchronous 1');


codeBlocker().then(log)


log('🥪 Synchronous 2');


//------------------------
// Async Await https://youtu.be/vn3tm0quoqE?t=359
// Basic
export const getFruit = async name => {
    const fruits = {
      pineapple: '🍍',
      peach: '🍑',
      strawberry: '🍓'
    };
  
    return fruits[name];
  };
  
  getFruit('peach').then(console.log);
  
  // Async + Await
  
  export const makeSmoothie = async () => {
    const a = await getFruit('pineapple');
    const b = await getFruit('strawberry');
  
    return [a, b];
  };
  
  const makeSmoothie2 = () => {
    let a;
    return getFruit('pineapple')
      .then(v => {
        a = v;
        return getFruit('strawberry');
      })
      .then(v => [a, v]);
  };

//----------------------
// Concurrency https://youtu.be/vn3tm0quoqE?t=472
import { getFruit } from './3-async-await';

const makeSmoothieFaster = async() => {
    const a = getFruit('pineapple');
    const b = getFruit('strawberry');

    const smoothie = await Promise.all([a, b])

    return smoothie;
}


const fruitRace = async() => {
    const a = getFruit('pineapple');
    const b = getFruit('strawberry');

    const winner = await Promise.race([a, b])

    return winner;
}

// fruitRace().then(log)
// fruitRace().then(log)
// fruitRace().then(log)
// fruitRace().then(log)
// fruitRace().then(log)

//-------------------
// Error Handling https://youtu.be/vn3tm0quoqE?t=546
import { getFruit } from './3-async-await';

const badSmoothie = async() => {
    try {

        const a = getFruit('pineapple')
        const b = getFruit('strawberry');
        const smoothie = await Promise.all([a, b])

        throw 'broken!'

        return smoothie;

    } catch(err) {
        console.log(err)
        // return `😬 We are going to be fine...`
        throw `💩 It's broken!`
    }
}

//------------------
// Sugar https://youtu.be/vn3tm0quoqE?t=598
import { getFruit } from './3-async-await';

const fruits = ['peach', 'pineapple', 'strawberry'];

const fruitLoop = async () => {
  for (const f of fruits) {
    const emoji = await getFruit(f);
    log(emoji);
  }
};

const fruitInspection = async () => {
  if ((await getFruit('peach')) === '🍑') {
    console.log('looks peachy!');
  }
};

import fetch from 'node-fetch';

const getTodo = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');

  const { title, userId, body } = await res.json();

  console.log(title, userId, body);
};