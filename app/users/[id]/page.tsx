const getUsers = async (id: number) => {
  const res = await fetch(`https://reqres.in/api/users/${id}`)
  const { data } = await res.json()
  return data
}

const users = async ({ params }: any) => {

  const user = await getUsers(params.id)
  console.log("🚀 ~ file: page.tsx:9 ~ users ~ user:", user)
  return (
    <div>
      <h1>users</h1>
      <img src={user.avatar} alt={user.first_name} />
      <h3>{user.id} {user.first_name} {user.last_name}</h3>
      <p>{user.email}</p>
    </div>
  )
}

export default users