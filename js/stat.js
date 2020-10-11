'use strict';
const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;

const CLOUD_X = 100;
const CLOUD_Y = 10;
const SHADOW_GAP = 10;
const GAP = 50;
const BAR_WIDTH = 40;
const TEXT_HEIGHT = 25;
const barHeight = -CLOUD_HEIGHT + GAP;

const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
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

  let maxTime = getMaxElement(times);

  for (let i = 0; i < players.length; i++) {
    ctx.fillStyle = `rgba(255, 0, 0, 1)`;
    ctx.fillText(
        players[i],
        CLOUD_X + GAP + (BAR_WIDTH + GAP) * i,
        CLOUD_HEIGHT - SHADOW_GAP
    );
    ctx.fillRect(
        CLOUD_X + GAP + (BAR_WIDTH + GAP) * i,
        CLOUD_HEIGHT - SHADOW_GAP - TEXT_HEIGHT,
        BAR_WIDTH,
        (barHeight * times[i]) / maxTime
    );
    // тут я пытался выделить цветом результат пользователя "Вы"
    // if (players.length === 2) {
    //   ctx.fillStyle = `rgba(0, 0, 255, 1)`;
    // }
  }
};
