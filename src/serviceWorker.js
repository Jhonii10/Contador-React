import self from 'react'

const CACHE_ELEMENTS = [
    './',
    '../public/index.html',
    './Contador.js',
    './App.css'
]

const CACHE_NAME = 'V1_cache_contador_react';

self.addEventListener('active', (e) => {


    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => { 
            cache
                .addAll(CACHE_ELEMENTS)
                .then(() => {
                    self.skipWaiting();
                })
                .catch(console.log);
        })      
    );
});
    