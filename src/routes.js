import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import Signup from '~/pages/Signup';
import Signin from '~/pages/Signin';
import Provider from '~/pages/New/SelectProvider';
import SelectDatetime from '~/pages/New/SelectDateTime';
import Confirm from '~/pages/New/Confirm';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator({
      Sign: createSwitchNavigator({
        Signin,
        Signup
      }),
      App: createBottomTabNavigator({
        Dashboard,
        New: {
          screen: createStackNavigator({
            Provider,
            SelectDatetime,
            Confirm
          },
          {
            defaultNavigationOptions:{
              headerTransparent:true,
              headerTintColor:'#fff',
              headerLeftContainerStyle:{
                marginLeft:5
              },
                       
            }
          }),
          navigationOptions: {
            tabBarVisible: false,
            tabBarLabel: "Agendar",
            tabBarIcon: (
              <Icon name="add-circle-outline" size={20} color="rgba(255,255,255,0.6)" />
            )
          }

        },
        Profile
      }, {
        resetOnBlur:true,
        tabBarOptions: {
          keyboardHidesTabBar: true,
          activeTintColor: "#fff",
          inactiveTintColor: 'rgba(255,255,255,0.6)',
          activeBackgroundColor: "#7159c1",
          style: {
            backgroundColor: "#7159c1"
          }

        }
      }),
    }, {
      initialRouteName: isSigned ? 'App' : 'Sign'
    })
  )



