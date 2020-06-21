import React from 'react';
import { render } from 'react-dom';
import HelloWorld from './helloWorld';
import { hot } from 'react-hot-loader';

let MainComponent = () => <HelloWorld />;

if(process.env.NODE_ENV === 'development')
    MainComponent = hot(module)(() => <HelloWorld />);



render(<HelloWorld />, document.getElementById('root'));