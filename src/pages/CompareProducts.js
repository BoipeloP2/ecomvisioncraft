import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Color from '../components/Color';


const CompareProducts = () => {
  return (
    
    <>
    <BreadCrumb title="Compare"/>

    <div className="compare-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
            <div className="row">
                <div className="col-3">
                    <div className="compare-product-card position-relative">
                        <img src="images/cross.svg" alt="cross" className='position-absolute cross img-fluid' />
                        <div className="product-card-image">
                            <img src="images/watch.jpg" alt="watch" />
                        </div>
                        <div className="compare-product-details">
                            <h5 className='title'> Super clear view For your eyes</h5>
                            <h6 className='price mb-3 mt-3'>R500</h6>
                            <div>
                                <div className="product-detail ">
                                    <h5>Brand</h5>
                                    <p>Glazimo</p>

                                </div>
                                <div className="product-detail ">
                                    <h5>Type</h5>
                                    <p>Specs</p>

                                </div>
                                <div className="product-detail ">
                                    <h5>Availability</h5>
                                    <p>In Stock</p>

                                </div>
                                <div className="product-detail ">
                                    <h5>Colour</h5>
                                    <Color/>

                                </div>
                                <div className="product-detail ">
                                    <h5>Size</h5>
                                    <div className="d-flex gap-10">
                                    <p>S</p>
                                    <p>M</p>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* compare product end */}

                
                <div className="col-3">
                    <div className="compare-product-card position-relative">
                        <img src="images/cross.svg" alt="cross" className='position-absolute cross img-fluid' />
                        <div className="product-card-image">
                            <img src="images/watch.jpg" alt="watch" />
                        </div>
                        <div className="compare-product-details">
                            <h5 className='title'> Super clear view For your eyes</h5>
                            <h6 className='price mb-3 mt-3'>R500</h6>
                            <div>
                                <div className="product-detail ">
                                    <h5>Brand</h5>
                                    <p>Glazimo</p>

                                </div>
                                <div className="product-detail ">
                                    <h5>Type</h5>
                                    <p>Specs</p>

                                </div>
                                <div className="product-detail ">
                                    <h5>Availability</h5>
                                    <p>In Stock</p>

                                </div>
                                <div className="product-detail ">
                                    <h5>Colour</h5>
                                    <Color/>

                                </div>
                                <div className="product-detail ">
                                    <h5>Size</h5>
                                    <div className="d-flex gap-10">
                                    <p>S</p>
                                    <p>M</p>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  </>
  
  )
   
  
}

export default CompareProducts