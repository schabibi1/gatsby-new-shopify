import React from "react"
import { sbEditable } from "@storyblok/storyblok-editable"
import Hero from "./hero"
import Grid from "./grid"
import FeaturedProducts from "./featuredProducts"
import CategoryOfProducts from "./categoryOfProducts"

const Components = {
  "hero": Hero,
  "grid": Grid,
  "featured-product": FeaturedProducts,
  "category-grid": CategoryOfProducts
}

const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component]
    return (<div {...sbEditable(blok)}><Component blok={blok} /></div>)
  }
  return (<p>The component <strong>{blok.component}</strong> has not been created yet.</p>)
}

export default DynamicComponent