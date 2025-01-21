# ICS4U-Final-Project-Dominic - Polygon Calculator

## What This App Does
- This app gets both the side lengths and the diagonal lengths of a shape from the user.
- It then runs the responses through some code to figure out which shape the user has inputted, and whether or not the shape is real.
- Finally, the user can find out more about their shape by requesting certain properties of the shape by using pre-set keybinds.
- After the user is satified with the information about their shape, they can close that shape, and start a new one.

## How To Use
The use of this application is very simple. Text will show up directing the user the possible options throughout the program. Most of the controlls are accessed by the number keys, which correspond to a certain method of the shape.The "x" key can be used throughout the program to end it, and the user is then prompted to either completely end the program or typing y/n.

## How To Install And Run
This code must be run on a terminal emulator.
- Open up the terminal emulator, and clone this repository into your preffered directory.
- Enter the directory, and enter the typescript file
- Once in the typescript file, install bun, and bun-promptx.

To install Bun, use the following command:
```bash
curl -fsSL https://bun.sh/install | bash
```

To install bun-promptx, use the following command:
```bash
bun install add bun-promptx --save-dev
```

- Once all of this is done, you can run the program by using the command:
```bash
bun run index.ts
```


## Possible Shapes
Finding valid shapes could prove difficult, so here are some shapes to get started with. 

###
Triangle: 
- Sides: 3, 4, 5
- Diagonals: null
###
- Sides: 3, 3, 3
- Diagonals: null
###

Quadrilateral:
- Sides: 4, 4, 4, 4
- Diagonal: 5.65685424949
###
- Sides: 11, 12, 13, 14
- Diagonal: 15
###

Pentagon:
- Sides: 5, 5, 5, 5, 5
- Diagonals: 7.07106781187, 8.66025403784
###
- Sides: 2, 3, 4, 5, 6
- Diagonals: 4, 5
###

Hexagon:
- Sides: 4, 4, 4, 4, 4, 4
- Diagonals: 5.65685424949, 6.92820323028, 8
###
- Sides: 3, 4, 5, 5, 6, 7
- Diagonals: 7, 8, 9
###

Heptagon:
- Sides: 3, 3, 3, 3, 3, 3, 3
- Diagonals: 4.24264068712, 5.19615242271, 6, 4.24264068712
###

Octagon:
- Sides: 3, 3, 3, 3, 3, 3, 3, 3
- Diagonals: 4, 4, 4, 4, 4
###

Nonagon:
- Sides: 3, 3, 3, 3, 3, 3, 3, 3, 3
- Diagonals: 4, 4, 4, 4, 4, 4
###

Decagon:
- Sides: 5, 5, 5, 5, 5, 5, 5, 5, 5, 5
- Diagonals: 6, 6, 6, 6, 6, 6, 6