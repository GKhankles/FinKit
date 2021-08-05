import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function SavingsModal(props) {
  const SaveCalculator = () => {
    const [ival, setIval] = React.useState(0);
    const [rate, setRate] = React.useState(0);
    const [years, setYears] = React.useState(0);
    const [comp, setComp] = React.useState(0);
    const [total, setTotal] = React.useState(0);

    const IntialValSetter = (event) =>{ // obtains input value; bounces back and stores in hook
      setIval(event.target.value);
    }

    const RateSetter = (event) =>{ // obtains input value; bounces back and stores in hook
      setRate(event.target.value);
    }

    const YearSetter = (event) =>{ // obtains input value; bounces back and stores in hook
      setYears(event.target.value);
    }

    const CompSetter = (event) =>{ // obtains input value; bounces back and stores in hook
      setComp(event.target.value);
    }

    const calculate = () =>{
      let valInt = parseInt(ival, 10);
      let rateInt = parseFloat(rate);
      let yrInt = parseInt(years, 10);
      let cInt = parseInt(comp, 10);

      let stepOne = 1 + (rateInt / cInt); 
      let expmult = cInt * yrInt; 
      let stepTwo = stepOne ** expmult;
      let final = valInt * stepTwo; 
      final = final.toFixed(2);
      console.log(valInt, rateInt, yrInt, cInt)
      setTotal(final);
    }

    return(
      <div>
        <input class="inputPadding" onChange={IntialValSetter}/> <label> initial amt</label>
        <div></div>
        <input class="inputPadding" onChange={RateSetter}/> <label> rate (decimal)</label>
        <div></div>
        <input class="inputPadding" onChange={YearSetter}/> <label> # years</label>
        <div></div>
        <input class="inputPadding" onChange={CompSetter}/> <label> # compound times</label>
        <div></div>
        <Button variant="outline-primary" onClick={calculate}>Calculate!</Button>
        <div></div>
        <span>{total}</span>
      </div>
    );
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Savings Compound Interest Calculator
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <SaveCalculator/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function InfoModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Student Health Insurance 101
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Do Young People Need Health Insurance?</h4>
        <p>
          Nope. Surprises happen all the team. Health Insurance not only has your back during large accidents, 
          but also smaller scale illnesses such as strep throat medication. 
        </p>
        <h4>What if I am a) and Independent, and b) financially unstable?</h4>
        <p>
          No Problem. If your annual income is around $17,300 or under, under the Affordable Care Act you can qualify
          for Medicaid. 
        </p>
        <h4>As a College Student, what is my best bet for cheap health insurance?</h4>
        <p>
          Young adults under the age of 26 can still be listed on their parent's plan. 
          If you attend an out-of-state college however, your parent's plan may not extend coverage.
          In those cases, most of the time your university's health insurance plan offers the best 
          competitve rates for health insurance. 
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function App() {
  const [modalShow, setModalShow] = React.useState(false);
  const [modal2Show, setModal2Show] = React.useState(false);
  const [hook, setHook] = React.useState('');
  const FilterHelper = (event) =>{ // obtains input value; bounces back and stores in hook
    setHook(event.target.value)
  }

  let defaultMsg = "What are your intentions?"

  // filtering, recommends user which modal to click into
  if (hook.includes("insurance") || hook.includes("life")){
    defaultMsg = "-> Student Health Insurance";
  } else if (hook.includes("save")){
    defaultMsg = "-> Savings Calculator";
  } else {
    defaultMsg = "What are your intentions?";
  }

  return (
    <>
    <div>
      <h2 class="title1">F I N K I T</h2>
      <div class="input-container">
        <input onChange={FilterHelper} class="title"></input>
      </div>
      <h2 class="title2">{defaultMsg}</h2>
    </div>
    <div class="calculators">
      <div class="boxes">
      <button variant="primary" id="investment" class="box1" onClick={() => setModalShow(true)}>
        Savings Calculator
      </button>
      </div>
      <div class="boxes">
      <button variant="primary" id = "info" class="box2" onClick={() => setModalShow(true)}>
        Budgeting Calculator
      </button>
      </div>
      <div class="boxes">
      <button variant="primary" id = "info" class="box3" onClick={() => setModalShow(true)}>
        Time Value Calculator
      </button>
      </div>
      <div class="boxes">
      <button variant="primary" id = "info" class="box4" onClick={() => setModal2Show(true)}>
        Student Health Insurance
      </button>
      </div>
      <div class="boxes">
      <button variant="primary" id = "info" class="box5" onClick={() => setModalShow(true)}>
        Rainy Day Fund
      </button>
      </div>
    </div>

    <SavingsModal
      show={modalShow}
      onHide={() => setModalShow(false)}
    />

    <InfoModal 
      show={modal2Show}
      onHide={() => setModal2Show(false)}
    />
  </>
  );
}

export default App;
