// /api/':api_name/apps/:app_name/projects/:project_id/functions/:function_name/tasks/:task_name'
// /api/':api_name/apps/:app_name/projects/:project_id/functions/:function_name/
// /.api/:api_name/'.a/:app_name/.p/:project_id/.f/:function_name/.t/:task_name'
// /api/core/apps/quality-control/projects/5ea6a709ae6f27001bb9e2df/functions/quality-control/tasks/QC_Sunlife/section-definitions?layout_name=Sunlife&attributes=position,visible,disable,double_typing

export const APPS = [
    {
        "app_name": "projects",
        "display_name": "Projects",
        "path": "/projects"
    },
    {
        "app_name": "system",
        "display_name": "System",
        "path": "/system"
    },
    {
        "app_name": "pim",
        "display_name": "Project Information Management",
        "path": "/pim"
    },
    {
        "app_name": "general_report",
        "display_name": "General Report",
        "path": "/general-report"
    },
]

export const PROJECTS = [
    {
        "customer_id": "5e04623c37dee202b0256e67",
        "customer_name": "UIBK",
        "id": "5ce253e9612a670018d9d70d",
        "name": "067_190510_013_Store_Front_Attr_Anno"
    },
    {
        "customer_id": "5e04623c37dee202b0256e67",
        "customer_name": "UIBK",
        "id": "5ce253e9612a670018d9d70d",
        "name": "067_190510_013_Store_Front_Attr_Anno"
    }
]

export const user_access = {
    username: '',
    roles: 'pm',
    functions: [
        'cc'
    ],
    project_id: '',
    app_name: ''
}

export const roles = [
    {
        name: 'pm',
        display_name: 'project management',
        functions: [
            'dd',
        ]
    },
    {
        name: 'qcm',
        display_name: 'qc management',
        functions: [
            
        ]
    },
    {
        name: 'des',
        display_name: 'designer',
        functions: [
            
        ]
    },
    {
        name: 'sa',
        display_name: 'super admin',
        functions: [
            
        ]
    }
]


export const PROJECTS_APP = [
    {
        "app_name": "training",
        "display_name": "Training",
        "path": "/training",
        "functions": [
            {
                "name": "Proof",
                "display_name": "Proof",
                "path": "capture/5de8dad560eb67b7a3625ff1/Invoice/Proof"
            }
        ]
    },
    {
        "app_name": "production",
        "display_name": "Operator",
        "path": "/production",
        "functions": [
            {
                "name": "Drawing",
                "display_name": "Drawing",
                "path": "keyings/5ce253e9612a670018d9d70d/Drawing/Task_14w528j"
            }
        ]
    },
    {
        "app_name": "production-admin",
        "display_name": "PRD Management",
        "path": "/production-admin",
        "functions": [
            {
                "name": "training_history",
                "display_name": "Training History",
                "path": "/training_history"
            }
        ]
    },
    {
        "app_name": "quality-control",
        "display_name": "QC Execution",
        "path": "/quality-control",
        "functions": [
            {
                "name": "training_history",
                "display_name": "Training History",
                "path": "/training_history"
            }
        ]
    },
    {
        "app_name": "qc-admin",
        "display_name": "QC Management",
        "path": "/qc-admin",
        "functions": [
            {
                "name": "training_history",
                "display_name": "Training History",
                "path": "/training_history"
            }
        ]
    },
    {
        "app_name": "designer",
        "display_name": "Project Design",
        "path": "/designer",
        "functions": [
            {
                "name": "training_history",
                "display_name": "Training History",
                "path": "/training_history"
            }
        ]
    },
    {
        "app_name": "reports",
        "display_name": "Reports & Monitor",
        "path": "/reports",
        "functions": [
            {
                "name": "training_history",
                "display_name": "Training History",
                "path": "/training_history"
            }
        ]
    }
]

export const SYSTEM = {
    "app_name": "system",
    "display_name": "System",
    "functions": [
        {
            "name": "account-management",
            "display_name": "Account Management",
            "path": "/account-management"
        },
        {
            "name": "system-configuration",
            "display_name": "System Configuration",
            "path": "/system-configuration"
        },
        {
            "name": "role-ssignment",
            "display_name": "Role Assignment",
            "path": "/role-ssignment"
        },
        {
            "name": "general-report-assignment",
            "display_name": "General Report Assignment",
            "path": "/general-report-assignment"
        }
    ]
}

export const PIM = {
    "app_name": "pim",
    "display_name": "Project Information Management",
    "functions": [
        {
            "name": "pim-customers",
            "display_name": "Customers Management",
            "path": "/customers"
        },
        {
            "name": "pim-projects",
            "display_name": "Projects Management",
            "path": "/projects"
        }
    ]
}

export const GENERAL_REPORT = {
    "app_name": "general_report",
    "display_name": "General Report",
    "functions": [
        {
            "name": "training_history",
            "display_name": "Training History",
            "path": "/training-history"
        }
    ]
}
