import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import ReactStars from "react-rating-stars-component";
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';




const SingleProduct = () => {

  const [orderedProduct, setoredProduct] = useState(true);
  return (
    <>
    <BreadCrumb title="Refund Policy"/>

    <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
            <div className="row">
                <div className="col-6">

                </div>
                <div className="col-6"></div>
            </div>
        </div>
    </div>

    <div className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                <h4 className="">Description</h4>

                  <div className='bg-white p-3'>
                    <p className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aliquid quisquam commodi minima cumque incidunt inventore quo ad quaerat corrupti dolores repellat quia repellendus temporibus iusto voluptatibus omnis, provident sequi.
                    </p>
                  </div>
                </div>
            </div>
        </div>
                        
     </div>
    <section className="reviews-wrapper  home-wrapper-2">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                <h3>Reviews</h3>

                    <div className="review-inner-wrapper">
                    <div className="review-head d-flex justify-content-between align-items-end">
                        <div>
                            <h4 className='mb-2'>Customer Reviews</h4>
                        <div className='d-flex gap-10 align-items-center'>
                          <ReactStars  cout={5} size={24} value={4} edit={false} activeColor="#ffd700"/>
                        <p className="mb-0">Based on 2 Reviews</p>
                        </div>
                        </div>
                        {orderedProduct && (<div><a className='text-dark text-decoration-underline' href=''>Write A Review</a></div>)}
                        
                    </div>
                    <div className="review-form py-4">
                      <h4>Write A Reivew</h4>
                    <form action="" className='d-flex flex-column gap-15'>
                      <div>
                      <ReactStars  cout={5} size={24} value={4} edit={true} activeColor="#ffd700"/>

                      </div>
                    <div><textarea className="w-100 form-control" cols="30" rows="5" placeholder="Comment" ></textarea></div>
                    <div className='d-flex justify-content-end'>
                  <button className='button border-0'> Send Review</button>
                    </div>
                  </form>
                    </div>
                    <div className="reviews mt-4">
                      <div className="review">
                       <div className='d-flex gap-10 align-items-center'><h6>Boipelo</h6><ReactStars count={5} size={24} value={3} edit={false}/></div> 
                        <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, rerum ipsa. Maiores iure autem in! Officia at necessitatibus, voluptatum commodi maiores, modi mollitia est repellat hic omnis cumque repudiandae quibusdam?</p>
                      </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="popular-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          {/* <div className="col-2 "></div>
          <div className="col-2"></div> */}
          < ProductCard />
         
        </div>
      </div>
    </section>
    </>
  )
}

export default SingleProduct