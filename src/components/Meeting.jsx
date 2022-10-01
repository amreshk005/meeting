import React from "react";
import Grid from "@mui/material/Grid";
import style from "./Meeting.module.css";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PublicIcon from "@mui/icons-material/Public";
import Divider from "@mui/material/Divider";

function Meeting() {
  return (
    <Box className={style.container}>
      <Paper>
        <Grid className={style.meetingContainer} container spacing={2}>
          <Grid className={style.leftContainer} xs={12} md={5} lg={5}>
            <h5 className={style.headingName}>Amresh Kumar</h5>
            <h3 className={style.heading}>15 Minute Meeting</h3>
            <Grid className={style.scheduleInfo} container alignItems="center">
              <Box component="span" sx={{ marginRight: 1.8 }}>
                <AccessTimeFilledIcon />
              </Box>
              <Box component="span">15 min</Box>
            </Grid>
            <Grid className={style.scheduleInfo} container flexWrap="nowrap">
              <Box component="span" sx={{ marginRight: 1.8 }}>
                <CalendarTodayIcon />
              </Box>
              <Box component="span">9:00am - 9:15am, Wednesday, October 5, 2022</Box>
            </Grid>
            <Grid className={style.scheduleInfo} container alignItems="center" flexWrap="nowrap">
              <Box component="span" sx={{ marginRight: 1.8 }}>
                <PublicIcon />
              </Box>
              <Box component="span">India Standard Time</Box>
            </Grid>
          </Grid>
          <Divider classname={style.h100} orientation="vertical" flexItem />

          <Grid className={style.rightContainer} xs={12} md={6} lg={6}>
            <h4 className={style.formHeading}>Enter Details</h4>
            <Box>
              <Box sx={{ marginBottom: 2.5 }}>
                <Box sx={{ marginBottom: 1 }}>
                  <label>Name *</label>
                </Box>
                <Box sx={{ marginBottom: 1 }}>
                  <input type="text" className={style.input} />
                </Box>
              </Box>
              <Box sx={{ marginBottom: 2.5 }}>
                <Box sx={{ marginBottom: 1 }}>
                  <label>Email *</label>
                </Box>
                <input type="text" className={style.input} />
              </Box>
              <Box sx={{ marginBottom: 2.5 }}>
                <Button className={style.button} variant="outlined">
                  Add Guests
                </Button>
              </Box>
              <Box sx={{ marginBottom: 2.5 }}>
                <Box sx={{ marginBottom: 1 }}>
                  <label>Please share anything that will help prepare for our meeting.</label>
                </Box>
                <textarea className={style.inputArea} />
              </Box>
              <Button className={[style.button, style.scheduleButton]} variant="contained">
                Schedule Event
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default Meeting;
