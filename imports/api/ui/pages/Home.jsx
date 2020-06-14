import react from 'react';
import {link} from 'react-router-dom';

import container from 'react-boostrap/container'; 
import Button from 'react-bootstrap/button';

const Home =()=> {
    return(
        <container>
            <button variant="primary" as={link} to =":signin">

            </button>
            <button variant="primary" as= {Linkk} to="/signup">

            </button>
        </container>
    );
};
export default Home