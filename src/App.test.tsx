import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';

it('renders without errors', () : void => {
    const div : Element = document.createElement('div');

    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});
