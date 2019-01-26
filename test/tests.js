const test = QUnit.test;

function getRandomNumber() {
  return Math.random();
}

function headsOrTails(randomNumber) {
  if(randomNumber < 0.5) {
    return 'heads';
  }
  else {
    return 'tails';
  }
}

test('returns random number between 0 - 0.99', function(assert) {
  const randomNumber = getRandomNumber();
  assert.ok(randomNumber >= 0);
});

test('return heads if less than 0.5', function(assert) {
  const randomNumber = 0.4;
  const side = headsOrTails(randomNumber);
  assert.equal(side, 'heads');
});

test('returns tails if greater than or equal to 0.5', function(assert) {
  const randomNumber = 0.6;
  const side = headsOrTails(randomNumber);
  assert.equal(side, 'tails');
});
