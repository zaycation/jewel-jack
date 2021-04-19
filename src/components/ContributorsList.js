// import twitterIcon from "../assets/twitter.png";
// import { Link } from "react-router-dom";
export default function ContributorsList(props) {
  let { name, image, gitHub, linkedIn, twitter } = props;

  return (
    <section className="credits">
      <div className="credits__contributor-cards">
        <img alt="contributor's" className="credits__contributor-img" />
        {image}
        <ul>
          <li className="credits__contributor-name">{name}</li>

          <li className="credits__contributor-gitHub">
            <a href={gitHub}>
               {/* <img src={twitterIcon}/> */}
               </a>
          </li>
          <li className="credits__contributor-linkedIn">
            <a href={linkedIn}>{/* <img src={twitterIcon}/> */}</a>
          </li>
          <li className="credits__contributor-twitter">
            <a href={twitter}>
               {/* <img src={twitterIcon}/> */}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
