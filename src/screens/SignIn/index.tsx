import React, { ReactElement, useState } from "react";
import { Heading, Icon, VStack, useTheme, Image } from "native-base";
import { useNavigation } from "@react-navigation/native";

import Input from "../../components/Input";
import Logo from "../../assets/book-logo.png";
import Button from "../../components/Button";
import { Envelope, Key } from "phosphor-react-native";

const SignIn = (): ReactElement => {
  const [loading, setLoading] = useState<boolean>(false);

  const { colors } = useTheme();
  const navigation = useNavigation();

  const handleSignIn = () => {
    setLoading(true);

    navigation.navigate("home");
  };

  return (
    <VStack flex={1} bg={"gray.700"} alignItems={"center"} px={8} py={24}>
      <Image source={Logo} alt="Logo" resizeMode="contain" size={"2xl"} />

      <Heading color={"#fff"} mb={8}>
        Welcome back!
      </Heading>

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

      <Button
        buttonText="Sign In"
        color={"#fff"}
        w={"full"}
        isLoading={loading}
        onPress={() => handleSignIn()}
      />
    </VStack>
  );
};

export default SignIn;
