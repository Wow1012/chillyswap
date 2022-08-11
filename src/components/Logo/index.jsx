import styled from 'styled-components/macro';

const Logo = styled.div`
  z-index: 20;

  a {
    display: inline-block;
    width: ${props => {
      return props.width
    }};
    height: ${props => {
      return props.height
    }};
    background: transparent;
    background-image: url(${props => {
      return props.imgurl
    }});
    background-size: cover;
    background-position: center;
  };
`

export default Logo;