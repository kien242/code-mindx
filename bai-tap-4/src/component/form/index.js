import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function FormFloatingBasicExample() {
    return (
        <>
            <FloatingLabel
                controlId="floatingInput"
                label="Fist name"
                className="mb-3"
            >
                <Form.Control type="text" placeholder="name@example.com" />
            </FloatingLabel>

            <FloatingLabel
                controlId="floatingInput"
                label="Last name"
                className="mb-3"
            >
                <Form.Control type="text" placeholder="name@example.com" />
            </FloatingLabel>
            
            <FloatingLabel
                controlId="floatingInput"
                label="User name"
                className="mb-3"
            >
                <Form.Control type="text" placeholder="name@example.com" />
            </FloatingLabel>

        </>
    );
}

export default FormFloatingBasicExample;
