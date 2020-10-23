
import { showNotification } from '../actions/notificationActions'
export default ({ dispatch, getState }: any) => (next: any) => (action: any) => {
    if (action.meta) {
        const { error, meta: { notification, optimistic } } = action;
        if (notification) {
            const { body, level, messageArgs = {} } = notification;
            if (error) {
                dispatch(showNotification(
                    typeof error === 'string' ? error : error.message || body,
                    level || 'warning',
                    {
                        messageArgs,
                        undoable: false,
                    }
                ))
            } else {
                dispatch(showNotification(body, level || 'info', {
                    messageArgs,
                    undoable: optimistic,
                }))
            }
        }
    }
    return next(action);
}