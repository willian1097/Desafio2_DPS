import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import Peliculas from './components/peliculas/Peliculas';
import Series from './components/series/Series';
import Estrenos from './components/estrenos/Estrenos';
import Video from './components/Video';

const Tab = createBottomTabNavigator();

const MyTheme = {
  dark: false,
  colors: {
    primary: '#084049',
    background: '#DAF6FB',
    card: '#DAF6FB',
    text: '#084049',
    border: '#F7D6E0',
    notification: '#084049',
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch(route.name) {
              case 'peliculas':
                iconName = focused ? 'md-film' : 'md-film-outline';
                break;
              case 'series':
                iconName = focused ? 'eye' : 'eye-outline';
                break;
              case 'proximamente':
                iconName = focused ? 'information-circle' : 'information-circle-outline';
                break;
              case 'video':
                iconName = focused ? 'play' : 'play-outline';
                break;
            }
    
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#084049',
          tabBarInactiveTintColor: '#108193',
        })}
      >
        <Tab.Screen name="peliculas" component={Peliculas} options={{title: 'Películas'}} />
        <Tab.Screen name="series" component={Series} options={{title: 'Series'}} />
        <Tab.Screen name="proximamente" component={Estrenos} options={{title: 'Próximamente'}} />
        <Tab.Screen name="video" component={Video} options={{title: 'Video'}} />
      </Tab.Navigator>

    </NavigationContainer>
  );
}
