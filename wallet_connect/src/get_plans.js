// import Web3 from 'web3';

import connectWallet from './connetc_with_web3';

const { web3, account } = await connectWallet();

// const web3 = new Web3(window.ethereum);
const contractABI = require('./stake_new_abi.json');

const contractAddress = '0xf01a65f0ca8c3a9703cfab5b442956f1d6b9c515';

const contract = new web3.eth.Contract(contractABI, contractAddress);




const PrintButton = () => {

    const handleClick = async () => {
        contract.methods.getPlans().call()
            .then(value => {
                value.forEach((plan, index) => {
                    console.log(`Plan ${index + 1}:`);
                    console.log(`Release Duration: ${plan.releaseDuration}`);
                    console.log(`Ratio: ${plan.ratio}`);
                    console.log(`Min Amount: ${plan.minAmount}`);
                    console.log('---');
                });
            })
            .catch(error => console.error(error));
    };

    return (
        <button onClick={handleClick}>
            Click Me
        </button>
    );


};

export default PrintButton;