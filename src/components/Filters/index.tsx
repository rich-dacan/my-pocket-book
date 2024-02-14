import { Button, IButtonProps, Text, useTheme } from "native-base";
import React, { ReactElement } from "react";

type FilterProps = IButtonProps & {
  children?: ReactElement;
  title: string;
  isActive?: boolean;
  type: "reading" | "finished";
  onPress?: () => void;
};

const Filter = ({
  title,
  type,
  isActive = false,
  ...rest
}: FilterProps): ReactElement => {
  const { colors } = useTheme();

  const colorType =
    type === "reading" ? colors.secondary[100] : colors.secondary[200];

  return (
    <Button
      variant="outline"
      borderWidth={isActive ? 1 : 0}
      borderColor={colorType}
      bgColor={isActive ? `${colorType}` : "transparent"}
      flex={1}
      size={"sm"}
      {...rest}
    >
      <Text
        color={isActive ? "#000" : "gray.300"}
        fontSize={"xs"}
        textTransform={"uppercase"}
      >
        {title}
      </Text>
    </Button>
  );
};

export default Filter;
