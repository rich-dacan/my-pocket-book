import React, { ReactElement } from "react";
import { Center, FlatList, Text, useTheme } from "native-base";
import Book, { BookProps } from "../Book";
import { ChatTeardropText } from "phosphor-react-native";

type Props = {
  data: BookProps[];
  statusSelected: string;
  handleOpenDetails: (id: string) => void;
};

const BooksList = ({
  data,
  statusSelected,
  handleOpenDetails,
}: Props): ReactElement => {
  const { colors } = useTheme();

  return (
    <FlatList
      // data={books}
      data={data.filter(book => book.status === statusSelected)}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <Book data={item} onPress={() => handleOpenDetails(item.id)} />
      )}
      contentContainerStyle={{ paddingBottom: 100 }}
      ListEmptyComponent={() => (
        <Center flex={1} pt={38}>
          <ChatTeardropText size={64} color={colors.gray[400]} />
          <Text color={"gray.400"} fontSize={"lg"} mt={6}>
            {statusSelected === "reading"
              ? "No books to read"
              : "No books finished"}
          </Text>
        </Center>
      )}
    />
  );
};

export default BooksList;
