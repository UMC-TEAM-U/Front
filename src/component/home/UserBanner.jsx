import styled from 'styled-components'
import { COLORS } from '../../styles/theme'
import GradeChangeIcon from '../../assets/icon/grade-change.svg'
import GiftIcon from '../../assets/icon/gift.svg'
import { useState } from 'react'
import LevelModal from '../common/modal/LevelModal'
import GiftModal from '../common/modal/GiftModal'
import Grade1 from '../../assets/img/Grade1.png'
import Grade2 from '../../assets/img/Grade2.png'
import Grade3 from '../../assets/img/Grade3.png'

const UserBanner = () => {
    const [levelModal, setLevelModal] = useState(false)
    const [giftModal, setGiftModal] = useState(false)
    const level = '1'
    return (
        <Container>
            {level === '1' && <IconBox src={Grade1} />}
            {level === '2' && <IconBox src={Grade2} />}
            {level === '3' && <IconBox src={Grade3} />}
            <Content>
                <Title>
                    바나나먹는곰돌이 님의 등급은{' '}
                    <span style={{ fontWeight: '700' }}>눈송이</span>
                </Title>
                <Actions>
                    <Button onClick={() => setLevelModal(true)}>
                        등급 변경 <img src={GradeChangeIcon} />
                    </Button>
                    <Button onClick={() => setGiftModal(true)}>
                        추천 선물 <img src={GiftIcon} />
                    </Button>
                </Actions>
                {levelModal && <LevelModal setLevelModal={setLevelModal} />}
                {giftModal && <GiftModal setGiftModal={setGiftModal} />}
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

const IconBox = styled.img`
    width: 48px;
    height: 48px;
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
`

const Button = styled.button`
    display: flex;
    align-items: center;
    gap: 6px;
    background-color: ${COLORS.darkgray};
    color: ${COLORS.gray};
    border: none;
    cursor: pointer;

    &:hover {
        color: ${COLORS.lightgray};

        img {
            filter: brightness(1.4);
        }
    }
`
