class Login {
  #HIDDEN_CLASSNAME = "hidden";
  #USERNAME_KEY = "username";
  loginPopupEl;
  loginInputEl;
  loginBtnEl;
  loginAfterEl;
  constructor() {
    this.assignElement();
    this.addEvent();
    this.isCheckLogin();
  }
  assignElement() {
    this.loginPopupEl = document.querySelector(".login-popup");
    this.loginInputEl = document.getElementById("loginInput");
    this.loginBtnEl = document.getElementById("loginBtn");
    this.loginAfterEl = document.querySelector(".login-after");
  }
  addEvent() {
    this.loginBtnEl.addEventListener("click", this.onLogin.bind(this));
  }

  isCheckLogin() {
    const user = localStorage.getItem(this.#USERNAME_KEY);
    if (user) {
      this.loginPopupEl.classList.add(this.#HIDDEN_CLASSNAME);
      console.log(this.loginAfterEl);
      this.loginAfterEl.style.display = "flex";
    } else {
      this.loginPopupEl.classList.remove(this.#HIDDEN_CLASSNAME);
      this.loginAfterEl.style.display = "none";
    }
  }

  onLogin(event) {
    const userName = this.loginInputEl.value;
    if (userName !== "") {
      localStorage.setItem(this.#USERNAME_KEY, userName);
    }
    this.isCheckLogin();
  }
}

new Login();
