import MainSection from "./main"
import RareSection from "./rare"
import BuySection from "./buy"
import Footer from '../footer'

import styled from "styled-components/macro"

const PageWrapper = styled.div`
	background-color: #000;
	color: #FFF;
	overflow: hidden;
`

const NFTPage = () => {
    return (
			<PageWrapper>
				<MainSection />
				<RareSection />
				<BuySection />
				<Footer />
			</PageWrapper>       
    )
}

export default NFTPage;