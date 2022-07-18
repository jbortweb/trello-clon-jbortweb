import React from 'react';
import Header from '../Header/Header';
import TrelloList from '../TrelloList/TrelloList';
import { connect } from 'react-redux';
import './Vista.scss';

//Creamos el componente donde se vera la cabecera y la lista con las cartas

const Vista = (props) => {
  const {lists} = props
  
  return (
    <div className='panel'>
        <div>
            <Header/>
        </div>
        <div>
            {lists.map(list => (
            <TrelloList
            title={list.title}
            cards={list.cards}
            />
            ))}
        </div>
    </div>
  )
}

// llamamos a las propiedades del estado actualizado

const mapStateToProps = state => ({
  lists: state.lists
});
const connected = connect (
  mapStateToProps
)(Vista);

export default connected;