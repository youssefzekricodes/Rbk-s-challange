import { createSlice } from "@reduxjs/toolkit";
export const initialStateModals = {
    user: {
        firstName: "",
        lastName: "",
        avatar: "",
        links: [],
    },
};
const Modals = createSlice({
    name: "Modals",
    initialState: initialStateModals,
    reducers: {
        addUserLink(state, { payload }) {
            const updatedUserLinks = [...(state.user.links || []), payload];
            const updatedUser = { ...state.user, links: updatedUserLinks };
            state.user = updatedUser;
            console.log(updatedUser, "updatedUser");
        },
        removeUserLink(state, { payload }) {
            const updatedUserLinks = [
                ...(state.user.links?.filter((link) => link.origin !== payload) || []),
            ];
            const updatedUser = { ...state.user, links: updatedUserLinks };
            state.user = updatedUser;
            console.log(updatedUser, "updatedUser");
        },
        updateUserInformations(state, { payload }) {
            const updatedUser = { ...state.user, ...payload };
            state.user = { ...state.user, ...updatedUser };
        },
    },
});
export const { addUserLink, removeUserLink, updateUserInformations } = Modals.actions;
export default Modals.reducer;
