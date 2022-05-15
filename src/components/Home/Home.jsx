import { Box, Flex, Grid, GridItem, Image } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import LargeWithAppLinksAndSocial from '../Footer/Footer';
import Component from './CardScroller';
const Home = () => {
    const imgArr = [
        'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/2112f5fa-70ff-48e9-801d-5e3f0911d7d71651897098404-Sale-Is-Live_02.jpg',
        'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/f9453219-4814-46cb-9500-783c03f19f1a1651897098411-Sale-Is-Live_03.jpg',
        'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/38198e6d-ad6d-4751-af80-cf685b1cabfb1651897098417-Sale-Is-Live_04.jpg',
        'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/e7fd4595-f282-491f-b0d1-9df8f6fe5bf01651897098424-Sale-Is-Live_05.jpg',
        
        'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/58c62616-99d1-4f0c-8029-5e7190eb3eb21651897098430-Sale-Is-Live_06.jpg',
        'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/13c3a6d2-e005-4dc6-ad48-c4ae974b01941651897098436-Sale-Is-Live_07.jpg',
        'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/69d0ce99-6fbf-46ec-8f3b-dd69d8e358811651897098442-Sale-Is-Live_08.jpg',
        'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/cf949d18-5de7-4b6c-b2e3-25206b9b597a1651897098448-Sale-Is-Live_09.jpg',
        
        'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/df793939-d769-43d1-a08b-9cf98422c31e1651897098454-Sale-Is-Live_10.jpg',
        'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/025ccb0d-1f9a-4459-94af-1a8c8b9153041651897098460-Sale-Is-Live_11.jpg',
        'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/fc4fb14a-4427-4454-baad-aa2d5e24d9231651897098466-Sale-Is-Live_12.jpg',
        'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/8db13338-1c92-461a-beba-7a117e70c8891651897098472-Sale-Is-Live_13.jpg'
    ];
    const tShirts = [
        {
            img : "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/2/19ec05fd-2288-4d94-826e-7c8e980ed90a1651475194672-T-Shirts--Men-.jpg",
            category : "t-shirt",
            priceUnder : "499",
        },
        {
            img : "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/2/de547809-394d-4a2d-93c3-f63f5941710a1651475194235-Flats-_-Heels.jpg",
            category : "t-shirt",
            priceUnder : "999",
        },
        {
            img : "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/2/24adafbb-843e-40b5-9da0-03704825c0db1651475194171-Beauty-Essentials.jpg",
            category : "t-shirt",
            priceUnder : "799",
        },
        {
            img : "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/2/aaa1f4eb-faf3-41ff-b807-dd05a92755311651475194162-Backpacks.jpg",
            category : "t-shirt",
            priceUnder : "1099",
        },
        {
            img : "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/2/25a1ed95-5f3e-449a-8ca4-ca7128fbda241651475194660-Trousers.jpg",
            category : "t-shirt",
            priceUnder : "899",
        },
        {
            img : "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/2/032793cd-1d10-4c96-abcc-c11ca8b625a51651475194630-Trackpants.jpg",
            category : "t-shirt",
            priceUnder : "999",
        },
        {
            img : "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/2/bc9e2b7d-a685-4806-95dd-fa27dd15df3d1651475194279-Home-Decor.jpg",
            category : "t-shirt",
            priceUnder : "799",
        },
        {
            img : "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/2/bc9e2b7d-a685-4806-95dd-fa27dd15df3d1651475194279-Home-Decor.jpg",
            category : "t-shirt",
            priceUnder : "999",
        },
        {
            img : "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/2/cc2363fd-2a3d-4258-b00f-e34422db30a71651475194215-Dresses-Women.jpg",
            category : "t-shirt",
            priceUnder : "799",
        },
        {
            img : "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/2/bbe86259-5883-475e-82a5-da813b38e02a1651475194382-Kurta-Sets-Women.jpg",
            category : "t-shirt",
            priceUnder : "899",
        },

    ]
    const shoes = [
        {
            img : "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/5/6008de69-48b7-407e-86a9-a58d0cbe716b1651730784697-Nike.jpg",
            category : "shoes",
            priceUnder : "499",
        },
        {
            img : "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/5/2a26eebe-28ad-4f64-98df-58cdcb721c121651730784724-Puma.jpg",
            category : "shoes",
            priceUnder : "499",
        },
        {
            img : "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/5/16a31146-0423-4066-b1c2-e47a9241bfae1651730784531-ADIDAS.jpg",
            category : "shoes",
            priceUnder : "499",
        },
        {
            img : "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/5/d2d9a39c-d1e5-42d6-9d55-8e635b29dd011651730784750-Skechers.jpg",
            category : "shoes",
            priceUnder : "499",
        },
        {
            img : "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/5/413d73ba-72b4-4990-9645-eb156c5cfb591651730784741-Reebok.jpg",
            category : "shoes",
            priceUnder : "499",
        },
        {
            img : "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/5/413d73ba-72b4-4990-9645-eb156c5cfb591651730784741-Reebok.jpg",
            category : "shoes",
            priceUnder : "499",
        },
        {
            img : "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/5/a875194d-27c8-48dd-8a9c-593a2a9db9ad1651730784768-Tommy_Hilfiger_Accessories.jpg",
            category : "shoes",
            priceUnder : "499",
        }
    ]
    const brandPrices = [
        {   
            img : "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/5/6c4fd229-7319-46c9-a323-9270b2ad10e01651730302287-Jack_-_Jones.jpg",
            brand : "",
            off : "",
        },
        {   
            img : "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/5/60a3cf47-a8c9-4aed-9927-afcb6074bec11651730302307-Levis.jpg",
            brand : "",
            off : "",
        },
        {   
            img : "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/5/b4e9603a-ba69-4366-ae15-a862396346df1651730302504-USPA.jpg",
            brand : "",
            off : "",
        },
        {   
            img : "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/5/e9c5aef6-3e45-4119-858b-67942e57021f1651730301751-_1.jpg",
            brand : "",
            off : "",
        },
        {   
            img : "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/5/84e400e2-998d-4c1e-a0cb-9e7cf10abd191651730302150-Biba.jpg",
            brand : "",
            off : "",
        },
        {   
            img : "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/5/d446614b-fa26-450a-b9ef-d47f1d71367d1651730302195-F21.jpg",
            brand : "",
            off : "",
        },
        {   
            img : "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/5/d446614b-fa26-450a-b9ef-d47f1d71367d1651730302195-F21.jpg",
            brand : "",
            off : "",
        },
        {   
            img : "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/5/8cc8e7c3-a224-4e8e-96be-353b22240d371651730302141-_49.jpg",
            brand : "",
            off : "",
        },
        {   
            img : "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/5/21624b7f-dfa0-4d55-b7c8-90109e7a20741651730302317-Mango.jpg",
            brand : "",
            off : "",
        },
        {   
            img : "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/5/a39a7ee1-a4a9-44cf-9a1a-f4ceae9a6bd01651730302058-_40.jpg",
            brand : "",
            off : "",
        },
        {   
            img : "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/5/1d2fa7a1-2589-4003-ad12-bae2b2f77b091651730301998-_33.jpg",
            brand : "",
            off : "",
        },
        {   
            img : "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/5/1d2fa7a1-2589-4003-ad12-bae2b2f77b091651730301998-_33.jpg",
            brand : "",
            off : "",
        }
    ]
    return (
        <>
            <Link to={'/product'}>
                <Grid w='100%'
                // h='200px'
                templateRows='repeat(3, 1fr)'
                templateColumns='repeat(4, 1fr)'
                >
                    {
                        imgArr && imgArr.map((item, index)=>{
                            return <GridItem key={index}>
                                <Image src={item} />
                            </GridItem>
                    
                        })
                    }
                </Grid>
            </Link>
            <Box width='full' m='auto'>
                <Component />
            </Box>
            <Box mt={4}>
                <Image src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/1e599d37-1ed6-4e39-9057-ffb4065173b51651897264796-Unbelievable-Deals.jpg' />
            </Box>
            <Flex w="full" flexWrap='wrap' justifyContent='center'>
                {
                    tShirts && tShirts.map((item, index)=>{
                        return <Box boxSize="250px" key={index}>
                            <Image src={item.img}  />

                        </Box>
                    })
                }
            </Flex>
            <Box mt={4}>
                <Image src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/0b611aab-e2ba-4a03-9910-146e9396a03f1651897264778-Lit-Brands-At-The-Hottest-Prices.jpg' />
            </Box>
            <Flex>
                {
                    shoes && shoes.map((item, index)=>(
                        <Box key={index} flexWrap='wrap'>
                            <Image src={item.img}  />
                        </Box>
                    ))
                }
            </Flex>
            <Box mt={4}>
                <Image src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/4f8a8f56-e3d2-4a91-830b-98c6e4069b461651897264784-Loving-These-Brands.jpg' />
            </Box>
            <Flex flexWrap='wrap' w="full" 
            justify="center"
            >
                {
                    brandPrices && brandPrices.map((item, index)=>(
                        <Box key={index}  maxW='200px' h="340px" mb={2}>
                            <Image src={item.img} size='full'  />
                        </Box>
                    ))
                }
            </Flex>
            <LargeWithAppLinksAndSocial/>
        </>
    )
}

export default Home