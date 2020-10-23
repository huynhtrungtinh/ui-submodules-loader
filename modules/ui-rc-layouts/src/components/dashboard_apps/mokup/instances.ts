export function getInstances(sourceName: string) {
    let outPut = {};
    if (sourceName === "production") {
        outPut = {
            "Task_1o8qx7z": 100001,
            "Task_0ym5ac7": 100002,
            "Task_18rrsvu": 100003,
            "Task_1qfw4tc": 100004,
            "Task_0rzw5ve": 100005,
            "Task_0oa8o9e": 100006,
            "Task_0fsh84b": 100007,
            "Task_1v7ehsl": 100008,
            "Task_08iat1i": 100009
        }
    } else if (sourceName === "quality-control") {
        outPut = {
            "Task_1s4593u": 100010,
            "Task_11gcu4r": 100011,
            "Task_06sz78q": 100012,
            "Task_1myjfvk": 100013
        }
    }
    return outPut;
}