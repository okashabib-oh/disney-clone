import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg" />
                <SignUp>GET ALL THERE</SignUp>
                <Description>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit in diam nonum vul ac odio just sed diam nonum et just euismod tempor incididunt ut labore et fames ac turpis just sed diam nonum et just euismod tempor incididunt ut labore et fames ac turpis just sed diam nonum et just euismod tempor incididunt ut lab     lore    mauris just sed diam nonum et just euism od in
                </Description>
                <CTALogoTwo src="/images/cta-logo-two.png" />
            </CTA>
        </Container>
    )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    justify-content: center;
    align-items: top;

    &:before {
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        content: "";
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: 0.5;
        background-image: url("/images/login-background.jpg");
        z-index: -1;
    }
`

const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;
`
const CTALogoOne = styled.img``

const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 14px;
    text-align: center;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover {
        background-color: #0049b3;
    }
`

const Description = styled.p`

    font-size: 11px;
    line-height: 1.5;
    text-align: center;
    letter-spacing: 1.5px;

`

const CTALogoTwo = styled.img`
    width: 90%;
`