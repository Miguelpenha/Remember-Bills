import ISituation from '../../../../types/situation'

function getColorSituation(situation: ISituation) {
    switch (situation) {
        case 'paid':
            return 'green'
        case 'waiting': 
            return 'deepskyblue'
        case 'unpaid':
            return 'red'
    }
}

export default getColorSituation