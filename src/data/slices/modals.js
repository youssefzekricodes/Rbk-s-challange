import { createSlice } from "@reduxjs/toolkit";
export const initialStateModals = {
    modalOpen: false,
};
const Modals = createSlice({
    name: "Modals",
    initialState: initialStateModals,
    reducers: {
        showModal(state) {
            state.modalOpen = true;
        },
        hideModal(state) {
            state.modalOpen = false;
        },
    },
});
export const { showModal, hideModal } = Modals.actions;
export default Modals.reducer;
