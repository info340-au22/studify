import React from 'react';

export default function NewCourseForm(props) {
    const editButtonDiv = (
        <div className='add-button'>
            <button type='button' className='btn btn-info btn-sm'>
                <small className='fa-solid fa-plus'></small>
                <span className='d-none d-lg-inline'> Add</span>
            </button>
        </div>
    )
    return editButtonDiv
}