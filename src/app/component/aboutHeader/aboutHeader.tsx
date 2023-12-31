import { Box, Container, Typography, Grid } from "@mui/material";
import HeaderAboutDesktopbg from "../../images/aboutbgheader.png";
import HeaderAboutMobile from "../../images/aboutbgimgmobile.png";
import Lane from "../../images/lane.png";
import LaneMobile from "../../images/laneMobile.png";
import Image from "next/image";
import ButtonIcon from "../btn/btn";
export default function AboutHeader() {
  return (
    <>
      <Box>
          
         <Box display={{md:"block", xs:"none"}}>
         <Image priority src={HeaderAboutDesktopbg} layout="fill" objectFit="cover" objectPosition="center" alt="background image"
         style={{zIndex:"0", }} />

         </Box>
         <Box display={{md:"none", xs:"block"}} height={200}>
         <Image priority src={HeaderAboutMobile} width={899} height={345} objectFit="cover" objectPosition="center" alt="background image"
         style={{zIndex:"0", }} />

         </Box>
         
        <Container>
          <Grid container spacing={2} sx={{zIndex:"1", position:"relative"}} mt={{md:23, xs:-15}}>
            <Grid md={6} xs={12}>
              <Box mt={{md:20, xs:10}} ml={{md:10, xs:3}} paddingBottom={{md:0, xs:10}}>
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
                  Production Designer
                </Typography>
                <ButtonIcon/>
              </Box>
            </Grid>
            <Grid md={6} xs={12} display={{md:"block", xs:"none"}}>
              <Box>
                <Image src={Lane} height={453} width={553} alt="lane" style={{mixBlendMode:"luminosity"}}  priority />
              </Box>
            </Grid>
          </Grid>
          

        </Container>
      </Box>
      <Container>
      <Box display={"flex"} justifyContent={"center"} mt={10} sx={{display:{md:"none", xs:"flex"}}}>
            <Image src={LaneMobile} height={247} width={276} alt="" priority/>
          </Box>
      </Container>
    </>
  );
}
