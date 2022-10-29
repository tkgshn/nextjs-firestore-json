// import React from "react"
// import { ThemeProvider } from "@material-ui/core/styles";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import theme from "../theme";
// import Navbar from "../components/Header/Navbar";
// import Footer from "../components/Footer/Footer";

// import Axios from "axios";



// export const fetcher = async (id) => {
//   try {
//     const res = await Axios.get(url);
//     return res.data;
//   } catch (err) {
//     throw err.response.data;
//   }
// };

// const useStyles = makeStyles((theme) => ({
//   main: {
//     flex: 1,
//     padding: "16px 0px",
//   },
// }));

// export default function App() {
//   const classes = useStyles();
//   const { Component, pageProps } = props;

//   React.useEffect(() => {
//     // Remove the server-side injected CSS.
//     const jssStyles = document.querySelector("#jss-server-side");
//     if (jssStyles) {
//       jssStyles.parentElement.removeChild(jssStyles);
//     }
//   }, []);

//   return (
//     <React.Fragment>
//       <SWRConfig
//         value={{
//           fetcher,
//           dedupingInterval: 10000,
//         }}
//       >

//             <ThemeProvider theme={theme}>
//               <CssBaseline />
//               <div
//                 style={{
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "space-between",
//                   minHeight: "100vh",
//                   backgroundColor: colors.grey[200],
//                 }}
//               >
//                 <nav>
//                   <Navbar />
//                 </nav>

//                 <main className={classes.main}>
//                   <Container>
//                     <Component {...pageProps} />

//                   </Container>
//                 </main>

//                 <footer>
//                   <Footer />
//                 </footer>


//               </div>
//             </ThemeProvider>

//       </SWRConfig>
//     </React.Fragment>
//   );
// }
