import React, { ReactElement } from "react";
import {
  Box,
  Circle,
  HStack,
  IPressableProps,
  Pressable,
  Text,
  VStack,
  useTheme,
} from "native-base";

import { ClockAfternoon, Hourglass, CheckCircle } from "phosphor-react-native";
import { dateFormatBRString } from "../../utils/dates";

export type BookProps = {
  id: string;
  title: string;
  description: string;
  when: string;
  status: "reading" | "finished";
};

type Props = IPressableProps & {
  data: BookProps;
};

const Book = ({ data, ...rest }: Props): ReactElement => {
  const { colors } = useTheme();

  const statusColor =
    data.status === "reading" ? colors.secondary[100] : colors.secondary[400];

  return (
    <Pressable {...rest}>
      <HStack
        bg={"gray.800"}
        mb={4}
        alignItems={"center"}
        justifyContent={"space-between"}
        rounded={"sm"}
        overflow={"hidden"}
      >
        <Box h={"full"} w={2} bg={statusColor}></Box>

        <VStack flex={1} my={5} ml={5}>
          <Text color={"#fff"} fontSize={"md"} fontWeight={"bold"}>
            {data.title}
          </Text>
          <HStack mt={1} alignItems={"center"}>
            <ClockAfternoon size={16} color={colors.gray[400]} />
            <Text ml={1} color={colors.gray[400]} fontSize={"sm"}>
              {dateFormatBRString(data.when)}
            </Text>
          </HStack>
          {/* <Text color={"gray.400"} fontSize={"sm"}>
            {data.description}
          </Text> */}
        </VStack>

        <Circle bg={"gray.600"} h={12} w={12} mr={5} alignItems={"center"}>
          {data.status === "finished" ? (
            <CheckCircle size={24} color={colors.secondary[400]} />
          ) : (
            <Hourglass size={24} color={colors.yellow[500]} />
          )}
        </Circle>
      </HStack>
    </Pressable>
  );
};

export default Book;
