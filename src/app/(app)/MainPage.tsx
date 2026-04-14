'use client';
import {ReactNode, useMemo} from "react";
import {usePathname} from "next/navigation";
import {PageItems} from "@/objects";

type props = {
  children: ReactNode
}

export default function MainPage({ children }: props) {
  const pathname = usePathname();
  const currentPageLabel = useMemo(() => {
    const normalizedPath = pathname === '/' ? '/dashboard' : pathname;
    const currentPage = PageItems.find(
      (item) => normalizedPath === item.path || normalizedPath.startsWith(`${item.path}`)
    )
    return currentPage?.label ?? PageItems[0].label;
  }, [pathname]);

  return (
    <div className={'main-page'}>
      <div className={'main-page__content'}>
        {children}
      </div>
    </div>
  )
}