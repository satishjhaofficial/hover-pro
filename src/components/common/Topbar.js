import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import Container from 'react-bootstrap/Container';
import CloseButton from 'react-bootstrap/CloseButton';

function Topbar() {
  
  return (
    <>
      <div className="topbar">      
        <Container>
          <div className="topbar-box">
            <p>Go Prepaid. Get 1000 Off.</p>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Topbar;
