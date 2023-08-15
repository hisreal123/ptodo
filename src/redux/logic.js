
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    showDetails  :  false,
    todoId : null,
    addTodo:  false,
    showOverDue :  false,
    // strikeTask: false
}


 const TodoDetails = createSlice   ( {
    name : 'details',
    initialState,
    reducers :  {
        isOpenDetails :  (state) => {
            state.showDetails=!state.showDetails;
        },
        setTodoId: (state, action) => {
            state.todoId = action.payload;
        },
        setAddTodo: (state) => {
            state.addTodo = !state.addTodo;
        },
        setShowOverDue: (state) => {
            state.showOverDue = !state.showOverDue;
        },
        // setStrikeTask: (state) => {
        //     state.strikeTask = !state.strikeTask;
        // },
    }
})


export const { isOpenDetails , setTodoId, setAddTodo, setShowOverDue} = TodoDetails.actions
export default TodoDetails.reducer
