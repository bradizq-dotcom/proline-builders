import type { Metadata } from 'next'
import DroneRoofSurveysClient from './drone-roof-surveys-client'

export const metadata: Metadata = {
  title: 'Drone Roof Surveys | Pro-Line Builders',
  description:
    'Aerial drone roof surveys with photo-documented condition reports for Florida property managers and owners.',
}

export default function Page() {
  return <DroneRoofSurveysClient />
}
