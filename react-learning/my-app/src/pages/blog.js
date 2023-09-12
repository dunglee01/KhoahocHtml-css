import Header from "@/components/Header";
import { useState } from "react";


export default function Blog() {

  const [count, setCount] = useState(0)

  const handleIncreCount = () => {
    setCount(count + 1)
  }
  const handleDecreCount = () => {
    setCount(count - 1)
  }

  return <div>
    <Header isShowBlog={false} />
    <h1>Day la Blog</h1>


    <div>so luong: {count}</div>
    <button onClick={handleIncreCount}>Click tang so count len 1 don vi</button>

    <button onClick={handleDecreCount}>tru count </button>

  </div>
}