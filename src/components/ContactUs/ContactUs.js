import React from 'react';
import { Form } from 'react-bootstrap';

const ContactUs = () => {
  return (
    <div className='m-5'>
      <h1 className='text-center m-5'>Contact Us Here</h1>
      <Form className='w-50 m-auto'>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter Your Email Here" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Your Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
    </div>
  );
};

export default ContactUs;