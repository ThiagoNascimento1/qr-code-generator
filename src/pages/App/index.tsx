// Styles
import * as C from './styles';

// Hooks
import { useState, useEffect } from 'react';

// Components
import { InputArea } from '../../components/InputArea';
import { ImgCode } from '../../components/ImgCode';

export const App = () => {

  const [ showCode, setShowCode ] = useState(false);
  const urlBase = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=';
  const [ urlFull, setUrlFull ] = useState('');

  const handleSubmit = ( url: string) => {
    if (url. length > 0) {
      setUrlFull(() => urlBase + url);
      setShowCode(true);
    }
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

      <ImgCode state={showCode} urlFull={urlFull}/>
  
    </C.Container>
  )
};