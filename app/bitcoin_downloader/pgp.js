export var discover = function () {
  return require('child_process').spawnSync('which', ['gpg']).status === 0;
};

