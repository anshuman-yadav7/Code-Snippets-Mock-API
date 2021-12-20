import React from "react";
import { AiOutlineCopy } from "react-icons/ai";
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';

import { materialLight as Light } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default class Snippet extends React.Component {

    copySnippet = () => {
        const snippet = this.props.data.snippet;
        navigator.clipboard.writeText(snippet);
        alert("Copied to clipboard");
    }

    render() {
        const {data} = this.props;
        return (
            <div className="snippet-card" >
                <div className="snippets" onClick={this.myFunction}>
                    <div className="snippet-card-top">
                        <h3 id="myInput">{data.type}</h3>
                        <div className="copy-icon tooltip" onClick={this.copySnippet}><AiOutlineCopy/> <span className="tooltiptext">Copy snippet</span></div>
                    </div>
                    <div>
                        <SyntaxHighlighter language="javascript" style={Light}>
                            {data.snippet}
                        </SyntaxHighlighter>
                    </div>
                </div>
            </div>
        )
    }
}