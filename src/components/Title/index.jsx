import PropTypes from "prop-types";

import { Title } from "./styles"

function DefaultTitle({ children, ...props }){

    return (
        <Title {...props}> {children} </Title>
    )
}

DefaultTitle.propTypes = {
    children: PropTypes.node.isRequired,
    theme: PropTypes.string
}

export default DefaultTitle