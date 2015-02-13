$(document).ready(function(){
  logNumber();
  clearButton();
  logOperator();
  equals();
  changeNumColour();
  changeOpColour();
  addNumtoScreen();
  clearScreen();
  displayAnswer();
});

// Defining any arrays and strings I need
  inputArray = [];
  joinedArray= [];
  answer = "";

// Operator functions

  //Add function takes two numbers and returns the sum
  var add = function(x, y){
    return x + y;
  };

  //Subtract function takes two numbers and returns the value of the x - y
  var subtract = function(x, y){
    return x - y;
  };

  //Multiply function takes two numbers and returns the value of the x * y
  var multiply = function(x, y){
    return x * y;
  };

  //Divide function takes two numbers and returns the value of the x / y
  var divide = function(x,y){
    return x / y;
  };

//Adding values to the screen

  //This function add the number you click to the screen, I'm sure this is a slow way of doing
  //this, however i want to practice switches and currently do know another method
  //the desired result is achived even if it is inefficent
  function addNumtoScreen(){
    $('.num').on("click", function(){
      switch(numFirst){
        case '.':
          $('.screenp').append('.');
          $('.op').empty();
          break;
        case '0':
          $('.screenp').append('0');
          $('.op').empty();
          break;
        case '1':
          $('.screenp').append('1');
          $('.op').empty();
          break;
        case '2':
          $('.screenp').append('2');
          $('.op').empty();
          break;
        case '3':
          $('.screenp').append('3');
          $('.op').empty();
          break;
        case '4':
          $('.screenp').append('4');
          $('.op').empty();
          break;
        case '5':
          $('.screenp').append('5');
          $('.op').empty();
          break;
        case '6':
          $('.screenp').append('6');
          $('.op').empty();
          break;
        case '7':
          $('.screenp').append('7');
          $('.op').empty();
          break;
        case '8':
          $('.screenp').append('8');
          $('.op').empty();
          break;
        case '9':
          $('.screenp').append('9');
          $('.op').empty();
          break;
        }
      });
    }

    //This function takes the answer adds it to the newarr, empties the screen div of
    //any content and then displays the answer from the equals function
    function displayAnswer(){
      newarr = [];
      newarr.push(answer);
      $('.screenp').empty();
      $('.screenp').append(answer);
    }

//Clearing values from the screen

  //On clicking the clear and operator buttons the screen div is cleared.
  function clearScreen(){
    $('.large, .operator').on("click", function(){
      $('.screenp').empty();
    });
  }

  //On clicking clear the arrays which hold values are cleared
  function clearButton(){
    $('.large').on("click", function(){
      inputArray = [];
      joinedArray = [];
    });
  }

//Logging numbers and operators

  //When a number is clicked it takes the value and adds it to input array
  function logNumber(){
    $('.num').on("click",function(){
      numFirst = 0;
      numFirst = ($(this).text());
      inputArray.push(numFirst);
      clearScreen();
      return inputArray;
    });
  }

  //This function works out which operator is pressed, it takes the value, adds it the the variable which is then returned
  //This function also gets the answer value by pushing it to a cleared joinedArray allowing it to be displayed on the screen
  function logOperator(){
    $('.operator').on("click",function(){
      operator = ($(this).text());
      $('.op').append(operator);
      arrNum = inputArray.join("");
      joinedArray.push(arrNum);
      inputArray = [];
      clearScreen();
      return operator;
    });
  }

//Returning the answer function

  //On clicking the = button this function takes inputArray, joins it together into joinedArray
  //this means when you press 2 then 2 you get 22 rather than 2 and 2, the inputArray is then emptied again
  //the switch takes the return of the operator function and runs the corisponding function
  //which sets answer to equal the function done using the 0, 1 index of joinedArray, this represents
  //the two numbers you want to call a function on. the inputArray and joinedArray are then emptied,
  //the answer is then added to the inputArray which is displayed on the screen div.
  function equals(){
    $('.equals').on("click", function(){
      arrNum = inputArray.join("");
      joinedArray.push(arrNum);
      inputArray = [];
      switch(operator){
        case '+':
          answer = add(parseFloat(joinedArray[0]), parseFloat(joinedArray[1]));
          inputArray = [];
          displayAnswer();
          joinedArray=[];
          inputArray.push(answer);
          break;
        case '-':
          answer = subtract(parseFloat(joinedArray[0]), parseFloat(joinedArray[1]));
          inputArray = [];
          displayAnswer();
          joinedArray=[];
          inputArray.push(answer);
          break;
        case '/':
          answer = divide(parseFloat(joinedArray[0]), parseFloat(joinedArray[1]));
          inputArray = [];
          displayAnswer();
          joinedArray=[];
          inputArray.push(answer);
          break;
        case '*':
          answer = multiply(parseFloat(joinedArray[0]), parseFloat(joinedArray[1]));
          inputArray = [];
          displayAnswer();
          joinedArray=[];
          inputArray.push(answer);
          break;
          }
    });
  }

//Styling functions

  //These two are styling functions which changes the colour of the square when you hover over them and then changes them back
  function changeNumColour(){
    $('.num, .large').mouseenter(function(){
      $(this).css("background-color", "#C2C2C2");
    });
    $('.num, .large').mouseleave(function(){
      $(this).css("background-color", "#E0E0E0");
    });
  }

  function changeOpColour(){
    $('.operator, .equals').mouseenter(function(){
      $(this).css("background-color", "#C75E00");
    });
    $('.operator, .equals').mouseleave(function(){
      $(this).css("background-color", "#F59138");
    });
  }
