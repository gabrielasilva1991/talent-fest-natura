import React from 'react';

//inserido {Link} para teste de rotas
import { Link } from 'react-router-dom';

const Home = () => {
 
  return (
    <>
      <div className='page-container'>

        <h1>Home</h1>

        <p>
          <Link to='/login'>Login</Link>
        </p>
        
      </div>
    </>
  );
}

export default Home;
