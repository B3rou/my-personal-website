let themeTimeout;
let themeVersion = 0;

function play(playerChoice) {
  const choices = ["Taş", "Kağıt", "Makas"];
  const beratsChoice = choices[Math.floor(Math.random() * 3)];

  let result = "";

  if (playerChoice === beratsChoice) {
    result = "Berabere!";
    updateTheme("normal");
  } 
  else if (
    (playerChoice === "Taş" && beratsChoice === "Makas") ||
    (playerChoice === "Kağıt" && beratsChoice === "Taş") ||
    (playerChoice === "Makas" && beratsChoice === "Kağıt")
  ) {
    result = "Kazandın! 🎉";
    updateTheme("win");
  } 
  else {
    result = "Kaybettin 😢";
    updateTheme("lose");
  }

  document.getElementById("result").innerText =
    "Sen: " + playerChoice +
    " | Ben: " + beratsChoice +
    " → " + result;
}

/* EASTER EGG FUNCTION */
function easterEgg() {
  document.getElementById("footerText").innerText =
    "© 2025 Evet, Muhammed Berat Kolip'ten bahsediyorum.";
}

/* THEME UPDATE FUNCTION */
function updateTheme(result) {
  const nav = document.getElementById("navbar");
  const footer = document.getElementById("footer");

  themeVersion++;
  const currentVersion = themeVersion;

  nav.className = "";
  footer.className = "";
  document.body.className = "";

  if (result === "win") {
    nav.classList.add("win");
    footer.classList.add("win");
    document.body.classList.add("win");

    setTimeout(() => {
      if (currentVersion === themeVersion) {
        resetTheme();
      }
    }, 2000);
  } else if (result === "lose") {
    nav.classList.add("lose");
    footer.classList.add("lose");
    document.body.classList.add("lose");

    setTimeout(() => {
      if (currentVersion === themeVersion) {
        resetTheme();
      }
    }, 2000);
  } else {
    nav.classList.add("normal");
    footer.classList.add("normal");
    document.body.classList.add("normal");

    setTimeout(() => {
      if (currentVersion === themeVersion) {
        resetTheme();
      }
    }, 2000);
  }
}

/* RESET THEME FUNCTION */
function resetTheme() {
  const nav = document.getElementById("navbar");
  const footer = document.getElementById("footer");

  nav.className = "normal";
  footer.className = "normal";
  document.body.className = "normal";
}

resetTheme();