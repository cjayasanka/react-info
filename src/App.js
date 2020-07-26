import React from "react";
import { FlyToInterpolator } from "react-map-gl";
import * as Locations from "./locations";
import Map from "./Map";
import styles from "./App.module.css";

function App() {
  const [viewState, setViewState] = React.useState(Locations.sri_colombo);
  const handleChangeViewState = ({ viewState }) => setViewState(viewState);

  const handleflyTo = (destination) => {
    setViewState({
      ...viewState,
      ...destination,
      transitionDuration: 2000,
      transitionInterpolator: new FlyToInterpolator(),
    });
  };

  return (
    <div>
      <div className={styles.controls}>
        {Object.keys(Locations).map((key) => {
          return (
            <button
              key={key}
              onClick={() => {
                handleflyTo(Locations[key]);
              }}
            >
              {key}
            </button>
          );
        })}
      </div>
      <Map
        width="100vw"
        height="100vh"
        viewState={viewState}
        onViewStateChange={handleChangeViewState}
        apiKey={process.env.REACT_APP_MAPBOX_TOKEN}
      />
    </div>
  );
}

export default App;
