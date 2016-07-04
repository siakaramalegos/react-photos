import React from 'react'
import { Link } from 'react-router'

const PaginationFrame = ({pageCount, pageNumber}) => {
  let pageItems = Array(pageCount).fill().map((x,i)=>i + 1)

  pageItems = pageItems.map( (item) => {
    return (
      <li
        key={item}
        className={ item == pageNumber ? 'active' : 'nothing' }>
        <Link to={'/' + item}>{item}</Link>
      </li>
    )
  })

  return (
    <nav>
      <ul className="pagination">
        {pageItems}
      </ul>
    </nav>
  )
}

export default PaginationFrame
