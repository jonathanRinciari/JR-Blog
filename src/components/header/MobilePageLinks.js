import React from "react"
import { Link } from "gatsby"

const MobilePages = () => {
    return (
        <div className="mobile-pages-main">
            <div className="text-center" style={{paddingTop: '1rem'}}>
                <p className="d-inline p-4"><Link to="/"><span className="text-dark">Home</span></Link></p>
                <p className="d-inline p-4"><Link to="/about"><span className="text-dark">About</span></Link></p>
                <p className="d-inline p-4"><Link to="/blog"><span className="text-dark">Blog</span></Link></p>
            </div>
        </div>
    )
}

export default MobilePages


