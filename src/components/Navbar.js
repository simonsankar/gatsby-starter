import React from "react";
import { Link } from "gatsby";
import { globalHistory } from "@reach/router";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  };
  render() {
    const { pathname } = globalHistory.location;
    console.log(pathname);
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <span className="logo">A.L.L.</span>
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered"></div>
            <div className="navbar-end has-text-centered">
              <Link
                className={
                  pathname === "/about"
                    ? "navbar-item navbar-item-active"
                    : "navbar-item"
                }
                to="/about"
              >
                About
              </Link>
              <Link
                className={
                  pathname === "/services"
                    ? "navbar-item navbar-item-active"
                    : "navbar-item"
                }
                to="/services"
              >
                Services
              </Link>
              <Link
                className={
                  pathname === "/resources"
                    ? "navbar-item navbar-item-active"
                    : "navbar-item"
                }
                to="/resources"
              >
                Resources
              </Link>
              <Link
                className={
                  pathname === "/affiliates"
                    ? "navbar-item navbar-item-active"
                    : "navbar-item"
                }
                to="/affiliates"
              >
                Affiliates
              </Link>
              <Link
                className={
                  pathname === "/gallery"
                    ? "navbar-item navbar-item-active"
                    : "navbar-item"
                }
                to="/gallery"
              >
                Gallery
              </Link>
              <Link
                className={
                  pathname === "/products"
                    ? "navbar-item navbar-item-active"
                    : "navbar-item"
                }
                to="/products"
              >
                Products
              </Link>
              <Link
                className={
                  pathname === "/blog"
                    ? "navbar-item navbar-item-active"
                    : "navbar-item"
                }
                to="/blog"
              >
                Blog
              </Link>
              <Link
                className={
                  pathname === "/contact"
                    ? "navbar-item navbar-item-active"
                    : "navbar-item"
                }
                to="/contact"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
