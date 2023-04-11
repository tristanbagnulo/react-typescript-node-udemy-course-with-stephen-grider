import { useState } from "react";

const users = [
    { name: 'Sarah', age: 20 },
    { name: 'Michael', age: 23 },
    { name: 'Alex', age: 24 },
]

//stateful component that takes input value from input

const UserSearch: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [searchName, setSearchName] = useState('');
    const [currentUser, setCurrentUser] = useState<{name: string, age: number} | undefined>();

    const handleFindUserClick = () => {
        setSearchName(inputValue);
        const result = users.find(user => user.name === inputValue);
        setCurrentUser(result); 
    }

    return (
        <div>
            User Search
            <input value={inputValue} onChange={e => setInputValue(e.target.value)}/>
            <button onClick={handleFindUserClick}>Find user</button>
            {currentUser !== undefined ? 
                (<p>
                    Name: {currentUser.name} <br/>
                    Age: {currentUser.age}
                </p>) : 
                <p>No user named "{searchName}" was found</p>
            }
            
        </div>
        
    );
}

export default UserSearch;