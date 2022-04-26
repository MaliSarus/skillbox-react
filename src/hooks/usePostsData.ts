import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {tokenContext} from "../context/tokenContext";

interface IPostsData {
  id: string,
  textContent: {
    user: {
      avatar: string,
      name: string,
      url: string
    },
    date: '4 часа',
    title: string,
    postLink: string
  },
  image: string
}

export function usePostsData() {
  const [isMounted, setIsMounted] = useState(false)
  const [posts, setPosts] = useState([])
  const token = useContext(tokenContext)
  useEffect(() => {
    if (isMounted) {
      axios
        .get('https://oauth.reddit.com/best', {
          headers: {
            Authorization: "Bearer " + token,
          }
        })
        .then(({data}) => {

          const posts = data.data.children.map((post:any) => {
            return {
              id: post.data.id,
              textContent: {
                user: {
                  avatar: post.data.thumbnail,
                  name: post.data.author,
                  url: post.data.permalink
                },
                date: '4 часа',
                title: post.data.title,
                postLink: post.data.permalink
              },
              image: post.data?.thumbnail &&
              post.data.thumbnail !== 'nsfw' &&
              post.data.thumbnail !== 'self'
                ? post.data.thumbnail
                : null
            }
          })
          setPosts(posts)
        })
        .catch(console.log)
      return
    }
    setIsMounted(true);
  }, [token])

  return [posts]
}
