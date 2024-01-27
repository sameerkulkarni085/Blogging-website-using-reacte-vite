import { Button, Container,Grid,Typography } from '@mui/material'
const Footer =({title,description})=>{
    return(
        <footer style={{backgroundColor:"slategrey",marginTop:7,padding:6}}>
            <Container maxwidth="lg">
                <Typography variant="h6" align="center" gutterbottom>
                    {title}
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component='p'>
                    {description}
                </Typography>
            </Container>
        </footer>
    )
}
export default Footer;