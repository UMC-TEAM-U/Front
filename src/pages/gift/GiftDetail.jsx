import styled from 'styled-components'
import ListBox from '../../component/common/box/ListBox'
import DarkButton from '../../component/common/DarkButton'
import TitleBar from '../../component/home/TitleBar'
import UserBanner from '../../component/home/UserBanner'
import { COLORS } from '../../styles/theme'
const GiftDetail = () => {
    return (
        <Container>
            <TitleBar text="바나나먹는곰돌이 님" />
            <UserBanner />
            <DarkButton text="생일 선물 추가하기" />
            <DarkButton text="경조사 추가하기" />
            <ListBox type="등급 일기" />
        </Container>
    )
}

export default GiftDetail

const Container = styled.div`
    padding-top: 40px;
    background-color: ${COLORS.black};
    width: 100%;
    height: 100vh;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
`
