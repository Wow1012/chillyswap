import { useProgress } from "@react-three/drei"
import styled from 'styled-components/macro'

const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  /* transform: translate(-50%, -50%); */
  color: white;
  font-size: 18px;
  background-color: black;
`

const PreLoader = () => {
  const { active, progress, errors, item, loaded, total } = useProgress()
  return (
    <LoaderWrapper>
      {progress.toFixed(2)} % loaded
    </LoaderWrapper>
  )
}

export default PreLoader;