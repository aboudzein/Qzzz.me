import React, { Fragment } from 'react'
import CardContainer from './CardContainer'

export default function SectionContainer(props) {

    const cards = props.data.fieldCards || []

    return (
        <Fragment>
            {
                cards.map( (card , index) => (
                    <CardContainer key={index} data={card} />
                ))
            }
        </Fragment>
    )
}
