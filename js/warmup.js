
//Create the my_max fucntion which gets the largest number from an array
var my_max = function(array){
  sort = array.sort()
  //This get the length of the array then minus 1 to get the last index of the array
  alength = array.length - 1
  return sort[alength]
};


// console.log(my_max([1,56,2,3,-1,0]))

//Create the function to search a string and add the amount of vowels in it
var vowel_count = function(str){
  var vowel = ['a', 'e', 'i','o', 'u']
  var count = 0
  //this convers the string to lowercase meaning it will still count uppercase str as vowels
  var down = str.toLowerCase()
  //this iterates through the string
  for(var i = 0; i < down.length; i++){
    //this if statment takes the vowel array and searchs the iterations using the
    //indexOf method, eg with a string of bang, vowel.indexOf(down[1]) which = a, would return
    //1 becase e is a vowel, however if it was index 2 it would return -1 becuase
    //n is not a vowel, it it doesn't return -1 it adds 1 to the count giving us the finial total
    //once the entire string has been iterated through
    if (vowel.indexOf(down[i]) != -1)
      count++
  }
  return count
};

// console.log(vowel_count("aeeAAAebbbb"));



var reverse = function(str){
  reverse = "";
  //this gets the number of indexs in the string
  strlen = str.length-1
  //this itereates through the indexs starting at the end. It then takes
  //the character from that index and adds it to the empty reverse array
  //on the next index it adds it to the reverse array with a character in it
  //so you start with a string and empty array, you then take the last character
  //of the string and add it to the start of the array, and keep going until the
  // index numer = 0
  for(i=strlen; i >= 0; i--){
    reverse += str[i];
  }
  return reverse;
};

reverse("This is my string")
