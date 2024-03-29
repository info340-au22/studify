import React from 'react';

export default function JoinGroups(props) {
    return (
        <CardList groupData={props.groupData} />
    )
}

function CardGroup(props) {
    const groupData = props.groupData;
    const groupDiv = groupData.map((groupObj) => {
        return (
            <div key={groupObj.title} className='col'>
                <div className='card h-100'>
                    <img 
                        src={groupObj.image}
                        alt={groupObj.title}
                        className='card-img-top img-thumbnail mx-auto d-block mt-4'
                    />
                    <div className='card-body text-center'>
                        <h3 className='card-title'>{groupObj.title}</h3>
                        <p className='card-text'>{groupObj.text}</p>
                        <a href='#' className='btn btn-primary mt-auto'>Join</a>
                    </div>
                    <div className='card-footer text-center'>
                        <small className='text-muted'>{groupObj.footer}</small>
                    </div>
                </div>
            </div>
        )
    })
    return groupDiv;
}

function CardList(props) {
    return (
        <section className='cards-my-groups mx-auto row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3 g-md-4'>
            <CardGroup groupData={props.groupData} />
        </section>
    )
}