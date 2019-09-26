import React from 'react';
import Exception from './Exception';

export default () => (
    <Exception errorCode={404} errorMessage={'Page Not Found'} />
);