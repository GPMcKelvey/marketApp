import React from 'react'
import ReactPlayer from 'react-player';
import './resources.css';
import { Link } from 'react-router-dom';
import chart from './Produce-Chart2.jpg'

const Resources = () => {
    
        return (
            <div> 

                <h1 className="titles">Product of the Week!</h1>
                    
                    <h3 className="fruit">Strawberries</h3>


                    {/* Recipe lists */}
                    <h3 className="subTitles">Featured Recipes: </h3>

                            <li className="recipes">Strawberry Oatmeal Bars: <a href="https://www.wellplated.com/strawberry-oatmeal-bars/">  https://www.wellplated.com/strawberry-oatmeal-bars/</a></li>
                            <li className="recipes">Strawberry Jam:  <a href="https://www.foodnetwork.com/recipes/ree-drummond/strawberry-jam-recipe-2124695"> https://www.foodnetwork.com/recipes/ree-drummond/strawberry-jam-recipe-2124695</a></li>
                            <li className="recipes">Strawberry Frozen Yogurt:  <a href="https://www.justataste.com/5-minute-healthy-strawberry-frozen-yogurt-recipe/"> https://www.justataste.com/5-minute-healthy-strawberry-frozen-yogurt-recipe/</a></li>

                    <h3 className="subTitles">Featured Articles: </h3>

                            <li className="recipes">Strawberries 101 Nutritional Facts and Healthy Benefits: <a href="https://www.healthline.com/nutrition/foods/strawberries"> https://www.healthline.com/nutrition/foods/strawberries</a></li>
                            <li className="recipes">Everything You Need to Know About Strawberries: <a href="https://www.medicalnewstoday.com/articles/271285#benefits"> https://www.medicalnewstoday.com/articles/271285#benefits</a></li>



                    <ul>
                        <Link to="/foods" className="oldFruits">[Click Here] to View Previous Products of the Week</Link>
                    </ul>
                    
                <h1 className="titles">Why should I support local?</h1>

                        <p className="fruit"><ReactPlayer url="https://www.youtube.com/watch?v=pC8V78nCVg4&t=56s"/> </p>

                        <h3 className="subTitles">More Resources to Support Local </h3>

                                <li className="recipes">10 Reasons to Support Farmers Markets <a href="https://cuesa.org/learn/10-reasons-support-farmers-markets"> https://cuesa.org/learn/10-reasons-support-farmers-markets</a></li>
                                <li className="recipes">Farmer Markets: There's More to Market <a href="https://farmersmarketcoalition.org/education/the-benefits-of-farmers-markets/"> https://farmersmarketcoalition.org/education/the-benefits-of-farmers-markets/</a></li>
  

                <h1 className="titles">What's in Season?</h1>

                <img src={chart} alt="Seasons" />

            </div>
        );
}

export default Resources
