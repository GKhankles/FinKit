import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
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

  return (
    <>
    <div>
      <h2 class="title1">F I N K I T</h2>
      <input class="title"></input>
      <h2 class="title2">what  are  your  intentions?</h2>
    </div>
    <div>
    <button variant="primary" id="investment" class="box1" onClick={() => setModalShow(true)}>
      Investment
    </button>
    </div>
    <div>
    <button variant="primary" id = "info" class="box2" onClick={() => setModalShow(true)}>
      Budgeting 
    </button>
    </div>
    <div>
    <button variant="primary" id = "info" class="box3" onClick={() => setModalShow(true)}>
      Time Value
    </button>
    </div>
    <div>
    <button variant="primary" id = "info" class="box4" onClick={() => setModalShow(true)}>
      Student Insurance
    </button>
    </div>
    <div>
    <button variant="primary" id = "info" class="box5" onClick={() => setModalShow(true)}>
      Rainy Day Fund
    </button>
    </div>

    <MyVerticallyCenteredModal
      show={modalShow}
      onHide={() => setModalShow(false)}
    />
  </>
  );
}

export default App;
