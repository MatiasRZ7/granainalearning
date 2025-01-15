import { PayloadAction, createSlice } from "@reduxjs/toolkit"
type InitialStateProps = {
   data: unknown[]
}

const InitialState: InitialStateProps = {
   data: [],
}

export const InfiniteScroll = createSlice({
   name: "InfiniteScroll",
   initialState: InitialState,
   // The `reducers` field lets us define reducers and generate associated actions
   reducers: {
      // here we define a reducer for infinite scroll
      onInfiniteScroll: (state, action: PayloadAction<InitialStateProps>) => {
         // here we find the list of data that is already in the state
         const list = state.data.find((data: any) =>
            // here we find the data that is already in the state
            action.payload.data.find((payload: any) => data.id === payload.id),
         )
         // if the list is not found we add the new data to the state
         if (!list) state.data = [...state.data, ...action.payload.data]
      },
      onClearList: (state, action) => {
         state.data = action.payload.data
      },
   },
})

export const { onInfiniteScroll, onClearList } = InfiniteScroll.actions
export default InfiniteScroll.reducer
