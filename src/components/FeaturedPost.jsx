import Card from '@mui/material/Card';
import feature_img from "../assets/feature_img.jpg"
import {CardContent,CardActions,Button, Typography} from '@mui/material/';
const FeaturedPost= ()=>{
    return(
        <Card sx={{
            backgroundImage: `url(${feature_img})`,
            backgroundPosition:"center",
            padding:"35px 25px"
        }}>
            <CardContent>
                <Typography sx={{fontSize:40,fontFamily:"Montserrat"}} gutterBottom>
                    Title of a longer featured blog post
                </Typography>
                <Typography variant='h5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam officiis, voluptatibus esse quidem eveniet aliquam optio magni at repudiandae, pariatur aut quos quis a id dignissimos odit maxime, quia in.
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant='text'>
                    Read More..
                </Button>
            </CardActions>
        </Card>
    )
};
export default FeaturedPost;