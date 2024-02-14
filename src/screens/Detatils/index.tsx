import React, { ReactElement } from "react";
import { VStack, useTheme } from "native-base";
import Header from "../../components/Header";
import { useNavigation, useRoute } from "@react-navigation/native";
import { BookProps } from "../../components/Book";
import BookDetails from "../../components/BookDetails";
import { CheckCircle, ClipboardText } from "phosphor-react-native";
import Button from "../../components/Button";

type RouteParams = {
  bookId: string;
};

type BookDetails = BookProps & {
  title?: string;
  description?: string;
  closed?: string;
};

const Details = (): ReactElement => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const { bookId } = route.params as RouteParams;

  return (
    <VStack flex={1} bg={"gray.800"} p={6}>
      <Header title={"Book details"} />

      <BookDetails
        title={"Title"}
        description={"Harry Potter and the Philosopher's Stone"}
        icon={CheckCircle}
      />
      <BookDetails
        title={"Description"}
        description={
          "The Dursleys were so mean and hideous that summer that all Harry Potter wanted was to get back to the Hogwarts School for Witchcraft and Wizardry."
        }
        icon={ClipboardText}
      />
      <Button
        buttonText="Mark as finished"
        color={colors.gray[700]}
        bgColor={colors.secondary[200]}
        bgPressed={colors.secondary[300]}
        marginTop={8}
        onPress={() => {
          navigation.navigate("add-book");
        }}
      />
    </VStack>
  );
};

export default Details;
