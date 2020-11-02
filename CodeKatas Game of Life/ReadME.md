These rules, which compare the behavior of the automaton to real life, can be condensed into the following:

Any live cell with two or three live neighbours survives.
Any dead cell with three live neighbours becomes a live cell.
All other live cells die in the next generation. Similarly, all other dead cells stay dead.

To Run The Application

You'll need to install p5.js extension on VS Code then Open the folder on VS Code
you will need all the files.

Click the Go Live icon on VS Code

Press S to randomly run the game, press S to pause and R to reset or wipe the cells

To Run the test

command line and cd into the main directory of our sketch called color_unit_test. Type the command

mocha into the command line and watch your first test run! You should see something like:

to run the game press S
    ✓ should be equal to S
    ✓ should be equal to S
    keyIsPressed is false when no keys are pressed
