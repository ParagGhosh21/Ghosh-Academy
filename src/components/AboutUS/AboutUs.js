import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className='w-50 vh-100 m-auto'>
            <h1>A personalized learning resource for all ages</h1>
            <h6>
                Ghosh Academy offers practice exercises, instructional videos, and a personalized learning dashboard that empower learners to study at their own pace in and outside of the classroom. We tackle math, science, computing, history, art history, economics, and more, including K-14 and test preparation (SAT, Praxis, LSAT) content. We focus on skill mastery to help learners establish strong foundations, so there's no limit to what they can learn next!</h6>

            <h1>Free tools for parents and teachers</h1>
            <h6>
                We’re working hard to ensure that Khan Academy empowers coaches of all kinds to better understand what their children or students are up to and how best to help them. See at a glance whether a child or student is struggling or if she hit a streak and is now far ahead of the class. Our teacher dashboard provides a summary of class performance as a whole as well as detailed student profiles.

            </h6>
            <h1>You’re joining a global classroom</h1>
            <h6>

                Millions of students from all over the world, each with their own unique story, learn at their own pace on Khan Academy every single day. Our resources are being translated into more than 36 languages in addition to the Spanish, French, and Brazilian Portuguese versions of our site.


            </h6>

            <Link
                className="btn btn btn-primary btn-lg"
                role="button"
                to="/about"
            >
                Learn more about us
            </Link>
        </div>


    );
};

export default AboutUs;
