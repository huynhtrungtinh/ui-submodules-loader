import {fetchJson, getApiUacURI, getApiURI, getAppName} from '@dgtx/ui-utils';
import {getApps, getInfoContact} from '../mokup';

export const callAPIGetInfoContact = async () => {
    return {error: null, data: getInfoContact()}
    let outPut: any = {error: null, data: {}};
    try {
        const res = await fetchJson(`${getApiUacURI()}/gui-configurations/info-contact`, {method: "GET"});
        console.log('callAPIGetAnnouncement: ', res);
        if (res.status === 200) {
            outPut.data = res.json;
        }
        // else if (res.status === 401) {
        //     outPut = null;
        //     await refreshToken();
        // }
    } catch (error) {
        console.log('=== callAPIGetInfoContact ==');
        console.log(error);
        console.log('===================');
        outPut.error = {
            code: 400,
            messageViewClient: null,
            messageFromServer: error
        }
    }
    return outPut;
};

export const callAPIApps = async () => {
    return {error: null, data: getApps()}
    let outPut: any = {error: null, data: {}};
    try {
        const res = await fetchJson(`${getApiUacURI()}/apps`, {method: "GET"});
        console.log('callAPIApps: ', res);
        if (res.status === 200) {
            outPut.data = res.json;
        }
        // else if (res.status === 401) {
        //     outPut = null;
        //     await refreshToken();
        // }
    } catch (error) {
        console.log('=== callAPIApps ==');
        console.log(error);
        console.log('===================');
        outPut.error = {
            code: 400,
            messageViewClient: null,
            messageFromServer: error
        }
    }
    return outPut;
};

export const callAPIGetAnnouncement = async (username: string) => {
    let outPut: any = {error: null, data: []};
    if (username) {
        try {
            const res = await fetchJson(`${getApiURI()}/apps/${getAppName()}/announcements?username=${username}`, {method: "GET"});
            if (res.status === 200) {
                outPut.data = res.json;
            }
            console.log('callAPIGetAnnouncement: ', res);
        } catch (error) {
            console.log('=== callAPIGetAnnouncement ==');
            console.log(error);
            console.log('=============================');
            outPut.error = {
                code: 400,
                messageViewClient: null,
                messageFromServer: error
            }
        }
    } else {
        outPut.error = {
            code: 400,
            messageViewClient: `username is undefined `,
            messageFromServer: null
        }
    }
    return outPut;
};

export const callAPIUpdateAnnouncement = async (username: string, datas: any) => {
    let outPut: any = {error: null, data: []};
    if (username && datas) {
        try {
            const notiIsSeen = datas.map((data: any) => {
                return new Promise(async (resolve) => {
                    const res = await fetchJson(`${getApiURI()}/apps/${getAppName()}/announcements/${data.id}/read`,
                        {
                            method: "PATCH",
                            body: JSON.stringify({username})
                        }
                    );
                    console.log('callAPIUpdateAnnouncement: ', res);
                    let promise: any = {error: null, data: []};
                    if (res.status !== 200) {
                        promise.error.code = res.status;
                        promise.data.push(data);
                    }
                    resolve(promise);
                })
            })
            await Promise.all(notiIsSeen).then((items: any) => {
                console.log('Promise.all: ', items);
                outPut.data = items.filter((item: any) => item.error);
            }).catch(err => {
                outPut.data = datas;
            })
        } catch (error) {
            console.log('=== callAPIUpdateAnnouncement ===');
            console.log(error);
            console.log('=================================');
            outPut.error = {
                code: 400,
                messageViewClient: null,
                messageFromServer: error
            }
        }
    } else {
        outPut.error = {
            code: 400,
            messageViewClient: `username or datas is undefined `,
            messageFromServer: null
        }
    }
    return outPut;
};


export const callAPITotalAnnouncement = async () => {
    let outPut: any = {error: null, data: {total: 20}};
    // outPut.error = {
    //     code: 400,
    //     messageViewClient: null,
    //     messageFromServer: 'loi'
    // }
    return outPut;
    try {
        const res = await fetchJson(`${getApiUacURI()}/gui-configurations/info-contact`, {method: "GET"});
        console.log('callAPIGetAnnouncement: ', res);
        if (res.status === 200) {
            outPut.data = res.json;
        }
        // else if (res.status === 401) {
        //     outPut = null;
        //     await refreshToken();
        // }
    } catch (error) {
        console.log('=== getTypesNofi ==');
        console.log(error);
        console.log('===================');
        outPut.error = {
            code: 400,
            messageViewClient: null,
            messageFromServer: error
        }
    }
    return outPut;
};
