import {FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";

export default function ContributorsList({name, image, gitHub, linkedIn, twitter}) {
    return (
        <div className="contributor">
            <div className="card text-center">
                <img alt="contributor's" className="rounded-circle mx-auto" src={image} />

                <p>{name}</p>
                <div className="socials">
                    {gitHub && <a href={gitHub}>
                        <FaGithub/>
                    </a>}
                    {twitter && <a href={twitter}>
                        <FaTwitter/>
                    </a>}
                    {linkedIn && <a href={linkedIn}>
                        <FaLinkedin/>
                    </a>}
                </div>
            </div>
        </div>
    );
}
