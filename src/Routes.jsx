import React from 'react'
import { useRoutes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import NotFound from './pages/NotFoundPage/NotFound'
import NewsSearch from './pages/SearchPage/NewsSearch'

import News from './pages/NewsPage/News'

const Routes = () => {

    let element = useRoutes([
        {path:"/",
            element:<Homepage/>
        }
    ,{
        path:"*",
        element:<NotFound/>
    }
    ,{
        path:"/news/:category",
        element:<News/>
    }
    ,{
        path:"/search-result/:search",
        element:<NewsSearch/>
    }   

    ])
  return element
  
}

export default Routes
