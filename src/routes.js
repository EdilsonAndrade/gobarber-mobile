import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import Signup from '~/pages/Signup';
import Signin from '~/pages/Signin';

export default (isSigned = false) =>
 createAppContainer(
   createSwitchNavigator({
     Sign: createSwitchNavigator({
       Signin,
       Signup
     }),
     App: createBottomTabNavigator({
       Dashboard,
       Profile
     },{
       tabBarOptions:{
        keyboardHidesTabBar:true,
         activeTintColor:"#fff",
         inactiveTintColor:'rgba(255,255,255,0.6)',
         activeBackgroundColor: "#7159c1",
         style:{
           backgroundColor: "#7159c1"
         }

       }
     }),
   },{
     initialRouteName: isSigned ? 'App' : 'Sign'
   })
 )
  


