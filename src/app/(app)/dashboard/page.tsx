'use client'
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import Button from "@/components/shared/Button/Button";

export default function DashboardPage() {

  return (
    <div className={'dashboard-page'}>
      <NavigationBar />
      <Button name={'submit'}
              label={'Submit'}
              buttonType={'secondary'}
              handleClick={() => { console.log('clicked') }}
      />
    </div>
  )
}