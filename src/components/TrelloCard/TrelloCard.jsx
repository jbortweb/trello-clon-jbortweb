import React from "react";
import "./TrelloCard.scss";
import { Draggable } from "react-beautiful-dnd";
import { connect } from "react-redux";
import {editCardAction, deleteCardAction } from "../../services/redux/action";
import EditIcon from '@mui/icons-material/Edit';
import { useState } from "react";


        //Creamos la vista de la tarea y la funcionalidad para arrastrarla

const TrelloCard = ({ text, id, index, listID, dispatch }) => {

    //Estado para mostrar el formulario para editar el texto de la carta

  const [onEdit, setOnEdit] = useState(false);
  const [onTextEdit, setOnTextEdit] = useState(text)

  //Funcion para eliminar carta
  const deleteCard = (e)=> {
    dispatch(deleteCardAction(id, listID));
  };
  
  const handleChangeEdit = (e) => {
    setOnTextEdit(e.target.value)
  };

    //Guardar el nuevo titulo de la carta
  const saveEdit = () => {
    
    dispatch(editCardAction(id, listID, onTextEdit));
    setOnEdit(false);
  };

      //Formulario para editar el tiulo de la carta
  const editCard =() => {
    return (
    <div className="container-area">
      <textarea
        className="tareaAreaText"
        text = {onTextEdit}
        placeholder= "Ponga el título de su tarea"
        autoFocus
        onChange={handleChangeEdit}
      >
        </textarea>
      <button
        className="edit-buttonCard"
        onClick= {saveEdit}
      > Guardar
      </button>          
    </div>
    )
  }
  //Vista de las cartas
  const onlyCard =()=>{
    return (
      <Draggable draggableId={String(id)} index={index}>
      {(provided) => (
        <div
          className="container-carta"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className='container-tarea'>
            <p className="cartascss">
            {text}
            </p>
            <div className="container-edit">
              <button
                className="delete-iconCard" 
                onMouseDown={(deleteCard)}
                title = 'Delete'>
                X
              </button>
              <EditIcon
              className="edit-iconCard"
              onClick= {() => setOnEdit(true)}/>
            </div>
          </div>
        </div>
      )}
    </Draggable>
    )
  }
  return (
    onEdit ? editCard() : onlyCard()
  );
};

export default connect()(TrelloCard);
