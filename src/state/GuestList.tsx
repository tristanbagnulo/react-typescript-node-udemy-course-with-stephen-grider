//from memory try to write a button and text field where the
//text field accepts a guest name and the button adds the 
//name to a list of guests (an array of strings). Use Typescript.
import { useEffect, useState } from "react"

const GuestList: React.FC = () => {
    //state variables
    const [name, setName] = useState('');
    const [guests, setGuests] = useState<string[]>([]);

    useEffect(() => {
        console.log(guests);
    }, [guests])

    const handleAddGuestClick = (name: string) => {
        setGuests([...guests, name]);
        setName('');
    }

    return (
        <div>
            <h3>Guest List</h3>
            <input type="text" value={name} onChange={(e) => {setName(e.target.value)}}></input>
            <button onClick={() => handleAddGuestClick(name)}>Add Guest</button>
            <ul>
                {guests.map(guest => (
                    <li key={guest}>{guest}</li>
                ))}
            </ul>
        </div>
    );
}

export default GuestList;