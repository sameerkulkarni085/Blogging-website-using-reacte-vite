import { Grid,CardMedia,CardActionArea,Hidden ,Card,CardContent,Typography} from "@mui/material";
import cat_img from "../assets/cat_img.jpg"
const PostCard = ({post})=>{
    return(
        <Grid item xs={12} md={6}>
            <CardActionArea component='a' href="#">
                <Card sx={{display:"flex"}}>
                    <div >
                        <CardContent sx={{flex:1}}>
                            <Typography variant="h5" component="h2">
                                {post.title}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {post.date}
                            </Typography>
                            <Typography variant="subtitle1" paragraph>
                                {post.description}
                            </Typography>
                            <Typography variant="subtitle1" sx={{color:"skyblue"}}>
                                Continue reading...
                            </Typography>
                        </CardContent>
                    </div>
                <Hidden xsDown>
                    <CardMedia sx={{width:160}}
                        image={cat_img}
                        title={post.title}
                    />
                </Hidden>
                </Card>
            </CardActionArea>
        </Grid>
    )
}
export default PostCard;