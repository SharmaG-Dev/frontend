
import './App.css';
import Home from './components/home';
import Login from './components/login';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Services from './components/Services';
import NotFound from './components/404';
import Header from './components/header';
import { useState } from 'react';
import EventHandler from './components/eventhandler';
import Gallary from './components/gallary';
import { createTheme, ThemeProvider } from '@mui/material';
import Signup from './components/signup';
import ManageUser from './components/manageUser';


function App() {

  const Username ="Peter Parker";


  const [darkTheme, setdarkTheme] = useState(false);

  const theme1 = createTheme({
    palette :{
      mode : 'dark',
      primary :{
        main: '#7815f0',
      },
    },
  });
  const theme2 = createTheme({
    palette :{
      mode : 'light',
      primary : {
        main:'#9a060e',
      },
    },
  });

  return (
    <div>

      <ThemeProvider theme={darkTheme ? theme1 : theme2}>

      <BrowserRouter>
      <Header darkTheme={darkTheme} setdarkTheme={setdarkTheme}></Header>
      <Routes>
        <Route element={<Login></Login>} path="login"/>
        <Route element={<Home Username={Username}></Home>} path="home"/>
        <Route element={<Services></Services>} path="services"/>
        <Route element={<NotFound></NotFound>} path="404"/>
        <Route element={<EventHandler/>} path="eventhandler"/>
        <Route element={<Gallary/>} path="gallary"/>
        <Route element={<Signup/>} path="signup"/>
        <Route element={<ManageUser/>} path="manageuser"/>
      
        <Route element={<Navigate to="/home"></Navigate>} path=""/>
        <Route element={<Navigate to="/404"></Navigate>} path="*"/>
      </Routes>
      </BrowserRouter>

      </ThemeProvider>
    </div>
  );
}

export default App;
