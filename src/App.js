import styled from 'styled-components'
import NavBar from './component/common/NavBar'
import { GlobalStyles } from './styles/GlobalStyles'
import Header from './component/common/Header'
import Gift from './pages/gift/Gift'

function App() {
    return (
        <>
            <GlobalStyles />
            <Container>
                <Header />
                <Gift />

                <NavBar />
            </Container>
        </>
    )
}

export default App

const Container = styled.div`
    width: 390px;
    height: 100vh;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
`
