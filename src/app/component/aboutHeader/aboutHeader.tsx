import { Box, Container, Typography, Grid } from "@mui/material";
import HeaderAboutDesktopbg from "../../images/aboutbgheader.png";
import Lane from "../../images/lane.png";
import Image from "next/image";
import ButtonIcon from "../btn/btn";
export default function AboutHeader() {
  return (
    <>
      <Box
        sx={{
          backgroundImage: {
            md: `url(${HeaderAboutDesktopbg.src})`,
            xs: `url(${HeaderAboutDesktopbg.src})`,
          },
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          paddingTop: "100px",
        }}>
        <Container>
          <Grid container spacing={2}>
            <Grid md={6} xs={12}>
              <Box mt={20} ml={10}>
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
            <Grid md={6} xs={12}>
              <Box>
                <Image src={Lane} height={453} width={553} alt="lane" style={{mixBlendMode:"luminosity"}} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
