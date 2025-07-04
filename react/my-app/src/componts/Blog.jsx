import React from 'react'
import '../Blog.css'

function Blog() {
    return (
        <div>
            <section className="site-section" id="Blog">
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-md-8 text-center">
                            <h2 className="text-black h1 site-section-heading text-center">Blog</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
                            <div className="h-entry">
                                <a href="single.html"><img src="img1.png" alt="Image" className="img-fluid" /></a>
                                <h2 className="text">Create Beautiful Website In Less Than An Hour</h2>
                                <div className="meta mb-4">Ham Brook <span className="mx-2">•</span> Jan 18, 2019<span className="mx-2">•</span> <a href="#">News</a></div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
                                <p><a href="#">Continue Reading...</a></p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
                            <div className="h-entry">
                                <a href="single.html"><img src="img2.png" alt="Image" className="img-fluid" /></a>
                                <h2 className="text">Create Beautiful Website In Less Than An Hour</h2>
                                <div className="meta mb-4">James Phelps <span className="mx-2">•</span> Jan 18, 2019<span className="mx-2">•</span> <a href="#">News</a></div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
                                <p><a href="#">Continue Reading...</a></p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
                            <div className="h-entry">
                                <a href="single.html"><img src="img1.png" alt="Image" className="img-fluid" /></a>
                                <h2 className="text">Create Beautiful Website In Less Than An Hour</h2>
                                <div className="meta mb-4">James Phelps <span className="mx-2">•</span> Jan 18, 2019<span className="mx-2">•</span> <a href="#">News</a></div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
                                <p><a href="#">Continue Reading...</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Blog
