import React from "react";
import Grid from "@mui/material/Grid";
import ImageData from "./ImageData";
import AdjustIcon from "@mui/icons-material/Adjust";

export const OrderCard = () => {
  return (
    <div>
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: "space-between" }}
        className="p-5 border rounded-md shadow-md hover:shadow-xl cursor-pointer"
      >
        <Grid item xs={5}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://image.hm.com/assets/hm/12/8f/128f930c87a22f7ab8e53a8ed90fa1485d2a90b7.jpg?imwidth=820"
              alt="image1"
            />
            <div className="ml-5 space-y-2">
              <p className="opacity-90 font-semibold text-xl">
                Women Black Dress
              </p>
              <p className="opacity-70 font-semibold text-xs">Size: M</p>
              <p className="opacity-70 font-semibold text-xs">Color: Black</p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>$100</p>
        </Grid>

        <Grid item xs={5}>
          {true && (
            <div>
              <p>
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 mr-2"
                />
                <span className="font-semibold">
                  Delivered on October 10, 2024
                </span>
                <p className="text-xs opacity-70">
                  Your item has been delivered
                </p>
              </p>
            </div>
          )}

          {false && (
            <p>
              {" "}
              <AdjustIcon
                sx={{ width: "15px", height: "15px" }}
                className="text-green-600 mr-2"
              />
              <span className="font-semibold">
                Expected delivery on October 10, 2024
              </span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};
