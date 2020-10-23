export const dataSection_sort = () => {
    return [
        {
            "name": "Table",
            "layout_name": "Receipt1",
            "index": 0,
            "layout_id": "5ef094a7d13964435a41c553",
            "is_multiple": false,
            "position": {
                "x": 0,
                "y": 0,
                "w": 1,
                "h": 1
            },
            "settings": {
                "is_multiple": false,
                "fieldId": "",
                "sectionsSync": "",
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
                "x": 0,
                "y": 0,
                "w": 0.04032258064516129,
                "h": 0.028506271379703536
            },
            "fields": [
                {
                    "_id": "5ef094a7d13964435a41c52e",
                    "name": "rd_non_salary",
                    "project_id": "5ed862865b721b00142ebaaa",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Non salary",
                    "is_list": false,
                    "last_modified": "2020-06-22T11:23:19.528Z",
                    "lookup_broadcast": [],
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
                    "pattern": {
                        "name": "",
                        "arguments": {},
                        "content": ""
                    },
                    "rule_transform": {
                        "name": "",
                        "arguments": {},
                        "content": ""
                    },
                    "text_type": "",
                    "tooltip": "",
                    "validation": {
                        "name": "",
                        "content": "value = value+\"\"\r\nif(value === \"\"){\r\n        return [{\r\n            type: \"error\",\r\n            message: `Không đươc phép rỗng!`\r\n        }]\r\n}\r\n    let regex = /^[0-9]+$/\r\n    if(!regex.test(value)){\r\n        return [{\r\n            type: \"error\",\r\n            message: `${value} - Integer Number invalid`\r\n        }]\r\n    }\r\n\r\n// let _nonsalary = (value+\"\" === \"\") ? 0 : value*1;\r\n// let _total_amount = (total_amount+\"\" === \"\") ? 0 : total_amount*1;\r\n\r\n\r\n// _nonsalary = parseInt(_nonsalary);\r\n// _total_amount = parseInt(_total_amount);\r\n\r\n// if(_nonsalary !== _total_amount){\r\n//     let msg = [{\r\n//         type:\"warning\",\r\n//         message: `Value: ${_nonsalary}. Total_Amount: ${_total_amount}`\r\n//     }]\r\n//     //console.log(msg)\r\n//     return msg;\r\n// }",
                        "arguments": {
                            "total_amount": "rd_total_amount"
                        }
                    },
                    "value_broadcast": "",
                    "field_setting": {
                        "field_id": "5ef094a7d13964435a41c52e",
                        "visible": true,
                        "disable": false,
                        "dynamic_by_field": {
                            "effect": "invisible",
                            "groups": [
                                [
                                    {
                                        "value": [
                                            "true"
                                        ],
                                        "section": "Table",
                                        "rule": "must_equal",
                                        "field": "rc_step_status"
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
                    "_id": "5ef094a7d13964435a41c522",
                    "name": "rd_date_from",
                    "project_id": "5ed862865b721b00142ebaaa",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Date from",
                    "is_list": false,
                    "last_modified": "2020-06-22T11:23:19.527Z",
                    "lookup_broadcast": [],
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
                    "pattern": {
                        "name": "",
                        "arguments": {},
                        "content": ""
                    },
                    "rule_transform": {
                        "name": "",
                        "arguments": {},
                        "content": ""
                    },
                    "text_type": "",
                    "tooltip": "",
                    "validation": {
                        "name": "",
                        "content": "value = value+\"\"\r\nif(value===\"+\") return;\r\nif(value === \"\"){\r\n        return [{type : \"error\",\r\n        message :`Không được để field trống!`\r\n    }]\r\n}else{\r\n    let date;\r\n    let regex = /^(((0[1-9]|[12]\\d|3[01])(0[13578]|1[02])((1[6-9]|[2-9]\\d)\\d{2}))|((0[1-9]|[12]\\d|30)(0[13456789]|1[012])((1[6-9]|[2-9]\\d)\\d{2}))|((0[1-9]|1\\d|2[0-8])02((1[6-9]|[2-9]\\d)\\d{2}))|(2902((1[6-9]|[2-9]\\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/\r\n    if(value.length==6){\r\n        value = '20'+value;\r\n    } \r\n    date = value.replace(/^(.{4})(.{2})(.{2})$/,'$3$2$1');\r\n\r\n    if(!regex.test(date) || value.length !== 8){\r\n        return [{\r\n            type: \"error\",\r\n            message: `${value}. invalid date format: YYYYMMDD or YYMMDD or +`\r\n        }]\r\n    }\r\n}",
                        "arguments": {}
                    },
                    "value_broadcast": "",
                    "field_setting": {
                        "field_id": "5ef094a7d13964435a41c522",
                        "visible": true,
                        "disable": false,
                        "dynamic_by_field": {
                            "effect": "invisible",
                            "groups": [
                                [
                                    {
                                        "value": [
                                            "true"
                                        ],
                                        "section": "Table",
                                        "rule": "must_equal",
                                        "field": "rc_step_status"
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
                    "_id": "5ef094a7d13964435a41c518",
                    "name": "have_korea_words",
                    "project_id": "5ed862865b721b00142ebaaa",
                    "argument_details": [
                        "true"
                    ],
                    "control_type": "COMBOBOX",
                    "counted_character": false,
                    "default_value": "",
                    "field_display": "Have Korea Words",
                    "is_list": false,
                    "last_modified": "2020-06-22T12:56:56.184Z",
                    "lookup_broadcast": [],
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
                    "pattern": {
                        "name": "",
                        "arguments": {},
                        "content": ""
                    },
                    "rule_transform": {
                        "name": "",
                        "arguments": {},
                        "content": ""
                    },
                    "text_type": "",
                    "tooltip": "",
                    "validation": {
                        "name": "",
                        "content": "value = value+\"\"\n\nif(value != \"\" && value != \"true\"){\n    return [{\n        type: \"error\",\n        message: \"chỉ được nhập 'true' hoặc để rỗng\"\n    }]\n}",
                        "arguments": {}
                    },
                    "value_broadcast": "",
                    "field_setting": {
                        "field_id": "5ef094a7d13964435a41c518",
                        "visible": true,
                        "disable": false,
                        "dynamic_by_field": {
                            "effect": "invisible",
                            "groups": [
                                [
                                    {
                                        "value": [
                                            "true"
                                        ],
                                        "section": "Table",
                                        "rule": "must_equal",
                                        "field": "rc_step_status"
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
                    "_id": "5ef094a7d13964435a41c52a",
                    "name": "rd_edi_code",
                    "project_id": "5ed862865b721b00142ebaaa",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Edi code",
                    "is_list": false,
                    "last_modified": "2020-06-22T11:23:19.527Z",
                    "lookup_broadcast": [],
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
                    "pattern": {
                        "name": "",
                        "arguments": {},
                        "content": ""
                    },
                    "rule_transform": {
                        "name": "",
                        "arguments": {},
                        "content": "function upper(input){\r\n\r\n\t\tinput = input.toUpperCase();\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn upper(value);",
                        "created_date": "2020-04-27T07:08:22.358Z",
                        "last_modified": "2020-04-27T07:09:29.160Z",
                        "id": "5ea684e696527c001be0c516"
                    },
                    "text_type": "",
                    "tooltip": "",
                    "validation": {
                        "name": "",
                        "content": "value = value+\"\";\r\nif(value === \"\" && kword !== 'true'){\r\n        return [{type : \"error\",\r\n        message :`Field rỗng!`\r\n    }]\r\n}\r\n\r\nif(value.length > 45){\r\n        return [{type : \"error\",\r\n        message :`${value.length} char. Data length  <= 45`\r\n    }]\r\n}\r\n",
                        "arguments": {
                            "kword": "have_korea_words"
                        }
                    },
                    "value_broadcast": "",
                    "field_setting": {
                        "field_id": "5ef094a7d13964435a41c52a",
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
                    "_id": "5ef094a7d13964435a41c51c",
                    "name": "rd_amount",
                    "project_id": "5ed862865b721b00142ebaaa",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Amount",
                    "is_list": false,
                    "last_modified": "2020-06-22T11:23:19.527Z",
                    "lookup_broadcast": [],
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
                    "pattern": {
                        "name": "",
                        "arguments": {},
                        "content": ""
                    },
                    "rule_transform": {
                        "name": "",
                        "arguments": {},
                        "content": ""
                    },
                    "text_type": "",
                    "tooltip": "",
                    "validation": {
                        "name": "",
                        "content": "value = value+\"\";\r\nif(value === \"\"){\r\n        return [{type : \"error\",\r\n        message :`Không được để field trống!`\r\n    }]\r\n}\r\nlet regex_num = /^-?[0-9]+([0-9]{1,3})*$/\r\nif(!regex_num.test(value)){\r\n        return [{type : \"error\",\r\n        message :`Format Integer number invalid. Ex: 1234...`\r\n    }]\r\n}\r\n",
                        "arguments": {}
                    },
                    "value_broadcast": "",
                    "field_setting": {
                        "field_id": "5ef094a7d13964435a41c51c",
                        "visible": true,
                        "disable": false,
                        "dynamic_by_field": {
                            "effect": "invisible",
                            "groups": [
                                [
                                    {
                                        "value": [
                                            "true"
                                        ],
                                        "section": "Table",
                                        "rule": "must_equal",
                                        "field": "rc_step_status"
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
                    "_id": "5ef094a7d13964435a41c520",
                    "name": "rd_count",
                    "project_id": "5ed862865b721b00142ebaaa",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Count",
                    "is_list": false,
                    "last_modified": "2020-06-22T11:23:19.527Z",
                    "lookup_broadcast": [],
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
                    "pattern": {
                        "name": "",
                        "arguments": {},
                        "content": ""
                    },
                    "rule_transform": {
                        "name": "",
                        "arguments": {},
                        "content": ""
                    },
                    "text_type": "",
                    "tooltip": "",
                    "validation": {
                        "name": "",
                        "content": "value = value+\"\";\r\nif(value === \"\"){\r\n        return [{type : \"error\",\r\n        message :`Không được để field trống!`\r\n    }]\r\n}\r\nlet regex_num = /^-?[0-9]{1,7}(\\.[0-9]{1,4})*$/\r\nif(!regex_num.test(value)){\r\n        return [{type : \"error\",\r\n        message :`Format Float(7,4) invalid. For example, 2.0000, 1.50, 1.0, 3, etc`\r\n    }]\r\n}\r\n",
                        "arguments": {}
                    },
                    "value_broadcast": "",
                    "field_setting": {
                        "field_id": "5ef094a7d13964435a41c520",
                        "visible": true,
                        "disable": false,
                        "dynamic_by_field": {
                            "effect": "invisible",
                            "groups": [
                                [
                                    {
                                        "value": [
                                            "true"
                                        ],
                                        "section": "Table",
                                        "rule": "must_equal",
                                        "field": "rc_step_status"
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
                    "_id": "5ef094a7d13964435a41c528",
                    "name": "rd_days",
                    "project_id": "5ed862865b721b00142ebaaa",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Days",
                    "is_list": false,
                    "last_modified": "2020-06-22T11:23:19.527Z",
                    "lookup_broadcast": [],
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
                    "pattern": {
                        "name": "",
                        "arguments": {},
                        "content": ""
                    },
                    "rule_transform": {
                        "name": "",
                        "arguments": {},
                        "content": ""
                    },
                    "text_type": "",
                    "tooltip": "",
                    "validation": {
                        "name": "",
                        "content": "value = value+\"\"\r\nif(value === \"\"){\r\n        return [{type : \"error\",\r\n        message :`Không được để field trống!`\r\n    }]\r\n}else{\r\n    let regex = /^[0-9]+$/\r\n    if(!regex.test(value)){\r\n        return [{\r\n            type: \"error\",\r\n            message: `${value} - Integer Number invalid`\r\n        }]\r\n    }\r\n}",
                        "arguments": {}
                    },
                    "value_broadcast": "",
                    "field_setting": {
                        "field_id": "5ef094a7d13964435a41c528",
                        "visible": true,
                        "disable": false,
                        "dynamic_by_field": {
                            "effect": "invisible",
                            "groups": [
                                [
                                    {
                                        "value": [
                                            "true"
                                        ],
                                        "section": "Table",
                                        "rule": "must_equal",
                                        "field": "rc_step_status"
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
                    "_id": "5ef094a7d13964435a41c53a",
                    "name": "rd_total_amount",
                    "project_id": "5ed862865b721b00142ebaaa",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Total amount",
                    "is_list": false,
                    "last_modified": "2020-06-22T11:23:19.528Z",
                    "lookup_broadcast": [],
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
                    "pattern": {
                        "name": "",
                        "arguments": {},
                        "content": ""
                    },
                    "rule_transform": {
                        "name": "",
                        "arguments": {},
                        "content": ""
                    },
                    "text_type": "",
                    "tooltip": "",
                    "validation": {
                        "name": "",
                        "content": "let _amount = (amount+\"\" === \"\") ? 0 : amount*1;\r\nlet _count = (count+\"\" === \"\") ? 0 : count*1;\r\nlet _day = (day+\"\" === \"\") ? 0 : day*1;\r\nlet _total_amount = (value+\"\" === \"\") ? 0 : value*1;\r\n\r\nlet checksum = _amount*_count*_day;\r\nchecksum = parseFloat(checksum).toFixed(4);\r\n_total_amount = parseFloat(_total_amount).toFixed(4);\r\n\r\nif(checksum !== _total_amount){\r\n    let msg = [{\r\n        type:\"warning\",\r\n        message: `Value: ${_total_amount}. Checksum: ${checksum}. Vui lòng kiểm tra kỹ trước khi save`\r\n    }]\r\n    //console.log(msg)\r\n    return msg;\r\n}\r\n\r\nlet _nonsalary = parseFloat(non_salary).toFixed(4);\r\n\r\n\r\nif(_nonsalary !== _total_amount){\r\n    let msg = [{\r\n        type:\"warning\",\r\n        message: `Value: ${_nonsalary}. Total_Amount: ${_total_amount}. Vui lòng kiểm tra kỹ trước khi save`\r\n    }]\r\n    //console.log(msg)\r\n    return msg;\r\n}",
                        "arguments": {
                            "amount": "rd_amount",
                            "count": "rd_count",
                            "day": "rd_days",
                            "non_salary": "rd_non_salary"
                        }
                    },
                    "value_broadcast": "",
                    "field_setting": {
                        "field_id": "5ef094a7d13964435a41c53a",
                        "visible": true,
                        "disable": false,
                        "dynamic_by_field": {
                            "effect": "invisible",
                            "groups": [
                                [
                                    {
                                        "value": [
                                            "true"
                                        ],
                                        "section": "Table",
                                        "rule": "must_equal",
                                        "field": "rc_step_status"
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
                    "_id": "5ef094a7d13964435a41c516",
                    "name": "note",
                    "project_id": "5ed862865b721b00142ebaaa",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Note",
                    "is_list": false,
                    "last_modified": "2020-06-22T11:23:19.526Z",
                    "lookup_broadcast": [],
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
                    "pattern": {
                        "name": "",
                        "arguments": {},
                        "content": ""
                    },
                    "rule_transform": {
                        "name": "",
                        "arguments": {},
                        "content": ""
                    },
                    "tooltip": "",
                    "validation": {
                        "name": "",
                        "content": "",
                        "arguments": {}
                    },
                    "value_broadcast": "",
                    "field_setting": {
                        "field_id": "5ef094a7d13964435a41c516",
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
                    "_id": "5ef094a7d13964435a41c51a",
                    "name": "rc_step_status",
                    "project_id": "5ed862865b721b00142ebaaa",
                    "argument_details": [
                        "true"
                    ],
                    "control_type": "COMBOBOX",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "rc_step_status",
                    "is_list": false,
                    "last_modified": "2020-06-22T11:23:19.526Z",
                    "lookup_broadcast": [],
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
                    "pattern": {
                        "name": "",
                        "arguments": {},
                        "content": ""
                    },
                    "rule_transform": {
                        "name": "",
                        "arguments": {},
                        "content": ""
                    },
                    "tooltip": "",
                    "validation": {
                        "name": "",
                        "content": "",
                        "arguments": {}
                    },
                    "value_broadcast": "",
                    "field_setting": {
                        "field_id": "5ef094a7d13964435a41c51a",
                        "visible": false,
                        "disable": false,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
                        "argument_details": [
                            {
                                "value": "TRUE"
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
                    "visible": false,
                    "disable": false,
                    "double_typing": false
                }
            ],
            "id": "5ef094a7d13964435a41c575"
        },
        {
            "name": "Table2",
            "layout_name": "Receipt1",
            "index": 0,
            "layout_id": "5ef094a7d13964435a41c553",
            "is_multiple": false,
            "position": {
                "x": 0,
                "y": 0,
                "w": 1,
                "h": 1
            },
            "settings": {
                "is_multiple": false,
                "fieldId": "",
                "sectionsSync": "",
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
                "x": 0,
                "y": 0,
                "w": 0.04032258064516129,
                "h": 0.028506271379703536
            },
            "fields": [
                {
                    "_id": "5ef094a7d13964435a41c52e",
                    "name": "rd_non_salary",
                    "project_id": "5ed862865b721b00142ebaaa",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Non salary",
                    "is_list": false,
                    "last_modified": "2020-06-22T11:23:19.528Z",
                    "lookup_broadcast": [],
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
                    "pattern": {
                        "name": "",
                        "arguments": {},
                        "content": ""
                    },
                    "rule_transform": {
                        "name": "",
                        "arguments": {},
                        "content": ""
                    },
                    "text_type": "",
                    "tooltip": "",
                    "validation": {
                        "name": "",
                        "content": "value = value+\"\"\r\nif(value === \"\"){\r\n        return [{\r\n            type: \"error\",\r\n            message: `Không đươc phép rỗng!`\r\n        }]\r\n}\r\n    let regex = /^[0-9]+$/\r\n    if(!regex.test(value)){\r\n        return [{\r\n            type: \"error\",\r\n            message: `${value} - Integer Number invalid`\r\n        }]\r\n    }\r\n\r\n// let _nonsalary = (value+\"\" === \"\") ? 0 : value*1;\r\n// let _total_amount = (total_amount+\"\" === \"\") ? 0 : total_amount*1;\r\n\r\n\r\n// _nonsalary = parseInt(_nonsalary);\r\n// _total_amount = parseInt(_total_amount);\r\n\r\n// if(_nonsalary !== _total_amount){\r\n//     let msg = [{\r\n//         type:\"warning\",\r\n//         message: `Value: ${_nonsalary}. Total_Amount: ${_total_amount}`\r\n//     }]\r\n//     //console.log(msg)\r\n//     return msg;\r\n// }",
                        "arguments": {
                            "total_amount": "rd_total_amount"
                        }
                    },
                    "value_broadcast": "",
                    "field_setting": {
                        "field_id": "5ef094a7d13964435a41c52e",
                        "visible": true,
                        "disable": false,
                        "dynamic_by_field": {
                            "effect": "invisible",
                            "groups": [
                                [
                                    {
                                        "value": [
                                            "true"
                                        ],
                                        "section": "Table",
                                        "rule": "must_equal",
                                        "field": "rc_step_status"
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
                    "_id": "5ef094a7d13964435a41c522",
                    "name": "rd_date_from",
                    "project_id": "5ed862865b721b00142ebaaa",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Date from",
                    "is_list": false,
                    "last_modified": "2020-06-22T11:23:19.527Z",
                    "lookup_broadcast": [],
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
                    "pattern": {
                        "name": "",
                        "arguments": {},
                        "content": ""
                    },
                    "rule_transform": {
                        "name": "",
                        "arguments": {},
                        "content": ""
                    },
                    "text_type": "",
                    "tooltip": "",
                    "validation": {
                        "name": "",
                        "content": "value = value+\"\"\r\nif(value===\"+\") return;\r\nif(value === \"\"){\r\n        return [{type : \"error\",\r\n        message :`Không được để field trống!`\r\n    }]\r\n}else{\r\n    let date;\r\n    let regex = /^(((0[1-9]|[12]\\d|3[01])(0[13578]|1[02])((1[6-9]|[2-9]\\d)\\d{2}))|((0[1-9]|[12]\\d|30)(0[13456789]|1[012])((1[6-9]|[2-9]\\d)\\d{2}))|((0[1-9]|1\\d|2[0-8])02((1[6-9]|[2-9]\\d)\\d{2}))|(2902((1[6-9]|[2-9]\\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/\r\n    if(value.length==6){\r\n        value = '20'+value;\r\n    } \r\n    date = value.replace(/^(.{4})(.{2})(.{2})$/,'$3$2$1');\r\n\r\n    if(!regex.test(date) || value.length !== 8){\r\n        return [{\r\n            type: \"error\",\r\n            message: `${value}. invalid date format: YYYYMMDD or YYMMDD or +`\r\n        }]\r\n    }\r\n}",
                        "arguments": {}
                    },
                    "value_broadcast": "",
                    "field_setting": {
                        "field_id": "5ef094a7d13964435a41c522",
                        "visible": true,
                        "disable": false,
                        "dynamic_by_field": {
                            "effect": "invisible",
                            "groups": [
                                [
                                    {
                                        "value": [
                                            "true"
                                        ],
                                        "section": "Table",
                                        "rule": "must_equal",
                                        "field": "rc_step_status"
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
                    "_id": "5ef094a7d13964435a41c518",
                    "name": "have_korea_words",
                    "project_id": "5ed862865b721b00142ebaaa",
                    "argument_details": [
                        "true"
                    ],
                    "control_type": "COMBOBOX",
                    "counted_character": false,
                    "default_value": "",
                    "field_display": "Have Korea Words",
                    "is_list": false,
                    "last_modified": "2020-06-22T12:56:56.184Z",
                    "lookup_broadcast": [],
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
                    "pattern": {
                        "name": "",
                        "arguments": {},
                        "content": ""
                    },
                    "rule_transform": {
                        "name": "",
                        "arguments": {},
                        "content": ""
                    },
                    "text_type": "",
                    "tooltip": "",
                    "validation": {
                        "name": "",
                        "content": "value = value+\"\"\n\nif(value != \"\" && value != \"true\"){\n    return [{\n        type: \"error\",\n        message: \"chỉ được nhập 'true' hoặc để rỗng\"\n    }]\n}",
                        "arguments": {}
                    },
                    "value_broadcast": "",
                    "field_setting": {
                        "field_id": "5ef094a7d13964435a41c518",
                        "visible": true,
                        "disable": false,
                        "dynamic_by_field": {
                            "effect": "invisible",
                            "groups": [
                                [
                                    {
                                        "value": [
                                            "true"
                                        ],
                                        "section": "Table",
                                        "rule": "must_equal",
                                        "field": "rc_step_status"
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
                    "_id": "5ef094a7d13964435a41c52a",
                    "name": "rd_edi_code",
                    "project_id": "5ed862865b721b00142ebaaa",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Edi code",
                    "is_list": false,
                    "last_modified": "2020-06-22T11:23:19.527Z",
                    "lookup_broadcast": [],
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
                    "pattern": {
                        "name": "",
                        "arguments": {},
                        "content": ""
                    },
                    "rule_transform": {
                        "name": "",
                        "arguments": {},
                        "content": "function upper(input){\r\n\r\n\t\tinput = input.toUpperCase();\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn upper(value);",
                        "created_date": "2020-04-27T07:08:22.358Z",
                        "last_modified": "2020-04-27T07:09:29.160Z",
                        "id": "5ea684e696527c001be0c516"
                    },
                    "text_type": "",
                    "tooltip": "",
                    "validation": {
                        "name": "",
                        "content": "value = value+\"\";\r\nif(value === \"\" && kword !== 'true'){\r\n        return [{type : \"error\",\r\n        message :`Field rỗng!`\r\n    }]\r\n}\r\n\r\nif(value.length > 45){\r\n        return [{type : \"error\",\r\n        message :`${value.length} char. Data length  <= 45`\r\n    }]\r\n}\r\n",
                        "arguments": {
                            "kword": "have_korea_words"
                        }
                    },
                    "value_broadcast": "",
                    "field_setting": {
                        "field_id": "5ef094a7d13964435a41c52a",
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
                    "_id": "5ef094a7d13964435a41c51c",
                    "name": "rd_amount",
                    "project_id": "5ed862865b721b00142ebaaa",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Amount",
                    "is_list": false,
                    "last_modified": "2020-06-22T11:23:19.527Z",
                    "lookup_broadcast": [],
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
                    "pattern": {
                        "name": "",
                        "arguments": {},
                        "content": ""
                    },
                    "rule_transform": {
                        "name": "",
                        "arguments": {},
                        "content": ""
                    },
                    "text_type": "",
                    "tooltip": "",
                    "validation": {
                        "name": "",
                        "content": "value = value+\"\";\r\nif(value === \"\"){\r\n        return [{type : \"error\",\r\n        message :`Không được để field trống!`\r\n    }]\r\n}\r\nlet regex_num = /^-?[0-9]+([0-9]{1,3})*$/\r\nif(!regex_num.test(value)){\r\n        return [{type : \"error\",\r\n        message :`Format Integer number invalid. Ex: 1234...`\r\n    }]\r\n}\r\n",
                        "arguments": {}
                    },
                    "value_broadcast": "",
                    "field_setting": {
                        "field_id": "5ef094a7d13964435a41c51c",
                        "visible": true,
                        "disable": false,
                        "dynamic_by_field": {
                            "effect": "invisible",
                            "groups": [
                                [
                                    {
                                        "value": [
                                            "true"
                                        ],
                                        "section": "Table",
                                        "rule": "must_equal",
                                        "field": "rc_step_status"
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
                    "_id": "5ef094a7d13964435a41c520",
                    "name": "rd_count",
                    "project_id": "5ed862865b721b00142ebaaa",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Count",
                    "is_list": false,
                    "last_modified": "2020-06-22T11:23:19.527Z",
                    "lookup_broadcast": [],
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
                    "pattern": {
                        "name": "",
                        "arguments": {},
                        "content": ""
                    },
                    "rule_transform": {
                        "name": "",
                        "arguments": {},
                        "content": ""
                    },
                    "text_type": "",
                    "tooltip": "",
                    "validation": {
                        "name": "",
                        "content": "value = value+\"\";\r\nif(value === \"\"){\r\n        return [{type : \"error\",\r\n        message :`Không được để field trống!`\r\n    }]\r\n}\r\nlet regex_num = /^-?[0-9]{1,7}(\\.[0-9]{1,4})*$/\r\nif(!regex_num.test(value)){\r\n        return [{type : \"error\",\r\n        message :`Format Float(7,4) invalid. For example, 2.0000, 1.50, 1.0, 3, etc`\r\n    }]\r\n}\r\n",
                        "arguments": {}
                    },
                    "value_broadcast": "",
                    "field_setting": {
                        "field_id": "5ef094a7d13964435a41c520",
                        "visible": true,
                        "disable": false,
                        "dynamic_by_field": {
                            "effect": "invisible",
                            "groups": [
                                [
                                    {
                                        "value": [
                                            "true"
                                        ],
                                        "section": "Table",
                                        "rule": "must_equal",
                                        "field": "rc_step_status"
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
                    "_id": "5ef094a7d13964435a41c528",
                    "name": "rd_days",
                    "project_id": "5ed862865b721b00142ebaaa",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Days",
                    "is_list": false,
                    "last_modified": "2020-06-22T11:23:19.527Z",
                    "lookup_broadcast": [],
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
                    "pattern": {
                        "name": "",
                        "arguments": {},
                        "content": ""
                    },
                    "rule_transform": {
                        "name": "",
                        "arguments": {},
                        "content": ""
                    },
                    "text_type": "",
                    "tooltip": "",
                    "validation": {
                        "name": "",
                        "content": "value = value+\"\"\r\nif(value === \"\"){\r\n        return [{type : \"error\",\r\n        message :`Không được để field trống!`\r\n    }]\r\n}else{\r\n    let regex = /^[0-9]+$/\r\n    if(!regex.test(value)){\r\n        return [{\r\n            type: \"error\",\r\n            message: `${value} - Integer Number invalid`\r\n        }]\r\n    }\r\n}",
                        "arguments": {}
                    },
                    "value_broadcast": "",
                    "field_setting": {
                        "field_id": "5ef094a7d13964435a41c528",
                        "visible": true,
                        "disable": false,
                        "dynamic_by_field": {
                            "effect": "invisible",
                            "groups": [
                                [
                                    {
                                        "value": [
                                            "true"
                                        ],
                                        "section": "Table",
                                        "rule": "must_equal",
                                        "field": "rc_step_status"
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
                    "_id": "5ef094a7d13964435a41c53a",
                    "name": "rd_total_amount",
                    "project_id": "5ed862865b721b00142ebaaa",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Total amount",
                    "is_list": false,
                    "last_modified": "2020-06-22T11:23:19.528Z",
                    "lookup_broadcast": [],
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
                    "pattern": {
                        "name": "",
                        "arguments": {},
                        "content": ""
                    },
                    "rule_transform": {
                        "name": "",
                        "arguments": {},
                        "content": ""
                    },
                    "text_type": "",
                    "tooltip": "",
                    "validation": {
                        "name": "",
                        "content": "let _amount = (amount+\"\" === \"\") ? 0 : amount*1;\r\nlet _count = (count+\"\" === \"\") ? 0 : count*1;\r\nlet _day = (day+\"\" === \"\") ? 0 : day*1;\r\nlet _total_amount = (value+\"\" === \"\") ? 0 : value*1;\r\n\r\nlet checksum = _amount*_count*_day;\r\nchecksum = parseFloat(checksum).toFixed(4);\r\n_total_amount = parseFloat(_total_amount).toFixed(4);\r\n\r\nif(checksum !== _total_amount){\r\n    let msg = [{\r\n        type:\"warning\",\r\n        message: `Value: ${_total_amount}. Checksum: ${checksum}. Vui lòng kiểm tra kỹ trước khi save`\r\n    }]\r\n    //console.log(msg)\r\n    return msg;\r\n}\r\n\r\nlet _nonsalary = parseFloat(non_salary).toFixed(4);\r\n\r\n\r\nif(_nonsalary !== _total_amount){\r\n    let msg = [{\r\n        type:\"warning\",\r\n        message: `Value: ${_nonsalary}. Total_Amount: ${_total_amount}. Vui lòng kiểm tra kỹ trước khi save`\r\n    }]\r\n    //console.log(msg)\r\n    return msg;\r\n}",
                        "arguments": {
                            "amount": "rd_amount",
                            "count": "rd_count",
                            "day": "rd_days",
                            "non_salary": "rd_non_salary"
                        }
                    },
                    "value_broadcast": "",
                    "field_setting": {
                        "field_id": "5ef094a7d13964435a41c53a",
                        "visible": true,
                        "disable": false,
                        "dynamic_by_field": {
                            "effect": "invisible",
                            "groups": [
                                [
                                    {
                                        "value": [
                                            "true"
                                        ],
                                        "section": "Table",
                                        "rule": "must_equal",
                                        "field": "rc_step_status"
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
                    "_id": "5ef094a7d13964435a41c516",
                    "name": "note",
                    "project_id": "5ed862865b721b00142ebaaa",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Note",
                    "is_list": false,
                    "last_modified": "2020-06-22T11:23:19.526Z",
                    "lookup_broadcast": [],
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
                    "pattern": {
                        "name": "",
                        "arguments": {},
                        "content": ""
                    },
                    "rule_transform": {
                        "name": "",
                        "arguments": {},
                        "content": ""
                    },
                    "tooltip": "",
                    "validation": {
                        "name": "",
                        "content": "",
                        "arguments": {}
                    },
                    "value_broadcast": "",
                    "field_setting": {
                        "field_id": "5ef094a7d13964435a41c516",
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
                    "_id": "5ef094a7d13964435a41c51a",
                    "name": "rc_step_status",
                    "project_id": "5ed862865b721b00142ebaaa",
                    "argument_details": [
                        "true"
                    ],
                    "control_type": "COMBOBOX",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "rc_step_status",
                    "is_list": false,
                    "last_modified": "2020-06-22T11:23:19.526Z",
                    "lookup_broadcast": [],
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
                    "pattern": {
                        "name": "",
                        "arguments": {},
                        "content": ""
                    },
                    "rule_transform": {
                        "name": "",
                        "arguments": {},
                        "content": ""
                    },
                    "tooltip": "",
                    "validation": {
                        "name": "",
                        "content": "",
                        "arguments": {}
                    },
                    "value_broadcast": "",
                    "field_setting": {
                        "field_id": "5ef094a7d13964435a41c51a",
                        "visible": false,
                        "disable": false,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
                        "argument_details": [
                            {
                                "value": "TRUE"
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
                    "visible": false,
                    "disable": false,
                    "double_typing": false
                }
            ],
            "id": "5ef094a7d13964435a41c575"
        }
    ]
}
