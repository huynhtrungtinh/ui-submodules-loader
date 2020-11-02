import {getApiPublicKeyNotification} from '@dgtx/ui-scl';
import {setSubscribe, setSubscribeAll} from './CallAPI';
import {IItemNotifications, LOCAL_STORAGE_STATUS_NOTIFICATION} from "./Constants";
// import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from './ConfigAPI';

export function convertDataCheckedNoti(optionNotification?: IItemNotifications[], isChecked?: boolean) {
    const outPut: any = {};
    const data: any = getLocalStorageNotiData();
    if (data) {return data;}
    if (optionNotification && optionNotification.length > 0) {
        optionNotification.map(i => {
            outPut[i.type] = {...i, checked: isChecked}
        })
    }
    return outPut;
}

export function urlBase64ToUint8Array(base64String: string) {
    const padding = "=".repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, "+")
        .replace(/_/g, "/");

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

export function getLocalStorageNotiData() {
    let outPut: any = localStorage.getItem(LOCAL_STORAGE_STATUS_NOTIFICATION);
    if (outPut) {
        outPut = JSON.parse(outPut);
    } else {
        outPut = null;
    }
    return outPut;
}

export function setLocalStorageNotiData(optionNotification: any) {
    localStorage.setItem(LOCAL_STORAGE_STATUS_NOTIFICATION, JSON.stringify(optionNotification))
}

export function removeLocalStorageNotiData() {
    localStorage.removeItem(LOCAL_STORAGE_STATUS_NOTIFICATION);
}

export function clearLocalStorage() {
    localStorage.removeItem(LOCAL_STORAGE_STATUS_NOTIFICATION);
    // localStorage.removeItem(ACCESS_TOKEN_KEY);
    // localStorage.removeItem(REFRESH_TOKEN_KEY);
    // localStorage.clear();
}

export async function setSubcribeByUserStatus(userStatus: any, currentStatus: string[], subscription: any) {
    const showOptions = Object.keys(userStatus).filter((key: any) => userStatus[key].checked === true && currentStatus.includes(key));
    if (showOptions[0]) {
        const isSubcribe = await setSubscribe(subscription, showOptions);
        if (isSubcribe) {
            showOptions.map((option: any) => {
                userStatus[option].checked = true;
            })
        }
    }
    return userStatus;
}

export async function setSubcribeBrowser(registration: any) {
    return await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(getApiPublicKeyNotification())
    }).then(async (newSubscription: any) => {
        await setSubscribeAll(newSubscription);
    }).catch((err: any) => console.log('pushManager setSubcribeBrowser failed: ', err))
}
