import React from "react";
import { FlyToInterpolator } from "react-map-gl";
import * as Locations from "./locations";
import Map from "./Map";
import styles from "./App.module.css";

function App() {
  const [viewState, setViewState] = React.useState(Locations.sri_colombo);
  const handleChangeViewState = ({ viewState }) => setViewState(viewState);

  // const handleflyTo = (destination) => {
  //   setViewState({
  //     ...viewState,
  //     ...destination,
  //     transitionDuration: 2000,
  //     transitionInterpolator: new FlyToInterpolator(),
  //   });
  // };

  const handleDropdownChange = (e) => {
    setViewState({
      ...viewState,
      ...Locations[e.target.value],
      transitionDuration: 2000,
      transitionInterpolator: new FlyToInterpolator(),
    });
    console.log(e.target.value);
  };

  return (
    <div>
      <Map
        width="100vw"
        height="100vh"
        viewState={viewState}
        onViewStateChange={handleChangeViewState}
        apiKey={process.env.REACT_APP_MAPBOX_TOKEN}
      />
      <div className={styles.controls}>
        {/* {Object.keys(Locations).map((key) => {
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
        })} */}

        <div>
          <select id="dropdown" onChange={handleDropdownChange}>
            {Object.keys(Locations).map((key) => {
              return <option key={key}>{key}</option>;
            })}
          </select>
        </div>
      </div>
    </div>
  );
}

export default App;
