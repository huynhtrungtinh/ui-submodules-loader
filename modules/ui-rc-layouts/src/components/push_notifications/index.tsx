import * as React from 'react';
import IconNotification from './IconNotification';
import { PushNotificationsProvider, setUnsubscribeAllByLogout, setSubscribeAllByLogin } from './store';
import { onUpdate } from './store/ConfigSW';
import { register, unregister } from './serviceWorker';
function PushNotifications(props: any) {
    return (
        <PushNotificationsProvider>
            <IconNotification {...props}/>
        </PushNotificationsProvider>
    )
}
export {
    onUpdate,
    PushNotifications,
    setUnsubscribeAllByLogout,
    setSubscribeAllByLogin,
    register,
    unregister
}
