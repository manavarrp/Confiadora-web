import { createSlice, createAction } from '@reduxjs/toolkit'

const initialState = {
  personalData: null,
  addressInformation: null,
  employmentInformation: null,
  bankingInformation: null,
  additionalData: null,
  personalReferences: null,
  customerId: '',
  states: null,
  municipalities: null,
  cities: null,
  neighborhoods: null,
  countries: null,
  birthCountries: null,
  economicActivities: null

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
      // //console.log(action.payload, "actio payload");
      state.personalData = action.payload.personalData
      state.addressInformation = action.payload.addressInformation
      state.employmentInformation = action.payload.employmentInformation
      state.bankingInformation = action.payload.bankingInformation
      state.additionalData = action.payload.additionalData
      state.personalReferences = action.payload.personalReferences
      // state.customerId = action.payload.personalData.customerId

      state.states = action.payload.states
      state.municipalities = action.payload.municipalities
      state.cities = action.payload.cities
      state.neighborhoods = action.payload.neighborhoods
      state.countries = action.payload.countries
      state.economicActivities = action.payload.economicActivities
      state.birthCountries = action.payload.birthCountries
      state.customerId = action.payload.personalData.customerId

      // state = action.payload
      // console.log(action.payload, ' action.payload')

      // state[key] = data;
      // state.addressInformation = action.payload;
    })
      .addCase(setPersonPhysicalForm, (state, action) => {
        const { key, data } = action.payload
        /// /console.log("aloha");
        // state.personalData = action.payload;
        // state.addressInformation = action.payload;
        // state = { ...state, ...action.payload };
        state[key] = data
        console.log(action, 'action')
        // state.addressInformation = action.payload;
      })
  }
})

export const {
  personalData,
  addressInformation,
  employmentInformation,
  bankingInformation,
  additionalData,
  personalReferences
} = ppFormSlice.actions

export default ppFormSlice.reducer
