import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import { createTheme, Container, ThemeProvider } from "@mui/material";
import FeaturedPost from "./Components/FeaturedPost";
import { featuredPosts } from "./Data";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Container className="App">
        <Header />
        <FeaturedPost />
        <br />
        <Grid container spacing={4}>
          {
            featuredPosts.map((post,index)=>{
              <PostCard post={post} key={index}/>
            })
          }
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
