import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class HomePage extends Component {
  render() {
    return (
      <>
          <div className="container">
          <div className="gallery main-gallery">
              <Link to="/laptops" className="tile img1">
                  <div className="tile-content">
                      laptops
                  </div>
              </Link>
              <Link to="/screens" className="tile img2">
                  <div className="tile-content">
                      displays
                  </div>
              </Link>
              <Link to="/smartphones" className="tile img3">
                  <div className="tile-content">
                      smartphones
                  </div>
              </Link>
              <Link to="/tablets" className="tile img4">
                  <div className="tile-content">
                      tablets
                  </div>
              </Link>
          </div>
          </div>
      </>
    );
  }
}
