import type { City } from "./types/city.ts";
import type { CityOffer, OffersList } from "./types/offers.ts";
import { SortOffersType } from "./conts.ts";
import type { SortOffer } from "./types/sort.ts";

// Функция для получения города в формате City (для карты)
export function getCity(cityName: string, cities: City[]): City | undefined {
    return cities.find(city => city.title === cityName);
}

// Функция для получения города в формате CityOffer (для Redux store)
export function getCityAsOffer(cityName: string, cities: City[]): CityOffer | undefined {
    const city = cities.find(c => c.title === cityName);
    if (!city) return undefined;
    
    return {
        name: city.title,
        location: {
            latitude: city.lat,
            longitude: city.lng,
            zoom: city.zoom
        }
    };
}

// Функция для фильтрации предложений по городу
export function getOffersByCity(cityName: string, offers: OffersList[]): OffersList[] {
    return offers.filter(offer => offer.city.name === cityName);
}

// Функция для сортировки предложений
export function sortOffersByType(offers: OffersList[], type: SortOffer): OffersList[] {
    // Создаем копию массива, чтобы не мутировать оригинал
    const sortedOffers = [...offers];
    
    switch (type) {
        case SortOffersType.PriceToligh:
            return sortedOffers.sort((a, b) => a.price - b.price);
        case SortOffersType.PriceToLow:
            return sortedOffers.sort((a, b) => b.price - a.price);
        case SortOffersType.TopRated:
            return sortedOffers.sort((a, b) => b.rating - a.rating);
        default: // Popular
            return sortedOffers;
    }
}