import React from "react";

function Buttons(props) {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center">
        <div
          onClick={props.reset}
          id="AC"
          className="col-2 buttons-op1 d-flex justify-content-center align-items-center"
        >
          AC
        </div>
        <div
          onClick={e => {
            props.inputHandler(e.target.id);
          }}
          id="+"
          className="col-2 buttons-op1 d-flex justify-content-center align-items-center "
        >
          +
        </div>
        <div
          onClick={e => {
            props.inputHandler(e.target.id);
          }}
          id="%"
          className="col-2 buttons-op1 d-flex justify-content-center align-items-center "
        >
          %
        </div>
        <div
          onClick={e => {
            props.inputHandler(e.target.id);
          }}
          id="/"
          className="col-2 buttons-operator d-flex justify-content-center align-items-center "
        >
          ÷
        </div>
      </div>
      <div className="row d-flex justify-content-center d-flex justify-content-center align-items-center ">
        <div
          id="7"
          onClick={e => {
            props.inputHandler(e.target.id);
          }}
          className="col-2 buttons-num d-flex justify-content-center align-items-center "
        >
          7
        </div>
        <div
          onClick={e => {
            props.inputHandler(e.target.id);
          }}
          id="8"
          className="col-2 buttons-num d-flex justify-content-center align-items-center "
        >
          8
        </div>
        <div
          onClick={e => {
            props.inputHandler(e.target.id);
          }}
          id="9"
          className="col-2 buttons-num d-flex justify-content-center align-items-center "
        >
          9
        </div>
        <div
          onClick={e => {
            props.inputHandler(e.target.id);
          }}
          id="*"
          className="col-2 buttons-operator d-flex justify-content-center align-items-center "
        >
          x
        </div>
      </div>
      <div className="row d-flex justify-content-center d-flex justify-content-center align-items-center ">
        <div
          onClick={e => {
            props.inputHandler(e.target.id);
          }}
          id="4"
          className="col-2 buttons-num d-flex justify-content-center align-items-center "
        >
          4
        </div>
        <div
          onClick={e => {
            props.inputHandler(e.target.id);
          }}
          id="5"
          className="col-2 buttons-num d-flex justify-content-center align-items-center "
        >
          5
        </div>
        <div
          onClick={e => {
            props.inputHandler(e.target.id);
          }}
          id="6"
          className="col-2 buttons-num d-flex justify-content-center align-items-center "
        >
          6
        </div>
        <div
          onClick={e => {
            props.inputHandler(e.target.id);
          }}
          id="-"
          className="col-2 buttons-operator d-flex justify-content-center align-items-center "
        >
          -
        </div>
      </div>
      <div className="row d-flex justify-content-center d-flex justify-content-center align-items-center ">
        <div
          onClick={e => {
            props.inputHandler(e.target.id);
          }}
          id="1"
          className="col-2 buttons-num d-flex justify-content-center align-items-center "
        >
          1
        </div>
        <div
          onClick={e => {
            props.inputHandler(e.target.id);
          }}
          id="2"
          className="col-2 buttons-num d-flex justify-content-center align-items-center "
        >
          2
        </div>
        <div
          onClick={e => {
            props.inputHandler(e.target.id);
          }}
          id="3"
          className="col-2 buttons-num d-flex justify-content-center align-items-center "
        >
          3
        </div>
        <div
          onClick={e => {
            props.inputHandler(e.target.id);
          }}
          id="+"
          className="col-2 buttons-operator d-flex justify-content-center align-items-center "
        >
          +
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div
          onClick={e => {
            props.inputHandler(e.target.id);
          }}
          id="0"
          className="col-4 buttons-num d-flex justify-content-center align-items-center "
        >
          0
        </div>
        <div
          onClick={e => {
            props.inputHandler(e.target.id);
          }}
          id="."
          className="col-2 buttons-num d-flex justify-content-center align-items-center "
        >
          .
        </div>
        <div
          onClick={props.resultHandler}
          id="="
          className="col-2 buttons-operator d-flex justify-content-center align-items-center "
        >
          =
        </div>
      </div>
    </div>
  );
}

export default Buttons;
