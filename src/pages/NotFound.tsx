import { Link } from 'react-router'

export function NotFound() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-semibold tracking-tight">没有这一页</h1>
      <Link to="/" className="text-accent">
        回到首页
      </Link>
    </div>
  )
}
