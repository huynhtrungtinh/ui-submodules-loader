export const getDataSection_067 = () => {
    return [
        {
            "name": "Categories",
            "layout_name": "Keying",
            "index": 0,
            "layout_id": "5ce25701612a670018d9d720",
            "is_multiple": false,
            "position": {},
            "settings": {
                "is_multiple": false,
                "fieldId": "",
                "autoIncrement": "",
                "autoIncrementStart": ""
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
                    "_id": "5ce253ff612a670018d9d714",
                    "name": "Polygon",
                    "field_display": "Polygon",
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
                        "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);"
                    },
                    "lookup_broadcast": [],
                    "value_broadcast": "",
                    "argument_details": [],
                    "project_id": "5ce253e9612a670018d9d70d",
                    "created_date": "2019-05-20T07:15:11.943Z",
                    "last_modified": "2019-05-22T04:07:23.987Z",
                    "field_setting": {
                        "field_id": "5ce253ff612a670018d9d714",
                        "visible": true,
                        "disable": true,
                        "switch_disable": false,
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
                    "disable": true,
                    "double_typing": false
                },
                {
                    "_id": "5ce253ff612a670018d9d716",
                    "name": "Store_Categories",
                    "field_display": "Store Categories",
                    "default_value": "",
                    "control_type": "TEXTFIELD",
                    "tooltip": "",
                    "is_list": false,
                    "counted_character": true,
                    "pattern": {
                        "name": "",
                        "arguments": {},
                        "content": "^(\\s*|[a-zA-Z0-9äöüäáöüćäáöüćáčďéěíňóřšťůúýžáéíóöőúüűąćęłńóśźżăâîşţáäčďéíĺľňóôŕšťúýžàâæçéèêëîïœôùûüÿåæøáªéíñó°úßßßėęųūįçšõčšžõöäüилпλчянбктьÀÆÇĎđėÊËĕēęġĝğģĢĥÏĭīĩĮįĵķĺľļłńňÑņŕřŗŤťţÚÙÛŭūũůųűŵÝýŷÿźżą ßÄÜÖţţţŢŢŢæîăĂÄÖÖÄÜÜŽžą ÁĄĂÂÅĆČÉĚĘÈŇŃИЛПŅÓŐÔŒØÕŘŔЯŖŠŚŞŮŰŲŪŨŴŶŸŹŻẽẽçãĀā\\,\\.\\-\\(\\)\\;\\:\\'\\&\\= ]{0,20})$",
                        "description": "ffff"
                    },
                    "lookup_source": {
                        "allow_multiple": false,
                        "characters_trigger_lookup": 1,
                        "group_project": "production",
                        "key_value": "main_category",
                        "locale": [
                            "067_190510_013_Store_Front_Attr_Anno"
                        ],
                        "lookup_after_time": 1,
                        "lookup_field": "maincategory",
                        "name": "",
                        "param_set": "var value = data.Store_Categories.split(' '); return [value[value.length - 1],value.join(' ')]",
                        "result_view_config": [
                            {
                                "title": "Categories",
                                "key_value": "main_category"
                            }
                        ],
                        "related_columns": [],
                        "specific_project": "0"
                    },
                    "validation": {
                        "name": "",
                        "content": "if (value){\nasync function checkValidation(value) {\n        let dataLookup =  await fetchJSON(`https://lookups.digi-texx.vn/lookups/production/067_190510_013_Store_Front_Attr_Anno/0/maincategory/[%22${value}%22,%22${value}%22]`);\n        if (!Array.isArray(dataLookup.json_single)||dataLookup.json_single.map(item => item.main_category).findIndex(item => item === value) === -1) {\n                        return [{\n                          type: \"error\",\n                          message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\n                        }]\n                     }\n        // if(value.toLowerCase().includes('nhhien'))             \n        //              return[{ \n        //                   type: 'warning',\n        //                   message: `Lookup warning value:${value}`}];\n}\nreturn await checkValidation(value);\n}",
                        "arguments": {}
                    },
                    "rule_transform": {
                        "name": "",
                        "arguments": {},
                        "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);"
                    },
                    "lookup_broadcast": [],
                    "value_broadcast": "",
                    "argument_details": [],
                    "project_id": "5ce253e9612a670018d9d70d",
                    "created_date": "2019-05-20T07:15:11.943Z",
                    "last_modified": "2019-07-03T06:13:32.660Z",
                    "field_setting": {
                        "field_id": "5ce253ff612a670018d9d716",
                        "visible": true,
                        "disable": false,
                        "switch_disable": false,
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
                    "_id": "5ce253ff612a670018d9d712",
                    "name": "Open_Close",
                    "field_display": "Open / Close",
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
                    "project_id": "5ce253e9612a670018d9d70d",
                    "created_date": "2019-05-20T07:15:11.943Z",
                    "last_modified": "2019-05-20T07:15:11.943Z",
                    "field_setting": {
                        "field_id": "5ce253ff612a670018d9d712",
                        "visible": true,
                        "disable": true,
                        "switch_disable": false,
                        "double_typing": false,
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
                    "disable": true,
                    "double_typing": false
                },
                {
                    "_id": "5ce253ff612a670018d9d719",
                    "name": "Wheelchair_accessibility",
                    "field_display": "Wheelchair accessibility",
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
                    "text_type": "",
                    "project_id": "5ce253e9612a670018d9d70d",
                    "created_date": "2019-05-20T07:15:11.943Z",
                    "last_modified": "2019-05-20T07:15:11.943Z",
                    "field_setting": {
                        "field_id": "5ce253ff612a670018d9d719",
                        "visible": true,
                        "disable": true,
                        "switch_disable": false,
                        "double_typing": false,
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
                    "disable": true,
                    "double_typing": false
                },
                {
                    "_id": "5ce253ff612a670018d9d70e",
                    "name": "Awning_shade",
                    "field_display": "Awning (shade)",
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
                    "project_id": "5ce253e9612a670018d9d70d",
                    "created_date": "2019-05-20T07:15:11.943Z",
                    "last_modified": "2019-05-22T04:06:39.089Z",
                    "field_setting": {
                        "field_id": "5ce253ff612a670018d9d70e",
                        "visible": true,
                        "disable": true,
                        "switch_disable": false,
                        "double_typing": false,
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
                    "disable": true,
                    "double_typing": false
                }
            ],
            "id": "5ce25701612a670018d9d721"
        },
        {
            "name": "Sub-Categories",
            "layout_name": "Keying",
            "index": 1,
            "layout_id": "5ce25701612a670018d9d720",
            "is_multiple": true,
            "position": {},
            "settings": {
                "is_multiple": true,
                "fieldId": null,
                "autoIncrement": "",
                "autoIncrementStart": ""
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
                    "_id": "5ce253ff612a670018d9d717",
                    "name": "Store_Sub_Categories",
                    "field_display": "Store Sub-Categories",
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
                        "key_value": "sub_category",
                        "locale": [
                            "067_190510_013_Store_Front_Attr_Anno"
                        ],
                        "lookup_after_time": 1,
                        "lookup_field": "subcategory",
                        "name": "",
                        "param_set": "var main = data.Store_Categories.trim(); var sub = data.Store_Sub_Categories.trim();  return [main,sub]",
                        "result_view_config": [
                            {
                                "title": "Sub Categories",
                                "key_value": "sub_category"
                            }
                        ],
                        "related_columns": [],
                        "specific_project": "0"
                    },
                    "validation": {
                        "name": "",
                        "content": "let main_store ='';\ntry {\n    main_store = arguments[5].Categories[0].Store_Categories.text\n} catch (e) {}\n\nif (value){\nasync function checkValidation(value) {\n        let dataLookup =  await fetchJSON(`https://lookups.digi-texx.vn/lookups/production/067_190510_013_Store_Front_Attr_Anno/0/subcategory/[%22${main_store}%22,%22${value}%22]`);\n        if (!Array.isArray(dataLookup.json_single)||dataLookup.json_single.map(item => item.sub_category).findIndex(item => item === value) === -1) {\n                        return [{\n                          type: \"error\",\n                          message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\n                        }]\n                     }\n        // if(value.toLowerCase().includes('nhhien'))             \n        //              return[{ \n        //                   type: 'warning',\n        //                   message: `Lookup warning value:${value}`}];\n}\nreturn await checkValidation(value);\n}",
                        "arguments": {}
                    },
                    "rule_transform": {
                        "name": "",
                        "arguments": {},
                        "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\t\tinput = input.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'-');\r\n\t\tinput = input.replace(/[\\s\\t]*(\\()[\\s\\t]*/g,' (');\r\n\t\tinput = input.replace(/[\\s\\t]*(\\))[\\s\\t]*/g,') ');\r\n\t\tinput = input.replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'/');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);"
                    },
                    "lookup_broadcast": [],
                    "value_broadcast": "",
                    "argument_details": [],
                    "project_id": "5ce253e9612a670018d9d70d",
                    "created_date": "2019-05-20T07:15:11.943Z",
                    "last_modified": "2019-05-31T02:50:37.533Z",
                    "field_setting": {
                        "field_id": "5ce253ff612a670018d9d717",
                        "visible": true,
                        "disable": false,
                        "dynamic_by_field": {
                            "effect": "visible",
                            "groups": [
                                [
                                    {
                                        "value": "Restaurant;Café;Shop",
                                        "section": "Categories",
                                        "rule": "must_equal",
                                        "field": "Store_Categories"
                                    }
                                ]
                            ]
                        },
                        "switch_disable": false,
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
            "id": "5ce25702612a670018d9d722"
        },
        {
            "name": "Specific",
            "layout_name": "Keying",
            "index": 2,
            "layout_id": "5ce25701612a670018d9d720",
            "is_multiple": false,
            "position": {},
            "settings": {
                "is_multiple": false
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
                    "_id": "5ce253ff612a670018d9d718",
                    "name": "Terrace",
                    "field_display": "Terrace",
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
                    "project_id": "5ce253e9612a670018d9d70d",
                    "created_date": "2019-05-20T07:15:11.943Z",
                    "last_modified": "2019-05-20T07:15:11.943Z",
                    "field_setting": {
                        "field_id": "5ce253ff612a670018d9d718",
                        "visible": true,
                        "disable": false,
                        "dynamic_by_field": {
                            "effect": "visible",
                            "groups": [
                                [
                                    {
                                        "value": "Restaurant;Café",
                                        "section": "Categories",
                                        "rule": "must_equal",
                                        "field": "Store_Categories"
                                    }
                                ]
                            ]
                        },
                        "double_typing": false,
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
                    "_id": "5ce253ff612a670018d9d710",
                    "name": "Live_sports",
                    "field_display": "Live sports",
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
                    "project_id": "5ce253e9612a670018d9d70d",
                    "created_date": "2019-05-20T07:15:11.943Z",
                    "last_modified": "2019-05-20T07:15:11.943Z",
                    "field_setting": {
                        "field_id": "5ce253ff612a670018d9d710",
                        "visible": true,
                        "disable": false,
                        "dynamic_by_field": {
                            "effect": "visible",
                            "groups": [
                                [
                                    {
                                        "value": "Restaurant; Café",
                                        "section": "Categories",
                                        "rule": "must_equal",
                                        "field": "Store_Categories"
                                    }
                                ]
                            ]
                        },
                        "double_typing": false,
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
                    "_id": "5ce253ff612a670018d9d71a",
                    "name": "Wifi",
                    "field_display": "Wifi",
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
                    "project_id": "5ce253e9612a670018d9d70d",
                    "created_date": "2019-05-20T07:15:11.943Z",
                    "last_modified": "2019-05-20T07:15:11.943Z",
                    "field_setting": {
                        "field_id": "5ce253ff612a670018d9d71a",
                        "visible": true,
                        "disable": false,
                        "dynamic_by_field": {
                            "effect": "visible",
                            "groups": [
                                [
                                    {
                                        "value": "Restaurant; Café",
                                        "section": "Categories",
                                        "rule": "must_equal",
                                        "field": "Store_Categories"
                                    }
                                ]
                            ]
                        },
                        "double_typing": false,
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
                    "_id": "5ce253ff612a670018d9d70f",
                    "name": "Deliveries",
                    "field_display": "Deliveries",
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
                    "project_id": "5ce253e9612a670018d9d70d",
                    "created_date": "2019-05-20T07:15:11.943Z",
                    "last_modified": "2019-05-20T07:15:11.943Z",
                    "field_setting": {
                        "field_id": "5ce253ff612a670018d9d70f",
                        "visible": true,
                        "disable": false,
                        "dynamic_by_field": {
                            "effect": "visible",
                            "groups": [
                                [
                                    {
                                        "value": "Restaurant; Café",
                                        "section": "Categories",
                                        "rule": "must_equal",
                                        "field": "Store_Categories"
                                    }
                                ]
                            ]
                        },
                        "double_typing": false,
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
                }
            ],
            "id": "5ce25afc2577100017ca2dac"
        },
        {
            "name": "Payment",
            "layout_name": "Keying",
            "index": 3,
            "layout_id": "5ce25701612a670018d9d720",
            "is_multiple": true,
            "position": {},
            "settings": {
                "is_multiple": true,
                "fieldId": "",
                "autoIncrement": "",
                "autoIncrementStart": ""
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
                    "_id": "5ce253ff612a670018d9d713",
                    "name": "Payment",
                    "field_display": "Payment",
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
                        "Credit Card",
                        "American Express"
                    ],
                    "project_id": "5ce253e9612a670018d9d70d",
                    "created_date": "2019-05-20T07:15:11.943Z",
                    "last_modified": "2019-06-10T02:38:34.271Z",
                    "field_setting": {
                        "field_id": "5ce253ff612a670018d9d713",
                        "visible": true,
                        "disable": false,
                        "dynamic_by_field": null,
                        "switch_disable": false,
                        "double_typing": false,
                        "argument_details": [
                            {
                                "value": "Credit Card"
                            },
                            {
                                "value": "Visa or MasterCard"
                            },
                            {
                                "value": "American Express"
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
                }
            ],
            "id": "5ce7b0a6a8d506001e7f5dc0"
        },
        {
            "name": "Recommendation Stickers",
            "layout_name": "Keying",
            "index": 4,
            "layout_id": "5ce25701612a670018d9d720",
            "is_multiple": true,
            "position": {},
            "settings": {
                "is_multiple": true,
                "fieldId": "",
                "autoIncrement": "",
                "autoIncrementStart": ""
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
                    "_id": "5ce253ff612a670018d9d715",
                    "name": "Recommendation_stickers",
                    "field_display": "Recommendation stickers",
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
                        "Le Routard",
                        "Trip advisor",
                        "Michelin",
                        "Lonely planet",
                        "Petit futé",
                        "Gault & Millau"
                    ],
                    "project_id": "5ce253e9612a670018d9d70d",
                    "created_date": "2019-05-20T07:15:11.943Z",
                    "last_modified": "2019-05-20T07:15:11.943Z",
                    "field_setting": {
                        "field_id": "5ce253ff612a670018d9d715",
                        "visible": true,
                        "disable": false,
                        "dynamic_by_field": {
                            "effect": "visible",
                            "groups": [
                                [
                                    {
                                        "value": "Restaurant;Café",
                                        "section": "Categories",
                                        "rule": "must_equal",
                                        "field": "Store_Categories"
                                    }
                                ]
                            ]
                        },
                        "switch_disable": false,
                        "double_typing": false,
                        "argument_details": [
                            {
                                "value": "Le Routard"
                            },
                            {
                                "value": "Trip advisor"
                            },
                            {
                                "value": "Michelin"
                            },
                            {
                                "value": "Lonely planet"
                            },
                            {
                                "value": "Petit futé"
                            },
                            {
                                "value": "Gault & Millau"
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
                }
            ],
            "id": "5ce7b413a8d506001e7f5dc1"
        },
        {
            "name": "Lunch Vouchers",
            "layout_name": "Keying",
            "index": 5,
            "layout_id": "5ce25701612a670018d9d720",
            "is_multiple": true,
            "position": {},
            "settings": {
                "is_multiple": true,
                "fieldId": "",
                "autoIncrement": "",
                "autoIncrementStart": ""
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
                    "_id": "5ce253ff612a670018d9d711",
                    "name": "Lunch_vouchers",
                    "field_display": "Lunch vouchers",
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
                        "Ticket Restaurant",
                        "Chèque Déjeuner",
                        "Chèque restaurant",
                        "Chèque de table"
                    ],
                    "project_id": "5ce253e9612a670018d9d70d",
                    "created_date": "2019-05-20T07:15:11.943Z",
                    "last_modified": "2019-05-20T07:15:11.943Z",
                    "field_setting": {
                        "field_id": "5ce253ff612a670018d9d711",
                        "visible": true,
                        "disable": false,
                        "dynamic_by_field": {
                            "effect": "visible",
                            "groups": [
                                [
                                    {
                                        "value": "Restaurant;Café",
                                        "section": "Categories",
                                        "rule": "must_equal",
                                        "field": "Store_Categories"
                                    }
                                ]
                            ]
                        },
                        "switch_disable": false,
                        "double_typing": false,
                        "argument_details": [
                            {
                                "value": "Ticket Restaurant"
                            },
                            {
                                "value": "Chèque Déjeuner"
                            },
                            {
                                "value": "Chèque restaurant"
                            },
                            {
                                "value": "Chèque de table"
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
                }
            ],
            "id": "5ce7b41b2de3700020aa2f8f"
        }
    ]
}