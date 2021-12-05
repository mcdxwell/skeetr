import { request, Request, Response, Router } from "express"
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

const avgSkeetrBites = async (request: Request, response: Response) => {

    try {
        const entityManager = getManager();
        const getAVG = await entityManager.query(`
        
        SELECT AVG("skeetrCount") AS avg_skeetr_bites FROM visitors;

        `);

        return response.json({getAVG})
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

// Not the best solution, I think, but it will work. lol
const avgWeights = async (request: Request, response: Response) => {

    // To get females: SELECT * FROM visitors WHERE female = 1;
    try {
        const entityManager = getManager();
        const avg_female_weight = await entityManager.query(`
        
        SELECT AVG(weight) AS avg_female_weight FROM visitors WHERE female = 1;`);

        const avg_male_weight = await entityManager.query(`
        
        SELECT AVG(weight) AS avg_male_weight FROM visitors WHERE male = 1; `);


        return response.json({avg_female_weight, avg_male_weight})
    } catch (error) {
        return response.status(401).json(error)
    }

}

const avgHeights = async (request: Request, response: Response) => {
    
    try {
        const entityManager = getManager();
        const avg_female_height = await entityManager.query(`
        
        SELECT AVG(height) AS avg_female_height FROM visitors WHERE female = 1; `);

        const avg_male_height = await entityManager.query(`
        SELECT AVG(height) AS avg_male_height FROM visitors WHERE male = 1; `);

        return response.json({avg_female_height, avg_male_height})
    } catch (error) {
        return response.status(401).json(error)
    }
}


const router = Router()

router.get('/skeetr-bites', skeetrBites)
router.get('/skeetr-bites-avg', avgSkeetrBites)
router.get('/skeetr-visitors', totalVisitors)
router.get('/skeetr-sexes', totalSexes)
router.get('/skeetr-avg-female-weights', avgFemaleWeight)
router.get('/skeetr-avg-male-weights', avgMaleWeight)
router.get('/skeetr-avg-weights', avgWeights)
router.get('/skeetr-avg-heights', avgHeights)

export default router