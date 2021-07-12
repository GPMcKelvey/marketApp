import React from 'react'
import ReactPlayer from 'react-player';
import './resources.css';
import { ExternalLink} from 'react-external-link';

const Resources = () => {
    
    return (
        <div> 

            <h1>Product of the Week!</h1>

            <h3>Strawberries</h3>
            <div><a>Strawberry Oatmeal Bar Recipe:</a>
                <ExternalLink href="https://www.wellplated.com/strawberry-oatmeal-bars/" />
            </div>

            <div><a>Strawberry Jam:</a>
                <ExternalLink href="https://www.foodnetwork.com/recipes/ree-drummond/strawberry-jam-recipe-2124695" />
            </div>


            <h1>Why should I support local?</h1>
            <ReactPlayer url="https://www.youtube.com/watch?v=fwdJJGijx44"/>


        </div>);


    // return (
    //     <div 
    //         style={{
    //             display: 'flex', 
    //             justifyContent: 'center', 
    //             alignItems: 'center', 
    //             height: '90vh'
    //         }}

    //     >



    //     <h1>Product of the Week!</h1>

    //     <text>
    //         {` This is \n a test! `} 
    //     </text>
        

    //     <h1>Why should I support local?</h1>

    //     <ReactPlayer
    //       url="https://www.youtube.com/watch?v=fwdJJGijx44"
    //     />
    //         <h1>Resources</h1>
    //     </div>
    // )
}

export default Resources