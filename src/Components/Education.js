import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Box, Container, Grid, Divider, Chip, Typography } from "@mui/material";

export default function ColorsTimeline() {
  return (
    <div>
      <Box
        id="Education"
        sx={{
          m: "0 auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundImage: "linear-gradient(to bottom, #dbe6f6, #c5796d);",
          alignItems: "center",
          p: "20px"
        }}
      >
        <Divider sx={{ width: "20rem", display: "flex", mt: "6rem" }}>
          <Typography variant="h4" component="h4">
            Education
          </Typography>
        </Divider>

        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="error" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6" component="h4">
                2020 - 2024
                <br />
                <Typography variant="subtitle1" component="h4">
                  Pursuing B.E in Computer Science.
                  <br />
                  From Shri Ramdeobaba College of Engineering and Management, Nagpur
              
                
                </Typography>
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6" component="h4">
                2018 - 2020
                <br />
                <Typography variant="subtitle1" component="h4">
                 Modern School, Koradi Nagpur
                  <br />
                  Completed my HSC with 93.2%.
                </Typography>
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="secondary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6" component="h4">
                Primary Education & SSC
                <br />
                <Typography variant="subtitle1" component="h4">
                 Central India Public School, Nagpur
                  <br />
                  Completed my SSC with 91.4%.
                </Typography>
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
           </TimelineItem>
        </Timeline>
      </Box>
    </div>
  );
}
