import {
    GET_OPTION_NOTIFICATION,
    SET_CLICK_OPTION_NOTIFICATION,
    SET_CHECKED_DISABLED_NOTIFICATION,
    SET_OPEN_MENU_OPTION_NOTIFICATION,
} from './Actions';
import { IActionsCreator } from './Constants';
import { getSubscriptionCustom, setSubscribeAll, getTypesNofi, setSubscribe, setUnsubscribe, setUnsubscribeAll } from './CallAPI';
import { OPTION_NOTIFICATION } from './Reducer';
import { setLocalStorageNotiData, removeLocalStorageNotiData, getLocalStorageNotiData, convertDataCheckedNoti, setSubcribeByUserStatus, setSubcribeBrowser } from './FunctionsGeneral';
import { getGuideFile } from './GuideFile';

export async function getOptionNoti(input: IActionsCreator) {
    if ('navigator' in window && 'serviceWorker' in navigator) {
        const { state } = input;
        if (state.optionNotification.length === 0) {
            const payload: any = {};
            await navigator.serviceWorker.ready.then(async (registration) => {
                if ("Notification" in window && Notification.permission === 'denied') {
                    if(getLocalStorageNotiData()){
                        await setUnsubscribeAll(registration);
                        payload.checked = {};
                        payload.isSubcribe = false;
                        removeLocalStorageNotiData();
                    }
                } else if ("Notification" in window && (Notification.permission === 'granted' || Notification.permission === 'default')) {
                    const optionNotification = await getTypesNofi() || OPTION_NOTIFICATION;
                    const checked = convertDataCheckedNoti(optionNotification, true);
                    const isSubcribe = getStatusIconNoti(checked);
                    payload.optionNotification = optionNotification;
                    payload.checked = checked;
                    payload.isSubcribe = isSubcribe;
                    const newSubscription = await registration.pushManager.getSubscription();
                    let isSubcribeData = false;
                    if (newSubscription) {
                        const subcribeData = await getSubscriptionCustom(newSubscription.endpoint);
                        if (!subcribeData) {
                            isSubcribeData = true;
                        } else {
                            payload.checked = await setSubcribeByUserStatus(checked, subcribeData, newSubscription);
                        }
                        if (isSubcribeData) {
                            setSubscribeAll(newSubscription)
                            payload.checked = convertDataCheckedNoti(optionNotification, true);
                        }
                        payload.isSubcribe = getStatusIconNoti(payload.checked);
                        setLocalStorageNotiData(payload.checked);
                    } else {
                        await setSubcribeBrowser(registration);
                        setLocalStorageNotiData(payload.checked);
                        // (window as any).location.reload();
                    }
                }

            })
            return {
                type: GET_OPTION_NOTIFICATION,
                payload
            }
        }
    } else {
        console.log('Service workers are not supported.');
    }
    return { type: GET_OPTION_NOTIFICATION }
};

export async function viewGuideFile() {
    if ((window as any).confirm('Hiện tại bạn đang tắt chức năng noification của browser. \nBấm "ok" để xem hướng dẫn bật Notifications.')) {
        let objbuilder = '';
        const myBase64string = getGuideFile();
        objbuilder += ('<object width="100%" height="100%" data="data:application/pdf;base64,');
        objbuilder += (myBase64string);
        objbuilder += ('" type="application/pdf" class="internal">');
        objbuilder += ('<embed src="data:application/pdf;base64,');
        objbuilder += (myBase64string);
        objbuilder += ('" type="application/pdf"  />');
        objbuilder += ('</object>');
        try {
            const win: any = (window as any).open("#", "_blank");
            const title = "Notification Guide";
            win.document.write('<html><title>' + title + '</title><body style="margin-top: 0px; margin-left: 0px; margin-right: 0px; margin-bottom: 0px;">');
            win.document.write(objbuilder);
            win.document.write('</body></html>');
        } catch (error) {
            console.log('=== viewGuideFile =====');
            console.log(error);
            console.log('=======================');
        }
    }
}

export async function setCheckedDisabled(input: IActionsCreator) {
    const { params, state } = input;
    const { item, isDisabled } = params;
    const payload: any = {};
    const checkedDisabled: any = state.checkedDisabled;
    checkedDisabled[item.type] = isDisabled
    payload.checkedDisabled = checkedDisabled;
    return {
        type: SET_CHECKED_DISABLED_NOTIFICATION,
        payload
    }
}


export async function setClickOption(input: IActionsCreator) {
    if ('navigator' in window && 'serviceWorker' in navigator) {
        const { state, params } = input;
        const { item } = params;
        const payload: any = {};
        const checked = state.checked;
        const isChecked = checked[item.type].checked;
        await navigator.serviceWorker.ready.then(async (registration) => {
            const newSubscription = await registration.pushManager.getSubscription();
            if ("Notification" in window && (Notification.permission === 'granted' || Notification.permission === 'default')) {
                if (newSubscription) {
                    let subcribeData = null;
                    if (!isChecked) {
                        subcribeData = await setSubscribe(newSubscription, [item.type]);
                    } else {
                        subcribeData = await setUnsubscribe(newSubscription, [item.type]);
                    }
                    if (subcribeData) {
                        checked[item.type].checked = !isChecked;
                        setLocalStorageNotiData(checked);
                        payload.isSubcribe = getStatusIconNoti(checked);
                        payload.checked = checked;
                    }
                }
            }
        })
        return {
            type: SET_CLICK_OPTION_NOTIFICATION,
            payload
        }
    }
    return { type: SET_CLICK_OPTION_NOTIFICATION }
};

export const getStatusIconNoti = (checked?: any) => {
    let isSubcribe = false;
    const newChecked = checked || getLocalStorageNotiData();
    if (newChecked) {
        const showOptions = Object.keys(newChecked).filter((key: any) => newChecked[key].checked === true);
        if (showOptions[0]) {
            isSubcribe = true;
        }
    }
    return isSubcribe;
};

export async function setMenuOptionsOpen(input: IActionsCreator) {
    const { params } = input;
    const { currentTarget, isOpen = false } = params;
    let payload: any = {};
    payload.anchorEl = null;
    payload.isMenuOpen = false;
    if ('navigator' in window && 'serviceWorker' in navigator) {
        await navigator.serviceWorker.ready.then(async () => {
            if ("Notification" in window && Notification.permission === 'denied') {
                viewGuideFile();
            } else if ("Notification" in window && (Notification.permission === 'granted' || Notification.permission === 'default')) {
                if (currentTarget && isOpen) {
                    payload.anchorEl = currentTarget;
                    payload.isMenuOpen = true;
                }
            }
        })
    }
    return {
        type: SET_OPEN_MENU_OPTION_NOTIFICATION,
        payload
    }
};