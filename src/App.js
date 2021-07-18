import './App.css';
import { createTheme, ThemeProvider } from "@material-ui/core";
import Header from "./myComponents/headerComponent/Header";
import AboutUs from "./myComponents/BodyComponent/aboutUs";
import Services from "./myComponents/BodyComponent/services";
import Features from "./myComponents/BodyComponent/features";
import Projects from "./myComponents/BodyComponent/project";
import ContactUs from "./myComponents/BodyComponent/contactUs";
import Blog from "./myComponents/BodyComponent/blog";
import Footer from "./myComponents/BodyComponent/footer"


const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 992,
      xl: 1280,
      xxl: 1920,
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
    <Header/>
    <AboutUs/>
    <Services/>
    <Features/>
    <Projects/>
    <ContactUs/>
    <Blog/>
    <Footer/>
    </ThemeProvider>
  );
}

export default App;
