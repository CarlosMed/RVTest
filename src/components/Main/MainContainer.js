import React, { Component } from 'react'
import Dealers from './Dealers'
import Filter from './Filter'
import Modal from './Modal'

export default class MainContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dealers: null,
      dealerName: null
    }

    this.handleBtnClick = this.handleBtnClick.bind(this)
  }

  handleBtnClick(name) {
    // Passes prop passed up to parent from children into state
    this.setState({ dealerName: name })
  }

  componentDidMount() {
    // Fetching Dealer info

    // How it would be if file was remote and not local
    /* fetch('./dealers.json')
      .then(res => res.json())
      .then(data => this.setState({ dealers: data }))
      .catch(err => console.error(err)) */

    /* Fetch API does not allow local files
    so a XML HTTP Request is used */
      let file  = './dealers.json';
      const xhr = new XMLHttpRequest()

      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          this.setState({dealers: JSON.parse(xhr.responseText)})
        }
      }.bind(this)
      xhr.open('GET', file, true)
      xhr.send()
  }

  render() {
    let dealers = this.state.dealers

    return (
      <main>
        {dealers === null ? (
          <i>Loading...</i>
        ) : (
          <Filter zip={dealers.zipcode} dealerQty={dealers.dealers.length} />
        )}

        <section className="dealer-container">
          {dealers === null ? (
            <h1>Loading...</h1>
          ) : (
            dealers.dealers.map(dealer => (
              <Dealers
                key={dealer.data.companyID}
                dealer={dealer}
                onButtonClick={this.handleBtnClick}
              />
            ))
          )}
        </section>

        <Modal name={this.state.dealerName} />
      </main>
    )
  }
}
