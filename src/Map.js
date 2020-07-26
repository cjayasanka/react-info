import React from "react";
import MapGL from "react-map-gl";
import * as districts from "./LKA_electrol_districts.geojson";
import { DeckGL } from "deck.gl";
import { GeoJsonLayer } from "@deck.gl/layers";

export default function Map({
  width,
  height,
  viewState,
  onViewStateChange,
  apiKey,
  onflyTo,
}) {
  const colors = [
    [255, 255, 204, 255],
    [217, 240, 163, 255],
    [173, 221, 142, 255],
    [49, 163, 84, 255],
    [0, 104, 55, 255],
  ];

  const getColor = (feature) => {
    return colors[Math.floor(Math.random() * Math.floor(5))];
  };

  const layers = [
    new GeoJsonLayer({
      id: "geojson-layer",
      data: districts,
      getFillColor: getColor,
      opacity: 0.2,
      pickable: true,
      onClick: ({ object }) => onflyTo(object),
    }),
  ];

  return (
    <MapGL
      width={width}
      height={height}
      viewState={viewState}
      onViewStateChange={onViewStateChange}
      mapboxApiAccessToken={apiKey}
    >
      <DeckGL viewState={viewState} layers={layers} />
    </MapGL>
  );
}
