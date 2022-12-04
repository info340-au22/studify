import React from 'react';

function CardGroup(props) {
    const groupData = props.groupData;
    const groupDiv = groupData.map(groupObj => {
        return (
            <div key={groupObj.title} className="col">
                <div className="card h-100">
                    <button className="btn btn-link align-self-end pb-0">
                        <span className="fa-solid fa-ellipsis"></span>
                    </button>
                    <img src={groupObj.image} className="card-img-top img-thumbnail mx-auto d-block" alt={groupObj.title}/>
                    <div className="card-body text-center">
                        <h3 className="card-title">{groupObj.title}</h3>
                        <p className="card-text">{groupObj.text}</p>
                    </div>
                    <div className="card-footer text-center">
                        <small className="text-muted">{groupObj.footer}</small>
                    </div>
                </div>
            </div>
        )
    })
    return groupDiv;
}

function CardList(props) {
    return (
        <section className="cards-my-groups mx-auto row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3 g-md-4">
            <CardGroup groupData={props.groupData} />
        </section>
    )
}

export function MyGroups(props) {
    return (
        <CardList groupData={props.groupData} />
    )
}