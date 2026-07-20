function checkPass() {

    let pass = document.getElementById("pass").value;

    if (pass === "0101") {

        window.location.href = "gift.html";

    } else {

        document.getElementById("error").innerHTML = "❌ Wrong Passcode! Try Again";

        document.getElementById("pass").value = "";

    }

}


// 💖 Floating Hearts

setInterval(() => {

    let heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 5000);

}, 500);


// 🎵 Music Play / Pause

function playMusic() {

    let music = document.getElementById("music");

    if (music.paused) {

        music.play();

    } else {

        music.pause();

    }

}