function litres(time) {
    let litre = 0
    litre = Math.floor(time*.5)
    console.log(litre)
    return litre
  }

litres(2) //1
litres(1.4) //0
litres(12.3) //6
litres(0.82) //0
litres(11.8) //5
litres(1787) //893
litres(0) //0

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe('Fixed tests', () => {
//   it('Tests', () => {
//     assert.strictEqual(litres(2), 1, 'should return 1 litre');
//     assert.strictEqual(litres(1.4), 0, 'should return 0 litres');
//     assert.strictEqual(litres(12.3), 6, 'should return 6 litres');
//     assert.strictEqual(litres(0.82), 0, 'should return 0 litres');
//     assert.strictEqual(litres(11.8), 5, 'should return 5 litres');
//     assert.strictEqual(litres(1787), 893, 'should return 893 litres');
//     assert.strictEqual(litres(0), 0, 'should return 0 litres');
//   });