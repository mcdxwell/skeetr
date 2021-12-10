

function convertHeight(height: number): number {

    let metricHeight: number = height / 39.37

    return metricHeight

}


function convertWeight(weight: number): number {

    let metricWeight: number = weight / 2.205

    return metricWeight
}

function convert(height: number, weight: number): number[] {

    let metricHeight: number = height / 39.37
    let metricWeight: number = weight / 2.205

    return [metricHeight, metricWeight]
}

const metHeight = (height: number): void => { height /39.27}
