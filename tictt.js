
// TO DO: ADD THESE TO OBJECT LATER!

// array of squares that have been clicked on
var currentGameState = ['', '', '', '', '', '', '', '', ''];

//keeps track of whose turn it is
var currentPlayer="X";

//array of winning conditions
var winningConditions = [[0,1,2],
                         [3,4,5],
                         [6,7,8],
                         [0,3,6],
                         [1,4,7],
                         [2,5,8],
                         [0,4,8],
                         [2,4,6]];

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

// return true or false based on whether or not a given player is the winner
var isWinner = function(player){
  //see if winning conditions are present in the currentGameState array
    // With only one win condition, [0,1,2]
    // We would compare the element at each index to the given player.
  return winningConditions.some(function(condition){ //condition is the inside array - each specific win condition
    return currentGameState[condition[0]] === player &&
           currentGameState[condition[1]] === player &&
           currentGameState[condition[2]] === player;
  });
};
//write checkForWinner function
var getWinner = function () {

  //holds winner of the game
  var winner = "";

  if (isWinner("X")) {      //if x won
    winner="X";
    alert(winner +" is the Winner!");
    //reset board
    currentGameState = ['', '', '', '', '', '', '', '', ''];
  }
  else if (isWinner("O")){  //if o won
    winner="O";
    alert(winner +" is the Winner!");
    //reset board
    currentGameState = ['', '', '', '', '', '', '', '', ''];
  }
  else if (false) {   //if tie
    winner="TIE";
    alert("It's a TIE!");
    //reset board
    currentGameState = ['', '', '', '', '', '', '', '', ''];
  } else {     //is game still in play
    winner=null;
  }
  return winner;

};//end of getWinner function


// --- END--- TO DO

// BEGIN AJAX
///// get the whole `tttapi` object
///// you'll need to customize
/////  1. configuration settings (e.g. URL, method)
/////  2. callbacks from requests≥

// END AJAX

//when the document has been processde by browser,
//  the jQuery Ready method will invoke the function passed to it
$(document).ready(function(){

  debugger;


  //get the button telling user to start playing
  //CSS selector # look for id
  $('#main-button').html('Click to Play!');

  //when I do a click event with element with id = board
  $('#board').on('click', function(event){

    //debug print statement
    console.log("The target of the click event was ", event.target);

    //When there is a click event, store as squareClickedOn
    var squareClickedOn = event.target;

    //store the object id of the square that is clicked on
    var squareClickedId = $(squareClickedOn).data('square');

    //display which square click on  DEBUG
    console.log("id is ", squareClickedId);

    //filling up the array with X & Os as moves happen
    currentGameState[squareClickedId] = currentPlayer; // game logic

    //write an X into the clicked square
    $(squareClickedOn).html(currentPlayer); // ui

    //TO DO:
    //Keep track of the moves by updating the currentGameState array with the new move
    currentGameState[squareClickedId]=currentPlayer;

    //debug to see if the array updates
    //create a function to put index number and value of current game state array
    //  into a console.lg for debugging
    var callbackConsoleLog=function callbackConsoleLog(currCell, index){
      console.log(index, currCell);
    };

    //call the function to display current game state array into
    //  a console log
    currentGameState.forEach(callbackConsoleLog);
    // tttapi.markCell(id, data, token, callback);

    getWinner();

    //after the currentPlayer plays, designate other player to take a turn
    switchTurns();
  });



});




/
