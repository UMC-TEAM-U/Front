import styled from 'styled-components'
import { COLORS } from '../../styles/theme'
import { ReactComponent as GradeChangeIcon } from '../../assets/icon/grade-change.svg'
import { ReactComponent as GiftIcon } from '../../assets/icon/gift.svg'

const UserBanner = () => {
    return (
        <Container>
            <IconBox />
            <Content>
                <Title>
                    바나나먹는곰돌이 님의 등급은{' '}
                    <span style={{ fontWeight: '700' }}>눈송이</span>
                </Title>
                <Actions>
                    <div>
                        등급 변경 <GradeChangeIcon />
                    </div>
                    <div>
                        추천 선물 <GiftIcon />
                    </div>
                </Actions>
            </Content>
        </Container>
    )
}

export default UserBanner

const Container = styled.div`
    background-color: ${COLORS.darkgray};
    width: 316px;
    height: 48px;
    border-radius: 12px;
    padding: 31px 20px;
    display: flex;
    gap: 14px;
`

const IconBox = styled.div`
    width: 48px;
    height: 48px;
    background-color: ${COLORS.pink};
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Title = styled.div`
    color: ${COLORS.white};
    font-size: 14px;
`

const Actions = styled.div`
    color: ${COLORS.gray};
    font-size: 14px;
    display: flex;
    gap: 22px;
    > div {
        display: flex;
        gap: 6px;
    }
`
