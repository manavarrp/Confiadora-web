import { createSlice, createAction } from "@reduxjs/toolkit";

const initialState = {
  personalData: null,
  addressInformation: null,
  employmentInformation: null,
  bankingInformation: null,
  additionalData: null,
  personalReferences: null,
<<<<<<< Updated upstream
  customerId: "",
=======
  customerId: '',
>>>>>>> Stashed changes
  states: null,
  municipalities: null,
  cities: null,
  neighborhoods: null,
  countries: null,
  birthCountries: null,
  economicActivities: null,
<<<<<<< Updated upstream
  nationality: null,
=======
  nationality: null
>>>>>>> Stashed changes

  // state: 'open'
};

export const setAllPersonPhysicalForm = createAction(
  "setAllPersonPhysicalForm/setAll"
);
export const setPersonPhysicalForm = createAction("setPersonPhysicalForm/set");

export const ppFormSlice = createSlice({
  name: "personForm",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setAllPersonPhysicalForm, (state, action) => {
        // //console.log(action.payload, "actio payload");
<<<<<<< Updated upstream
        state.personalData = action.payload.personalData;
        state.addressInformation = action.payload.addressInformation;
        state.employmentInformation = action.payload.employmentInformation;
        state.bankingInformation = action.payload.bankingInformation;
        state.additionalData = action.payload.additionalData;
        state.personalReferences = action.payload.personalReferences;
        // state.customerId = action.payload.personalData.customerId

        state.states = action.payload.states;
        state.municipalities = action.payload.municipalities;
        state.cities = action.payload.cities;
        state.neighborhoods = action.payload.neighborhoods;
        state.countries = action.payload.countries;
        state.economicActivities = action.payload.economicActivities;
        state.birthCountries = action.payload.birthCountries;
        state.customerId = action.payload.personalData.customerId;
        state.nationality = action.payload.nationality;
=======
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
        state.nationality = action.payload.nationality
>>>>>>> Stashed changes

        // state = action.payload
        //  console.log(action.payload, " action.payload");

        // state[key] = data;
        // state.addressInformation = action.payload;
      })
      .addCase(setPersonPhysicalForm, (state, action) => {
<<<<<<< Updated upstream
        const { key, data } = action.payload;
=======
        const { key, data } = action.payload
>>>>>>> Stashed changes
        /// /console.log("aloha");
        // state.personalData = action.payload;
        // state.addressInformation = action.payload;
        // state = { ...state, ...action.payload };
<<<<<<< Updated upstream
        state[key] = data;
        console.log(action, "action");
        // state.addressInformation = action.payload;
      });
  },
});
=======
        state[key] = data
        console.log(action, 'action')
        // state.addressInformation = action.payload;
      })
  }
})
>>>>>>> Stashed changes

export const {
  personalData,
  addressInformation,
  employmentInformation,
  bankingInformation,
  additionalData,
<<<<<<< Updated upstream
  personalReferences,
} = ppFormSlice.actions;
=======
  personalReferences
} = ppFormSlice.actions
>>>>>>> Stashed changes

export default ppFormSlice.reducer;
