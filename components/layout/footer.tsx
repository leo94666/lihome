import React, {ReactNode} from "react";
import {findDOMNode} from "react-dom";
import {className} from "postcss-selector-parser";

function footer({className}: { className: string }) {


    return (
        <footer className={`${className}`}>
            <p className="text-center bg-amber-900">
                <a className="text-white"> ©2023 </a>

                <a
                    className="text-white"
                    href="https://github.com/leo94666"
                    target="_blank"
                >
                    李之阳
                </a>
                <a className="text-white"> | </a>
                <a
                    className="text-white"
                    href="https://github.com/leo94666/lihome"
                    target="_blank"
                >
                    Github
                </a>
                <a className="text-white"> | </a>
                <a className="text-white"> 关于 </a>
            </p>
        </footer>
    );
}

export default footer;
