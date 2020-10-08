import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title='Go to Components Demo'
      />
      <Button
        onPress={() => navigation.navigate('List')}
        title='Go to List Demo'
      />
      <Button
        onPress={() => navigation.navigate('Image')}
        title='Go to Image Demo'
      />
      <Button
        onPress={() => navigation.navigate('Counter')}
        title='Go to Counter Demo'
      />
      <Button
        onPress={() => navigation.navigate('Color')}
        title='Go to Color Demo'
      />
      <Button
        onPress={() => navigation.navigate('Square')}
        title='Go to Square Demo'
      />
      <Button
        onPress={() => navigation.navigate('ReducerSquare')}
        title='Go to Reducer Square Demo'
      />
      <Button
        onPress={() => navigation.navigate('ReducerCounter')}
        title='Go to Reducer Counter Demo'
      />
      <Button
        onPress={() => navigation.navigate('Text')}
        title='Go to Text Demo'
      />
      <Button
        onPress={() => navigation.navigate('Box')}
        title='Go to Box Demo'
      />
      <Button
        onPress={() => navigation.navigate('BoxExcercise')}
        title='Go to Box Excercise'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
