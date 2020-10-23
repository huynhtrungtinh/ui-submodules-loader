export const dataSection_GRV = () => {
    return [
        {
            "name": "Classify",
            "layout_name": "Manual_Classify",
            "index": 1,
            "layout_id": "5d426b83b4dbc70015b86816",
            "is_multiple": false,
            "position": {},
            "settings": {
                "is_multiple": false,
                "fieldId": "",
                "autoIncrement": "",
                "autoIncrementStart": "",
                "multiple": {
                    "record_no": 0,
                    "is_multiple": true,
                    "mask": null
                }
            },
            "layout_validation": null,
            "validation": null,
            "position_percent": {
                "x": null,
                "y": null,
                "w": null,
                "h": null
            },
            "fields": [
                {
                    "_id": "5d426b83b4dbc70015b86813",
                    "name": "remarkDescription",
                    "field_display": "Remark Description",
                    "default_value": "",
                    "control_type": "TEXTFIELD",
                    "tooltip": "",
                    "is_list": false,
                    "counted_character": true,
                    "pattern": {
                        "name": "",
                        "arguments": {},
                        "content": ""
                    },
                    "lookup_source": {
                        "allow_multiple": false,
                        "characters_trigger_lookup": 1,
                        "group_project": "production",
                        "key_value": "error_description",
                        "locale": [
                            "096_190619_124_MVL_eClaim"
                        ],
                        "lookup_after_time": 1,
                        "lookup_field": "error_define",
                        "name": "lookup_MVL_remark",
                        "param_set": "return [data.remarkDescription]",
                        "result_view_config": [
                            {
                                "title": "Error Code",
                                "key_value": "error_code"
                            },
                            {
                                "title": "Error Description",
                                "key_value": "error_description"
                            }
                        ],
                        "related_columns": [
                            "error_code"
                        ],
                        "specific_project": "0"
                    },
                    "validation": {
                        "name": "",
                        "content": "",
                        "arguments": {}
                    },
                    "rule_transform": {
                        "name": "",
                        "arguments": {},
                        "content": ""
                    },
                    "lookup_broadcast": [
                        {
                            "column_broadcast": "error_code",
                            "field_broadcasted": "remarkCode"
                        }
                    ],
                    "value_broadcast": "",
                    "argument_details": [],
                    "project_id": "5d4197bfb4dbc70015b867f4",
                    "created_date": "2019-08-01T04:33:07.813Z",
                    "last_modified": "2020-02-20T03:05:15.044Z",
                    "field_setting": {
                        "field_id": "5d426b83b4dbc70015b86813",
                        "visible": true,
                        "disable": false,
                        "double_typing": false,
                        "argument_details": [],
                        "position": {},
                        "position_percent": {
                            "x": null,
                            "y": null,
                            "w": null,
                            "h": null
                        }
                    },
                    "position": {},
                    "visible": true,
                    "disable": false,
                    "double_typing": false
                },
                {
                    "_id": "5d426b83b4dbc70015b86812",
                    "name": "remarkCode",
                    "field_display": "Remark Code",
                    "default_value": "",
                    "control_type": "TEXTFIELD",
                    "tooltip": "",
                    "is_list": false,
                    "counted_character": true,
                    "pattern": {
                        "name": "",
                        "arguments": {},
                        "content": ""
                    },
                    "lookup_source": {
                        "allow_multiple": false,
                        "characters_trigger_lookup": 1,
                        "group_project": "production",
                        "key_value": "error_code",
                        "locale": [
                            "096_190619_124_MVL_eClaim"
                        ],
                        "lookup_after_time": 1,
                        "lookup_field": "error_define",
                        "name": "lookup_MVL_remark",
                        "param_set": "return [data.remarkCode]",
                        "result_view_config": [
                            {
                                "title": "Error Code",
                                "key_value": "error_code"
                            },
                            {
                                "title": "Error Description",
                                "key_value": "error_description"
                            }
                        ],
                        "related_columns": [],
                        "specific_project": "0"
                    },
                    "validation": {
                        "name": "",
                        "content": "",
                        "arguments": {}
                    },
                    "rule_transform": {
                        "name": "",
                        "arguments": {},
                        "content": ""
                    },
                    "lookup_broadcast": [],
                    "value_broadcast": "",
                    "argument_details": [],
                    "project_id": "5d4197bfb4dbc70015b867f4",
                    "created_date": "2019-08-01T04:33:07.813Z",
                    "last_modified": "2019-08-01T04:33:07.813Z",
                    "field_setting": {
                        "field_id": "5d426b83b4dbc70015b86812",
                        "visible": true,
                        "disable": false,
                        "double_typing": false,
                        "argument_details": [],
                        "position": {},
                        "position_percent": {
                            "x": null,
                            "y": null,
                            "w": null,
                            "h": null
                        }
                    },
                    "position": {},
                    "visible": true,
                    "disable": false,
                    "double_typing": false
                }
            ],
            "id": "5d426b83b4dbc70015b86818"
        }
    ]
}