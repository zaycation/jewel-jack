//import { Link } from "react-router-dom";
import Axios from "axios";
import React, {useEffect, usePrevious, useState} from "react";
import ContributorsList from "./ContributorsList";


export default function Contributors(props) {
    const [contributorsData, setContributorsData] = useState();

    const getContributorsData = (e) => {
        Axios.get(`/api/contributors/`)
            .then(response => {
                setContributorsData(response.data)
            })
            .catch(console.error)
    }

    useEffect(() => {
        getContributorsData();
    }, [])

    return (
        <section className="credits">
            <h2>Contributors</h2>
            <div className="d-flex flex-wrap">
                {contributorsData && contributorsData.map(contributorsData => {
                    return (
                        <ContributorsList
                            key={contributorsData.name}
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
