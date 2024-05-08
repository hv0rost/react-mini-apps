import "./index.scss"
import { data } from "./assets/data.js"

import React, { useEffect, useState } from "react"

import Collection from "./components/Collection"

export default function App() {
  const categories = ["Все", "Море", "Горы", "Архитектура", "Города"]
  const [filterValue, setFilterValue] = useState("")
  const [selectedCategory, setSelectedCategory] = useState(0)
  const [page, setPage] = useState(1)

  useEffect(() => {}, [])

  return (
    <div className="App">
      <h1>Моя коллекция фотографий</h1>
      <div className="top">
        <ul className="tags">
          {categories.map((category, index) => (
            <li
              key={index}
              onClick={() => setSelectedCategory(index)}
              className={selectedCategory === index ? "active" : ""}
            >
              {category}
            </li>
          ))}
        </ul>
        <input
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
          className="search-input"
          placeholder="Поиск по названию"
        />
      </div>
      <div className="content">
        {data.collections
          .filter(
            (item) =>
              selectedCategory === 0 || item.category === selectedCategory
          )
          .filter((item) =>
            item.name.toLowerCase().includes(filterValue.toLowerCase())
          )
          .slice((page - 1) * 4, page * 4)
          .map((collection, index) => (
            <Collection
              key={index}
              name={collection.name}
              images={collection.photos}
            />
          ))}
      </div>
      <ul className="pagination">
        {[
          ...Array(
            Math.round(
              data.collections
                .filter(
                  (item) =>
                    selectedCategory === 0 || item.category === selectedCategory
                )
                .filter((item) =>
                  item.name.toLowerCase().includes(filterValue.toLowerCase())
                ).length / 4
            )
          ),
        ].map((_, index) => (
          <li
            key={index}
            className={page === index + 1 ? "active" : ""}
            onClick={() => setPage(index + 1)}
          >
            {index + 1}
          </li>
        ))}
      </ul>
    </div>
  )
}
