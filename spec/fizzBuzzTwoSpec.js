describe('FizzBuzz', function() {

  var fizzbuzz;

  beforeEach(function() {
    fizzBuzz = new Fizzbuzz();
  });

  describe('multiples of 3', function() {
    it('fizzes for 3', function() {
      expect(fizzBuzz.play(3)).toEqual('Fizz');
    });
  });

  describe('multiples of 5', function() {
    it('buzzes for 5', function() {
      expect(fizzBuzz.play(5)).toEqual('Buzz');
    });
  });

  describe('multples of 15', function() {
    it('FizBuzzes for 15', function() {
      expect(fizzBuzz.play(15)).toEqual('FizzBuzz');
    });
  });

  describe('all other numbers', function() {
    it('return themselves', function() {
      expect(fizzBuzz.play(4)).toEqual(4);
    });
  });

});