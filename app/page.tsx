import Users from '@/components/Users'
import Image from 'next/image'
import { json } from 'stream/consumers'
const fechtUsers = async () => {
  const res = await fetch("https://reqres.in/api/users")
  const data = await res.json()
  return data.data
}
export default async function Home() {
  const users = await fechtUsers()
  return (
    <main className="">
      <h1 className='text-orange-700'>Index Psge</h1>
      <Users users={users} />
    </main>
  )
}
