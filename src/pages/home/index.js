import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import Button from '../../components/Button';
import InputRadio from '../../components/InputRadio';
import redMarble from '../../img/red-marble.jpg';

export default function Home() {
  const history = useHistory()

  const questionOne = {
    answerOne: '5',
    answerTwo: '10',
    answerThree: '15',
  }

  const questionTwo = {
    answerOne: '5',
    answerTwo: '10',
    answerThree: '15',
  }

  const questionThree = {
    answerOne: '5',
    answerTwo: '10',
  }

  const questionFour = {
    answerOne: '5',
    answerTwo: '10',
    answerThree: '15'
  }

  const [allResponses, setAllResponses] = useState('');
  const [total, setTotal] = useState(0);

  const handleResponseOne = () => {
    setAllResponses([...allResponses, Number(questionOne.answerOne)]);
  };

  const handleResponseTwo = () => {
    setAllResponses([...allResponses, Number(questionOne.answerTwo)]);
  };

  const handleResponseThree = () => {
    setAllResponses([...allResponses, Number(questionOne.answerThree)]);
  };

  const handleOneResponse = () => {
    setAllResponses([...allResponses, Number(questionTwo.answerOne)]);
  };

  const handleTwoResponse = () => {
    setAllResponses([...allResponses, Number(questionTwo.answerTwo)]);
  };

  const handleThreeResponse = () => {
    setAllResponses([...allResponses, Number(questionTwo.answerThree)]);
  };

  const oneHandleResponse = () => {
    setAllResponses([...allResponses, Number(questionThree.answerOne)]);
  };

  const twoHandleResponse = () => {
    setAllResponses([...allResponses, Number(questionThree.answerTwo)]);
  };

  const handleOneResponseFour = (e) => {
    setAllResponses([...allResponses, Number(questionFour.answerOne)]);
    localStorage.setItem('responseOne', e.target.value);
  };

  const handleTwoResponseFour = (e) => {
    setAllResponses([...allResponses, Number(questionFour.answerTwo)]);
    localStorage.setItem('responseTwo', e.target.value)
  };

  const handleThreeResponseFour = (e) => {
    setAllResponses([...allResponses, Number(questionFour.answerThree)]);
    localStorage.setItem('responseThree', e.target.value)
  };

  useEffect(() => {
    if (!allResponses) return
    setTotal(() => {
      const newTotal = allResponses.reduce((accumulator, current) => {
        return Number(accumulator) + Number(current);
      }, 0);

      return newTotal;
    });
  }, [allResponses]);

  function result() {
    if (total >= 20 && total <= 35) {
      history.push('/energia')
    } else if (total >= 36 && total <= 45) {
      history.push('/entusiasmo')
    } else if (total >= 46) {
      history.push('/intensidade')
    }
  }

  return (
    <>
      <header className='header centered'>
        <div className='header-container'>
          <h1>Descubra o<br />
            <span className='handwritten-font'>seu <br />vermelho</span>
          </h1>

          <Button
            buttonLink='#name'
            buttonClass='nav-button'
            buttonTextClass='nav-button-text'
            buttonText='Próximo'
            iconClass='icon-arrow-down fas fa-chevron-down'
          />
        </div>
      </header>

      <main>
        <section id='name' className='section-base centered'>
          <div className='section-container'>
            <Button
              buttonLink='#'
              buttonClass='nav-button'
              buttonTextClass='nav-button-text'
              iconClass='icon-arrow-up fas fa-chevron-up'
            />

            <div className='input-name-wrap'>
              <label className='default-text'>Insira seu nome</label>
              <input
                type='text'
                minLength='1'
                size='12'
                className='input-username centered'
                onChange={(event) => {
                  localStorage.setItem('userClient', event.target.value)
                }}
              />
            </div>

            <Button
              navType='next'
              buttonLink='#quiz-01'
              buttonClass='nav-button'
              buttonTextClass='nav-button-text'
              iconClass='icon-arrow-down fas fa-chevron-down'
            />
          </div>
        </section>

        <section id='quiz-01' className='section-base centered'>
          <div className='section-container'>
            <Button
              buttonLink='#name'
              buttonClass='nav-button'
              buttonTextClass='nav-button-text'
              iconClass='icon-arrow-up fas fa-chevron-up'
            />

            <p className='default-text'>1. Que tipo de vermelho mais combina com você?</p>

            <InputRadio
              inputClass='input-radio input-answer'
              inputId='light'
              inputName='type-of-red'
              inputRequired
              inputValue={allResponses}
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
              inputValue={allResponses}
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
              inputValue={allResponses}
              inputOnChange={handleResponseTwo}
              labelHtmlFor='classic'
              labelClass='label-answer button-base'
              labelText='Clássico e atemporal'
            />

            <Button
              navType='next'
              buttonLink='#quiz-02'
              buttonClass='nav-button'
              buttonTextClass='nav-button-text'
              iconClass='icon-arrow-down fas fa-chevron-down'
            />
          </div>
        </section>

        <section id='quiz-02' className='section-base centered'>
          <div className='section-container'>
            <Button
              buttonLink='#quiz-01'
              buttonClass='nav-button'
              buttonTextClass='nav-button-text'
              iconClass='icon-arrow-up fas fa-chevron-up'
            />

            <p className='default-text'>2. Quais as cores predominantes no seu guarda-roupa?</p>

            <InputRadio
              inputClass='input-radio input-answer'
              inputId='cold'
              inputName='wardrobe-colors'
              inputRequired
              inputValue={allResponses}
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
              inputValue={allResponses}
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
              inputValue={allResponses}
              inputOnChange={handleThreeResponse}
              labelHtmlFor='strong'
              labelClass='label-answer button-base'
              labelText='Não importa a cor, desde que seja forte'
            />

            <Button
              buttonLink='#quiz-03'
              buttonClass='nav-button'
              buttonTextClass='nav-button-text'
              iconClass='icon-arrow-down fas fa-chevron-down'
            />
          </div>
        </section>

        <section id='quiz-03' className='section-base centered'>
          <div className='section-container'>
            <Button
              buttonLink='#quiz-02'
              buttonClass='nav-button'
              buttonTextClass='nav-button-text'
              iconClass='icon-arrow-up fas fa-chevron-up'
            />

            <p className='default-text'>3. Quando você toma sol, sua pele fica</p>

            <InputRadio
              inputClass='input-radio input-answer'
              inputId='burned'
              inputName='skin-sensitivity'
              inputRequired
              inputValue={allResponses}
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
              inputValue={allResponses}
              inputOnChange={twoHandleResponse}
              labelHtmlFor='bronzed'
              labelClass='label-answer button-base'
              labelText='Bronzeada'
            />

            <Button
              buttonLink='#quiz-04'
              buttonClass='nav-button'
              buttonTextClass='nav-button-text'
              iconClass='icon-arrow-down fas fa-chevron-down'
            />
          </div>
        </section>

        <section id='quiz-04' className='section-base centered'>
          <div className='section-container'>
            <Button
              buttonLink='#quiz-03'
              buttonClass='nav-button'
              buttonTextClass='nav-button-text'
              iconClass='icon-arrow-up fas fa-chevron-up'
            />

            <p className='default-text'>4. Qual sua maior dificuldade ao usar um batom chamativo?</p>
            <InputRadio
              inputClass='input-radio input-answer'
              inputId='thin-lips'
              inputName='makeup-difficulty'
              inputRequired
              inputValue={allResponses}
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
              inputValue={allResponses}
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
              inputValue={allResponses}
              inputOnChange={handleThreeResponseFour}
              labelHtmlFor='mild-color'
              labelClass='label-answer button-base'
              labelText='A cor não fica intensa'
            />

            <Button
              buttonLink='#skin-tone'
              buttonClass='nav-button'
              buttonTextClass='nav-button-text'
              iconClass='icon-arrow-down fas fa-chevron-down'
            />
          </div>
        </section>

        <section id='skin-tone' className='section-base centered'>
          <div className='section-container'>
            <Button
              buttonLink='#quiz-04'
              buttonClass='nav-button'
              buttonTextClass='nav-button-text'
              iconClass='icon-arrow-up fas fa-chevron-up'
            />

            <p className='default-text'>5. Selecione o seu tom de base:</p>

            <div className='foundations-wrap'>
              <InputRadio
                inputClass='input-radio input-skin-answer'
                inputId='bege-translucido'
                inputName='skin-tone'
                inputRequired
                // inputValue=''
                labelHtmlFor='bege-translucido'
                labelClass='label-skin-answer button-skin bege-translucido'
                labelText=''
              />

              <InputRadio
                inputClass='input-radio input-skin-answer'
                inputId='bege-rosado'
                inputName='skin-tone'
                inputRequired
                // inputValue=''
                labelHtmlFor='bege-rosado'
                labelClass='label-skin-answer button-skin bege-rosado'
                labelText=''
              />

              <InputRadio
                inputClass='input-radio input-skin-answer'
                inputId='bege-medio'
                inputName='skin-tone'
                inputRequired
                // inputValue=''
                labelHtmlFor='bege-medio'
                labelClass='label-skin-answer button-skin bege-medio'
                labelText=''
              />

              <InputRadio
                inputClass='input-radio input-skin-answer'
                inputId='bege-castanho'
                inputName='skin-tone'
                inputRequired
                // inputValue=''
                labelHtmlFor='bege-castanho'
                labelClass='label-skin-answer button-skin bege-castanho'
                labelText=''
              />

              <InputRadio
                inputClass='input-radio input-skin-answer'
                inputId='marrom-claro'
                inputName='skin-tone'
                inputRequired
                // inputValue=''
                labelHtmlFor='marrom-claro'
                labelClass='label-skin-answer button-skin marrom-claro'
                labelText=''
              />

              <InputRadio
                inputClass='input-radio input-skin-answer'
                inputId='marrom-medio'
                inputName='skin-tone'
                inputRequired
                // inputValue=''
                labelHtmlFor='marrom-medio'
                labelClass='label-skin-answer button-skin marrom-medio'
                labelText=''
              />

              <InputRadio
                inputClass='input-radio input-skin-answer'
                inputId='marrom-escuro'
                inputName='skin-tone'
                inputRequired
                // inputValue=''
                labelHtmlFor='marrom-escuro'
                labelClass='label-skin-answer button-skin marrom-escuro'
                labelText=''
              />
            </div>

            <Button
              buttonLink='#manifesto'
              buttonClass='nav-button'
              buttonTextClass='nav-button-text'
              iconClass='icon-arrow-down fas fa-chevron-down'
            />
          </div>
        </section>

        <section id='manifesto' className='section-manifesto section-base centered'>
          <div className='section-container'>
            <Button
              buttonLink='#skin-tone'
              buttonClass='nav-button red-color'
              buttonTextClass='nav-button-text'
              iconClass='icon-arrow-up fas fa-chevron-up'
            />

            <article className='manifesto-text'>
              <p>Espalhe a força do vermelho.</p>
              <p>Esse vermelho é todo meu.</p>
              <p>E quanto mais meu,</p>
              <p>cada vez mais nosso.</p>
              <p className='manifesto-your-red'>meu vermelho</p>
              <p className='bold'>É todo nosso.</p>
            </article>
            <img src={redMarble} className='red-marble-img' alt='Mármore vermelho'></img>

            <button
              type='text'
              className='nav-button red-color'
              onClick={() => result()}
            >
              <p className='nav-button-text red-color'>Descubra</p>
              <i className='icon-arrow-down fas fa-chevron-down'></i>
            </button>
            {/* <Button
              navType='next'
              buttonClass='nav-button red-color'
              buttonTextClass='nav-button-text'
              buttonText='Descubra'
              iconClass='icon-arrow-down fas fa-chevron-down'
              buttonOnClick={() => result()}
            /> */}
          </div>
        </section>
      </main>
    </>
  );
}
