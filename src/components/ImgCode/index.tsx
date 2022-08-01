// Styles
import * as C from './styles';

// Types
type Props = {
    state: boolean;
}

export const ImgCode = ({ state }: Props) => {

    return(
        <C.Container state={state}></C.Container>
    )
};