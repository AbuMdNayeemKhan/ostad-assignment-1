// Tasks:


// 1. Declare a variable called "temperature" and assign it a numeric value representing the current temperature.
let temperature = 29;


// 2. Write an if-else statement to check if the temperature is greater than or equal to 30 degrees Celsius.
if(temperature <= 30){
    console.log("Its not greater than or equal to 30 degrees Celsius.");
} else {
    console.log("Its greater than or equal to 30 degrees Celsius.");
};

//    - If the temperature is greater than or equal to 30, print "It's a hot day!" using console.log().
//    - Otherwise, print "It's a normal day!" using console.log().
if(temperature >= 30){
    console.log("It's a hot day!");
} else {
    console.log("It's a normal day!");
}


// 3. Declare a variable called "isRaining" and assign it a boolean value (true or false) indicating if it's raining or not.
let isRaining = false;

// 4. Write an if-else statement to check if it's raining.
//    - If it's raining, print "Don't forget your umbrella!" using console.log().
//    - Otherwise, print "Enjoy your day!" using console.log().
if(isRaining == true){
    console.log("Don't forget your umbrella!");
} else {
    console.log("Enjoy your day!")
}


// 5. Declare a variable called "time" and assign it a numeric value representing the current hour of the day (in 24-hour format).
let time = 1;

// 6. Write an if-else statement to check the time of the day.
//    - If the time is between 6 AM and 12 PM (inclusive), print "Good morning!" using console.log().
//    - If the time is between 12 PM and 6 PM (inclusive), print "Good afternoon!" using console.log().
//    - If the time is between 6 PM and 12 AM (inclusive), print "Good evening!" using console.log().
//    - Otherwise, print "Good night!" using console.log().
if(time >= 6 && time <= 12){
    console.log("Good morning!");
} else if (time >= 13 && time <= 18){
    console.log("Good afternoon!");
} else if (time >= 19 && time <= 24){
    console.log("Good evening!");
} else {
    console.log("Good Night!");
}