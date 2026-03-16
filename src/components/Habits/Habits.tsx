import './style.scss';


const myHabits = [
  'Wake up at 6',
  'Trade',
  'Code',
  'Read',
  'Cybersecurity'
]

const days = [
  'SUN', 'MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT'
]

const numOfWeeks = 2;

export default function Habits() {
  return (
    <div className={'habits-container'}>
      <div className={'habits'}>
        <div className={'habits-header'}>
          <h1 className={'title'}>My Habits</h1>
          <div className={'weeks'}>
            {Array.from({ length: numOfWeeks }).map((_, i) => {
              return (
                <div className={'week'} key={i}>
                  <div>Week {i+1}</div>
                </div>
              )
            })}
          </div>
        </div>
        <div className={'habits-items'}>
          {myHabits.map((habit) => {
            return (
              <div className={'habit'} key={habit}>
                <p>{habit}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}