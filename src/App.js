import {
    BrowserRouter as Router,
    Route,
    Routes,
    useLocation,
    Navigate,
} from 'react-router-dom'
import styled from 'styled-components'
import { GlobalStyles } from './styles/GlobalStyles'

import Header from './component/common/Header'

import NavBar from './component/common/NavBar'

import Gift from './pages/gift/Gift'
import GiftDetail from './pages/gift/GiftDetail'
import Login from './pages/Login'
import BuddyDetail from './pages/BuddyDetail'
import Home from './pages/Home'
import ProfileSetting from './pages/ProfileSetting'
import Setting from './pages/Setting'
import Signup from './pages/Signup'


function MainApp() {
    const location = useLocation()
    const hideForPage = ['/signup', '/login']

    return (
        <Container>
            {!hideForPage.includes(location.pathname) && <Header />}
            <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/gift-detail" element={<GiftDetail />} />
                <Route path="/gift" element={<Gift />} />
                <Route path="/profile-setting" element={<ProfileSetting />} />
                <Route path="/setting" element={<Setting />} />
                <Route path="/buddy-detail" element={<BuddyDetail />} />
                <Route path="/home" element={<Home />} />
                <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
            {!hideForPage.includes(location.pathname) && <NavBar />}
        </Container>
    )
}

function App() {
    return (
        <Router>
            <GlobalStyles />

            <MainApp />
        </Router>

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
