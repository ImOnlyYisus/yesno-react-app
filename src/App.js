import Background from "./components/Background";
import FormToAsk from "./components/FormToAsk";
import getYesOrNo from './services/yesOrNotApi'
import { useState } from "react";


function App() {
  const initialValues = "";
  const [yesNoValues, setYesNoValues] = useState({}
    
  );

  const handleSubmit =(e) => {
    e.preventDefault();
    
    getYesOrNo().then(res => {
      setYesNoValues(res)
    });
    
  }

  return (
    <>
      <div className="container">

        <Background image={yesNoValues.image} answer={yesNoValues.answer}/>
        <div className="contenido">
          <FormToAsk handleSubmit={handleSubmit} />
        </div>

      </div>
    </>
  );
}

export default App;
