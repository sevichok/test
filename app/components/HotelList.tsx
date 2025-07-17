'use client';

import { useState, useMemo, useEffect } from 'react';
import { HotelCard } from './HotelCard';
import type { HotelListProps, PriceSortOption, DistanceSortOption } from '@types';


export const HotelList = ({ hotels, selectedHotelId, onHotelSelect }: HotelListProps) => {
  const [priceSort, setPriceSort] = useState<PriceSortOption>('none');
  const [distanceSort, setDistanceSort] = useState<DistanceSortOption>('none');

  const sortedHotels = useMemo(() => {
    let result = [...hotels];
    
    if (priceSort === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (priceSort === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    }
    if (distanceSort === 'distance-asc') {
      result.sort((a, b) => a.distance - b.distance);
    } else if (distanceSort === 'distance-desc') {
      result.sort((a, b) => b.distance - a.distance);
    }
    
    return result;
  }, [hotels, priceSort, distanceSort]);

  if (hotels.length === 0) return null;

  useEffect(() => {
    setPriceSort('none');
    setDistanceSort('none');
  }, [hotels]);

  return (
    <div className="hotels-section">
      <div className="hotels-header">
        <h2 className="hotels-title">Ближайшие отели</h2>
        <div className="sort-controls">
          <div className="sort-group">
            <label className="sort-label">Цена:</label>
            <select
              className="sort-select"
              value={priceSort}
              onChange={(e) => setPriceSort(e.target.value as PriceSortOption)}
            >
              <option value="none">Без сортировки</option>
              <option value="price-asc">По возрастанию</option>
              <option value="price-desc">По убыванию</option>
            </select>
          </div>
          
          <div className="sort-group">
            <label className="sort-label">Расстояние:</label>
            <select
              className="sort-select"
              value={distanceSort}
              onChange={(e) => setDistanceSort(e.target.value as DistanceSortOption)}
            >
              <option value="none">Без сортировки</option>
              <option value="distance-asc">По возрастанию</option>
              <option value="distance-desc">По убыванию</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="hotels-list">
        {sortedHotels.map((hotel) => (
          <HotelCard
            key={hotel.id}
            hotel={hotel}
            isSelected={selectedHotelId === hotel.id}
            onClick={() => onHotelSelect(hotel.id)}
          />
        ))}
      </div>
    </div>
  );
};
