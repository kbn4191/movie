import { Box, Container, Typography, Grid } from "@mui/material";
export default function AboutBody() {
    const brief =`Glen Charles Landry has worked in film, tv or theatres for over 20 years. 
    He is a graduate of the prestigious National Theatre School of Canada. On his very first 
    film experience, in 1998, he worked as the assistant to basically everyone on the now renowned 
    Canadien director Rodrigue Jean very first indy feature film “Full Blast”. The very next year, 
    Glen was the production designer of one of the very first ever french kid show aired on TFO, 
    “Lunatique” shot in New-Brunswick. The series was written by Paul Bossé and directed by Christ 
    LeBlanc
    
    `;
    const brifParagraphy =`Glen Charles is very active and always looking for the next project to bring his skills and joy 
    to vivre too. In the past 3 years alone, Glen Charles has designed 1 feature film, 3 MOWs, 2 web 
    series and 2 short films. Witches in the Wood, written by Christopher Borrelli (of the Fast and 
        the Furious franchise) and directed by Jordan Barker was a dark suspense thriller well received 
        by the public. His three MOWs with Champlain Media, A Christmas Break, A Wedding Ring and The 
        Princess and the Bodyguard, have gone on to be viewed here and abroad in Europe and Asia. 
        Glen Charles' design on season one of Château Laurier garnered him some awards and nominations
         in festivals around the world and season 2 of Château Laurier is set to come out this spring.
    Glen Charles is dynamic, hands on and willing to pitch in to get the shot as he would say. He is 
    often called on in the industry to be a fixer because of his knowledge and calm temperament.`
    return(
        <>
        <Container>
            <Box
            bgcolor={"#2ECC71"}
            color={"#ECF0F1"}
            width={291}
            height={48}
            mt={10}
            display={"flex"}
            justifyContent={"Center"}
            alignItems={"Center"}
            >
                <Typography
                fontSize={20}
                fontWeight={600}
                >About</Typography>
            </Box>

            <Typography color={"#2C3E50"} mt={5} lineHeight={"190%"}>
                {brief}
            </Typography>
            <Typography color={"#2C3E50"} mt={5}  lineHeight={"190%"}>
                {brifParagraphy}
            </Typography>
        </Container>
        </>

    )
    
}