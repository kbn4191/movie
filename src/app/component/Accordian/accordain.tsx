'use client'
import * as React from 'react';
import { Box, Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { CV } from '../aboutHeader/abouCvData';
import { ProductionWork } from '../aboutHeader/productionDesignWork';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div style={{marginBottom:"120px"}}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography color={"#0286DF"} fontSize={20} fontWeight={600}>CV</Typography>
        </AccordionSummary>
        <AccordionDetails>
     {
        CV.map((cv)=>(
            <Box color={"#2C3E50"} padding={"20px 0px"}>
               
            <Grid container spacing={3} key={cv.id}>
                  <Grid md={3} xs={12}>
                    <Box mt={5}>
                      <Typography ml={3} color={"#606569"} fontWeight={550}lineHeight={"180%"} fontSize={15}>
                       {cv.Portfolio}
                      </Typography>
                   
                    </Box>
                    </Grid>
                    <Grid md={9} xs={12}>
                    <Box mt={5} >
                    <Typography ml={3} lineHeight={"180%"}>
                 {cv.Description}
            
                </Typography>
                    </Box>
                    </Grid>
                    </Grid>
            
            </Box>
        ))
     }
         
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography color={"#0286DF"} fontSize={20} fontWeight={600}>PRODUCTION DESIGN WORK</Typography>
        </AccordionSummary>
        <AccordionDetails>
     {
        ProductionWork.map((production)=>(
            <Box color={"#2C3E50"} padding={"20px 0px"}>
               
            <Grid container spacing={3} key={production.id}>
                  <Grid md={3} xs={12}>
                    <Box mt={5}>
                      <Typography ml={3} color={"#606569"} fontWeight={600}lineHeight={"180%"} fontSize={15}>
                       {production.Portfolio}
                      </Typography>
                   
                    </Box>
                    </Grid>
                    <Grid md={9} xs={12}>
                    <Box mt={5} >
                    <Typography ml={3} lineHeight={"180%"}>
                 {production.Description}
            
                </Typography>
                    </Box>
                    </Grid>
                    </Grid>
            
            </Box>
        ))
     }
         
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}