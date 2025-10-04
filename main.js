// Get to DOM Elements
const gameBox = document.querySelector('.container'),
    userResult = document.querySelector('.user-result img'),
    compResult = document.querySelector('.comp-result img'),
    result = document.querySelector('.result'),
    optionImage = document.querySelectorAll('.option-image');

// Loop through each option image element
optionImage.forEach((image, index) => {
    image.addEventListener('click', (e) => {
        image.classList.add('active');

        userResult.src = compResult.src = "images/rock.png";
        result.textContent = "Wait...";

        // Loop through each option image again
        optionImage.forEach((image2, index2) => {
            // if currentIndex != clickedIndex, then remove 'active' class from other images
            index !== index2 && image2.classList.remove('active');
        });

        gameBox.classList.add('start');

        // set a timeout to delay the result calculation
        let time = setTimeout(() => {
            gameBox.classList.remove('start');

            // get source of clickedImage
            let imgSrc = e.target.querySelector('img').src;
            // set the userImage to clickedImage option
            userResult.src = imgSrc;

            // generate a random number (0-2)
            let randomNumber = Math.floor(Math.random() * 3);
            // create an array of computer image option
            let compImages = ["images/rock.png", "images/paper.png", "images/scissors.png"];
            compResult.src = compImages[randomNumber];

            // assign a letter value to computer option ['R'=Rock, 'P'=Paper, 'S'=Scissors]
            let compValue = ["R", "P", "S"][randomNumber];
            // assign a letter value to clicked option (based on index)
            let userValue = ["R", "P", "S"][index];


            // create an object with all possible outcomes
            let possibleOutcomes = {
                RR: "Draw", PP: "Draw", SS: "Draw",
                PS: "Computer", RP: "Computer", SR: "Computer",
                PR: "User", RS: "User", SP: "User",
            };

            // look up the possibleOutcomes value based on user and computer options
            let possibleOutcomeValue = possibleOutcomes[userValue + compValue];

            // display the result
            result.textContent = userValue === compValue ? "Match Draw" : `${possibleOutcomeValue} Won!!`;
        }, 2000)

    });
});