import React from 'react';
import TrelloCard from '../TrelloCard/TrelloCard';
import './TrelloList.scss';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';

const TrelloList = ({title}) => {

  return (

    <div>
      <div className='container'>
          <div className='tarjeta_titulo'>
            <h2>{title}</h2>
              <div
                className='icon-edit'>
                  <div>
                    <EditIcon/>
                  </div>
                  <div>
                    <ClearIcon/>
                  </div>
              </div>
          </div>
        <div>
          <TrelloCard/>
        </div>
      </div>
    </div>      
  )
}

export default (TrelloList)