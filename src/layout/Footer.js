import Link from "next/link";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="neoh_fn_footer">
        {/* Footer Top */}
        <div className="footer_top">
          <div className="container">
            <div className="ft_in">
              <div className="desc">
                <div className="img">
                  <img src="img/shibpepe.png" alt="" height="100" width="100" />
                </div>
                <h3 className="fn_title">Buy SHIBPEPE now!</h3>
                <p className="fn_desc">CA:</p>
              </div>
            </div>
          </div>
        </div>
        {/* !Footer Top */}
        {/* Footer Bottom */}
        <div className="footer_bottom">
          <div className="container">
            <div className="fb_in">
              <div className="fb_left">
                <p>Copyright {new Date().getFullYear()} - By SHIBPEPE</p>
              </div>
              <div className="fb_right">
                <ul>
                  <li>
                    {/* <Link legacyBehavior href="/roadmap">
                      RoadMap
                    </Link> */}
                  </li>
                  <li>{/* <a href="#">Cookies</a> */}</li>
                  <li>{/* <a href="#">Terms &amp; Conditions</a> */}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* !Footer Bottom */}
      </div>
    </footer>
  );
};
export default Footer;
