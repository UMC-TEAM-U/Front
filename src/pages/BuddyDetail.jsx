import { styled } from 'styled-components'
import ListBox from '../component/common/box/ListBox'
import TitleBar from '../component/home/TitleBar'
import UserBanner from '../component/home/UserBanner'
import { COLORS } from '../styles/theme'
import { useLocation } from 'react-router-dom'

const BuddyDetail = () => {
    const location = useLocation()
    const data = location.state.data

    // level별 등급 이름 부여
    switch (data.level) {
        case '1':
            data.levelName = '눈결정'
            break
        case '2':
            data.levelName = '눈송이'
            break
        case '3':
            data.levelName = '눈사람'
            break
        default:
            break
    }
    return (
        <Container>
            <TitleBar text={data.name} />
            <UserBanner userData={data} />
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
