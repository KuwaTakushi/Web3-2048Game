import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { dismissAction, resetAction } from '../actions';
import { StateType } from '../reducers';

const Overlay: React.FC = () => {
  const dispatch = useDispatch();
  const reset = useCallback(() => dispatch(resetAction()), [dispatch]);
  const dismiss = useCallback(() => dispatch(dismissAction()), [dispatch]);

  const defeat = useSelector((state: StateType) => state.defeat);
  const victory = useSelector(
    (state: StateType) => state.victory && !state.victoryDismissed
  );
  const score = useSelector((state: StateType) => state.score);

  if (victory) {
    console.log("victory", score)

    return (
      <div className="overlay overlay-victory">
        <h1>You win!</h1>
        <div className="overlay-buttons">
          <button onClick={dismiss}>Keep going</button>
          <button onClick={reset}>Try again</button>
          <button onClick={reset}>Record rank</button>
        </div>
      </div>
    );
  }

  if (defeat) {
    // TODO: game over之后将对应的分数上链
    console.log("default", score)
    return (
      <div className="overlay overlay-defeat">
        <h1>Game over!</h1>
        <div className="overlay-buttons">
          <button onClick={reset}>Try again</button>
          <button onClick={reset}>Record rank on chain</button>
        </div>
      </div>
    );
  }

  return null;
};

export default Overlay;
