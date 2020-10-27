

export const FETCH = '@DGS/FETCH';
export const FETCH_START = '@DGS/FETCH_START';
export const FETCH_END = '@DGS/FETCH_END';
export const FETCH_ERROR = '@DGS/FETCH_ERROR';
export const FETCH_CANCEL = '@DGS/FETCH_CANCEL';


export const fetchStart = () => ({
    type: FETCH_START,
});

export const fetchEnd = () => ({
    type: FETCH_END,
});

export const fetchError = () => ({
    type: FETCH_ERROR,
});

export const fetchCancel = () => ({
    type: FETCH_CANCEL,
});
