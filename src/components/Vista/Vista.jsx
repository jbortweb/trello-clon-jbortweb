import React from 'react';
import './Vista.scss';
import TrelloList from "../../components/TrelloList/TrelloList.jsx";
import Header from "../../components/Header/Header.jsx";
import { connect } from "react-redux";
import FormNew from "../../components/Form/Form.jsx";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { sort } from "../../services/redux/action";

const Vista = (props) => {
    const { lists } = props;


    const onDragEnd = (result) => {
      const { destination, source, draggableId, type } = result;
  
      if (!destination) {
        return;
      }
      props.dispatch(
        sort(
          source.droppableId,
          destination.droppableId,
          source.index,
          destination.index,
          draggableId,
          type
        )
      );
    };

    // Generamos la vista de la cabecera y de las listas que vayamos añadiendo
  
    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <div className='App'>

          <div>
            <Header />
          </div>
          <Droppable droppableId="all-list" direction="horizontal" type="list">
            {(provided) => (
              <div
                className="panel"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {React.Children.toArray(lists.map((list, index) => (

                  <TrelloList
                    listID={list.id}
                    title={list.title}
                    cards={list.cards}
                    key={list.id}
                    index={index}
                  />
                )))}
                {provided.placeholder}
                <FormNew list />              
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    );
  };
  
  const mapStateToProps = state => ({
    lists: state.lists,
    cards: state.cards
  });

  const connected = connect(
    mapStateToProps
  )(Vista)  

  export default connected;
  