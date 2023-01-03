
import React from "react";
import Card from "./Cards";
import Sdata from "./Sdata";


const App = ()=>(
    <>
        <h1 className="heading_style">List of top 5 Netflix </h1>
        {/* <Card
            imgsrc="https://wallpapercave.com/w/wp4056410.jpg"
            title=" A Netflix original series  "
            sname="DARK"
            link="https://www.netflix.com/in/title/80990668?source=35"
        />

        <Card
            imgsrc="https://upload.wikimedia.org/wikipedia/en/9/9a/Extracurricular_2020.jpg"
            title=" A Netflix original series  "
            sname="Extra Curricular"
            link="https://www.netflix.com/in/title/80990668?source=35"
        />


        <Card
            imgsrc="https://wallpapercave.com/wp/wp1917154.jpg"
            title=" A Netflix original series  "
            sname="Stranger Things"
            link="https://www.netflix.com/in/title/80990668?source=35"
        />


        <Card
            imgsrc="https://wallpapercave.com/wp/wp1917154.jpg"
            title=" A Netflix original series  "
            sname="Stranger Things"
            link="https://www.netflix.com/in/title/80990668?source=35"
        />


        <Card
            imgsrc="https://wallpapercave.com/wp/wp1917154.jpg"
            title=" A Netflix original series  "
            sname="Stranger Things"
            link="https://www.netflix.com/in/title/80990668?source=35"
        /> */}

        {/* <Card
            imgsrc={Sdata[0].imgsrc}
            title={Sdata[0].title}
            sname={Sdata[0].sname}
            link={Sdata[0].links}
        />

        <Card
            imgsrc={Sdata[1].imgsrc}
            title={Sdata[1].title}
            sname={Sdata[1].sname}
            link={Sdata[1].links}
        />

        <Card
            imgsrc={Sdata[2].imgsrc}
            title={Sdata[2].title}
            sname={Sdata[2].sname}
            link={Sdata[2].links}
        /> */}

        {Sdata.map((val) => {
            return (
                <Card
                    key={val.id}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    sname={val.sname}
                    link={val.links}
                />
            )
        })}
    </>

);

export default App;