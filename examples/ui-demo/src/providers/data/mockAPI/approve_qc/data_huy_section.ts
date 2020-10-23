
export const data_huy_section = () => {
    return [
        {
            "name": "Verify_Data",
            "layout_name": "Verify_Data",
            "index": 0,
            "layout_id": "5d426b83b4dbc70015b86817",
            "is_multiple": false,
            "position": {},
            "settings": {
                "is_multiple": false,
                "fieldId": "",
                "autoIncrement": "",
                "autoIncrementStart": "",
                "multiple": {
                    "record_no": "1",
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
                    "_id": "5d426b83b4dbc70015b86809",
                    "name": "documentName",
                    "field_display": "Document Name",
                    "default_value": "",
                    "control_type": "COMBOBOX",
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
                        "group_project": "ancestry",
                        "key_value": "data_value",
                        "locale": [],
                        "lookup_after_time": 1,
                        "lookup_field": "",
                        "name": "",
                        "param_set": "return []",
                        "result_view_config": [],
                        "related_columns": []
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
                    "argument_details": [
                        "GIẤY RA VIỆN"
                    ],
                    "project_id": "5d4197bfb4dbc70015b867f4",
                    "ocr_threshold": {
                        "confidence": "90",
                        "below": "highlight",
                        "above": "switch_disable"
                    },
                    "created_date": "2019-08-01T04:33:07.813Z",
                    "last_modified": "2020-02-29T07:16:25.832Z",
                    "field_setting": {
                        "field_id": "5d426b83b4dbc70015b86809",
                        "visible": true,
                        "disable": false,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
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
                    "_id": "5d426b83b4dbc70015b8680f",
                    "name": "hospitalName",
                    "field_display": "Hospital Name",
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
                        "key_value": "hosp_nm",
                        "locale": [
                            "096_190619_124_MVL_eClaim"
                        ],
                        "lookup_after_time": 1,
                        "lookup_field": "hospital",
                        "name": "lookup_MVL_hospital",
                        "param_set": "return [data.hospitalName];",
                        "result_view_config": [
                            {
                                "title": "HOSP CODE",
                                "key_value": "hosp_code"
                            },
                            {
                                "title": "HOSP NM",
                                "key_value": "hosp_nm"
                            },
                            {
                                "title": "PROVINCE CODE",
                                "key_value": "province_code"
                            },
                            {
                                "title": "PROVINCE NM",
                                "key_value": "province_nm"
                            }
                        ],
                        "related_columns": [
                            "hosp_code",
                            "province_code",
                            "province_nm"
                        ],
                        "specific_project": "0"
                    },
                    "validation": {
                        "name": "",
                        "content": "if(!value){\n    return[{\n        type : \"error\",\n        message: \"Không được nhập giá trị rỗng.\"\n    }]\n}",
                        "arguments": {}
                    },
                    "rule_transform": {
                        "name": "",
                        "arguments": {},
                        "content": ""
                    },
                    "lookup_broadcast": [
                        {
                            "column_broadcast": "hosp_code",
                            "field_broadcasted": "hospitalCode"
                        },
                        {
                            "column_broadcast": "province_nm",
                            "field_broadcasted": "hospitalProvince"
                        }
                    ],
                    "value_broadcast": "",
                    "argument_details": [],
                    "project_id": "5d4197bfb4dbc70015b867f4",
                    "ocr_threshold": {
                        "confidence": "84",
                        "below": "highlight",
                        "above": "switch_disable"
                    },
                    "created_date": "2019-08-01T04:33:07.813Z",
                    "last_modified": "2020-02-20T03:02:31.279Z",
                    "field_setting": {
                        "field_id": "5d426b83b4dbc70015b8680f",
                        "visible": true,
                        "disable": false,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
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
                    "_id": "5d426b83b4dbc70015b8680e",
                    "name": "hospitalCode",
                    "field_display": "Hospital Code",
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
                        "group_project": "ancestry",
                        "key_value": "data_value",
                        "locale": [],
                        "lookup_after_time": 1,
                        "lookup_field": "",
                        "name": "",
                        "param_set": "return []",
                        "result_view_config": [],
                        "related_columns": []
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
                    "ocr_threshold": {
                        "confidence": "84",
                        "below": "highlight",
                        "above": "switch_disable"
                    },
                    "created_date": "2019-08-01T04:33:07.813Z",
                    "last_modified": "2020-02-20T03:02:43.784Z",
                    "field_setting": {
                        "field_id": "5d426b83b4dbc70015b8680e",
                        "visible": true,
                        "disable": false,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
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
                    "_id": "5d426b83b4dbc70015b86810",
                    "name": "hospitalProvince",
                    "field_display": "Province of the hospital",
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
                        "key_value": "province_nm",
                        "locale": [
                            "096_190619_124_MVL_eClaim"
                        ],
                        "lookup_after_time": 1,
                        "lookup_field": "hospital",
                        "name": "lookup_MVL_hospital",
                        "param_set": "return [data.hospitalProvince];",
                        "result_view_config": [
                            {
                                "title": "HOSP CODE",
                                "key_value": "hosp_code"
                            },
                            {
                                "title": "HOSP NM",
                                "key_value": "hosp_nm"
                            },
                            {
                                "title": "PROVINCE CODE",
                                "key_value": "province_code"
                            },
                            {
                                "title": "PROVINCE NM",
                                "key_value": "province_nm"
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
                    "ocr_threshold": {
                        "confidence": "84",
                        "below": "highlight",
                        "above": "switch_disable"
                    },
                    "created_date": "2019-08-01T04:33:07.813Z",
                    "last_modified": "2020-02-20T03:02:56.174Z",
                    "field_setting": {
                        "field_id": "5d426b83b4dbc70015b86810",
                        "visible": true,
                        "disable": false,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
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
                    "_id": "5d426b83b4dbc70015b86804",
                    "name": "departmentName",
                    "field_display": "Department Name",
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
                        "key_value": "department_name",
                        "locale": [
                            "096_190619_124_MVL_eClaim"
                        ],
                        "lookup_after_time": 1,
                        "lookup_field": "department",
                        "name": "lookup_MVL_department",
                        "param_set": "return [data.departmentName]",
                        "result_view_config": [
                            {
                                "title": "Department Name",
                                "key_value": "department_name"
                            },
                            {
                                "title": "Department Type",
                                "key_value": "department_type"
                            }
                        ],
                        "related_columns": [
                            "department_type"
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
                        "content": "function removeSpace(input) {\r\n\r\n    if(value === \"\"){\r\n    return \"None\";\r\n}\r\n\r\n    input = input.trim();\r\n\r\n    return input;\r\n}\r\n\r\nreturn removeSpace(value);\r\n"
                    },
                    "lookup_broadcast": [
                        {
                            "column_broadcast": "department_type",
                            "field_broadcasted": "departmentType"
                        }
                    ],
                    "value_broadcast": "",
                    "argument_details": [],
                    "project_id": "5d4197bfb4dbc70015b867f4",
                    "ocr_threshold": {
                        "confidence": "90",
                        "below": "highlight",
                        "above": "switch_disable"
                    },
                    "created_date": "2019-08-01T04:33:07.813Z",
                    "last_modified": "2020-02-29T07:16:05.751Z",
                    "field_setting": {
                        "field_id": "5d426b83b4dbc70015b86804",
                        "visible": true,
                        "disable": false,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
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
                    "_id": "5d426b83b4dbc70015b86805",
                    "name": "departmentType",
                    "field_display": "Department Type",
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
                        "key_value": "department_type",
                        "locale": [
                            "096_190619_124_MVL_eClaim"
                        ],
                        "lookup_after_time": 1,
                        "lookup_field": "department",
                        "name": "lookup_MVL_department",
                        "param_set": "return [data.departmentType]",
                        "result_view_config": [
                            {
                                "title": "Department Name",
                                "key_value": "department_name"
                            },
                            {
                                "title": "Department Type",
                                "key_value": "department_type"
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
                        "content": "function removeSpace(input) {\r\n\r\n    if(value === \"\"){\r\n    return \"Western Medicine\";\r\n}\r\n\r\n    input = input.trim();\r\n\r\n    return input;\r\n}\r\n\r\nreturn removeSpace(value);\r\n"
                    },
                    "lookup_broadcast": [],
                    "value_broadcast": "",
                    "argument_details": [],
                    "project_id": "5d4197bfb4dbc70015b867f4",
                    "ocr_threshold": {
                        "confidence": "90",
                        "below": "highlight",
                        "above": "switch_disable"
                    },
                    "created_date": "2019-08-01T04:33:07.813Z",
                    "last_modified": "2020-02-20T03:03:26.346Z",
                    "field_setting": {
                        "field_id": "5d426b83b4dbc70015b86805",
                        "visible": true,
                        "disable": false,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
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
                    "_id": "5d426b83b4dbc70015b86811",
                    "name": "patientName",
                    "field_display": "Patient Name",
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
                        "group_project": "ancestry",
                        "key_value": "data_value",
                        "locale": [],
                        "lookup_after_time": 1,
                        "lookup_field": "",
                        "name": "",
                        "param_set": "return []",
                        "result_view_config": [],
                        "related_columns": []
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
                    "ocr_threshold": {
                        "confidence": "90",
                        "below": "highlight",
                        "above": "switch_disable"
                    },
                    "created_date": "2019-08-01T04:33:07.813Z",
                    "last_modified": "2020-02-20T03:00:52.679Z",
                    "field_setting": {
                        "field_id": "5d426b83b4dbc70015b86811",
                        "visible": true,
                        "disable": false,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
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
                    "_id": "5d426b83b4dbc70015b867ff",
                    "name": "ageOrDOB",
                    "field_display": "Age or DOB",
                    "default_value": "",
                    "control_type": "TEXTFIELD",
                    "tooltip": "",
                    "is_list": false,
                    "counted_character": true,
                    "pattern": {
                        "name": "",
                        "arguments": {},
                        "content": "^(\\s*|[0-9]{1,2})$",
                        "description": "Nhập 2 ký tự số"
                    },
                    "lookup_source": {
                        "allow_multiple": false,
                        "characters_trigger_lookup": 1,
                        "group_project": "ancestry",
                        "key_value": "data_value",
                        "locale": [],
                        "lookup_after_time": 1,
                        "lookup_field": "",
                        "name": "",
                        "param_set": "return []",
                        "result_view_config": [],
                        "related_columns": []
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
                    "handle_broadcast": {
                        "content": "const eventDate = record.eventDate\r\nif(!record.birthDate.length){\r\n    if(author ==\"eventDate\"){\r\n        try {\r\n            if(record.birthDate){\r\n                if(value.length>=4){\r\n                    return  value.substring(value.length-4,value.length-1) - record.birthDate\r\n                }     \r\n            }\r\n        } catch(e){\r\n            \r\n        }   \r\n    }else{\r\n        if(record.birthDate){\r\n            if(eventDate.length>=4){\r\n                return  eventDate.substring(eventDate.length-4,eventDate.length-1) - value\r\n            } \r\n        }\r\n    }\r\n}\r\nreturn currentValue;"
                    },
                    "fields_change_broadcast": [],
                    "ocr_threshold": {
                        "confidence": "80",
                        "below": "highlight",
                        "above": "switch_disable"
                    },
                    "created_date": "2019-08-01T04:33:07.813Z",
                    "last_modified": "2020-02-20T03:01:16.116Z",
                    "field_setting": {
                        "field_id": "5d426b83b4dbc70015b867ff",
                        "visible": true,
                        "disable": false,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
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
                    "_id": "5d426b83b4dbc70015b86800",
                    "name": "birthDate",
                    "field_display": "Year of Birth",
                    "default_value": "",
                    "control_type": "TEXTFIELD",
                    "tooltip": "",
                    "is_list": false,
                    "counted_character": true,
                    "pattern": {
                        "name": "",
                        "arguments": {},
                        "content": "^(\\s*|190[0-9]|191[0-9]|192[0-9]|193[0-9]|194[0-9]|195[0-9]|196[0-9]|197[0-9]|198[0-9]|199[0-9]|200[0-9]|201[0-9])$",
                        "description": "Chỉ được phép nhập từ năm 1900 đến năm hiện tại"
                    },
                    "lookup_source": {
                        "allow_multiple": false,
                        "characters_trigger_lookup": 1,
                        "group_project": "ancestry",
                        "key_value": "data_value",
                        "locale": [],
                        "lookup_after_time": 1,
                        "lookup_field": "",
                        "name": "",
                        "param_set": "return []",
                        "result_view_config": [],
                        "related_columns": []
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
                    "handle_broadcast": {
                        "content": ""
                    },
                    "fields_change_broadcast": [],
                    "ocr_threshold": {
                        "confidence": "80",
                        "below": "highlight",
                        "above": "switch_disable"
                    },
                    "created_date": "2019-08-01T04:33:07.813Z",
                    "last_modified": "2020-02-24T10:56:07.384Z",
                    "field_setting": {
                        "field_id": "5d426b83b4dbc70015b86800",
                        "visible": true,
                        "disable": false,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
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
                    "_id": "5d426b83b4dbc70015b8680d",
                    "name": "gender",
                    "field_display": "Gender",
                    "default_value": "",
                    "control_type": "COMBOBOX",
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
                        "group_project": "ancestry",
                        "key_value": "data_value",
                        "locale": [],
                        "lookup_after_time": 1,
                        "lookup_field": "",
                        "name": "",
                        "param_set": "return []",
                        "result_view_config": [],
                        "related_columns": []
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
                    "argument_details": [
                        "Nam",
                        "Nữ"
                    ],
                    "project_id": "5d4197bfb4dbc70015b867f4",
                    "ocr_threshold": {
                        "confidence": "90",
                        "below": "highlight",
                        "above": "switch_disable"
                    },
                    "created_date": "2019-08-01T04:33:07.813Z",
                    "last_modified": "2020-02-20T03:01:24.627Z",
                    "field_setting": {
                        "field_id": "5d426b83b4dbc70015b8680d",
                        "visible": true,
                        "disable": false,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
                        "argument_details": [
                            {
                                "value": "Nam"
                            },
                            {
                                "value": "Nu"
                            },
                            {
                                "value": "Other"
                            }
                        ],
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
                    "_id": "5d426b83b4dbc70015b8680b",
                    "name": "eventDate",
                    "field_display": "Admission Date",
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
                        "group_project": "ancestry",
                        "key_value": "data_value",
                        "locale": [],
                        "lookup_after_time": 1,
                        "lookup_field": "",
                        "name": "",
                        "param_set": "return []",
                        "result_view_config": [],
                        "related_columns": []
                    },
                    "validation": {
                        "name": "",
                        "content": "if(!value){\r\n    return [\r\n        {\r\n            type : \"error\",\r\n            message: \"Không được trống Discharge Date\"\r\n        }]\r\n}\r\n\r\n\r\nfunction chkDate(date){\r\n\tvar dd = date.substring(0,2);\r\n\tvar mm = date.substring(2,4);\r\n\tvar yy = date.substring(4,6);\r\n\tvar tmpDate = new Date();\r\n\tvar y = tmpDate.getFullYear()+\"\";\r\n\ty = y.substring(2,4)*1 + 1;\r\n\r\n\t//Gan gia tri nam la 19YY neu YY > nam hien tai + 1\r\n\t//Gan gia tri nam la 20YY neu YY <= nam hien tai + 1\r\n\tif(yy*1>y){ yy = 19+yy;\r\n\t}else {yy = 20+yy;}\r\n\r\n\treturn dd+mm+yy;\t\r\n}\r\n\r\nfunction formatdate(ngay_hieu_luc_in78){\r\nvar fvalue = ngay_hieu_luc_in78;\r\n\tvar regex = /^(?:(?:31(|\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(|\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(|\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(|\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$/\r\n\tvar regex1 = /^\\d{6}$/;\r\n\tvar regex2 = /^(\\s*|[0-9\\.\\/\\-]+)$/ ;\r\n\tvar date;\r\nif(fvalue === \"\") return ;\r\n\tif(regex1.test(fvalue))\r\n\treturn ;\r\n\tif(regex2.test(fvalue)){\r\n\t\r\n\tif(!regex.test(fvalue)){\r\n\t\treturn [{type:\"warning\",message:\"Ngày Tháng Năm không phù hợp, vui lòng kiểm tra lại.\"}]\r\n\t}\r\n}else{\r\n    return [{type:\"error\",message:\"Không đúng định dạng ddmmyyyy\"}]\r\n}\r\nfvalue = fvalue.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'');\r\nif(fvalue.length === 6){\r\n\tfvalue = chkDate(fvalue);\r\n}\r\nvar dd = fvalue.substring(0, 2);\r\nvar mm = fvalue.substring(2, 4);\r\nvar yy = fvalue.substring(4, 8);\r\nvar tmpDate = new Date();\r\nvar d = tmpDate.getDate();\r\nvar m = tmpDate.getMonth();\r\nvar y = tmpDate.getFullYear();\r\nvar inputDate = new Date(yy, mm - 1, dd);\r\nvar curDate = new Date(y, m, d);\r\nvar oldDate= new Date(y - 2, m, d);\r\n\r\n\r\n//So sanh ngay nhap voi ngay hien tai\r\nif (inputDate < curDate && inputDate < oldDate) {\r\n return [{type:\"error\", message:\"Năm nhập khác năm 2018,2019 hoặc 2020\"}]\r\n}\r\nif (inputDate > curDate) {\r\n return [{type:\"warning\", message:\"Ngày tháng năm nhập lớn hơn ngày hiện tại\"}]\r\n}\r\n\r\n\r\n}\r\n\r\nreturn formatdate(value);",
                        "arguments": {}
                    },
                    "rule_transform": {
                        "name": "Date_transform",
                        "arguments": {},
                        "content": "    var regex1 = /^\\d{6}$/;\n    \nfunction removeSpace(input){\n    var regex = /^(?:(?:31(|\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(|\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(|\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(|\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$/\n\tif(regex.test(input)){\n\t\tinput = input.replace(/([0-9]{2})([0-9]{2})([0-9]{4})/,'$1/$2/$3') + '';\n\t}\n\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\n\n\tinput = input.trim();\n\n\treturn input;\n}\nfunction chkDate(date){\n\tvar dd = date.substring(0,2);\n\tvar mm = date.substring(2,4);\n\tvar yy = date.substring(4,6);\n\tvar tmpDate = new Date();\n\tvar y = tmpDate.getFullYear()+\"\";\n\ty = y.substring(2,4)*1 + 1;\n\n\t//Gan gia tri nam la 19YY neu YY > nam hien tai + 1\n\t//Gan gia tri nam la 20YY neu YY <= nam hien tai + 1\n\tif(yy*1>y){ yy = 19+yy;\n\t}else {yy = 20+yy;}\n\n\treturn dd+mm+yy;\t\n}\nvalue = value.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'');\nif(value.length === 6){\n    return chkDate(value)}\nreturn removeSpace(value);",
                        "created_date": "2019-11-28T06:52:45.384Z",
                        "last_modified": "2019-11-28T06:54:20.188Z",
                        "id": "5ddf6ebddedee200147c15f8"
                    },
                    "lookup_broadcast": [],
                    "value_broadcast": "",
                    "argument_details": [],
                    "project_id": "5d4197bfb4dbc70015b867f4",
                    "fields_change_broadcast": [],
                    "ocr_threshold": {
                        "confidence": "91",
                        "below": "highlight",
                        "above": "switch_disable"
                    },
                    "created_date": "2019-08-01T04:33:07.813Z",
                    "last_modified": "2020-03-04T10:13:58.686Z",
                    "field_setting": {
                        "field_id": "5d426b83b4dbc70015b8680b",
                        "visible": true,
                        "disable": false,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
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
                    "_id": "5d426b83b4dbc70015b8680c",
                    "name": "eventEndDate",
                    "field_display": "Discharge Date",
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
                        "group_project": "ancestry",
                        "key_value": "data_value",
                        "locale": [],
                        "lookup_after_time": 1,
                        "lookup_field": "",
                        "name": "",
                        "param_set": "return []",
                        "result_view_config": [],
                        "related_columns": []
                    },
                    "validation": {
                        "name": "",
                        "content": "if(!value){\r\n    return [\r\n        {\r\n            type : \"error\",\r\n            message: \"Không được trống Discharge Date\"\r\n        }]\r\n}\r\n\r\n\r\nfunction chkDate(date){\r\n\tvar dd = date.substring(0,2);\r\n\tvar mm = date.substring(2,4);\r\n\tvar yy = date.substring(4,6);\r\n\tvar tmpDate = new Date();\r\n\tvar y = tmpDate.getFullYear()+\"\";\r\n\ty = y.substring(2,4)*1 + 1;\r\n\r\n\t//Gan gia tri nam la 19YY neu YY > nam hien tai + 1\r\n\t//Gan gia tri nam la 20YY neu YY <= nam hien tai + 1\r\n\tif(yy*1>y){ yy = 19+yy;\r\n\t}else {yy = 20+yy;}\r\n\r\n\treturn dd+mm+yy;\t\r\n}\r\n\r\nfunction formatdate(ngay_hieu_luc_in78){\r\nvar fvalue = ngay_hieu_luc_in78;\r\n\tvar regex = /^(?:(?:31(|\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(|\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(|\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(|\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$/\r\n\tvar regex1 = /^\\d{6}$/;\r\n\tvar regex2 = /^(\\s*|[0-9\\.\\/\\-]+)$/ ;\r\n\tvar date;\r\nif(fvalue === \"\") return ;\r\n\tif(regex1.test(fvalue))\r\n\treturn ;\r\n\tif(regex2.test(fvalue)){\r\n\t\r\n\tif(!regex.test(fvalue)){\r\n\t\treturn [{type:\"warning\",message:\"Ngày Tháng Năm không phù hợp, vui lòng kiểm tra lại.\"}]\r\n\t}\r\n}else{\r\n    return [{type:\"error\",message:\"Không đúng định dạng ddmmyyyy\"}]\r\n}\r\nfvalue = fvalue.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'');\r\nif(fvalue.length === 6){\r\n\tfvalue = chkDate(fvalue);\r\n}\r\nvar dd = fvalue.substring(0, 2);\r\nvar mm = fvalue.substring(2, 4);\r\nvar yy = fvalue.substring(4, 8);\r\nvar tmpDate = new Date();\r\nvar d = tmpDate.getDate();\r\nvar m = tmpDate.getMonth();\r\nvar y = tmpDate.getFullYear();\r\nvar inputDate = new Date(yy, mm - 1, dd);\r\nvar curDate = new Date(y, m, d);\r\nvar oldDate= new Date(y - 2, m, d);\r\n\r\n\r\n//So sanh ngay nhap voi ngay hien tai\r\nif (inputDate < curDate && inputDate < oldDate) {\r\n return [{type:\"error\", message:\"Năm nhập khác năm 2018,2019 hoặc 2020\"}]\r\n}\r\nif (inputDate > curDate) {\r\n return [{type:\"warning\", message:\"Ngày tháng năm nhập lớn hơn ngày hiện tại\"}]\r\n}\r\n\r\n\r\n}\r\n\r\nreturn formatdate(value);",
                        "arguments": {}
                    },
                    "rule_transform": {
                        "name": "",
                        "arguments": {},
                        "content": "    var regex1 = /^\\d{6}$/;\n    \nfunction removeSpace(input){\n    var regex = /^(?:(?:31(|\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(|\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(|\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(|\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$/\n\tif(regex.test(input)){\n\t\tinput = input.replace(/([0-9]{2})([0-9]{2})([0-9]{4})/,'$1/$2/$3') + '';\n\t}\n\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\n\n\tinput = input.trim();\n\n\treturn input;\n}\nfunction chkDate(date){\n\tvar dd = date.substring(0,2);\n\tvar mm = date.substring(2,4);\n\tvar yy = date.substring(4,6);\n\tvar tmpDate = new Date();\n\tvar y = tmpDate.getFullYear()+\"\";\n\ty = y.substring(2,4)*1 + 1;\n\n\t//Gan gia tri nam la 19YY neu YY > nam hien tai + 1\n\t//Gan gia tri nam la 20YY neu YY <= nam hien tai + 1\n\tif(yy*1>y){ yy = 19+yy;\n\t}else {yy = 20+yy;}\n\n\treturn dd+mm+yy;\t\n}\nvalue = value.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'');\nif(value.length === 6){\n    return chkDate(value)}\nreturn removeSpace(value);"
                    },
                    "lookup_broadcast": [],
                    "value_broadcast": "",
                    "argument_details": [],
                    "project_id": "5d4197bfb4dbc70015b867f4",
                    "ocr_threshold": {
                        "confidence": "91",
                        "below": "highlight",
                        "above": "switch_disable"
                    },
                    "created_date": "2019-08-01T04:33:07.813Z",
                    "last_modified": "2020-03-04T10:13:45.787Z",
                    "field_setting": {
                        "field_id": "5d426b83b4dbc70015b8680c",
                        "visible": true,
                        "disable": false,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
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
                    "_id": "5d426b83b4dbc70015b86807",
                    "name": "diagnosisDescription",
                    "field_display": "Diagnosis Description",
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
                        "allow_multiple": true,
                        "characters_trigger_lookup": 1,
                        "group_project": "production",
                        "key_value": "diagnosis_name_vn",
                        "locale": [
                            "096_190619_124_MVL_eClaim"
                        ],
                        "lookup_after_time": 1,
                        "lookup_field": "diagnosis_code",
                        "name": "lookup_MVL_diagnosis",
                        "param_set": "let { cursorIndex, valFull, indexVal } =  libs.getValueCurrent(value, indexCursor, delimiter); return [valFull.substring(0, cursorIndex)];",
                        "result_view_config": [
                            {
                                "title": "Diagnosis Code",
                                "key_value": "diagnosis_code"
                            },
                            {
                                "title": "Diagnosis Group",
                                "key_value": "diagnosis_group"
                            },
                            {
                                "title": "Diagnosis Name (VN)",
                                "key_value": "diagnosis_name_vn"
                            },
                            {
                                "title": "Diagnosis Name (EN)",
                                "key_value": "diagnosis_name_en"
                            }
                        ],
                        "related_columns": [
                            "diagnosis_code"
                        ],
                        "specific_project": "0",
                        "multiple_delimiter": ";"
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
                            "column_broadcast": "diagnosis_code",
                            "field_broadcasted": "diagnosisCode"
                        }
                    ],
                    "value_broadcast": "",
                    "argument_details": [],
                    "project_id": "5d4197bfb4dbc70015b867f4",
                    "ocr_threshold": {
                        "confidence": "90",
                        "below": "highlight",
                        "above": "switch_disable"
                    },
                    "created_date": "2019-08-01T04:33:07.813Z",
                    "last_modified": "2020-02-20T03:01:57.589Z",
                    "field_setting": {
                        "field_id": "5d426b83b4dbc70015b86807",
                        "visible": true,
                        "disable": false,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
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
                    "_id": "5d426b83b4dbc70015b86806",
                    "name": "diagnosisCode",
                    "field_display": "Diagnosis Code",
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
                        "key_value": "diagnosis_code",
                        "locale": [
                            "096_190619_124_MVL_eClaim"
                        ],
                        "lookup_after_time": 1,
                        "lookup_field": "diagnosis_code",
                        "name": "lookup_MVL_diagnosis",
                        "param_set": "let { cursorIndex, valFull, indexVal } =  libs.getValueCurrent(value, indexCursor, delimiter); return [valFull.substring(0, cursorIndex)];",
                        "result_view_config": [
                            {
                                "title": "Diagnosis Code",
                                "key_value": "diagnosis_code"
                            },
                            {
                                "title": "Diagnosis Group",
                                "key_value": "diagnosis_group"
                            },
                            {
                                "title": "Diagnosis Name (VN)",
                                "key_value": "diagnosis_name_vn"
                            },
                            {
                                "title": "Standard",
                                "key_value": "standard"
                            }
                        ],
                        "related_columns": [],
                        "specific_project": "0",
                        "lookup_space_after_choosen": false,
                        "multiple_delimiter": ";"
                    },
                    "validation": {
                        "name": "",
                        "content": "if(!value){\r\n    return [{\r\n            type : \"error\",\r\n            message: \"Không được trống Diagnosis Code\"\r\n            }]\r\n}",
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
                    "handle_broadcast": {
                        "content": "const delimiter =';';\n// console.log(currentValue, value, author, indexVal, field, record);\nlet tmp = currentValue.split(delimiter)\ntmp[indexVal] = ' ' + value + ' ';\nreturn tmp.join(delimiter)"
                    },
                    "ocr_threshold": {
                        "confidence": "91",
                        "below": "highlight",
                        "above": "switch_disable"
                    },
                    "created_date": "2019-08-01T04:33:07.813Z",
                    "last_modified": "2020-02-20T03:02:20.757Z",
                    "field_setting": {
                        "field_id": "5d426b83b4dbc70015b86806",
                        "visible": true,
                        "disable": false,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
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
                    "_id": "5d426b83b4dbc70015b86814",
                    "name": "treatmentDescription",
                    "field_display": "Treatment Description",
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
                        "key_value": "treatment_name",
                        "locale": [
                            "096_190619_124_MVL_eClaim"
                        ],
                        "lookup_after_time": 1,
                        "lookup_field": "treatment",
                        "name": "lookup_MVL_treatment",
                        "param_set": "return [data.treatmentDescription]",
                        "result_view_config": [
                            {
                                "title": "Treatment Description",
                                "key_value": "treatment_name"
                            },
                            {
                                "title": "Treatment Type",
                                "key_value": "treatment_type"
                            }
                        ],
                        "related_columns": [
                            "treatment_type"
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
                        "content": "function removeSpace(input) {\r\n\r\n    if(value === \"\"){\r\n    return \"None\";\r\n}\r\n\r\n    input = input.trim();\r\n\r\n    return input;\r\n}\r\n\r\nreturn removeSpace(value);\r\n"
                    },
                    "lookup_broadcast": [
                        {
                            "column_broadcast": "treatment_type",
                            "field_broadcasted": "treatmentType"
                        }
                    ],
                    "value_broadcast": "",
                    "argument_details": [],
                    "project_id": "5d4197bfb4dbc70015b867f4",
                    "ocr_threshold": {
                        "confidence": "90",
                        "below": "highlight",
                        "above": "switch_disable"
                    },
                    "created_date": "2019-08-01T04:33:07.813Z",
                    "last_modified": "2020-02-20T03:03:38.307Z",
                    "field_setting": {
                        "field_id": "5d426b83b4dbc70015b86814",
                        "visible": true,
                        "disable": false,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
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
                    "_id": "5d426b83b4dbc70015b86815",
                    "name": "treatmentType",
                    "field_display": "Treatment Type",
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
                        "key_value": "treatment_type",
                        "locale": [
                            "096_190619_124_MVL_eClaim"
                        ],
                        "lookup_after_time": 1,
                        "lookup_field": "treatment",
                        "name": "lookup_MVL_treatment",
                        "param_set": "return [data.treatmentType]",
                        "result_view_config": [
                            {
                                "title": "Treatment Name",
                                "key_value": "treatment_name"
                            },
                            {
                                "title": "Treatment Type",
                                "key_value": "treatment_type"
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
                        "content": "function removeSpace(input) {\r\n\r\n    if(value === \"\" || value ===\"western\"){\r\n    return \"Western\";\r\n}\r\n\r\n    input = input.trim();\r\n\r\n    return input;\r\n}\r\n\r\nreturn removeSpace(value);\r\n"
                    },
                    "lookup_broadcast": [],
                    "value_broadcast": "",
                    "argument_details": [],
                    "project_id": "5d4197bfb4dbc70015b867f4",
                    "ocr_threshold": {
                        "confidence": "80",
                        "below": "highlight",
                        "above": "switch_disable"
                    },
                    "created_date": "2019-08-01T04:33:07.813Z",
                    "last_modified": "2020-02-20T03:03:46.548Z",
                    "field_setting": {
                        "field_id": "5d426b83b4dbc70015b86815",
                        "visible": true,
                        "disable": false,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
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
                    "_id": "5d426b83b4dbc70015b867fe",
                    "name": "IsStamped",
                    "field_display": "Stamp Hospital",
                    "default_value": "",
                    "control_type": "COMBOBOX",
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
                        "group_project": "ancestry",
                        "key_value": "data_value",
                        "locale": [],
                        "lookup_after_time": 1,
                        "lookup_field": "",
                        "name": "",
                        "param_set": "return []",
                        "result_view_config": [],
                        "related_columns": []
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
                    "argument_details": [
                        "Yes",
                        "No"
                    ],
                    "project_id": "5d4197bfb4dbc70015b867f4",
                    "ocr_threshold": {
                        "confidence": "90",
                        "below": "highlight",
                        "above": "switch_disable"
                    },
                    "created_date": "2019-08-01T04:33:07.813Z",
                    "last_modified": "2020-02-20T03:03:55.319Z",
                    "field_setting": {
                        "field_id": "5d426b83b4dbc70015b867fe",
                        "visible": true,
                        "disable": false,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
                        "argument_details": [
                            {
                                "value": "Yes"
                            },
                            {
                                "value": "No"
                            }
                        ],
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
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
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
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
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
            "id": "5d426b83b4dbc70015b86819"
        }
    ]
    return [
        {
            "name": "Invoice",
            "layout_name": "Invoice",
            "index": 0,
            "layout_id": "5d3ffc4f52bead001e91697b",
            "is_multiple": false,
            "position": {},
            "settings": {
                "is_multiple": false,
                "fieldId": "",
                "autoIncrement": "",
                "autoIncrementStart": ""
            },
            "layout_validation": null,
            "validation": {
                "name": "",
                "content": "var debitor_name = getData('debitor_name');\r\nvar debitor_nr = getData('debitor_nr');\r\nvar netto = getData('netto');\r\nvar brutto = getData('brutto');\r\n\r\nfunction checkEqual1(debitor_name = \"\", debitor_nr = \"\"){\r\nconsole.log(debitor_name,debitor_nr);\r\n\t if((!!debitor_name && !!debitor_nr) || (!debitor_name && !debitor_nr)){\r\n\t\treturn \r\n\t}\r\n\t\treturn [{type: \"error\", message : \"Field Debitor Name hoặc Debitor Nr. Rỗng. Kiểm tra lại!\"}]\r\n}\r\n\r\nfunction getData(fieldName){\r\n   try {\r\n      return value[0][fieldName].text\r\n   } catch (error) {\r\n      return '';\r\n   }\r\n}\r\n\r\n// return [{type: \"error\", message : \"Field Netto hoặc Brutto Rỗng. Kiểm tra lại!\"}]\r\n\r\nvar err1= checkEqual1(debitor_name, debitor_nr);\r\n if(err1){\r\n     return err1;\r\n }\r\nfunction checkEqual2(netto = \"\", brutto = \"\"){\r\n\tif((!!netto && !!brutto) || (!netto && !brutto)){\r\n\treturn;\r\n\t}else{\r\n\t\treturn [{type: \"error\", message : \"Field Netto hoặc Brutto Rỗng. Kiểm tra lại!\"}]\r\n\t\t}\r\n}\r\n\r\nfunction getData(fieldName){\r\n   try {\r\n      return value[0][fieldName].text\r\n   } catch (error) {\r\n      return '';\r\n   }\r\n}\r\n\r\nreturn checkEqual2(netto, brutto);",
                "arguments": ""
            },
            "position_percent": {
                "x": null,
                "y": null,
                "w": null,
                "h": null
            },
            "fields": [
                {
                    "_id": "5d42b29a16aec5001f600e64",
                    "name": "reason",
                    "field_display": "Reason",
                    "default_value": "",
                    "control_type": "TEXTFIELD",
                    "tooltip": "",
                    "is_list": false,
                    "counted_character": false,
                    "pattern": {
                        "name": "",
                        "arguments": {},
                        "content": ""
                    },
                    "lookup_source": {
                        "allow_multiple": false,
                        "characters_trigger_lookup": 1,
                        "group_project": "ancestry",
                        "key_value": "data_value",
                        "locale": [],
                        "lookup_after_time": 1,
                        "lookup_field": "",
                        "name": "",
                        "param_set": "return []",
                        "result_view_config": [],
                        "related_columns": []
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
                    "project_id": "5d3ffc3a52bead001e91697a",
                    "created_date": "2019-08-01T09:36:26.559Z",
                    "last_modified": "2019-08-01T09:36:26.559Z",
                    "field_setting": {
                        "field_id": "5d42b29a16aec5001f600e64",
                        "visible": true,
                        "disable": true,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
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
                    "disable": true,
                    "double_typing": false
                },
                {
                    "_id": "5d3ffc4f52bead001e916980",
                    "name": "debitor_name",
                    "field_display": "Debitor Name",
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
                        "group_project": "",
                        "key_value": "debitor_name",
                        "locale": [],
                        "lookup_after_time": 1,
                        "lookup_field": "",
                        "name": "",
                        "param_set": "",
                        "result_view_config": [],
                        "related_columns": [],
                        "specific_project": "0"
                    },
                    "validation": {
                        "name": "",
                        "content": "var regex1 = /[\\w]/g\n\nif(regex1.test(value) && (value.includes(';')) || !regex1.test(value) && (value.includes(';'))){\n    \n    return [{type : \"error\" , message : \"Không được nhập dấu ; \"}]\n}\n\nif (!value){\n    return [{type: \"warning\" , message : \"Field Debitor Name Trống, vui lòng kiểm tra lại\"}]\n}\n\n// return checkError(value);\nif (value){\nasync function checkValidation(value) {\n        let dataLookup =  await fetchJSON(`https://lookups.digi-texx.vn/lookups/production/040_170516_002_505273/0/debitor_name/[%22${value}%22,%22${value}%22]`);\n        let _value =value.toLowerCase(); \n        if (!Array.isArray(dataLookup.json_single)||dataLookup.json_single.map(item => item.debitor_name.toLowerCase()).findIndex(item => item === _value) === -1) {\n                        return [{\n                          type: \"error\",\n                          message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\n                        }]\n                     }\n        // if(value.toLowerCase().includes('nhhien'))             \n        //              return[{ \n        //                   type: 'warning',\n        //                   message: `Lookup warning value:${value}`}];\n}\nreturn await checkValidation(value);\n}",
                        "arguments": {}
                    },
                    "rule_transform": {
                        "name": "",
                        "arguments": {},
                        "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);"
                    },
                    "lookup_broadcast": [],
                    "value_broadcast": "",
                    "argument_details": [],
                    "project_id": "5d3ffc3a52bead001e91697a",
                    "fields_change_broadcast": [
                        "debitor_nr"
                    ],
                    "created_date": "2019-07-30T08:14:07.247Z",
                    "last_modified": "2019-08-01T09:35:00.675Z",
                    "field_setting": {
                        "field_id": "5d3ffc4f52bead001e916980",
                        "visible": true,
                        "disable": false,
                        "dynamic_by_field": null,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
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
                    "_id": "5d3ffc4f52bead001e916981",
                    "name": "debitor_nr",
                    "field_display": "Debitor Nr.",
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
                        "group_project": "ancestry",
                        "key_value": "data_value",
                        "locale": [],
                        "lookup_after_time": 1,
                        "lookup_field": "",
                        "name": "",
                        "param_set": "return []",
                        "result_view_config": [],
                        "related_columns": []
                    },
                    "validation": {
                        "name": "",
                        "content": "var regex1 = /[\\w]/g\n\nif(regex1.test(value) && (value.includes(';')) || !regex1.test(value) && (value.includes(';'))){\n    \n    return [{type : \"error\" , message : \"Không được nhập dấu ; \"}]\n}",
                        "arguments": {}
                    },
                    "rule_transform": {
                        "name": "",
                        "arguments": {},
                        "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);"
                    },
                    "lookup_broadcast": [],
                    "value_broadcast": "",
                    "argument_details": [],
                    "project_id": "5d3ffc3a52bead001e91697a",
                    "handle_broadcast": {
                        "content": "const loadDataReferenct = async (value) => {\n   try {\n      let params = JSON.stringify([encodeURI(value)])\n      let _value = value.toLowerCase();\n      let _uri =`https://lookups.digi-texx.vn/lookups/production/040_170516_002_505273/0/debitor_name/${params}`\n      let dataRes = await fetchJSON(_uri)\n      if (Array.isArray(dataRes.json_single)) {\n         let item = dataRes.json_single.filter(item=>item.debitor_name.toLowerCase()===_value)[0]\n         if(item){\n            return item.debitor_code\n         }\n      }\n      if (Array.isArray(dataRes.json_multi)) {\n         let item = dataRes.json_multi.filter(item=>item.debitor_name.toLowerCase()===_value)[0]\n         if(item){\n            return item.debitor_code\n         }\n      }\n   } catch (error) {\n      return '';\n   }\n   return '';\n}\nreturn loadDataReferenct(value);"
                    },
                    "created_date": "2019-07-30T08:14:07.247Z",
                    "last_modified": "2019-08-01T09:35:24.972Z",
                    "field_setting": {
                        "field_id": "5d3ffc4f52bead001e916981",
                        "visible": true,
                        "disable": true,
                        "dynamic_by_field": null,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
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
                    "disable": true,
                    "double_typing": false
                },
                {
                    "_id": "5d3ffc4f52bead001e91697d",
                    "name": "auftragsbestell_nr",
                    "field_display": "Auftrags/Bestell Nr.",
                    "default_value": "",
                    "control_type": "TEXTFIELD",
                    "tooltip": "",
                    "is_list": false,
                    "counted_character": true,
                    "pattern": {
                        "name": "",
                        "arguments": {},
                        "content": "^(\\s*|(029)[0-9]{7}|(4)[0-9]{9}|(098)[0-9]{9})$",
                        "description": "Nhập 10 ký tự số nếu chuỗi bắt đầu bằng 029 hoặc 4 và 12 ký tự số nếu chuỗi bắt đầu 098"
                    },
                    "lookup_source": {
                        "allow_multiple": false,
                        "characters_trigger_lookup": 1,
                        "group_project": "production",
                        "key_value": "auftrags_nr",
                        "locale": [
                            "040_170516_002_505273"
                        ],
                        "lookup_after_time": 1,
                        "lookup_field": "auftrags_bestellnr",
                        "name": "lookup_saga_auftrags_bestellnr",
                        "param_set": "var value = data.auftragsbestell_nr.split(' '); return [value[value.length - 1],value.join(' ')]",
                        "result_view_config": [
                            {
                                "title": "Auftrags",
                                "key_value": "auftrags_nr"
                            },
                            {
                                "title": "UN",
                                "key_value": "un"
                            },
                            {
                                "title": "BST_WE",
                                "key_value": "bst_we"
                            },
                            {
                                "title": "ABTKST_WE",
                                "key_value": "abtkst_we"
                            },
                            {
                                "title": "BBN",
                                "key_value": "bbn"
                            },
                            {
                                "title": "Liefertermin",
                                "key_value": "liefertermin"
                            },
                            {
                                "title": "Name 1",
                                "key_value": "name_1"
                            },
                            {
                                "title": "Name 2",
                                "key_value": "name_2"
                            },
                            {
                                "title": "Land",
                                "key_value": "land"
                            },
                            {
                                "title": "PLZ",
                                "key_value": "plz"
                            },
                            {
                                "title": "ORT",
                                "key_value": "ort"
                            },
                            {
                                "title": "Strasse und Hausnr",
                                "key_value": "strasse_und_hausnr"
                            },
                            {
                                "title": "UIN",
                                "key_value": "uin"
                            },
                            {
                                "title": "IBAN",
                                "key_value": "iban"
                            }
                        ],
                        "related_columns": [
                            "name_1",
                            "bst_we",
                            "abtkst_we",
                            "liefertermin",
                            "bbn",
                            "land"
                        ],
                        "specific_project": "0"
                    },
                    "validation": {
                        "name": "",
                        "content": "var regex1 = /[\\w]/g\n\nif(regex1.test(value) && (value.includes(';')) || !regex1.test(value) && (value.includes(';'))){\n    \n    return [{type : \"error\" , message : \"Không được nhập dấu ; \"}]\n}\n\n\nif(value){\n\nasync function checkValidation(value) {\n        var dataLookup =  await fetchJSON(`https://lookups.digi-texx.vn/lookups/production/040_170516_002_505273/0/auftrags_bestellnr/[%22${value}%22,%22${value}%22]`);\n        if (!Array.isArray(dataLookup.json_single)||dataLookup.json_single.map(item => item.auftrags_nr).findIndex(item => item === value) === -1) {\n                return [{\n                          type: \"warning\",\n                          message: `Giá trị nhập: ${value} khác với lookup`\n                        }]\n                     }\n                     \n        // if(value.toLowerCase().includes('nhhien'))             \n        //              return[{ \n        //                   type: 'warning',\n        //                   message: `Lookup warning value:${value}`}];\n}\nreturn await checkValidation(value);\n}",
                        "arguments": {}
                    },
                    "rule_transform": {
                        "name": "",
                        "arguments": {},
                        "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);"
                    },
                    "lookup_broadcast": [
                        {
                            "column_broadcast": "bst_we",
                            "field_broadcasted": "betriebsstellen_bst"
                        },
                        {
                            "column_broadcast": "abtkst_we",
                            "field_broadcasted": "abteilung_abt"
                        },
                        {
                            "column_broadcast": "bbn",
                            "field_broadcasted": "lieferanten_nr_bbn"
                        },
                        {
                            "column_broadcast": "land",
                            "field_broadcasted": "land"
                        },
                        {
                            "column_broadcast": "name_1",
                            "field_broadcasted": "lieferanten_name"
                        }
                    ],
                    "value_broadcast": "",
                    "argument_details": [],
                    "project_id": "5d3ffc3a52bead001e91697a",
                    "created_date": "2019-07-30T08:14:07.247Z",
                    "last_modified": "2019-07-30T08:14:07.247Z",
                    "field_setting": {
                        "field_id": "5d3ffc4f52bead001e91697d",
                        "visible": true,
                        "disable": false,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
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
                    "_id": "5d3ffc4f52bead001e91697e",
                    "name": "betriebsstellen_bst",
                    "field_display": "Betriebsstellen (BST)",
                    "default_value": "",
                    "control_type": "TEXTFIELD",
                    "tooltip": "",
                    "is_list": false,
                    "counted_character": true,
                    "pattern": {
                        "name": "",
                        "arguments": {},
                        "content": "^(\\s*|[\\d]{0,4})$",
                        "description": "Chỉ nhập tối đa 4 ký tự số."
                    },
                    "lookup_source": {
                        "allow_multiple": false,
                        "characters_trigger_lookup": 1,
                        "group_project": "ancestry",
                        "key_value": "data_value",
                        "locale": [],
                        "lookup_after_time": 1,
                        "lookup_field": "",
                        "name": "",
                        "param_set": "return []",
                        "result_view_config": [],
                        "related_columns": []
                    },
                    "validation": {
                        "name": "",
                        "content": "var regex = /^[1-9]+$/;\nvalue = value.trim();\n\nif(!regex.test(value) && (value === \"0\" || value === \"00\" || value === \"000\" || value === \"0000\" || value === \"00000\" || value === \"000000\")){\n    \n    return [{type : \"error\" , message : \"Giá trị Betriebsstellen (BST) đang là 0\"}]\n}",
                        "arguments": {}
                    },
                    "rule_transform": {
                        "name": "",
                        "arguments": {},
                        "content": " function checkLowerCase(){\r\n     \r\n  var value_tmp = value.toLowerCase()\r\n    var regex = /^[1-9][0-9]$/\r\n    var mapping={\r\n        \"1\":\"001\",\r\n        \"2\":\"002\",\r\n        \"3\":\"003\",\r\n        \"4\":\"004\",\r\n        \"5\":\"005\",\r\n        \"6\":\"006\",\r\n        \"7\":\"007\",\r\n        \"8\":\"008\",\r\n        \"9\":\"009\"\r\n    }\r\n    var lookup = mapping[value_tmp]\r\n    if(lookup){\r\n        return lookup; \r\n    } else if(regex.test(value)){\r\n        return \"0\" + value;\r\n    }else {\r\n        return value;\r\n    }\r\n }\r\n\r\nfunction removeSpace(input){\r\n\r\n\tif(input.includes('6')){\r\n        input = input.replace(/[6]{3,10000000000}/g, '6666');\r\n\t}\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\t\tinput = input.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'-');\r\n\t\tinput = input.replace(/[\\s\\t]*(\\()[\\s\\t]*/g,' (');\r\n\t\tinput = input.replace(/[\\s\\t]*(\\))[\\s\\t]*/g,') ');\r\n\t\tinput = input.replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'/');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(checkLowerCase(value));"
                    },
                    "lookup_broadcast": [],
                    "value_broadcast": "",
                    "argument_details": [],
                    "project_id": "5d3ffc3a52bead001e91697a",
                    "created_date": "2019-07-30T08:14:07.247Z",
                    "last_modified": "2019-07-30T08:14:07.247Z",
                    "field_setting": {
                        "field_id": "5d3ffc4f52bead001e91697e",
                        "visible": true,
                        "disable": false,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
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
                    "_id": "5d3ffc4f52bead001e91697c",
                    "name": "abteilung_abt",
                    "field_display": "Abteilung (ABT)",
                    "default_value": "",
                    "control_type": "TEXTFIELD",
                    "tooltip": "",
                    "is_list": false,
                    "counted_character": true,
                    "pattern": {
                        "name": "",
                        "arguments": {},
                        "content": "^(\\s*|[\\d]{0,3})$",
                        "description": "Chỉ được phép nhập 3 ký tự số."
                    },
                    "lookup_source": {
                        "allow_multiple": false,
                        "characters_trigger_lookup": 1,
                        "group_project": "ancestry",
                        "key_value": "data_value",
                        "locale": [],
                        "lookup_after_time": 1,
                        "lookup_field": "",
                        "name": "",
                        "param_set": "return []",
                        "result_view_config": [],
                        "related_columns": [],
                        "lookup_space_after_choosen": false
                    },
                    "validation": {
                        "name": "",
                        "content": "function checkEqual(free_city_value =\"\" , city_value = \"\"){\r\n    free_city_value = free_city_value.trim();\r\n    city_value = city_value.trim();\r\n    var list_number = [\"197\",\"297\",\"097\",\"096\",\"098\",\"\"];\r\n    var debitor_nr = 054 ;\r\n    \r\n    if(city_value ===\"054\"){\r\n        if(list_number.includes(free_city_value) === true){\r\n            return;\r\n         }else{\r\n              return [{type : \"error\" , message : \"Debitor = 054, Abteilung chỉ cho phép giá trị = 197, 297, 097, 096, 098\"}];\r\n         }\r\n    }\r\n\r\n}\r\n\r\nreturn checkEqual(value, farm);\r\n",
                        "arguments": {
                            "farm": "debitor_nr"
                        }
                    },
                    "rule_transform": {
                        "name": "",
                        "arguments": {},
                        "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);"
                    },
                    "lookup_broadcast": [],
                    "value_broadcast": "",
                    "argument_details": [],
                    "project_id": "5d3ffc3a52bead001e91697a",
                    "created_date": "2019-07-30T08:14:07.246Z",
                    "last_modified": "2019-07-30T08:14:07.247Z",
                    "field_setting": {
                        "field_id": "5d3ffc4f52bead001e91697c",
                        "visible": true,
                        "disable": false,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
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
                    "_id": "5d3ffc4f52bead001e916987",
                    "name": "lieferanten_nr_bbn",
                    "field_display": "Lieferanten Nr. (BBN)",
                    "default_value": "",
                    "control_type": "TEXTFIELD",
                    "tooltip": "",
                    "is_list": false,
                    "counted_character": true,
                    "pattern": {
                        "name": "",
                        "arguments": {},
                        "content": "^(\\s*|[\\d]{0,8})$",
                        "description": "Chỉ được nhập 8 ký tự số"
                    },
                    "lookup_source": {
                        "allow_multiple": false,
                        "characters_trigger_lookup": 1,
                        "group_project": "production",
                        "key_value": "lieferanten",
                        "locale": [
                            "040_170516_002_505273"
                        ],
                        "lookup_after_time": 1,
                        "lookup_field": "lieferanten",
                        "name": "lookup_saga_lieferanten",
                        "param_set": "return [data.lieferanten_nr_bbn]",
                        "result_view_config": [
                            {
                                "title": "Lieferanten",
                                "key_value": "lieferanten"
                            },
                            {
                                "title": "Name 1",
                                "key_value": "name_1"
                            },
                            {
                                "title": "Name 2",
                                "key_value": "name_2"
                            },
                            {
                                "title": "ORT",
                                "key_value": "ort"
                            },
                            {
                                "title": "PLZ",
                                "key_value": "plz"
                            },
                            {
                                "title": "Strasse und Hausnr",
                                "key_value": "strasse_und_hausnr"
                            },
                            {
                                "title": "Land",
                                "key_value": "land"
                            },
                            {
                                "title": "UIN",
                                "key_value": "uin"
                            },
                            {
                                "title": "IBAN",
                                "key_value": "iban"
                            }
                        ],
                        "related_columns": [
                            "land",
                            "name_1",
                            "lieferanten"
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
                        "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);"
                    },
                    "lookup_broadcast": [
                        {
                            "column_broadcast": "land",
                            "field_broadcasted": "land"
                        },
                        {
                            "column_broadcast": "name_1",
                            "field_broadcasted": "lieferanten_name"
                        },
                        {
                            "column_broadcast": "lieferanten",
                            "field_broadcasted": "instructrion"
                        }
                    ],
                    "value_broadcast": "",
                    "argument_details": [],
                    "project_id": "5d3ffc3a52bead001e91697a",
                    "fields_change_broadcast": [
                        "instructrion"
                    ],
                    "created_date": "2019-07-30T08:14:07.247Z",
                    "last_modified": "2019-08-02T10:01:06.228Z",
                    "field_setting": {
                        "field_id": "5d3ffc4f52bead001e916987",
                        "visible": true,
                        "disable": false,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
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
                    "_id": "5d3ffc4f52bead001e916986",
                    "name": "lieferanten_name",
                    "field_display": "Lieferanten Name",
                    "default_value": "",
                    "control_type": "TEXTFIELD",
                    "tooltip": "",
                    "is_list": false,
                    "counted_character": true,
                    "pattern": {
                        "name": "",
                        "arguments": {},
                        "content": "^(\\s*|[\\W\\w]{0,35})$",
                        "description": "Không được nhập quá 35 ký tự."
                    },
                    "lookup_source": {
                        "allow_multiple": false,
                        "characters_trigger_lookup": 1,
                        "group_project": "ancestry",
                        "key_value": "data_value",
                        "locale": [],
                        "lookup_after_time": 1,
                        "lookup_field": "",
                        "name": "",
                        "param_set": "return []",
                        "result_view_config": [],
                        "related_columns": []
                    },
                    "validation": {
                        "name": "",
                        "content": "var regex1 = /[\\w]/g\r\n\r\nif(regex1.test(value) && (value.includes(';')) || !regex1.test(value) && (value.includes(';'))){\r\n    \r\n    return [{type : \"error\" , message : \"Không được nhập dấu ; \"}]\r\n}\r\n\r\n\r\nfunction checkEqual(free_city_value =\"\" , city_value = \"\"){\r\n    free_city_value = free_city_value.trim()\r\n    city_value = city_value.trim()\r\n    \r\n    if(!!free_city_value&&!city_value){\r\n        return [{type : \"error\" , message : \"Lieferanten Nr. (BBN) đang trống, vui lòng kiểm tra lại\"}];\r\n    }\r\n    if(!free_city_value&&!!city_value){\r\n        return [{type : \"error\" , message : \"Lieferanten Nr. (BBN) có dữ liệu, vui lòng kiểm tra lại\"}];\r\n    }\r\n}\r\n\r\nreturn checkEqual(value, farm);",
                        "arguments": {
                            "farm": "lieferanten_nr_bbn"
                        }
                    },
                    "rule_transform": {
                        "name": "",
                        "arguments": {},
                        "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);"
                    },
                    "lookup_broadcast": [],
                    "value_broadcast": "",
                    "argument_details": [],
                    "project_id": "5d3ffc3a52bead001e91697a",
                    "created_date": "2019-07-30T08:14:07.247Z",
                    "last_modified": "2019-07-30T08:14:07.247Z",
                    "field_setting": {
                        "field_id": "5d3ffc4f52bead001e916986",
                        "visible": true,
                        "disable": false,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
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
                    "_id": "5d3ffc4f52bead001e916985",
                    "name": "land",
                    "field_display": "Land",
                    "default_value": "",
                    "control_type": "TEXTFIELD",
                    "tooltip": "",
                    "is_list": false,
                    "counted_character": true,
                    "pattern": {
                        "name": "",
                        "arguments": {},
                        "content": "^(\\s*|[\\W\\w]{0,2})$",
                        "description": "Không được nhập quá 2 ký tự."
                    },
                    "lookup_source": {
                        "allow_multiple": false,
                        "characters_trigger_lookup": 1,
                        "group_project": "ancestry",
                        "key_value": "data_value",
                        "locale": [],
                        "lookup_after_time": 1,
                        "lookup_field": "",
                        "name": "",
                        "param_set": "return []",
                        "result_view_config": [],
                        "related_columns": []
                    },
                    "validation": {
                        "name": "",
                        "content": "var regex1 = /[\\w]/g\r\n\r\nif(regex1.test(value) && (value.includes(';')) || !regex1.test(value) && (value.includes(';'))){\r\n    \r\n    return [{type : \"error\" , message : \"Không được nhập dấu ; \"}]\r\n}\r\n\r\nfunction checkEqual(free_city_value =\"\" , city_value = \"\"){\r\n    free_city_value = free_city_value.trim()\r\n    city_value = city_value.trim()\r\n    \r\n    if(!!free_city_value&&!city_value){\r\n        return [{type : \"error\" , message : \"Lieferanten Nr. (BBN) đang trống, vui lòng kiểm tra lại\"}];\r\n    }\r\n    if(!free_city_value&&!!city_value){\r\n        return [{type : \"error\" , message : \"Lieferanten Nr. (BBN) có dữ liệu, vui lòng kiểm tra lại\"}];\r\n    }\r\n}\r\n\r\nreturn checkEqual(value, farm);",
                        "arguments": {
                            "farm": "lieferanten_nr_bbn"
                        }
                    },
                    "rule_transform": {
                        "name": "",
                        "arguments": {},
                        "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);"
                    },
                    "lookup_broadcast": [],
                    "value_broadcast": "",
                    "argument_details": [],
                    "project_id": "5d3ffc3a52bead001e91697a",
                    "created_date": "2019-07-30T08:14:07.247Z",
                    "last_modified": "2019-07-30T08:14:07.247Z",
                    "field_setting": {
                        "field_id": "5d3ffc4f52bead001e916985",
                        "visible": true,
                        "disable": false,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
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
                    "_id": "5d3ffc4f52bead001e916983",
                    "name": "instructrion",
                    "field_display": "Instruction",
                    "default_value": "",
                    "control_type": "TEXTFIELD",
                    "tooltip": "",
                    "is_list": false,
                    "counted_character": false,
                    "pattern": {
                        "name": "",
                        "arguments": {},
                        "content": ""
                    },
                    "lookup_source": {
                        "allow_multiple": false,
                        "characters_trigger_lookup": 1,
                        "group_project": "production",
                        "key_value": "instruction",
                        "locale": [
                            "040_170516_002_505273"
                        ],
                        "lookup_after_time": 1,
                        "lookup_field": "instruction",
                        "name": "lookup_saga_intruction",
                        "param_set": "var value = data.instructrion.split(' '); return [value[value.length - 1],value.join(' ')]",
                        "result_view_config": [
                            {
                                "title": "Instruction",
                                "key_value": "instruction"
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
                        "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);"
                    },
                    "lookup_broadcast": [],
                    "value_broadcast": "",
                    "argument_details": [],
                    "project_id": "5d3ffc3a52bead001e91697a",
                    "handle_broadcast": {
                        "content": "const loadDataReferenct = async (value) => {\n  try {\n      let params = JSON.stringify([encodeURI(value)])\n      let _uri =`https://lookups.digi-texx.vn/lookups/production/040_170516_002_505273/0/instruction/${params}`\n      let dataRes = await fetchJSON(_uri)\n      if (Array.isArray(dataRes.json_single)) {\n          return dataRes.json_single[0].instruction\n      }\n    //   if (Array.isArray(dataRes.json_multi)) {\n    //      let item = dataRes.json_multi.filter(item=>item.debitor_name===value)[0]\n    //      if(item){\n    //         return item.debitor_code\n    //      }\n    //   }\n  } catch (error) {\n      return '';\n  }\n  return '';\n}\nreturn loadDataReferenct(value);\n"
                    },
                    "created_date": "2019-07-30T08:14:07.247Z",
                    "last_modified": "2019-11-15T05:58:11.204Z",
                    "field_setting": {
                        "field_id": "5d3ffc4f52bead001e916983",
                        "visible": true,
                        "disable": true,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
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
                    "disable": true,
                    "double_typing": false
                },
                {
                    "_id": "5d3ffc4f52bead001e91698e",
                    "name": "rechnungtype",
                    "field_display": "RechnungType",
                    "default_value": "",
                    "control_type": "COMBOBOX",
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
                        "group_project": "ancestry",
                        "key_value": "data_value",
                        "locale": [],
                        "lookup_after_time": 1,
                        "lookup_field": "",
                        "name": "",
                        "param_set": "return []",
                        "result_view_config": [],
                        "related_columns": []
                    },
                    "validation": {
                        "name": "",
                        "content": "if(!value){\r\n    \r\n   return [{type : \"error\" , message : \"Rechnung Type không được rỗng\"}]\r\n\r\n}",
                        "arguments": {}
                    },
                    "rule_transform": {
                        "name": "",
                        "arguments": {},
                        "content": ""
                    },
                    "lookup_broadcast": [],
                    "value_broadcast": "",
                    "argument_details": [
                        "Rechnung",
                        "Gutschrift",
                        "Mahnung",
                        "Other"
                    ],
                    "project_id": "5d3ffc3a52bead001e91697a",
                    "created_date": "2019-07-30T08:14:07.247Z",
                    "last_modified": "2019-07-30T08:14:07.247Z",
                    "field_setting": {
                        "field_id": "5d3ffc4f52bead001e91698e",
                        "visible": true,
                        "disable": false,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
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
                    "_id": "5d3ffc4f52bead001e916989",
                    "name": "mahnstufe",
                    "field_display": "Mahnstufe",
                    "default_value": "",
                    "control_type": "TEXTFIELD",
                    "tooltip": "",
                    "is_list": false,
                    "counted_character": true,
                    "pattern": {
                        "name": "",
                        "arguments": {},
                        "content": "^(\\s*|[0-9]{0,2})$",
                        "description": "Chỉ nhập 2 ký tự số"
                    },
                    "lookup_source": {
                        "allow_multiple": false,
                        "characters_trigger_lookup": 1,
                        "group_project": "ancestry",
                        "key_value": "data_value",
                        "locale": [],
                        "lookup_after_time": 1,
                        "lookup_field": "",
                        "name": "",
                        "param_set": "return []",
                        "result_view_config": [],
                        "related_columns": []
                    },
                    "validation": {
                        "name": "",
                        "content": "var regex1 = /[\\w]/g\n\nif(regex1.test(value) && (value.includes(';')) || !regex1.test(value) && (value.includes(';'))){\n    \n    return [{type : \"error\" , message : \"Không được nhập dấu ; \"}]\n}",
                        "arguments": {}
                    },
                    "rule_transform": {
                        "name": "",
                        "arguments": {},
                        "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);"
                    },
                    "lookup_broadcast": [],
                    "value_broadcast": "",
                    "argument_details": [],
                    "project_id": "5d3ffc3a52bead001e91697a",
                    "created_date": "2019-07-30T08:14:07.247Z",
                    "last_modified": "2019-07-30T08:14:07.247Z",
                    "field_setting": {
                        "field_id": "5d3ffc4f52bead001e916989",
                        "visible": true,
                        "disable": false,
                        "dynamic_by_field": {
                            "effect": "visible",
                            "rule": "must_equal",
                            "section": "Invoice",
                            "field": "rechnungtype ",
                            "value": [
                                "Mahnung"
                            ],
                            "groups": [
                                [
                                    {
                                        "value": [
                                            "Mahnung"
                                        ],
                                        "section": "Invoice",
                                        "rule": "must_equal",
                                        "field": "rechnungtype"
                                    }
                                ]
                            ]
                        },
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
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
                    "_id": "5d3ffc4f52bead001e91698c",
                    "name": "rechnung_nr",
                    "field_display": "Rechnung Nr.",
                    "default_value": "",
                    "control_type": "TEXTFIELD",
                    "tooltip": "",
                    "is_list": false,
                    "counted_character": true,
                    "pattern": {
                        "name": "",
                        "arguments": {},
                        "content": "^(\\s*|[\\W\\w]+)$",
                        "description": "Nhập tối đa 16 ký tự"
                    },
                    "lookup_source": {
                        "allow_multiple": false,
                        "characters_trigger_lookup": 1,
                        "group_project": "ancestry",
                        "key_value": "data_value",
                        "locale": [],
                        "lookup_after_time": 1,
                        "lookup_field": "",
                        "name": "",
                        "param_set": "return []",
                        "result_view_config": [],
                        "related_columns": []
                    },
                    "validation": {
                        "name": "",
                        "content": "if(!value){\r\n    \r\n   return [{type : \"warning\" , message : \"Rechnung Nr. rỗng, cần kiểm tra lại\"}]\r\n\r\n}\r\nif(value.length > 16){\r\n    return [{\r\n        type: \"warning\",\r\n        message: \"Rechnung Nr. nhập hơn 16 ký tự, vui lòng kiểm tra lại\"\r\n    }]\r\n}\r\n\r\nvar regex1 = /[\\w]/g\r\n\r\nif(regex1.test(value) && (value.includes(';')) || !regex1.test(value) && (value.includes(';'))){\r\n    \r\n    return [{type : \"error\" , message : \"Không được nhập dấu ; \"}]\r\n}",
                        "arguments": {}
                    },
                    "rule_transform": {
                        "name": "",
                        "arguments": {},
                        "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,'');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);"
                    },
                    "lookup_broadcast": [],
                    "value_broadcast": "",
                    "argument_details": [],
                    "project_id": "5d3ffc3a52bead001e91697a",
                    "created_date": "2019-07-30T08:14:07.247Z",
                    "last_modified": "2019-08-06T10:59:04.622Z",
                    "field_setting": {
                        "field_id": "5d3ffc4f52bead001e91698c",
                        "visible": true,
                        "disable": false,
                        "dynamic_by_field": null,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
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
                    "_id": "5d3ffc4f52bead001e91698d",
                    "name": "rechnungsdatum",
                    "field_display": "Rechnungsdatum",
                    "default_value": "",
                    "control_type": "TEXTFIELD",
                    "tooltip": "",
                    "is_list": false,
                    "counted_character": true,
                    "pattern": {
                        "name": "",
                        "arguments": {},
                        "content": "^(s*|[0-9\\/\\.\\-]{6}|[0-9\\/\\.\\-]{10}|[0-9\\/\\.\\-]{8})$",
                        "description": "Nhập không đúng định dạng ddmmyyyy, vui lòng kiểm tra lại"
                    },
                    "lookup_source": {
                        "allow_multiple": false,
                        "characters_trigger_lookup": 1,
                        "group_project": "ancestry",
                        "key_value": "data_value",
                        "locale": [],
                        "lookup_after_time": 1,
                        "lookup_field": "",
                        "name": "",
                        "param_set": "return []",
                        "result_view_config": [],
                        "related_columns": []
                    },
                    "validation": {
                        "name": "",
                        "content": "function chkDate(date){\r\n\tvar dd = date.substring(0,2);\r\n\tvar mm = date.substring(2,4);\r\n\tvar yy = date.substring(4,6);\r\n\tvar tmpDate = new Date();\r\n\tvar y = tmpDate.getFullYear()+\"\";\r\n\ty = y.substring(2,4)*1 + 1;\r\n\r\n\t//Gan gia tri nam la 19YY neu YY > nam hien tai + 1\r\n\t//Gan gia tri nam la 20YY neu YY <= nam hien tai + 1\r\n\tif(yy*1>y){ yy = 19+yy;\r\n\t}else {yy = 20+yy;}\r\n\r\n\treturn dd+mm+yy;\t\r\n}\r\n\r\nfunction formatdate(ngay_hieu_luc_in78){\r\nvar fvalue = ngay_hieu_luc_in78;\r\n\tvar regex = /^(?:(?:31(|\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(|\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(|\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(|\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$/\r\n\tvar regex1 = /^\\d{6}$/;\r\n\tvar regex2 = /^(\\s*|[0-9\\.\\/\\-]+)$/ ;\r\n\tvar date;\r\nif(fvalue === \"\") return ;\r\n\tif(regex1.test(fvalue))\r\n\treturn ;\r\n\tif(regex2.test(fvalue)){\r\n\t\r\n\tif(!regex.test(fvalue)){\r\n\t\treturn [{type:\"warning\",message:\"Ngày Tháng Năm không phù hợp, vui lòng kiểm tra lại.\"}]\r\n\t}\r\n}else{\r\n    return [{type:\"error\",message:\"Không đúng định dạng ddmmyyyy\"}]\r\n}\r\nfvalue = fvalue.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'');\r\nif(fvalue.length === 6){\r\n\tfvalue = chkDate(fvalue);\r\n}\r\nvar dd = fvalue.substring(0, 2);\r\nvar mm = fvalue.substring(2, 4);\r\nvar yy = fvalue.substring(4, 8);\r\nvar tmpDate = new Date();\r\nvar d = tmpDate.getDate();\r\nvar m = tmpDate.getMonth();\r\nvar y = tmpDate.getFullYear();\r\nvar inputDate = new Date(yy, mm - 1, dd);\r\nvar curDate = new Date(y, m, d);\r\n\r\n\r\n\r\n//So sanh ngay nhap voi ngay hien tai\r\nif (inputDate > curDate) {\r\n return [{type:\"warning\", message:\"Năm nhập lớn hơn năm hiện tại\"}]\r\n}\r\n\r\n\r\n}\r\n\r\nreturn formatdate(value);",
                        "arguments": {}
                    },
                    "rule_transform": {
                        "name": "",
                        "arguments": {},
                        "content": "    var regex1 = /^\\d{6}$/;\n    \nfunction removeSpace(input){\n    var regex = /^(?:(?:31(|\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(|\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(|\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(|\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$/\n\tif(regex.test(input)){\n\t\tinput = input.replace(/([0-9]{2})([0-9]{2})([0-9]{4})/,'$1$2$3') + '';\n\t}\n\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\n\n\tinput = input.trim();\n\n\treturn input;\n}\nfunction chkDate(date){\n\tvar dd = date.substring(0,2);\n\tvar mm = date.substring(2,4);\n\tvar yy = date.substring(4,6);\n\tvar tmpDate = new Date();\n\tvar y = tmpDate.getFullYear()+\"\";\n\ty = y.substring(2,4)*1 + 1;\n\n\t//Gan gia tri nam la 19YY neu YY > nam hien tai + 1\n\t//Gan gia tri nam la 20YY neu YY <= nam hien tai + 1\n\tif(yy*1>y){ yy = 19+yy;\n\t}else {yy = 20+yy;}\n\n\treturn dd+mm+yy;\t\n}\nvalue = value.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'');\nif(value.length === 6){\n    return chkDate(value)}\nreturn removeSpace(value);"
                    },
                    "lookup_broadcast": [],
                    "value_broadcast": "",
                    "argument_details": [],
                    "project_id": "5d3ffc3a52bead001e91697a",
                    "text_type": "",
                    "created_date": "2019-07-30T08:14:07.247Z",
                    "last_modified": "2019-07-30T08:14:07.247Z",
                    "field_setting": {
                        "field_id": "5d3ffc4f52bead001e91698d",
                        "visible": true,
                        "disable": false,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
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
                    "_id": "5d3ffc4f52bead001e916992",
                    "name": "vertragsnr_fm",
                    "field_display": "Vertrags Nr. (FM)",
                    "default_value": "",
                    "control_type": "TEXTFIELD",
                    "tooltip": "",
                    "is_list": false,
                    "counted_character": true,
                    "pattern": {
                        "name": "",
                        "arguments": {},
                        "content": "^(\\s*|(FA|FM)[0-9]{11}-[0-9]{4})$",
                        "description": "Khác định dạng [FA hoặc FM][11 ký tự số]-[4 ký tự số]"
                    },
                    "lookup_source": {
                        "allow_multiple": false,
                        "characters_trigger_lookup": 1,
                        "group_project": "production",
                        "key_value": "vertrags_nr",
                        "locale": [
                            "040_170516_002_505273"
                        ],
                        "lookup_after_time": 1,
                        "lookup_field": "vertrags_nr",
                        "name": "lookup_saga_vertrags_nr",
                        "param_set": "var value = data.vertragsnr_fm.split(' '); return [value[value.length - 1],value.join(' ')]",
                        "result_view_config": [
                            {
                                "title": "Vertrags Nr",
                                "key_value": "vertrags_nr"
                            }
                        ],
                        "related_columns": [],
                        "specific_project": "0"
                    },
                    "validation": {
                        "name": "",
                        "content": "// return checkError(value);\nif (value){\nasync function checkValidation(value) {\n        let dataLookup =  await fetchJSON(`https://lookups.digi-texx.vn/lookups/production/040_170516_002_505273/0/vertrags_nr/[%22${value}%22,%22${value}%22]`);\n        if (!Array.isArray(dataLookup.json_single)||dataLookup.json_single.map(item => item.vertrags_nr).findIndex(item => item === value) === -1) {\n                        return [{\n                          type: \"warning\",\n                          message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\n                        }]\n                     }\n        // if(value.toLowerCase().includes('nhhien'))             \n        //              return[{ \n        //                   type: 'warning',\n        //                   message: `Lookup warning value:${value}`}];\n}\nreturn await checkValidation(value);\n}",
                        "arguments": {}
                    },
                    "rule_transform": {
                        "name": "",
                        "arguments": {},
                        "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);"
                    },
                    "lookup_broadcast": [],
                    "value_broadcast": "",
                    "argument_details": [],
                    "project_id": "5d3ffc3a52bead001e91697a",
                    "created_date": "2019-07-30T08:14:07.247Z",
                    "last_modified": "2019-07-30T08:14:07.247Z",
                    "field_setting": {
                        "field_id": "5d3ffc4f52bead001e916992",
                        "visible": true,
                        "disable": false,
                        "dynamic_by_field": null,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
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
                    "_id": "5d3ffc4f52bead001e916988",
                    "name": "lieferschein_nr",
                    "field_display": "Lieferschein Nr.",
                    "default_value": "",
                    "control_type": "TEXTFIELD",
                    "tooltip": "",
                    "is_list": false,
                    "counted_character": true,
                    "pattern": {
                        "name": "",
                        "arguments": {},
                        "content": "^(\\s*|[\\W\\w]{0,12})$",
                        "description": "Nhập tối đa 12 ký tự."
                    },
                    "lookup_source": {
                        "allow_multiple": false,
                        "characters_trigger_lookup": 1,
                        "group_project": "ancestry",
                        "key_value": "data_value",
                        "locale": [],
                        "lookup_after_time": 1,
                        "lookup_field": "",
                        "name": "",
                        "param_set": "return []",
                        "result_view_config": [],
                        "related_columns": []
                    },
                    "validation": {
                        "name": "",
                        "content": "var regex1 = /[\\w]/g\n\nif(regex1.test(value) && (value.includes(';')) || !regex1.test(value) && (value.includes(';'))){\n    \n    return [{type : \"error\" , message : \"Không được nhập dấu ; \"}]\n}",
                        "arguments": {}
                    },
                    "rule_transform": {
                        "name": "",
                        "arguments": {},
                        "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,'');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);"
                    },
                    "lookup_broadcast": [],
                    "value_broadcast": "",
                    "argument_details": [],
                    "project_id": "5d3ffc3a52bead001e91697a",
                    "created_date": "2019-07-30T08:14:07.247Z",
                    "last_modified": "2019-08-06T10:59:35.030Z",
                    "field_setting": {
                        "field_id": "5d3ffc4f52bead001e916988",
                        "visible": true,
                        "disable": false,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
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
                    "_id": "5d3ffc4f52bead001e916984",
                    "name": "kostenstelle_kst",
                    "field_display": "Kostenstelle (KST)",
                    "default_value": "",
                    "control_type": "TEXTFIELD",
                    "tooltip": "",
                    "is_list": false,
                    "counted_character": true,
                    "pattern": {
                        "name": "",
                        "arguments": {},
                        "content": "^(\\s*|[0-9]{10})$",
                        "description": "Bắt buộc nhập 10 ký tự số."
                    },
                    "lookup_source": {
                        "allow_multiple": false,
                        "characters_trigger_lookup": 1,
                        "group_project": "ancestry",
                        "key_value": "data_value",
                        "locale": [],
                        "lookup_after_time": 1,
                        "lookup_field": "",
                        "name": "",
                        "param_set": "return []",
                        "result_view_config": [],
                        "related_columns": []
                    },
                    "validation": {
                        "name": "",
                        "content": "",
                        "arguments": {}
                    },
                    "rule_transform": {
                        "name": "",
                        "arguments": {},
                        "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);"
                    },
                    "lookup_broadcast": [],
                    "value_broadcast": "",
                    "argument_details": [],
                    "project_id": "5d3ffc3a52bead001e91697a",
                    "created_date": "2019-07-30T08:14:07.247Z",
                    "last_modified": "2019-07-30T08:14:07.247Z",
                    "field_setting": {
                        "field_id": "5d3ffc4f52bead001e916984",
                        "visible": true,
                        "disable": false,
                        "dynamic_by_field": {
                            "effect": "invisible",
                            "groups": [
                                [
                                    {
                                        "value": "^(666|6666)$",
                                        "section": "Invoice",
                                        "rule": "regex",
                                        "field": "betriebsstellen_bst"
                                    }
                                ],
                                [
                                    {
                                        "value": "return Boolean(value)",
                                        "section": "Invoice",
                                        "rule": "func",
                                        "field": "vertragsnr_fm"
                                    }
                                ]
                            ]
                        },
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
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
                    "_id": "5d3ffc4f52bead001e91698f",
                    "name": "sachkonto_kto",
                    "field_display": "Sachkonto (Kto.)",
                    "default_value": "",
                    "control_type": "TEXTFIELD",
                    "tooltip": "",
                    "is_list": false,
                    "counted_character": true,
                    "pattern": {
                        "name": "",
                        "arguments": {},
                        "content": "^(\\s*|[\\0-9]{0,6})$",
                        "description": "Nhập tối đa 6 ký tự số"
                    },
                    "lookup_source": {
                        "allow_multiple": false,
                        "characters_trigger_lookup": 1,
                        "group_project": "ancestry",
                        "key_value": "data_value",
                        "locale": [],
                        "lookup_after_time": 1,
                        "lookup_field": "",
                        "name": "",
                        "param_set": "return []",
                        "result_view_config": [],
                        "related_columns": []
                    },
                    "validation": {
                        "name": "",
                        "content": "// var regex = /[\\w]/g\n\n// if(( (value===\"0\") || (value===\"00\") || (value===\"000\") || (value===\"0000\") || (value===\"00000\") || (value===\"000000\"))){\n    \n//     return [{\n//         type : \"error\" ,\n//         message: \"Giá trị Sachkonto (Kto.) đang là 0\"}]\n// }\n\nvar regex = /^[1-9]+$/;\nvalue = value.trim();\n\nif(!regex.test(value) && (value === \"0\" || value === \"00\" || value === \"000\" || value === \"0000\" || value === \"00000\" || value === \"000000\")){\n    \n    return [{type : \"error\" , message : \"Giá trị Sachkonto (Kto.) đang là 0\"}]\n}\n",
                        "arguments": {}
                    },
                    "rule_transform": {
                        "name": "",
                        "arguments": {},
                        "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);"
                    },
                    "lookup_broadcast": [],
                    "value_broadcast": "",
                    "argument_details": [],
                    "project_id": "5d3ffc3a52bead001e91697a",
                    "created_date": "2019-07-30T08:14:07.247Z",
                    "last_modified": "2019-07-30T08:14:07.247Z",
                    "field_setting": {
                        "field_id": "5d3ffc4f52bead001e91698f",
                        "visible": true,
                        "disable": false,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
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
                    "_id": "5d3ffc4f52bead001e916982",
                    "name": "innenauftrag_ia",
                    "field_display": "Innenauftrag (IA)",
                    "default_value": "",
                    "control_type": "TEXTFIELD",
                    "tooltip": "",
                    "is_list": false,
                    "counted_character": true,
                    "pattern": {
                        "name": "",
                        "arguments": {},
                        "content": "^(\\s*|[0-9]{6,7})$",
                        "description": "Chỉ nhập 6 hoặc 7 ký tự số."
                    },
                    "lookup_source": {
                        "allow_multiple": false,
                        "characters_trigger_lookup": 1,
                        "group_project": "ancestry",
                        "key_value": "data_value",
                        "locale": [],
                        "lookup_after_time": 1,
                        "lookup_field": "",
                        "name": "",
                        "param_set": "return []",
                        "result_view_config": [],
                        "related_columns": []
                    },
                    "validation": {
                        "name": "",
                        "content": "",
                        "arguments": {}
                    },
                    "rule_transform": {
                        "name": "",
                        "arguments": {},
                        "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);"
                    },
                    "lookup_broadcast": [],
                    "value_broadcast": "",
                    "argument_details": [],
                    "project_id": "5d3ffc3a52bead001e91697a",
                    "created_date": "2019-07-30T08:14:07.247Z",
                    "last_modified": "2019-07-30T08:14:07.247Z",
                    "field_setting": {
                        "field_id": "5d3ffc4f52bead001e916982",
                        "visible": true,
                        "disable": false,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
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
                    "_id": "5d3ffc4f52bead001e91698a",
                    "name": "netto",
                    "field_display": "Netto",
                    "default_value": "",
                    "control_type": "TEXTFIELD",
                    "tooltip": "",
                    "is_list": false,
                    "counted_character": true,
                    "pattern": {
                        "name": "",
                        "arguments": {},
                        "content": "^(\\s*|[0-9\\.]{0,15})$",
                        "description": "Nhập tối đa 15 ký tự số."
                    },
                    "lookup_source": {
                        "allow_multiple": false,
                        "characters_trigger_lookup": 1,
                        "group_project": "ancestry",
                        "key_value": "data_value",
                        "locale": [],
                        "lookup_after_time": 1,
                        "lookup_field": "",
                        "name": "",
                        "param_set": "return []",
                        "result_view_config": [],
                        "related_columns": []
                    },
                    "validation": {
                        "name": "",
                        "content": "if(value.split('.').length==2&&(value.split('.')[1].trim().length===0||value.split('.')[0].trim().length===0)){\n    return [{\n            type:'error',\n            message:'Dữ liệu nhập phải là số thập phân'\n    }]\n}\n\n// var num = parseFloat(value).toFixed(3);\nvar tmp = (value*1000 + 0.1*1000 - 0.1*1000)/10 ;\n\nif(!value){\n    return [{type : \"warning\",\n        message :\"Netto Rỗng, cần kiểm tra lại!\"\n    }]\n}\n\nvar [ng,tp] =value.split('.')\n// if(value.split('.').length>2){\n//     return [{\n//             type:'warning',\n//             message:'Netto nhập quá 2 số thập phân'\n//     }]\n// }\n\nif(tp&&tp.length>2){\n     return [{type : \"warning\",\n        message :\"Netto nhập quá 2 số thập phân\"\n    }]\n}\n\nif(!tmp&&tmp!==0){\n    return [{\n        type : 'error',\n        message: 'Dữ liệu nhập phải là chuỗi số thập phân'\n    }]\n}\nif(value<0){\n    return [\n        {\n            type:'error',\n            message:'Không được nhập giá trị âm.'\n        }\n        ]\n}\n",
                        "arguments": {}
                    },
                    "rule_transform": {
                        "name": "",
                        "arguments": {},
                        "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);"
                    },
                    "lookup_broadcast": [],
                    "value_broadcast": "",
                    "argument_details": [],
                    "project_id": "5d3ffc3a52bead001e91697a",
                    "text_type": "",
                    "created_date": "2019-07-30T08:14:07.247Z",
                    "last_modified": "2019-07-30T08:14:07.247Z",
                    "field_setting": {
                        "field_id": "5d3ffc4f52bead001e91698a",
                        "visible": true,
                        "disable": false,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
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
                    "_id": "5d3ffc4f52bead001e916991",
                    "name": "steuerstatz",
                    "field_display": "Steuerstatz",
                    "default_value": "",
                    "control_type": "TEXTFIELD",
                    "tooltip": "",
                    "is_list": false,
                    "counted_character": true,
                    "pattern": {
                        "name": "",
                        "arguments": {},
                        "content": "^(\\s*|[0-9\\.]+)$",
                        "description": "Nhập số định dạng 2 số thập phân"
                    },
                    "lookup_source": {
                        "allow_multiple": false,
                        "characters_trigger_lookup": 1,
                        "group_project": "ancestry",
                        "key_value": "data_value",
                        "locale": [],
                        "lookup_after_time": 1,
                        "lookup_field": "",
                        "name": "",
                        "param_set": "return []",
                        "result_view_config": [],
                        "related_columns": []
                    },
                    "validation": {
                        "name": "",
                        "content": "if(value.split('.').length==2&&(value.split('.')[1].trim().length===0||value.split('.')[0].trim().length===0)){\r\n    return [{\r\n            type:'error',\r\n            message:'Dữ liệu nhập phải là số thập phân'\r\n    }]\r\n}\r\n\r\nif(!value){\r\n    return [{type : \"warning\",\r\n        message :\"Steuerstatz Rỗng, cần kiểm tra lại!\"\r\n    }]\r\n}\r\n\r\nvar num = parseFloat(value).toFixed(3);\r\nvar tmp = (value*1000 + 0.1*1000 - 0.1*1000)/10 ;\r\nif(!tmp&&tmp!==0){\r\n    return [{\r\n        type : 'error',\r\n        message: 'Dữ liệu nhập phải là chuỗi số'\r\n    }]\r\n}\r\nif(value<0){\r\n    return [\r\n        {\r\n            type:'error',\r\n            message:'Không được nhập giá trị âm.'\r\n        }\r\n        ]\r\n}else if(!(Number.isInteger(tmp))){\r\n    return [{\r\n            type:'warning',\r\n            message:'Steuerstatz nhập quá 2 số thập phân'\r\n    }]\r\n}",
                        "arguments": {}
                    },
                    "rule_transform": {
                        "name": "",
                        "arguments": {},
                        "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);"
                    },
                    "lookup_broadcast": [],
                    "value_broadcast": "",
                    "argument_details": [],
                    "project_id": "5d3ffc3a52bead001e91697a",
                    "text_type": "NUMERIC",
                    "created_date": "2019-07-30T08:14:07.247Z",
                    "last_modified": "2019-07-30T08:14:07.247Z",
                    "field_setting": {
                        "field_id": "5d3ffc4f52bead001e916991",
                        "visible": true,
                        "disable": false,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
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
                    "_id": "5d3ffc4f52bead001e916990",
                    "name": "steuerbetrag",
                    "field_display": "Steuerbetrag",
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
                        "group_project": "ancestry",
                        "key_value": "data_value",
                        "locale": [],
                        "lookup_after_time": 1,
                        "lookup_field": "",
                        "name": "",
                        "param_set": "return []",
                        "result_view_config": [],
                        "related_columns": []
                    },
                    "validation": {
                        "name": "",
                        "content": "if(value.split('.').length==2&&(value.split('.')[1].trim().length===0||value.split('.')[0].trim().length===0)){\n    return [{\n            type:'error',\n            message:'Dữ liệu nhập phải là số thập phân'\n    }]\n}\n\nif(!value){\n    return [{type : \"warning\",\n        message :\"Steuerbetrag Rỗng, cần kiểm tra lại!\"\n    }]\n}\n\nvar num = parseFloat(value).toFixed(3);\nvar tmp = (value*1000 + 0.1*1000 - 0.1*1000)/10 ;\nif(!tmp&&tmp!==0){\n    return [{\n        type : 'error',\n        message: 'Dữ liệu nhập phải là chuỗi số'\n    }]\n}\nif(value<0){\n    return [\n        {\n            type:'error',\n            message:'Không được nhập giá trị âm.'\n        }\n        ]\n}else if(!(Number.isInteger(tmp))){\n    return [{\n            type:'warning',\n            message:'Steuerbetrag nhập quá 2 số thập phân'\n    }]\n}\n\nfunction checkBrutto(sbt_value, stz_value , netto_value ){\n    \n            sbt_value = parseFloat(sbt_value);\n            netto_value = parseFloat(netto_value);\n            stz_value = parseFloat(stz_value);\n            \n        var total = (netto_value.toFixed(2) * stz_value.toFixed(2)) / 100;\n\n             if(sbt_value.toFixed(2) !== total.toFixed(2)){\n                    return [{type : 'warning' , \n                            message : 'Giá trị Steuerbetrag tự tính khác với giá trị nhập, cần kiểm tra lại'}];\n                }\n}\nreturn checkBrutto(value, steuerstatz, netto);",
                        "arguments": {
                            "netto": "netto",
                            "steuerstatz": "steuerstatz"
                        }
                    },
                    "rule_transform": {
                        "name": "",
                        "arguments": {},
                        "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);"
                    },
                    "lookup_broadcast": [],
                    "value_broadcast": "",
                    "argument_details": [],
                    "project_id": "5d3ffc3a52bead001e91697a",
                    "created_date": "2019-07-30T08:14:07.247Z",
                    "last_modified": "2019-07-30T08:14:07.247Z",
                    "field_setting": {
                        "field_id": "5d3ffc4f52bead001e916990",
                        "visible": true,
                        "disable": false,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
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
                    "_id": "5d3ffc4f52bead001e91697f",
                    "name": "brutto",
                    "field_display": "Brutto",
                    "default_value": "",
                    "control_type": "TEXTFIELD",
                    "tooltip": "",
                    "is_list": false,
                    "counted_character": true,
                    "pattern": {
                        "name": "",
                        "arguments": {},
                        "content": "^(\\s*|[0-9\\.]{0,15})$",
                        "description": "Chỉ nhập ký tự số."
                    },
                    "lookup_source": {
                        "allow_multiple": false,
                        "characters_trigger_lookup": 1,
                        "group_project": "ancestry",
                        "key_value": "data_value",
                        "locale": [],
                        "lookup_after_time": 1,
                        "lookup_field": "",
                        "name": "",
                        "param_set": "return []",
                        "result_view_config": [],
                        "related_columns": []
                    },
                    "validation": {
                        "name": "",
                        "content": "if(value.split('.').length==2&&(value.split('.')[1].trim().length===0||value.split('.')[0].trim().length===0)){\n    return [{\n            type:'error',\n            message:'Dữ liệu nhập phải là số thập phân'\n    }]\n}\n\n// var num = parseFloat(value).toFixed(3);\nvar tmp = (value*1000 + 0.1*1000 - 0.1*1000)/10 ;\n\n// if(!value){\n//     return [{type : \"warning\",\n//         message :\"Brutto Rỗng, cần kiểm tra lại!\"\n//     }]\n// }\n\nvar [ng,tp] =value.split('.')\n// if(value.split('.').length>2){\n//     return [{\n//             type:'warning',\n//             message:'Netto nhập quá 2 số thập phân'\n//     }]\n// }\n\nif(tp&&tp.length>2){\n     return [{type : \"warning\",\n        message :\"Brutto nhập quá 2 số thập phân\"\n    }]\n}\n\nif(!tmp&&tmp!==0){\n    return [{\n        type : 'error',\n        message: 'Dữ liệu nhập phải là chuỗi số thập phân'\n    }]\n}\nif(value<0){\n    return [\n        {\n            type:'error',\n            message:'Không được nhập giá trị âm.'\n        }\n        ]\n}\n\n\nfunction checkBrutto(brutto_value , sbt_value , netto_value ){\n        console.log(brutto_value , sbt_value , netto_value);\n            brutto_value = parseFloat(brutto_value);\n            netto_value = parseFloat(netto_value);\n            sbt_value = parseFloat(sbt_value);\n        \n        var total = netto_value + sbt_value;\n        \n        \n            if(!brutto_value&&netto_value){\n                return [{type: 'error',\n                    message: 'Brutto rỗng, cả 2 field Netto và Brutto đều phải có giá trị.'\n                }]\n            }\n            if(!!brutto_value&&!netto_value){\n                return [{type: 'error',\n                    message: 'Netto rỗng, cả 2 field Netto và Brutto đều phải có giá trị.'\n                }]\n            }\n            if(brutto_value.toFixed(2) !== total.toFixed(2)){\n                return [{type : 'warning' , \n                        message : 'Giá trị Brutto tự tính khác với giá trị nhập, cần kiểm tra lại'\n                }]\n            }\n            if(!brutto_value){\n                return [{type : \"warning\",\n                    message :\"Brutto Rỗng, cần kiểm tra lại!\"\n                }]\n            }\n}\nreturn checkBrutto(value, steuerbetrag, netto);",
                        "arguments": {
                            "steuerbetrag": "steuerbetrag",
                            "netto": "netto"
                        }
                    },
                    "rule_transform": {
                        "name": "",
                        "arguments": {},
                        "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\t\tinput = input.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'-');\r\n\t\tinput = input.replace(/[\\s\\t]*(\\()[\\s\\t]*/g,' (');\r\n\t\tinput = input.replace(/[\\s\\t]*(\\))[\\s\\t]*/g,') ');\r\n\t\tinput = input.replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'/');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);"
                    },
                    "lookup_broadcast": [],
                    "value_broadcast": "",
                    "argument_details": [],
                    "project_id": "5d3ffc3a52bead001e91697a",
                    "created_date": "2019-07-30T08:14:07.247Z",
                    "last_modified": "2019-07-30T08:14:07.247Z",
                    "field_setting": {
                        "field_id": "5d3ffc4f52bead001e91697f",
                        "visible": true,
                        "disable": false,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
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
                    "_id": "5d3ffc4f52bead001e916993",
                    "name": "wahrung",
                    "field_display": "Währung",
                    "default_value": "",
                    "control_type": "TEXTFIELD",
                    "tooltip": "",
                    "is_list": false,
                    "counted_character": true,
                    "pattern": {
                        "name": "",
                        "arguments": {},
                        "content": "^(\\s*|[\\a-zA-Z]{0,3})$",
                        "description": "Nhập tối đa 3 ký tự chữ"
                    },
                    "lookup_source": {
                        "allow_multiple": false,
                        "characters_trigger_lookup": 1,
                        "group_project": "default",
                        "key_value": "currency",
                        "locale": [
                            "lookup_center"
                        ],
                        "lookup_after_time": 1,
                        "lookup_field": "currency",
                        "name": "lookup_saga_currency",
                        "param_set": "var value = data.wahrung.split(' '); return [value[value.length - 1],value.join(' ')]",
                        "result_view_config": [
                            {
                                "title": "Währung",
                                "key_value": "currency"
                            }
                        ],
                        "related_columns": [],
                        "specific_project": "0"
                    },
                    "validation": {
                        "name": "",
                        "content": "if(!value){\n    return [{type : \"warning\",\n        message :\"Währung Rỗng, cần kiểm tra lại!\"\n    }]\n}\n// return checkError(value);\n\nasync function checkValidation(value) {\n        var dataLookup =  await fetchJSON(`https://lookups.digi-texx.vn/lookups/default/lookup_center/0/currency/[%22${value}%22,%22${value}%22]`);\n        if (!Array.isArray(dataLookup.json_single)||dataLookup.json_single.map(item => item.currency).findIndex(item => item === value) === -1) {\n                return [{\n                          type: \"error\",\n                          message: `Giá trị nhập: ${value} khác với lookup`\n                        }]\n                     }\n                     \n        // if(value.toLowerCase().includes('nhhien'))             \n        //              return[{ \n        //                   type: 'warning',\n        //                   message: `Lookup warning value:${value}`}];\n}\nreturn await checkValidation(value);",
                        "arguments": {}
                    },
                    "rule_transform": {
                        "name": "",
                        "arguments": {},
                        "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);"
                    },
                    "lookup_broadcast": [],
                    "value_broadcast": "",
                    "argument_details": [],
                    "project_id": "5d3ffc3a52bead001e91697a",
                    "created_date": "2019-07-30T08:14:07.247Z",
                    "last_modified": "2019-07-30T08:14:07.247Z",
                    "field_setting": {
                        "field_id": "5d3ffc4f52bead001e916993",
                        "visible": true,
                        "disable": false,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
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
                    "_id": "5d3ffc4f52bead001e91698b",
                    "name": "note",
                    "field_display": "Note",
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
                        "group_project": "ancestry",
                        "key_value": "data_value",
                        "locale": [],
                        "lookup_after_time": 1,
                        "lookup_field": "",
                        "name": "",
                        "param_set": "return []",
                        "result_view_config": [],
                        "related_columns": []
                    },
                    "validation": {
                        "name": "",
                        "content": "var regex1 = /[\\w]/g\n\nif(regex1.test(value) && (value.includes(';')) || !regex1.test(value) && (value.includes(';'))){\n    \n    return [{type : \"error\" , message : \"Không được nhập dấu ; \"}]\n}",
                        "arguments": {}
                    },
                    "rule_transform": {
                        "name": "",
                        "arguments": {},
                        "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);"
                    },
                    "lookup_broadcast": [],
                    "value_broadcast": "",
                    "argument_details": [],
                    "project_id": "5d3ffc3a52bead001e91697a",
                    "created_date": "2019-07-30T08:14:07.247Z",
                    "last_modified": "2019-07-30T08:14:07.247Z",
                    "field_setting": {
                        "field_id": "5d3ffc4f52bead001e91698b",
                        "visible": true,
                        "disable": false,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
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
            "id": "5d3ffc4f52bead001e916994"
        }
    ]
}