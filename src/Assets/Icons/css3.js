import React from 'react';
import { Icon } from 'antd';

const Svg = () => (
    <svg t="1569223993512" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11161" width="28" height="28"><path d="M512 512zM128.3 64.3l69.8 805.8 313.4 89.5L825.8 870l69.9-805.7H128.3z m580.9 669.3l-197.1 56.2-196.8-56.5L301.9 578h96.4l6.9 79.1 107.1 30.3 0.3 0.5h0.1l106.9-29.7L630.7 530H406.1l-8-99.9h241.1l8.8-101.9H280.2l-8-97.9H753l-43.8 503.3z" fill="#264DE4" p-id="11162"></path></svg>
);

export default (props) => (<Icon component={Svg} {...props} />);