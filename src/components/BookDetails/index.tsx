import React, { ElementType, ReactElement } from "react";
import { HStack, Text, VStack, useTheme } from "native-base";
import { IconProps } from "phosphor-react-native";

type BookDetailsProps = {
  title: string;
  description: string;
  icon: ElementType<IconProps>;
};

const BookDetails = ({
  title,
  description,
  icon: Icon,
}: BookDetailsProps): ReactElement => {
  const { colors } = useTheme();

  return (
    <VStack bg={"gray.600"} p={5} mt={6} rounded={"sm"}>
      <HStack alignItems={"center"} mb={4}>
        <Icon color={colors.secondary[300]} />
        <Text color={"gray.300"} fontSize={"sm"} ml={2}>
          {title}
        </Text>
      </HStack>

      {description && (
        <Text color={"gray.300"} fontSize={"sm"}>
          {description}
        </Text>
      )}
    </VStack>
  );
};

export default BookDetails;
