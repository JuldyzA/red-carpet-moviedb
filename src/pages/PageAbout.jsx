import { useEffect } from 'react';
import { appTitle } from '../globals/globals';

function PageAbout(){

   
        useEffect(() => {
          document.title = `${appTitle} - About`;
        }, []);
    return (
        <div>PageAbout</div>
    )
}

export default PageAbout
