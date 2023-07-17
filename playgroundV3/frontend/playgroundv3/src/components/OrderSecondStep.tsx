import React, { useState } from "react";

function OrderSecondStep() {
  let [folded, setFolded] = useState(true);

  const foldUnfold = () => {
    if (folded) {
      setFolded(false);
    } else {
      setFolded(true);
    }
  };

  return (
    <>
      <div className={`second-step-container ${folded ? "" : "invisible"}`}>
        <div className="folded view">
          <p className="first-step-title">Second Step: Locations</p>
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
                <div className="small-location-button-holder">
                  <div className="samll-menu-button">
                    <div
                      style={{ borderTopRightRadius: 6 }}
                      className="line"
                    ></div>
                    <div className="line"></div>
                    <div className="line"></div>
                  </div>
                  <div className="small-locations-menu">
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
              <p>▼</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderSecondStep;
