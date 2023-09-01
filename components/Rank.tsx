import React from 'react';

const Rank: React.FC = () => {

    const PlayerCard = () => {
        return (
            <div className='rank-player-card'>
                <h6> Address: 0xDf1b63139e75674CFE14855A42aDC5e3b9221C72</h6>
                <h6> Score: 2122</h6>
                <h6> Rank: 1</h6>
            </div>
        )
    }

    return (
        <div>
            <div className='rank'>
                <h2>Top Player Rank</h2>
                <div className='rank-column'>
                    <PlayerCard />
                    <PlayerCard />
                    <PlayerCard />
                    <PlayerCard />
                    <PlayerCard />
                    <PlayerCard />
                </div>
            </div>
        </div>
    )
}

export default Rank;