import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from "./src/Components/Login";
import LoginC from "./src/Components/LoginC";
import Registro  from "./src/Components/Registro";
import Tabbar from "./src/Components/Tabbar"
import Drawer from "./src/Components/Drawer";
const RootStack = createStackNavigator(
  { 
    LoginC:{screen: LoginC, navigationOptions:{headerShown:false}},
    Login:{screen: Login, navigationOptions:{title:'Login'}},
    Tabbar: {screen:Tabbar,navigationOptions:{headerShown:false}},

    Drawer: {screen:Drawer,navigationOptions:{headerShown:false}},
    Registro:{screen: Registro},
  }
);
const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}