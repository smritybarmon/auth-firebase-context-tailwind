import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const Home = () => {
    const user = useContext(AuthContext)
    return (
        <div>
            <h2>This is home {user && <span>{user.displayName}</span>} </h2>
        </div>
    );
};

export default Home;