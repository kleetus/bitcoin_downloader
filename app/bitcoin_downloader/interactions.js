import { discover } from './pgp.js';

export var greet = function () {
    return 'Welcome to the Bitcoin Downloader!';
};

export var foundPGP = function () {
    if (discover()) {
      return "OK.";
    }
    return "We did not find GPG or PGP on your system."
};
