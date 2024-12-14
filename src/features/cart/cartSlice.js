import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cart: [],
    // cart: [{
    //     pizzaId: 12,
    //     name: "mediterian",
    //     quantity: 2,
    //     unitPrice: 16,
    //     totalPrize:32
        
    // }]
    
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, action) {
            state.cart.push(action.payload)
        },
        deleteItem(state, action) {
            //payload will be pizzaId
          state.cart=  state.cart.filter((item)=>item.pizzaId!==action.payload)
        },
        increseItemQuantity(state, action) {
            const item = state.cart.find(item => item.pizzaId === action.payload)
            item.quantity++
            item.totalPrize=item.quantity*item.unitPrice
        },
        decreaseItemQuantity(state, action) {
            const item = state.cart.find(item => item.pizzaId === action.payload)
            item.quantity--
            item.totalPrize = item.quantity * item.unitPrice
            if(item.quantity===0) cartSlice.caseReducers.deleteItem(state,action)
        },
        clearCart(state) {
            state.cart = []
        },
    }
})
export const {addItem,deleteItem,increseItemQuantity,decreaseItemQuantity,clearCart}=cartSlice.actions
export default cartSlice.reducer;

export const getTotalCartQuantity = (state) =>
    state.cart.cart.reduce((sum, item) => sum + item.quantity, 0)


export const getTotalCartPrize = (state) =>
    state.cart.cart.reduce((sum, item) => sum + item.totalPrize, 0)

export const getCurrentQuantityById = (id) => (state) => {
    return state.cart.cart.find(item => item.pizzaId === id)?.quantity ?? 0;
}