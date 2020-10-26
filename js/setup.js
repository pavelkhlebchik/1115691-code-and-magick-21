'use strict';

const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Вашингтон`, `Кристоф`, `Люпита`, `Виктор`, `Юлия`];
const WIZARD_SURNAME = [`да Марья`, `Верон`, `Ирвинг`, `Нионго`, `Топольницкая`, `Онопко`, `Вальц`, `Мирабелла`];
const COAT_COLOR = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const EYES_COLOR = [`black`, `red`, `blue`, `yellow`, `green`];

const showTable = document.querySelector(`.setup`);
showTable.classList.remove(`hidden`);

const showWizardsList = showTable.querySelector(`.setup-similar-list`);

const wizardTemplate = document.querySelector(`#similar-wizard-template`)
  .content
  .querySelector(`.setup-similar-item`);

const getWizardInfo = function (array) {
  const randomElement = array[Math.floor(Math.random() * array.length)];
  return randomElement;
};

const wizards = [
  {
    name: (getWizardInfo(WIZARD_NAMES) + ` ` + getWizardInfo(WIZARD_SURNAME)),
    coatColor: getWizardInfo(COAT_COLOR),
    eyesColor: getWizardInfo(EYES_COLOR)
  },
  {
    name: (getWizardInfo(WIZARD_NAMES) + ` ` + getWizardInfo(WIZARD_SURNAME)),
    coatColor: getWizardInfo(COAT_COLOR),
    eyesColor: getWizardInfo(EYES_COLOR)
  },
  {
    name: (getWizardInfo(WIZARD_NAMES) + ` ` + getWizardInfo(WIZARD_SURNAME)),
    coatColor: getWizardInfo(COAT_COLOR),
    eyesColor: getWizardInfo(EYES_COLOR)
  },
  {
    name: (getWizardInfo(WIZARD_NAMES) + ` ` + getWizardInfo(WIZARD_SURNAME)),
    coatColor: getWizardInfo(COAT_COLOR),
    eyesColor: getWizardInfo(EYES_COLOR)
  }
];

const createWizards = function (wizard) {
  const wizardElement = wizardTemplate.cloneNode(true);
  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;

  return wizardElement;
};

const renderPlayerWizard = function () {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < wizards.length; i++) {
    fragment.appendChild(createWizards(wizards[i]));
  }
  showWizardsList.appendChild(fragment);

  return fragment;
};

renderPlayerWizard();

showTable.querySelector(`.setup-similar`).classList.remove(`hidden`);
