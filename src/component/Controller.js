import "./component-style/controller.css";
import React from "react";

class Controller extends React.Component {
  render() {
    return (
      // full controller container div
      <div className="controller-container" id="inner-container" onMouseOver={this.props.rotateWheel}>

        
        <div className="wheel">

          {/*all wheel buttons ----------------------------------------------------------------*/}
          <button className="wheel-btn menu-btn" onClick={this.props.changePageToHomeScreen}>
            MENU
          </button>

          <button className="wheel-btn backward-btn">
            <img src="https://cdn-icons-png.flaticon.com/512/4029/4029036.png" alt=""/>
          </button>

          <button className="wheel-btn forward-btn">
            <img src="https://cdn-icons-png.flaticon.com/512/1/1824.png" alt=""/>
          </button>

          <button className="wheel-btn start-play-btn" onClick={this.props.toggle}>
            <img src="https://cdn-icons-png.flaticon.com/512/64/64595.png" alt=""/>
          </button>

          <button className="ok-btn" onClick={this.props.changePage}></button>
          {/* ---------------------------------------------------------------------------------*/}

        </div>


      </div>
    );
  }
}

export default Controller;
