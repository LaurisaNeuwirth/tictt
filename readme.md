User scenarios:

(Move to Logic) Game always starts with X move first.

(1) X wins and O loses, with empty spaces still on the board.
Button changes to "X Wins!" then after 5 seconds, asks "Rematch?"

(2) O wins with extra spaces on the board.
Button changes to "X Wins!" then after 5 seconds, asks "Rematch?"

(3) Neither X nor O win. (How to logic that out?)
Button says "TIE!" then after 5 seconds, asks "Rematch?"


Logic Conditions:
(1) TIE: All 9 spaces are clicked but none of the winning scenarios are met.

(2) Game starts with Button saying "Click to Play!"
Once clicked, button changes to "X Move"  (----> Check for click)
Once X has clicked (----> Check for click, check for win) button changes to "Y Move"
Once Y has clicked (----> Check for click, check for win) button changes to "Y Move"

(3) When a winning condition is met, button changes to "? WINS!"

(4) Keep track of whose click it is, where they clicked

Problems:


