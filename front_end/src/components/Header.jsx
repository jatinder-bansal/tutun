import React from "react";
import styled from "styled-components";
import {Link } from "react-router-dom";

const Header = () => { 
  return (
    <HeaderCont>
      <section class="home" id="home">
        <div class="home-content">
          <div class="text">
            <div class="text-one">Find Your Perfect Tutor</div>
            <div class="text-two">Tutun is the Best Platfrom to find your prefect Tutor Online</div>
          </div>
          {/* <div class="button">
            <Link to="/login"><button class="button3" onclick="">Find a Tutor</button></Link>
            <Link to="/login"><button class="button3" onclick="">Become a Tutor</button></Link>
          </div> */}

          <div className="headerdiv" > 
            <img className="headerimage" src={require('../image/header-image.png')}/>
          </div>
          
          
        </div>

      </section>
    </HeaderCont>
  );
};

const HeaderCont = styled.div`

    // background: url("header.jpg") no-repeat;

  .home {
    height: 70vh;
    width: 100%;
    // background: url("header.jpg") no-repeat;
    }
.home .home-content {
    display: grid;
    grid-template-columns: 50% 50%;
    align-items: center;
    // width: 90%;
    height: 100%;
    margin: auto;
    // background-color: aquamarine;
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
  }
  .home .text-one {
    padding: 10px 40px;
    font-size: 55px;
    font-weight: 700;
    text-align: center;
    color: var(--black-color);
  }
  .home .text-two {
    color: var(--black-color);
    font-size: 20px;
    // margin: 20px;
    padding: 10px 30px;
    text-align: center;
    font-weight: 600;
    // margin-left: -3px;
  }
  .home .text-three {
    font-size: 40px;
    margin: 5px 0;
    color: var(--primary-color);
  }
  .home .text-four {
    font-size: 23px;
    margin: 5px 0;
    color: var(--black-color);

    }

    // .headerdiv{
    //   display: flex;
    //   align-items: center;
    //   justify-content: center;
    // }


    .headerimage{
      height: 300px;
    position: relative;
    left: -15%;
    z-index: -1;
    }

    .button{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    }

    .button3 {
        color: white;
        background: #ffaa00;
        padding: 20px;
        border-radius: 10px;
        text-decoration: none;
        transition: all 0.4s;
        margin-bottom: 20px;
      }
      
      /* Styling for the third button when hovering over it */
      .button3:hover {
        color: white;
        background: purple;
        border-radius: 50px;
        transition: all 0.4s;
        box-shadow: 0 0 1px 5px rgba(221, 159, 222, 0.39), 0 0 1px 10px rgba(138, 59, 88, 0.1);
      }
      
  
`;

export default Header;
