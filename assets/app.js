//Array for possible word options

var options = ["quick", "jumps", "klutz", "blaze", "tough", "banjo", "zebra", "orbit", "build", "album", "graze", "equal", "great", "clock", "kayak", "world", "waxes", "quart", "moral", "toxic"];

// Math.random to generate randomly chosen word from array above

var computerWord = options[Math.floor(Math.random() * options.length)];
console.log(computerWord);

// define each character for the randomly defined word

var char1 = computerWord.charAt(0);
console.log("char1 is:" + char1);

var char2 = computerWord.charAt(1);
console.log("char2 is:" + char2);

var char3 = computerWord.charAt(2);
console.log("char3 is:" + char3);

var char4 = computerWord.charAt(3);
console.log("char4 is:" + char4);

var char5 = computerWord.charAt(4);
console.log("char5 is:" + char5);

// set var attemptsLeft and var wrong to track how many attempts are left until game is over

var attemptsLeft = 6;

var wrong = 0;

// set var right to keep track of how many characters have guessed correctly 

var right = 0;

// FIRST TRY

//user types a letter

document.onkeyup = function (event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log("userGuess: " + userGuess);

    // compare user's input with the characters in the computer generated string and see if they match

    function matchString() {
        var string = computerWord;
        var result = string.match(userGuess);

        // if user's input matches, change message to "that's right!", change text from " _ " to the correct letter in its corresponding span, add the guessed letter to alreadyGuessed div and decrease the number of attempts left.

        if (result !== null) {

            console.log("userguess matches a character in the string.")

            if (userGuess === char1) {
                right++;
                $("#space1").text(userGuess);
                $("#directions").text("THAT'S RIGHT! NOW TRY AGAIN.");
                $("#userLetterGuess").text(userGuess);
            }

            if (userGuess === char2) {
                right++;
                $("#space2").text(userGuess);
                $("#directions").text("THAT'S RIGHT! NOW TRY AGAIN.");
                $("#userLetterGuess").text(userGuess);
            }

            if (userGuess === char3) {
                right++;
                $("#space3").text(userGuess);
                $("#directions").text("THAT'S RIGHT! NOW TRY AGAIN.");
                $("#userLetterGuess").text(userGuess);
            }

            if (userGuess === char4) {
                right++;
                $("#space4").text(userGuess);
                $("#directions").text("THAT'S RIGHT! NOW TRY AGAIN.");
                $("#userLetterGuess").text(userGuess);
            }

            if (userGuess === char5) {
                right++;
                $("#space5").text(userGuess);
                $("#userLetterGuess").text(userGuess);
                $("#directions").text("THAT'S RIGHT! NOW TRY AGAIN.");
            }

        }

        // if user input does not match any characters in the string, decrease the number of attempts left, change message to "try again" and add guessed letter to div alreadyGuessed.

        else {
            console.log("user guess does not match any characters in string");
            attemptsLeft--;
            wrong++;
            $("#directions").text("THAT WASN'T RIGHT. TRY AGAIN.");
            $("#attemptnumber").text(attemptsLeft);
            $("#userLetterGuess").text(userGuess);
        }

        console.log("attempts left: " + attemptsLeft);

    }

    matchString();
}

//FOLLOWING TRIES

document.onkeyup = function (event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log("userGuess: " + userGuess);

    function matchString() {
        var string = computerWord;
        var result = string.match(userGuess);

        // if user's next inputs match, append the user guess letter to div alreadyGuessed

        if (result !== null) {

            console.log("userGuess matches a character in the string.")

            if (userGuess === char1) {
                right++;
                $("#space1").text(userGuess);
                $("#directions").text("THAT'S RIGHT! NOW TRY AGAIN.");
                $("#userLetterGuess").append(userGuess);
            }

            if (userGuess === char2) {
                right++;
                $("#space2").text(userGuess);
                $("#directions").text("THAT'S RIGHT! NOW TRY AGAIN.");
                $("#userLetterGuess").append(userGuess);
            }

            if (userGuess === char3) {
                right++;
                $("#space3").text(userGuess);
                $("#directions").text("THAT'S RIGHT! NOW TRY AGAIN.");
                $("#userLetterGuess").append(userGuess);
            }

            if (userGuess === char4) {
                right++;
                $("#space4").text(userGuess);
                $("#directions").text("THAT'S RIGHT! NOW TRY AGAIN.");
                $("#userLetterGuess").append(userGuess);
            }

            if (userGuess === char5) {
                right++;
                $("#space5").text(userGuess);
                $("#directions").text("THAT'S RIGHT! NOW TRY AGAIN.");
                $("#userLetterGuess").append(userGuess);
            }

        }


        else {
            console.log("user guess does not match any characters in string");
            attemptsLeft--;
            wrong++;
            $("#directions").text("THAT WASN'T RIGHT. TRY AGAIN.");
            $("#attemptnumber").text(attemptsLeft);
            $("#userLetterGuess").append(userGuess);
        }

        console.log("attempts left: " + attemptsLeft);

        //TO CHANGE THE IMG SRC IF THE ANSWER IS WRONG

        if (wrong === 0) {
            $("#hangmanlevel").attr("src", "assets/images/attemptsleft6.png");
        }

        if (wrong === 1) {
            $("#hangmanlevel").attr("src", "assets/images/attemptsleft5.png");
        }

        if (wrong === 2) {
            $("#hangmanlevel").attr("src", "assets/images/attemptsleft4.png");
        }

        if (wrong === 3) {
            $("#hangmanlevel").attr("src", "assets/images/attemptsleft3.png");
        }

        if (wrong === 4) {
            $("#hangmanlevel").attr("src", "assets/images/attemptsleft2.png");
        }

        if (wrong === 5) {
            $("#hangmanlevel").attr("src", "assets/images/attemptsleft1.png");
        }

        if (wrong === 6) {
            $("#hangmanlevel").attr("src", "assets/images/attemptsleft0.png");
            $("#directions").text("YOU LOST!");
            $("#space1").text(char1);
            $("#space2").text(char2);
            $("#space3").text(char3);
            $("#space4").text(char4);
            $("#space5").text(char5);
        }

        if (attemptsLeft === 0) {
            $("#hangmanlevel").attr("src", "assets/images/attemptsleft0.png");
            $("#directions").text("YOU LOST!");
            $("#space1").text(char1);
            $("#space2").text(char2);
            $("#space3").text(char3);
            $("#space4").text(char4);
            $("#space5").text(char5);
            document.onkeyup = function(event) {
                location.reload(true);
            }
        }


        //TO CHANGE IMG SRC IF USER WINS

        if (right === 5) {
            $("#directions").text("YOU WIN!");
            $("#hangmanlevel").attr("src", "assets/images/attemptsleft6.png");
        }

    }

    matchString();
}

//reset button refreshes page

$(".btn").click(function () {
    location.reload(true);
});
