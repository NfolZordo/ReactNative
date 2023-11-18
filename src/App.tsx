import React, {useMemo} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  TextInput,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MessageItem from './MassageItem';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
type SectionProps = PropsWithChildren<{
  title: string;
}>;

const messages = Array.from({length: 30}, (_, index) => ({
  id: index,
  text: `Повідомлення ${index}`,
}));

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const messages = useMemo(
    () =>
      Array.from({length: 30}, (_, index) => ({
        id: index,
        text: `Повідомлення ${index}`,
      })),
    [],
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.chatHeader}>
        <FontAwesome5 name={'chevron-left'} brand style={styles.icon} />
        <Text style={styles.chatTitle}>Instamobile Team</Text>
        <FontAwesome5 name={'cog'} brand style={styles.icon} />
      </View>

      {/* Список повідомлень */}
      <FlatList
        data={messages}
        keyExtractor={item => item.id.toString()}
        renderItem={({item, index}) => (
          <MessageItem text={item.text} isUser={index % 2 === 0} />
        )}
      />
      {/* Введення нового повідомлення */}
      <View style={styles.inputContainer}>
        <FontAwesome5
          name="camera"
          brand
          style={{color: 'blue', fontSize: 24}}
        />

        <TextInput
          style={styles.input}
          placeholder="Напишіть повідомлення..."
        />
        <FontAwesome5
          name="arrow-right"
          brand
          style={{color: 'blue', fontSize: 24}}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  chatHeader: {
    backgroundColor: 'blue',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  chatTitle: {
    color: 'white',
    fontSize: 20,
  },
  messageContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    padding: 10,
  },
  icon: {
    color: 'white',
    fontSize: 24,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
});

export default App;
