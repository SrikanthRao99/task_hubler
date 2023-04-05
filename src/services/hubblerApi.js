import axios from "axios";

export const getDataApi = async (searchString) => {
    try {
      const response = await axios.get(
        "https://sandapps.hubblerapp.com/testrest/zac/"
      );
    //      const response = await fetch(
    //     "https://sandapps.hubblerapp.com/testrest/zac/",{method:"GET"}
    //   );
      
        console.log("response",response)
      if (response?.success === true) {
        console.log("getrespnsraaaaaapi",response?.result)
        return response?.result
      }
    } catch (err) {
    //   alert(err.message);
    console.log("err",err);
    return []

    }
  };

  export const putDataApi = async (body) => {
    try {
      const response = await axios.put(
        "https://sandapps.hubblerapp.com/testrest/zac/",body
      );      
        console.log("PutResponse",response)
      if (response?.success === true) {
        console.log("getrespnsraaaaaapi",response?.result)
        return response?.result
      }
    } catch (err) {
    //   alert(err.message);
    console.log("err",err);
    return []

    }
  }

  export const deleDataApi = async (id) => {
    try {
      const response = await axios.delete(
        `https://sandapps.hubblerapp.com/testrest/zac/${id}`
      );      
        console.log("PutResponse",response)
      if (response?.success === true) {
        console.log("DeleteApi",response)
        return response
      }
    } catch (err) {
    //   alert(err.message);
    console.log("err",err);
    return []

    }
  }