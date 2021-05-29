import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Test() {
    const itemsObj = useSelector(store=>store.itemsReducer);
    const usersObj = useSelector((store) => store.usersReducer);
    const dispatch= useDispatch()
    return (
      <div>
        <h3>This is the test component</h3>
        <h2>Total users : {usersObj.userList.length}</h2>
        <h1>The total items {itemsObj.itemsList.length}</h1>
        <button onClick={() => dispatch({ type: "AddUser" })}>Add User</button>
        <button onClick={() => dispatch({ type: "AddItem" })}>Add items</button>
      </div>
    );
}
