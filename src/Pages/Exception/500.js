import React from 'react';
import Exception from './Exception';

export default () => (
    <Exception errorCode={500} errorMessage={'Internal Server Error'} />
);