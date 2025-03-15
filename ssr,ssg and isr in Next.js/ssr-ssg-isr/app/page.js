import Image from "next/image";

export default async function Page() {
  const data = await fetch('https://api.vercel.app/blog',{
      cache:'no-store'
  })
  const posts = await data.json()
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}