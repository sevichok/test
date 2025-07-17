'use client';

import type { HotelCardProps } from "@types";

export const HotelCard = ({ hotel, isSelected, onClick }: HotelCardProps) => {
  const starRating = [...Array(5)].map((_, i) => (
    <span
      key={i}
      className={`star ${i < Math.floor(hotel.rating) ? '' : 'empty'}`}
    >
      ★
    </span>
  ));

  return (
    <div
      className={`hotel-card ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <h3 className="hotel-name">{hotel.name}</h3>
      <p className="hotel-address">{hotel.address}</p>

      <div className="hotel-info">
        <span className="hotel-price">${hotel.price}</span>
        <span className="hotel-distance">{hotel.distance} km away</span>
      </div>

      <div className="hotel-rating">{starRating}</div>
    </div>
  );
};
