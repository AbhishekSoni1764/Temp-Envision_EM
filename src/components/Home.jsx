import Card from "./Card";

export default function Home() {

    return (
        <div className="main-container">
            <h1>Home Component</h1>
            <div className="card-container">
                <Card name={"Abhishek"} caption={"My name is Abhishek Soni. I am from SRMIST."} />
                <Card name={"Aditya"} />
                <Card name={"Ishani"} />
                <Card name={"Vishnu"} />
                <Card name={"Hritik"} />
            </div>
        </div>
    )
}