import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Details from '~/components/DeliveryDetails';
import HeaderGoBack from '~/components/HeaderGoBack';

import ConfirmDelivery from './pages/ConfirmDelivery';
import Dashboard from './pages/Dashboard';
import ProblemAdd from './pages/Problems/ProblemAdd';
import ProblemView from './pages/Problems/ProblemView';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function DashboarMenu() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#7d40e7' },
        headerLeft: () => <HeaderGoBack />,
      }}
    >
      <Stack.Screen
        component={Dashboard}
        name="Dashboard"
        options={{ headerShown: false }}
      />
      <Stack.Screen component={Details} name="Details" />
      <Stack.Screen
        component={ProblemView}
        name="ViewProblem"
        options={{ title: 'View Problem' }}
      />
      <Stack.Screen
        component={ProblemAdd}
        name="AddProblem"
        options={{ title: 'Report Problem' }}
      />
      <Stack.Screen
        component={ConfirmDelivery}
        name="ConfirmDelivery"
        options={{ title: 'Confirm Delivery' }}
      />
    </Stack.Navigator>
  );
}

function MainScreen() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#7d40e7',
      }}
    >
      <Tab.Screen
        component={DashboarMenu}
        name="Deliveries"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="reorder" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        component={Profile}
        name="Profile"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="account-circle" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Routes() {
  const { signed } = useSelector(state => state.auth);
  console.tron.log(signed);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!signed ? (
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="Main"
            component={MainScreen}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
