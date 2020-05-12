import React from "react";
import "./App.css";
import Dashboard from "./Components/dashboard";
import { Sidebar, SidebarItem } from 'react-responsive-sidebar';
import { FaCubes, FaLayerGroup, FaUserAlt } from 'react-icons/fa';
import { BsBuilding } from "react-icons/bs";
import { IoMdChatbubbles } from "react-icons/io";

const items = [
  <SidebarItem color={'#000000'} textAlign={'center'} hoverHighlight={'#ffffff'}>Covid<br /> Opportunities</SidebarItem>,
  <SidebarItem color={'#000000'} hoverHighlight={'#ffffff'}></SidebarItem>,
  <SidebarItem color={'#000000'} leftIcon={ <FaCubes /> }>Dashboard</SidebarItem>,
  <SidebarItem color={'#000000'} leftIcon={ <BsBuilding /> }>Companies</SidebarItem>,
  <SidebarItem color={'#000000'} leftIcon={ <FaLayerGroup /> }>Projects</SidebarItem>,
  <SidebarItem color={'#000000'} leftIcon={ <IoMdChatbubbles /> }>Chats</SidebarItem>,
  <SidebarItem color={'#000000'} leftIcon={ <FaUserAlt /> }>Profile</SidebarItem>,
];


function App() {
  return (
    <div className="App">
      <Sidebar content={items} background={'#ffffff'} toggleIconColor={'#000000'} width={270}>
        <Dashboard />
      </Sidebar>
    </div>
  );
}

export default App;
