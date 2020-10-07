'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;

const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect = (x, y, CLOUD_HEIGHT, CLOUD_WIDTH);
};

window.renderStatistics = function (ctx) {
  renderCloud(ctx, 110, 20, `rgba(0, 0, 0, 0.7)`);
  renderCloud(ctx, 100, 10, `#fff`);

  ctx.fillStyle =   ctx.fillRect = ();

  ctx.fillText = ` ’Ура вы победили! \nСписок результатов: ’`;
};
