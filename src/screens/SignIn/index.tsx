import React, { ReactElement } from "react";
import { Heading, Icon, VStack, useTheme, Image } from "native-base";
import Input from "../../components/Input";
import { Envelope, Key } from "phosphor-react-native";

import Logo from "../../assets/book-logo.png";

const SignIn = (): ReactElement => {
  const { colors } = useTheme();

  return (
    <VStack flex={1} bg={"gray.700"} alignItems={"center"} px={8} py={24}>
      <Image
        source={Logo}
        alt="Logo"
        resizeMode="contain"
        size={"2xl"}
        mb={8}
      />

      <Input
        placeholder="Type your mail"
        keyboardType="email-address"
        autoCapitalize="none"
        InputLeftElement={
          <Icon
            as={<Envelope size={24} color={colors.gray[400]} />}
            size={24}
            ml={3}
          />
        }
        autoCorrect={false}
        mb={4}
      />
      <Input
        placeholder="Type your password"
        secureTextEntry
        autoCapitalize="none"
        InputLeftElement={
          <Icon
            as={<Key size={24} color={colors.gray[400]} />}
            size={24}
            ml={3}
          />
        }
        autoCorrect={false}
        mb={4}
      />
    </VStack>
  );
};

export default SignIn;
