import { useState } from 'react'
import './App.css'
import FeaturedPost from './components/FeaturedPost';
import { Button, Container,Grid } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import Header from './components/Header';
import Main from './components/Main';
import SideBar from './components/SideBar';
import PostCard from './components/PostCard';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { featuredPosts ,sidebar} from './components/data/data';
import Footer from './components/Footer';



function App() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
    <Container>
      <Header/>
      <FeaturedPost/>
      <br />
      <Grid spacing={4} container>
        {
          featuredPosts.map((post)=>(
            <PostCard post={post} key={post.title}/>
          ))
        }
      </Grid>
      <Grid container spacing={5} sx={{marginTop:3}}>
          <Main title=""/>
          <SideBar title={sidebar.title} archives={sidebar.archives} description={sidebar.description} social={sidebar.social}/>
      </Grid>
    </Container>
    <Footer
      title="Footer"
      description="Something is happening here"
    />
    </ThemeProvider>
  )
}

export default App
