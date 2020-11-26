export interface IContactsObj {
    [key: string]: string;
}
export interface IContacts {
    title: string;
    mail: IContactsObj[];
    hotline: IContactsObj[];
}
export interface IApps {
    app_name: string;
    breadcrumbs: ["app", "project", "function"] | ["app", "project"] | [];
    breakpoints: ["xs", "sm", "md", "lg", "xl"] | [];
    display_name: string;
    is_view_breadcrumbs: boolean;
    path: string;
}
export interface ILeftData {
    root_app: string;
    display_root_app?: string; // nếu các biến display không tồn tại thì tên của nó sẽ được lấy trong i18n
    sub_app?: string;
    display_sub_app?: string;
    // path_prefix, path là phần hậu tố sau domain: https://elrond.digi-texx.vn/:path_prefix/:path
    path_prefix?: string;
    path: string;
    // type để biểu thị cho loại function đó là gì.
    // Nếu config là các function lấy từ một config có sẵn.
    // Nếu workflow là các function lấy từ BPMN workflow.
    // Nếu null là một function bình thường được tạo sẵn trong DB
    type?: "workflow" | "config" | null;
    name: string;
    display_name: string;
    info?: string;
    // pathFocus là đường dẫn để get giá trị của item đó trong cây tree data.
    pathFocus: any[];
    id: string;
    children: ILeftData[];
    nodeIds: string[];
    projectId?: string;
    projectName?: string;
}
export interface IFunction {
    root_app: string;
    display_root_app?: string; // nếu các biến display không tồn tại thì tên của nó sẽ được lấy trong i18n
    sub_app?: string;
    display_sub_app?: string;
    // path_prefix, path là phần hậu tố sau domain: https://elrond.digi-texx.vn/:path_prefix/:path
    path_prefix?: string;
    path: string;
    // type để biểu thị cho loại function đó là gì.
    // Nếu config là các function lấy từ một config có sẵn.
    // Nếu workflow là các function lấy từ BPMN workflow.
    // Nếu null là một function bình thường được tạo sẵn trong DB
    type?: "workflow" | "config" | null;
    name: string;
    display_name: string;
}
export interface IProject {
    customer_id: string;
    customer_name: string;
    id: string;
    name: string;
}
