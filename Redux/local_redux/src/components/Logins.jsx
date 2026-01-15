import React, { useState } from 'react'

export const LoginsCompo = ( { props }) => {
  console.log('🚀 ~ props:', props);
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        const payload = { email,pass };
        props(payload);
    }
  return (
    
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh' 
      }}
    >
        
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '300px',
          gap: '20px',
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '8px'
        }}
        onSubmit={handleSubmit}
      >
        <h1 style={{ textAlign: 'center' }}>Login</h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            placeholder="Enter your email..."
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            placeholder="Enter the password..."
            onChange={(e) => setPass(e.target.value)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
