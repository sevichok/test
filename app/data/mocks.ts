import { Hotel } from '@types';

export const mockHotels: Hotel[] = [
  {
    id: 1,
    name: 'Grand Hotel',
    address: '123 Main Street, London',
    price: 150,
    rating: 4.5,
    distance: 0.5,
    coordinates: [51.505, -0.09],
  },
  {
    id: 2,
    name: 'Seaside Resort',
    address: '456 Beach Avenue, Miami',
    price: 220,
    rating: 4.8,
    distance: 1.2,
    coordinates: [51.51, -0.1],
  },
  {
    id: 3,
    name: 'Mountain View Lodge',
    address: '789 Hill Road, Minsk',
    price: 180,
    rating: 2.2,
    distance: 0.8,
    coordinates: [51.515, -0.085],
  },
  {
    id: 4,
    name: 'Royal Palace Hotel',
    address: '321 Kingsway, London',
    price: 350,
    rating: 4.9,
    distance: 0.3,
    coordinates: [51.507, -0.087],
  },
  {
    id: 5,
    name: 'Garden Inn',
    address: '654 Park Lane, Madrid',
    price: 120,
    rating: 3.9,
    distance: 1.5,
    coordinates: [51.508, -0.095],
  },
  {
    id: 6,
    name: 'Business Tower',
    address: '987 Finance Street, Barcelona',
    price: 280,
    rating: 4.3,
    distance: 0.7,
    coordinates: [51.502, -0.093],
  },
  {
    id: 7,
    name: 'Cozy Cottage',
    address: '246 Countryside Lane, Rome',
    price: 95,
    rating: 4.1,
    distance: 2.1,
    coordinates: [51.518, -0.078],
  },
  {
    id: 8,
    name: 'Luxury Suites',
    address: '135 Premium Road, Los Angeles',
    price: 420,
    rating: 1.7,
    distance: 0.4,
    coordinates: [51.509, -0.088],
  },
  {
    id: 9,
    name: 'Airport Plaza',
    address: '579 Terminal Way, Denver',
    price: 160,
    rating: 3.7,
    distance: 3.0,
    coordinates: [51.497, -0.115],
  },
  {
    id: 10,
    name: 'Historic Inn',
    address: '864 Old Town Square, New York',
    price: 130,
    rating: 2.4,
    distance: 1.8,
    coordinates: [51.512, -0.082],
  },
];

export const getNearbyHotels = (lat: number, lng: number): Hotel[] => {
  const shuffled = [...mockHotels].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 5).map((hotel) => ({
    ...hotel,
    coordinates: [
      lat + (Math.random() * 0.02 - 0.01),
      lng + (Math.random() * 0.02 - 0.01),
    ],
    distance: parseFloat((Math.random() * 3).toFixed(1)),
  }));
};
