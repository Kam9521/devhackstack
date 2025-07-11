import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";


const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const GlobalHackMap = () => {
  return (
    <div className="map-wrapper">
      <h2 className="map-title">Symulacja ataków w czasie rzeczywistym</h2>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 140 }}
        width={800}
        height={400}
        style={{ margin: "auto" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: "#1c1c2e",
                    outline: "none",
                  },
                  hover: {
                    fill: "#00aaff",
                    outline: "none",
                    cursor: "pointer",
                  },
                  pressed: {
                    fill: "#ff0033",
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default GlobalHackMap;
