const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3')
const { interface, bytecode } = require('./compile')

// const { ethers } = require('ethers')
// const provider = new ethers.providers.InfuraProvider(
//     'rinkeby',
//     '424eddb49a824725b70cf727e265c67c'
// )


const provider = new HDWalletProvider(
    'friend cross ramp mobile submit cave powder brain box quit trigger humor',
    'https://ropsten.infura.io/v3/424eddb49a824725b70cf727e265c67c'
)


const web3 = new Web3(provider)

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode })
        .send({ gas: '1000000', from: accounts[0]})

    console.log('Contract deployed to', result.options.address);
}

deploy()