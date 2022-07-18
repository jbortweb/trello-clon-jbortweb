import React from 'react';
import TrelloCard from '../TrelloCard/TrelloCard';
import './TrelloList.scss';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import FormNew from "../Form/Form.jsx";


//Creamos el componente de las listas

const TrelloList = ({title, cards, listID}) => {

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
            {React.Children.toArray(cards.map((card) => (
              <TrelloCard
              text={card.text}
              key={card.id}
              id={card.id}
              listID = {listID}
              />
            )))}
          </div>
      </div>
    </div>      
  )
}

export default (TrelloList)