export const HIDE_NOTIFICATION = '@DGS/HIDE_NOTIFICATION';
export const SHOW_NOTIFICATION = '@DGS/SHOW_NOTIFICATION';
export const showNotification = (
    message: any,
    type = 'info',
    notificationOptions: any
) => ({
    type: SHOW_NOTIFICATION,
    payload: {
        ...notificationOptions,
        type,
        message,
    },
});
export const hideNotification = (index: number) => ({
    type: HIDE_NOTIFICATION,
    payload: index
});


