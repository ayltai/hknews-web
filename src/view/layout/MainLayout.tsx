import React from 'react';

import { MainAppBar } from './MainAppBar';

const { Layout } = require('react-admin');

export const MainLayout : React.FunctionComponent<any> = (props : any) : React.ReactElement => (
    <Layout
        appBar={MainAppBar}
        {...props} />
);
