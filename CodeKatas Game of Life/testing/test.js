'use strict';


const expect = require('chai').expect;


// Create the variable you are going to test
let p5js = 's';


// describe lets you comment on what this block of code is for.
describe('to run the game press S', function() {


  // it() lets you comment on what an individual test is about.
  it('should be S', function(done) {
    // expect is the actual test.  This test checks if the var is a string.
    expect(p5js).to.be.a('s');
    // done tells the program the test is complete.
    done();
  });


  it('should be equal to S', function(done) {
    // This expect tests the value of the string.
    expect(p5js).to.equal('s');
    done();
  });
});

test('keyIsPressed is false when no keys are pressed', function() {
    if (keyCode == 83 ) {
        if (!keyP) {
            keyP = true;
        } else if (keyP) {
            keyP = false;
        }
    }
});
