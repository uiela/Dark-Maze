import random

class DarkMazeGame:
    def __init__(self, size):
        self.size = size
        self.grid = [['#' if random.random() < 0.3 else ' ' for _ in range(size)] for _ in range(size)]
        self.grid[0][0] = 'S'
        self.grid[size - 1][size - 1] = 'E'

    def print_maze(self):
        for row in self.grid:
            print(' '.join(row))

    def is_valid_move(self, x, y):
        return 0 <= x < self.size and 0 <= y < self.size and self.grid[y][x] != '#'

    def explore_maze(self, x, y):
        if not self.is_valid_move(x, y):
            print("You cannot move there!")
            return
        if self.grid[y][x] == 'E':
            print("Congratulations! You've reached the exit!")
            return
        print("You continue exploring...")

    def show_hint(self):
        hint_x, hint_y = random.randint(0, self.size - 1), random.randint(0, self.size - 1)
        while self.grid[hint_y][hint_x] == '#':
            hint_x, hint_y = random.randint(0, self.size - 1), random.randint(0, self.size - 1)
        print(f"Hint: Try moving to ({hint_x}, {hint_y}) for a shortcut!")

    def use_flashlight(self):
        for i in range(self.size):
            for j in range(self.size):
                if random.random() < 0.5:
                    self.grid[i][j] = ' '
        print("You used your flashlight, revealing more of the maze!")
