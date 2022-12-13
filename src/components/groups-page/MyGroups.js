import React, { useEffect, useState }  from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';

export default function MyGroups(props) {
    const currentUser = props.currentUser;
    const [userGroupData, setUserGroupData] = useState([])

    useEffect(() => {
        const db = getDatabase();
        const userGroupsDbRef = ref(db, 'userData/' + currentUser.id + '/userGroups');

        const unregisteredFunction = onValue(userGroupsDbRef, (snapshot) => {
            const changedValue = snapshot.val();
            const groupObjKeys = Object.keys(changedValue);
            const allGroupsArray = groupObjKeys.map((keyString) => {
                const groupObj = changedValue[keyString];
                groupObj.key = keyString;
                return groupObj;
            })
            setUserGroupData(allGroupsArray);
        })

        function cleanup() {
            unregisteredFunction();
        }
        return cleanup;
        
    }, [])

    return (
        <CardList groupData={userGroupData} />
    )
}

function CardGroup(props) {
    const groupData = props.groupData;
    const groupDiv = groupData.map((groupObj) => {

        return (
            <div key={groupObj.key} className='col'>
                <div className='card h-100'>
                    <button className='btn btn-link align-self-end pb-0'>
                        <span className='fa-solid fa-ellipsis'></span>
                    </button>
                    <img 
                        src={groupObj.groupImage} 
                        alt={groupObj.groupTitle}
                        className='card-img-top img-thumbnail mx-auto d-block' 
                    />
                    <div className='card-body text-center'>
                        <h3 className='card-title'>{groupObj.groupTitle}</h3>
                        <p className='card-text'>{groupObj.groupDescription}</p>
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