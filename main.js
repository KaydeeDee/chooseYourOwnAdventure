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
const crossRoadsPrimary = () => {
    const rightOrLeft = prompt(`Well, well...few want to enter the magic forest, ${userName}. Let's get started. Do you want to go right or left?`).toLowerCase().trim();
    if (!rightOrLeft || rightOrLeft != 'right' || rightOrLeft != 'left') {
        alert(`You can't just stay here! You'll just have to go the right.`);
        toTheRight();
    } else if (rightOrLeft === 'right') {
        toTheRight();
    } else {
        toTheLeft();
    }
}

// to the right (ghost random number guess) - 3
const toTheRight = () => {  
    alert(`There's a spooky house up ahead. Let's go inside.`);

    let userNumberGuess = prompt(`Boo! The friendly neighbourhood ghost came out to play! He loves playing games. If you can guess what number he's thinking of between 1 and 5, he'll let you pass!`);

    ghostNumberGuest = Math.floor(Math.random() * 6);

    if (!userNumberGuess || userNumberGuess != ghostNumberGuest) {
        userNumberGuess = prompt('Oh no, try again!');
    } else {
        alert('You got it! Keep going down the path...if you dare!');
    }
}

//to the left - 3
const toTheLeft = () => {
    alert('to the left');
};


$(window).on("load", function () {
    userNameGreeting();
});