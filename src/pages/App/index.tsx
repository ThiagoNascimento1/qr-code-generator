// Styles
import * as C from './styles';

// Hooks
import { useState } from 'react';

// Components
import { InputArea } from '../../components/InputArea';
import { ImgCode } from '../../components/ImgCode';

export const App = () => {

  const [ showCode, setShowCode ] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowCode(true);
  }

  return (
    <C.Container>
      <C.AreaHeaderInput>
        <C.Header>
          <h1>Gerador de QRCode</h1>
          <p>cole a URL desejada</p>
        </C.Header>
        <InputArea handleSubmit={handleSubmit} setShowCode={setShowCode}/>
      </C.AreaHeaderInput>

      <ImgCode state={showCode}/>
  
    </C.Container>
  )
};