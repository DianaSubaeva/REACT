import { createAction } from '@reduxjs/toolkit';
import type { OffersList, CityOffer } from '../types/offer';
import type { AuthorizationStatusType } from '../types/authorization-status';

export const changeCity = createAction<CityOffer>('offers/changedity');

export const offersCityList = createAction<OffersList[]>('offers/offersCityList');

export const requireAuthorization = createAction<AuthorizationStatusType>('user/requireAuthorization');

export const setError = createAction('setError', (error: string | null) => ({
    payload: error
}));
export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

