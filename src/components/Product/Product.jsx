import { Box, Flex, Stack } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { apiCallGetData } from "../../Redux/Data/Data";
import Filter from "../Filter/Filter";
import Ma from "./Card";

const Product = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store.data);
  const [queryParams, setSearchParams] = useSearchParams();
  const setCat = () => {
    dispatch(apiCallGetData(queryParams.get('category')));
  }
  useEffect(()=> {
    setCat();
  }, [queryParams.get('category')])
  return (
    <Stack direction={["column", "row"]} borderTop={"1px solid #d8d8d8"} mt={2}>
      <Filter />
      <Box flex={4.5}>
        <Flex
          mt={6}
          gap={14}
          // bg={useColorModeValue("#F9FAFB", "gray.600")}
          maxW="100%"
          justifyContent="center"
          flexWrap="wrap"
        >
          {data && data.map((product) => <Ma {...product} key={product._id} />)}
        </Flex>
      </Box>
    </Stack>
  );
};

export default Product;
