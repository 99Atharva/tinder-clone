import React, { useState , useEffect} from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
import axios from './axios';

function TinderCards() {
    const [people,setpeople] = useState([]);

    useEffect(() => {
       async function fetchData() {
           const req = await axios.get("/tinder/cards");
           
           setpeople(req.data);
       }

       fetchData();

    }, [])

    const swiped = (direction) => {
        console.log('You swiped: ' + direction);
      }
       
      const outOfFrame = (name) => {
        console.log(name + ' left the screen');
      }
    return (
        <div className="tindercards" >
            
            <div className="tindercard_container">
            {
                people.map((person)=>(
                    <TinderCard className="swipe"
                    key={person.name}
                    onSwipe={(dir)=> swiped(dir, person.name)} 
                    onCardLeftScreen={() => outOfFrame('fooBar')} 
                    preventSwipe={['up', 'down']}
                    >
                        <div className="cardContent" style={{backgroundImage:`url(${person.imgUrl})`}}
                        className="card"> 
                        
                            <h3>{person.name}</h3>
                            
                        </div>
                </TinderCard>
                    

                ))
            }
                </div>
        </div>
        
    );
    
}
export default TinderCards;