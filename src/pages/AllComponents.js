import React from 'react'
import Autokana from '../components/autokana'
import MyDate from '../components/date'
import Images from '../components/images'
import Query from '../components/query'
import ColorSelect from '../components/colorSelect'

export default function AllComponents() {
  // thank you
  // sure
  return (
    <div>
        <Autokana />
        <Images />
        <Query />
        <ColorSelect />
    </div>
  )
}
