import React, { ReactElement } from "react";
import { Center, FlatList, Text, useTheme } from "native-base";
import Book, { BookProps } from "../Book";
import { ChatTeardropText } from "phosphor-react-native";

type Props = {
  data: BookProps[];
  statusSelected: string;
};

const BooksList = ({ data, statusSelected }: Props): ReactElement => {
  const { colors } = useTheme();

  return (
    <FlatList
      data={data.filter(book => book.status === statusSelected)}
      // data={books}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <Book data={item} />}
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
