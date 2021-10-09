import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import HomeInfo from '../HomeInfo/HomeInfo';
import './Services.css'

const Services = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('/ServiceLanguage.JSON')
            .then(res => res.json())
            .then(data => {
                setCourses(data);
                setDisplayCourse(data);
            })
    }, [])

    const [displayCourse, setDisplayCourse] = useState([]);
    const handleSearch = event => {
        const searchText = (event.target.value);
        const matched = courses.filter(course => course.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayCourse(matched);
        console.log(matched.length);

    }

    return (
        <div className='mb-5'>
            <div className='d-flex justify-content-between'>
                <div className='ms-5'>
                    <h1 className='service-title'>Select Courses</h1>
                </div>
                <div className='w-50 mt-4 ms-5'>
                    <input className='w-75 ms-5' onChange={handleSearch} type="text" placeholder='Search For Course Here' />

                </div>
            </div>


            <Row xs={1} md={3} className="g-4 w-75 m-5 m-auto">
                {
                    displayCourse.map(course => <HomeInfo
                        key={course.id}
                        course={course}></HomeInfo>)

                }
            </Row>
        </div>
    );
};

export default Services;