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






const router = Router()

router.get('/skeetr-bites', skeetrBites)
router.get('/skeetr-visitors', totalVisitors)
router.get('/skeetr-sexes', totalSexes)


export default router