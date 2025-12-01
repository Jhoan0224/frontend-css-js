
class TheTimer {
    #numHours;
    #numMinutes;
    #numSeconds;
    #buttonRunTimer;
    #btnStopClock;
    #btnContinueClock;
    #timerPausado;
    #domHora;
    #domMinuto;
    #domSegundo;
    #totalSegundos;
    #buttonResetTimer;
    #initialTotalSeconds;
    constructor() {
        this.#numHours = document.getElementById("numHoras");
        this.#numMinutes = document.getElementById("numMinutes");
        this.#numSeconds = document.getElementById("numSeconds");

        this.#buttonRunTimer = document.getElementById("btnRunTimer");
        this.#btnStopClock = document.getElementById("btnPauseTimer");
        this.#btnContinueClock = document.getElementById("btnContinueTimer");
        this.#timerPausado = false;

        this.#domHora = document.getElementById("hour");
        this.#domMinuto = document.getElementById("minute");
        this.#domSegundo = document.getElementById("second");

        this.#buttonRunTimer.addEventListener("click", () => this.verificarValuesTimer());
        this.#btnStopClock.addEventListener("click", () => this.pausarTimer());
        this.#btnContinueClock.addEventListener("click", () => this.pausarTimer());
        this.#buttonResetTimer = document.getElementById("btnResetTimer").addEventListener("click", () => this.resetTimer());
    }

    resetTimer() {
        this.#totalSegundos = this.#initialTotalSeconds;
    }
    pausarTimer(){
        if(this.#timerPausado === false){
            this.#btnStopClock.style.display = "none";
            this.#btnContinueClock.style.display = "block";
            this.#timerPausado = true;
            
        } else if (this.#timerPausado === true) {
            this.#btnStopClock.style.display = "block";
            this.#btnContinueClock.style.display = "none";
            this.#timerPausado = false;
        }   
    }

    verificarValuesTimer(){
        try {
            const horas = parseInt(this.#numHours.value) || 0;
            const minutos = parseInt(this.#numMinutes.value) || 0;
            const segundos = parseInt(this.#numSeconds.value) || 0;

            if(horas < 0 || horas >=24) {
                return alert("El valor de la hora no es valido");
            }
            if (minutos <0 || minutos >59) {
                return alert("El valor de los minutos no es valido");
            }
            if (segundos <=0 || segundos >59) {
                return alert("El valor de los segundos no es valido");
            }
            this.runTimer(horas, minutos, segundos);
        } catch (error) {
            console.log("Erro: ", error);
        }
    }

    runTimer(horas, minutos, segundos) {
        this.#initialTotalSeconds = horas * 3600 + minutos * 60 + segundos;
        this.#totalSegundos = horas * 3600 + minutos * 60 + segundos;

        const timerInterval = setInterval(() => {
            if (this.#timerPausado === false){
                this.#domHora.innerHTML = `${String(Math.floor(this.#totalSegundos / 3600)).padStart(2, "0")}`;
                this.#domMinuto.innerHTML = `${String(Math.floor(this.#totalSegundos / 60)).padStart(2, "0")}`;
                this.#domSegundo.innerHTML = `${String(Math.floor(this.#totalSegundos % 60)).padStart(2, "0")}`;
                
                this.#totalSegundos --;
                if (this.#totalSegundos < 0) clearInterval(timerInterval);
            }
        }, 1000);
    }

    refreshSecond(second) {
        document.getElementById("second").innerHTML = `${second}`;
    }
    refreshMinutes(minute){
        document.getElementById("minute").innerHTML = `${minute}`;
    }
    refreshHours(horas){
        document.getElementById("hour").innerHTML = `${horas}`;
    }
}


// class DClock {
//     #hours = 12;
//     #minutes = 60;
//     #seconds = 60;

//     constructor() {
//         this.second = document.getElementById("second");
//         this.runDClock();
//     }

//     runDClock() {
//         this.refreshSecond();
//     }
//     refreshSecond(){
//         this.#seconds -= 1;
//         this.second.innerHTML = `${this.#seconds}`;
//         if(this.#seconds > 1) {
//             setTimeout(() => this.refreshSecond(), 1000);
//         }
//     }
// }