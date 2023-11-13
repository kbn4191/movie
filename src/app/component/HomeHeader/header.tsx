import { Box, Container, Typography, Grid } from "@mui/material";
import HeaderImg from "../../images/HomeHeaderImg.png";
import HeaderMobileBg from "../../images/HomeMobileHeaderBg.png";
import ButtonIcon from "../btn/btn";
import SouthIcon from "@mui/icons-material/South";
import Image from "next/image";
export default function HomeHeader() {
  return (
    <>
      <Box>
         <Image priority src={HeaderImg} layout="fill" objectFit="cover" objectPosition="center" alt="background image"
         style={{zIndex:"0",}}
         
         />
        <Container >
          <Box
            sx={{
              marginLeft: {
                md: 10,
                xs: 3,
              },
              position:"relative",
              zIndex:"1"
            }} mt={40}>
            <Grid container spacing={2}>
              <Grid md={6} xs={12}>
                <Box>
                  <Typography
                    fontWeight={700}
                    lineHeight={"102.023%"}
                    color={"#3498DB"}
                    sx={{
                      fontSize: {
                        md: 60,
                        xs: 32,
                      },
                      width: {
                        md: 432,
                        xs: "100%",
                      },
                    }}>
                    Glen Charles Landry
                  </Typography>
                  <Typography
                    color={"#ECF0F1"}
                    mt={2}
                    sx={{
                      width: {
                        md: 400,
                        xs: "100%",
                      },
                    }}>
                    is a Production Designer working on Film and TV Series
                    productions. Based in Toronto, Canada.
                  </Typography>

                  <ButtonIcon />
                </Box>
              </Grid>
              <Grid
                md={6}
                sx={{
                  display: {
                    md: "block",
                    xs: "none",
                  },
                }}>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  mt={20}>
                  <Box
                    height={68}
                    width={68}
                    borderRadius={30}
                    bgcolor={"#ECF0F1"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    color={"#3498DB"}
                    sx={{
                      animation:"bounce 1s infinite"
                      ,
        '@keyframes bounce': {
          '0%, 20%, 50%, 80%, 100%': {
            transform: 'translateY(0)',
          },
          '40%': {
            transform: 'translateY(-20px)',
          },
          '60%': {
            transform: 'translateY(-10px)',
          },
        },
                    }}
                    >
                    <SouthIcon />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}
