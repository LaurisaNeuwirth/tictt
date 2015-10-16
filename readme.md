#Tic Tac Toe

**URL for Live App** : http://laurisaneuwirth.github.io/tictt/

###Information on this game:
This Tic Tac Toe game starts with X always going first. After each click, the turn alternates between X and O.

This game does allow for Ties. In that case, the game is ended.

###Technologies used:
1. HTML to arrange the content
2. CSS to format the content
3. Javascript as the scripting language
4. AJAZ to interact with the backend
5. Git Hub Pages to host the game
6. Both a local Git Hub repository and a remote repository hold the code and provided version control through the development process.
7. Wireframe found at http://imgur.com/xEX7Rar

###Unresolved problems and desired functionality:
1. The board does not refresh in the UI after a winner is declared.
2. The initial design aspired to indicate several things that were not yet finished:
- whose turn is current
- who won (currently an alert is used instead)
- a "Play Again?" text after a game is finished
3. The extra menu pages on the menu were not created.
* None of this functionality was required to meet the standard of a completed project

###User scenarios:

1. X wins and O loses, with empty spaces still on the board.
Button changes to "X Wins!" then after 5 seconds, asks "Rematch?"

1. O wins with extra spaces on the board.
Button changes to "X Wins!" then after 5 seconds, asks "Rematch?"

1. Neither X nor O win.
Button says "TIE!" then after 5 seconds, asks "Rematch?"

1. Winning scenarios:
Player in in 1,2,3
Player in in 4,5,6
Player in in 7,8,9
Player in in 1,5,9
Player in in 3,5,7


1. User clicks on an occupied space, button says "Square taken, choose abother"

###Logic Conditions:

1. Game starts with Button saying "Click to Play!"
Once clicked, button changes to "X Move"  (----> Check for click)
Once X has clicked (----> Check for click, check for win) button changes to "Y Move"
Once Y has clicked (----> Check for click, check for win) button changes to "Y Move"

1. Keep track of whose click it is, where they clicked

1. When a winning condition is met, button changes to "X WINS!" or "Y WINS!"

1. TIE: All 9 spaces are clicked but none of the winning scenarios are met.




