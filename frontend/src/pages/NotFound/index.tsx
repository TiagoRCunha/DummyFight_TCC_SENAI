import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

export interface NotFoundProps extends RouteComponentProps { }

function NotFound(props: NotFoundProps) {
  return <div> 404 page not found </div>
}

export default NotFound
