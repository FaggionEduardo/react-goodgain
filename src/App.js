
import Routes from "./routes";

import TagManager from 'react-gtm-module' 

const tagManagerArgs = { 
    gtmId: 'GTM-KCX9564' 
} 

TagManager.initialize (tagManagerArgs)

const App = () => <Routes />;

export default App;
