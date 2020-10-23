import {
    PATH_TO_STORE_REDUX,
    GET_DATA_DRAWER_ANNOUNCEMENT,
    CLICK_ITEM_ANNOUNCEMENT,
    UPDATE_DATA_DRAWER_ANNOUNCEMENT,
    OPEN_DRAWER_ANNOUNCEMENT,
    OPEN_DIALOG_DETAIL_ANNOUNCEMENT,
    SEARCH_KEY_WORD_ANNOUNCEMENT,
    ACTION_SHOW_ANNOUNCEMENT,
    ACTION_HIDE_ANNOUNCEMENT,
} from '../../constants';
import { isEmpty, orderBy, get } from 'lodash';
import { executeActionReducer } from '../common_actions';
import { callAPIGetAnnouncement, callAPIUpdateAnnouncement } from '../call_api';

export const getDataDrawerAnnouncement = (newDataDrawerAnnParent?: any) => async (dispatch: any, getState: any) => {
    const state = get(getState(), PATH_TO_STORE_REDUX, {});
    let datas = [];
    if (state.dataDrawerAnnParent.length === 0) {
        const username = get(state, 'userInfo.username', null);
        const dataAPI = await callAPIGetAnnouncement(username);
        if (!dataAPI.error) {
            datas = dataAPI.data;
        }
    } else {
        if (newDataDrawerAnnParent) {

        }
    }

    if (datas && datas.length > 0) {
        const searchKeyWordsAnnouncement = state.searchKeyWordsAnnouncement || '';
        const newKeyWords = searchKeyWordsAnnouncement.toUpperCase();
        const data: any = [];
        const newData: any = [];
        let countSeen = 0;
        datas.map((i: any) => {
            if (!i.seen) {
                i.seen = false;
                countSeen = countSeen + 1;
            }
            if (searchKeyWordsAnnouncement !== '' &&
                (i.author.toUpperCase().search(newKeyWords) !== -1 ||
                    i.subject.toUpperCase().search(newKeyWords) !== -1 ||
                    i.project_name.toUpperCase().search(newKeyWords) !== -1)) {
                newData.push(i);
            }
            data.push(i)
        })
        dispatch(executeActionReducer(GET_DATA_DRAWER_ANNOUNCEMENT, {
            dataDrawerAnnParent: orderBy(data, ['seen', 'created_date'], ['asc', 'desc']),
            dataDrawerAnnSearch: orderBy(newData, ['seen', 'created_date'], ['asc', 'desc']),
            countSeenAnnouncement: countSeen
        }));
    }
}

export const setClickAnnouncement = (row: any) => async (dispatch: any, getState: any) => {
    if (row) {
        const seen = row.seen || false;
        const state = get(getState(), PATH_TO_STORE_REDUX, {});
        const isOpenDialogAnnouncement = state.isOpenDialogAnnouncement;
        const newDataNotifiIsSeen = state.dataAnnouncementIsSeen || [];
        const dataDetailAnnouncement = {
            author: row.author || "",
            content: row.content || "",
            created_date: row.created_date || "",
            enable: row.enable || true,
            id: row.id || "",
            last_modified: row.last_modified || "",
            project_id: row.project_id || "",
            project_name: row.project_name || "",
            seen: row.seen || true,
            subject: row.subject || "",
            task: row.task || "",
            type: row.type || "info"
        }
        const payload: any = {
            dataDetailAnnouncement,
            isOpenDialogAnnouncement: !isOpenDialogAnnouncement,
        };
        if (!seen) {
            newDataNotifiIsSeen.push(row)
            payload.dataAnnouncementIsSeen = newDataNotifiIsSeen;
        }
        dispatch(executeActionReducer(CLICK_ITEM_ANNOUNCEMENT, payload));
    }
}

export const updateDataDrawerAnnouncement = () => async (dispatch: any, getState: any) => {
    const state = get(getState(), PATH_TO_STORE_REDUX, {});
    const username = get(state, 'userInfo.username', null);
    const dataDrawerAnnParent = state.dataDrawerAnnParent || [];
    const dataAnnouncementIsSeen = state.dataAnnouncementIsSeen || [];
    const timesRetryUpdateAnnouncement = state.timesRetryUpdateAnnouncement || -1;
    const payload: any = { timesRetryUpdateAnnouncement: timesRetryUpdateAnnouncement + 1 };
    console.log('=============updateDataDrawerAnnouncement============');
    console.log('dataAnnouncementIsSeen: ', dataAnnouncementIsSeen);
    console.log('timesRetryUpdateAnnouncement: ', timesRetryUpdateAnnouncement);
    console.log('=====================================================');
    if (timesRetryUpdateAnnouncement < 3) {
        const dataAPI = await callAPIUpdateAnnouncement(username, dataAnnouncementIsSeen);
        console.log('dataAPI: ', dataAPI);
        let isSeenData = [];
        if (!isEmpty(dataAPI.data)) {
            payload.dataAnnouncementIsSeen = dataAPI.data;
            isSeenData = dataAPI.data;
        }
        else {
            isSeenData = dataAnnouncementIsSeen;
            payload.timesRetryUpdateAnnouncement = -1;
        }
        payload.dataAnnouncementIsSeen = isSeenData;
        payload.dataDrawerAnnParent = dataDrawerAnnParent.map((i: any) => {
            return { ...i, }
        })
        await dispatch(executeActionReducer(UPDATE_DATA_DRAWER_ANNOUNCEMENT, payload));
        await dispatch(getDataDrawerAnnouncement());
    }
}

export const setisOpenDrawerAnnouncement = (type: Boolean) => async (dispatch: any, getState: any) => {
    const state = get(getState(), PATH_TO_STORE_REDUX, {});
    const isOpenDialogChangePwd = state.isOpenDialogChangePwd;
    const isOpenDrawerAnnouncement = state.isOpenDrawerAnnouncement;
    if (!isOpenDialogChangePwd) {
        dispatch(executeActionReducer(OPEN_DRAWER_ANNOUNCEMENT, {
            isOpenDrawerAnnouncement: type || !isOpenDrawerAnnouncement,
            dataDetailAnnouncement: {}
        }));
    }
}

export const setIsOpenDialogDetailAnnouncement = () => async (dispatch: any, getState: any) => {
    const state = get(getState(), PATH_TO_STORE_REDUX, {});
    const isOpenDialogChangePwd = state.isOpenDialogChangePwd;
    const isOpenDialogAnnouncement = state.isOpenDialogAnnouncement;
    const isOpenDrawerAnnouncement = state.isOpenDrawerAnnouncement;
    if (!isOpenDialogChangePwd && isOpenDrawerAnnouncement) {
        dispatch(executeActionReducer(OPEN_DIALOG_DETAIL_ANNOUNCEMENT, {
            isOpenDialogAnnouncement: !isOpenDialogAnnouncement,
        }));
    }
}

export const setsearchKeyWordsAnnouncement = (keyWord: string) => async (dispatch: any, getState: any) => {
    const state = get(getState(), PATH_TO_STORE_REDUX, {});
    const dataDrawerAnnParent = state.dataDrawerAnnParent || [];
    const newKeyWords = keyWord.toUpperCase();
    let newData = dataDrawerAnnParent.filter((i: any) => i.author.toUpperCase().search(newKeyWords) !== -1 || i.subject.toUpperCase().search(newKeyWords) !== -1 || i.project_name.toUpperCase().search(newKeyWords) !== -1)
    if (newKeyWords === '') {
        newData = dataDrawerAnnParent;
    }
    dispatch(executeActionReducer(SEARCH_KEY_WORD_ANNOUNCEMENT, {
        dataDrawerAnnSearch: orderBy(newData, ['seen']),
        searchKeyWordsAnnouncement: keyWord,
    }));
}

export const setIsShowAnnouncement = (announcement: string) => async (dispatch: any, getState: any) => {
    await dispatch(executeActionReducer(ACTION_SHOW_ANNOUNCEMENT, {
        isPopupAnnouncement: true,
        announcement
    }));
    dispatch(getDataDrawerAnnouncement());
}

export const setIsHideAnnouncement = () => async (dispatch: any, getState: any) => {
    dispatch(executeActionReducer(ACTION_HIDE_ANNOUNCEMENT, {
        isPopupAnnouncement: false,
        announcement: null,
    }));
}
