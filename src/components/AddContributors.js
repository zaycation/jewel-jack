import Axios from "axios"
import React, { useState } from "react";


export default function AddContributors(props){
    const [name, setName] = useState(null);
    const [image, setImage] = useState(null);
    const [linkedIn, setLinkedIn] = useState(null);
    const [gitHub, setGitHub] = useState(null);
    const [twitter, setTwitter] = useState(null);
    // const [faceBook, setfaceBook] = useState(null);
 

    const handleName = (e) =>{
        setName(e.target.value);
    };
    const handleImage =(e)=>{
        setImage(e.target.value);
    };
    const handleLinkedIn=(e)=>{
        setLinkedIn(e.target.value);
    };
    const handleGitHub=(e)=>{
        setGitHub(e.target.value);
    };
    const handleTwitter=(e)=>{
        setTwitter(e.target.value);
    }
    // const handlefaceBook=(e)=>{
    //     setfaceBook(e.target.value);
    // }

        const newContributor = {
            name:name,
            image: image,
            linkedIn: linkedIn,
            gitHub: gitHub,
            twitter: twitter,
           
        }
      console.log("newContributor",newContributor)

        const postContributor=(e)=>{
       Axios.post(`http://localhost:5000/contributors`,newContributor)
        .then((response) => {
            console.log("response",response)
            alert("Saved! Please click NEXT to proceed");
            
        })
        .catch((error)=>{
            console.log(error)
        })   
      }  
    
    return(
        <>
        
         <div className="credits">
                <div className="credits__contributor-cards">
                    <img  alt="contributor's" className="credits__contributor-img"onChange={handleImage} />
                    
                    <form onSubmit={(e) => e.preventDefault(e)}>
                        
                    <input className="credits__contributor-name" type="text" placeholder="Name" onChange={handleName}/>

                    <input className="credits__contributor-gitHub" type="text" placeholder="GitHub"onChange={handleGitHub}/>

                    <input className="credits__contributor-linkedIn" type="text"placeholder="LinkedIn"onChange={handleLinkedIn}/>

                    <input className="credits__contributor-twitter" type="text" placeholder="Twitter" onChange={handleTwitter}></input>

                   </form >
                    <div className="credits__contributor-icons"></div>
                    <button onClick={postContributor}>Save</button>
                  
                </div>
              
            </div>
            
        </>
    )
}