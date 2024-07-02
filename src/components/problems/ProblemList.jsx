import { Button, Flex, ListItem, Text, useToast } from "@chakra-ui/react";
import { IconEyeCode, IconTableShortcut } from "@tabler/icons-react";
import PropTypes from "prop-types";

export default function ProblemList({
  number,
  toastDesc,
  onClickDisplay,
  children,
}) {
  const toast = useToast();

  return (
    <ListItem mb="16px">
      <Text>{children}</Text>
      <Flex flexWrap="wrap" gap="4px">
        <Button
          onClick={onClickDisplay}
          leftIcon={<IconTableShortcut />}
          size="sm"
          colorScheme="green"
        >
          Display
        </Button>
        <Button
          leftIcon={<IconEyeCode />}
          onClick={() =>
            toast({
              title: `SQL Code: Problem ${number}`,
              ...toastDesc,
              status: "info",
              duration: 15000,
              isClosable: true,
            })
          }
          size="sm"
          colorScheme="blue"
        >
          Show Code
        </Button>
      </Flex>
    </ListItem>
  );
}

ProblemList.propTypes = {
  number: PropTypes.number.isRequired,
  toastDesc: PropTypes.object.isRequired,
  onClickDisplay: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
