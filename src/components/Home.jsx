import Card from "./Card";

export default function Home() {

    return (
        <div className="main-container">
            <h1>Home Component</h1>
            <div className="card-container">
                <Card name={"Abhishek"} caption={"My name is Abhishek Soni. I am from SRMIST."} />
                <Card name={"Niladri"} />
                <Card name={"prabhjeet"} />
                <Card name={"Nabeel"} />
            </div>
        </div>
    )
}