    //Añadir lista

export const addList = (title) => {
    return {
      type: "ADD_LIST",
      payload: title,
    };
};

    //Añadir carta

export const addCard = (listID, text) => {
    return {
      type: "ADD_CARD",
      payload: { text, listID },
    };
};

    //Borrar carta
  
export const deleteCardAction = (id,listID) => {
    return {
        type: 'DELETE_CARD',
        payload: {id, listID}
    };
};

    //Editar carta
  
export const editCardAction = (id, listID, newText) => {
    return {
      type: 'EDIT_CARD',
      payload : {id, listID, newText}
    }
};

    //Borrar lista
  
export const deleteListAction = (listID) => {
    return {
        type: 'DELETE_LIST',
        payload: {listID}
    };
};

    //Editar tirulo lista

export const editListAction = (listID, newTitle) => {
    return {
        type: 'EDIT_LIST',
        payload : {listID, newTitle}
    }
};
    
    //Arrastrar cartas y listas

export const sort = (
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId,
    type
  ) => {
    return {
      type: "DRAGG_HAPPENED",
      payload: {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId,
        type
      },
    };
};
  