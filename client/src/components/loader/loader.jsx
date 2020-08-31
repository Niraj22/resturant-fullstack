import React from "react";
import { css } from "@emotion/core";
import BarLoader from "react-spinners/BarLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  width:20rem;
`;

class Loader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    render() {
        return (
            <div className="sweet-loading">
                <BarLoader
                    css={override}
                    size={250}
                    color={"#fd6a00"}
                    loading={this.state.loading}
                />
            </div>
        );
    }
}
export default Loader