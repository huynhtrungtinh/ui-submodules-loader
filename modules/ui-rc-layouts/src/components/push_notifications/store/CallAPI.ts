import {
    fetchJson, getApiNotificationURI,
    // refreshToken,
    getAppName
} from '@dgtx/ui-utils';
import {unregister} from '../serviceWorker';
import {clearLocalStorage, getLocalStorageNotiData} from './FunctionsGeneral';

export async function getTypesNofi() {
    let outPut = null;
    try {
        const res = await fetchJson(`${getApiNotificationURI()}/apps/${getAppName()}/types`, {method: "GET"});
        if (res.status === 200) {
            outPut = res.json;
        }
        // else if (res.status === 401) {
        //     outPut = null;
        //     await refreshToken();
        // }
        else {
            outPut = null;
        }
    } catch (error) {
        console.log('=== getTypesNofi ==');
        console.log(error);
        console.log('===================');
    }
    return outPut;
}

export async function getSubscriptionCustom(endpoint: string) {
    let outPut = null;
    try {
        const res = await fetchJson(`${getApiNotificationURI()}/apps/${getAppName()}/subscribe?endpoint=${endpoint}`, {method: "GET"});
        if (res.status === 200) {
            outPut = res.json;
        }
        else if (res.status === 404) {
            outPut = null;
        }
        // else if (res.status === 401) {
        //     outPut = null;
        //     await refreshToken();
        // }
        else {
            outPut = null;
        }
    } catch (error) {
        console.log('=== getSubscriptionCustom ==');
        console.log(error);
        console.log('============================');
    }
    return outPut;
}

export async function setSubscribe(subscription: any, typeNotif: string[]) {
    const body = JSON.stringify({subscribe: subscription, type_notif: typeNotif.join()})
    let outPut = null;
    try {
        const res = await fetchJson(`${getApiNotificationURI()}/apps/${getAppName()}/subscribe`, {method: "POST", body});
        if (res.status === 201) {
            outPut = res.json;
        }
        // else if (res.status === 401) {
        //     outPut = null;
        //     await refreshToken();
        // }
        else {
            outPut = null;
        }
    } catch (error) {
        console.log('=== setSubscribe ==========');
        console.log(error);
        console.log('===========================');
    }
    return outPut;
}

export async function setUnsubscribe(subscription: any, typeNotif: string[]) {
    const body = JSON.stringify({subscribe: subscription, type_notif: typeNotif.join()})
    let outPut = null;
    try {
        const res = await fetchJson(`${getApiNotificationURI()}/apps/${getAppName()}/unsubscribe`, {method: "DELETE", body});
        if (res.status === 200) {
            outPut = res.json;
        }
        // else if (res.status === 401) {
        //     outPut = null;
        //     await refreshToken();
        // }
        else {
            outPut = null;
        }
        return outPut;
    } catch (error) {
        console.log('=== setUnsubscribe =======');
        console.log(error);
        console.log('===========================');
    }
    return outPut;
}

export async function setSubscribeAll(subscription: any) {
    const body = JSON.stringify({subscribe: subscription, type_notif: 'all'})
    let outPut = null;
    try {
        const res = await fetchJson(`${getApiNotificationURI()}/apps/${getAppName()}/subscribe`, {method: "POST", body});
        if (res.status === 201) {
            outPut = res.json;
        }
        // else if (res.status === 401) {
        //     outPut = null;
        //     await refreshToken();
        // }
        else {
            outPut = null;
        }
    } catch (error) {
        console.log('=== setSubscribeAll =======');
        console.log(error);
        console.log('===========================');
    }
    return outPut;
}

export async function setUnsubscribeAll(subscription?: any) {
    const body = JSON.stringify({subscribe: subscription, type_notif: 'all'})
    let outPut = null;
    try {
        const res = await fetchJson(`${getApiNotificationURI()}/apps/${getAppName()}/unsubscribe`, {method: "DELETE", body});
        if (res.status === 200) {
            outPut = res;
            // tslint:disable-next-line: no-unused-expression
            subscription && subscription.unsubscribe();
        }
        // else if (res.status === 401) {
        //     outPut = null;
        //     await refreshToken();
        // }
        else {
            outPut = null;
        }
    } catch (error) {
        console.log('=== setUnsubscribeAll =====');
        console.log(error);
        console.log('===========================');
    }
    return outPut;
}

export async function setUnsubscribeAllByLogout() {
    if ('navigator' in window && 'serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then((registration) => {
            if ("Notification" in window) {
                registration.pushManager.getSubscription().then(async (subscription: any) => {
                    if (subscription) {
                        await setUnsubscribeAll(subscription);
                        await unregister();
                    }
                    clearLocalStorage();
                })
            }
        })
    } else {
        clearLocalStorage();
    }
}

export function setSubscribeAllByLogin() {
    if ('navigator' in window && 'serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then((registration) => {
            if ("Notification" in window) {
                registration.pushManager.getSubscription().then(async (subscription: any) => {
                    if (subscription) {
                        if (!getLocalStorageNotiData()) {
                            await setSubscribeAll(subscription);
                        }
                    }
                })
            }
        })
    } else {
        console.log('=== setSubscribeAllByLogin =====');
        console.log('trinh duyet khong ho tro navigator');
        console.log('================================');
    }
}
