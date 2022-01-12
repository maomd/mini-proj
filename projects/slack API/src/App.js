import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Loginpage from './components/Loginpage';
import Chatpage from './components/Chatpage';
import styled from 'styled-components';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import db from './firebase'
import { auth, provider } from './firebase'

function App() {

  const [rooms, setRooms] = useState([])
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const getChannels = () => {
    db.collection('rooms').onSnapshot((snapshot) => {
      setRooms(snapshot.docs.map((doc) => {
        return { id: doc.id, name: doc.data().name }
      }))
    })
  }

  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem('user');
      setUser(null);
    })
  }

  useEffect(() => {
    getChannels();
  }, [])

  return (
    <Router>
      {
        !user ?
        <Loginpage setUser={setUser}/>
        :
        <Container>
          <Header user={user} signOut={signOut}/>
            <Main>
            <Sidebar rooms={rooms} />
              <Routes>
                <Route path="/room" element={<Chatpage />}/>
              </Routes>
            </Main>
        </Container>
    }
    </Router>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: black;
  display: grid;
  grid-template-rows: 40px auto;
`
const Main = styled.div`
  background: lightgrey;
  display: grid;
  grid-template-columns: 260px auto;

`
