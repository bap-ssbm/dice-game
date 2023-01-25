


document.querySelector('button').addEventListener('click', function() {

    var randomNumber1 = 1 + Math.floor(Math.random() * 6);
    var sourceText1 = "images/dice" + randomNumber1 + ".png";
    document.querySelector(".img1").setAttribute("src", sourceText1);

    var randomNumber2 = 1 + Math.floor(Math.random() * 6);
    var sourceText2 = "images/dice" + randomNumber2 + ".png";
    document.querySelector(".img2").setAttribute("src", sourceText2);

    if (randomNumber1 === randomNumber2) {
        document.querySelector("h1").textContent = "Tie";
    }
    else if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
    }
    else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
    }

})