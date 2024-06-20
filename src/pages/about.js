import Layout from "@/layout/Layout";
import PageBanner from "@/layout/PageBanner";

const About = () => {
  return (
    <Layout pageName={"About"}>
      <PageBanner pageName={"About"} />
      <div className="neoh_fn_aboutpage">
        {/* Information Section */}
        <section id="information">
          <div className="container">
            {/* About Item #1 */}
            <div className="neoh_fn_about_item">
              <div className="img_item">
                {/* <img src="img/about/1.jpg" alt="" /> */}
                <img src="img/shibpepe.png" alt="" />
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
                    On a charming farm, an old farmer lived with two inseparable
                    companions: a clever frog named Pepe and a lively Shiba Inu.
                    Their bond was legendary, built on countless adventures. But
                    as time passed, the farmer's son grew particularly fond of
                    Shiba Inu, showering him with affection and treats. Pepe,
                    feeling overlooked, was consumed by jealousy.
                  </p>
                  <p>
                    In jealousy, Pepe decided to eliminate Shiba Inu and wear
                    his skin as a disguise, hoping to finally win the farmer's
                    son's love and attention. Now it's up to us to give Pepe
                    love and attention, or he might wear our skin next!
                  </p>
                </div>
                <div className="buttons">
                  <a
                    href="https://x.com/shibp3p3"
                    target="_blank"
                    rel="noreferrer"
                    className="neoh_fn_button"
                  >
                    <span className="icon">
                      <img
                        src="svg/square-x-twitter.svg"
                        alt=""
                        className="fn__svg"
                      />
                    </span>
                    <span className="text">Twitter</span>
                  </a>
                  <a
                    href="https://web.telegram.org/"
                    target="_blank"
                    rel="noreferrer"
                    className="neoh_fn_button"
                  >
                    <span className="icon">
                      <img src="svg/telegram.svg" alt="" className="fn__svg" />
                    </span>
                    <span className="text">Telegram</span>
                  </a>
                </div>
              </div>
            </div>
            {/* !About Item #1 */}
            {/* Guarantee List */}
            {/* <div className="neoh_fn_gualist">
              <ul>
                <li>
                  <div className="item">
                    <span className="line" />
                    <img
                      src="svg/search-engine.svg"
                      alt=""
                      className="fn__svg"
                    />
                    <h3 className="fn_title">Anti-Rug</h3>
                    <p className="fn_desc fn_animated_text">Liquidity Burnt</p>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <span className="line" />
                    <img src="svg/management.svg" alt="" className="fn__svg" />
                    <h3 className="fn_title">Experienced Team</h3>
                    <p className="fn_desc fn_animated_text">
                      Team has been part of multiple successful projects
                    </p>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <span className="line" />
                    <img src="svg/padlock.svg" alt="" className="fn__svg" />
                    <h3 className="fn_title">Security Guarantee</h3>
                    <p className="fn_desc fn_animated_text">
                      Based on the simplest ERC20 OpenZeppelin contract. There
                      are no mint or ownership functions
                    </p>
                  </div>
                </li>
              </ul>
            </div> */}
            {/* !Guarantee List */}
            {/* About Item #2 */}
            <div className="neoh_fn_about_item reverse">
              <div className="img_item">
                <img src="img/tokenomics.png" alt="" />
              </div>
              <div className="content_item">
                <div className="neoh_fn_title" data-align="left">
                  <h3 className="fn_title">Tokenomics</h3>
                  <div className="line">
                    <span />
                  </div>
                </div>
                <div className="desc">
                  <p>10% will be allocated to the team</p>
                  <p>10% set aside for airdrops</p>
                  <p>The remaining 80% will in LP</p>
                </div>
              </div>
            </div>
            {/* !About Item #2 */}
          </div>
        </section>
        {/* !Information Section */}
      </div>
    </Layout>
  );
};
export default About;
