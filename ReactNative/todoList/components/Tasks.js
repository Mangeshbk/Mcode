import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

const Tasks = (props) => {
  return (
    <View style={style.item}>
      <View style={style.leftItem}>
        <View style={style.square}></View>
        <Text style={style.itemText}>{props.text}</Text>
      </View>
      <View style={style.circular}></View>
    </View>
  );
};

const style = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  leftItem: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
  },
  circular: {
    width: 12,
    height: 12,
    borderRadius: 5,
    borderColor: '#55BCF6',
    borderWidth: 2,
  },
});

export default Tasks;
