// import React from 'react'

// const Navbar = () => {
//   return (
//     <div>
//       <nav>
//         <ul>
//             <li>Home</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//       </nav>
//     </div>
//   )
// }

// export default Navbar
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Navbar = () => {
  const count = useSelector((state) => state.counter.value)

  return (
    <div>
      I am a navbar and counter is {count}
    </div>
  )
}

export default Navbar