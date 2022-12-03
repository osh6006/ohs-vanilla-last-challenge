class Waether {
  weather;
  city;
  ondo;
  constructor() {
    this.assignElement();
    this.initWaether();
  }
  assignElement() {
    this.weather = document.querySelector(".waether-nal");
    this.city = document.querySelector(".waether-city");
    this.ondo = document.querySelector(".waether-on");
  }
  initWaether() {
    navigator.geolocation.getCurrentPosition(
      this.getWaether.bind(this),
      this.getError
    );
  }
  getWaether(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const API_KEY = "f79ff78b6d115afb2c171b3d1759d92e";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const test = document.querySelector(".waether-contents");
        const img = document.createElement("img");
        const imgURL =
          "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        img.src = imgURL;
        test.appendChild(img);
        this.city.innerText = data.name;
        this.weather.innerText = `${data.weather[0].main}`;
        this.ondo.innerText = `${Math.floor(data.main.temp - 273.15)}°C`;
      });
  }

  getError() {
    alert("Can't find you");
  }
}

new Waether();
