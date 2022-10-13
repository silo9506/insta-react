import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const GlobalStyles = createGlobalStyle`
${reset}
Html{
    --border-color:#dbdbdb;
    --base-bgcolor:#fafafa;
    --input-bgcolor:#EFEFEF;
  
}
*{
    box-sizing: border-box;

}
`;

export default GlobalStyles;
