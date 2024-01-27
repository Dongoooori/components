import React from 'react'
import Autokana from '../components/autokana'
import MyDate from '../components/date'
import Images from '../components/images'
import Query from '../components/query'
import ColorSelect1 from '../components/colorPicker1'
import ColorSelect2 from '../components/colorPicker2'
import ColorPickerPalette from '../components/colorPicker3'
import ColorPickerPalette2 from '../components/colorPicker4'
import ColorPicker5 from '../components/colorPicker5'
import ColorPicker6 from '../components/colorPicker6'

export default function AllComponents() {
  return (
    <div>
        <Autokana />
        <Images />
        <Query />
        <ColorSelect1 />
        <ColorSelect2 />
        {/* <ColorPickerPalette /> */}
        {/* <ColorPickerPalette2 /> */}
        <ColorPicker5 />
        <ColorPicker6 />
    </div>
  )
}
