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

    const randomNumberForName = Math.floor(Math.random() * names.length + 1);

    const fakeUserName = names[randomNumberForName];

    userName = prompt(`I'm afraid we don't let strangers in the enchanted woods without knowing their names. If you don't give us a name, we'll be forced to call you ${fakeUserName}.`);

    if (!userName) {
        userName = fakeUserName;
    }

}

// warning and first choice for direction: choices LEFT or RIGHT - 2
// choices: ghost question and spelling backwards
const crossRoadsPrimary = () => {
    const rightOrLeft = prompt(`Well, well...few want to enter the magic forest, ${userName}. Let's get started. You only have three chances to make it through the magic forest, use them wisely. Do you want to go right or left?`);

    rightToLeftFixes = rightOrLeft.toLowerCase().trim();

    if (!rightToLeftFixes) {
        alert(`You can't just stay here! You'll just have to go the right.`);
        ghostNumberGuessing();
        // right
    } else if (rightToLeftFixes === 'right') {
        ghostNumberGuessing();
        // right
    } else if (rightToLeftFixes === 'left') {
        backwardsSpelling();
        // left
    } else {
        alert(`You can't just stay here! You'll just have to go the right.`);
        ghostNumberGuessing();
        // right
    }
}

// to the right (ghost random number guess) - 3
const ghostNumberGuessing = () => {  
    alert(`There's a spooky house up ahead. Let's go inside.`);

    let userNumberGuess = prompt(`Boo! The friendly neighbourhood ghost came out to play! He loves playing games. If you can guess what number he's thinking of between 0 and 3, he'll let you pass!`);

    ghostNumberGuest = Math.floor(Math.random() * 4);
    console.log(ghostNumberGuest);

    if (!userNumberGuess || userNumberGuess != ghostNumberGuest) {
        userNumberGuess = prompt('Oh no, try again!');

            if (!userNumberGuess || userNumberGuess != ghostNumberGuest) {
                userNumberGuess = prompt('Oh no, try again!');

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
}

//to the left - 3
const backwardsSpelling = () => {
    alert('You see a spooky cottage up ahead. Go inside...if you dare.');
    const userSpellingBackwards = prompt(`A spooky witch pops out and asks you to type 'Cats like to party' backwards. You only have one shot!`);

    // turning the string into an array to reverse it
    const cleanedUpUserSpellingBackwards = userSpellingBackwards.toLowerCase().split('');

    const reversedArray = cleanedUpUserSpellingBackwards.reverse();

    const backwardsString = reversedArray.join('');
    console.log(backwardsString);

};


$(window).on("load", function () {
    userNameGreeting();
});