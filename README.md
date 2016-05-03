Supported Platforms:

* Mac, Linux, Windows, ARM hardfloat

Purpose:

VERY VERY simple GUI application in order to:

1. Download a binary distribution of Bitcoin
2. Download a SHA256SUMS.asc file that contains all the hashes for the possible binaries
3. Download a signing key (the key that signed the SHA256SUMS.asc)
4. Use the installed PGP/GPG system to install the SHA256SUMS signing key (telling the user that we are doing this)
5. Check the signature of SHA256SUMS.asc
6. Check the SHA of the user's bitcoind binary
7. Check the gitian system for other's who have done gitian builds and show the user and ask if all looks well to them
