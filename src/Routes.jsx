import React from 'react'
import { useRoutes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Sports from './pages/SportsPage/Sports'
import Latest from './pages/LatestNewsPage/Latest'
import Global from './pages/GlobalNewsPage'
import NewzifyPicks from './pages/NewzifyPicksPage/NewzifyPicks'
import Businesspage from './pages/BusinessPage/Businesspage'
import NotFound from './pages/NotFoundPage/NotFound'
import NewsSearch from './pages/SearchPage/NewsSearch'

import News from './pages/NewsPage/News'

import { useParams } from 'react-router-dom'
const Routes = () => {

    let element = useRoutes([
        {path:"/",
            element:<Homepage/>
        },
        {
            path:"/sports",
            element:<Sports/>
        },
        {
            path:"/latest",
            element:<Latest/>
        },
        {
            path:"/globalnews",
            element:<Global/>
        },
        {
            path:"/newzifyPicks",
            element:<NewzifyPicks/>
        },{
            path:"/business",
            element:<Businesspage/>
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
