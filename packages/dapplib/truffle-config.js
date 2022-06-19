require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture bread tail tragic educate ranch remain modify give arch off genius'; 
let testAccounts = [
"0xb0a6d828af3cd8c85618c24a6a4204ad8fbfa1e2e1218144ad406368c133b796",
"0xeb7144a32fa84ededd218947d58eca6db88e3c527dc020cfe2716da30f938db3",
"0x651d3fe097fa7c025a827793bfd622c75bc1f1a98e83209d3badb672867d84fd",
"0x34059f3ea3d17b14e6107b1f91a1daa37a20199729b9ce23d3f1d21127c4b0d5",
"0xc2d3aacd13631b2a497520312c9829f761474cf03c7d68369ef9d88da87d423a",
"0x4929b5fd82b189161b250c40ed6b6ba98c6986ea7136bb08f33772e6c82051e1",
"0x3b8811cb32b9a2b1a34e1a314b22824a010fde7af2ead6afa40f26b6cb17ca1e",
"0xa43a20975d866a3bc687d2870d4f28e6dcc21bd344640409b67a7e3a98d7103d",
"0x1644ae08b0eb56bf3ad52ac4838769335f50478c78aa133a1cfa8ec2bc8718fb",
"0xbded0c6799c85ddab0e411973cd25268d92db2908fe078ca6d41d1005e461d36"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

