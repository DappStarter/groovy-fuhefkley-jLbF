require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess nature swift undo name rebel stick arrow grid fork bone venture'; 
let testAccounts = [
"0x774a65847380424d9f33fa906a29145ef8053ef429502d2d1c85e7a7ac681d74",
"0x0d60644e7a21fbfe6c6989be2123d9fd2e4ff264fe15e06589a7b243ceeb2dd9",
"0x3b78ad7a5a1c4b60c4c0826c853e034eaa389af08af9fce2b1f6587b854471af",
"0x7cbd2f4d184dfa936c02c2b93bf2d5291ea6dee203cc9dbf99c52f5f537ce05f",
"0xf690c817373d26e0213c9cb52ec392feef46e4c24efe3f3cd99de42344a05974",
"0xa3fc768da0ba09bcd1ec20739fa106e1b938bcc1c197dc9acfa85cc23a1c79b1",
"0x119c181e86b70aa7ae3aabaeaf155c3dbaf5ae9ac9fc8bb1b6d5cccafb79a11b",
"0xaa63dbe0ce299b418690cec742d91e9aa9df4cacfcbd22621068a7ea5133b8a6",
"0xfb4854da6791ad23567c2fc91c5c56c591600854f11890c0cf7368c3a28da765",
"0x316967396c472b1c1c055997a2b6ce58f803788b433c37477c07b81572127288"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

