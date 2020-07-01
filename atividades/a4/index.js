(() => {
  const ONE_MINUTE_IN_SECONDS = 60;
  const MAX_CHALLENGE_TIME = ONE_MINUTE_IN_SECONDS * 2;

  const challenge = {
    started: false,
    interval: null,
    maxTime: MAX_CHALLENGE_TIME,
    challengeText: "Esse é um texto de exemplo.",
    elements: {
      timer: document.getElementById("challenge-timer"),
      text: document.getElementById("challenge-text"),
      input: document.getElementById("challenge-input"),
      startButton: document.getElementById("challenge-start-button"),
      exitButton: document.getElementById("challenge-exit-button"),
      information: document.getElementById("challenge-information"),
      gameplay: document.getElementById("challenge-gameplay"),
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

  function setMaxTime(value) {
    challenge.maxTime = value;
  }

  function setTimer(value) {
    const { timer } = getElements();

    timer.textContent = value;
  }

  function setText(value) {
    const { text } = getElements();

    text.textContent = value;
  }

  function typedTextMatchesToChallengeText() {
    const { input } = getElements();

    return challenge.challengeText === input.value;
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

  function startChallenge() {
    const { gameplay, input, information, startButton, timer } = getElements();

    challenge.started = true;

    toggleElementDisabled(startButton, { disabled: true });
    setText(challenge.challengeText);
    toggleElementVisibility(information, { hide: true });
    toggleElementVisibility(gameplay, { show: true });

    input.value = "";
    input.focus();

    setMaxTime(MAX_CHALLENGE_TIME);
    setTimer(getFormmatedTime(challenge.maxTime));

    clearInterval(challenge.interval);
    challenge.interval = setInterval(() => {
      if (challenge.maxTime === 0) {
        looseChallenge();
        return;
      }

      setTimer(getFormmatedTime(--challenge.maxTime));
    }, 1000);
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

  function wonChallenge() {
    const { timer } = getElements();

    playAgain(
      `Você completou o desafio em ${timer.textContent}. Deseja jogar novamente?`
    );
  }

  function looseChallenge() {
    playAgain(`Você não completou o desafio... Deseja tentar novamente?`);
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
        wonChallenge();
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
