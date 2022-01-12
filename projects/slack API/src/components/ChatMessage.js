import React from 'react'
import styled from 'styled-components'

function ChatMessage() {
    return (
        <Container>
            <UserAvatar>
                <img src="https://randomuser.me/api/portraits/women/12.jpg" />
            </UserAvatar>
            <MessageContent>
                <Name>
                    Lisa
                    <span> 01/09/2022 10:03 PM</span>
                </Name>
                <Text>
                    Kill this love
                </Text>
            </MessageContent>
        </Container>
    )
}

export default ChatMessage

const Container = styled.div`
    padding: 8px 20px;
    display: flex;
    align-items: center;
    :hover {
        background: skyblue;
    }
`
const UserAvatar = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 2px;
    overflow: hidden;
    margin-right: 8px;

    img {
        width: 100%;
    }
`
const MessageContent = styled.div`
    display: flex;
    flex-direction: column;
`
const Name = styled.span`
    font-weight: 900;
    font-size: 15px;
    line-height: 1.4;
    
    span {
        margin-left: 8px;
        font-weight: 400;
        color: purple;
        font-size: 13px;
    }
`
const Text = styled.span`

`

