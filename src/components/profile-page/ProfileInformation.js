import React from 'react';

export function ProfileInformation(props) {

    const currentUser = props.currentUser;

    const displayedUserInfo = ['name', 'username', 'email', 'phone', 'school'];
    
    const userInfoDiv = displayedUserInfo.map(userInfo => {
        let userContent = '';
        let userContentInfo = '';
        
        if (Object.keys(currentUser).includes(userInfo)) {
            userContent = userInfo.charAt(0).toUpperCase() + userInfo.slice(1);
            userContentInfo = currentUser[userInfo];

            const userElement = (
                <React.Fragment key={userContentInfo}>
                    <div className='row'>
                        <div className='col-sm-4'>{userContent}</div>
                        <div className='col-sm-8 text-secondary text-md-end'>{userContentInfo}</div>
                    </div>
                    <hr/>
                </React.Fragment>
            )
            return userElement;
        }
    })

    return (
        <div className='col-md-6'>
            <div className='card mb-3'>
                <div className='card-body'>
                    {userInfoDiv}
                    <div className='row'>
                        <div className='col-sm-12 text-center'>
                            <a className='btn btn-info' href='#'>Edit</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}