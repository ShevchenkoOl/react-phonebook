import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #000;

  
  &:not(:last-child){
   margin-right: 12px;
  }
  
  &.active {
    color: #2196F3;
  }
`;
