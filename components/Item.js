import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default function Item({ item, deleteItem, decItemCount, incItemCount }) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{item.count==0?"zero":item.count}</Text>
      <Button
        style={styles.button}
        onPress={() => incItemCount(item.id)}
        title="Increase"
        color="#841584"
      />
      <Button
        style={styles.button}
        onPress={() => decItemCount(item.id)}
        title="Decrease"
        color="#0a8383"
      />
      <Button
        style={styles.button}
        onPress={() => deleteItem(item.id)}
        title="Delete"
        color="#d12626"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    borderBottom: '2px solid black',
  },
  button: {
    width: 50,
  },
  paragraph: {
    margin: 24,
    marginTop: 15,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
