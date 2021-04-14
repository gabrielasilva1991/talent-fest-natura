import React from 'react';
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
          <button className='button-base'>Aberto e alegre</button>
          <button className='button-base'>Clássico e atemporal</button>
          <button className='button-base'>Arroxeado e vibrante</button>
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
