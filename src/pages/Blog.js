import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import BlogCard from '../components/BlogCard';

function Blog() {
  return (
    <>
    <BreadCrumb title="Blogs"/>
    <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
            <div className="row">
                <div className="col-3">
                    <div className="filter-card mb-3">
                        <h3 className="filter-title">Blog categories</h3>
                        <div>
                            <ul>
                                <li>New Arrivals</li>
                                <li>Treatment</li>
                                <li>Style</li>
                                <li>Price</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-9">
                    <div className="row">
                        <div className="col-6 mb-3">
                        <BlogCard/>
                        </div>
                        <div className="col-6 mb-3">
                        <BlogCard/>
                        </div>
                        <div className="col-6 mb-3">
                        <BlogCard/>
                        </div>
                        <div className="col-6 mb-3">
                        <BlogCard/>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Blog