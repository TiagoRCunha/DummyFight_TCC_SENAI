import { Box, Typography, withStyles, WithStyles } from '@material-ui/core';
import React, { useCallback, useEffect, useState } from 'react';
import { ExpLinearProgress, HealthLinearProgress } from '../styles/ProgressBar';
import { styles } from '../styles/StatusHud';

type Props = WithStyles<typeof styles>

interface StatusHudProps extends Props {
  hitpoints: number
  experience: number
}

function StatusHud(props: StatusHudProps) {
  const [hitpointsValue, setHitpointsValue] = useState(props.hitpoints);
  const [experienceValue, setExperienceValue] = useState(props.experience);

  useCallback(() => {
    setExperienceValue(50)
    useEffect(() => {

      setInterval(() => {

        React.useEffect(() => {
          if (hitpointsValue > 100) {
            setHitpointsValue(0);
          } else {
            setHitpointsValue(hitpointsValue + 10);
          }
        });
      }, 500);
    })

  }, [experienceValue, hitpointsValue])

  return (
    <Box className={props.classes.root}>
      <Box className={props.classes.circleBackground}>
        <Box className={props.classes.circleForeground}>
          <Typography variant="h2" className={props.classes.lvlNumber}>99</Typography>
        </Box>
        <Box className={props.classes.healthBarBackground}>
          <Box className={props.classes.healthBar}>
            <HealthLinearProgress
              variant="determinate"
              value={hitpointsValue}
            />
          </Box>
        </Box>
        <Box className={props.classes.expBarBackground}>
          <Box className={props.classes.expBar}>
            <ExpLinearProgress
              variant="determinate"
              value={experienceValue}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export const StatusHudComponentWithStyle = withStyles(styles)(StatusHud)