describe ('Fizzbuzz', function() {
  var fizzBuzz;

  beforeEach(function(){
    fizzBuzz = new Fizzbuzz();
  });

  describe('knows when a number is', function() {
    it('divisible by 3', function() {
      expect(fizzBuzz.isDivisibleByThree(3)).toBe(true);
    });
   });

  describe('know when a number is NOT', function() {
    it('divisible by 3', function() {
      expect(fizzBuzz.isDivisibleByThree(1)).toBe(false);
    });
   });

  describe('knows when a number is', function() {
    it('divisible by 5', function(){
      expect(fizzBuzz.isDivisibleByFive(5)).toBe(true)
    });
  });

  describe('knows when a number is NOT', function() {
    it('divisible by 5', function() {
      expect(fizzBuzz.isDivisibleByFive(4)).toBe(false)
    });
  });

describe('knows when a number is', function() {
  it('divisible by 15', function() {
    expect(fizzBuzz.isDivisibleByFifteen(15)).toBe(true)
  });
});

describe('knows when a number is NOT', function() {
  it('divisible by 15', function() {
    expect(fizzBuzz.isDivisibleByFifteen(14)).toBe(false)
  });
});


describe('when playing, says', function() {
  it('"Fizz" when a number is divisible by 3', function() {
    expect(fizzBuzz.says(3)).toEqual("Fizz");
  });

  it('"Buzz" when a number is divisible by 5', function() {
    expect(fizzBuzz.says(5)).toEqual("Buzz");
  });

  it('"FizzBuzz" when a number is divisible by 15', function() {
    expect(fizzBuzz.says(15)).toEqual("FizzBuzz");
    });
  });

  it('returns the number when not divisible by 3, 5 and 15', function() {
    expect(fizzBuzz.says(4)).toEqual(4)
  });

});

