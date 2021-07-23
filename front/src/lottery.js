import web3 from './web3'
const address = '0x8054654654...';

const abi = [
    {
        constant: true,
        inputs: [],
        name: 'manager'
    }
]

export default new web3.eth.Contract(abi, address)