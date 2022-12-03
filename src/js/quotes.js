class Quotes {
  quotes = [
    {
      eng: "The way to get started is to quit talking and begin doing. ",
      kor: "일을 시작하는 방법은 말하는 것을 멈추고 행동으로 옮기는 것이다.",
      author: "Walt Disney",
    },
    {
      eng: "I find that the harder I work, the more luck I seem to have.",
      kor: "더 열심히 일하면 할수록 운이 더 좋아진다는 것을 알게 된다. ",
      author: "Thomas Jefferson",
    },
    {
      eng: "It is better to fail in originality than to succeed in imitation.",
      kor: "모방에서 성공하기보다는 독창성에서 실패하는 것이 낫다.",
      author: "Herman Melville",
    },
    {
      eng: "The road to success and the road to failure are almost exactly the same.",
      kor: "성공하는 길과 실패하는 길은 거의 같다.",
      author: "Colin R. Davis",
    },
    {
      eng: "Opportunities don’t happen. You create them.",
      kor: "기회는 일어나는 게 아니라 당신이 만드는 것이다.",
      author: "Chris Grosser",
    },
    {
      eng: "Stop chasing the money and start chasing the passion.",
      kor: "돈 쫓는 것 멈추고 열정 쫓기 시작하라.",
      author: "Tony Hsieh",
    },
    {
      eng: "All progress takes place outside the comfort zone.",
      kor: "모든 성과는 요령을 피우지 않을 때 생긴다.",
      author: "Michael John Bobak",
    },
    {
      eng: "Success usually comes to those who are too busy to be looking for it.",
      kor: "성공은 주로 성공을 찾느라 바쁜 사람들에게 찾아온다. ",
      author: "Henry David Thoreau",
    },
    {
      eng: "Success seems to be connected with action. Successful people keep moving.",
      kor: "성공은 행동과 연결되어 있다. 성공적인 사람들은 계속해서 움직인다.",
      author: "Conrad Hilton",
    },
    {
      eng: "In order to succeed, we must first believe that we can.",
      kor: "성공하기 위해서, 우리는 먼저 우리 자신이 할 수 있다는 것을 믿어야 한다.",
      author: "Nikos",
    },
  ];
  quotesEng;
  quotesKr;
  quotesAuthor;
  constructor() {
    this.assignElement();
    this.selectQuote();
  }
  assignElement() {
    this.quotesEng = document.querySelector(".quotes-eng");
    this.quotesKr = document.querySelector(".quotes-kr");
    this.quotesAuthor = document.querySelector(".quotes-author");
  }
  selectQuote() {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    const selectedQuote = this.quotes[randomIndex];
    this.quotesEng.innerText = selectedQuote.eng;
    this.quotesKr.innerText = selectedQuote.kor;
    this.quotesAuthor.innerText = selectedQuote.author;
  }
}

new Quotes();
