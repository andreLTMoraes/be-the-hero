import React from 'react';
import api from '../../services/api';


export default [
    async function handleLogin(e) {
        e.preventDefault();
        
        try {
            const res = await api.post('sessions', {id})
        }
    },
];