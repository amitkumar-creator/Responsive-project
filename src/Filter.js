import React, { useState } from 'react';


const Filter  = () =>{
    const List =['Anuj', 'Mohan', 'sohan','coder', 'programmer']
    const [filter, setFilter]  = useState("");
    return(
        <div>
            <h4> Example of Input filter </h4>
            <label>Input Filter :  </label>
            <input value={filter} onChange={(e)=>setFilter(e.target.value)}  />
            <ul>
            {List.map((item) =>{
                if(filter.length!==0){
                if(item.startsWith(filter)){
                    return <li>{item}</li>
                }
                else{
                    return null;
                }
                }
                return <li>{item}</li>
            })}
            </ul>
        </div>
    );
}

export default Filter;