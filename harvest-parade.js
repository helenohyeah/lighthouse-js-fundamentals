const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']

function finalPosition(moves) {
  let position = [0, 0];
  for (const move of moves) {
    switch (move) {
    case 'north':
      position[1]++;
      break;
    case 'south':
      position[1]--;
      break;
    case 'east':
      position[0]++;
      break;
    case 'west':
      position[0]--;
      break;
    }
  }
  return position;
}

finalPosition(moves); // [-1, 4]