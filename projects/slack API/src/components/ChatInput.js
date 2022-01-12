import React from 'react'
import styled from 'styled-components'
import SendRoundedIcon from '@mui/icons-material/SendRounded';

function ChatInput() {
    return (
        <Container>
            <InputContainer>
                <form>
                    <input type="text" placeholder="message here..."/>
                    <SendButton>
                        <Send/>
                    </SendButton>
                </form>
            </InputContainer>
        </Container>
    )
}

export default ChatInput


const Container = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 24px;
`

const InputContainer = styled.div`
    border: 1px black solid;
    border-radius: 5px;

    form {
        display: flex;
        height: 42px;
        align-items: center;
        padding-left: 10px;
        input {
            flex: 1;
            border: none;
            font-size; 13px;
            background: lightgrey;
        }
        input:focus {
            outline: none;
        }
    }
`
const SendButton = styled.div`
    background: green;
    border-radius: 2px;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
    cursor: pointer;

    .MuiSvgIcon-root {
        width: 18px;
    }

    :hover {
        background: #E6A519;
    }
`
const Send = styled(SendRoundedIcon)`
    color: #39FF14;
`