import styled from 'styled-components'
import NavBar from './component/common/NavBar'
import { GlobalStyles } from './styles/GlobalStyles'
import Header from './component/common/Header'
import Button from './component/common/Button'
import Input from './component/common/Input'
import { COLORS } from './styles/theme'

function App() {
    return (
        <>
            <GlobalStyles />
            <Container>
                <Header />
                <div style={{ position: 'relative', top: '200px' }}>
                    <Button text="생일" color="gray" />
                    <Button text="경조사" />
                    <Input
                        placeholder="abcdef@gmail.com"
                        backgroundColor={COLORS.lightgray}
                        color={COLORS.gray}
                    />
                    <Input
                        placeholder="버디의 이름을 입력하세요"
                        backgroundColor={COLORS.white}
                        color={COLORS.gray}
                    />
                </div>
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
`
