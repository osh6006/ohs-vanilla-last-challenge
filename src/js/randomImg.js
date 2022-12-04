class RandomImg {
  randomURL = [
    "https://images.pexels.com/photos/688574/pexels-photo-688574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/713148/pexels-photo-713148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2885320/pexels-photo-2885320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2341830/pexels-photo-2341830.jpeg",
    "https://images.pexels.com/photos/4512439/pexels-photo-4512439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/923360/pexels-photo-923360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  mainContentsEl;
  constructor() {
    this.assignElement();
    this.test();
  }
  assignElement() {
    this.mainContentsEl = document.querySelector(".main-content");
  }
  test() {
    const randomIndex = Math.floor(Math.random() * this.randomURL.length);
    const selectedImg = this.randomURL[randomIndex];
    this.mainContentsEl.style.backgroundImage = `url(${selectedImg})`;
  }
}

new RandomImg();
