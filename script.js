//your code here

//your code here

function swapTheme() {
  const app = document.getElementById("app");
  const button = document.getElementById("swap");

  // Toggle between day and night
  if (app.classList.contains("day")) {
    app.classList.replace("day", "night");
    button.classList.replace("button_day", "button_night");
  } else {
    app.classList.replace("night", "day");
    button.classList.replace("button_night", "button_day");
  }
}
