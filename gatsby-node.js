const path = require('path');
const trainingPage = 'src/templates/page/training.js'
const blogPage = 'src/templates/page/blog.js'
const blogPageComponent = './src/templates/post/blog.js';
const therapistPage = 'src/templates/page/therapists.js'
const termsAndPolicyPage = 'src/templates/page/terms-and-policy.js'

exports.createPages = ({ actions: { createPage }, graphql }) => {
    createPage({
        path: "/",
        component: path.resolve('./src/layout/index.js'),
        context: {
            pageType: "Landing Page"
        }
    });
    createPage({
        path: "/training/",
        component: path.resolve(trainingPage)
    });
    createPage({
        path: "/blog/",
        component: path.resolve(blogPage)
    });
    createPage({
        path: "/therapist/",
        component: path.resolve(therapistPage)
    });
    createPage({
        path: "/terms-and-policy/",
        component: path.resolve(termsAndPolicyPage)
    });
    return graphql(`{
            biomagJson {
                blog {
                    blogDescription {
                        path
                    }
                }
            }
    }`).then(res => {
        if (res.error)
            return Promise.reject(res.error)
        res.data.biomagJson.blog.blogDescription.forEach((node) => {
            createPage({
                path: `/blog/${node.path}`,
                component: path.resolve(blogPageComponent),
                context: {
                    pageURL: node.path,
                    pageType: 'Blog'
                }
            })
        })
    })
}
