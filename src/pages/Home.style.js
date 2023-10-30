import styled from "styled-components";
import {Link} from "react-router-dom";

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  
  margin: 20px auto;
  button {
    outline: none;
    background: none;
    border: none;
  }
`;

export const Tab = styled(Link)`
  border: 1px solid #000;
  border-radius: 5px;
  padding: 5px;
  margin: 0 10px 0 0;
  background: ${p => p.isActive ? '#000' : '#fff'};
  color: ${p => p.isActive ? '#fff' : '#000'};
  display: inline-block;
  text-decoration: none;
`;

export const Main = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 0;
`;