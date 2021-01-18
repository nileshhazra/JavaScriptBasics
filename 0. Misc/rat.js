function solveMaze(maze, x, y, solution, n) {
  // Reach the destination
  if (x === n - 1 && y === n - 1 && maze[x][y] === 1) {
    solution[x][y] = 1;
    return true;
  }
  if (isSafe(maze, x, y, n)) {
    solution[x][y] = 1;

    if (solveMaze(maze, x + 1, y, solution, n)) {
      return true;
    }
    if (solveMaze(maze, x, y + 1, solution, n)) {
      return true;
    }

    maze[x][y] = 0;
    return false;
  }
  return false;
}

function isSafe(maze, x, y, n) {
  if (x >= 0 && y >= 0 && maze[x][y] === 1) {
    return true;
  }
  return false;
}

maze = [
  [1, 1, 0, 0],
  [1, 1, 0, 1],
  [1, 1, 0, 0],
  [0, 1, 1, 1],
];

solution = [[], [], []];
n = maze.length();
if (solveMaze(maze, 0, 0, solution, n)) {
  for (i in solution) {
    for (j in i) {
      print(str(j), " ");
    }
  }
}
