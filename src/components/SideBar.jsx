import { Grid ,Link,Paper,Typography} from "@mui/material";

const SideBar=({title,archives,description,social})=>{
    return (
        <Grid item xs={12} md={4}>
            <Paper elevation={0} sx={{padding:2 , backgroundColor:"slategrey", }} >
                <Typography variant="h5" gutterBottom>
                    {title}
                </Typography>
                <Typography >
                    {description}
                </Typography>

            </Paper>
            <Typography variant="h6" gutterBottom sx={{marginTop:3}}>Archives</Typography>
            {
                archives.map((archive)=>(
                    <Link
                    href={archive.url}
                    display="block"
                    variant="body1"
                    key={archive.title}
                    >{archive.title}
                    </Link>
                ))
            }
            <Typography gutterBottom variant="h6" sx={{marginTop:3}}>
                Social
            </Typography>
            {
                social.map((network)=>(
                    <Link href="#" key={network.name} variant="body1" display="block">
                        <Grid container direction="row" spacing={1} alignItems="center">
                            <Grid item><network.icon/></Grid>
                            <Grid item>{network.name}</Grid>
                        </Grid>
                    </Link>
                ))
            }
        </Grid>
    )
}
export default SideBar;