export const READ_DATA = "READ_ACTION"
export const DELETE_DATA = "DELETE_DATA"

export const readAction = (data) => {
    return function(dispatch, getState) {
        dispatch({ type : READ_DATA, data})
    }
}

export function deleteAction(id, index) {
    return function(dispatch, getState) {
        let OldData =  getState().payload ? getState().payload :[];
        OldData.splice(id, 1);
        dispatch({ type: DELETE_DATA ,OldData, index });
    };
}
