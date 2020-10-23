export function getFunctions(appName: string) {
    let outPut: any = [];
    switch (appName) {
        case "general-report": {
            outPut = [
                {
                    "source_name": "general-report",
                    "display_source_name": "General Report",
                    "path_prefix": "general-report",
                    "name": "training_history",
                    "display_name": "Training History",
                    "path": "/training-history"
                }
            ]
            break;
        }
        case "pim": {
            outPut = [
                {
                    "source_name": "pim",
                    "display_source_name": "Project Information Management",
                    "path_prefix": "pim",
                    "name": "customers",
                    "display_name": "Customers",
                    "path": "/customers"
                },
                {
                    "source_name": "pim",
                    "display_source_name": "Project Information Management",
                    "path_prefix": "pim",
                    "name": "projects",
                    "display_name": "Projects",
                    "path": "/projects"
                }
            ]
            break;
        }
        case "system": {
            outPut = [
                {
                    "source_name": "system",
                    "display_source_name": "System",
                    "path_prefix": "system",
                    "name": "account_management",
                    "display_name": "Account Management",
                    "path": "/account-management"
                },
                {
                    "source_name": "system",
                    "display_source_name": "System",
                    "path_prefix": "system",
                    "name": "system_configuration",
                    "display_name": "System Configuration",
                    "path": "/system-configuration"
                },
                {
                    "source_name": "system",
                    "display_source_name": "System",
                    "path_prefix": "system",
                    "name": "role_ssignment",
                    "display_name": "Role Assignment",
                    "path": "/role-ssignment"
                },
                {
                    "source_name": "system",
                    "display_source_name": "System",
                    "path_prefix": "system",
                    "name": "general_report_assignment",
                    "display_name": "General Report Assignment",
                    "path": "/general-report-assignment"
                }
            ]
            break;
        }
        default:
            break;
    }
    return outPut;
}
