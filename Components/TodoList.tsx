import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  StyleSheet,
  Text,
  Alert,
  TouchableOpacity,
  Pressable,
} from "react-native";
import TodoItem from "./TodoItems";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import MainStackParamList from "../types/navigation";
import { useNavigation } from "@react-navigation/native";

type TodoProps = NativeStackScreenProps<MainStackParamList>;

interface Todo {
  id: string;
  text: string;
}
type NavigationProps = NativeStackNavigationProp<MainStackParamList>;

const TodoList = () => {
  const [todoItems, setTodoItems] = useState<Todo[]>([]);
  const [text, setText] = useState("");
  const [berhasil, setBerhasil] = useState<boolean>(false);
  const navigation = useNavigation<NavigationProps>();
  const handleAddItem = () => {
    if (text.trim() !== "") {
      const newItem: Todo = {
        id: new Date().getTime().toString(),
        text: text,
      };
      setTodoItems([...todoItems, newItem]);
      setText("");
      setBerhasil(true);
    }
  };

  // useEffect(() => {
  //   if (berhasil === true) {
  //     Alert.alert("Todo berhasil ditambahkan", "ok");
  //     setBerhasil(false);
  //   }
  // }, [berhasil]);

  const handleDeleteItem = (itemId: string) => {
    const updatedItems = todoItems.filter((item) => item.id !== itemId);
    setTodoItems(updatedItems);
  };

  const handleEditItem = (itemId: string, newText: string) => {
    const updatedItems = todoItems.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          text: newText,
        };
      }
      return item;
    });
    setTodoItems(updatedItems);
  };

  // const navigateToDetail = (itemId: string) => {
  //   const selectedItem = todoItems.find((item) => item.id === itemId);
  //   navigation.navigate("Detail", { item: selectedItem });
  // };

  return (
    <View style={styles.container}>
      <Text
        style={{
          textAlign: "center",
          padding: 20,
          fontSize: 30,
          fontWeight: "bold",
          marginBottom: 10,
        }}
      >
        Todo Apps
      </Text>
      <View style={styles.header}>
        <TextInput
          style={styles.textfield}
          onChangeText={setText}
          value={text}
          placeholder="Tambahkan Todos.."
        />
        <TouchableOpacity style={styles.button} onPress={handleAddItem}>
          <Text style={{ fontWeight: "bold" }}>Add</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={todoItems}
        renderItem={({ item }) => (
          <Pressable onPress={() => navigation.navigate("TodoDetails")}>
            <TodoItem
              item={item.text}
              onDelete={() => handleDeleteItem(item.id)}
              onEdit={(newText) => handleEditItem(item.id, newText)}
            />
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    width: "100%",
    backgroundColor: "#A1C2F1",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginBottom: 30,
  },
  textfield: {
    height: 50,
    width: 240,
    borderColor: "grey",
    borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 8,
  },
  button: {
    // flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#BAD7E9",
    width: 60,
  },
});

export default TodoList;
