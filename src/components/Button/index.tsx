import { Button as ButtonNativeBase, IButtonProps, Heading } from "native-base";
import React, { ReactElement } from "react";

type ButtonProps = IButtonProps & {
  buttonText: string;
  color?: string;
};

const Button = ({ buttonText, color, ...rest }: ButtonProps): ReactElement => {
  return (
    <ButtonNativeBase
      bg={"primary.700"}
      h={12}
      fontSize={"sm"}
      rounded={"sm"}
      _pressed={{ bg: "primary.400" }}
      {...rest}
    >
      <Heading color={color || "#000"} fontSize={"md"}>
        {buttonText}
      </Heading>
    </ButtonNativeBase>
  );
};

export default Button;
