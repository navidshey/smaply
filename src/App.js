import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { Suspense  } from "react";
import { Provider } from "react-redux";
import Inter from "./assets/font/Inter/Inter-Regular.ttf";
import MyRoute from "./components/custom/other/MyRoute";
import store from "./store/store";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/custom/other/ErrorFallback";
import { SnackbarContainer } from './context/SnackbakContext';
import CustomSnackBar from './components/custom/snackBar/CustomSnackbar';
import Spinner from './components/custom/spinner/Spinner';


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
      <SnackbarContainer>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ThemeProvider theme={theme}>
          <Suspense fallback={<Spinner />}>
            <CustomSnackBar />
            <MyRoute></MyRoute>
          </Suspense>
        </ThemeProvider>
      </ErrorBoundary>
      </SnackbarContainer>
    </Provider>
  );
}

export default App;
