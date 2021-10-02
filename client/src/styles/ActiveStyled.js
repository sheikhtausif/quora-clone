import styled from 'styled-components'

const Active = styled.div`
    padding: 9px 20px 7px 20px;
    color:red;
    border-bottom: 3.4px solid #A82723;
    &:hover{
        opacity: 0.5;
        background: #EAEFFC;
    }
`
const NoActive = styled.div`
    padding: 9px 20px 7px 20px;
    color:grey;
    border-bottom: 3.4px solid #fff;
    &:hover{
        opacity: 0.5;
        background: #EAEFFC;
    }
`

export { Active, NoActive }