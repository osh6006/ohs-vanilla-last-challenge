class luck {
  dice;
  diceResult;
  luckResult;
  luckMsgEl;
  luckDesc;
  luckMsg = [
    {
      className: "one",
      msg: "오늘의 운세는 1입니다. 밤에 뒤를 조심하세요. 😱",
    },
    {
      className: "two",
      msg: "오늘의 운세는 2입니다. 길에서 넘어질지도 몰라요 😢",
    },
    {
      className: "three",
      msg: "오늘의 운세는 3입니다. 평범한 하루겠네요 🙂",
    },
    {
      className: "four",
      msg: "오늘의 운세는 4입니다. 길가다 500원을 주울지도 몰라요 💿",
    },
    {
      className: "five",
      msg: "오늘의 운세는 5입니다. 친구랑 내기하세요 무조건 이깁니다 🥈",
    },
    {
      className: "six",
      msg: "오늘의 운세는 6입니다. 최고의 운세네요 복권을 사보세요! 🏆",
    },
  ];
  constructor() {
    this.assgnElement();
    this.addEvent();
  }
  assgnElement() {
    this.dice = document.querySelector(".dice");
    this.luckResult = document.querySelector(".luck-result");
    this.luckMsgEl = document.querySelector(".luck-msg");
    this.diceResult = document.querySelector(".dice-result .side");
    this.luckDesc = document.querySelector(".luck-desc");
  }
  addEvent() {
    this.dice.addEventListener("click", this.diceResultHandle.bind(this));
  }
  diceResultHandle() {
    // console.log("asdf");
    // this.dice.classList.toggle("move");
    this.dice.animate(
      {
        transform: [
          "rotateY(0deg) rotateX(360deg) rotateZ(30deg)",
          "rotateY(360deg) rotateX(100deg) rotateZ(270deg)",
          "rotateY(360deg) rotateX(100deg) rotateZ(270deg)",
        ],
      },
      {
        duration: 700,
        composite: "add", // *** this is the important line
      }
    );
    setTimeout(() => {
      this.dice.style.display = "none";
      this.luckDesc.style.display = "none";
      this.luckResult.style.display = "flex";
    }, 2000);
    const randomIndex = Math.floor(Math.random() * this.luckMsg.length);
    const selectedLuck = this.luckMsg[randomIndex];
    this.luckMsgEl.innerText = selectedLuck.msg;
    this.diceResult.classList.add(selectedLuck.className);
  }
}

new luck();
