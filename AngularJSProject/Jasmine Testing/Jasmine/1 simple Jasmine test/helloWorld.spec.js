describe('hello javascript test', function () {

  var greeter;
  beforeEach(function () {
      greeter = new Greeter();
    //  m = new Math();
  });
   

    // Assert
  it('should say hello to the Murthy', function () {
    expect(greeter.say('Murthy')).toEqual('Hello, Murthy');
  });

  //it('square check', function () {
  //    expect(m.Square(5).toEqual(25));
  //});

});