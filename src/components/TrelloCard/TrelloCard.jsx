import React from 'react';
import './TrelloCard.scss';
import EditIcon from '@mui/icons-material/Edit';

//Creamos el componente de las cartas

const TrelloCard = (text) => {
  return (
    <div
          className="container-carta"
        >
          <div className='container-tarea'>
            <p className="cartascss">
            {text}
            </p>
            <div className="container-edit">
              <button
                className="delete-iconCard" 
                title = 'Delete'>
                X
              </button>
              <EditIcon
              className="edit-iconCard"
              />
            </div>
          </div>
        </div>
    
  )
}

export default TrelloCard