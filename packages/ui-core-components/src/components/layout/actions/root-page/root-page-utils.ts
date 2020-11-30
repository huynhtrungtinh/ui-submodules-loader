import {ISideBar} from '../../constants';

export function createOperatorProjectData(data: ISideBar[]) {
  let outPut: any = [];
  console.log('=========createOperatorProjectData===============');
  console.log('data: ', data);
  console.log('====================================');
  for (let i = 0; i < data.length; i++) {
    const el = data[i];
    const children1 = el.children;
    for (let j = 0; j < children1.length; j++) {
      const children2 = children1[j];
      outPut.push(children2)
    }
  }
  return outPut;
}
