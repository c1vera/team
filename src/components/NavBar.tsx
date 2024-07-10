import styled from "styled-components";
import { Link } from "react-router-dom";
const NavBarContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 1rem;
  background-color: #ad8aff;
  gap: 2rem;
`;

const LinkButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 30px;
`;

export const NavBar = () => {
  return (
    <NavBarContainer>
      <LinkButton><Link to={'/'}>라인 정하기</Link></LinkButton>
      <LinkButton><Link to={'/roster'}>전체 로스터 확인하기</Link></LinkButton>
    </NavBarContainer>
  );
};
