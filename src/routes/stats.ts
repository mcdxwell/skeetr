import { Request, Response, Router } from "express"
import { request } from "http";
import { EntityManager, getManager } from "typeorm"


const skeetrBites = async (request: Request, response: Response) => {


    try {
        const entityManager = getManager();

        // SUM of the skeetrCount column
        // all the bites of every user is summed
        const getSkeetrCount = await entityManager.query(`

        SELECT

            SUM("skeetrCount")

        FROM

            visitors;
        
        `);
    return response.json({getSkeetrCount})
    //SkeeterStats: `The total skeetr count is ${getSkeetrCount.toString()}` returns object Object
        
    } catch (error) {
        return response.status(401).json(error)
    }
    
}


const totalVisitors = async (request: Request, response: Response) => {

    try {
        const entityManager = getManager();

        const getVisitors = await entityManager.query(`
        SELECT

            COUNT(*)

        FROM

            visitors;

        `);

    return response.json({getVisitors})

    } catch (error) {
        return response.status(401).json(error)
    }

}



const totalSexes = async (request: Request, response: Response) => {

    try {
        const entityManager = getManager();
        const sexCount = await entityManager.query(`

        SELECT

            SUM(male) as total_males,
            SUM(female) as total_females

        FROM

            visitors;


        `);

    return response.json({sexCount})
    } catch (error) {
        return response.status(401).json(error)
    }

}


const avgFemaleWeight = async (request: Request, response: Response) => {

    // To get females: SELECT * FROM visitors WHERE female = 1;
    try {
        const entityManager = getManager();
        const avgWeight = await entityManager.query(`
        
        SELECT 
        
            AVG(weight) AS avg_female_weight
        
        FROM 
        
            visitors 
        
        WHERE 
        
            female = 1;


        `)
        return response.json({avgWeight})
    } catch (error) {
        return response.status(401).json(error)
    }

}

const avgMaleWeight = async (request: Request, response: Response) => {

    // To get males: SELECT * FROM visitors WHERE male = 1;
    try {
        const entityManger = getManager();
        const avgWeight = await entityManger.query(`
        
        SELECT

            AVG(weight) AS avg_male_weight

        FROM 

            visitors

        WHERE

            male = 1;
        
        `)
        return response.json({avgWeight})
    } catch (error) {
        
    }


}

// TO-DO: rewrite the avg male and female queries. Do both queries in one.




const router = Router()

router.get('/skeetr-bites', skeetrBites)
router.get('/skeetr-visitors', totalVisitors)
router.get('/skeetr-sexes', totalSexes)
router.get('/skeetr-avg-female-weights', avgFemaleWeight)
router.get('/skeetr-avg-male-weights', avgMaleWeight)

export default router