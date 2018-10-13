// global variable holding user name
let userName;

// general greeting - 1
const userNameGreeting = () => {
    userName = prompt(`Hello Brave Traveller. What's your name?`).trim();
    if (!userName) {
        randomNameGenerator();
    }

    crossRoadsPrimary();
}

// generate random name if user does not provide one
const randomNameGenerator = () => {
    names = [
        'Pillow MoonFace',
        'Jack WhatsTheirFace',
        'Cat McCatFace',
        'Hotdog'
    ]

    const randomNumberForName = Math.round(Math.floor(Math.random() * names.length));
    console.log(randomNumberForName);

    const fakeUserName = names[randomNumberForName];

    userName = prompt(`I'm afraid we don't let strangers in the enchanted woods without knowing their names. If you don't give us a name, we'll be forced to call you ${fakeUserName}.`);

    if (!userName) {
        userName = fakeUserName;
    }

}

// warning and first choice for direction: choices LEFT or RIGHT - 2
// choices: ghost question and spelling backwards
const crossRoadsPrimary = () => {
    const rightOrLeft = prompt(`Well, well...few want to enter the magic forest, ${userName}. Let's get started. Do you want to go right or left?`).trim();

    rightToLeftFixes = rightOrLeft.toLowerCase();

    if (!rightToLeftFixes) {
        alert(`${userName}, you can't just stay here! You'll just have to go the right.`);
        toTheRight();
    } else if (rightToLeftFixes === 'right') {
        toTheRight();
    } else if (rightToLeftFixes === 'left') {
        toTheLeft();
    } else {
        alert(`${userName}, you can't just stay here! You'll just have to go the right.`);
        toTheRight();
    }
};

// game directions
// ghost random number guessing game
const ghostNumberGuessing = () => {
    alert(`There's a spooky house up ahead. Let's go inside.`);

    let userNumberGuess = prompt(`Boo! The friendly neighbourhood ghost came out to play! He loves playing games. If you can guess what number he's thinking of between 0 and 3, he'll let you pass!`);

    ghostNumberGuest = Math.round(Math.floor(Math.random() * 3));
    console.log(ghostNumberGuest);

    if (!userNumberGuess || userNumberGuess != ghostNumberGuest) {
        userNumberGuess = prompt('Oh no, try again!');

        if (!userNumberGuess || userNumberGuess != ghostNumberGuest) {
            userNumberGuess = prompt(`So close! Try again, ${userName}!`);

            if (!userNumberGuess || userNumberGuess != ghostNumberGuest) {
                alert(`You're lucky the ghost is friendly - he's going to let you through even though you didn't quite guess the right number`);
            } else {
                alert('You got it! Keep going down the path...if you dare!');
            }
        } else {
            alert('You got it! Keep going down the path...if you dare!');
        }
    } else {
        alert('You got it! Keep going down the path...if you dare!');
    }
};

// witch backwards spelling game
const backwardsSpelling = () => {
    alert('You see a deserted cottage up ahead. Let\'s check out what\'s inside - what can go wrong?');
    const userSpellingBackwards = prompt(`A spooky witch pops out and asks you to type 'Cats like to party' backwards. You only have one shot!`).trim();

    // original string
    const ogString = 'cats like to party'.split('').reverse().join('');
    console.log(ogString);

    // lower casing user response 
    const cleanedUpUserSpellingBackwards = userSpellingBackwards.toLowerCase();

    if (!userSpellingBackwards || cleanedUpUserSpellingBackwards != ogString) {
        alert(`Oh no! You got it wrong, ${userName}! You're lucky the witch is feeling generous and is going to let you go free!`);
    } else if (cleanedUpUserSpellingBackwards === ogString) {
        alert(`You did it, ${userName}! You get to go free from the witch's cottage!`);
    } else {
        alert(`Oh no! You got it wrong, ${userName}! You're lucky the witch is feeling generous and is going to let you go free!`);
    }

};

// genral goodbye 
const finalGoobye = () => {
    alert(`${userName}, you survived the magic forest! Hooray!`);
};

// to the right (ghost random number guess first) - 3
const toTheRight = () => {
    ghostNumberGuessing();
    backwardsSpelling();
    finalGoobye();
};

//to the left (spelling backwards first) - 3
const toTheLeft = () => {
    backwardsSpelling();
    ghostNumberGuessing();
    finalGoobye();
}


$(window).on("load", function () {
    userNameGreeting();
});