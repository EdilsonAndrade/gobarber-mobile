import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Signup from '~/pages/Signup';
import Signin from '~/pages/Signin';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Signin,
      Signup,
    },
    {
      headerTitleAlign: 'center',
      headerBackTitleVisible: false,
    }
  )
);

export default Routes;
