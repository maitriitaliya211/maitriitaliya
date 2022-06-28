import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./Reducers/formReducer";

export default configureStore({
    reducer: {
        form:formReducer
    }
});