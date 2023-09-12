import Link from "next/link"

export default function Header(props) {

  return <div className="header">
    <div className="box">
      <Link className="item-box" href={'/'}>Home</Link>
      <div className="item-box">Category</div>
      <div className="item-box">Support</div>
      <div className="item-box">Contact</div>


      {props.isShowBlog ? <Link className="item-box" href={'/blog'}>Blog</Link> : ''}


    </div>
  </div>
}