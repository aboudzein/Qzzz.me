import React from 'react'
import GenericRouter from '../../Packages/GenericRouter/GenericRouter'
import QuestionBuilderPage from '../../Pages/Builder/QuestionBuilder/QuestionBuilderPage'
import HomePage from '../../Pages/Landing/HomePage'

const routes = [
    {
        path: "/",
        exact: true,
        page: () => <p>Hello</p>,
      },
      {
        path: "/create-question",
        exact: true,
        page: () => <QuestionBuilderPage/>,
      },
      {
        path: "/myBank",
        page: () => <HomePage />,
      }
    
]


export default function RouterPage() {
    return (
        <GenericRouter routes={routes} />
    )
}
