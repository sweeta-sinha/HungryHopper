const useLocalStorage = () => {

    const setLocalStorageData = (key , value , isJson) => {
        let data = value;
        if(isJson) {
            data = JSON.stringify(data);
        }
        localStorage.setItem(key , data)
    }

    const getLocalStorageData = (key) => {
       const value = localStorage.getItem(key);
       return JSON.parse(value || "");
    }

    return [setLocalStorageData , getLocalStorageData];
}

export default useLocalStorage;