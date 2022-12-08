import { React, useState } from "react";

//function to enter group name, group description, public/private choice and picture create.
export function CreateGroups(props) {
    const [groupName, setGroupName] = useState('');
    const [groupDescription, setGroupDescription] = useState('');
    const [groupPublicity, setGroupPublicity] = useState('Public');
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const group = {groupName, groupDescription, groupPublicity};
        setIsPending(true);
        fetch('http://localhost:3000/groups', {
            method: 'POST',
            headers: { "Content-type": "groups.json" },
            body: JSON.stringify(group)
        }).then(() => {
            console.log('New group added');
            setIsPending(false);
        })
    }

    return (
        <div className="create-group">
            <h1>Create your study group</h1>
            <form onSubmit={handleSubmit}>
                <label>Group name:</label>
                <input type="text" required value={groupName} onChange={(e) => setGroupName(e.target.value)} />
                <label>Group description:</label>
                <textarea required value={groupDescription} onChange={(e) => setGroupDescription(e.target.value)}></textarea> 
                {!isPending && <button>Create Group</button>}
                {isPending && <button>Creating Group</button>}
            </form>
        </div>
    )
}