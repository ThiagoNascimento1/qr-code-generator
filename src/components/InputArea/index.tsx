// Styles
import * as C from './styles';

// Hooks
import { useState } from 'react';

// Types
type Props = {
    handleSubmit: (url: string) => void;
    setShowCode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const InputArea = ({ handleSubmit, setShowCode }: Props) => {

    const [ url, setUrl ] = useState('');

    const handleClearSource = () => {
        setUrl('');
        setShowCode(false);
    };

    return (
        <C.Form>
            <input
                type="text"
                className="url"
                placeholder="insira a URL"
                autoComplete="false"
                spellCheck="false"
                value={url}
                onChange={e => setUrl(e.target.value)}
                onClick={() => handleClearSource()}
            />
            <button onClick={() => handleSubmit(url)}>Gerar QRCode</button>
        </C.Form>
    )
};