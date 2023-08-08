import React from "react";


/**
 * Challenge: find out what happens when we try to append JSX
 * to our div root using .append() instead of ReactDom
 *
 *
 * 1. Create sample page in JSX (> 4 elements and save them in a variable
 * 2. Select the div with the id of 'root' and use .append() to append your JSX
 * 3. See if you can guess what will show up in the browser before running the code
 * 4. See if you can explain what actually shows up in the broswer
 *
 */

// Step 1 - create JSX

const page = ( // represents whole page
    <div>
        <h1>My Website in React</h1>
        <h3> Reasons I like React</h3>
    </div>
)