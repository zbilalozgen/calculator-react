import React from "react";
function Screen(props) {
  return (
    <div>
      <div className="container ">
        <div className="row">
          <div className="screen col-8 m-auto d-flex justify-content-end align-items-center">
            {props.result || 0}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Screen;
