'use strict';

const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Вашингтон`, `Кристоф`, `Люпита`, `Виктор`, `Юлия`];
const WIZARD_SURNAME = [`да Марья`, `Верон`, `Ирвинг`, `Нионго`, `Топольницкая`, `Онопко`, `Вальц`, `Мирабелла`];
const COAT_COLOR = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const EYES_COLOR = [`black`, `red`, `blue`, `yellow`, `green`];

const setup = document.querySelector(`.setup`);
const setupOpen = document.querySelector(`.setup-open`);
const setupClose = setup.querySelector(`.setup-close`);
const setupUserName = setup.querySelector(`.setup-user-name`);

const showWizardsList = setup.querySelector(`.setup-similar-list`);

const wizardTemplate = document.querySelector(`#similar-wizard-template`)
  .content;

const getRandomValue = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

const generateWizards = function () {
  const wizards = [];
  for (let i = 0; i < 4; i++) {
    wizards.push({
      name: `${getRandomValue(WIZARD_NAMES)}` + ` ` + `${getRandomValue(WIZARD_SURNAME)}`,
      coatColor: `${getRandomValue(COAT_COLOR)}`,
      eyesColor: `${getRandomValue(EYES_COLOR)}`
    });
  }
  return wizards;
};

const wizardsList = generateWizards();

const createWizardTemplate = function (wizard) {
  const wizardElement = wizardTemplate.cloneNode(true);
  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;

  return wizardElement;
};

const renderWizards = function () {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < wizardsList.length; i++) {
    fragment.appendChild(createWizardTemplate(wizardsList[i]));
  }
  showWizardsList.appendChild(fragment);

  return fragment;
};
generateWizards();
renderWizards();

setup.querySelector(`.setup-similar`).classList.remove(`hidden`);

const onPopupEscPress = function (evt) {
  if (evt.key === `Escape`) {
    evt.preventDefault();
    closePopup();
  }
};

const inputFocus = function () {
  setupUserName.addEventListener(`focus`, function () {
    document.removeEventListener(`keydown`, onPopupEscPress);
  });
};

const openPopup = function () {
  setup.classList.remove(`hidden`);
  document.addEventListener(`keydown`, onPopupEscPress);
};

const closePopup = function () {
  setup.classList.add(`hidden`);
  document.removeEventListener(`keydown`, onPopupEscPress);
};

setupOpen.addEventListener(`click`, function () {
  openPopup();
  inputFocus();
});

setupClose.addEventListener(`click`, function () {
  closePopup();
});

const userWizardCoat = setup.querySelector(`.setup-wizard .wizard-coat`);
const userWizardEyes = setup.querySelector(`.setup-wizard .wizard-eyes`);
const userWizardFireball = setup.querySelector(`.setup-fireball-wrap`);

const selectWizardCoatColor = function () {

  const coatColor = [
    `rgb(101, 137, 164)`,
    `rgb(241, 43, 107)`,
    `rgb(146, 100, 161)`,
    `rgb(56, 159, 117)`,
    `rgb(215, 210, 55)`,
    `rgb(0, 0, 0)`
  ];

  userWizardCoat.style.fill = `${getRandomValue(coatColor)}`;
  // const inputCoat = setup.querySelector(`input[name="coat-color"]`);

};

userWizardCoat.addEventListener(`click`, selectWizardCoatColor);

const selectWizardEyesColor = function () {

  const eyesColor = [
    `black`,
    `yellow`,
    `red`,
    `blue`,
    `green`,
  ];
  userWizardEyes.style.fill = `${getRandomValue(eyesColor)}`;

};
userWizardEyes.addEventListener(`click`, selectWizardEyesColor);

const selectWizardFireballColor = function () {
  const fireballColor = [
    `#ee4830`,
    `#30a8ee`,
    `#5ce6c0`,
    `#e848d5`,
    `#e6e848`
  ];

  userWizardFireball.style.backgroundColor = `${getRandomValue(fireballColor)}`;
};

userWizardFireball.addEventListener(`click`, selectWizardFireballColor);

