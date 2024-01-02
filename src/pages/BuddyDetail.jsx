import { styled } from 'styled-components'
import ListBox from '../component/common/box/ListBox'
import TitleBar from '../component/home/TitleBar'
import UserBanner from '../component/home/UserBanner'
import { COLORS } from '../styles/theme'

const BuddyDetail = () => {
    return (
        <Container>
            <TitleBar text="바나나먹는곰돌이 님" />
            <UserBanner />
            <ListBox type="등급 일기" />
        </Container>
    )
}

export default BuddyDetail

const Container = styled.div`
    padding-top: 40px;
    background-color: ${COLORS.black};
    width: 100%;
    height: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
`
