import React from 'react'
// mui setting rtl and them
import { ThemeProvider } from "@mui/material"
import { createTheme } from "@mui/material";
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

// setting for rtl
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});



function MuiProvider({ children }) {


    const theme = createTheme({
        palette: {
            mode: 'dark',
          },
        typography: {
            fontFamily: `"yekan","Roboto"`
        },
        direction: "rtl"

    })

    return (

        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </CacheProvider>
    )
}

export default MuiProvider


 
// stylis-plugin-rtl
// 