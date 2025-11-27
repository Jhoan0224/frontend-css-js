
class DClock {
    #hours = 12;
    #minutes = 60;
    #seconds = 60;

    constructor() {
        this.second = document.getElementById("second");
        this.runDClock();
    }

    runDClock() {
        this.refreshSecond();
    }
    refreshSecond(){
        this.#seconds -= 1;
        this.second.innerHTML = `${this.#seconds}`;
        if(this.#seconds > 1) {
            setTimeout(() => this.refreshSecond(), 1000);
        }
    }
}