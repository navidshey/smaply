import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { Suspense } from "react";
import { Provider } from "react-redux";
import Inter from "./assets/font/Inter/Inter-Regular.ttf";
import Spinner from "./components/custom/Spinner/Spinner";
import MyRoute from "./components/custom/MyRoute";
import store from "./store/store";

const theme = createTheme({
  typography: {
    fontFamily: "Inter, Arial",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Inter';
          url: ${Inter}  }
      `,
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<Spinner />}>
          <MyRoute></MyRoute>
        </Suspense>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
