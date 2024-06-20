import Link from "next/link";
const AboutComponent = () => {
  return (
    <section id="about">
      <div className="container">
        {/* About Item #1 */}
        <div className="neoh_fn_about_item">
          <div className="img_item">
            <img src="img/pepekill2.jpg" alt="" />
            {/* <img src="img/about/1.jpg" alt="" /> */}
          </div>
          <div className="content_item">
            <div className="neoh_fn_title" data-align="left">
              <h3 className="fn_title">The Story of SHIBPEPE</h3>
              <div className="line">
                <span />
              </div>
            </div>
            <div className="desc">
              <p>
                Once upon a time, on a sprawling farm, lived an old farmer with
                two beloved pets: a clever frog named Pepe and a spirited Shiba
                Inu. From the moment they were young, Pepe and Shiba Inu were
                inseparable, sharing countless adventures and forging an
                unbreakable bond.
              </p>
              <p>
                However, as time went on, the farmer's son grew particularly
                fond of Shiba Inu. He would shower Shiba Inu with affection,
                treats, and endless attention, while Pepe often found himself
                overlooked and yearning for the same love.
              </p>
            </div>
            {/* <div className="buttons">
              <a
                href="https://opensea.io/"
                target="_blank"
                rel="noreferrer"
                className="neoh_fn_button"
              >
                <span className="icon">
                  <img src="svg/opensea.svg" alt="" className="fn__svg" />
                </span>
                <span className="text">OpenSea</span>
              </a>
              <a
                href="https://discord.com/"
                target="_blank"
                rel="noreferrer"
                className="neoh_fn_button"
              >
                <span className="icon">
                  <img src="svg/discord.svg" alt="" className="fn__svg" />
                </span>
                <span className="text">Discord</span>
              </a>
            </div> */}
          </div>
        </div>
        {/* !About Item #1 */}
        {/* About Item #2 */}
        <div className="neoh_fn_about_item reverse">
          <div className="img_item">
            <img src="img/shibpepe.png" alt="" />
          </div>
          <div className="content_item">
            <div className="neoh_fn_title" data-align="left">
              <h3 className="fn_title">To be Continued...</h3>
              <div className="line">
                <span />
              </div>
            </div>
            <div className="desc">
              <p>
                Jealousy began to fester in Pepe's heart, and he couldn’t help
                but feel a growing resentment toward his friend. The more the
                farmer's son doted on Shiba Inu, the deeper Pepe's envy grew,
                until it consumed him.
              </p>
              <p>
                One fateful day, unable to bear the neglect any longer, Pepe's
                jealousy reached a breaking point. In a desperate and tragic
                act, Pepe decided to eliminate the object of his envy. He
                schemed to kill Shiba Inu and wear his skin as a disguise,
                hoping that the farmer's son would finally bestow upon him the
                love and attention he craved.
              </p>
            </div>
            <div className="buttons">
              <Link legacyBehavior href="/about">
                <a className="neoh_fn_button only_text">
                  <span className="text">More About US</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
        {/* !About Item #2 */}
      </div>
    </section>
  );
};
export default AboutComponent;
