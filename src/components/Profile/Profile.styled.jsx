import styled from "@emotion/styled";

export const ProfileCard = styled.div`
padding-top: 20px;
border: 1px solid grey;
border-radius: 4px;
background-color: white;
`

export const ProfileInfo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 8px;
color: grey;
`
export const UsernameText = styled.p`
font-weight: 600;
font-size: 24px;
color: black;
`

export const Tagtext = styled.p`
font-weight: 400;
font-size: 18px;

`
export const LocationText = styled.p`
font-weight: 400;
font-size: 20px;
`
export const StatList = styled.ul`
display: flex;
justify-content: center;
align-items: center;
gap: 30px;
margin-top: 10px;
background-color:Gainsboro;`

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
 padding: 15px;`

export const ItemText = styled.span`
font-weight: 400;
font-size: 18px;
`
export const ItemValue = styled.span`
font-weight: 600;
font-size: 22px;
color: black;
`