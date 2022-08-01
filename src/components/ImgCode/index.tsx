// Styles
import * as C from './styles';

// Types
type Props = {
    state: boolean;
    urlFull: string
}

export const ImgCode = ({ state, urlFull }: Props) => {

    return(
        <C.Container state={state}>
            <img src={urlFull}/>
        </C.Container>
    )
};