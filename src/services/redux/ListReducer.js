const initialState = [
    {
        title: 'lista demo 1',
        id: 1,
        cards: [
            {
                id: 0,
                text: 'Lista tarea1'
            },
            {
                id: 1,
                text: 'lista tarea2'
            }
        ]
      },
    ]

const ListReducer = (state = initialState, action) => {
switch (action.type) {
    
    default: 
    return state;
}
}

export default ListReducer;