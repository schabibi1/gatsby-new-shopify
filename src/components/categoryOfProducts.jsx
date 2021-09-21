import * as React from "react"
import { categoryImageWrapper, categoryImage, categoryHeader, categoryAnimation } from "./product-card.module.css"

const GridOfProducts = ({ blok }) => {
  console.log(blok)
  return (
    <div className={categoryImageWrapper}>
      {blok.categories.items.map(item => {
        return (
          <div key={ item.id } className={categoryAnimation}>
            <h2 className={categoryHeader}>{ item.name }</h2>
            {
              blok.products.items.map(item => {
                return (
                  <img src={ item.image } alt={ item.name } key={ item.id } className={categoryImage} />
                )
              })
            }
          </div>
        )
      })}
    </div>
  )
}

export default GridOfProducts