import React from 'react'
import ReactStars from "react-rating-stars-component";
import {Link, useLocation} from "react-router-dom";



const ProductCard = (props) => {
    const {grid } = props;
    let location = useLocation();
    
  return (
    <>
    <div className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}>
        <Link to="/product/:id" className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
                    <Link>
                <img src="images/wish.svg" alt="wishlist" />
                </Link>
                </div>
           <div className="product-image">
               <img src="/images/watch.jpg" className="img-fluid" alt="product image" />
               <img src="/images/watch-01.jpg" className="img-fluid" alt="product image" />
           </div>
           
            <div className="product-details">
                <h6 className="brand">Glasses</h6>
                <h5 className="product-title">Glasse for kids with vision dissability</h5>
                <ReactStars count={5} size={24} value="3" edit={false} activeColor="#ffd700" />
                <p className={`description ${grid===12 ? "d-block" : "d-none"}`} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique cumque,. Temporibus pariatur adipisci cupiditate,</p>

                <p className="price">R500</p>
            </div>
            <div className="action-bar position-absolute">
                <div className="d-flex flex-column gap-15">
                    <Link><img src="images/view.svg" alt="" /></Link>
                    <Link><img src="images/prodcompare.svg" alt="" /></Link>
                    <Link><img src="images/add-cart.svg" alt="" /></Link>
                    {/* <Link><img src="images/add-cart.svg" alt="" /></Link> */}
                </div>
            </div>
        </Link>
    </div>

    <div className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}>
        <Link className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
                    <Link>
                <img src="images/wish.svg" alt="wishlist" />
                </Link>
                </div>
            <div className="product-image">
                <img src="/images/watch.jpg" className='img-fluid' alt="product image" />
                <img src="/images/watch-01.jpg" className='img-fluid' alt="product image" />
               
            </div>
            <div className="product-details">
                <h6 className="brand">Glasses</h6>
                <h5 className="product-title">Glasse for kids with vision dissability</h5>
                <ReactStars count={5} size={24} value="3" edit={false} activeColor="#ffd700" />
                <p className={`description ${grid===12 ? "d-block" : "d-none"}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique cumque,. Temporibus pariatur adipisci cupiditate,</p>
                <p className="price">R500</p>
            </div>
            <div className="action-bar position-absolute">
                <div className="d-flex flex-column gap-15">
                    <Link><img src="images/view.svg" alt="" /></Link>
                    <Link><img src="images/prodcompare.svg" alt="" /></Link>
                    <Link><img src="images/add-cart.svg" alt="" /></Link>
                    {/* <Link><img src="images/add-cart.svg" alt="" /></Link> */}
                </div>
            </div>
        </Link>
    </div>
    
    </>
  )
}

export default ProductCard