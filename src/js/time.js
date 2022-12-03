class Time {
  clock;
  constructor() {
    this.assignElement();
    this.addEvent();
    this.startClock();
  }
  assignElement() {
    this.clock = document.querySelector(".time-clock");
  }
  addEvent() {}

  getTime() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    this.clock.innerText = `${hours}:${minutes}:${seconds}`;
  }
  startClock() {
    setInterval(this.getTime.bind(this), 1000);
  }
}

new Time();
