import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

interface TodoItemProps {
  item: string;
  onDelete: () => void;
  onEdit: (newText: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ item, onDelete, onEdit }) => {
  const [editing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(item);

  const handleEdit = () => {
    if (editedText.trim() !== "") {
      onEdit(editedText);
      setEditing(false);
    }
  };

  //test
  const test = (text: string) => {
    console.log(text);
  };

  const handleCancelEdit = () => {
    setEditedText(item);
    setEditing(false);
  };

  return (
    <View style={styles.container}>
      {editing ? (
        <>
          <TextInput
            style={styles.editInput}
            onChangeText={setEditedText}
            value={editedText}
          />
          <View style={styles.button}>
            <TouchableOpacity onPress={handleEdit} style={styles.saveButton}>
              <Text style={styles.saveButton}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleCancelEdit}
              style={styles.cancelButton}
            >
              <Text style={styles.cancelButton}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <Text style={styles.item}>{item}</Text>
          <View style={styles.button}>
            <TouchableOpacity
              onPress={() => setEditing(true)}
              style={styles.editButton}
            >
              <Text style={styles.editButton}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
              <Text style={styles.deleteButton}>Delete</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={test} style={styles.deleteButton}>
              <Text style={styles.deleteButton}>Test</Text>
            </TouchableOpacity> */}
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "grey",
  },
  item: {
    flex: 1,
  },
  button: {
    justifyContent: "space-between",
    flexDirection: "row",
    textAlign: "center",
  },
  editInput: {
    justifyContent: "flex-start",
    height: 40,
    width: 130,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  editButton: {
    marginLeft: 10,
    borderRadius: 10,
    backgroundColor: "green",
    marginRight: 8,
    padding: 5,
    color: "white",
  },
  deleteButton: {
    backgroundColor: "red",
    justifyContent: "center",
    borderRadius: 10,
    padding: 5,
    color: "white",
    marginRight: 8,
  },
  saveButton: {
    marginLeft: 0,
    borderRadius: 10,
    backgroundColor: "green",
    marginRight: 8,
    padding: 5,
    color: "white",
    justifyContent: "center",
  },
  cancelButton: {
    backgroundColor: "red",
    justifyContent: "center",
    borderRadius: 10,
    padding: 5,
    color: "white",
  },
});

export default TodoItem;
