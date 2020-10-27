

const getDataObjectArray=(name:string[],entity:any):any=>{
    const [current,...next] =name;
    if (!entity) {
        return null;
    }
    if (current.indexOf(',') > -1) {
        const namesIn = current.split(',');
        const result:any = {};
        if(!next.length){
            namesIn.forEach(attr => {
                result[attr] = entity[attr]
            })
        }else{
            namesIn.forEach(attr => {
                result[attr] = getDataObjectArray(next,entity[attr])
            })
        }
        return result
    } 
    if(!!next.length&&!entity[current]){
        return null;
    }
    return getDataObjectArray(next,entity[current])
}
export const getDataObject = (name: string | string[], entity: object): any => {
    if (!entity) {
        return null;
    }
    const namesIn = typeof name === 'string' ? name.split('.') : name;
    if(namesIn.join('').indexOf(',')>-1){
        return getDataObjectArray(namesIn,entity)
    }
    try {
        let result: any = entity
        for (let i = 0; i < namesIn.length && result; ++i) {
            result = result[namesIn[i]]
        }
        return result;
    } catch (error) {
        return null;
    }
}

export const setDataObject = (name: string, value: object, entity: any) => {
    if (name.indexOf('.') > -1) {
        const i = name.indexOf('.');
        const p = name.substr(0, i);
        const nameIn = name.substr(i + 1);
        if (!entity[p]) { entity[p] = {} }
        setDataObject(nameIn, value, entity[p])
    } else {

        entity[name] = value;
    }
}
