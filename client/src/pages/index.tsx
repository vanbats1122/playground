import Head from 'next/head'
import { Fragment, useEffect, useState } from 'react'
import Axios from 'axios'
import Link from 'next/link'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativetime'

import { Post } from '../types'

import PostCard from '../components/PostCard'

dayjs.extend(relativeTime)

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    Axios.get('/posts')
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="pt-10">
      <Head>
        <title>Playground: Canada based Korean Community</title>
      </Head>
      <div className="container flex pt-4">
        {/* Posts feed */}
        <div className="w-160">
          {posts.map((post) => (
            <PostCard post={post} key={post.identifier} />
          ))}
        </div>
        {/* Sidebar */}
      </div>
    </div>
  )
}