type OfferLocation = {
    latitude: number;
    longitude: number;
    zoom: number;
};

export type CityOffer = {
    name: string;
    location: OfferLocation;
};

export type AuthorOffer = {  // 👈 Переименуем HostOffer в AuthorOffer
    name: string;
    username?: string;     // добавим для совместимости
    avatarUrl?: string;    // может быть avatar или avatarUrl
    avatar?: string;       // как приходит с бэкенда
    isPro: boolean;
    userType?: 'normal' | 'pro';  // как приходит с бэкенда
    email?: string;        // опционально
    id?: string;           // опционально
}

export type FullOffer = {
    id: string;
    title: string;
    type: string;
    price: number;
    city: CityOffer;
    location: OfferLocation;
    isFavorite: boolean;
    isPremium: boolean;
    rating: number;
    description: string;
    bedrooms: number;
    goods: string[];
    host: AuthorOffer;
    images: string[];
    maxAdults: number;
    photos?: string[];
    features?: string[];
};

export type OffersList = {
    id: string;
    title: string;
    type: string;
    price: number;
    city: CityOffer;
    location: OfferLocation;
    isFavorite: boolean;
    isPremium: boolean;
    rating: number;
    previewImage: string;
};