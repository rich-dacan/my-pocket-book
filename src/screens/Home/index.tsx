import React, { ReactElement, useState } from "react";
import {
  Center,
  FlatList,
  HStack,
  Heading,
  IconButton,
  Image,
  Text,
  VStack,
  useTheme,
} from "native-base";

import Logo from "../../assets/book-logo.png";
import { ChatTeardropText, SignOut } from "phosphor-react-native";
import Filter from "../../components/Filters";
import Book, { BookProps } from "../../components/Book";
import Button from "../../components/Button";
import Loading from "../../components/Loading";

const Home = (): ReactElement => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [statusSelected, setStatusSelected] = useState<"reading" | "finished">(
    "reading"
  );
  const [books, setBooks] = useState<BookProps[]>([
    {
      id: "1",
      title: "Harry Potter and the Philosopher's Stone",
      description:
        "Harry Potter has no idea how famous he is. That's because he's being raised by his miserable aunt and uncle who are terrified Harry will learn that he's really a wizard, just as his parents were.",
      when: "2021-09-29T00:00:00.000Z",
      status: "reading",
    },
    {
      id: "2",
      title: "Harry Potter and the Chamber of Secrets",
      description:
        "The Dursleys were so mean and hideous that summer that all Harry Potter wanted was to get back to the Hogwarts School for Witchcraft and Wizardry.",
      when: "2021-09-29T00:00:00.000Z",
      status: "reading",
    },
    {
      id: "3",
      title: "Harry Potter and the Prisoner of Azkaban",
      description:
        "For twelve long years, the dread fortress of Azkaban held an infamous prisoner named Sirius Black.",
      when: "2021-09-29T00:00:00.000Z",
      status: "finished",
    },
  ]);

  const { colors } = useTheme();

  return (
    <VStack flex={1} bg={"gray.800"} px={8} py={20}>
      <HStack
        w="full"
        h={18}
        justifyContent="space-between"
        alignItems={"center"}
        bg={"gray.800"}
        borderBottomWidth={1}
        borderBottomStyle={"solid"}
        borderBottomColor={"gray.700"}
        // pt={6}
        pb={8}
        px={6}
      >
        <Image source={Logo} alt="Logo" resizeMode="contain" size={"sm"} />

        <IconButton
          icon={<SignOut size={28} color={colors.secondary[100]} />}
          onPress={() => {
            console.log("Sign Out");
          }}
        />
      </HStack>

      <HStack space={3} my={8}>
        <Filter
          title="Reading"
          type="reading"
          onPress={() => setStatusSelected("reading")}
          isActive={statusSelected === "reading"}
        />
        <Filter
          title="Finished"
          type="finished"
          onPress={() => setStatusSelected("finished")}
          isActive={statusSelected === "finished"}
        />
      </HStack>

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={books.filter(book => book.status === statusSelected)}
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
      )}

      <Button
        marginTop={8}
        buttonText="Add Book"
        bgColor={colors.secondary[100]}
        bgPressed={colors.secondary[200]}
        onPress={() => {
          console.log("Add Book");
        }}
      />
    </VStack>
  );
};

export default Home;
