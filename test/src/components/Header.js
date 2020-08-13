import React from "react";
import logo from "../images/logo.png";
import styled from "styled-components";

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  margin: 0 auto;
  max-width: 1080px;
  align-items: center;
`;

const Logo = styled.div`
  width: 150px;
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 300px;
  font-size: 17px;
  list-style: none;
  font-weight: 500;
`;

class Header extends React.Component {
  render() {
    const menus = ["About", "Product", "Class", "Contact"];
    const menuList = menus.map((menu, index) => <li key={index}>{menu}</li>);
    return (
      <Head>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
        <Menu>{menuList}</Menu>
      </Head>
    );
  }
}

export default Header;
