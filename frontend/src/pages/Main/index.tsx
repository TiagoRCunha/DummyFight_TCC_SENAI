import { useTheme } from '@material-ui/core'
import React from 'react'
import { SkeletonTheme } from 'react-loading-skeleton'
import { RouteComponentProps } from 'react-router'


interface MainProps extends RouteComponentProps { }

function Main(props: MainProps) {
  const theme = useTheme()

  return (
    <SkeletonTheme
      color={theme.palette.grey[400]}
      highlightColor={theme.palette.grey[300]}
    >
      <h1>hello</h1>
    </SkeletonTheme>
  )
}

export default Main
