      // Botões para base/cor  de pele .
      export const ButtonFoundation=()=>{
      <section id='section-foundation' className='section-base centered'>
        <Button
          labelText='Bege Traslúcido'
          className={Translucid-beige}
        />
        <Button
          labelText='Bege Rosado'
          className={rose-beige}
        />
        <Button
          labelText='Bege Claro'
          className={Translucid-beige}
        />
        <Button
          labelText='Bege Médio'
          className={Translucid-beige}
        />
        <Button
          labelText='Bege Castanho'
          className={Translucid-beige}
        />
        <Button
          labelText='Marrom Claro'
          className={Translucid-beige}
        />
        <Button
          labelText='Marrom Claro'
          className={Translucid-beige}
        />
    </section>
    }

  /* Raciocionio para caso queira utilizar mudança de estado em cores ao invés de imagem.
  // Para usar só as cores é só desconsiderar a propriedade active (chamada lá no css)

  import { useState } from "react";
import "./styles.css";

export default function App() {
  const [selectedColor, setSelectedColor] = useState();

  const blueClass = `button blue ${
    selectedColor === "blue" ? "active-blue" : ""
  }`;
  const yellowClass = `button yellow ${
    selectedColor === "yellow" ? "active-yellow" : ""
  }`;
  const redClass = `button red ${selectedColor === "red" ? "active-red" : ""}`;
  const greenClass = `button green ${
    selectedColor === "green" ? "active-green" : ""
  }`;
  console.log(greenClass);
  return (
    <div className="App">
      <button
        onClick={() => setSelectedColor("blue")}
        className={blueClass}
      ></button>
      <button
        onClick={() => setSelectedColor("yellow")}
        className={yellowClass}
      ></button>
      <button
        onClick={() => setSelectedColor("red")}
        className={redClass}
      ></button>
      <button
        onClick={() => setSelectedColor("green")}
        className={greenClass}
      ></button>
    </div>
  );
}
 */