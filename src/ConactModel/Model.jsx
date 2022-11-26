import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ContactForm from './Form';
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
          Contact Form
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
    
  <ContactForm />
      </Modal.Body>
    
    </Modal>
  );
}

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <React.Fragment>
      <Button  size="sm" variant="primary" onClick={() => setModalShow(true)}>
                  Create
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
       

    </React.Fragment>
  );
}

export default App 