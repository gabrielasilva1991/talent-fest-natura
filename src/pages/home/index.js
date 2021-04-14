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
            inputClass='input-radio input-answer'
            inputId='light'
            inputName='type-of-red'
            inputRequired
            // inputValue=''
            // inputChecked=''
            // inputOnChange=''
            labelHtmlFor='light'
            labelClass='label-answer button-base'
            labelText='Aberto e alegre'
          />
          <InputRadio
            inputClass='input-radio input-answer'
            inputId='purple'
            inputName='type-of-red'
            inputRequired
            // inputValue=''
            // inputChecked=''
            // inputOnChange=''
            labelHtmlFor='purple'
            labelClass='label-answer button-base'
            labelText='Arroxeado e vibrante'
          />
          <InputRadio
            inputClass='input-radio input-answer'
            inputId='classic'
            inputName='type-of-red'
            inputRequired
            // inputValue=''
            // inputChecked=''
            // inputOnChange=''
            labelHtmlFor='classic'
            labelClass='label-answer button-base'
            labelText='Clássico e atemporal'
          />
        </section>

        <section id='section-quiz-02' className='section-base centered'>
          <p className='default-text'>2. Quais as cores predominantes no seu guarda-roupa?</p>
          <InputRadio
            inputClass='input-radio input-answer'
            inputId='cold'
            inputName='wardrobe-colors'
            inputRequired
            // inputValue=''
            // inputChecked=''
            // inputOnChange=''
            labelHtmlFor='cold'
            labelClass='label-answer button-base'
            labelText='Tons frios, como azuis e cinzas'
          />
          <InputRadio
            inputClass='input-radio input-answer'
            inputId='warm'
            inputName='wardrobe-colors'
            inputRequired
            // inputValue=''
            // inputChecked=''
            // inputOnChange=''
            labelHtmlFor='warm'
            labelClass='label-answer button-base'
            labelText='Tons quentes, como amarelos e laranjas'
          />
          <InputRadio
            inputClass='input-radio input-answer'
            inputId='strong'
            inputName='wardrobe-colors'
            inputRequired
            // inputValue=''
            // inputChecked=''
            // inputOnChange=''
            labelHtmlFor='strong'
            labelClass='label-answer button-base'
            labelText='Não importa a cor, desde que seja forte'
          />
        </section>

        <section id='section-quiz-03' className='section-base centered'>
          <p className='default-text'>3. Quando você toma sol, <br/>sua pele fica</p>
          <InputRadio
            inputClass='input-radio input-answer'
            inputId='burned'
            inputName='skin-sensitivity'
            inputRequired
            // inputValue=''
            // inputChecked=''
            // inputOnChange=''
            labelHtmlFor='burned'
            labelClass='label-answer button-base'
            labelText='Vermelha'
          />
          <InputRadio
            inputClass='input-radio input-answer'
            inputId='bronzed'
            inputName='skin-sensitivity'
            inputRequired
            // inputValue=''
            // inputChecked=''
            // inputOnChange=''
            labelHtmlFor='bronzed'
            labelClass='label-answer button-base'
            labelText='Bronzeada'
          />
        </section>

        <section id='section-quiz-04' className='section-base centered'>
          <p className='default-text'>4. Qual sua maior dificuldade ao usar um batom chamativo?</p>
          <InputRadio
            inputClass='input-radio input-answer'
            inputId='thin-lips'
            inputName='makeup-difficulty'
            inputRequired
            // inputValue=''
            // inputChecked=''
            // inputOnChange=''
            labelHtmlFor='thin-lips'
            labelClass='label-answer button-base'
            labelText='Tenho lábios finos'
          />
          <InputRadio
            inputClass='input-radio input-answer'
            inputId='smudged-lipstick'
            inputName='makeup-difficulty'
            inputRequired
            // inputValue=''
            // inputChecked=''
            // inputOnChange=''
            labelHtmlFor='smudged-lipstick'
            labelClass='label-answer button-base'
            labelText='Borra com facilidade'
          />
          <InputRadio
            inputClass='input-radio input-answer'
            inputId='mild-color'
            inputName='makeup-difficulty'
            inputRequired
            // inputValue=''
            // inputChecked=''
            // inputOnChange=''
            labelHtmlFor='mild-color'
            labelClass='label-answer button-base'
            labelText='A cor não fica intensa'
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
