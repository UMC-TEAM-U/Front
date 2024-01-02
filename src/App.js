import styled from 'styled-components'
import NavBar from './component/common/NavBar'
import { GlobalStyles } from './styles/GlobalStyles'
import Header from './component/common/Header'
import Gift from './pages/gift/Gift'
import GiftDetail from './pages/gift/GiftDetail'
// import ProfileSetting from './pages/ProfileSetting'
import Signup from './pages/Signup'

function App() {
    return (
        <>
            <GlobalStyles />
            <Container>
                <Signup />
                {/* <Header />
                <GiftDetail />
                <Gift />
                <ProfileSetting />
                <NavBar /> */}
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
