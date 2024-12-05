import { useState } from "react";
import axios from "axios";
import "./App.css"; // Crie um CSS para estilizar sua página

function App() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [messageImc, setMessageImc] = useState("");
  const [resultImc, setResultImc] = useState("");
  const [IdealImc, setIdealImc] = useState("");
  const [resultIdealImc, setResultIdealImc] = useState("");
  const [textButton, setTextButton] = useState("Calcular");

  const imcCalculator = async () => {
    if (altura && peso) {
      const alturaMetros = parseFloat(altura.replace(",", "."));
      const pesoKg = parseFloat(peso.replace("kg", ""));
      const imc = pesoKg / (alturaMetros * alturaMetros);
      setResultImc(imc.toFixed(2));
      setMessageImc("Seu IMC é: ");

      try{
        const response = await axios.post("http://localhost:3000/classificacaoImc",{
        imc: imc.toFixed(2),
        });

        const classificacao = response.data.classificacao;
        setResultIdealImc(classificacao);
      }catch (error) {
        console.error("Erro ao classificar IMC:", error);
        setIdealImc("Erro ao classificar IMC. Tente novamente.");
      }
      

      setIdealImc("Sua classificação por IMC é: ");

      try {
        const response = await axios.post("http://localhost:3000/saveImc", {
          altura: alturaMetros,
          peso: pesoKg,
          imc: imc.toFixed(2),
        });
        console.log(response.data);
      } catch (error) {
        console.error("Erro ao salvar os dados:", error);
      }
    } else {
      setResultImc("");
      setMessageImc("Por favor, preencha a altura e o peso!");
    }
  };

  const handleReset = () => {
    setAltura("");
    setPeso("");
    setMessageImc("");
    setResultImc("");
    setIdealImc("");
    setResultIdealImc("");
  };

  return (
    <div className="app">
      <h1>Calculadora de IMC</h1>
      <div className="form-group">
        <label>Altura (m):</label>
        <input
          type="number"
          placeholder="Ex: 1.80"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Peso (kg):</label>
        <input
          type="number"
          placeholder="Ex: 75.0"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
      </div>
      {resultImc && (
        <button className="button reset" onClick={handleReset}>
          Reiniciar
        </button>
      )}
      {!resultImc && (
        <button className="button calculate" onClick={imcCalculator}>
          {textButton}
        </button>
      )}
      <div className="result">
        <p>{messageImc}</p>
        <p>{resultImc}</p>
      </div>

      <div className="result">
        <p>{IdealImc}</p>
        <p>{resultIdealImc}</p>
      </div>
    </div>
  );
}

export default App;