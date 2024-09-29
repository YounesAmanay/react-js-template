import './App.css';

import React from 'react';

import { Button } from './components/ui/button';

function App() {
   return (
      <div className="h-screen w-full flex justify-center items-center gap-8 bg-slate-300">
         <Button>hello</Button>
         <Button variant="outline">hello</Button>
         <Button variant="link">hello</Button>
         <Button variant="ghost">hello</Button>
         <Button variant="destructive">hello</Button>
         <Button variant="secondary">hello</Button>
         <Button variant="primary">hello</Button>
      </div>
   );
}

export default App;
