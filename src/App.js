import React from 'react';
import './App.css';
import Providers from './Providers'; 
import AdminLayout from './containers/AdminLayout';

function App() {
  return (
    <Providers>
      <AdminLayout
        title="株式会社ショクリュー"
      >
        admin?
      </AdminLayout>
    </Providers>
  );
}

export default App;
