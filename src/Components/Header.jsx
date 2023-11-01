import Dashboard from './Dashboard.jsx'
import Projects from './Projects.jsx'
import Board from './Board.jsx'
import Add_User from './Add_User.jsx'
import Messages from './Messages.jsx'


export default function Header() {
  return (
    <div className='bg-deep-indigo h-screen flex flex-col items-center'>
      <Dashboard/>
      <Projects/>
      <Board/>
      <Add_User/>
      <Messages/>
    </div>
  )
}
