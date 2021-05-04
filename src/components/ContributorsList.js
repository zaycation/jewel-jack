import twitterIcon from "../assets/twitter.svg";
import linkedInIcon from "../assets/linkedIn.svg";
import gitHubIcon from "../assets/github.svg";

export default function ContributorsList(props) {
  let { name, image, gitHub, linkedIn, twitter } = props;

  return (
    <section className="credits">
      <div className="credits__contributor-cards">
        <img alt="contributor's" className="credits__contributor-img" src={image}/>
       
        <ul className="credits__contributor-list">
          <li className="credits__contributor-name">{name}</li>
          <div className="credits__contributor-iconsWrapper">
          <li className="">
            <a href={gitHub}>
               <img alt="git hub icon" className="socialIcons"src={gitHubIcon}/>
               </a>
          </li>
          <li className="credits__contributor-linkedIn">
            <a href={linkedIn}>
              <img alt="linked in icon" className="socialIcons"src={linkedInIcon}/></a>
          </li>
          <li className="credits__contributor-twitter">
            <a href={twitter}>
               <img alt ="twitter icon"className="socialIcons"src={twitterIcon} />
            </a>
          </li>
          </div>
        </ul>
      </div>
    </section>
  );
}
