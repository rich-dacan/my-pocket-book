import React, { ReactElement } from "react";
import {
  HStack,
  IconButton,
  StyledProps,
  Text,
  VStack,
  useTheme,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import { CaretLeft } from "phosphor-react-native";

type HeaderProps = StyledProps & {
  title: string;
};

const Header = ({ title, ...rest }: HeaderProps): ReactElement => {
  const navigate = useNavigation();
  const { colors } = useTheme();

  const handleGoBack = () => {
    navigate.goBack();
  };

  return (
    <HStack
      w={"full"}
      h={"50px"}
      justifyContent={"space-between"}
      alignItems={"center"}
      bg={"gray.800"}
      px={2}
      mt={28}
      {...rest}
    >
      <IconButton
        icon={<CaretLeft size={28} color={colors.gray[300]} />}
        color={colors.gray[300]}
        onPress={handleGoBack}
      />

      <Text
        color={"#fff"}
        fontSize={"lg"}
        fontWeight={"bold"}
        textAlign={"center"}
        flex={1}
      >
        {title}
      </Text>
    </HStack>
  );
};

export default Header;
