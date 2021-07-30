import React, {createRef} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from '@react-navigation/drawer'
import DrawerContent from "./src/navigation/DrawerContent";
import StackContent from "./src/navigation/StackContent";
import {Provider} from "react-redux";
import {store} from "./src/redux/store";
import {LogBox} from "react-native";


const Drawer = createDrawerNavigator()
export default function App() {
  React.useEffect(() => {
    LogBox.ignoreLogs(['Remote debugger', 'VirtualizedLists should never be nested',
        'Warning: isMounted(...) is deprecated', // works
            'Module RCTImageLoader', // works
        'Require cycle: node_modules'
        ]);
  }, [])

  return (
      <Provider store={store}>
        <NavigationContainer>
          <Drawer.Navigator drawerContent={props =>
              <DrawerContent {...props}/>}>
            <Drawer.Screen name={'Home'} component={StackContent}/>
          </Drawer.Navigator>
        </NavigationContainer>
      </Provider>
  );
}
