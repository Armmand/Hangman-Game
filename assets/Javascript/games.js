

<script type="text/javascript">
// JavaScript function that wraps everything
    $(document).ready(function() {
      // Gets Link for Theme Song
      var audioElement = document.createElement("audio");
      audioElement.setAttribute("src","Assets/audio/Bruce Springsteen-Born In The U.S.A.mp3");
      //Pause Theme Song
       $(".pause-button").on("click", function() {
        audioElement.pause();
        });
    //Computer is going to randomly choose a word, user is going to get 7 wrong guesses to try to guess the word the computer chose 1 letter at a time. 
   
  //We will report out # of guesses remaining available. Report out of win/lose.
    //random options for the computer include 50 states
       //Guesses begin with 7, count down to 0 - at zero, 1 loss is recorded - if guess correctly before zero, 1 win is recorded
  var options=["ALABAMA ","ALASKA","ARIZONA","ARKANSAS" ,"CALIFORNIA","COLORADO" ,"CONNECTICUT",
              "DELAWARE","FLORIDA","GEORGIA","HAWAII" ,"IDAHO","ILLINOIS","INDIANA","IOWA","KANSAS",
              "KENTUCKY","LOUISIANA","MAINE","MARYLAND","MASSACHUSETTS", "MICHIGAN","MINNESOTA",
              "MISSISSIPPI","MISSOURI","MONTANA","NEBRASKA","NEVADA","NEW HAMPSHIRE","NEW JERSEY",
              "NEW MEXICO","NEW YORK","NORTH CAROLINA","NORTH DAKOTA","OHIO","OKLAHOMA","OREGON",
              "PENNSYLVANIA","RHODE ISLAND","SOUTH CAROLINA","SOUTH DAKOTA","TENNESSEE","TEXAS",
              "UTAH","VERMONT","VIRGINIA","WASHINGTON","WEST VIRGINIA","WISCONSIN","WYOMING"
                ];
  var wins=0;
  var losses=0;
  var guesses=10; 
  var answerGuess=0;
      //Theme Button
      $(".theme-button").on("click", function() {
        audioElement.play();
      });
    
   
      //Begins game upon any click by user on keyboard
     	document.onkeyup=function() {
         		 		    
        //random word chosen from options array
       var word=options[Math.floor(Math.random() * options.length)];
       var wordLength=word.length;
       console.log(word);
       console.log(wordLength);
       //create new array for "_" placeholders based on word length to be created by for loop - # of letters in computer guessed word returns same number of "_" entered into new ar
           
           var optionsDash=[];
              
             //Run for loop for the length of the random word chosen from our options array
             for(var i=0;i<word.length;i++){
               
               //creating new variable to join all the characters in array so that no commas show 
                 var wordDash="_ ";       
                 var gameWord=word.replace(word,wordDash);
                 //add new words to our array
                 optionsDash.push (wordDash);
             }
                   
              //join all the characters in our new array together with only a space between them
             var nameDash=optionsDash.join(" ");
           //return to screen the final string created by the grouping of characters in new array
             document.getElementById("placeHolder").innerHTML=nameDash;
             
           //create array to hold all users guesses           
             var guessArray=[];
      
           //user gets 10 guesses
             for(i=0; i<word.length; i++){
             
                 //Game word is broken down into single charaters in an array for the purpose of comparison with guesses 
                 var wordArray=word[i]; 
                          
                 console.log(wordArray);
                //Capture user key click (guessing letter)      
                 document.onkeyup=function() {
                //If user guess is right, then replace _ with letter associated with character location...if wrong, decrease guesses by 1
                      var userGuess=String.fromCharCode(event.keyCode).toUpperCase();
                  
                      //For loop - allows array to be checked one element at a time -compared and replaced if matching
                      for(i=0; i<word.length; i++){
                           //boolean statment - comparing user guess to the letters in the random word
                           //variable set up to be a temporary place holder while loop is running
                              
                              if (userGuess===word[i]){
                                optionsDash[i]=userGuess;
                                //Takes the commas out when array is displayed on the screen by joining them with spaces
                                var nameDash=optionsDash.join(" ");
                                answerGuess=1;
                                
                                
                                //Posts answer on the screen
                                   document.getElementById("placeHolder").innerHTML=nameDash;
                                 }
                             }//ends for loop
                      
                       //conditional statement added to allow for counter of right and wrong guesses without getting caught in the for loop while looking at the array of individual letters making up the word
                         if(answerGuess<1){
                          guesses=guesses-1;
                                  if(guesses<0){
                                   alert ("Game Over!  YOU LOSE!")
                                   losses++;
                                    document.getElementById("losses").innerHTML=losses;
                                   
                                    //restarts the game
                                      location.reload();                               
                                  }    
                                  
                         }
                         
                        //resets guess count place holder to zero to allow for new count on next letter guess
                         answerGuess=0;                      
                         console.log(guessesLeft);
                           //user guesses are added to array      
                         guessArray.push(userGuess);
                                    
                    //letters guessed by user are printed on screen     
                         document.getElementById("lettersUsed").innerHTML=guessArray;
                    //number of guesses still available are recorded on the screen
                        document.getElementById("guessesLeft").innerHTML=guesses;
                     
                                                    
                    }
                 
                           
                  }
                                  
                }  //end of game
           
        
        });   //Ends javascript function
    </script>
