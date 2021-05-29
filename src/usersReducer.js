const initialData ={
    userList:['jahed','hossen','shahed']
}

function usersReducer(state=initialData,action){
  switch (action.type) {
    case "AddUser":
      return {
        ...state,
        userList: [...state.userList, "new"],
      };
  }

    return state;
}
export default usersReducer;