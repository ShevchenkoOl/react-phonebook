import styled from "styled-components";

export const Label = styled.label`
 display: block;
  margin-top:30px;
  margin-bottom: 20px;
  text-align: center;
  font-weight: 500;
  font-size: 20px;

`;
export const TitleFilter = styled.p`
 margin:0;
padding: 2rem;
text-align: center;
color: #000;
font-weight: bold;
font-size: 24px;
`;

export const Input = styled.input`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  width: 50%;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;

  &:focus {
   outline-color: #2196F3;
    }
`;
