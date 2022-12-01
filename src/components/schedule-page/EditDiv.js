import React from 'react';

export function EditDiv(props) {
    const editButtonDiv = (
        <div className="edit-button">
            <button type="button" className="btn btn-info btn-sm">
                <small className="fa-solid fa-pen-to-square"></small>
                <span className="d-none d-lg-inline"> Edit</span>
            </button>
        </div>
    )
    return editButtonDiv
}