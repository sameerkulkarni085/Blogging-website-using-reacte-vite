import { Divider, IconButton, Toolbar,Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Badge from '@mui/material/Badge';
import SideDrawer from "./sideDrawer";
/* import classes from "*./module.css" */
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
const Header = () =>{
    return (<>
       <Toolbar>
        <SideDrawer>
        <IconButton color="inherit">
            <MenuIcon/>
        </IconButton>
        </SideDrawer>
        <Typography variant="h6" sx={{flexGrow:1}}>Blog Content</Typography>
        <IconButton color="inherit">
            <AccountCircleIcon/>
            
        </IconButton>
        <IconButton color="inherit">
        <Badge badgeContent={4} color="secondary">
        <NotificationsIcon/>
      </Badge>
        
        </IconButton>
       </Toolbar>
       <Divider/>
       <Toolbar sx={{fontSize:20,textTransform:"uppercase",justifyContent:"center",fontFamily:"Montserrat"}}>Express your emotions through words</Toolbar>
       </>
    )
}
export default Header;