User scenarios:

(1) X wins and O loses, with empty spaces still on the board.
Button changes to "X Wins!" then after 5 seconds, asks "Rematch?"

(2) O wins with extra spaces on the board.
Button changes to "X Wins!" then after 5 seconds, asks "Rematch?"

(3) Neither X nor O win.
Button says "TIE!" then after 5 seconds, asks "Rematch?"

(4) Winning scenarios:
Player in in 1,2,3
Player in in 4,5,6
Player in in 7,8,9
Player in in 1,5,9
Player in in 3,5,7


(5) User clicks on an occupied space, button says "Square taken, choose abother"


Logic Conditions:

(1) Game starts with Button saying "Click to Play!"
Once clicked, button changes to "X Move"  (----> Check for click)
Once X has clicked (----> Check for click, check for win) button changes to "Y Move"
Once Y has clicked (----> Check for click, check for win) button changes to "Y Move"

(2) Keep track of whose click it is, where they clicked

(3) When a winning condition is met, button changes to "X WINS!" or "Y WINS!"

(4) TIE: All 9 spaces are clicked but none of the winning scenarios are met.




