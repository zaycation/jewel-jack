//import { Link } from "react-router-dom";
import Axios from "axios";
import React, { useState, useEffect, usePrevious} from "react";
import ContributorsList from "./ContributorsList";



export default function Contributors(props) {

    const [contributorsData, setContributorsData] = useState();



    const getContributorsData = (e) => {
       Axios.get(`http://localhost:5000/contributors/`)
            .then((response) => {
                setContributorsData(response.data)
               console.log('GETresponse',response)

            })

            .catch((error) => console.log(error))
    }
    useEffect(()=>{
        getContributorsData();

    },[])

    
    return (
    
            <section className="credits">
                <h2 className="credits__heading">Contributors</h2>
                <div className="credits__contributors-wrapper">
                    {contributorsData && contributorsData.map((contributorsData) => {
                        return (
                            <ContributorsList
                                key={contributorsData.id}
                                id={contributorsData.id}
                                name={contributorsData.name}
                                image={contributorsData.image}
                                linkedIn={contributorsData.linkedIn}
                                gitHub={contributorsData.gitHub}
                                twitter={contributorsData.twitter}
                            />
                            
                        )
                    })}
  
                
                </div>
              {usePrevious}
            </section>


       
    )

}
