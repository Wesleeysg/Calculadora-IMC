import { useState, useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";


function Historico(){
    const [data, setData] = useState([]);
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState("");

    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const response = await axios.get("http://localhost:3000/getImcData");
                setData(response.data);
                setLoading(false);
            } catch(err){
                console.err("Erro ao buscar histórico:", err);
                setError("Erro ao carregar os dados");
                setLoading(false);
            }
        };

        fetchData();
    },[]);

    if(loading){
        return <p>Tela carregando ainda...</p>;
    }
    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="historico">
          <h2>Histórico de Registros</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Altura (m)</th>
                <th>Peso (kg)</th>
                <th>IMC</th>
                <th>Data</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.altura}</td>
                  <td>{item.peso}</td>
                  <td>{item.imc}</td>
                  <td>{format(new Date(item.created_at), "dd/MM/yyyy HH:mm")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}

export default Historico;