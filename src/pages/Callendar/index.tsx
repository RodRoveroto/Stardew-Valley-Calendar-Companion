import { useEffect, useState } from "react"
import { Box, Day, DayBox, Item, MonthBox, Npc, Outbox, Reset, SelectDay, Seta } from "./styles"
import Bee_House from '../../assets/Bee_House.png'
import seta from '../../assets/seta.png'
import keg from '../../assets/keg.png'
import preserves_Jar from '../../assets/Preserves_Jar.png'
import cask from '../../assets/cask.png'
import birthdays from '../../assets/mock/birthdays.json'
let yearArray: Year = { autumn: [], spring: [], summer: [], winter: [] }
for (let index = 0; index < 28; index++) {
    yearArray.autumn.push({ day: index + 1, setup: {} })
    yearArray.spring.push({ day: index + 1, setup: {} })
    yearArray.summer.push({ day: index + 1, setup: {} })
    yearArray.winter.push({ day: index + 1, setup: {} })
}
export function Callendar() {
    const [activeMonth, setActiveMonth] = useState("spring")
    const [year, setYear] = useState(yearArray)
    const [firstTimeCalled, setFirstTimeCalled] = useState(true)

    useEffect(() => {
        if (firstTimeCalled) {
            const monthStorageData = localStorage.getItem('season')
            const yearRaw = localStorage.getItem('year')
            if (monthStorageData) {
                setActiveMonth(monthStorageData)
            }
            if (yearRaw) {
                const yearStorageData = JSON.parse(yearRaw)
                setYear(yearStorageData)
            }
            setFirstTimeCalled(false)
            handdleBirthdays()
        }
    });

    function handdleBirthdays() {
        const months = ['autumn', 'spring', 'summer', 'winter']
        months.map(month => {
            birthdays[month as keyof Year].map((date, index) => {
                year[month as keyof Year][date.date - 1].event = { name: date.npc, url: date.url }
            })
        })
        setYear(year => ({ ...year }))
        console.log(year)
    }
    function addEventToDay(index: number, context: 'plant' | 'keg' | 'jar' | 'cask') {
        switch (context) {
            case 'cask':
                year[activeMonth as keyof Year][index].setup.cask?.inicialized ?
                    year[activeMonth as keyof Year][index].setup.cask = { inicialized: false } :
                    year[activeMonth as keyof Year][index].setup.cask = { inicialized: true }
                break;
            case 'jar':
                year[activeMonth as keyof Year][index].setup.jar?.inicialized ?
                    year[activeMonth as keyof Year][index].setup.jar = { inicialized: false } :
                    year[activeMonth as keyof Year][index].setup.jar = { inicialized: true }
                break;
            case 'keg':
                year[activeMonth as keyof Year][index].setup.keg?.inicialized ?
                    year[activeMonth as keyof Year][index].setup.keg = { inicialized: false } :
                    year[activeMonth as keyof Year][index].setup.keg = { inicialized: true }
                break;
            case 'plant':
                year[activeMonth as keyof Year][index].setup.plant?.inicialized ?
                    year[activeMonth as keyof Year][index].setup.plant = { inicialized: false } :
                    year[activeMonth as keyof Year][index].setup.plant = { inicialized: true }
                break;
        }
        setYear(year => ({ ...year }))
        localStorage.setItem('year', JSON.stringify(year))
    }
    function changeMonth(next: boolean) {
        if (next) {
            switch (activeMonth) {
                case 'spring':
                    setActiveMonth('winter')
                    localStorage.setItem('season', 'winter')
                    break;
                case 'summer':
                    setActiveMonth('spring')
                    localStorage.setItem('season', 'spring')
                    break;
                case 'autumn':
                    setActiveMonth('summer')
                    localStorage.setItem('season', 'summer')
                    break;
                case 'winter':
                    setActiveMonth('autumn')
                    localStorage.setItem('season', 'autumn')
                    break;
            }
        }
        else {
            switch (activeMonth) {
                case 'spring':
                    setActiveMonth('summer')
                    localStorage.setItem('season', 'summer')
                    break;
                case 'summer':
                    setActiveMonth('autumn')
                    localStorage.setItem('season', 'autumn')
                    break;
                case 'autumn':
                    setActiveMonth('winter')
                    localStorage.setItem('season', 'winter')
                    break;
                case 'winter':
                    setActiveMonth('spring')
                    localStorage.setItem('season', 'spring')
                    break;
            }

        }
    }
    function fullReset() {
        localStorage.removeItem('season')
        localStorage.removeItem('year')
        setActiveMonth("spring")
        setYear(yearArray)
    }
    return (
        <Outbox>
            <MonthBox>
                <Seta onClick={() => changeMonth(true)} src={seta} alt="" />
                <h1>{activeMonth}</h1>
                <Seta onClick={() => changeMonth(false)} src={seta} alt="" />
            </MonthBox>
            <Box>
                {
                    year[activeMonth as keyof Year].map((item, index) => {
                        return (
                            <DayBox key={item.day}>
                                <Day>
                                    {item.day}
                                </Day>
                                <Npc src={item.event?.url} alt={item.event?.name} />
                                <SelectDay onClick={() => addEventToDay(index, 'jar')}>
                                    <Item chama={item.setup.jar?.inicialized} src={preserves_Jar} ></Item>
                                </SelectDay>
                                <SelectDay onClick={() => addEventToDay(index, 'keg')}>
                                    <Item chama={item.setup.keg?.inicialized} src={keg}></Item>
                                </SelectDay>
                                <SelectDay onClick={() => addEventToDay(index, 'plant')}>
                                    <Item chama={item.setup.plant?.inicialized} src={cask} ></Item>
                                </SelectDay>
                                <SelectDay onClick={() => addEventToDay(index, 'cask')}>
                                    <Item chama={item.setup.cask?.inicialized} src={Bee_House} ></Item>
                                </SelectDay>
                            </DayBox>)
                    })
                }
            </Box>
            <Reset onClick={fullReset}></Reset>
        </Outbox>
    )
}
interface Day {
    day: number
    setup: Setup
    event?: {
        name: string,
        url?: string
    }
}
interface Setup {
    plant?: { inicialized: boolean, duration?: number }
    keg?: { inicialized: boolean, duration?: number }
    jar?: { inicialized: boolean, duration?: number }
    cask?: { inicialized: boolean, duration?: number }
}
interface Year {
    spring: Day[]
    summer: Day[]
    autumn: Day[]
    winter: Day[]

}