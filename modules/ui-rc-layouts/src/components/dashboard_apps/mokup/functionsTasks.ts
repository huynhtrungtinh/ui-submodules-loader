export function getFunctionsTasks() {
    return [
        // training
        {
            "source_name": "training",
            "display_source_name": "Training",
            "path_prefix": "training",
            "type": "config",
            "name": "Form_40",
            "display_name": "Form_40",
            "path": "capture/5d1465340fb92b0017a5621a/Form_40/Form_40"
        },
        {
            "source_name": "training",
            "display_source_name": "Training",
            "path_prefix": "training",
            "type": "config",
            "name": "Form_20",
            "display_name": "Form_20",
            "path": "capture/5d1465340fb92b0017a5621a/Form_20/Form_20"
        },
        {
            "source_name": "training",
            "display_source_name": "Training",
            "path_prefix": "training",
            "type": "config",
            "name": "Form_50",
            "display_name": "Form_50",
            "path": "capture/5d1465340fb92b0017a5621a/Form_50/Form_50"
        },
        // production
        {
            "source_name": "production",
            "display_source_name": "Operator",
            "path_prefix": "production",
            "type": "workflow",
            "name": "Task_1o8qx7z",
            "display_name": "Waiting for Proof",
            "path": "assign/tasks/5d1465340fb92b0017a5621a/Task_1o8qx7z"
        },
        {
            "source_name": "production",
            "display_source_name": "Operator",
            "path_prefix": "production",
            "type": "workflow",
            "name": "Task_0ym5ac7",
            "display_name": "Type",
            "path": "invoice/5d1465340fb92b0017a5621a/keying/Invoice/Task_0ym5ac7"
        },
        {
            "source_name": "production",
            "display_source_name": "Operator",
            "path_prefix": "production",
            "type": "workflow",
            "name": "Task_18rrsvu",
            "display_name": "Proof",
            "path": "invoice/5d1465340fb92b0017a5621a/proof/Invoice/Task_18rrsvu"
        },
        {
            "source_name": "production",
            "display_source_name": "Operator",
            "path_prefix": "production",
            "type": "workflow",
            "name": "Task_1qfw4tc",
            "display_name": "Verify Hold Proof",
            "path": "verifying/hold/10/true/5d1465340fb92b0017a5621a/Task_1qfw4tc"
        },
        {
            "source_name": "production",
            "display_source_name": "Operator",
            "path_prefix": "production",
            "type": "workflow",
            "name": "Task_0rzw5ve",
            "display_name": "Verify Hold Type",
            "path": "verifying/hold/10/true/5d1465340fb92b0017a5621a/Task_0rzw5ve"
        },
        {
            "source_name": "production",
            "display_source_name": "Operator",
            "path_prefix": "production",
            "type": "workflow",
            "name": "Task_0oa8o9e",
            "display_name": "Supervisor",
            "path": "invoice/5d1465340fb92b0017a5621a/supervisor/Invoice/Task_0oa8o9e"
        },
        {
            "source_name": "production",
            "display_source_name": "Operator",
            "path_prefix": "production",
            "type": "workflow",
            "name": "Task_0fsh84b",
            "display_name": "Verify Hold Supervisor",
            "path": "verifying/hold/10/true/5d1465340fb92b0017a5621a/Task_0fsh84b"
        },
        {
            "source_name": "production",
            "display_source_name": "Operator",
            "path_prefix": "production",
            "type": "workflow",
            "name": "Task_1v7ehsl",
            "display_name": "View Key Data",
            "path": "data/invoice/5d1465340fb92b0017a5621a/Task_1v7ehsl"
        },
        {
            "source_name": "production",
            "display_source_name": "Operator",
            "path_prefix": "production",
            "type": "workflow",
            "name": "Task_08iat1i",
            "display_name": "Close and Rework Batch",
            "path": "rework/projects/5d1465340fb92b0017a5621a/Task_08iat1i/"
        },
        // quality-control
        {
            "source_name": "quality-control",
            "display_source_name": "QC Execution",
            "path_prefix": "quality-control",
            "type": "workflow",
            "name": "Task_1s4593u",
            "display_name": "QC Invoice Invoice",
            "path": "qc/5d1465340fb92b0017a5621a/5/Invoice/Invoice/Task_1s4593u"
        },
        {
            "source_name": "quality-control",
            "display_source_name": "QC Execution",
            "path_prefix": "quality-control",
            "type": "workflow",
            "name": "Task_11gcu4r",
            "display_name": "QC Invoice Type",
            "path": "qc/5d1465340fb92b0017a5621a/5/Invoice/Type/Task_11gcu4r"
        },
        {
            "source_name": "quality-control",
            "display_source_name": "QC Execution",
            "path_prefix": "quality-control",
            "type": "workflow",
            "name": "Task_06sz78q",
            "display_name": "QC Invoice Proof",
            "path": "qc/5d1465340fb92b0017a5621a/5/Invoice/Proof/Task_06sz78q"
        },
        {
            "source_name": "quality-control",
            "display_source_name": "QC Execution",
            "path_prefix": "quality-control",
            "type": "workflow",
            "name": "Task_1myjfvk",
            "display_name": "QC Invoice Supervisor",
            "path": "qc/5d1465340fb92b0017a5621a/5/Invoice/Supervisor/Task_1myjfvk"
        },
        // production-admin
        {
            "source_name": "production-admin",
            "display_source_name": "Prd Management",
            "path_prefix": "production-admin",
            "name": "acquisitions",
            "display_name": "Acquisitions",
            "path": "projects/:projectId/acquisitions"
        },
        {
            "source_name": "production-admin",
            "display_source_name": "Prd Management",
            "path_prefix": "production-admin",
            "name": "tasks_assignment_prd_admin",
            "display_name": "Tasks assignment",
            "path": "projects/:projectId/tasks-assignment"
        },
        {
            "source_name": "production-admin",
            "display_source_name": "Prd Management",
            "path_prefix": "production-admin",
            "name": "functions_assignment_prd_admin",
            "display_name": "Functions assignment",
            "path": "projects/:projectId/functions-assignment"
        },
        {
            "source_name": "production-admin",
            "display_source_name": "Prd Management",
            "path_prefix": "production-admin",
            "name": "approve_qc",
            "display_name": "Approve QC",
            "path": "projects/:projectId/approve-qc"
        },
        {
            "source_name": "production-admin",
            "display_source_name": "Prd Management",
            "path_prefix": "production-admin",
            "name": "batch_information",
            "display_name": "Batch information",
            "path": "projects/:projectId/batch-information"
        },
        {
            "source_name": "production-admin",
            "display_source_name": "Prd Management",
            "path_prefix": "production-admin",
            "name": "batch_priority",
            "display_name": "Batch Priority",
            "path": "projects/:projectId/batch-priority"
        },
        {
            "source_name": "production-admin",
            "display_source_name": "Prd Management",
            "path_prefix": "production-admin",
            "name": "document_information",
            "display_name": "Document information",
            "path": "projects/:projectId/document-information"
        },
        {
            "source_name": "production-admin",
            "display_source_name": "Prd Management",
            "path_prefix": "production-admin",
            "name": "export_data",
            "display_name": "Export data",
            "path": "projects/:projectId/export-data"
        },
        {
            "source_name": "production-admin",
            "display_source_name": "Prd Management",
            "path_prefix": "production-admin",
            "name": "manual_upload",
            "display_name": "Manual Upload",
            "path": "projects/:projectId/manual-upload"
        },
        {
            "source_name": "production-admin",
            "display_source_name": "Prd Management",
            "path_prefix": "production-admin",
            "name": "project_announcement",
            "display_name": "Project Announcement",
            "path": "projects/:projectId/project-announcement"
        },
        {
            "source_name": "production-admin",
            "display_source_name": "Prd Management",
            "path_prefix": "production-admin",
            "name": "project_guide",
            "display_name": "Project Guide",
            "path": "projects/:projectId/project-guide"
        },
        {
            "source_name": "production-admin",
            "display_source_name": "Prd Management",
            "path_prefix": "production-admin",
            "name": "rework_details",
            "display_name": "Rework Details",
            "path": "projects/:projectId/rework-details"
        },
        {
            "source_name": "production-admin",
            "display_source_name": "Prd Management",
            "path_prefix": "production-admin",
            "name": "training_configs",
            "display_name": "Training configs",
            "path": "projects/:projectId/training-configs"
        },
        {
            "source_name": "production-admin",
            "display_source_name": "Prd Management",
            "path_prefix": "production-admin",
            "name": "training_report",
            "display_name": "Training Report",
            "path": "projects/:projectId/training-report"
        },
        {
            "source_name": "production-admin",
            "display_source_name": "Prd Management",
            "path_prefix": "production-admin",
            "name": "verifying_configuration",
            "display_name": "Verifying Configuration",
            "path": "projects/:projectId/verifying-configuration"
        },
        {
            "source_name": "production-admin",
            "display_source_name": "Prd Management",
            "path_prefix": "production-admin/monitor-citi/",
            "name": "monitor_citi",
            "display_name": "Monitor Citi",
            "path": "projects/:projectId/monitor-citi"
        },
        {
            "source_name": "production-admin",
            "display_source_name": "Prd Management",
            "path_prefix": "production-admin/view-data-entry/",
            "name": "view_data_entry",
            "display_name": "View Data Entry",
            "path": "projects/:projectId/view-data-entry"
        },
        // qc-admin
        {
            "source_name": "qc-admin",
            "display_source_name": "QC Management",
            "path_prefix": "qc-admin",
            "name": "tasks_assignment_qc",
            "display_name": "Tasks assignment",
            "path": "projects/:projectId/tasks-assignment"
        },
        {
            "source_name": "qc-admin",
            "display_source_name": "QC Management",
            "path_prefix": "qc-admin",
            "name": "functions_assignment_qc",
            "display_name": "Functions assignment",
            "path": "projects/:projectId/functions-assignment"
        },
        {
            "source_name": "qc-admin",
            "display_source_name": "QC Management",
            "path_prefix": "qc-admin",
            "name": "qc_setting",
            "display_name": "QC Setting",
            "path": "projects/:projectId/qc-setting"
        },
        {
            "source_name": "qc-admin",
            "display_source_name": "QC Management",
            "path_prefix": "qc-admin",
            "name": "qc_sampling",
            "display_name": "QC Sampling",
            "path": "projects/:projectId/qc-sampling"
        },
        // reports
        {
            "source_name": "reports",
            "display_source_name": "Reports & Monitor",
            "path_prefix": "reports",
            "name": "details_mistake_report",
            "display_name": "Details Mistake Report",
            "path": "projects/:projectId/details-mistake-report"
        },
        {
            "source_name": "reports",
            "display_source_name": "Reports & Monitor",
            "path_prefix": "reports",
            "name": "monitor_operator",
            "display_name": "Monitor Operator",
            "path": "projects/:projectId/monitor-operator"
        },
        {
            "source_name": "reports",
            "display_source_name": "Reports & Monitor",
            "path_prefix": "reports",
            "name": "performance_report",
            "display_name": "Performance Report",
            "path": "projects/:projectId/performance-report"
        },
        {
            "source_name": "reports",
            "display_source_name": "Reports & Monitor",
            "path_prefix": "reports",
            "name": "monitor_operator",
            "display_name": "Monitor Operator",
            "path": "projects/:projectId/monitor-operator"
        },
        // designer
        {
            "source_name": "designer",
            "display_source_name": "Project Design",
            "path_prefix": "designer",
            "name": "response_evaluations",
            "display_name": "Response Evaluations",
            "path": "projects/:projectId/response-evaluations"
        },
        {
            "source_name": "designer",
            "display_source_name": "Project Design",
            "path_prefix": "designer",
            "name": "layout_definitions",
            "display_name": "Layout Definitions",
            "path": "projects/:projectId/layout-definitions"
        },
        {
            "source_name": "designer",
            "display_source_name": "Project Design",
            "path_prefix": "designer",
            "name": "field_value_definitions",
            "display_name": "Field Value Definitions",
            "path": "projects/:projectId/field-value-definitions"
        },
        {
            "source_name": "designer",
            "display_source_name": "Project Design",
            "path_prefix": "designer",
            "name": "workflow",
            "display_name": "Workflow",
            "path": "projects/:projectId/workflow"
        },
        {
            "source_name": "designer",
            "display_source_name": "Project Design",
            "path_prefix": "designer",
            "name": "upload_configurations",
            "display_name": "Upload Configuration",
            "path": "projects/:projectId/upload-configurations"
        },
        {
            "source_name": "designer",
            "display_source_name": "Project Design",
            "path_prefix": "projects/designer",
            "name": "export_config",
            "display_name": "Export Configuration",
            "path": "projects/:projectId/export-config-v2/"
        },
        {
            "source_name": "designer",
            "display_source_name": "Project Design",
            "path_prefix": "projects/designer",
            "name": "detail_sources",
            "display_name": "Detail Sources",
            "path": "projects/:projectId/detail-sources-v2/"
        },
        {
            "source_name": "designer",
            "display_source_name": "Project Design",
            "path_prefix": "projects/designer",
            "name": "tranform_config",
            "display_name": "Tranform Configuration",
            "path": "projects/:projectId/tranform-config-v2/"
        },
        {
            "source_name": "designer",
            "display_source_name": "Project Design",
            "path_prefix": "projects/designer",
            "name": "workflow_v2",
            "display_name": "Workflow V2",
            "path": "projects/:projectId/workflow-v2/"
        },
        {
            "source_name": "designer",
            "display_source_name": "Project Design",
            "path_prefix": "projects/designer",
            "name": "final_config",
            "display_name": "Final Configuration",
            "path": "projects/:projectId/final-config-v2/"
        },
        {
            "source_name": "designer",
            "display_source_name": "Project Design",
            "path_prefix": "projects/designer",
            "name": "view_key_data_config",
            "display_name": "View Key Data Configuration",
            "path": "projects/:projectId/view-key-data-config-v2/"
        },
        {
            "source_name": "designer",
            "display_source_name": "Project Design",
            "path_prefix": "projects/designer",
            "name": "export_data_allocated_config",
            "display_name": "export Data Allocated Configuration",
            "path": "projects/:projectId/export-data-allocated-config-v2/"
        }
    ]
}
// 5d1465340fb92b0017a5621a
// 040_DEMO_DGS03