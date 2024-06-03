import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useAuthContext } from "./AuthContext";

const DataContext = createContext();

export default DataContext;

export const DataProvider = ({ children }) => {
  //states i want to keep
  const { token, shouldKick } = useAuthContext();
  const [cachedRoute, setCachedRoute] = useState("");
  const [refetchHelp, setRefetchHelp] = useState(false);

  const handleRefetchHelp = () => {
    setRefetchHelp(!refetchHelp);
  }

  const [globalSwitch, setGlobalSwitch] = useState(false);

  const handleGlobalSwitch = (bool) => {
    setGlobalSwitch(bool);
  }

  const handleCachedRoute = (route) => {
    setCachedRoute(route);
  };

  const deleteRequest = (route, id) => {
    const url = `${import.meta.env.VITE_SERVER_URL}/${route}/${id}`;
    return axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        import.meta.env.VITE_WORK_ENV == 'development' && console.log(response.data);
        return true;
      })
      .catch((err) => {
        shouldKick(err);
        return false;
      });
  };

  const getRequest = (route) => {
    const url = `${import.meta.env.VITE_SERVER_URL}/${route}`;
    return axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        import.meta.env.VITE_WORK_ENV == 'development' && console.log(response.data);
        return response.data;
      })
      .catch((err) => {
        console.log(err);
        shouldKick(err);
        return false;
      });
  };

  const showRequest = (route, id) => {
    const url = `${import.meta.env.VITE_SERVER_URL}/${route}/${id}`;
    return axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        import.meta.env.VITE_WORK_ENV == 'development' && console.log(response.data);
        return response.data;
      })
      .catch((err) => {
        shouldKick(err);
        return false;
      });
  };

  const postRequest = (route, data) => {
    var config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${import.meta.env.VITE_SERVER_URL}/${route}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    return axios(config)
      .then(function (response) {
        import.meta.env.VITE_WORK_ENV == 'development' && console.log(response.data);
        return response.data;
      })
      .catch(function (e) {
        console.log(e.response.data.message);
        shouldKick(e);
        return false;
      });
  };

  const postRequestFeedback = (route, data) => {
    var config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${import.meta.env.VITE_SERVER_URL}/${route}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    return axios(config)
      .then(function (response) {
        import.meta.env.VITE_WORK_ENV == 'development' && console.log(response.data);
        return response.data;
      })
      .catch(function (e) {
        import.meta.env.VITE_WORK_ENV == 'development' && console.log(e.response.data.message);
        shouldKick(e);
        return e.response.data;
      });
  };

  let contextData = {
    deleteRequest,
    getRequest,
    postRequest,
    postRequestFeedback,
    showRequest,
    cachedRoute,
    handleCachedRoute,
    refetchHelp,
    handleRefetchHelp,
    globalSwitch,
    handleGlobalSwitch
  
  };

  return (
    <DataContext.Provider value={contextData}>{children}</DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);