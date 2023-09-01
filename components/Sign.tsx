import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import FiscoNetworkLink from '../../@fiscobcos-web3/fisco-link/src/network';
import { StateType } from '../reducers';

const Sign: React.FC = () => {
    const  userAddress = useSelector((state: StateType) => state.userAddress);

    const [user, setUser] = useState(userAddress);
    const test =  () =>  {
        const provide = new FiscoNetworkLink("http://127.0.0.1:8545");
        provide.call(
            '0x6bc952a2e4db9c0c86a368d83e9df0c6ab481102',
            '0xba334568256d43bc6596b8dba4d7355b4c956720',
        );
        console.log('afafaff');
    }

    const confirmUserAddress = () => {
        setUser('sdfsfsdfsf');
    }

    return (
        <div>
            <h2>Player sign in</h2>
            <h6>{ userAddress === '' ? "Visitor model" : `Welcome back:${userAddress}`}</h6>
            <div className='sign'>
                <input onChange={confirmUserAddress} className='sign-input'></input>
                <button onClick={test}>sdff</button>
            </div>
        </div>
    )
}

export default Sign;