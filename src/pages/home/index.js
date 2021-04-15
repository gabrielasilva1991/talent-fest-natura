import React, { useState } from 'react';
import Button from '../../components/Button';
import InputRadio from '../../components/InputRadio';
import batomEnergia from '../../img/batom-energia.jpg';
// import batomIntensidade from '../../img/batom-intensidade.jpg';
// import batomEntusiasmo from '../../img/batom-entusiasmo.jpg';

export default function Home() {
  const questionOne = {
    answerOne: 'Aberto e Alegre',
    answerTwo: 'Clássico e Atemporal',
    answerThree: 'Arroxeado e Vibrante',
  }

  const questionTwo = {
    answerOne: ' Tons quentes como, amarelos e laranjas',
    answerTwo: ' Tons frios, como azuis e cinzas',
    answerThree: 'Não importa a cor, desde que seja forte',
  }

  const questionThree = {
    answerOne: 'Vermelha',
    answerTwo: 'Bronzeada',
  }

  const questionFour = {
    answerOne: 'Tenho lábios finos',
    answerTwo: 'Borra com facilidade',
    answerThree: 'A cor não fica intensa'
  }

  const [questionOneResponseOne, setQuestionOneResponseOne] = useState('');
  const [questionOneResponseTwo, setQuestionOneResponseTwo] = useState('');
  const [questionOneResponseThree, setQuestionOneResponseThree] = useState('');

  const handleResponseOne = () => {
    setQuestionOneResponseOne(questionOne.answerOne);
  };

  console.log(questionOneResponseOne)

  const handleResponseTwo = () => {
    setQuestionOneResponseTwo(questionOne.answerTwo);
  };

  console.log(questionOneResponseTwo)

  const handleResponseThree = () => {
    setQuestionOneResponseThree(questionOne.answerThree);
  };

  console.log(questionOneResponseThree)




  const [questionTwoResponseOne, setQuestionTwoResponseOne] = useState('');
  const [questionTwoResponseTwo, setQuestionTwoResponseTwo] = useState('');
  const [questionTwoResponseThree, setQuestionTwoResponseThree] = useState('');

  const handleOneResponse = () => {
    setQuestionTwoResponseOne(questionTwo.answerOne);
  };

  console.log(questionTwoResponseOne)

  const handleTwoResponse = () => {
    setQuestionTwoResponseTwo(questionTwo.answerTwo);
  };

  console.log(questionTwoResponseTwo)

  const handleThreeResponse = () => {
    setQuestionTwoResponseThree(questionTwo.answerThree);
  };

  console.log(questionTwoResponseThree)




  const [questionThreeResponseOne, setQuestionThreeResponseOne] = useState('');
  const [questionThreeResponseTwo, setQuestionThreeResponseTwo] = useState('');

  const oneHandleResponse = () => {
    setQuestionThreeResponseOne(questionThree.answerOne);
  };

  console.log(questionThreeResponseOne)

  const twoHandleResponse = () => {
    setQuestionThreeResponseTwo(questionThree.answerTwo);
  };

  console.log(questionThreeResponseTwo)



  const [questionFourResponseOne, setQuestionFourResponseOne] = useState('');
  const [questionFourResponseTwo, setQuestionFourResponseTwo] = useState('');
  const [questionFourResponseThree, setQuestionFourResponseThree] = useState('');

  const handleOneResponseFour = () => {
    setQuestionFourResponseOne(questionFour.answerOne);
  };

  console.log(questionFourResponseOne)

  const handleTwoResponseFour = () => {
    setQuestionFourResponseTwo(questionFour.answerTwo);
  };

  console.log(questionFourResponseTwo)

  const handleThreeResponseFour = () => {
    setQuestionFourResponseThree(questionFour.answerThree);
  };

  console.log(questionFourResponseThree)


  return (
    <>
      <header className='header centered'>
        <div className='header-container'>
          <h1>Descubra o<br />
            <span className='handwritten-font'>seu <br />vermelho</span>
          </h1>

          <Button
            buttonLink='#section-name'
            buttonClass='nav-button'
            buttonTextClass='nav-button-text'
            buttonText='Próximo'
            iconClass='icon-arrow-down fas fa-chevron-down'
          />
        </div>
      </header>

      <main>
        <section id='section-name' className='section-base centered'>
          <div className='section-container'>
            <Button
              buttonLink='#'
              buttonClass='nav-button'
              buttonTextClass='nav-button-text'
              buttonText='Voltar'
              iconClass='icon-arrow-up fas fa-chevron-up'
            />

            <div className='input-name-wrap'>
              <label className='default-text'>Insira seu nome</label>
              <input
                type='text'
                minLength='1'
                size='12'
                className='input-username centered'
              />
            </div>

            <Button
              navType='next'
              buttonLink='#section-quiz-01'
              buttonClass='nav-button'
              buttonTextClass='nav-button-text'
              buttonText='Próximo'
              iconClass='icon-arrow-down fas fa-chevron-down'
            />
          </div>
        </section>

        <section id='section-quiz-01' className='section-base centered'>
          <div className='section-container'>
            <Button
              buttonLink='#section-name'
              buttonClass='nav-button'
              buttonTextClass='nav-button-text'
              // buttonText='Voltar'
              iconClass='icon-arrow-up fas fa-chevron-up'
            />

            <p className='default-text'>1. Que tipo de vermelho mais combina com você?</p>

            <InputRadio
              inputClass='input-radio input-answer'
              inputId='light'
              inputName='type-of-red'
              inputRequired
              inputValue={questionOneResponseOne}
              // inputChecked=''
              inputOnChange={handleResponseOne}
              labelHtmlFor='light'
              labelClass='label-answer button-base'
              labelText='Aberto e alegre'
            />

            <InputRadio
              inputClass='input-radio input-answer'
              inputId='purple'
              inputName='type-of-red'
              inputRequired
              inputValue={questionOneResponseThree}
              // inputChecked=''
              inputOnChange={handleResponseThree}
              labelHtmlFor='purple'
              labelClass='label-answer button-base'
              labelText='Arroxeado e vibrante'
            />

            <InputRadio
              inputClass='input-radio input-answer'
              inputId='classic'
              inputName='type-of-red'
              inputRequired
              inputValue={questionOneResponseTwo}
              // inputChecked=''
              inputOnChange={handleResponseTwo}
              labelHtmlFor='classic'
              labelClass='label-answer button-base'
              labelText='Clássico e atemporal'
            />

            <Button
              navType='next'
              buttonLink='#section-quiz-02'
              buttonClass='nav-button'
              buttonTextClass='nav-button-text'
              // buttonText='Próximo'
              iconClass='icon-arrow-down fas fa-chevron-down'
            />
          </div>
        </section>

        <section id='section-quiz-02' className='section-base centered'>
          <div className='section-container'>
            <p className='default-text'>2. Quais as cores predominantes<br />no seu guarda-roupa?</p>
            <InputRadio
              inputClass='input-radio input-answer'
              inputId='cold'
              inputName='wardrobe-colors'
              inputRequired
              inputValue={questionTwoResponseTwo}
              // inputChecked=''
              inputOnChange={handleTwoResponse}
              labelHtmlFor='cold'
              labelClass='label-answer button-base'
              labelText='Tons frios, como azuis e cinzas'
            />
            <InputRadio
              inputClass='input-radio input-answer'
              inputId='warm'
              inputName='wardrobe-colors'
              inputRequired
              inputValue={questionTwoResponseOne}
              // inputChecked=''
              inputOnChange={handleOneResponse}
              labelHtmlFor='warm'
              labelClass='label-answer button-base'
              labelText='Tons quentes, como amarelos e laranjas'
            />
            <InputRadio
              inputClass='input-radio input-answer'
              inputId='strong'
              inputName='wardrobe-colors'
              inputRequired
              inputValue={questionTwoResponseThree}
              // inputChecked=''
              inputOnChange={handleThreeResponse}
              labelHtmlFor='strong'
              labelClass='label-answer button-base'
              labelText='Não importa a cor, desde que seja forte'
            />
            <Button
              buttonLink='#section-quiz-03'
              buttonClass='nav-button'
              buttonTextClass='nav-button-text'
              buttonText='Próximo'
              iconClass='icon-arrow-down fas fa-chevron-down'
            />
          </div>
        </section>

        <section id='section-quiz-03' className='section-base centered'>
          <p className='default-text'>3. Quando você toma sol, <br />sua pele fica</p>
          <InputRadio
            inputClass='input-radio input-answer'
            inputId='burned'
            inputName='skin-sensitivity'
            inputRequired
            inputValue={questionThreeResponseOne}
            // inputChecked=''
            inputOnChange={oneHandleResponse}
            labelHtmlFor='burned'
            labelClass='label-answer button-base'
            labelText='Vermelha'
          />
          <InputRadio
            inputClass='input-radio input-answer'
            inputId='bronzed'
            inputName='skin-sensitivity'
            inputRequired
            inputValue={questionThreeResponseTwo}
            // inputChecked=''
            inputOnChange={twoHandleResponse}
            labelHtmlFor='bronzed'
            labelClass='label-answer button-base'
            labelText='Bronzeada'
          />
          <Button
            buttonLink='#section-quiz-04'
            buttonClass='nav-button'
            buttonTextClass='nav-button-text'
            buttonText='Próximo'
            iconClass='icon-arrow-down fas fa-chevron-down'
          />
        </section>

        <section id='section-quiz-04' className='section-base centered'>
          <p className='default-text'>4. Qual sua maior dificuldade ao usar um batom chamativo?</p>
          <InputRadio
            inputClass='input-radio input-answer'
            inputId='thin-lips'
            inputName='makeup-difficulty'
            inputRequired
            inputValue={questionFourResponseOne}
            // inputChecked=''
            inputOnChange={handleOneResponseFour}
            labelHtmlFor='thin-lips'
            labelClass='label-answer button-base'
            labelText='Tenho lábios finos'
          />
          <InputRadio
            inputClass='input-radio input-answer'
            inputId='smudged-lipstick'
            inputName='makeup-difficulty'
            inputRequired
            inputValue={questionFourResponseTwo}
            // inputChecked=''
            inputOnChange={handleTwoResponseFour}
            labelHtmlFor='smudged-lipstick'
            labelClass='label-answer button-base'
            labelText='Borra com facilidade'
          />
          <InputRadio
            inputClass='input-radio input-answer'
            inputId='mild-color'
            inputName='makeup-difficulty'
            inputRequired
            inputValue={questionFourResponseThree}
            // inputChecked=''
            inputOnChange={handleThreeResponseFour}
            labelHtmlFor='mild-color'
            labelClass='label-answer button-base'
            labelText='A cor não fica intensa'
          />
          <Button
            buttonLink='#section-manifesto'
            buttonClass='nav-button'
            buttonTextClass='nav-button-text'
            buttonText='Próximo'
            iconClass='icon-arrow-down fas fa-chevron-down'
          />
        </section>

        <section id='section-manifesto' className='section-manifesto section-base centered'>
          <article className='manifesto-text'>
            <p>Espalhe a força do vermelho.</p>
            <p>Esse vermelho é todo seu.</p>
            <p>E quanto mais seu,</p>
            <p>cada vez mais nosso.</p>
          </article>
          <Button
            buttonLink='#section-reveal'
            buttonClass='nav-button red-color'
            buttonTextClass='nav-button-text'
            buttonText='Descubra o  seu vermelho'
            iconClass='icon-arrow-down fas fa-chevron-down'
          />
        </section>

        <section id='section-lipstick' className='section-base section-lipstick centered'>
          <div className='your-red'>
            <p className=''>Cliente,<br />seu vermelho é o</p>
            <p className='your-red-handwritten'>energia</p>
          </div>
          <img className='lipstick-img' src={batomEnergia} alt='Batom Energia'></img>

          <Button
            buttonLink='https://www.natura.com.br/p/batom-marmorizado-natura-una-3,5g/7096?color=Vermelho%20Energia'
            buttonClass='button-buy'
            buttonTextClass='button-buy-text'
            buttonText='Compre agora'
          />

          <Button
            buttonLink='#section-lipstick'
            buttonClass='nav-button'
            buttonTextClass='nav-button-text'
            buttonText='Veja o tutorial'
            iconClass='icon-arrow-down fas fa-chevron-down'
          />
        </section>
      </main>
    </>
  );
}
