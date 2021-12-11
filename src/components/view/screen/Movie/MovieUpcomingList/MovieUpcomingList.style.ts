import styled from "styled-components/native"

const ParentContainer = styled.View`
    width: 100%;
    margin-left: 20px;
`

const VerticalScrollContainer = styled.ScrollView`
    width: 100%;
    padding: 20px 0;
`

const CardContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    width: 90%;
    height: 300px;

    margin-bottom: 25px;

    border-radius: 10px;
`

const SideContainer = styled.View`
    display: flex;
    flex-direction: column;

    align-items: flex-start;
    justify-content: space-between;

    width: 135px;
    height: 260px;

    margin-left: 15px;
`

const ContentContainer = styled.View`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: space-evenly;
`

const TagContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`

export {
    ParentContainer,
    VerticalScrollContainer,
    ContentContainer,
    SideContainer,
    TagContainer,
    CardContainer,
}
