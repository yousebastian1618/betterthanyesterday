'use client';
import {usePathname, useRouter} from "next/navigation";
import {useMemo} from "react";
import {PageItems} from "@/objects";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const currentPage = useMemo(() => {
    const normalizedPath = pathname === '/' ? '/dashboard' : pathname;
    const currentPage = PageItems.find(
      (item) => normalizedPath === item.path || normalizedPath.startsWith(`${item.path}`)
    )
    return currentPage?.label ?? PageItems[0].label
  }, [pathname])

  return (
    <div></div>
  )
}


// const pathname = usePathname();
// const currentPageLabel = useMemo(() => {
//   const normalizedPath = pathname === '/' ? '/dashboard' : pathname;
//   const currentPage = PageItems.find(
//     (item) => normalizedPath === item.path || normalizedPath.startsWith(`${item.path}`)
//   )
//   return currentPage?.label ?? PageItems[0].label;
// }, [pathname]);