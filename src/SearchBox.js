import React from 'react';


const SearchBox = ({searchfield, searchChange}) =>{
    return(
<div className = 'pa2'>
    <input
    className = 'ct pa3 ba b--green bg-lightest-blue'
    type = 'search'
    placeholder = 'search employees'
    onChange = {searchChange}
    />
</div>
    );
}

export default SearchBox;