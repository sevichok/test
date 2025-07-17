'use client';

import { useState } from 'react';
import { MapComponent } from './components/Map';
import { HotelList } from './components/HotelList';
import { getNearbyHotels } from './data/mocks';
import './styles/globals.css';
import type { Hotel, MapPosition } from '@types';

export default function Home() {
  const [selectedPosition, setSelectedPosition] = useState<MapPosition | null>(null);
  const [nearbyHotels, setNearbyHotels] = useState<Hotel[]>([]);
  const [selectedHotelId, setSelectedHotelId] = useState<number | null>(null);

  const handleMapClick = (position: MapPosition) => {
    setSelectedPosition(position);
    setNearbyHotels(getNearbyHotels(position.lat, position.lng));
    setSelectedHotelId(null);
  };

  const handleHotelSelect = (id: number) => {
    setSelectedHotelId(prev => prev === id ? null : id);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Hotel Map Finder</h1>
      <p className="app-description">
        Кликните на карте, чтобы увидеть ближайшие отели
      </p>

      <div className="map-container">
        <MapComponent
          selectedPosition={selectedPosition}
          selectedHotels={nearbyHotels}
          onMapClick={handleMapClick}
        />
      </div>

      {nearbyHotels.length > 0 && (
        <div className="hotels-section">
          <HotelList
            hotels={nearbyHotels}
            selectedHotelId={selectedHotelId}
            onHotelSelect={handleHotelSelect}
          />
        </div>
      )}
    </div>
  );
}
