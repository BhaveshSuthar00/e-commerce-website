import { Box, Checkbox, CheckboxGroup, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { brand, category, discount } from "../../common/constants";
const dp = {
  py: 3,
  ml: 6,
  borderBottom: "1px solid #d8d8d8",
};
const headerText = {
  fontWeight: "bold",
};
const Filter = () => {
  const { data } = useSelector(
    (store) => store.Data
  );
  return (
    <>
      <Box flex={1} borderRight={"1px solid #d8d8d8"}>
        <Box {...dp}>
          <Text as="h3" {...headerText}>
            Filters
          </Text>
        </Box>
        <Box {...dp}>
          <Box>
            <Text as="h3" {...headerText}>
              CATEGORIES
            </Text>
          </Box>
          <Box>
            <CheckboxGroup>
              <Stack spacing={[1, 4]}>
                {category &&
                  category.map((item) => (
                    <Checkbox key={uuid()}>{item}</Checkbox>
                  ))}
              </Stack>
            </CheckboxGroup>
          </Box>
        </Box>
        <Box {...dp}>
          <Box>
            <Text as="h3" {...headerText}>
              BRAND
            </Text>
          </Box>
          <Box>
            <CheckboxGroup>
              <Stack spacing={[1, 4]}>
                {brand &&
                  brand.map((item) => <Checkbox key={uuid()}>{item}</Checkbox>)}
              </Stack>
            </CheckboxGroup>
          </Box>
        </Box>
        <Box {...dp}>
          <Box>
            <Text as="h3" {...headerText}>
              DISCOUNT
            </Text>
          </Box>
          <Box>
            <CheckboxGroup>
              <Stack spacing={[1, 4]}>
                {discount &&
                  discount.map((item) => (
                    <Checkbox key={uuid()}>{item}% and above</Checkbox>
                  ))}
              </Stack>
            </CheckboxGroup>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Filter;
