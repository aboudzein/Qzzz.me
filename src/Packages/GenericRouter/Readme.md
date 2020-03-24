
### Generic Router Package
This Package Depend on 
1. eTuzla Layout Package .
2. Ant.Design for Ant Design Package 
3. React Router Dom 

### Configuration : 
Router Page , routes array for  passing routes as props .


### Layouts : 
Ant.Design 
1. Navbar Layout 
2. Sidebar Layout 


### Features in Future 
1. Router Generator Schema 

### How it Works 

1. Create a Router Component in your root folder 
2. define a routes array contain this structure 
```
/* {
    path : "/",
    exact: true , 
    page : Component,
    layout : Component 
} 
```
3. Make sure that the Components and Layouts imported in the component 
4. Add the Generic Router component in the page , and pass the routes as a props 

Example 

```
import React from 'react'
import GenericRouter from '../../Packages/GenericRouter/GenericRouter'
import QuestionBuilderPage from '../../Pages/Builder/QuestionBuilder/QuestionBuilderPage'
import HomePage from '../../Pages/Landing/HomePage'
import NavBarLayout from '../../Packages/Layouts/Ant.Design/NavBar/NavBarLayout'
import SideBarLayout from '../../Packages/Layouts/Ant.Design/SideBar/SideBarLayout'

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
     
    
]


export default function RouterPage() {
    return (
        <GenericRouter routes={routes} />
    )
}
```





