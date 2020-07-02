(() => {
  const ONE_MINUTE_IN_SECONDS = 60;
  const MAX_CHALLENGE_TIME = ONE_MINUTE_IN_SECONDS * 2;
  const LAST_LEVEL = 4;

  const levels = {
    "pt-br": [
      "Esse é o primeiro level do jogo, boa sorte!",
      "Agora as coisas começam a ficar um pouco mais difíceis.",
      "Se bem que você está indo muito bem... Mas será que conseguirá terminar esse jogo?",
      "Bom, esse é o último nível! Será que você conseguirá terminar a tempo? 3u 4cr3d1t0 qu3 n40... S3 c0ns3gu1r, b3m v1nd0 40 t1m3!",
    ],
    us: [
      "This is the first level of the game, good luck!",
      "Now things are starting to get a little more difficult.",
      "Although you are doing very well... But will you be able to finish this game?",
      "Well, this is the last level, but will you be able to finish in time? 1 b3l13v3 n0t...1f y0u c4n, w3lc0m3 t0 th3 t34m!",
    ],
    es: [
      "Este es el primer nivel del juego, buena suerte!",
      "Ahora las cosas comienzan a ponerse un poco más difíciles.",
      "Aunque lo estás haciendo muy bien... Podrás terminar este juego?",
      "Bueno, este es el último nivel, pero podrás terminar a tiempo? Cr30 qu3 n0... S1 pu3d3s, b13nv3n1d0 4l 3qu1p0!",
    ],
  };

  const challenge = {
    started: false,
    interval: null,
    maxTime: MAX_CHALLENGE_TIME,
    currentLevel: 1,
    text: "",
    language: document.querySelector("[name='lang']:checked").value,
    elements: {
      timer: document.getElementById("challenge-timer"),
      text: document.getElementById("challenge-text"),
      input: document.getElementById("challenge-input"),
      startButton: document.getElementById("challenge-start-button"),
      exitButton: document.getElementById("challenge-exit-button"),
      information: document.getElementById("challenge-information"),
      gameplay: document.getElementById("challenge-gameplay"),
      level: document.getElementById("challenge-level"),
    },
  };

  function challengeStarted() {
    return challenge.started;
  }

  function getElements() {
    return challenge.elements;
  }

  function toggleElementDisabled(element, { disabled, enabled } = {}) {
    if (disabled) {
      element.setAttribute("disabled", true);
      return;
    }

    if (enabled) {
      element.removeAttribute("disabled");
      return;
    }
  }

  function toggleElementVisibility(element, { hide, show } = {}) {
    if (hide) {
      element.style.display = "none";
      return;
    }

    if (show) {
      element.style.display = "block";
      return;
    }
  }

  function padLeftWithTwoZeros(value = "") {
    return value.toString().padStart(2, "0");
  }

  function getFormmatedTime(timeInSeconds) {
    const time = timeInSeconds / ONE_MINUTE_IN_SECONDS;
    const minutes = parseInt(time);
    const seconds = Math.round((time - minutes) * ONE_MINUTE_IN_SECONDS);

    return `${padLeftWithTwoZeros(minutes)}:${padLeftWithTwoZeros(seconds)}`;
  }

  function setLanguage() {
    challenge.language = document.querySelector("[name='lang']:checked").value;
  }

  function setMaxTime(value) {
    challenge.maxTime = value;
  }

  function setTextContent(element, value) {
    element.textContent = value;
  }

  function setTimer(value) {
    const { timer } = getElements();

    setTextContent(timer, value);
  }

  function getCurrentLevelText(currentLevel) {
    const { language } = challenge;

    return levels[language][currentLevel - 1];
  }

  function setText(currentLevel) {
    const { text } = getElements();
    const value = getCurrentLevelText(currentLevel);

    challenge.text = value;
    setTextContent(text, value);
  }

  function setLevel(value) {
    const { level } = getElements();

    challenge.currentLevel = value;
    setTextContent(level, value);
  }

  function clearAndFocusOnInput() {
    const { input } = getElements();

    input.value = "";
    input.focus();
  }

  function typedTextMatchesToChallengeText() {
    const { input } = getElements();

    return challenge.text === input.value;
  }

  function resetChallenge() {
    const { gameplay, information, startButton } = getElements();

    setMaxTime(MAX_CHALLENGE_TIME);
    setTimer(getFormmatedTime(challenge.maxTime));

    toggleElementVisibility(gameplay, { hide: true });
    toggleElementVisibility(information, { show: true });

    toggleElementDisabled(startButton, { enabled: true });

    clearInterval(challenge.interval);
  }

  function initTimerInterval() {
    clearInterval(challenge.interval);

    challenge.interval = setInterval(() => {
      if (challenge.maxTime === 0) {
        looseChallenge();
        return;
      }

      setTimer(getFormmatedTime(--challenge.maxTime));
    }, 1000);
  }

  function startChallenge() {
    const { gameplay, information, startButton, timer } = getElements();

    challenge.started = true;

    toggleElementDisabled(startButton, { disabled: true });
    toggleElementVisibility(information, { hide: true });
    toggleElementVisibility(gameplay, { show: true });

    clearAndFocusOnInput();

    setLanguage();
    setText(1);
    setLevel(1);
    setMaxTime(MAX_CHALLENGE_TIME);
    setTimer(getFormmatedTime(challenge.maxTime));

    initTimerInterval();
  }

  function stopChallenge() {
    const { timer, input } = getElements();

    challenge.started = false;

    toggleElementDisabled(input, { disabled: true });
    clearInterval(challenge.interval);
  }

  function playAgain(message) {
    const confirm = window.confirm(message);

    if (confirm) {
      startChallenge();
      return;
    }

    resetChallenge();
  }

  function goToNextLevel() {
    clearAndFocusOnInput();

    const nextLevel = challenge.currentLevel + 1;

    setText(nextLevel);
    setLevel(nextLevel);
  }

  function wonChallenge() {
    const { timer } = getElements();

    playAgain(
      `Você completou o desafio em ${timer.textContent}. Deseja jogar novamente?`
    );
  }

  function looseChallenge() {
    playAgain(`Você não completou o desafio... Deseja tentar novamente?`);
  }

  function completeLastLevel() {
    return challenge.currentLevel === LAST_LEVEL;
  }

  function initListeners() {
    const { input, exitButton, startButton } = getElements();

    exitButton.addEventListener("click", () => {
      resetChallenge();
    });

    startButton.addEventListener("click", () => {
      startChallenge();
    });

    input.addEventListener("keyup", () => {
      if (typedTextMatchesToChallengeText()) {
        if (completeLastLevel()) {
          wonChallenge();
          return;
        }

        goToNextLevel();
      }
    });

    input.addEventListener("paste", (event) => event.preventDefault());
    input.addEventListener("drop", (event) => event.preventDefault());
  }

  function init() {
    initListeners();
  }

  init();
})();
