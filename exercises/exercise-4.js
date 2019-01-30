/** Javascript Exercise 4
 * 
 * A truck can travel a maxTravelDistance on 1 tank of gas. And it needs to make a full trip to a delivery location and back.
 * The truck needs to use as much gas as possible (meaning its entire trip needs to get as close as possible to its max travel distance.) 
 * If there are mulitple optimal routes, return all possible choices.
 * 
 * maxTravelDistance, forwardRouteList, returnRouteList 
 * 
 * return ids of routes [1,4]
 */

const maxTravelDistance = 6000;
const forwardRouteList = [
    [1, 2000],
    [2, 4000],
    [3, 1000],
    [4, 5000],
    [5, 5000],
    [6, 1500],
    [7, 2500],
    [8, 4500]
];
const returnRouteList = [
    [1, 2000],
    [2, 4000],
    [3, 1000],
    [4, 5000],
    [5, 5000],
    [6, 1500],
    [7, 2500],
    [8, 4500]
];

const numberSort = (a, b) => {
    return a[1] - b[1];
};
//Potential revisit this solution for performance.
const getOptimalRoutes = (maxTravelDistance, forwardRouteList, returnRouteList) => {

    let result = [];

    forwardRouteList.sort(numberSort);
    returnRouteList.sort(numberSort);

    let numFRoutes = forwardRouteList.length;
    let numRRoutes = returnRouteList.length;

    let optimalDistance = 0;

    for (let i = 0; i < numFRoutes; i++) {
        let fRoute = forwardRouteList[i][1];

        if (fRoute >= maxTravelDistance)
            break;

        for (let j = 0; j < numRRoutes; j++) {
            let rRoute = returnRouteList[j][1];
            let currentDistance = rRoute + fRoute;
            let isValidDistance = currentDistance <= maxTravelDistance;
            if (rRoute >= maxTravelDistance)
                break;
            if (currentDistance > maxTravelDistance)
                break;
            if (isValidDistance && optimalDistance == currentDistance) {
                result.push([forwardRouteList[i][0], returnRouteList[j][0]]);
            }
            if (isValidDistance && optimalDistance < currentDistance) {
                optimalDistance = currentDistance;
                result = [[forwardRouteList[i][0], returnRouteList[j][0]]];
            }

        }
    }

    return result;
}

let result = getOptimalRoutes(maxTravelDistance, forwardRouteList, returnRouteList);

console.log({
    result
})