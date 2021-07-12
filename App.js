import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from '@react-navigation/drawer'
import Splash from "./src/components/Include/Splash";
import DrawerContent from "./src/navigation/DrawerContent";
import StackContent from "./src/navigation/StackContent";
import {Provider} from "react-redux";
import {store} from "./src/redux/store";


const Drawer = createDrawerNavigator()
export default function App() {
  const [isLoading, setIsLoading] = React.useState(true)
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])
  if (isLoading) {
    return <Splash/>
  }
  return (
      <Provider store={store}>
        <NavigationContainer >
          <Drawer.Navigator drawerContent={props =>
              <DrawerContent {...props}/>}>
            <Drawer.Screen name={'Home'} component={StackContent}/>
          </Drawer.Navigator>
        </NavigationContainer>
      </Provider>
  );
}
