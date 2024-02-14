import React, { ReactElement, useState } from "react";
import { VStack } from "native-base";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Alert } from "react-native";

const AddBookForm = (): ReactElement => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleCreateBook = () => {
    if (!title || !description) {
      return Alert.alert("Error", "Please fill all the fields");
    }

    setIsLoading(true);
  };

  return (
    <VStack flex={1} bg={"gray.800"} p={6}>
      <Header title={"Add new book"} />

      <Input placeholder={"Title"} mt={4} onChangeText={setTitle} />
      <Input
        placeholder={"Description"}
        mt={4}
        flex={1}
        multiline
        textAlignVertical="top"
        onChangeText={setDescription}
      />
      <Button
        buttonText="Save"
        color={"gray.700"}
        bgColor={"secondary.200"}
        bgPressed={"secondary.300"}
        mt={4}
        onPress={() => handleCreateBook()}
        isLoading={isLoading}
      />
    </VStack>
  );
};

export default AddBookForm;
