import React, { useState } from 'react';

// const Login = () => {
 
//   return (
//     <>
//       <div className='page-container'>
        
//         <h1>Login</h1>

//       </div>
//     </>
//   );
// }

const Login = () => {
  const [cardFile, setCardFile] = useState();

  const handleUploadFile = (e) => setCardFile(URL.createObjectURL(e.target.files[0]));

  const questionOne = { 
    answerOne : 'Aberto e Alegre',
    answerTwo : 'Clássico e Atemporal',
    answerThree : 'Arroxeado e Vibrante',
  }

  const questionTwo = { 
    answerOne : ' Tons quentes como, amarelos e laranjas',
    answerTwo : ' Tons frios, como azuis e cinzas',
    answerThree : 'Não importa a cor, desde que seja forte',
  }

  const questionThree = { 
    answerOne : 'Vermelha',
    answerTwo : 'Bronzeada',
  }

  const [questionOneResponseOne, setQuestionOneResponseOne] = useState(''); 
  const [questionOneResponseTwo, setQuestionOneResponseTwo] = useState(''); 
  const [questionOneResponseThree, setQuestionOneResponseThree] = useState('');

  const handleResponseOne = (e) => {
    setQuestionOneResponseOne(questionOne.answerOne);
  };

  console.log(questionOneResponseOne)

  const handleResponseTwo = (e) => {
    setQuestionOneResponseTwo(questionOne.answerTwo);
  };

  console.log(questionOneResponseTwo)
  
  const handleResponseThree = (e) => {
    setQuestionOneResponseThree(questionOne.answerThree);
  };

  console.log(questionOneResponseThree)




  const [questionTwoResponseOne, setQuestionTwoResponseOne] = useState(''); 
  const [questionTwoResponseTwo, setQuestionTwoResponseTwo] = useState(''); 
  const [questionTwoResponseThree, setQuestionTwoResponseThree] = useState('');

  const handleOneResponse = (e) => {
    setQuestionTwoResponseOne(questionTwo.answerOne);
  };

  console.log(questionTwoResponseOne)

  const handleTwoResponse = (e) => {
    setQuestionTwoResponseTwo(questionTwo.answerTwo);
  };

  console.log(questionTwoResponseTwo)
  
  const handleThreeResponse = (e) => {
    setQuestionTwoResponseThree(questionTwo.answerThree);
  };

  console.log(questionTwoResponseThree)




  const [questionThreeResponseOne, setQuestionThreeResponseOne] = useState(''); 
  const [questionThreeResponseTwo, setQuestionThreeResponseTwo] = useState(''); 
 
  const oneHandleResponse = (e) => {
    setQuestionThreeResponseOne(questionThree.answerOne);
  };

  console.log(questionThreeResponseOne)

  const twoHandleResponse = (e) => {
    setQuestionThreeResponseTwo(questionThree.answerTwo);
  };

  console.log(questionThreeResponseTwo)
  

  return (
    <>
      <div>
          <label className="form-label">File</label>
          <input type="file" onChange={handleUploadFile} accept="application/jpg" />
          <img alt='img' src={cardFile}/> 
      </div>

      {/* onClick={(event) => {
        const ordersCollection = [{ order: order }];
        sessionStorage.setItem(
          "order",
          JSON.stringify(ordersCollection)
        );
        sessionStorage.setItem("status", "pending");
        postOrder(event);
      }} */}

      <section>
        <div>
          <button className='responses'
            type='submit'    
            value={questionOneResponseOne}
            onClick ={handleResponseOne}> 
            Aberto e Alegre
          </button>
        </div>
        
        <div>
          <button className='responses'
            type='submit'        
            value={questionOneResponseTwo}
            onClick ={handleResponseTwo}> 
            Clássico e Atemporal
          </button>
        </div>

        <div>
          <button className='responses'
            type='submit'        
            value={questionOneResponseThree}
            onClick ={handleResponseThree}>
            Arroxeado e Vibrante
          </button>
        </div>
      </section>



      <section>
        <div>
          <button className='responses'
            type='submit'    
            value={questionTwoResponseOne}
            onClick ={handleOneResponse}> 
            Tons quentes como, amarelos e laranjas
          </button>
        </div>
        
        <div>
          <button className='responses'
            type='submit'        
            value={questionTwoResponseTwo}
            onClick ={handleTwoResponse}> 
            Tons frios, como azuis e cinzas
          </button>
        </div>

        <div>
          <button className='responses'
            type='submit'        
            value={questionTwoResponseThree}
            onClick ={handleThreeResponse}>
            Não importa a cor, desde que seja forte
          </button>
        </div>
      </section>



      <section>
        <div>
          <button className='responses'
            type='submit'    
            value={questionThreeResponseOne}
            onClick ={oneHandleResponse }> 
            Vermelha
          </button>
        </div>
        
        <div>
          <button className='responses'
            type='submit'        
            value={questionThreeResponseTwo}
            onClick ={twoHandleResponse}> 
            Bronzeada
          </button>
        </div>
      </section>
    </>
  );

}

export default Login;
