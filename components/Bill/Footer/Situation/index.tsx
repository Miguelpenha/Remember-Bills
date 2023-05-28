import { IBill } from '../../../../types'
import { FC } from 'react'
import getSituation from './getSituation'
import { Icon } from './style'

interface IProps {
    bill: IBill
}

const Situation: FC<IProps> = ({ bill }) => {
    const situation = getSituation(bill)

    switch (situation) {
        case 'paid':
            return (
                <Icon situation={situation} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </Icon>
            )
        case 'waiting':
            return (
                <Icon situation={situation} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24">
                    <g>
                        <rect fill="none" height="24" width="24"/>
                    </g>
                    <g>
                        <g>
                            <g>
                                <path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M16.2,16.2L11,13V7h1.5v5.2l4.5,2.7L16.2,16.2z"/>
                            </g>
                        </g>
                    </g>
                </Icon>
            )
        case 'unpaid':
            return (
                <Icon situation={situation} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                </Icon>
            )
    }
}

export default Situation