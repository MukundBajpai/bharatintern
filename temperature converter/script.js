function convertToCelsius() {
    var fahrenheitInput = document.getElementById("fahrenheitInput");
    var kelvinInput = document.getElementById("kelvinInput");
    if (fahrenheitInput.value !== "") {
      var celsius = (fahrenheitInput.value - 32) * 5 / 9;
      document.getElementById("result").innerHTML = fahrenheitInput.value + "°F = " + celsius.toFixed(2) + "°C";
      changeBackgroundImage(celsius);
    } else if (kelvinInput.value !== "") {
      var celsius = kelvinInput.value - 273.15;
      document.getElementById("result").innerHTML = kelvinInput.value + "K = " + celsius.toFixed(2) + "°C";
      changeBackgroundImage(celsius);
    }
  }
  
  function convertToFahrenheit() {
    var celsiusInput = document.getElementById("celsiusInput");
    var kelvinInput = document.getElementById("kelvinInput");
    if (celsiusInput.value !== "") {
      var fahrenheit = (celsiusInput.value * 9 / 5) + 32;
      document.getElementById("result").innerHTML = celsiusInput.value + "°C = " + fahrenheit.toFixed(2) + "°F";
      changeBackgroundImage(celsiusInput.value);
    } else if (kelvinInput.value !== "") {
      var fahrenheit = (kelvinInput.value - 273.15) * 9 / 5 + 32;
      document.getElementById("result").innerHTML = kelvinInput.value + "K = " + fahrenheit.toFixed(2) + "°F";
      changeBackgroundImage(kelvinInput.value - 273.15);
    }
  }
  
  function convertToKelvin() {
    var celsiusInput = document.getElementById("celsiusInput");
    var fahrenheitInput = document.getElementById("fahrenheitInput");
    if (celsiusInput.value !== "") {
      var kelvin = parseFloat(celsiusInput.value) + 273.15;
      document.getElementById("result").innerHTML = celsiusInput.value + "°C = " + kelvin.toFixed(2) + "K";
      changeBackgroundImage(celsiusInput.value);
    } else if (fahrenheitInput.value !== "") {
      var kelvin = (parseFloat(fahrenheitInput.value) + 459.67) * 5 / 9;
      document.getElementById("result").innerHTML = fahrenheitInput.value + "°F = " + kelvin.toFixed(2) + "K";
      changeBackgroundImage((parseFloat(fahrenheitInput.value) - 32) * 5 / 9);
    }
  }
  
  function changeBackgroundImage(temperature) {
    var body = document.body;
    if (temperature > 25) {
      body.style.backgroundImage = "url('hot.jpg')";
    } else if (temperature < 10) {
      body.style.backgroundImage = "url('cold.jpg')";
    } else {
      body.style.backgroundImage = "url('default.jpg')";
    }
  }
  