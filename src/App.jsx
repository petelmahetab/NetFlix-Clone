import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './folder/Home'
import About from './folder/About'
import Video from './folder/Video'
import Navbar from './folder/Navbar'
import Params from './folder/Params'
import Shorts from './folder/Shorts'
import Profile from './folder/Profile'
const router=createBrowserRouter([
  {
    path:'/',
    element:<>
    <Navbar/>
    <Home/>
    </>
  },{
    path:'/about',
    element:<>
    <Navbar/>
    <About/>
    </>
  },{
    path:'/video',
    element:<>
    <Navbar/>
    <Video/>
    </>,
    children:[
     { path:'shorts',
    element:<Shorts/>},{
      path:'profile',
      element:<Profile/>
    }
    ]
  },{
    path:'/age/:a',
    element:<>
    <Params/>
    </>
  }
])

const App = () => {
  return (
    <div style={{display:'flex',textAlign:'center'}}>
      <RouterProvider router={router}/>
  {/* //  <h6>Learning Routing</h6>   */}
    </div>
  )
}

export default App
