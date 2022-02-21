// import React, { useRef } from 'react';
import axios from 'axios';

const InsertComment = () => {
    // const [comment, setComments] = React.useState([]);

    axios.post('http://localhost:8000/api/comment/', {
        commentaire: 'Admis'
    }
    )
    .then((response) => {
        console.log(response);
    }
    )
    


    // const input = useRef();

    // const insert = (e) => {
    //     e.preventDefault()
    //     console.log(input.current.value);
    //     input.current.type = "text"
    // }

    return (
        <>
         {/* <input type="text" ref={input} />
         <button onClick={insert}> Submit </button>    */}
        </>
    );
};

export default InsertComment;