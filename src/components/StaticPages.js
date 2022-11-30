import React from 'react';
import { Link } from 'react-router-dom';

export function ErrorPage(props) {
    return (
        <main className="container error-page text-center">
            <div className="error-404">
                <span className="error">4</span>
                <span className="far fa-question-circle fa-spin"></span>
                <span className="error-2">4</span>
            </div>
            <div className="error-msg">
                <h2 className="pt-0">PAGE NOT FOUND</h2>
                <p>Maybe this page got deleted? Is hiding out in quarantine? Never existed in the first place?</p>
            </div>
            <Link className="btn btn-outline-primary" to="/">Return Home</Link>
      </main>
    )
}