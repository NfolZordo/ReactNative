import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

type RootStackParamList = {
  Department: undefined;
  MyProfile: undefined;
};

type DepartmentScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Department'
>;

const DepartmentScreen = ({
  navigation,
}: {
  navigation: DepartmentScreenNavigationProp;
}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.departmentName}>
        Кафедра «Програмне забезпечення автоматизованих систем»
      </Text>
      <Text style={styles.text}>
        Навчальний процес ведуть 11 науково-педагогічних працівників: 2
        професори, 5 кандидатів наук, доцентів, старші викладачі та асистенти.
      </Text>
      <Text style={styles.text}>
        Забезпечує навчальний процес учбово-допоміжний персонал кафедри у складі
        2 осіб. Кафедра налічує 13 співробітників.
      </Text>
      <Button
        title="Go to MyProfile"
        onPress={() => navigation.navigate('MyProfile')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  departmentName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  text: {
    fontSize: 16,
    color: '#000',
    lineHeight: 24,
    marginLeft:10,
  },
  button: {
    backgroundColor: '#555',
    padding: 10,
    borderRadius: 5,
    color: '#fff',
  },
});

function MyProfileScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image
        source={require('../assets/photo_2023-07-04_15-48-06.jpg')}
        style={{
          width: 200,
          height: 200,
          borderRadius: 50,
        }}
      />
      <Text style={stylesMyProfile.title}>Задорожний Олександр Васильович</Text>
      <Text style={stylesMyProfile.subtitle}>ПЗ-2004</Text>
    </View>
  );
}

const stylesMyProfile = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
  },
});

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="Department">
        <Stack.Screen name="Department" component={DepartmentScreen} />
        <Stack.Screen name="MyProfile" component={MyProfileScreen} />
      </Stack.Navigator> */}

      <Drawer.Navigator initialRouteName="Department">
        <Drawer.Screen name="Department" component={DepartmentScreen} />
        <Drawer.Screen name="MyProfile" component={MyProfileScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default App;




// import * as React from 'react';
// import { Button, View } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';

// // Явно указываем тип для пропса "navigation"
// type HomeScreenProps = {
//   navigation: any; // Замените "any" на тип вашей навигации, если у вас есть его определение
// };

// function HomeScreen({ navigation }: HomeScreenProps) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         onPress={() => navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//     </View>
//   );
// }

// // Явно указываем тип для пропса "navigation"
// type NotificationsScreenProps = {
//   navigation: any; // Замените "any" на тип вашей навигации, если у вас есть его определение
// };

// function NotificationsScreen({ navigation }: NotificationsScreenProps) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }

// const Drawer = createDrawerNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }
