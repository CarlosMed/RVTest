import React from 'react'

const Filter = (props) => {
  let {zip, dealerQty} = props

  // Toggling Filtering on mobile
  function handleClick(e) {
    const filtering = document.querySelector('.filtering')
    filtering.style.display = (filtering.dataset.toggled ^= 1)
      ? 'block'
      : 'none'
  }

  return (
    <section className="filter">
      <h2>{dealerQty} dealers in {zip}</h2>
      <hr />
      <div className="filter-button">
        <button>Filter Results</button>
        <div className="dropdown" onClick={handleClick}>
          &#9660;
        </div>
      </div>
      <div className="filtering">
        <form>
          <div>
            <input type="checkbox" name="services" id="services" />
            <label htmlFor="services">Services</label>
          </div>
          <div>
            <input type="checkbox" name="installation" id="installation" />
            <label htmlFor="installation">Installation</label>
          </div>
          <div>
            <input type="checkbox" name="residential" id="residential" />
            <label htmlFor="residential">Residential</label>
          </div>
          <div>
            <input type="checkbox" name="commercial" id="commercial" />
            <label htmlFor="commercial">Commercial</label>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Filter
