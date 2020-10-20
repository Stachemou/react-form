import React from 'react';
import ReactDOM from 'react-dom';
import {Application} from './Application';

const root = document.getElementById('root');
const actualDare = new Date();
ReactDOM.render(<Application propriete1={actualDare}>
    <div>
        <h3>Ceci est un titre</h3>
        <p>lorem ipsumm</p>
    </div>
    </Application>, root);