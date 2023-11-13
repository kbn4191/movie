
import TextField from '@mui/material/TextField';
import { Box, Container, Typography, Grid, Button, styled } from "@mui/material";
import Styled from "../../component/form/formMobile.module.css";
export default function FormMobile() {
   
    return(
        <>
       <form style={{display:"flex", flexDirection:"column"}}>
        <label htmlFor="fff" className={Styled.label}>First name</label>
        <input className={Styled.input} placeholder='Patric ' type='text'></input>
        <label htmlFor="fff" className={Styled.label}>Last Name</label>
        <input className={Styled.input} placeholder='Patrick'></input>
        <label htmlFor="fff" className={Styled.label}>Email</label>
        <input className={Styled.input} placeholder='patrick@mail.com'></input>
        <label htmlFor="fff" className={Styled.label}>Subject</label>
        <input className={Styled.input} placeholder='i want to make movie'></input>
        <label htmlFor="fff" className={Styled.label}>Message</label>
        <textarea className={Styled.textarea} placeholder='Hi lane'></textarea>

        <Button variant='contained' sx={{backgroundColor:"#3498DB", color:"white", mt:"10px"}}>Submit</Button>
       </form>

        </>

    )
    
}