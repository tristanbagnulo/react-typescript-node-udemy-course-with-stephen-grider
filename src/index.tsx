import ReactDOM from 'react-dom';
import UserSearch from './refs/UserSearch';

const App = () => {
    return (
        <div>
            {/* <GuestList/> */}
            <UserSearch/>
        </div>
    );
};

ReactDOM.render(<App />,document.querySelector('#root'));