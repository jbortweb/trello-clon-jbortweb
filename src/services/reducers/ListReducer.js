const initialState = {
    "list-0": [
        {
            title: 'lista demo 1',
            id: 1,
            cards: ["card-0"]
          },
    ],
};

const ListReducer = (state = initialState, action) => {
  console.log('reducer. action:',action);
}

export default ListReducer;