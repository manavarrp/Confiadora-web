import { createSlice, createAction } from '@reduxjs/toolkit'

const initialState = {
  personalData: null,
  addressInfotmation: null,
  workingInformation: null,
  bankInformartion: null,
  additionalInformation: null,
  personalReference: null

  // state: 'open'
}

export const setAllPersonPhysicalForm = createAction(
  'setAllPersonPhysicalForm/setAll'
)
export const setPersonPhysicalForm = createAction('setPersonPhysicalForm/set')

export const ppFormSlice = createSlice({
  name: 'personForm',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setAllPersonPhysicalForm, (state, action) => {
      // console.log(action.payload, "actio payload");
      state.personalData = action.payload.personalData
      state.addressInfotmation = action.payload.addressInfotmation
      state.workingInformation = action.payload.workingInformation
      state.bankInformartion = action.payload.bankInformartion
      state.additionalInformation = action.payload.additionalInformation
      state.personalReference = action.payload.personalReference
      // state = action.payload;

      // state[key] = data;
      // state.addressInfotmation = action.payload;
    })
    /*    .addCase(setPersonPhysicalForm, (state, action) => {
        const { key, data } = action.payload;
        //console.log("aloha");
        //state.personalData = action.payload;
        //state.addressInfotmation = action.payload;
        //state = { ...state, ...action.payload };
        state[key] = data;

        // state.addressInfotmation = action.payload;
      }); */
  }
})

export const {
  personalData,
  addressInfotmation,
  workingInformation,
  bankInformartion,
  additionalInformation,
  personalReference
} = ppFormSlice.actions

export default ppFormSlice.reducer
