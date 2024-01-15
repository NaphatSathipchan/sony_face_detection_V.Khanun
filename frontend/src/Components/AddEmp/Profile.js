import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function Profile() {
    const [showSuccess, setShowSuccess] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

  const handleButtonClick = () => {
    // Perform any upload logic here
    // For demonstration purposes, just toggle the success message
    setShowSuccess(true);

    // You may want to reset the success message after a delay
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000); // 3000 milliseconds (3 seconds)
    };
    function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShowSuccess(true);
  }
  return (
    <div>
      {/* Picture */}
      <img
        style={{
          width: 212,
          height: 199,
          left: 1068,
          top: 247,
          position: "absolute",
          background: "linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)",
          borderRadius: 143,
        }}
        src="https://scontent.fbkk5-6.fna.fbcdn.net/v/t1.15752-9/415356452_879401330591422_948746939450287122_n.png?_nc_cat=102&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeECcmyLDJi4LOcbgQopIzSLs8mgHWWXcXazyaAdZZdxdp-a-ZeIYoTOTy2yUAGT0AmmnyHu2qys5trN77BLuHVq&_nc_ohc=nUVatCralJcAX_wkyiD&_nc_ht=scontent.fbkk5-6.fna&oh=03_AdTES4XEPigSIy3n1gzoyY4o1w1Z6jHTI5aR6UASIfaVug&oe=65CA11AF"
      />
      {/* Dropdown */}
      <div style={{ width: 362, height: 45, left: 993, top: 489, position: "absolute" }}>
        <div
          style={{
            width: 362,
            height: 45,
            left: 0,
            top: 0,
            position: "absolute",
            background: "white",
            borderRadius: 14,
            border: "1px black solid",
          }}
        />
        {/* Dropdown for Employee Name */}
        <Form.Select style={{ width: 300, height: 30, left: 23, top: 10, position: "absolute" }}>
          <option value="employee1">Employee 1</option>
          <option value="employee2">Employee 2</option>
        </Form.Select>
      </div>

      <div style={{ width: 362, height: 45, left: 993, top: 554, position: "absolute" }}>
        <div
          style={{
            width: 362,
            height: 45,
            left: 0,
            top: 0,
            position: "absolute",
            background: "white",
            borderRadius: 14,
            border: "1px black solid",
          }}
        />
        {/* Dropdown for Employee Number */}
        <Form.Select style={{ width: 300, height: 30, left: 23, top: 10, position: "absolute" }}>
          <option value="code1">1234</option>
          <option value="code2">4567</option>
        </Form.Select>
      </div>
      {/* Upload */}
      <div style={{ width: 174, height: 45, left: 1087, top: 642, position: "absolute" }}>
        <div
          style={{
            width: 174,
            height: 45,
            left: 0,
            top: 0,
            position: "absolute",
            background: "#1C1C1C",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: 24,
          }}
        />
              <Button onClick={handleButtonClick} variant="transparent" style={{
                  width: "100%",
                  height: "100%",
                  cursor: "pointer"
              }}>
          <div
            style={{
              width: 67,
              height: 10,
              left: 53,
              top: 12,
              position: "absolute",
              textAlign: "center",
              color: "white",
              fontSize: 14,
              fontFamily: "Kanit",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            UPLOAD
          </div>
        </Button>
              {/* Success Modal */}
        <Modal show={showSuccess} fullscreen={fullscreen} onHide={() => setShowSuccess(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Success!</Modal.Title>
          </Modal.Header>
          <Modal.Body>Your upload was successful.</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowSuccess(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
