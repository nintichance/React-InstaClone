import React, { Component } from 'react';
import { FaInstagram, FaUser, FaHeartO, FaCompass, FaSearch } from 'react-icons/lib/fa';
import styled from 'styled-components';

const Navigation = styled.div`
  display: flex;
  box-shadow: 0px 5px 0px 0px #CE3323;
  align-items: center;
  justify-content: space-between;
  border: .25px solid gray;
`
const Icons = styled.div `
  display: flex;
  justify-content: space-around;
  width: 25%;
`

const Search = styled.div `

  border-radius: 4px;
`
const Input = styled.input `
  border-radius: 4px;
  height: 30px;
  width: 250px;
  text-align: center;
`
const Header = styled.h1`
  font-family: 'Oleo Script',cursive;
`
class Navbar extends Component{
  render(){
    return (
      <Navigation>
        <Header><FaInstagram /> | Instaclone</Header>
        <Search>
          <FaSearch/><Input type="text" placeholder="Search" padding={5}/>
        </Search>
        <Icons>
          <FaCompass size={28}/>
          <FaHeartO size={28}/>
          <FaUser size={28}/>
        </Icons>
      </Navigation>
    );
  }
}

export default Navbar

