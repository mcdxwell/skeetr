import { Request, Response, Router } from "express";

import { isEmpty, validate } from 'class-validator';
import Visitor from "../entities/Visitor";




const sktrCount = async (request: Request, response: Response) => {

    const { nickname, sex, height, weight } = request.body
    let skeetrCount: number;
    let male: number;
    let female: number;

    try {
        let errors: any = {}
        if (isEmpty(nickname)) errors.nickname = 'Provide a nickname';
        if (isEmpty(sex)) errors.sex = 'Provide your sex';
        if (isEmpty(height)) errors.height = 'Provide your height';
        if (isEmpty(weight)) errors.weight = 'Provide your weight';

        if(Object.keys(errors).length > 0) {
            return response.status(400).json(errors)
        }
        
        if (sex === 'male'){
            skeetrCount = 10;
            male = 1;
        } else if (sex === 'female') {
            skeetrCount = 9;
            female = 1;
        }
        const visitor = new Visitor({nickname, male, female, height, weight, skeetrCount})
        errors = await validate(visitor)
        await visitor.save()

        return response.json({Hello: `Hello, ${nickname} it would take you ${skeetrCount} skeetr bites to perish.`, visitor})
    } catch (error) {
        console.log(error);

        return response.status(500).json(error);
    }

}
const router = Router()

router.post('/skeetr-count', sktrCount)

export default router