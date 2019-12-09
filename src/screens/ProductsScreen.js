import React from "react";
import {StyleSheet, Text, View, FlatList, Button} from "react-native";

import {Category} from "../components/Category";
import {List} from "../components/List";


export const ProductsScreen = props => {
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

  const handlePressButton = (category) =>{
    let options = {animated:true};

    switch(category){
      case "Clothes" : options = {animated:true, index: 0};
      break;
      case "Games" : options = {animated:true, index: 6};
      break;
      case "Office" : options = {animated:true, index: 12};
      break;
      case "Food" : options = {animated:true, index: 18};
      break;
      default : options = {animated:true, index: 0};
    }

    list.current.scrollToIndex(options);
  }

  return (
    <View style={styles.wrap}>
      <View style={styles.headerListWrap}>
        <View style={styles.headerTextBlock}>
          <Text style={styles.headerText}>Chose Category</Text>
        </View>
        <FlatList
          data={[...new Set(testApi.map(item => item.category))]}
          renderItem={({item}) => {
            return <Category category={item} scrollToItem={handlePressButton} />;
          }}
          keyExtractor={item => item}
        />
      </View>
      <View style={styles.products}>
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
      <View style={styles.btn}>
        <Button
          title="Back in main screen"
          onPress={() => props.inMain("start")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: "white"
  },
  headerTextBlock: {
    alignItems: "center",
    marginTop: 28
  },
  headerText: {
    fontSize: 22,
    backgroundColor: "#FFFACD",
    padding: 5,
    borderRadius: 5
  },
  headerListWrap: {
    height: 180,
    backgroundColor: "white"
  },
  products: {
    flex: 1,
    backgroundColor: "white"
  },
  btn: {
    padding: 20
  }
});
