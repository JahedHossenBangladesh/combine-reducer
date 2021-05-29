const initialData={
    itemsList:['apple','bluebarry','canon','dulCore']
}

function itemsReducer(state=initialData,action){
    switch(action.type){
        case 'AddItem': return{
          ...state,
          itemsList:[...state.itemsList,'new']
        }
    }
    return state;
}

export default itemsReducer;