import React from 'react'
import styled from 'styled-components'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage';

function Chatpage() {
    return (
        <Container>
            <Header>
                <Channel>
                    <ChannelName>
                        # Blackpink
                    </ChannelName>
                    <ChannelInfo>
                        Blink
                    </ChannelInfo>
                </Channel>
                <ChannelDetails>
                    <div>
                    Details
                    </div>
                    <Info/>
                </ChannelDetails>
            </Header>
            <MessageContainer>
                <ChatMessage/>
            </MessageContainer>
            <ChatInput/>
        </Container>
    )
}

export default Chatpage

const Container = styled.div`
    display: grid;
    grid-template-rows: 64px auto min-content;
`
const Channel = styled.div`
    
`
const ChannelDetails = styled.div`
    display: flex;
    align-items: center;
    color: gray;
`
const ChannelName = styled.div`
    font-weight: 700;
`
const ChannelInfo = styled.div`
    font-weight: 400;
    color: black;
    font-size: 13px;
    margin-top: 8px;
`
const Info = styled(InfoOutlinedIcon)`
    margin-left: 10px;
`
const Header = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    align-items: center;
    border-bottom: 1px black solid;
    justify-content: space-between;
`
const MessageContainer = styled.div`
    
`