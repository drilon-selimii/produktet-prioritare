import React, {
  useState,
  useEffect
} from "react";
import axios from "axios";
import Auth from "./views/Auth";
import Home from "./views/Home";

const App = () => {
    const [isConnected, setIsConnected] = useState(false);

    const checkConnection = () => {
      axios.post("https://localhost:5001/auth/check-connection").then((response) => {
        if (response.data)
          setIsConnected(true);
      });
    };

    useEffect(() => checkConnection(), []);

    return ( 
      <div > {
        isConnected === true ? < Home /> : <Auth />
      } </div>);
    };
    export default App;