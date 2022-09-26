import React, { useState } from 'react'
import Sresult from './Sresult';


function Search() {
    const [state, setState] = useState("");
    const UpdateData = (e) => {
       const data=(e.target.value)
       setState(data)
    }
    return (
        <>
            <div className='searchbar'>
                <input type="text" placeholder='Search Anything' value={state} onChange={UpdateData} />
            </div>
            { state===""
            ?<div className='p_holder'><p>Search Anything You Like <br/><span>&&</span>See Related Image </p></div>:
            <Sresult data={state} />
            }
        </>
    )
}

export default Search