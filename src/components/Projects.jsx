import React from 'react';
import Card from './Card';
import RockPaperScissors from '../assets/rock-paper-scissors.PNG';
import PlantStore from '../assets/plant-store.PNG';
import FlagGame from '../assets/the-flag-game.PNG';



export default function Projects(){
    return(
        <section className="projects--container" id="projects">
            <h3> Projects </h3>
            <p className="projects--text"> Click on the image to visit the website or click on the button to see the code and more
                details about the project.
            </p>
            <div className="projects--wrapper">
                <Card 
                    img={PlantStore}
                    title="PlantyPlant"
                    link="https://nevenkachuleva.github.io/Plant-Store/"
                    code="https://github.com/nevenkaChuleva/Plant-Store"
                />

                <Card 
                    img={FlagGame}
                    title="The Flag Game"
                    link="https://nevenkachuleva.github.io/The-Flag-Game/"
                    code="https://github.com/nevenkaChuleva/The-Flag-Game"
                    
                />

                <Card 
                    img={RockPaperScissors}
                    title="Rock Paper Scissors"
                    link="https://nevenkachuleva.github.io/Rock-Paper-Scissors/"
                    code="https://github.com/nevenkaChuleva/Rock-Paper-Scissors"
                   
                />
            </div>
        </section>
    )
}