import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {tokenContext} from "../context/tokenContext";
interface IUserData {
  name?: string,
  iconImg?: string
}

export function useUserData(){
  const [data, setData] = useState<IUserData>({})
  const token = useContext(tokenContext)
  useEffect(() => {
    axios
      .get('https://oauth.reddit.com/api/v1/me', {
        headers: {
          Authorization: "Bearer " + token,
        }
      })
      .then((res) => {
        console.log(res)
        setData({
          name: 'Не аноним',
          iconImg: ''
        })
      })
      .catch(console.log)
  }, [token])

  return [data]
}