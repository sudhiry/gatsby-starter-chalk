import React from "react"

import { Link } from "gatsby";

const TechTag = (props) => {
    const { tag, tech, name, size, color } = props
    const str = name;
    return (
        <div className="d-inline-block p-1">
            <Link to={`/tags/${tag}/`}>
                <button
                    className="tech-tag text-white">
                    <p className="d-inline">{tech} </p>
                </button>
            </Link>

        </div>

    )
}

export default TechTag