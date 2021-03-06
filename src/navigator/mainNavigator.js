import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import UserProfile212959Navigator from '../features/UserProfile212959/navigator';
import Tutorial212958Navigator from '../features/Tutorial212958/navigator';
import NotificationList212930Navigator from '../features/NotificationList212930/navigator';
import Settings212929Navigator from '../features/Settings212929/navigator';
import Settings212921Navigator from '../features/Settings212921/navigator';
import UserProfile212919Navigator from '../features/UserProfile212919/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
UserProfile212959: { screen: UserProfile212959Navigator },
Tutorial212958: { screen: Tutorial212958Navigator },
NotificationList212930: { screen: NotificationList212930Navigator },
Settings212929: { screen: Settings212929Navigator },
Settings212921: { screen: Settings212921Navigator },
UserProfile212919: { screen: UserProfile212919Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
