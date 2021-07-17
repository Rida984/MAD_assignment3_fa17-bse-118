import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet ,Button} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import Item from './components/Item';


export default function App() {
  const [items, setItems] = useState([
    { id: 0, count: 0 },
    { id: 1, count: 3 },
  ]);

  const addItem = () =>
    setItems([...items, { id: items.length + 1, count: 0 }]);

  const deleteItem = (id) =>
    setItems([...items.filter((item) => item.id !== id)]);

  const increamnetItemCount = (id) => {
    let index = items.findIndex((x) => x.id === id);
    let temporaryarray = items.slice();
    temporaryarray[index].count = temporaryarray[index].count + 1;
    setItems(temporaryarray);
  };

  const decreamentItemCount = (id) => {
    let index = items.findIndex((x) => x.id === id);
    let temporaryarray = items.slice();
    if(!temporaryarray[index].count>0) return
    temporaryarray[index].count = temporaryarray[index].count - 1;
    setItems(temporaryarray);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>FA17-BSE-118</Text>
      <View style={styles.header}>
        ({items.length}) items in the cart
        <View style={styles.buttons}>
          <Button
            onPress={()=> setItems([])}
            title="Reset the cart"
            color="#841584"
          />
                    <Button
            onPress={addItem}
            title="Add item"
            color="#1a632c"
          />
        </View>
      </View>
      <View style={styles.items}>
        {items.length === 0 ? (
          <h1>cart is empty!</h1>
        ) : (
          items.map((item) => (
            <Item
              key={item.id}
              item={item}
              deleteItem={deleteItem}
              incItemCount={increamnetItemCount}
              decItemCount={decreamentItemCount}
            />
          ))
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  header: {
    flex: 1,
    padding: 10,
    height: 35,
    alignContent: 'center',
    backgroundColor: '#c7c7c7',
    borderBottomColor: '#ffffff',
    borderBottomWidth: 3,
    fontSize: 20,
  },
  heading: {
    margin: 24,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    borderBottom: '2px solid black',
  },
  items: {
    flex: 1,
  },
  buttons:{
    marginTop:20,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
