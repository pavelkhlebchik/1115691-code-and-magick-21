'use strict';
const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;

const CLOUD_X = 100;
const CLOUD_Y = 10;
const SHADOW_GAP = 10;
const GAP = 50;
const BAR_WIDTH = 40;
const TEXT_HEIGHT = 25;
const BAR_HEIGHT = -CLOUD_HEIGHT + (GAP * 3) + TEXT_HEIGHT;

const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const renderText = function (ctx, color, font, text, x, y) {
  ctx.fillStyle = color;
  ctx.font = font;
  ctx.fillText(text, x, y);
};

const getRandomHsla = function () {
  const randomNum = (Math.random() * (1 - 0.1) + 0.1).toFixed(1);
  return randomNum;
};

const getMaxElement = function (arr) {
  let maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(
      ctx,
      CLOUD_X + SHADOW_GAP,
      CLOUD_Y + SHADOW_GAP,
      `rgba(0, 0, 0, 0.7)`
  );
  renderCloud(
      ctx,
      CLOUD_X,
      CLOUD_Y,
      `#fff`
  );

  renderText(
      ctx,
      `#606060`,
      `16px, PT Mono`,
      `Ура вы победили!`,
      CLOUD_X + GAP,
      GAP
  );

  renderText(
      ctx,
      `#606060`,
      `16px, PT Mono`,
      `Список результатов:`,
      CLOUD_X + GAP,
      GAP * 1.5
  );

  let maxTime = getMaxElement(times);
  for (let i = 0; i < players.length; i++) {

    renderText(
        ctx,
        `#606060`,
        `16px, PT Mono`,
        players[i],
        CLOUD_X + GAP + (BAR_WIDTH + GAP) * i,
        CLOUD_HEIGHT - SHADOW_GAP
    );

    if (players[i] === `Вы`) {
      ctx.fillStyle = `rgba(255, 0, 0, 1)`;
    } else {
      ctx.fillStyle = `hsla(240, 100%, 50%, ${getRandomHsla()} )`;
    }

    ctx.fillRect(
        CLOUD_X + GAP + (BAR_WIDTH + GAP) * i,
        CLOUD_HEIGHT - SHADOW_GAP - TEXT_HEIGHT,
        BAR_WIDTH,
        ((BAR_HEIGHT * times[i]) / maxTime)
    );

    renderText(
        ctx,
        `#606060`,
        `16px, PT Mono`,
        Math.round(times[i], 1),
        CLOUD_X + GAP + (BAR_WIDTH + GAP) * i,
        (CLOUD_HEIGHT - SHADOW_GAP - TEXT_HEIGHT) + ((BAR_HEIGHT * times[i]) / maxTime) - TEXT_HEIGHT
    );
  }
};
