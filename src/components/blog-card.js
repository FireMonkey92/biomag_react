import React from 'react'
import { Link } from 'gatsby';
import Img from "gatsby-image";

const BlogCard = ({ blog }) => {
    return (
        <div id="blogCard">
            <div className="blog-img">
                <Link to={`/blog/${blog.path}`}>
                    <Img fluid={blog.blogImg.childImageSharp.fluid} />
                </Link>
            </div>
            <div className="blog-heading">
                <Link to={`/blog/${blog.path}`}>
                    <h5>{blog.blogName}</h5>
                </Link>
            </div>
            <Link to={`/blog/${blog.path}`}>
                <div className="blog-content-minheight">
                    <div dangerouslySetInnerHTML={{ __html: blog.shortDescription }}/>
                </div>
            </Link>
            <div className="admin-readmore-content">
                <span className="blogAdmin">{blog.blogAdmin}</span>
                <Link className="readMore" to={`/blog/${blog.path}`}>{blog.blogReadmore}</Link>
            </div>
        </div>
    )
}

export default BlogCard
