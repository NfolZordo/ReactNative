// src\App.tsx
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNews } from './redux/actions/newsActions';
import axios from 'axios';
import { RootState } from './redux';
import store from './redux';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
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

const NewsScreen = () => {
  const dispatch = useDispatch();
  const news = useSelector((state: RootState) => state.news.news);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=us&apiKey=828fe193ef9a4d9d951c40d99cdefc07'
        );
        dispatch(setNews(response.data.articles));
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, [dispatch]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.header}>Recent News</Text>
      <FlatList
        data={news}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
            {/* Add more components to display other news details as needed */}
          </View>
        )}
      />
    </View>
  );
};

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
      <Drawer.Navigator initialRouteName="Department">
        <Drawer.Screen name="Department" component={DepartmentScreen} />
        <Drawer.Screen name="MyProfile" component={MyProfileScreen} />
        <Drawer.Screen name="News" component={NewsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default App;