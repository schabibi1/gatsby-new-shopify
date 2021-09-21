import * as React from "react"
import { Link } from "gatsby"
import { featuredImageWrapper, featuredImage } from "../components/product-card.module.css"

const FeaturedProducts = ({ blok }) => {
  const productItems = blok.product.items
  const featureLink = blok.feature_link

  return (
    <div className={featuredImageWrapper} key={ blok.product._uid }>
      {
        productItems.map(productItem => {
          return (
            <Link
              to={ featureLink.cached_url }
              key={ featureLink.id }
            >
              <img src={ productItem.image } alt={ productItem.name } className={featuredImage} />
            </Link>
          )
        })
      }
    </div>
  )
}

export default FeaturedProducts