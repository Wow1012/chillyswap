import Container from "../../components/Container";
import Flex from "../../components/Flex";
import styled from 'styled-components/macro';
import Button from "../../components/Button";
import MenuGroup from "../../components/MenuGroup";

const HeaderWrapper = styled.div`
  position: absolute;
  width: 100%;
  opacity: 0;
`
const Logo = styled.div`
  z-index: 30;
  a {
    display: inline-block;
    width: 135px;
    height: 69px;
    background: transparent;
    background-image: url("/images/logo.png");
    background-size: contain;
    background-repeat: no-repeat;
  }
`


const EARNBTN = styled(Button)`
  @media (max-width: 767px) {
    display: none;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  z-index: 10;
`

const Header = () => {
  return (
    <HeaderWrapper className='header--wrapper'>
      <Container>
        <Flex alignCenter justifyBetween>
          <Logo>
            <a imgurl='/images/logo.png'></a>
          </Logo>

          <ButtonGroup>
            <EARNBTN>PLAY TO EARN</EARNBTN>
            <MenuGroup />
          </ButtonGroup>
        </Flex>
      </Container>
    </HeaderWrapper>
  )
}

export default Header;