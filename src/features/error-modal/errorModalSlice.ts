import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';

export interface errorModalState {
    isVisibleError: boolean;
    errorTitle: string;
    errorMessage: string;
}

const initialState: errorModalState = {
    isVisibleError: false,
    errorTitle: '',
    errorMessage: ''
};

export interface TransactionPayload {
    value: number;
}

export const errorModalSlice = createSlice({
    name: 'errorModal',
    initialState,
    reducers: {
        showErrorModal: (state, action: PayloadAction<TransactionPayload>) => {
            console.log("show modal")
            state.isVisibleError = true;
        },
        hideErrorModal: (state, action: PayloadAction<TransactionPayload>) => {
            console.log("hide modal")
            state.isVisibleError = false;
        },
    },
});

export const {showErrorModal, hideErrorModal} = errorModalSlice.actions;

export const selectIsVisibleError = (state: RootState) => (state.errorModal.isVisibleError);

export default errorModalSlice.reducer;
