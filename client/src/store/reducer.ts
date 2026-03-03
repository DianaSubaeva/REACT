import { createReducer } from '@reduxjs/toolkit';
import type { OffersList, CityOffer } from '../types/offer';
import { changeCity, offersCityList,requireAuthorization, setError, setOffersDataLoadingStatus } from './action';
import {AuthorizationStatus, CITIES_LOCATION} from "../conts.ts";
import {getCityAsOffer} from "../utils";
import type { AuthorizationStatusType } from '../types/authorization-status';

const defaultCity =  getCityAsOffer('Paris', CITIES_LOCATION);

export type InitialState = {
    city: CityOffer | undefined;
    offers: OffersList[];
    authorizationStatus: AuthorizationStatusType;
    isOffersDataLoading: boolean,
    error: string | null;
}
const initialState: InitialState = {
    city: defaultCity,
    offers: [],
    isOffersDataLoading: false,
    authorizationStatus: AuthorizationStatus.UnknownAuth,
    error: null,
};


const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(changeCity, (state, action) => {
            state.city = action.payload;
        })
        .addCase(offersCityList, (state, action) => {
            state.offers = action.payload;
        })
        .addCase(requireAuthorization, (state, action) => {
            state.authorizationStatus = action.payload;
        })
        .addCase(setError, (state, action) => {
            state.error = action.payload;
        })
        .addCase(setOffersDataLoadingStatus, (state, action) => {
           state.isOffersDataLoading = action.payload;
         })
});

export { reducer };