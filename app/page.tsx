import StartApp from '@/components/StartApp'
import Users from '@/components/Users'
const fechtUsers = async () => {
  const res = await fetch("https://reqres.in/api/users")
  const data = await res.json()
  return data.data
}
export default async function Home() {
  const users = await fechtUsers()
  return (
    <main className="h-full">
      <StartApp/>
    </main>
  )
}
