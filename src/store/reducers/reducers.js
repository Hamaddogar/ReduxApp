

export const dataReducer = (state = {}, action) => {
     debugger
    if (action.type == "My_Data") {
        return { ...action.payload }

    }
    else {

        return state
    }


}
