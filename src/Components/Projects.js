import * as React from "react";
import { Box, Divider, Typography, Grid } from "@mui/material";
import Cards from "./Card";

export default function Projects() {
  return (
    <div>
      <Box
        id="Projects"
        sx={{
          m: "0 auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: "20px"
        }}
      >
        <Divider sx={{ width: "20rem", display: "flex", mt: "6rem" }}>
          <Typography variant="h4" component="h4">
            My Projects
          </Typography>
        </Divider>
        <br />
        <br />
        <Grid container spacing={24}>
          <Grid item md={3}>
            <Cards
              name="Signature Verification"
              skills="Using OpenCV and Python"
              desc="This Project is based on how strongly two signatures are similar 
              or not. Signature verification is a technique used by banks, intelligence agencies and high-profile institutions to validate the identity of an individual. Signature verification is often used to compare signatures in bank offices and other branch capture. Helps in minimizing frauds that occurs in banks."
            />
          </Grid>
          <Grid item md={3}>
            <Cards
              name="Railway Management System"
              skills="HTML CSS Javascript Node Express MongoDB "
              desc="Railway Management System (Train Inventory)
              project is designed for managing the train system of
              Railways.Managing proper transportation facilities and helping people to reach their
              desired destination safely is a cumbersome task though. Displays currently available trains
              that are running, also displays the status of trains that aren't no longer running and 
              data of trains that are running from a particular station."
            />
          </Grid>
          <Grid item md={3}>
            <Cards
              name="Ludo Application"
              skills="Android Development: Java"
              desc="Playing Games excites everyone. Ludo application is just a game for enjoyment which 
              can be played in your free time. Made by using Java and its libraries
              such as canvas, graphics this makes the layout of this application
              more beautiful. This game has minimum of 2 and maximum of 4 players to be played with.
              A source of fun and enjoyment with your family and friends in your free time. "
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
