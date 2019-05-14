import React from 'react'
import { Link } from "gatsby";

const Footer = ({ data }) => {
    return (
        <footer id="footer-page">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p className="consumer-review" dangerouslySetInnerHTML={{ __html: data.footer.ConsumerReviewDisclaimer }} />
                        <p className="nonmediacl-disclaimer" dangerouslySetInnerHTML={{ __html: data.footer.NonMedicalDeviceDisclaimer }} />
                    </div>
                    <div className="col-md-6 text-sm-right text-xs-center">
                        <p className="copyright-content">{data.footer.copyright}</p>
                        <p className="copyright-text">
                            <Link to="/terms-and-policy/" className="scrollToTop privacypolicyTitle">{data.footer.privacypolicyTitle}</Link>
                        </p>
                        <p className="copyright-text" dangerouslySetInnerHTML={{ __html: data.footer.createdBy }}></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer
