import React from 'react';
import GithubCorner from 'react-github-corner';
import './App.scss';

import { animationDuration, gridGap } from './config';
import Header from './components/Header';
import Board from './components/Board';
//import Info from './components/Info';
import BoardSizePicker from './components/BoardSizePicker';
import Rank from './components/Rank';
import Sign from './components/Sign';

const App: React.FC = () => {
  return (
    <div
      className="app"
      style={
        {
          '--animation-duration': animationDuration + 'ms',
          '--grid-gap': gridGap,
        } as any
      }
    >
      <GithubCorner href="https://github.com/mat-sz/2048" />
      <div className="page">
        <Header />
        <Board />
        <BoardSizePicker />
        {/** features: 新增用户登录 */}
        <Sign />
        {/** features: 新增排行榜面板并初始化 */}
        <Rank />
      </div>
    </div>
  );
};

export default App;
