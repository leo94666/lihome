import React, {ReactNode} from "react";
import {findDOMNode} from "react-dom";
import {className} from "postcss-selector-parser";

function footer({className}: { className: string }) {


    return (
        <footer className={`${className}`}>
            <p className="text-center text-base">
                <a> ©2023 </a>

                <a
                    href="https://github.com/leo94666"
                    target="_blank"
                >
                    李之阳
                </a>
                <a> | </a>
                <a
                    href="https://github.com/leo94666/lihome"
                    target="_blank"
                >
                    Github
                </a>
                <a> | </a>
                <a> 关于 </a>
            </p>
        </footer>
    );
}

export default footer;
