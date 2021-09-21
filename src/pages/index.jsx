import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { sbEditable } from "@storyblok/storyblok-editable"
import DynamicComponent from "../components/dynamicComponent"
import useStoryblok from '../utils/storyblok'
// import { ProductListing } from "../components/product-listing"

export const query = graphql`
  query {
    storyblokEntry(full_slug: { eq: "home" }) {
      content
      full_slug
    },
    # shopifyCollection(handle: { eq: "frontpage" }) {
    #   products {
    #     ...ProductCard
    #   }
    # }
  }
`

export default function IndexPage({ data, location }) {
  let story = data.storyblokEntry
  story = useStoryblok(story, location)
  // story.content = JSON.parse(story.content)

  const components = story.content.body.map(blok => {
    return (<DynamicComponent blok={blok} key={blok._uid} />)
  })

  return (
    <Layout>
      <div {...sbEditable(story.content)}>
        { components }
      {/* <div>
        <ProductListing products={data?.shopifyCollection?.products} /> */}
      </div>
    </Layout>
  )
}