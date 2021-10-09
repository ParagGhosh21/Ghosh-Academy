import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './HomeInfo.css'

const HomeInfo = (props) => {
    console.log(props.course);
    const{name,img,fee,students,teacher,ratings}=props.course;
    

    return (
        <div className='text-center'>
    <Col> 
      <Card className='card-body'>
      <img className='image' src={img} alt="" />
      
        
        <Card.Body>
          <Card.Title className='text-center'>{name}</Card.Title>

          <h6>Course Teacher : {teacher}</h6>
          <h6>Course Fee : {fee}$</h6>
          <h6>Total Students : {students}</h6>
          <h6>Course Rating : {ratings}</h6>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default HomeInfo;