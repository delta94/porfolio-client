import React from 'react';
import { Icon } from 'antd';

const Svg = () => (
    <svg t="1569223969988" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10510" width="28" height="28"><path d="M116.7 63.8l71.9 806.9 322.8 89.6 323.7-89.8 72.1-806.7H116.7z m634 263.9H372l9 101.3h360.7l-27.2 303.8-203 56.3-202.7-56.3-13.9-155.4h99.4l7.1 79 110.2 29.7 0.3-0.1L622 656.3 633.5 528h-343l-26.7-299.2h495.7l-8.8 98.9z" fill="#E44D26" p-id="10511"></path></svg>
);

export default (props) => (<Icon component={Svg} {...props} />);