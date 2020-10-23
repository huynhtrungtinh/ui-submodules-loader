import { getApiPublicKeyNotification } from '@dgtx/coreui';
import { urlBase64ToUint8Array } from './FunctionsGeneral';
import { getSubscriptionCustom, setSubscribeAll, setUnsubscribeAll } from './CallAPI';
async function onUpdate(registration: ServiceWorkerRegistration) {
    if (!("Notification" in window)) {
        console.log("This browser does not support desktop notification");
        return;
    }
    if (!('PushManager' in window)) {
        console.log('Push messaging isn\'t supported.');
        return;
    }
    // check existing subscription
    await registration.pushManager.getSubscription().then(async (subscription: any) => {
        if (subscription) {
            try {
                const isSubscription = await getSubscriptionCustom(subscription.endpoint)
                if (!isSubscription) {
                    setSubscribeAll(subscription);
                }
            } catch (error) {
                console.log('====================================');
                console.log('getSubscriptionCustom is error');
                console.log('====================================');
            }
        } else {
            const permission = Notification.permission;
            switch (permission) {
                case 'denied': {
                    setUnsubscribeAll();
                    break;
                }
                case 'default': {
                    Notification.requestPermission().then(() => {
                        registration.pushManager.subscribe({
                            userVisibleOnly: true,
                            applicationServerKey: urlBase64ToUint8Array(getApiPublicKeyNotification())
                        }).then(async (newSubscription: any) => {
                            setSubscribeAll(newSubscription);
                        }).catch((err: any) => console.log('pushManager subscribe failed: ', err))
                    });
                    break;
                }
                case 'granted': {
                    registration.pushManager.subscribe({
                        userVisibleOnly: true,
                        applicationServerKey: urlBase64ToUint8Array(getApiPublicKeyNotification())
                    }).then(async (newSubscription: any) => {
                        setSubscribeAll(newSubscription);
                    }).catch((err: any) => console.log('pushManager subscribe failed: ', err))
                    break;
                }
                default:
                    break;
            }
        }
    })
}
export {
    onUpdate
}
