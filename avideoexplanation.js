const INCREMENTS = [1, 2, 3];

function createScoreIncrementor(increment) {
  // function of input "increment"
  return (score) => score + increment;
}

const scoreUpdaters = INCREMENTS.map(createScoreIncrementor);
