import React, { useState } from "react";
import Link from "next/link";
import Topbar from "./Topbar.js";
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Collapse from 'react-bootstrap/Collapse';
import MenuList from '../../../lib/json-files/HeaderMenu.json'

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Topbar/>
      <header className="header">
        <div className="header-top">
          <Container>
            <Row className="align-items-center">
              <Col xs={6} lg={2}>
                <div className="header-logo">
                  <Link href="/">
                    <a>
                    <Image
                      src="/img/hoverpro-white-logo.png"
                      alt="Logo"
                      objectFit="contain"
                      width={153}
                      height={70}
                    />
                    </a>
                  </Link>
                </div>
              </Col>
              <Col xs={3} lg={8}>
                <div className="header-menu">
                  <Navbar expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                      <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                          <ul className="main-menu">
                            {MenuList.map((item, index) => (
                              <li key={index}>
                                <Nav.Link href={`${item.menulink}`} className={item.hassubmenu? "has-submenu" : null}>{item.menuname}</Nav.Link>
                                
                              </li>
                              )
                            )
                            }
                          </ul>
                        </Nav>
                      </Navbar.Collapse>
                    </Navbar>
                </div>
              </Col>
              <Col xs={3} lg={2}>
                <div className="d-flex justify-content-end align-items-center">                  
                  <div className="header-right">
                    <ul>
                      <li className="header-search-btn">
                        <span onClick={() => setOpen(!open)}
                          aria-controls="header-search-box"
                          aria-expanded={open}
                          ><Image src="/img/search-icon.png" alt="search" width={25} height={25} /></span>
                      </li>
                      <li className="header-cart">
                        <Link href="/cart">
                          <a>
                            <span className="header-cart-icon">
                              <strong>0</strong>
                            </span>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <Collapse in={open}>
                    <div className="header-search-box" id="header-search-box">
                      <form name="search" method="get" action="/">
                        <input type="text" name="s" id="headerserach" placeholder="I am looking for..." title="Search products" autoComplete="off" />
                        <input className="search-btn" type="submit" title="Search products" />
                      </form>
                    </div>
                  </Collapse>
                </div>
              </Col>
            </Row>
          </Container>
        </div>        
      </header>
    </>
  );
}

export default Header;
