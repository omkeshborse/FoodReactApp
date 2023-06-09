import React from "react"

const Searchbox = () => {
  return (
    <>
      <div class="search-container" data-search-container>
        <div class="search-box">
          <input
            type="search"
            name="search"
            aria-label="Search here"
            placeholder="Type keywords here..."
            class="search-input"
          />

          <button
            class="search-submit"
            aria-label="Submit search"
            data-search-submit-btn
          >
            <ion-icon name="search-outline"></ion-icon>
          </button>
        </div>

        <button
          class="search-close-btn"
          aria-label="Cancel search"
          data-search-close-btn
        ></button>
      </div>
    </>
  )
}

export default Searchbox
