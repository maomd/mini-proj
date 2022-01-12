import React from 'react'
import styled from 'styled-components'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { sidebarItems } from '../Data/SidebarData'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import db from '../firebase';
import { useNavigate} from "react-router-dom";

function Sidebar(props) {

    const navigate = useNavigate();

    const gotoChannel = (id) => {
        if(id){
            navigate.push(`/room/${id}`)
        }
    }

    const addChannel = () => {
        const promptName = prompt("Enter Channel Name")
        if(promptName){
            db.collection('rooms').add({
                name: promptName
            })
        }
    }
    return (
        <Container>
            <WorkspaceContainer>
                <Name>
                    Workspace
                </Name>
                <NewMessage>
                    <AddCircleOutlineOutlinedIcon />
                </NewMessage>
            </WorkspaceContainer>
            <MainChannels>
                {
                    sidebarItems.map(item => (<MainChannelItem>
                        {item.icon}
                        {item.text}
                        </MainChannelItem>
                ))
                }
            </MainChannels>
            <ChannelsContainer>
                <NewChannelContainer>
                    <div>
                        Channels
                    </div>
                    <AddOutlinedIcon onClick={addChannel} />
                </NewChannelContainer>
                <ChannelsList>
                {
                    props.rooms.map(item => (
                        <Channel onClick={() => gotoChannel(item.id)}>
                        # {item.name}
                        </Channel>
                ))
                }
                </ChannelsList>
            </ChannelsContainer>
        </Container>
    )
}

export default Sidebar

const Container = styled.div`
    background: black;

`
const WorkspaceContainer = styled.div`
    color: white;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    border-bottom: 1px solid lightgrey;
`
const Name = styled.div`

`
const NewMessage = styled.div`
    width: 36px;
    height: 36px;
    background: white;
    color: purple;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 20px;
    cursor: pointer;
`

const MainChannels = styled.div`
    padding-top: 20px;
`

const MainChannelItem = styled.div`
    color: white;
    display: grid;
    grid-template-columns: 15% auto;
    height: 28px;
    align-items: center;
    padding-left: 20px;
    cursor: pointer;
    :hover {
        background: maroon;
    }
`

const ChannelsContainer = styled.div`
    color: white;
    margin-top: 10px;
`
const NewChannelContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 28px;
    padding-left: 20px;
    padding-right: 12px;
    cursor: pointer;
`
const ChannelsList = styled.div`

`
const Channel = styled.div`
    height: 28px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    cursor: pointer;
    :hover {
        background: maroon;
    }
`