import React from "react";
import { Grid, Typography, Box, Button } from "@mui/material";

function Footer() {
  return (
    <div>
      <Box
        className="br-black text-white text-center mt-10 md:pl-16"
        sx={{
          bgcolor: "black",
          color: "white",
          py: 3,
        }}
      >
        <Grid container spacing={2}>
          {/* <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className="pb-3 text-left">
              Contact
            </Typography>

            <p className="text-left opacity-80 ">32 Kent Street</p>
            <p className="text-left opacity-80 ">Cambridge, Ontario</p>
            <p className="text-left opacity-80 ">Canada-N1S 5B2</p>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className="pb-3 text-left">
              Explore
            </Typography>

            <p className="text-left opacity-80 cursor-pointer ">Men Clothing</p>
            <p className="text-left opacity-80 cursor-pointer">Men Accessories</p>
            <p className="text-left opacity-80 cursor-pointer">Women Clothing</p>
            <p className="text-left opacity-80 cursor-pointer">Women Accessories</p>
          </Grid>

          <Grid item xs={12} sm={6} md={3} className="pl">
            <Typography variant="h6" className="pb-3 text-left">
              Top Brands
            </Typography>

            <p className="text-left opacity-80 cursor-pointer">Gucci</p>
            <p className="text-left opacity-80 cursor-pointer">Prada</p>
            <p className="text-left opacity-80 cursor-pointer">Versace</p>
            <p className="text-left opacity-80 cursor-pointer">Dior</p>
          </Grid>

          <Grid item xs={12} sm={6} md={3} className="pl">
            <Typography variant="h6" className="pb-3 text-left">
              About
            </Typography>

            <p className="text-left opacity-80 cursor-pointer">About Us</p>
            <p className="text-left opacity-80 cursor-pointer">Contact Us</p>
          </Grid> */}

          <Grid className="text-center pt-20" item xs={12}>
            <Typography variant="body2" className="pb-3">
              &copy; 2024 Group 11, All right reserved.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Footer;
