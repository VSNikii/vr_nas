import React from "react";
import { cards } from "./ListCards";
import './../components/OurService/ourService.module.scss';

function CardsRender(){
    const [visible, setVisible] = React.useState(false);
    const [currentCard, setCurrentCard] = React.useState('');
    const element = document.createElement('button');
    return(
        <>
        {cards.map((item, index) => (
            <div onMouseEnter={(event) => {setCurrentCard(event.target); setVisible(true)}}   className='cards__card d-flex flex-column' style={{marginTop: item.margin_top + 'px'}} key={index}>
                <img width={48} height={48} src={item.imageUrl} alt={index}/>
                <h1>{item.title}</h1>
                <p>{item.text}</p>
                <button className="btn-more">Read more</button>
            </div>
        ))}
        </>
    );
};


export default CardsRender;