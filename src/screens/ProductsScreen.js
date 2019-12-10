import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight
} from "react-native";

import { Category } from "../components/Category";
import { List } from "../components/List";

export const ProductsScreen = ({ inMain }) => {
  const testApi = [
    {
      id: "1",
      category: "Clothes",
      product: "Winter Jacket",
      price: "50$",
      description: "Any Description"
    },
    {
      id: "2",
      category: "Clothes",
      product: "Boots",
      price: "60$",
      description: "Any Description"
    },
    {
      id: "3",
      category: "Clothes",
      product: "Jeans",
      price: "30$",
      description: "Any Description"
    },
    {
      id: "4",
      category: "Clothes",
      product: "Trainers",
      price: "70$",
      description: "Any Description"
    },
    {
      id: "5",
      category: "Clothes",
      product: "Shirt",
      price: "20$",
      description: "Any Description"
    },
    {
      id: "6",
      category: "Clothes",
      product: "Coat",
      price: "100$",
      description: "Any Description"
    },

    {
      id: "7",
      category: "Games",
      product: "GTA 5",
      price: "20$",
      description: "Any Description"
    },
    {
      id: "8",
      category: "Games",
      product: "Raft",
      price: "20$",
      description: "Any Description"
    },
    {
      id: "9",
      category: "Games",
      product: "High Profit",
      price: "Free",
      description: "Any Description"
    },
    {
      id: "10",
      category: "Games",
      product: "Just Cause 3",
      price: "15$",
      description: "Any Description"
    },
    {
      id: "11",
      category: "Games",
      product: "Farming Simulator 2019",
      price: "20$",
      description: "Any Description"
    },
    {
      id: "12",
      category: "Games",
      product: "Broforce",
      price: "2$",
      description: "Any Description"
    },

    {
      id: "13",
      category: "Office",
      product: "Stapler",
      price: "2$",
      description: "Any Description"
    },
    {
      id: "14",
      category: "Office",
      product: "Paper",
      price: "20$",
      description: "Any Description"
    },
    {
      id: "15",
      category: "Office",
      product: "Pen",
      price: "1$",
      description: "Any Description"
    },
    {
      id: "16",
      category: "Office",
      product: "Pancil",
      price: "1$",
      description: "Any Description"
    },
    {
      id: "17",
      category: "Office",
      product: "Glue",
      price: "1$",
      description: "Any Description"
    },
    {
      id: "18",
      category: "Office",
      product: "Diary",
      price: "5$",
      description: "Any Description"
    },
    {
      id: "19",
      category: "Food",
      product: "Pizza",
      price: "4$",
      description: "Any Description"
    },
    {
      id: "20",
      category: "Food",
      product: "Tomatos",
      price: "3$",
      description: "Any Description"
    },
    {
      id: "21",
      category: "Food",
      product: "Bread",
      price: "0.5$",
      description: "Any Description"
    },
    {
      id: "22",
      category: "Food",
      product: "Salt",
      price: "1$",
      description: "Any Description"
    },
    {
      id: "23",
      category: "Food",
      product: "Pepper",
      price: "0.5$",
      description: "Any Description"
    },
    {
      id: "24",
      category: "Food",
      product: "Sugar",
      price: "0.5$",
      description: "Any Description"
    }
  ];

  const list = React.createRef();
  const categoryList = [...new Set(testApi.map(item => item.category))];

  const handlePressButton = category => {
    let options = { animated: true };

    const getID = (name) => {
      return testApi.find(obj => {
        if(obj.category === name){
          return obj;
        };
      }).id-1;
    };

    switch (category) {
      case "Clothes":
        options = {...options, index: getID("Clothes") };
        break;
      case "Games":
        options = {...options, index: getID("Games") };
        break;
      case "Office":
        options = {...options, index: getID("Office") };
        break;
      case "Food":
        options = {...options, index: getID("Food") };
        break;
      default:
        options = {...options, index: 0 };
    }

    list.current.scrollToIndex(options);
  };

  return (
    <View style={styles.wrap}>

      <View>
        <Text style={styles.headerText}>Chose Category</Text>
        <FlatList
          horizontal
          data={categoryList}
          renderItem={({ item }) => {
            return (
              <Category category={item} scrollToItem={handlePressButton} />
            );
          }}
          keyExtractor={item => item}
        />
      </View>

      <View style={styles.wrap}>
        <FlatList
          data={testApi}
          ref={list}
          renderItem={({ item }) => (
            <List
              id={item.id}
              path={item.path}
              category={item.category}
              product={item.product}
              price={item.price}
              description={item.description}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>

      <TouchableHighlight onPress={() => inMain("start")}>
        <Text style={styles.btn}>Back in main screen</Text>
      </TouchableHighlight>

    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1
  },
  headerText: {
    fontSize: 22,
    backgroundColor: "#FFFACD",
    padding: 5,
    borderRadius: 5,
    marginTop: 25,
    textAlign: "center"
  },
  btn: {
    paddingVertical: 15,
    fontSize: 20,
    color: "white",
    textAlign: "center",
    backgroundColor: "#00BFFF",
    fontWeight: "bold"
  }
});