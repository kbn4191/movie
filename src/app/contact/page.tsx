import { Box, Container, Typography, Grid, Button } from "@mui/material";
import HeaderAboutDesktopbg from "../../../src/app/images/aboutbgheader.png";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import Form from "../component/form/form";
import FormMobile from "../component/form/formMobile";


export default function Contact() {
    
    return(
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
          paddingTop: "70px",
          paddingBottom:{
            md:"100px",
            xs:"30px"
          }
        }}>
            <Container>
            <Grid container spacing={2}>
            <Grid md={5} xs={12}>
              <Box mt={{md:20, xs:10}} ml={{md:10, xs:3}} paddingBottom={{md:0, xs:10}}>
                <Typography color={"#FFFFFF"} fontSize={32} fontWeight={600}>
                Get In Touch
                </Typography>
                <Typography color={"#fff"} mt={5}>
                Always open to discussing new productions. For bookings please reach out to my agent below or use the contact form.
                </Typography>
                <Box mt={4}>
                <Typography color={"#fff"}>Agent: Jody Goldwasser</Typography>
                <Typography color={"#fff"} mt={1}>Integral Artists (Canada)</Typography>
                </Box>
                <Box mt={3}>
                <Box display={"flex"} alignItems={"center"} gap={2} mb={3}>
                        <Box height={35} width={35} bgcolor={"#F5F5F5"} borderRadius={2} 
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        >
                            <CallIcon sx={{color:"#2C3E50"}}/>
                            
                        </Box>
                        <Typography color={"#F5F5F5"}>(647) 265-9100</Typography>
                    </Box>
                    <Box display={"flex"} alignItems={"center"} gap={2} mb={3}>
                        <Box height={35} width={35} bgcolor={"#F5F5F5"} borderRadius={2} 
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        >
                            <EmailIcon sx={{color:"#2C3E50"}}/>
                            
                        </Box>
                        <Typography color={"#F5F5F5"}>jody@integralartists.com</Typography>
                    </Box>
                </Box>
                </Box>
                </Grid>
                <Grid md={7} xs={12}>
              <Box mt={{md:20, xs:10}} ml={{md:10, xs:3}} paddingBottom={{md:0, xs:10}} display={{md:"block", xs:"none"}}>
            <Form/>
   
                </Box>
                </Grid>
                </Grid>
             
            </Container>
            </Box>
            <Box my={10} display={{md:"none", xs:"block"}}>
                <Container>
                    <FormMobile/>
                </Container>
                </Box>
        </>
    )
    
}