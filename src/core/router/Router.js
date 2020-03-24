import React from 'react'
import GenericRouter from '../../Packages/GenericRouter/GenericRouter'
import QuestionBuilderPage from '../../Pages/Builder/QuestionBuilder/QuestionBuilderPage'
import HomePage from '../../Pages/Landing/HomePage'
import NavBarLayout from '../../Packages/Layouts/Ant.Design/NavBar/NavBarLayout'
import SideBarLayout from '../../Packages/Layouts/Ant.Design/SideBar/SideBarLayout'
import ExamCreatePage from '../../Pages/Teacher/ExamCreate/ExamCreatePage'

const routes = [
    {
        path: "/myBank",
        page: HomePage,
        layout:SideBarLayout
      },
    {
        path: "/",
        exact: true,
        page:QuestionBuilderPage,
        layout: NavBarLayout
      },
      {
        path: "/create-question",
        exact: true,
        page: QuestionBuilderPage,
        layout: SideBarLayout
      },
      {
        path: "/exam-create",
        exact: true,
        page: ExamCreatePage,
        layout: NavBarLayout
      },
     
    
]


export default function RouterPage() {
    return (
        <GenericRouter routes={routes} />
    )
}
