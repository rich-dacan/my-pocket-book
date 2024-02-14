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
        borderBottomColor={"secondary.100"}
        pb={4}
      >
        <Image source={Logo} alt="Logo" resizeMode="contain" size={"sm"} />

        <IconButton
          icon={<SignOut size={28} color={colors.secondary[100]} />}
          onPress={() => {
            console.log("Sign Out");
          }}
        />
      </HStack>

      <VStack>
        <HStack justifyContent={"space-between"} alignItems={"center"} mt={8}>
          <Heading color={"#fff"} fontSize={"2xl"}>
            My Books
          </Heading>
          <Text color={"gray.400"} fontSize={"sm"}>
            {books.filter(book => book.status === statusSelected).length} books
          </Text>
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
        )}

        <Button
          buttonText="Add Book"
          color={colors.gray[700]}
          bgColor={colors.secondary[200]}
          bgPressed={colors.secondary[300]}
          marginTop={8}
          onPress={() => {
            console.log("Add Book");
          }}
        />
      </VStack>
    </VStack>
  );
};

export default Home;
