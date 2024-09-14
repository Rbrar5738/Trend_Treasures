import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Avatar,Rating } from "@mui/material";

export default function ProductReviewCard() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={1}>
          <Box>
            <Avatar
             
              className="text-white"
              sx={{ width: 56, height: 56, backgroundColor: "purple" }}
            >
              R
            </Avatar>
          </Box>
        </Grid>

        <Grid item xs={9}>
          <div className="space-y-2">
            <div>
              <p>Noor</p>
              <p>Sep 12, 2024.</p>
            </div>
          </div>
          <Rating value={4.5} name="half-rating" readOnly precision={0.5}/>
          <p className="font-semibold text-lg opacity-70">Very good quality, i loved it..</p>
        </Grid>
      </Grid>
    </div>
  );
}
