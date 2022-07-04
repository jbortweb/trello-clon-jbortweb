import React from 'react';
import Header from '../Header/Header';
import TrelloList from '../TrelloList/TrelloList';
import './Vista.scss';

const Vista = () => {
  return (
    <div className='panel'>
        <div>
            <Header/>
        </div>
        <div>
            <TrelloList/>
        </div>
    </div>
  )
}

export default Vista