function accept(){
    nama = document.getElementById("nama").value.trim();
    correctName= "Maureen";
    button = document.getElementById("pindah");
    
    if(nama===correctName){
        button.style.display = "block"
        document.getElementById("judul").innerHTML = "Selamat Datang! Morinn <3"
        document.getElementById("login").style.display = "none"
        document.getElementById("tanya").style.display = "block"
        document.getElementById("reject").style.display = "block"

        document.body.classList.add("fade");

       

        setTimeout(() => {
            document.body.style.backgroundImage = "url('bglove.jpg')";
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundPosition = "center";
            document.body.classList.remove("fade");
        }, 100);

    scalar=2
    love= confetti.shapeFromText({text: '❤️', scalar});
    bocil= confetti.shapeFromText({text: '𝓜♡', scalar});

    defaults = {
        spread: 360,
        ticks: 60,
        gravity: 0,
        decay: 0.96,
        startVelocity: 15,
        shapes: [love, bocil],
        scalar
    };
    function shoot(){
        confetti({
        ...defaults,
        particleCount: 30,
        });
    };
    confetti({
        ...defaults,
        particleCount: 5,
        flat: true, 
    });
    confetti({
        ...defaults,
        particleCount: 15,
        scalar: scalar /2,
        shapes: ['circle'],
    });

    shoot(love);
    shoot(bocil);

    setTimeout(shoot, 0);
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);
    }
    else{
        button.style.display = "none";
        alert("Nama yang diinput bukan nama spesial yang ada dalam daftar ini ^_^")
    }
}
function pindah(){
    window.location.href = "home.html";
}

function timer(){
    window.location.href = "timer.html";
}
function visual(){
    window.location.href = "visual.html"
}
function playlist(){
    window.location.href = "https://open.spotify.com/playlist/5QJsODWqrOlaWcc7rEI5ls?si=dfadbfeb8ccb46bd"
}
function journey(){
    window.location.href = "journey.html"
}

//tolak
function tolak() {
    let buttonNo = document.getElementById("reject");
    let buttonYes = document.getElementById("pindah");

    if (buttonNo) {
        buttonNo.style.display = "none";
        buttonYes.style.height = "80px";
        document.getElementById("judul").innerHTML = "TERIMAAA!! 😡😡😡"
        return;
    }
}