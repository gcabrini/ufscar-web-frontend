(() => {
  const ONE_MINUTE_IN_SECONDS = 60;

  const challenge = {
    started: false,
    interval: null,
    maxTime: ONE_MINUTE_IN_SECONDS * 2,
    challengeText: "Esse é um texto de exemplo.",
    elements: {
      timer: document.getElementById("challenge-timer"),
      text: document.getElementById("challenge-text"),
      input: document.getElementById("challenge-input"),
      startButton: document.getElementById("challenge-start-button"),
    },
  };

  function challengeStarted() {
    return challenge.started;
  }

  function getElements() {
    return challenge.elements;
  }

  function disableElement(element) {
    element.setAttribute("disabled", true);
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

  function startChallenge() {
    const { timer, startButton } = getElements();

    challenge.started = true;
    disableElement(startButton);
    setText(challenge.challengeText);
    setTimer(getFormmatedTime(challenge.maxTime));

    challenge.interval = setInterval(() => {
      if (challenge.maxTime === 0) {
        stopChallenge();
        return;
      }

      setTimer(getFormmatedTime(--challenge.maxTime));
    }, 1000);
  }

  function stopChallenge() {
    const { timer, input } = getElements();

    challenge.started = false;

    disableElement(input);
    clearInterval(challenge.interval);
  }

  function initListeners() {
    const { input, startButton } = getElements();

    startButton.addEventListener("click", () => {
      startChallenge();
    });

    input.addEventListener("keyup", () => {
      if (typedTextMatchesToChallengeText()) {
        stopChallenge();
      }
    });
  }

  function init() {
    initListeners();
  }

  init();
})();
