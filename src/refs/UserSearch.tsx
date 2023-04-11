import { useState, useRef, useEffect } from "react";

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
    const inputRef = useRef<HTMLInputElement | null >(null);

    const handleFindUserClick = () => {
        setSearchName(inputValue);
        const result = users.find(user => user.name === inputValue);
        setCurrentUser(result); 
    }

    useEffect(() => {
        if (!inputRef.current){
            return;
        }
        inputRef.current.focus();
    }, []);

    return (
        <div>
            User Search
            <input ref={inputRef} value={inputValue} onChange={e => setInputValue(e.target.value)}/>
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