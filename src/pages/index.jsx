import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { sbEditable } from "@storyblok/storyblok-editable"
import DynamicComponent from "../components/dynamicComponent"
import useStoryblok from '../utils/storyblok'

export const query = graphql`
  query {
    storyblokEntry(full_slug: { eq: "home" }) {
      content
      full_slug
    }
  }
`

export default function IndexPage({ data, location }) {
  let story = data.storyblokEntry
  story = useStoryblok(story, location)

  const components = story.content.body.map(blok => {
    return (<DynamicComponent blok={blok} key={blok._uid} />)
  })

  return (
    <Layout>
      <div {...sbEditable(story.content)}>
        { components }
      </div>
    </Layout>
  )
}