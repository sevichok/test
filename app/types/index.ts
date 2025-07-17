export type PriceSortOption = 'price-asc' | 'price-desc' | 'none';
export type DistanceSortOption = 'distance-asc' | 'distance-desc' | 'none';

export interface Hotel {
  id: number;
  name: string;
  address: string;
  price: number;
  rating: number;
  distance: number;
  coordinates: [number, number];
}

export interface MapPosition {
  lat: number;
  lng: number;
}

export interface HotelCardProps {
  hotel: Hotel;
  isSelected: boolean;
  onClick: () => void;
}

export interface HotelListProps {
  hotels: Hotel[];
  selectedHotelId: number | null;
  onHotelSelect: (id: number) => void;
}

export interface MapComponentProps {
  onMapClick: (position: MapPosition) => void;
  selectedHotels: Hotel[];
  selectedPosition: { lat: number; lng: number } | null;
}
