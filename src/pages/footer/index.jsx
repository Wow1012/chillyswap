import Flex from '../../components/Flex';
import styled from 'styled-components/macro';
import Container from '../../components/Container';

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

const Link = styled.div`
  margin-bottom: 10px;

  @media (min-width: 768px) {
    min-width: 116px;
    width: auto;
  }
`

const Text = styled.span`
  font-family: 'Work Sans', sans-serif;
  font-weight: ${props => props.title ? '600' : '400'};
  font-size: ${props => props.title ? '12.5px' : '14.5px'};
  line-height: 15px;
  color: ${props => props.title ? '#6B6B6B' : '#f0f0f0'};

  @media (min-width: 768px) {
    font-size: ${props => props.title ? '16px' : '17.5px'};
    line-height: 21px;
  }
`

const InnerWrapper = styled.div`
  padding: 40px 20px;

  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    padding: 70px 20px;
  }
`

const LogoFlex = styled(Flex)`
  @media (min-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }  
`

const LinkFlex = styled(Flex)`
  @media (min-width: 768px) {
    gap: 40px;
  }  
`

const FooterWrapper = styled.div`
  background: #000;
`

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <InnerWrapper>
          <LogoFlex justifyBetween alignCenter>
            <Logo>
              <a imgurl='/images/logo.png'></a>
            </Logo>
            <Flex column>
              <Link>
                <Text>Privacy Policy</Text>
              </Link>
              <Link>
                <Text>Terms of Services</Text>
              </Link>
            </Flex>
          </LogoFlex>
          <LinkFlex justifyBetween>
            <Flex column>
              <Link>
                <Text title="true">Learn</Text>
              </Link>
              <Link>
                <Text>Create</Text>
              </Link>
              <Link>
                <Text>Collect</Text>
              </Link>
              <Link>
                <Text>Sell</Text>
              </Link>
            </Flex>
            <Flex column>
              <Link>
                <Text title="true">Company</Text>
              </Link>
              <Link>
                <Text>Careers</Text>
              </Link>
              <Link>
                <Text>Help&nbsp;Center</Text>
              </Link>
              <Link>
                <Text>Subscribe</Text>
              </Link>
            </Flex>
            <Flex column>
              <Link>
                <Text title="true">Connect</Text>
              </Link>
              <Link>
                <Text>Twitter</Text>
              </Link>
              <Link>
                <Text>Instagram</Text>
              </Link>
              <Link>
                <Text>Youtube</Text>
              </Link>
            </Flex>
          </LinkFlex>
        </InnerWrapper>
      </Container>
    </FooterWrapper>
  )
}

export default Footer;