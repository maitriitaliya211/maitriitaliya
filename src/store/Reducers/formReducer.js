import { createSlice } from "@reduxjs/toolkit";

export const formReducer = createSlice({
    name: "form",
    initialState: {
        value: [],
        editIndex: '',
       valueofupdate: '',
       delete: "",
    },
    reducers: {
        userAdded:(state, action) => {
          state.value.push(action.payload);
        },
         Edit:(state, action) => {
            state.editIndex = action.payload;    
          },
          updatevalue:(state, action) => {
            state.valueofupdate = action.payload;  
      const existingUser = state.value.find((user) => user.id === state.editIndex);
      if(existingUser)
      {
        existingUser.Id = state.valueofupdate.Id;
        existingUser.Name = state.valueofupdate.Name;
        existingUser.Price = state.valueofupdate.Price;
        existingUser.File = state.valueofupdate.File;
        existingUser.DropValue = state.valueofupdate.DropValue;
      }

    },
    Removedetails:(state,action) => {
      state.value.splice(state, 1);   
      const existingUser = state.value.find((user) => user.id === state.delete);  
      if(existingUser)  {
        state.value=state.value.filter((user) => user.id!==state.delete);
            }
   }
    }
});

export const { userAdded,editIndex ,updatevalue,Removedetails } = formReducer.actions;
export const { Edit } = formReducer.actions;
export const selectproduct = (state) => state.form.value;
export const editForm = (state) => state.form.editIndex;
export const update = (state) => state.form.valueofupdate;
export const remove = (state) => state.form.delete;

export default formReducer.reducer;