import React from 'react'
import styled from 'styled-components'

function Detail() {
    return (
        <Container>
            <Background>
                <img src='/images/login-background.jpg' />
            </Background>
            <ImageTitile>
                <img src='/images/viewers-pixar.png' />
            </ImageTitile>

            <Controls>
                <PlayButton>
                    <img src='/images/play-icon-black.png' />
                    <span>Play</span>
                </PlayButton>
                <TrailerButton>
                    <img src='/images/play-icon-white.png' />
                    <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src='/images/group-icon.png' />
                </GroupWatchButton>
            </Controls>
            <SubTitle>
                2018 7m Family, Fantasy, Kids, Animation
            </SubTitle>

            <Description>
                lorem ipsum dolor sit amet, consectetur adipiscing elit in diam nonum vul ac odio just sed diam nonum et just euismod tempor incididunt ut labore et fames ac turpis just sed diam nonum et just euismod tempor incididunt ut labore et fames ac turpis just sed diam nonum et just euismod tempor incididunt ut lab     lore    mauris just sed diam nonum et just euism od in
            </Description>
        </Container>
    )
}

export default Detail

const Container = styled.div`

    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;

`

const Background = styled.div`

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImageTitile = styled.div`

    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;

    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

`

const Controls = styled.div`
    display: flex;
    align-items: center;
`

const PlayButton = styled.div`
    border-radius: 4px;
    font-size: 15px;
    padding: 0px 24px;
    margin-right: 22px;
    display: flex;
    color: black;
    align-items: center;
    height: 56px;
    background: rgb(249, 249, 249);
    letter-spacing: 1.8px;
    cursor: pointer;
    text-transform: uppercase;

    &:hover {
        background: rgb(198, 198, 198);
    }
`

const TrailerButton = styled(PlayButton)`
    background: rgb(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
`

const AddButton = styled.div`

    margin-right: 16px;
    height: 44px;
    width: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 2px solid white;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.6);

    span{
        font-size: 30px;
    }

`

const GroupWatchButton = styled(AddButton)`
    background: rgb(0, 0, 0);
`

const SubTitle = styled.div`
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    max-width: 760px;
`