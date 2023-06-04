import { useState } from "react";
import { Col, Modal, Button } from "react-bootstrap";
import navIcon1 from '../assets/img/youtube.svg';
import navIcon2 from '../assets/img/github-mark-white.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Col size={12} sm={6} md={4} onClick={handleOpenModal}>
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </Col>

      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="popup-content">
            <img src={imgUrl} alt={title} />
            <p>{description}</p>
            <div className="social-icon">
                            <a href={link.youtube}><img src={navIcon1} alt="Icon" /></a>
                            <a href={link.github}><img src={navIcon2} alt="Icon" /></a>
                            <a href={link.instagram}><img src={navIcon3} alt="Icon" /></a>
            </div>  
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <style>
        {`
          .proj-imgbx {
            cursor: pointer;
          }

          .proj-imgbx:hover {
            opacity: 0.8;
          }
        `}
      </style>
    </>
  );
};