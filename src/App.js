import React, { useEffect, useState } from "react"
import "./index.scss"
import { Success } from "./components/Success"
import { Users } from "./components/Users"

// Тут список пользователей: https://reqres.in/api/users

export default function App() {
  const [users, setUsers] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [invites, setInvites] = useState([])
  const [success, setSuccess] = useState(false)
  const [searchValue, setSearchValue] = useState("")

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((json) => setUsers(json.data))
      .catch((err) => {
        console.log(err)
        alert("Произошла ошибка при получении данных")
      })
      .finally(() => setLoading(false))
  }, [])

  function onChangeSearchValue(e) {
    setSearchValue(e.target.value)
  }

  function onClickInvite(id) {
    if (invites.includes(id))
      setInvites((prev) => prev.filter((item) => item !== id))
    else setInvites((prev) => [...prev, id])
  }

  function onClickSendInvites() {
    setSuccess(true)
  }

  return (
    <div className="App">
      {success ? (
        <Success count={invites.length} />
      ) : (
        <Users
          searchValue={searchValue}
          onChangeSearchValue={onChangeSearchValue}
          items={users}
          isLoading={isLoading}
          onClickInvite={onClickInvite}
          invites={invites}
          onClickSendInvites={onClickSendInvites}
        />
      )}
    </div>
  )
}
