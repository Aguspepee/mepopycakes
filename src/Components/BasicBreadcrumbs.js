import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import "./BasicBreadcrumbs.css";


export default function BasicBreadcrumbs() {
  return (
    

      <Breadcrumbs className="BreadCrumbs" aria-label="breadcrumb">
        <Link  underline="hover" color="inherit" href="/">
          MUI
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/getting-started/installation/"
        >
          Core
        </Link>
        <Typography color="text.primary">Breadcrumbs</Typography>
      </Breadcrumbs>
  

    
  );
}