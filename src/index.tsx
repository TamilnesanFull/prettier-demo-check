import React from 'react';
import ReactDOM from 'react-dom/client';
import SearchApp from './serach/searchApp';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
    <React.StrictMode>
        <SearchApp />

        <div>
            {' '}
            <p> I am test paragraph</p>
        </div>
    </React.StrictMode>
);
