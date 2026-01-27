import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ApiCall } from "./Components/ApiCall"

const App = () => {
  const dispatch = useDispatch()
  const { data, loading, error } = useSelector((state) => state)

  useEffect(() => {
    dispatch(ApiCall())
  }, [])

  if (loading) return <h2>Loading...</h2>
  if (error) return <h2>Error: {error}</h2>

  return (
    <div>
      <h1>Products</h1>

      {data.map((item) => (
        <div key={item.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <h3>{item.title}</h3>
          <img src={item.image} width="100" />
          <p>₹ {item.price}</p>
        </div>
      ))}
    </div>
  )
}

export default App
