import * as React from 'react'

import { FontAwesome5 } from '@expo/vector-icons'


export const screens = {
  
  
  TestScreen: 'TestScreen',
  TableOfContents: 'TableOfContents',
  TermsOfUse: 'TermsOfUse',
  MDL: 'MDL',
  IDC10: 'IDC10',
  StackNavigator: 'StackNavigator',
  HomeScreen: 'HomeTab',
  
}

  

export const routes = [
  
  
    {
      name: screens.StackNavigator,
      focusedRoute: screens.StackNavigator,
      title: '',
      showInTab: false,
      showInDrawer: false,
      icon: (focused) =>
      <FontAwesome5 iconName="home" size={20} color={focused ? '#ffffff18' : '#333'} />,
     
    },
    {
      name: screens.HomeScreen,
      focusedRoute: screens.HomeTab,
      title: 'Home',
      showInTab: true,
      showInDrawer: true,
      icon: (focused) =>
      <FontAwesome5 iconname={focused ? 'home' : 'home'} size={20} color="#333" />
     
    },
    
  {
    name: screens.TestScreen,
    focusedRoute: screens.TestScreen,
    title: 'Tests',
    showInTab: true,
    showInDrawer: true,
    icon: (focused) =>
    <FontAwesome5 iconName={focused ? 'disease' : 'disease'} size={20} color={'#333'} />,
  },
  
  
  {
    name: screens.TableOfContents,
    focusedRoute: screens.TableOfContents,
    title: 'Notes',
    showInTab: true,
    showInDrawer: true,
    icon: (focused) =>
    <FontAwesome5 name="info-circle" size={20} color="#fff" />,
  },
  
  {
    name: screens.TermsOfUse,
    focusedRoute: screens.TermsOfUse,
    title: 'TermsOfUse',
    showInTab: true,
    showInDrawer: true,
    icon: (focused) =>
      <Icon name="yes" size={30} color={focused ? '#ffffff' : '#000'} />,
  },

  
  {
    name: screens.MDL,
    focusedRoute: screens.MDL,
    title: 'About MDL',
    showInTab: false,
    showInDrawer: true,
    icon: (focused) =>
      <Icon name="home" size={30} color={focused ? '#551E18' : '#000'} />,
  },

  {
    name: screens.IDC10,
    focusedRoute: screens.IDC10,
    title: 'IDC10 Codes', 
    showInTab: false,
    showInDrawer: true,
    icon: (focused) =>
      <Icon name="home" size={30} color={focused ? '#551E18' : '#000'} />,
  },
]

