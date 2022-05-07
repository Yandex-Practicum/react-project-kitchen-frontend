import React from 'react'
import {ReactComponent as EyeSlash} from '../../images/eye-of.svg'
import {ReactComponent as Eye} from '../../images/eye-on.svg'

type TIConInputProps = {
 visible: boolean,
 toggle: () => void;
}

const IconInput: React.FC<TIConInputProps> = ({visible, toggle}) => {

  return (

    <span onClick={toggle}>
  
        {!visible ? <EyeSlash/> : <Eye/>}
    
    </span>
  );
};

export default IconInput;
