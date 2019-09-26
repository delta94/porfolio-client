import React from 'react';
import VanillaJavascript from 'Assets/Icons/vanillaJavscript';
import PHP from 'Assets/Icons/php';
import Python from 'Assets/Icons/python';
import Angular from 'Assets/Icons/angular';
import ReactJS from 'Assets/Icons/react';
import Vue from 'Assets/Icons/vue';
import Laravel from 'Assets/Icons/laravel';
import NodeJS from 'Assets/Icons/nodejs';
import Sass from 'Assets/Icons/sass';
import Less from 'Assets/Icons/less';
import Swift from 'Assets/Icons/swift';
import HTML5 from 'Assets/Icons/html5';
import CSS3 from 'Assets/Icons/css3';

export default ({ type, ...rest }) => {
    const mapTypeToComponent = {
        vanillaJavascript: VanillaJavascript,
        php: PHP,
        python: Python,
        angular: Angular,
        react: ReactJS,
        vue: Vue,
        laravel: Laravel,
        nodejs: NodeJS,
        sass: Sass,
        less: Less,
        swift: Swift,
        html: HTML5,
        css: CSS3
    };
    const C = mapTypeToComponent[type] || null;
    return C ? <C {...rest}/> : null;
}