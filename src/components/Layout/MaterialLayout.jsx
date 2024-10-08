import React from "react";
import { Paper, CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

import Header from "../Header";
import Footer from "../Footer";

import { theme, useStyle } from "./styles";

export default function MaterialLayout(props) {
  const queryParameters = new URLSearchParams(window.location.search);
  const type = queryParameters.get("ccode");
  const { children } = props;
  const classes = useStyle();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {!type && <Header />}
      <div className={classes.root}>
        <Paper className={classes.paper}>{children}</Paper>
      </div>
      {!type && <Footer />}
    </ThemeProvider>
  );
}
