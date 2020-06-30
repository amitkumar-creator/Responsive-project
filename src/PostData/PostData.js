import React from 'react';
import Post from '../JSONdata/Posts.json';



const PostData = () =>{
    return(
   <div>
       <h3>Hello this is the JSON data</h3>
       {Post.map((item, index)=>{
           return(
               <>
              <h4>{item.name}</h4>
              <h4>{item.content}</h4>
              
              </>
           ); 
       })}
   </div>
    );
}

export default PostData;
