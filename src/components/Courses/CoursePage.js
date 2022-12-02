import React from 'react';
import { Link } from 'react-router-dom';

const CoursePage = ({ category }) => {
    const { name, id } = category
    return (
        <div>
            <li><Link to={`/courses/${id}`}>{name}</Link></li>
        </div>
    );
};

export default CoursePage;