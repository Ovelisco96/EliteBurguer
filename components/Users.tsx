"use client"

import { useRouter } from "next/navigation"

const Users = ({ users }: any) => {
  console.log("🚀 ~ file: Users.tsx:6 ~ Users ~ users:", users)

  const router = useRouter()

  return (
    <div>
      <ul >
        {users.map((user: any) => (
          <li key={user.id} onClick={() => {
            router.push(`/users/${user.id}`)
          }}>
            <div>
              <h5>{user.id}</h5>
              <p>{user.email}</p>
            </div>
            <img src={`${user.avatar}`} alt="/" />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Users