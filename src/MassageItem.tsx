import React, {memo} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginVertical: 5,
    justifyContent: 'flex-end',
  },
  userMessage: {
    justifyContent: 'flex-end',
  },
  otherMessage: {
    justifyContent: 'flex-start',
  },
  messageContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  messageBubble: {
    padding: 10,
    borderRadius: 10,
    maxWidth: '80%',
  },
  userBubble: {
    backgroundColor: 'lightblue',
  },
  otherBubble: {
    backgroundColor: 'lightgray',
  },
  avatarIcon: {
    fontSize: 30,
    marginHorizontal: 10,
  },
  messageText: {
    color: 'black',
  },
  triRight: {
    width: 0,
    height: 0,
    borderTopWidth: 10,
    borderRightWidth: 20,
    borderBottomWidth: 10,
    borderTopColor: 'white',
    borderRightColor: 'transparent',
    borderBottomColor: 'white',
  },
  triLeft: {
    width: 0,
    height: 0,
    borderTopWidth: 10,
    borderLeftWidth: 20,
    borderBottomWidth: 10,
    borderTopColor: 'white',
    borderLeftColor: 'transparent',
    borderBottomColor: 'white',
  },
  none: {
    display: 'none',
  },
});

interface MessageItemProps {
  text: string;
  isUser: boolean;
}

function MessageItem({text, isUser}: MessageItemProps) {
  return (
    <View
      style={[
        styles.messageContainer,
        isUser ? styles.userMessage : styles.otherMessage,
      ]}>
      <View style={styles.messageContent}>
        {!isUser && <FontAwesome5 name="user" style={styles.avatarIcon} />}

        <View
          style={[
            styles.triRight,
            isUser ? styles.none : styles.otherBubble,
          ]}></View>
        <View
          style={[
            styles.messageBubble,
            isUser ? styles.userBubble : styles.otherBubble,
          ]}>
          <Text style={styles.messageText}>{text}</Text>
        </View>
        <View
          style={[
            styles.triLeft,
            isUser ? styles.userBubble : styles.none,
          ]}></View>

        {isUser && <FontAwesome5 name="user-tie" style={styles.avatarIcon} />}
      </View>
    </View>
  );
}

export default memo(MessageItem);
