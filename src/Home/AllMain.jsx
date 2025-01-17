import React from 'react'

function AllMain() {
  return (
    <div className="features">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <a href="#">
            <div className="item">
              <div className="image">
                <img src="assets/images/featured-01.png" alt="" className=".new-img1"/>
              </div>
              <h4>Free Storage</h4>
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-md-6">
          <a href="#">
            <div className="item">
              <div className="image">
                <img src="assets/images/featured-02.png" alt="" className=".new-img1"/>
              </div>
              <h4>User More</h4>
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-md-6">
          <a href="#">
            <div className="item">
              <div className="image">
                <img src="assets/images/featured-03.png" alt="" className=".new-img1"/>
              </div>
              <h4>Reply Ready</h4>
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-md-6">
          <a href="#">
            <div className="item">
              <div className="image">
                <img src="assets/images/featured-04.png" alt="" className=".new-img1"/>
              </div>
              <h4>Easy Layout</h4>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AllMain