const initialState = {
    "card-0": [
        {
            title: 'tarea demo 1',
            id: 1,
            list: "list-0"
          },
    ],
};

const CardReducer = (state = initialState, action) => {
  console.log('reducer. action:',action);
}

export default CardReducer;