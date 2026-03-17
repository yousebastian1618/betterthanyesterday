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
      <div className={'grid grid-cols-[200px_repeat(14,_1fr)] gap-1'}>
        <div className={'header'}>
          <h1>This is header</h1>
          <div>&nbsp;</div>
          {myHabits.map((h, i) => {
            return (
              <div className={'habit'} key={h}>{h}</div>
            )
          })}
        </div>
        <div className={'content'}>
          <div className={'weeks'}>
            {Array.from({ length: numOfWeeks }).map((_, i) => {
              return (
                <div className={'week'} key={i}>
                  <div>Week {i+1}</div>
                  <div className={'days'}>
                    {days.map((d) => {
                      return (
                        <span key={d}>{d}</span>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
          <div className={'checkbox'}>
          </div>
        </div>
      </div>
    </div>
  )
}