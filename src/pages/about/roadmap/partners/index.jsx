import styled from 'styled-components/macro'
import Container from '../../../../components/Container'

const Heading = styled.h2`
  text-align: center;
  font-family: BadaBoom;
  font-weight: 400;
  font-size: 52px;
  line-height: 65px;
  color: #FFF;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 75px;
    line-height: 80px;
  }

  @media (min-width: 1024px) {
    font-size: 96px;
    line-height: 102px;
  }
`

const SectionWrapper = styled.div`
    padding-top: 120px;
    padding-bottom: 50px;

    @media (min-width: 768px) {
        padding-bottom: 90px;
    }
`

const Title = styled.div`
  margin-bottom: 18px;

  @media (min-width: 1024px) {
    margin-bottom: 40px;
  }
`

const Content = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;

    @media (min-width: 768px) {
        gap: 60px;
    }
`

const Item = styled.div`
    background: #FFF;
    width: 124px;
    height: 80px;
    border-radius: 10px;

    @media (min-width: 1024px) {
        width: 185px;
        height: 100px;
    }
`

const Partners = () => {
    return (
        <SectionWrapper>
            <Container>
                <Title>
                    <Heading>
                        PARTNERS
                    </Heading>
                </Title>
                <Content>
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </Content>
            </Container>
        </SectionWrapper>
    )
}

export default Partners;