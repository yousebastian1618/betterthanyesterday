import { ReactNode } from "react";
import MainPage from "@/app/(app)/MainPage";

type props = {
  children: ReactNode;
}

export default function AppShell({ children }: props) {
  return (
    <div className={'app-shell'}>
      <MainPage>
        {children}
      </MainPage>
    </div>
  )
}