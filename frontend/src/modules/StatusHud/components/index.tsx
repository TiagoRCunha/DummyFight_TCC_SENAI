import { Box, Typography, withStyles, WithStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { ExpLinearProgress, HealthLinearProgress } from '../styles/ProgressBar';
import { styles } from '../styles/StatusHud';

type Props = WithStyles<typeof styles>

interface StatusHudProps extends Props {
  hitpoints: number
  experience: number
}

function StatusHud({ classes, hitpoints, experience }: StatusHudProps) {
  const [hitpointsValue, setHitpointsValue] = useState(hitpoints);
  const [experienceValue, setExperienceValue] = useState(experience);

  useEffect(() => {
    setExperienceValue(50)

    const timer = setInterval(() => {
      setHitpointsValue((oldProgress) =>
        oldProgress >= 100 ? 0 : oldProgress + 5
      );
    }, 500);
    return () => {
      clearInterval(timer);
    };
  })

  return (
    <Box className={classes.root}>
      <Box className={classes.circleBackground}>
        <Box className={classes.circleForeground}>
          <Typography variant="h2" className={classes.lvlNumber}>99</Typography>
        </Box>
        <Box className={classes.healthBarBackground}>
          <Box className={hitpointsValue > 20
            ? classes.healthBar
            : classes.hpLow}>
            <HealthLinearProgress
              variant="determinate"
              value={hitpointsValue}
            />
            {/* TODO change '100' to the max value recevied from api */}
            <Typography className={classes.label}>{hitpointsValue + '/ 100'}</Typography>
          </Box>
        </Box>
        <Box className={classes.expBarBackground}>
          <Box className={classes.expBar}>
            <ExpLinearProgress
              variant="determinate"
              value={experienceValue}
            />
            <Typography className={classes.label}>{experienceValue + '/ 100'}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export const StatusHudComponentWithStyle = withStyles(styles)(StatusHud)