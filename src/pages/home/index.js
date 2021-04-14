import React from 'react';
import InputRadio from '../../components/InputRadio';
import photoExample01 from '../../img/boa-foto-01.jpg';
import photoExample03 from '../../img/boa-foto-03.jpg';

export default function Home() {
  return (
    <>
      <header className='header centered'>
        <h1 className='find-your-red'>Descubra o<br />
          <span className='handwritten-font'>seu vermelho</span>
        </h1>

        <a href='#section-name'>
          <button className='nav-button'>
            <p className='nav-button-text'>Próximo</p>
            <i className='icon-arrow-down fas fa-chevron-down'></i>
          </button>
        </a>
      </header>

      <main>
        <section id='section-name' className='section-base centered'>
          <label className='default-text'>Insira seu nome</label>
          <input
            required
            type='text'
            minLength='1'
            size='10'
            className='input-username centered'
          />
        </section>

        <section id='section-photo' className='section-photo section-base centered'>
          <p>Faça o upload de uma foto sua.</p>
          <p>É importante que a foto seja de rosto, com ele ocupando quase toda a imagem.</p>
          <p>Exemplos:</p>
          <div className='photo-examples-wrap'>
            <img
              src={photoExample01}
              alt='Rosto de uma mulher caucasiana, loira, sorrindo e olhando para a câmera.'
              className='photo-example'
            ></img>
            <img
              src={photoExample03}
              alt='Rosto de uma mulher negra, sorrindo e olhando para seu lado esquerdo.'
              className='photo-example'
            ></img>

          </div>
          <button className='button-base'>Enviar foto</button>
        </section>

        <section id='section-quiz-01' className='section-base centered'>
          <p className='default-text'>1. Que tipo de vermelho mais combina com você?</p>
          <InputRadio
            inputClass='input-radio'
            inputId='red-intensidade'
            inputName='type-of-red'
            inputRequired
            inputValue=''
            inputChecked=''
            inputOnChange=''
            labelHtmlFor='red-intensidade'
            labelClass='button-base'
            labelText='Aberto e alegre'
          />
          <InputRadio
            inputClass='input-radio'
            inputId='red-entusiasmo'
            inputName='type-of-red'
            inputRequired
            inputValue=''
            inputChecked=''
            inputOnChange=''
            labelHtmlFor='red-entusiasmo'
            labelClass='button-base'
            labelText='Arroxeado e vibrante'
          />
          <InputRadio
            inputClass='input-radio'
            inputId='red-energia'
            inputName='type-of-red'
            inputRequired
            inputValue=''
            inputChecked=''
            inputOnChange=''
            labelHtmlFor='red-energia'
            labelClass='button-base'
            labelText='Clássico e atemporal'
          />
        </section>

        <section id='section-quiz-02' className='section-base centered'>
          <p className='default-text'>2. Quais as cores predominantes no seu guarda-roupa?</p>
          <InputRadio
            inputClass='input-radio'
            inputId='red-entusiasmo'
            inputName='wardrobe-colors'
            inputRequired
            inputValue=''
            inputChecked=''
            inputOnChange=''
            labelHtmlFor='red-intensidade'
            labelClass='button-base'
            labelText='Tons frios, como azuis e cinzas'
          />
          <InputRadio
            inputClass='input-radio'
            inputId='red-intensidade'
            inputName='wardrobe-colors'
            inputRequired
            inputValue=''
            inputChecked=''
            inputOnChange=''
            labelHtmlFor='red-entusiasmo'
            labelClass='button-base'
            labelText='Tons quentes, como amarelos e laranjas'
          />
          <InputRadio
            inputClass='input-radio'
            inputId='red-energia'
            inputName='wardrobe-colors'
            inputRequired
            inputValue=''
            inputChecked=''
            inputOnChange=''
            labelHtmlFor='red-energia'
            labelClass='button-base'
            labelText='Não importa a cor, desde que seja forte'
          />
        </section>

        <section id='section-quiz-02' className='section-base centered'>
          <p className='default-text'>3. Quando você toma sol, <br/>sua pele fica</p>
          <InputRadio
            inputClass='input-radio'
            inputId='red-entusiasmo'
            inputName='skin-undertone'
            inputRequired
            inputValue=''
            inputChecked=''
            inputOnChange=''
            labelHtmlFor='red-intensidade'
            labelClass='button-base'
            labelText='Vermelha'
          />
          <InputRadio
            inputClass='input-radio'
            inputId='red-intensidade'
            inputName='skin-undertone'
            inputRequired
            inputValue=''
            inputChecked=''
            inputOnChange=''
            labelHtmlFor='red-entusiasmo'
            labelClass='button-base'
            labelText='Bronzeada'
          />
        </section>

        <section id='section-manifesto' className='section-base centered'>
        </section>

        <section id='section-reveal' className='section-base centered'>
        </section>

        <section id='section-lipstick' className='section-base centered'>
        </section>
      </main>
    </>
  );
}
