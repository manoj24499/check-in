import type { ReactNode } from 'react'

export default function ParentLayout({ children }: { children: ReactNode }) {
  return <section>{children}</section>
}
