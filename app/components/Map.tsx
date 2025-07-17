"use client";

import { useCallback, useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import type { MapComponentProps } from "@types";
import { blueDotIconPath, defaultPosition, mapContainerStyle, redDotIconPath } from "@constants";

export const MapComponent = ({
  onMapClick,
  selectedHotels,
  selectedPosition,
}: MapComponentProps) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  const handleClick = (e: google.maps.MapMouseEvent) => {
    if (e.latLng) {
      onMapClick({ lat: e.latLng.lat(), lng: e.latLng.lng() });
    }
  };

  if (!isLoaded) {
    return (
      <div className="map-loading">
        Loading map...
      </div>
    );
  }

  return (
    <div className="map-container">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={selectedPosition || defaultPosition}
        zoom={13}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onClick={handleClick}
      >
        {selectedPosition && (
          <Marker
            icon={redDotIconPath}
            position={selectedPosition}
          />
        )}

        {selectedHotels.map(({ coordinates, id }) => (
          <Marker
            icon={blueDotIconPath}
            key={id}
            position={{ lat: coordinates[0], lng: coordinates[1] }}
          />
        ))}
      </GoogleMap>
    </div>
  );
};
