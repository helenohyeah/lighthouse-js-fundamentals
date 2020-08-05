function judgeVegetable(vegetables, metric) {
  let winner;
  let tempScore = 0;
  vegetables.forEach(function (e) {
    if (e[metric] > tempScore) {
      winner = e.submitter;
      tempScore = e[metric];
    }
  });
  return winner;
}

// testing
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

judgeVegetable(vegetables, metric); // "Old Man Franklin"