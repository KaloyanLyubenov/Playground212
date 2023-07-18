import React, { useMemo, useState } from "react";
import "../styles/orderSecondStep.css";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

function OrderSecondStep() {
  let [folded, setFolded] = useState(true);
  let [miniLocationsVisibility, setMiniLocationsVisibility] = useState(false);

  const googleMapsApiKey = `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: googleMapsApiKey as string,
  });

  function foldUnfold() {
    if (folded) {
      setFolded(false);
    } else {
      setFolded(true);
    }
  }

  const foldUnfoldMiniMenu = () => {
    if (miniLocationsVisibility) {
      setMiniLocationsVisibility(false);
    } else {
      setMiniLocationsVisibility(true);
    }
  };

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <>
      <div className={`second-step-container ${folded ? "" : "invisible"}`}>
        <div className="folded view">
          <p className="step-title">Second Step: Locations</p>
          <div className="arrow-container" onClick={foldUnfold}>
            <p>▼</p>
          </div>
        </div>
      </div>

      <div className={`second-step-container ${folded ? "invisible" : ""}`}>
        <div className="unfolded view map">
          <p>Select Locations</p>
          <div className="map-functions-holder">
            <div className="map-container">
              <div className="map">
                <Map />
                <div className="small-location-button-holder">
                  <div
                    className="small-menu-button"
                    onClick={foldUnfoldMiniMenu}
                  >
                    <div
                      style={{ borderTopRightRadius: 6 }}
                      className="line"
                    ></div>
                    <div className="line"></div>
                    <div className="line"></div>
                  </div>
                  <div
                    className={`small-locations-menu ${
                      miniLocationsVisibility ? "" : "invisible"
                    }`}
                  >
                    <ul>
                      <li className="active">
                        <div className="location-info">
                          <div className="location-title">
                            <p style={{ fontSize: 14, margin: 1, height: 17 }}>
                              Title
                            </p>
                          </div>
                          <div className="location-details">
                            <p style={{ fontSize: 10, margin: 1 }}>
                              Some information about the location and the
                              scenery
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="location-info">
                          <div className="location-title">
                            <p style={{ fontSize: 14, margin: 1, height: 17 }}>
                              Title
                            </p>
                          </div>
                          <div className="location-details">
                            <p style={{ fontSize: 10, margin: 1 }}>
                              Some information about the location and the
                              scenery
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="location-info">
                          <div className="location-title">
                            <p style={{ fontSize: 14, margin: 1, height: 17 }}>
                              Title
                            </p>
                          </div>
                          <div className="location-details">
                            <p style={{ fontSize: 10, margin: 1 }}>
                              Some information about the location and the
                              scenery
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="location-info">
                          <div className="location-title">
                            <p style={{ fontSize: 14, margin: 1, height: 17 }}>
                              Title
                            </p>
                          </div>
                          <div className="location-details">
                            <p style={{ fontSize: 10, margin: 1 }}>
                              Some information about the location and the
                              scenery
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="location-info">
                          <div className="location-title">
                            <p style={{ fontSize: 14, margin: 1, height: 17 }}>
                              Title
                            </p>
                          </div>
                          <div className="location-details">
                            <p style={{ fontSize: 10, margin: 1 }}>
                              Some information about the location and the
                              scenery
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="location-info">
                          <div className="location-title">
                            <p style={{ fontSize: 14, margin: 1, height: 17 }}>
                              Title
                            </p>
                          </div>
                          <div className="location-details">
                            <p style={{ fontSize: 10, margin: 1 }}>
                              Some information about the location and the
                              scenery
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="location-info">
                          <div className="location-title">
                            <p style={{ fontSize: 14, margin: 1, height: 17 }}>
                              Title
                            </p>
                          </div>
                          <div className="location-details">
                            <p style={{ fontSize: 10, margin: 1 }}>
                              Some information about the location and the
                              scenery
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="location-info">
                          <div className="location-title">
                            <p style={{ fontSize: 14, margin: 1, height: 17 }}>
                              Title
                            </p>
                          </div>
                          <div className="location-details">
                            <p style={{ fontSize: 10, margin: 1 }}>
                              Some information about the location and the
                              scenery
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="location-info">
                          <div className="location-title">
                            <p style={{ fontSize: 14, margin: 1, height: 17 }}>
                              Title
                            </p>
                          </div>
                          <div className="location-details">
                            <p style={{ fontSize: 10, margin: 1 }}>
                              Some information about the location and the
                              scenery
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="locations-list">
              <div className="locations">
                <ul>
                  <li className="active">
                    <div className="thumbnail">
                      <img
                        src="https://ps.w.org/kama-thumbnail/assets/icon-256x256.png?rev=2836004"
                        alt=""
                      />
                    </div>
                    <div className="location-info">
                      <div className="location-title">
                        <p style={{ fontSize: 14, margin: 1, height: 17 }}>
                          Title
                        </p>
                      </div>
                      <div className="location-details">
                        <p style={{ fontSize: 10, margin: 1 }}>
                          Some information about the location and the scenery
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="thumbnail">
                      <img
                        src="https://ps.w.org/kama-thumbnail/assets/icon-256x256.png?rev=2836004"
                        alt=""
                      />
                    </div>
                    <div className="location-info">
                      <div className="location-title">
                        <p style={{ fontSize: 14, margin: 1, height: 17 }}>
                          Title
                        </p>
                      </div>
                      <div className="location-details">
                        <p style={{ fontSize: 10, margin: 1 }}>
                          Some information about the location and the scenery
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="thumbnail">
                      <img
                        src="https://ps.w.org/kama-thumbnail/assets/icon-256x256.png?rev=2836004"
                        alt=""
                      />
                    </div>
                    <div className="location-info">
                      <div className="location-title">
                        <p style={{ fontSize: 14, margin: 1, height: 17 }}>
                          Title
                        </p>
                      </div>
                      <div className="location-details">
                        <p style={{ fontSize: 10, margin: 1 }}>
                          Some information about the location and the scenery
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="thumbnail">
                      <img
                        src="https://ps.w.org/kama-thumbnail/assets/icon-256x256.png?rev=2836004"
                        alt=""
                      />
                    </div>
                    <div className="location-info">
                      <div className="location-title">
                        <p style={{ fontSize: 14, margin: 1, height: 17 }}>
                          Title
                        </p>
                      </div>
                      <div className="location-details">
                        <p style={{ fontSize: 10, margin: 1 }}>
                          Some information about the location and the scenery
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="thumbnail">
                      <img
                        src="https://ps.w.org/kama-thumbnail/assets/icon-256x256.png?rev=2836004"
                        alt=""
                      />
                    </div>
                    <div className="location-info">
                      <div className="location-title">
                        <p style={{ fontSize: 14, margin: 1, height: 17 }}>
                          Title
                        </p>
                      </div>
                      <div className="location-details">
                        <p style={{ fontSize: 10, margin: 1 }}>
                          Some information about the location and the scenery
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="thumbnail">
                      <img
                        src="https://ps.w.org/kama-thumbnail/assets/icon-256x256.png?rev=2836004"
                        alt=""
                      />
                    </div>
                    <div className="location-info">
                      <div className="location-title">
                        <p style={{ fontSize: 14, margin: 1, height: 17 }}>
                          Title
                        </p>
                      </div>
                      <div className="location-details">
                        <p style={{ fontSize: 10, margin: 1 }}>
                          Some information about the location and the scenery
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="thumbnail">
                      <img
                        src="https://ps.w.org/kama-thumbnail/assets/icon-256x256.png?rev=2836004"
                        alt=""
                      />
                    </div>
                    <div className="location-info">
                      <div className="location-title">
                        <p style={{ fontSize: 14, margin: 1, height: 17 }}>
                          Title
                        </p>
                      </div>
                      <div className="location-details">
                        <p style={{ fontSize: 10, margin: 1 }}>
                          Some information about the location and the scenery
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="thumbnail">
                      <img
                        src="https://ps.w.org/kama-thumbnail/assets/icon-256x256.png?rev=2836004"
                        alt=""
                      />
                    </div>
                    <div className="location-info">
                      <div className="location-title">
                        <p style={{ fontSize: 14, margin: 1, height: 17 }}>
                          Title
                        </p>
                      </div>
                      <div className="location-details">
                        <p style={{ fontSize: 10, margin: 1 }}>
                          Some information about the location and the scenery
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="thumbnail">
                      <img
                        src="https://ps.w.org/kama-thumbnail/assets/icon-256x256.png?rev=2836004"
                        alt=""
                      />
                    </div>
                    <div className="location-info">
                      <div className="location-title">
                        <p style={{ fontSize: 14, margin: 1, height: 17 }}>
                          Title
                        </p>
                      </div>
                      <div className="location-details">
                        <p style={{ fontSize: 10, margin: 1 }}>
                          Some information about the location and the scenery
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="thumbnail">
                      <img
                        src="https://ps.w.org/kama-thumbnail/assets/icon-256x256.png?rev=2836004"
                        alt=""
                      />
                    </div>
                    <div className="location-info">
                      <div className="location-title">
                        <p style={{ fontSize: 14, margin: 1, height: 17 }}>
                          Title
                        </p>
                      </div>
                      <div className="location-details">
                        <p style={{ fontSize: 10, margin: 1 }}>
                          Some information about the location and the scenery
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="arrow-up-holder">
            <div className="arrow-container" onClick={foldUnfold}>
              <p style={{ marginTop: 10 }}>▲</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderSecondStep;

function Map() {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
  return (
    <GoogleMap
      zoom={10}
      center={center}
      mapContainerClassName="map-shenanigans"
    >
      <Marker position={center} />
    </GoogleMap>
  );
}
