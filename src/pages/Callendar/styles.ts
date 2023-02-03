import styled from "styled-components"
export const Outbox = styled.div`
    max-width:1058px;
`
export const Box = styled.div`
display: grid;
grid-template-columns: repeat(7, 1fr);
grid-template-rows: repeat(4, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
border: 4px solid #5b2b2a;
`
export const DayBox = styled.div`
    height: calc(81vw/7);
    width: calc(81vw/7);
    border: 2px solid #fa9305;
    max-width: 150px;
    max-height: 150px;
    box-sizing: border-box;

    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: space-between;
    flex-flow: row wrap;
`
export const Day = styled.span`
    position: absolute;
    left: 50%;
    top: 50%;
    line-height: 0;
    user-select: none;
    z-index: 10;
    transform: translatex(-50%);
    font-weight: bold;
    font-size: 24px;
    color: black;

`
export const SelectDay = styled('div') < { chama?: boolean }> `
   background-color: #ffcf7f;
   display: flex;
   box-sizing: border-box;
   border: 2px solid #ffcf7f ;
   width: 50%;
   height: 50%;
   user-select: none;
   position: relative;
   padding: 2px;
   cursor: pointer;
   &:hover{
    img{
        opacity: 1;
    }
   }
   &:nth-child(3){
       justify-content: flex-start;
    }
    &:nth-child(4){
       justify-content: flex-end;
    }
    &:nth-child(5){
       justify-content: flex-start;
        align-items: flex-end;
    }
    &:nth-child(6){
       justify-content: flex-end;
        align-items: flex-end;
   }
`
export const Item = styled('img') <{ chama?: boolean }>`
height: 100%;
    max-height: 50px;
    opacity: ${props => props.chama ? 1 : 0};
    transition: all 200ms;
`
export const MonthBox = styled.div`
width:calc(100% - 8px );
display: flex;
justify-content: space-between;
align-items: center;
background-color: #ffcf7f;
border: 2px solid #fa9305;
border-bottom: none;
    outline: 4px solid #5b2b2a;
   box-sizing: border-box;
   margin: 0 auto;
   padding: 0 16px;
   h1{
    color: black;
    text-transform: uppercase;
   }
`
export const Seta = styled.img`
user-select: none;
cursor: pointer;
opacity: .6;
transition: opacity 150ms;
&:hover{
    opacity: 1;
}
&:nth-child(1){
    rotate: 180deg;
}
`
export const Npc = styled.img`
    position: absolute;
    left: 50%;
    bottom: 0%;
    width: 30%;
    line-height: 0;
    user-select: none;
    z-index: 9;
    transform: translatex(-50%);
`
export const Reset = styled.div`
    position: fixed;
    bottom: 0px;
    right: 0px;
    width: 40px;
    height: 40px;
    background-image: url('https://stardewvalleywiki.com/mediawiki/images/d/d3/Optionstab.png');
    background-repeat: no-repeat;
    background-size: contain;
    user-select: none;
    cursor: pointer;
`