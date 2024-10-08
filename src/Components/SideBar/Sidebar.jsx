/** @format */

import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

export const SideBar = () => {
  const [show, setShow] = React.useState(true);
  return (
    <>
      <Header show={show} className="header active">
        <User className="user">
          <img src="../images/boy.jpeg" alt="" />
          <h3>Brajesh Saxena</h3>
          <p>Senior Software Engineer</p>
        </User>

        <Navbar className="navbar">
          <Link className="link" hashSpy={true} to="home">
            HOME
          </Link>
          <Link className="link" hashSpy={true} to="about">
            ABOUT
          </Link>

          <Link className="link" hashSpy={true} to="resume">
            SKILLS
          </Link>
          <Link className="link" hashSpy={true} to="portfolio">
            PROJECTS
          </Link>
          <Link className="link" hashSpy={true} to="contact">
            CONTACT
          </Link>
        </Navbar>
      </Header>
      <MenuBtn
        onClick={() => setShow(!show)}
        id="menu-btn"
        className="fas fa-bars"
      ></MenuBtn>
    </>
  );
};

const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background: var(--bg-color);
  width: 30rem;
  border-right: var(--border);
  height: 100%;
  padding: 3rem;
  text-align: center;
  @media (max-width: 991px) {
    display: ${(props) => (props.show ? "none" : "block")};
  }
`;

const User = styled.div`
  & img {
    margin: 1rem 0;
    border: 1rem solid transparent;
    border-radius: 50%;
    height: 18rem;
    width: 18rem;
    box-shadow: var(--box-shadow);
  }
  & h3 {
    color: var(--black);
    font-size: 2.5rem;
  }
  & p {
    color: var(--green);
    font-size: 1.5rem;
  }
`;

const Navbar = styled.div`
  padding-top: 1rem;
  & .link {
    display: block;
    margin: 1.5rem 0;
    padding: 0.7rem;
    border-radius: 5rem;
    font-size: 2rem;
    box-shadow: var(--box-shadow);
    color: var(--black);
    cursor: pointer;
  }
  & .link:hover {
    box-shadow: var(--box-shadow-inset);
    color: green;
  }
`;

const MenuBtn = styled.div`
  position: fixed;
  top: 1.5rem;
  left: 2rem;
  z-index: 1000;
  height: 5rem;
  width: 5rem;
  line-height: 5rem;
  border-radius: 50%;
  font-size: 2rem;
  cursor: pointer;
  box-shadow: var(--box-shadow);
  text-align: center;
  color: var(--black);
  background: var(--bg-color);
  display: none;
  &:hover {
    color: var(--green);
    box-shadow: var(--box-shadow-inset);
  }
  @media (max-width: 991px) {
    #menu-btn {
      display: initial;
    }
  }
`;
