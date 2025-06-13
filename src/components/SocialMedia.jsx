import React from "react";

const SocialMedia = () => {
  return (
    <div className="grid grid-cols-2 gap-30 mt-5 ">
      <div className="md:order-last md:flex md:justify-end laptop:pr-40">
        <div>
          <p className="mb-15">M:</p>
          <ul id="footer" className="footer-nav leading-loose">
            <li
              id="menu-item-52"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home active page_item page-item-2 current_page_item menu-item-52"
            >
              <a
                href="https://ochi.design/"
                className="footer-nav__link link link--underline is-active"
              >
                Home
              </a>
            </li>
            <li
              id="menu-item-51"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-51"
            >
              <a
                href="https://ochi.design/presentation-design-agency-services/"
                className="footer-nav__link link link--underline"
              >
                Services
              </a>
            </li>
            <li
              id="menu-item-48"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-48"
            >
              <a
                href="https://ochi.designclients-success-stories-presentation-design/"
                className="footer-nav__link link link--underline"
              >
                Our work
              </a>
            </li>
            <li
              id="menu-item-50"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-50"
            >
              <a
                href="https://ochi.design/ochi-team/"
                className="footer-nav__link link link--underline"
              >
                About us
              </a>
            </li>
            <li
              id="menu-item-49"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-49"
            >
              <a
                href="https://ochi.design/insights-presentation-design-agency/"
                className="footer-nav__link link link--underline"
              >
                Insights
              </a>
            </li>
            <li
              id="menu-item-47"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-47"
            >
              <a
                href="https://ochi.design/contact/"
                className="footer-nav__link link link--underline"
              >
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="md:col-span-2">
        <div>
          <p className="mb-15">S:</p>
          <ul className="social-list leading-loose social-list--default">
            <li className="social-list__item">
              <a
                className="social-list__link link link--underline"
                href="https://www.instagram.com/ochi_design/"
              >
                Instagram
              </a>
            </li>
            <li className="social-list__item">
              <a
                className="social-list__link link link--underline"
                href="https://www.behance.net/ochi_design"
              >
                Behance
              </a>
            </li>
            <li className="social-list__item">
              <a
                className="social-list__link link link--underline"
                href="https://www.facebook.com/OCHI-presentation-design-103605044779378/"
              >
                Facebook
              </a>
            </li>
            <li className="social-list__item">
              <a
                className="social-list__link link link--underline"
                href="https://www.linkedin.com/company/56403597"
              >
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid gap-30 col-span-2 md:col-span-1 mt-5">
        <div className="leading-loose">
          <p className="mb-15">L:</p>
          <address className="group not-italic m-0">
            <span className="link link--underline">202-1965 W 4th Ave</span>
            <br />
            <span className="link link--underline">Vancouver, Canada</span>
            <br />
            <span className="link link--underline"> </span>
            <br />
            <span className="link link--underline">30 Chukarina St</span>
            <br />
            <span className="link link--underline">Lviv, Ukraine</span>
            <br />
          </address>
        </div>
        <div className="leading-loose mt-5">
          <p className="mb-15">E:</p>
          <a className="link link--underline" href="mailto:hello@ochi.design">
            hello@ochi.design
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
