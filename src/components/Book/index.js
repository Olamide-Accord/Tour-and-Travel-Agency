import React from 'react';
import "./book.css"
import bookImage from "../../assets/images/book-img.svg"

const Book = () => {
  return (
    <section id="book" className="book">
      <h1 className="heading">
        <span>b</span>
        <span>o</span>
        <span>o</span>
        <span>k</span>
        <span className='space'></span>
        <span>n</span>
        <span>o</span>
        <span>w</span>
      </h1>
      <div className="row">
        <div className="image">
          <img src={bookImage} alt="book" />
        </div>
        <form>
          <div className="inputBox">
            <h3>where to</h3>
            <input type="text" placeholder='place name' />
          </div>
          <div className="inputBox">
            <h3>how many</h3>
            <input type="number" placeholder='number of guests' />
          </div>
          <div className="inputBox">
            <h3>arrivals</h3>
            <input type="date" />
          </div>
          <div className="inputBox">
            <h3>leaving</h3>
            <input type="date"  />
          </div>
          <input type="submit" className="btn" value="book now" />
        </form>
      </div>
    </section>
  )
}

export default Book