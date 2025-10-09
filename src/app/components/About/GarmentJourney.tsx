"use client";

import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import type { LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import "./leaflet.css";

// Define location coordinates with actual latitude and longitude
const locations: Array<{
  id: string;
  name: string;
  position: [number, number];
}> = [
  {
    id: "usa",
    name: "USA",
    position: [39.8283, -98.5795], // Center of USA
  },
  {
    id: "srilanka",
    name: "Sri Lanka",
    position: [7.8731, 80.7718], // Center of Sri Lanka
  },
  {
    id: "vietnam",
    name: "Vietnam",
    position: [14.0583, 108.2772], // Center of Vietnam
  },
  {
    id: "australia",
    name: "Australia",
    position: [-25.2744, 133.7751], // Center of Australia
  },
];

// Dynamically import the Map components to avoid SSR issues
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Tooltip = dynamic(
  () => import("react-leaflet").then((mod) => mod.Tooltip),
  { ssr: false }
);

const GarmentJourney: React.FC = () => {
  const defaultProps = {
    center: [20, 100] as [number, number],
    zoom: 2,
    minZoom: 2,
    maxZoom: 6,
    maxBounds: [
      [-90, -180], // Southwest coordinates
      [90, 180], // Northeast coordinates
    ] as [[number, number], [number, number]],
    maxBoundsViscosity: 1.0, // Prevents dragging outside bounds
  };

  return (
    <div className="relative flex flex-col md:flex-row gap-2 w-full h-[500px] p-4 bg-white">
      {/* Leaflet Map Container */}
      <div className="relative w-full h-full">
        <MapContainer
          {...defaultProps}
          style={{ height: "100%", width: "100%" }}
          scrollWheelZoom={false}
          zoomControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            noWrap={true}
          />
          {locations.map((location) => (
            <Marker key={location.id} position={location.position}>
              <Tooltip permanent={true} direction="top" offset={[0, -10]}>
                {location.name}
              </Tooltip>
            </Marker>
          ))}
        </MapContainer>
      </div>
      <div className="w-full md:w-1/4 p-2 md:p-4 flex flex-col justify-between bg-beige-100 border-l-0 md:border-l-4 border-t-4 md:border-t-0 border-brown-700 mt-4 md:mt-0 open-sans text-start">
        <div>
          <h2 className="text-xl md:text-3xl  text-brown-700">
            From Sri Lanka
          </h2>
          <h2 className="text-xl md:text-3xl  text-brown-700">to the World</h2>
        </div>
        <p className="mt-2 md:mt-4 md:text-3xl text-sm text-brown-700">
          Our Garment Journey
        </p>
      </div>
    </div>
  );
};

export default GarmentJourney;
