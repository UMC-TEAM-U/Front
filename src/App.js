import styled from 'styled-components'
import NavBar from './component/common/NavBar'
import { GlobalStyles } from './styles/GlobalStyles'
import Header from './component/common/Header'
import GiftDetail from './pages/gift/GiftDetail'
import Home from './pages/Home'


function App() {
    return (
        <>
            <GlobalStyles />
            <Container>
                <Header />
                <Home />
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
