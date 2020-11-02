'use strict';

const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Вашингтон`, `Кристоф`, `Люпита`, `Виктор`, `Юлия`];
const WIZARD_SURNAME = [`да Марья`, `Верон`, `Ирвинг`, `Нионго`, `Топольницкая`, `Онопко`, `Вальц`, `Мирабелла`];
const COAT_COLOR = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const EYES_COLOR = [`black`, `red`, `blue`, `yellow`, `green`];

const showTable = document.querySelector(`.setup`);
showTable.classList.remove(`hidden`);

const showWizardsList = showTable.querySelector(`.setup-similar-list`);

const wizardTemplate = document.querySelector(`#similar-wizard-template`)
  .content;

const getWizardInfo = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

const generateWizards = function () {
  const wizards = [];
  for (let i = 0; i < 4; i++) {
    wizards.push({
      name: `${getWizardInfo(WIZARD_NAMES)}` + ` ` + `${getWizardInfo(WIZARD_SURNAME)}`,
      coatColor: `${getWizardInfo(COAT_COLOR)}`,
      eyesColor: `${getWizardInfo(EYES_COLOR)}`
    });
  }
  return wizards;
};

const wizardsList = generateWizards();

const renderWizards = function () {
  const createWizardTemplate = function (wizard) {
    const wizardElement = wizardTemplate.cloneNode(true);
    wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
    wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
    wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;

    return wizardElement;
  };

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < wizardsList.length; i++) {
    fragment.appendChild(createWizardTemplate(wizardsList[i]));
  }
  showWizardsList.appendChild(fragment);

  return fragment;
};
generateWizards();
renderWizards();

showTable.querySelector(`.setup-similar`).classList.remove(`hidden`);
