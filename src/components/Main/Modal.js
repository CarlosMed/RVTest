import React from 'react'
import checkmark from '../../img/checkmark-circle.png'
import emptyCircle from '../../img/circle-form.png'

const Modal = props => {
  function handleClick(e) {
    let modal = document.querySelector('.modal')
    modal.dataset.toggled = 0;
    modal.style.display = 'none'
  }

  return (
    <section className="modal">
      <div className="modal-container">
        <div className="modal-top">
          <button onClick={handleClick}>&#10005;</button>
          <div>
            <h5>Email</h5>
            <h2>{props.name}</h2>
          </div>
        </div>
        <div className="modal-form">
          <p>
            Fill out the form below and Premium Pools & Spas of Charlotte will
            get in touch.
          </p>
          <form>
            <div>
              <div className="label">
                <label htmlFor="name">First and last name</label>
                <img src={checkmark} alt="Form Validation" />
              </div>
              <br />
              <input type="text" id="name" name="name" required/>
            </div>
            <div>
              <div className="label phone">
                <label htmlFor="number">Phone number</label>
                <img src={emptyCircle} alt="Form Validation" />
              </div>
              <br />
              <input type="tel" id="number" name="number" required/>
            </div>
            <div>
              <div className="label">
                <label htmlFor="email">Email address</label>
                <img src={emptyCircle} alt="Form Validation" />
              </div>
              <br />
              <input type="email" id="email" name="email" required/>
            </div>
            <div>
              <div className="label">
                <label htmlFor="comments">Comments or questions</label>
                <i>optional</i>
              </div>
              <br />
              <textarea name="comments" id="comments" />
            </div>
            <label>Do you currently own a pool or spa?</label>
            <div className="radio">
              <input type="radio" name="ownership" id="yes" value="yes" required />
              <label htmlFor="yes">Yes</label>
              <input type="radio" name="ownership" id="no" value="no" required />
              <label htmlFor="no">No</label>
            </div>
            <hr />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Modal
