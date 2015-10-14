
// TO DO: ADD THESE TO OBJECT LATER!

  // array of squares that have been clicked on
  var currentGameState = ['', '', '', '', '', '', '', '', ''];

  //keeps track of whose turn it is
  var currentPlayer="X";

  //array of winning conditions
  var winningConditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

// function to switch whose turn it is in thee variable called currentPlayer
    var switchTurns = function() {

      //debugging check
      console.log('Player turn was ' + currentPlayer + 'before switching func');
      if (currentPlayer==="X"){
        currentPlayer="O";
      } else {
        currentPlayer="X";
      }

      console.log('Player turn is ' + currentPlayer + 'after switching turns');

    };
// --- END--- TO DO

//when the document has been processde by browser,
//  the jQuery Ready method will invoke the function passed to it
$(document).ready(function(){

  //get the button telling user to start playing
  //CSS selector # look for id
  $('#main-button').html('Click to Play!');

  $('#board').on('click', function(event){
    //when I do a click event with element with id = board

    //debug print statement
    console.log("The target of the click event was ", event.target);

    //WHen there is a click event, store as squareClickedOn
    var squareClickedOn = event.target;

    //store the object id of the square that is clicked on
    var squareClickedId = $(squareClickedOn).data('square');

    //display which square click on  DEBUG
    console.log("id is ", squareClickedId);

    //filling up the array with X & Os as moves happen
    currentGameState[squareClickedId] = currentPlayer; // game logic

    //write an X into the clicked square
    $(squareClickedOn).html(currentPlayer); // ui

    //after the currentPlayer plays, invole swithTurms()
    switchTurns();

    //use find or index_of to compare two arrays

  });




});




// (1) Game starts with Button saying "Click to Play!"

  //initialize button to read "Click to Play"


// Once clicked, button changes to "X Move"  (----> Check for click)


// Once X has clicked (----> Check for click, check for win) button changes to "Y Move"


// Once Y has clicked (----> Check for click, check for win) button changes to "Y Move"


// (2) Keep track of whose click it is, where they clicked, mark that space taken.


// (3) When a winning condition is met, button changes to "X WINS!" or "Y WINS!"

//The delay and change the button to "Rematch?"


// (4) TIE: All 9 spaces are clicked but none of the winning scenarios are met.
