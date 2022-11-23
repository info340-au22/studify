import React from 'react';

function GroupCards(props) {
    return (
        <section className="cards mx-auto row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3 g-md-4">
            <div className="col">
                <div className="card h-100">
                    <img src="https://source.unsplash.com/XopauR-Nagk" className="card-img-top img-thumbnail mx-auto d-block mt-4" alt="..."/>
                    <div className="card-body text-center d-flex flex-column">
                        <h3 className="card-title">INFO 340</h3>
                        <p className="card-text">Client-Side Development</p>
                        <a href="#" className="btn btn-primary mt-auto">Join</a>
                    </div>
                    <div className="card-footer text-center">
                        <small className="text-muted">101 members | Public</small>
                    </div>
                </div>
            </div>
            
            <div className="col">
                <div className="card h-100">
                    <img src="https://source.unsplash.com/C5pXRFEjq3w" className="card-img-top img-thumbnail mx-auto d-block mt-4" alt="..."/>
                    <div className="card-body text-center d-flex flex-column">
                        <h3 className="card-title">INFO 310</h3>
                        <p className="card-text">Information Assurance And Cybersecurity</p>
                        <a href="#" className="btn btn-primary mt-auto">Join</a>
                    </div>
                    <div className="card-footer text-center">
                        <small className="text-muted">46 members | Public</small>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="card h-100">
                    <img src="https://source.unsplash.com/SYTO3xs06fU" className="card-img-top img-thumbnail mx-auto d-block mt-4" alt="..."/>
                    <div className="card-body text-center d-flex flex-column">
                        <h3 className="card-title">CS Careers</h3>
                        <p className="card-text">Interviews, Leetcode, and More</p>
                        <a href="#" className="btn btn-primary mt-auto">Join</a>
                    </div>
                    <div className="card-footer text-center">
                        <small className="text-muted">187 members | Public</small>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="card h-100">
                    <img src="https://source.unsplash.com/JKUTrJ4vK00" className="card-img-top img-thumbnail mx-auto d-block mt-4" alt="..."/>
                    <div className="card-body text-center d-flex flex-column">
                        <h3 className="card-title">INFO 370</h3>
                        <p className="card-text">Core Methods in Data Science</p>
                        <a href="#" className="btn btn-primary mt-auto">Join</a>
                    </div>
                    <div className="card-footer text-center">
                        <small className="text-muted">89 members | Public</small>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="card h-100">
                    <img src="https://source.unsplash.com/ViEBSoZH6M4" className="card-img-top img-thumbnail mx-auto d-block mt-4" alt="..."/>
                    <div className="card-body text-center d-flex flex-column">
                        <h3 className="card-title">MATH 208</h3>
                        <p className="card-text">Linear Algebra</p>
                        <a href="#" className="btn btn-primary mt-auto">Join</a>
                    </div>
                    <div className="card-footer text-center">
                        <small className="text-muted">110 members | Public</small>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="card h-100">
                    <img src="https://source.unsplash.com/vL-R502ZxuM" className="card-img-top img-thumbnail mx-auto d-block mt-4" alt="..."/>
                    <div className="card-body text-center d-flex flex-column">
                        <h3 className="card-title">Dumblings</h3>
                        <p className="card-text">Procrastinating Dumblings</p>
                        <a href="#" className="btn btn-primary mt-auto">Join</a>
                    </div>
                    <div className="card-footer text-center">
                        <small className="text-muted">23 members | Private</small>
                    </div>
                </div>
            </div>

        </section>
    )
}

export function JoinGroups(props) {
    return (
        <GroupCards />
    )
}