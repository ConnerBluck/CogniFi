import AsyncStorage from '@react-native-async-storage/async-storage';
//Store user data in AsyncStorage
export const storeToken = async (user) => {
    try {
       await AsyncStorage.setItem("userData", JSON.stringify(user));
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };
//Get user data in AsyncStorage
export const  getToken = async (user) => {
    try {
      let userData = await AsyncStorage.getItem("userData");
      if(userData != null){
        let data = JSON.parse(userData);
        return data
      }
      else{
          return false
      }
    } catch (error) {
      console.log("Something went wrong", error);
    }
    return false
  };
//Clear user data in AsyncStorage
export const clearStorage = async () => {
    await AsyncStorage.removeItem("userData");
    let user = await getToken();
    console.log(user);
}