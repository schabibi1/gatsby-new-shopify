import * as React from "react"
import { sbEditable } from "@storyblok/storyblok-editable"
import DynamicComponent from "./dynamicComponent"
import { listingContainerStyle } from "../components/product-listing.module.css"

const Grid = ({ blok }) => {
  return (
    <div {...sbEditable(blok)}>
      <div className={listingContainerStyle}>
        {blok.columns.map(blok => (
          <DynamicComponent blok={ blok } key={ blok._uid } />
        ))}
      </div>
    </div>
  )
}

export default Grid