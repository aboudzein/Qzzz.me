import React, { Fragment } from 'react'
import CardContainer from './CardContainer/CardContainer'

export default function SectionContainer(props) {

    const cards = props.data.fieldCards || []

    const containerClass = {
        marginBottom : "12px"
    }


    return (
        <Fragment>
            {
                cards.map( (card , index) => (
                    <div  style={containerClass}>
                        <CardContainer key={index} data={card} />
                    </div>
                    
                ))
            }
        </Fragment>
    )
}
