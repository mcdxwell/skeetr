import { Request, Response, Router } from "express"
import { getManager } from "typeorm"


const skeetrBites = async (request: Request, response: Response) => {


    try {
        let errors: any = {}
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






const router = Router()

router.get('/skeetr-bites', skeetrBites)


export default router