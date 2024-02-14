import React, { ReactElement } from "react";
import { IInputProps, Input as NativeBaseInput } from "native-base";

const Input = ({ ...rest }: IInputProps): ReactElement => {
  return (
    <NativeBaseInput
      bg={"gray.800"}
      h={12}
      fontFamily={"body"}
      color={"white"}
      placeholderTextColor={"gray.400"}
      _focus={{
        borderColor: "yellow.500",
        borderWidth: 1,
        bg: "gray.800",
      }}
      {...rest}
    ></NativeBaseInput>
  );
};

export default Input;
