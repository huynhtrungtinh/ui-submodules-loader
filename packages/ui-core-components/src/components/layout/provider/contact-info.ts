import {GET, IResourceProvider} from '@dgtx/ui-scl';
import {fetchJson, getApiUacURI} from '@dgtx/ui-utils';

const CONTACT_INFO_RESOURCE = "contact_info";
const contactInfoResource: IResourceProvider = (type: string, resource: string, params: any): Promise<any> => {
    switch (type) {
        case GET:
            // return Promise.resolve({
            //     status: 201,
            //     headers: {},
            //     json: getContactInfo()
            // });
            return fetchJson(`${getApiUacURI()}/apps`);
        default:
            return Promise.reject(`projectProvider Not support ${type}`)
    }
}

export {contactInfoResource, CONTACT_INFO_RESOURCE};

