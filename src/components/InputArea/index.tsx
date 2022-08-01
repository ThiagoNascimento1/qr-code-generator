// Styles
import * as C from './styles';

// Hooks
import { useState } from 'react';

// Types
type Props = {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    setShowCode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const InputArea = ({ handleSubmit, setShowCode }: Props) => {

    const [ url, setUrl ] = useState('');

    const handleClearSource = () => {
        setUrl('');
        setShowCode(false);
    };

    return (
        <C.Form onSubmit={(e) => handleSubmit(e)}>
            <input
                type="text"
                className="url"
                placeholder="insira a URL"
                autoComplete="false"
                autoCorrect="false"
                value={url}
                onChange={e => setUrl(e.target.value)}
                onClick={() => handleClearSource()}
            />
            <button>Gerar QRCode</button>
        </C.Form>
    )
};