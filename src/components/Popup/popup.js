import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
// import React from 'react';
import "./popup.css";
// import logo1 from "../assets/image/homelogo.png";
// import
// import Button from 'react-bootstrap/Button';
// import "./Modal.css";

const Popup = (props) => {
  let {Head, Text } = props.data;
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <Button variant="primary" onClick={toggleModal} className="btn-modal">
        Read more
      </Button>

      {modal && (
        <div className="modal ">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="lg:ml-[20px] lg:mr-[20px] lg:mt-[10px] flex mt-[17px]">
              {/* <div className="bg-[#ffffff] lg:w-[70px] lg:h-[70px] w-[25.87px] h-[24px] rounded-[50%]">
                <img src={img} alt=""/>
              </div> */}
              {/* <div className="lg:ml-[16px]"> */}
                <h1 className="text-[#074381] lg:text-[30px] text-[23px] font-[700] mt-[8px] ml-[8px] lg:mt-[0] lg:ml-[5px]">
                  {Head}
                </h1>
              {/* </div> */}
            </div>

            <div className="lg:m-[20px] lg:mt-[20px] flex mt-[17px]">
                <h2 className="lg:text-[23px] text-[#3A4047D1] text-[16px] font-[0] lg:mt-[-3px] mb-[0px] mt-[-4px] ">
                🙶{Text}🙷
                </h2>
            </div>

            <button className="text-[#000000] close-modal" onClick={toggleModal}>
            ✖
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;



// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import React from 'react';
// import "./popup.css";
// function MyVerticallyCenteredModal(props) {
//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Modal heading
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <h4>Centered Modal</h4>
//         <p>
//           Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
//           dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
//           consectetur ac, vestibulum at eros.
//         </p>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button onClick={props.onHide}>Close</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

// const Popup=(data)=> {
//   const [modalShow, setModalShow] = React.useState(false);
//   let { imgSrc, price, title } = data.data;
//   return (
//     <>
//       <Button variant="primary" onClick={() => setModalShow(true)}>
//         {price}
//       </Button>

//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </>
//   );
// }
// export default Popup;
