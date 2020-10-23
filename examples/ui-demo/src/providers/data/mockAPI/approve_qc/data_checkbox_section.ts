
export const data_checkbox_section = () => {
    return [
        {
            "name": "Invoice",
            "layout_name": "Invoice",
            "index": 0,
            "layout_id": "5eb27b047250577ca9b5bba1",
            "is_multiple": false,
            "position": {},
            "settings": {
                "is_multiple": false,
                "fieldId": "",
                "sectionsSync": "",
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
                    "_id": "5eb27b047250577ca9b5bb97",
                    "name": "gioitinh",
                    "project_id": "5eb27a96ae6f27001bb9e338",
                    "argument_details": [
                        "Nam",
                        "Nữ",
                        "Others"
                    ],
                    "control_type": "RADIOBUTTON",
                    "counted_character": true,
                    "default_value": "Nam",
                    "field_display": "Giới tính của bạn",
                    "is_list": false,
                    "last_modified": "2020-05-06T08:53:39.430Z",
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
                        "field_id": "5eb27b047250577ca9b5bb97",
                        "visible": true,
                        "disable": false,
                        "double_typing": false,
                        "argument_details": [
                            {
                                "value": "Nam"
                            },
                            {
                                "value": "Nữ"
                            },
                            {
                                "value": "Others"
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
                    "_id": "5eb27b047250577ca9b5bb81",
                    "name": "Company_name",
                    "project_id": "5eb27a96ae6f27001bb9e338",
                    "argument_details": [
                        "Thomas Beton GmbH",
                        "Thomas Sand und Kies GmbH / KGS Kiesgewinnungsgesellschaft mbH",
                        "Renne Kies- und Sandwerk Bremen GmbH"
                    ],
                    "control_type": "COMBOBOX",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Company name (receiver)",
                    "is_list": false,
                    "last_modified": "2020-05-06T08:53:39.429Z",
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
                        "name": "removeSpace_transform",
                        "arguments": {},
                        "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                        "created_date": "2019-11-28T07:25:37.362Z",
                        "last_modified": "2019-11-28T07:25:37.362Z",
                        "id": "5ddf7671dedee200147c15f9"
                    },
                    "tooltip": "",
                    "validation": {
                        "name": "",
                        "content": "if(!value){\n    return [{type : \"warning\",\n        message :\"Company Name Rỗng, cần kiểm tra lại!\"\n    }]\n}",
                        "arguments": {}
                    },
                    "value_broadcast": "",
                    "field_setting": {
                        "field_id": "5eb27b047250577ca9b5bb81",
                        "visible": true,
                        "disable": false,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
                        "argument_details": [
                            {
                                "value": "Thomas Beton GmbH"
                            },
                            {
                                "value": "Thomas Sand und Kies GmbH / KGS Kiesgewinnungsgesellschaft mbH"
                            },
                            {
                                "value": "Renne Kies- und Sandwerk Bremen GmbH"
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
                    "_id": "5eb27b047250577ca9b5bb9e",
                    "name": "sothich",
                    "project_id": "5eb27a96ae6f27001bb9e338",
                    "argument_details": [
                        "Nghe nhạc",
                        "Xem phim",
                        "Du lịch",
                        "Others"
                    ],
                    "control_type": "CHECKBOX",
                    "counted_character": true,
                    "default_value": "Du lịch",
                    "field_display": "Sở thích của bạn",
                    "is_list": true,
                    "last_modified": "2020-05-06T08:53:39.431Z",
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
                        "field_id": "5eb27b047250577ca9b5bb9e",
                        "visible": true,
                        "disable": false,
                        "double_typing": false,
                        "argument_details": [
                            {
                                "value": "Nghe nhạc"
                            },
                            {
                                "value": "Xem phim"
                            },
                            {
                                "value": "Du lịch"
                            },
                            {
                                "value": "Others"
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
                    "_id": "5eb27b047250577ca9b5bb8d",
                    "name": "Supplier_ID",
                    "project_id": "5eb27a96ae6f27001bb9e338",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Supplier ID",
                    "is_list": false,
                    "last_modified": "2020-05-06T08:53:39.430Z",
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
                        "name": "removeSpace_transform",
                        "arguments": {},
                        "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                        "created_date": "2019-11-28T07:25:37.362Z",
                        "last_modified": "2019-11-28T07:25:37.362Z",
                        "id": "5ddf7671dedee200147c15f9"
                    },
                    "tooltip": "",
                    "validation": {
                        "name": "freeTexx_FixCharacter",
                        "arguments": {},
                        "content": "var regex1 = /^.{0,30}$/g\n\nif(regex1.test(value) && (value.includes(';')) || !regex1.test(value) && (value.includes(';'))){\n    \n    return [{type : \"error\" , message : \"Không được nhập dấu ; \"}]\n}\n\nif(!regex1.test(value)){\n    \n    return [{type : \"error\" , message : \"Chỉ được nhập 30 ký tự\"}]\n}\n\nif(value.startsWith(\"DE\")){\nvar regexID = /^(DE)[0-9]{9}$/g\n    \n    if(!regexID.test(value)){\n        return [{type : \"error\" , message : \"Nhập không đúng định dạng số VAT\"}]\n    }\n}\n",
                        "created_date": "2020-02-06T07:54:20.933Z",
                        "last_modified": "2020-02-06T07:54:20.933Z",
                        "id": "5e3bc62cfeed4a001e991cf7"
                    },
                    "value_broadcast": "",
                    "field_setting": {
                        "field_id": "5eb27b047250577ca9b5bb8d",
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
                    "_id": "5eba4d90898352001baffd5c",
                    "name": "Nguoiyeu",
                    "field_display": "Bạn đã có người yêu chưa ?",
                    "default_value": "",
                    "control_type": "RADIOBUTTON",
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
                    "project_id": "5eb27a96ae6f27001bb9e338",
                    "created_date": "2020-05-12T07:17:36.518Z",
                    "last_modified": "2020-05-12T07:17:36.518Z",
                    "field_setting": {
                        "field_id": "5eba4d90898352001baffd5c",
                        "visible": true,
                        "disable": false,
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
                    "_id": "5eb27b047250577ca9b5bb8f",
                    "name": "Supplier_Invoice_No",
                    "project_id": "5eb27a96ae6f27001bb9e338",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Supplier Invoice No",
                    "is_list": false,
                    "last_modified": "2020-05-06T08:53:39.430Z",
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
                        "name": "removeSpace_transform",
                        "arguments": {},
                        "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                        "created_date": "2019-11-28T07:25:37.362Z",
                        "last_modified": "2019-11-28T07:25:37.362Z",
                        "id": "5ddf7671dedee200147c15f9"
                    },
                    "tooltip": "",
                    "validation": {
                        "name": "",
                        "content": "var regex1 = /^.{0,30}$/g\r\n\r\nif(regex1.test(value) && (value.includes(';')) || !regex1.test(value) && (value.includes(';'))){\r\n    \r\n    return [{type : \"error\" , message : \"Không được nhập dấu ; \"}]\r\n}\r\n\r\nif(!regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ được nhập 30 ký tự\"}]\r\n}",
                        "arguments": {}
                    },
                    "value_broadcast": "",
                    "field_setting": {
                        "field_id": "5eb27b047250577ca9b5bb8f",
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
                    "_id": "5eba4e5b898352001baffd5e",
                    "name": "khoangcach",
                    "field_display": "Bạn mong muốn tìm công ty khoảng cách bao xa tính từ nhà của bạn ?",
                    "default_value": "",
                    "control_type": "CHECKBOX",
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
                        "1 km",
                        "2km",
                        "3km",
                        "5km"
                    ],
                    "project_id": "5eb27a96ae6f27001bb9e338",
                    "created_date": "2020-05-12T07:20:59.920Z",
                    "last_modified": "2020-05-12T07:20:59.920Z",
                    "field_setting": {
                        "field_id": "5eba4e5b898352001baffd5e",
                        "visible": true,
                        "disable": false,
                        "double_typing": false,
                        "argument_details": [
                            {
                                "value": "1 km"
                            },
                            {
                                "value": "2km"
                            },
                            {
                                "value": "3km"
                            },
                            {
                                "value": "5km"
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
                    "_id": "5eb27b047250577ca9b5bb87",
                    "name": "Invoice_Date",
                    "project_id": "5eb27a96ae6f27001bb9e338",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Invoice Date",
                    "is_list": false,
                    "last_modified": "2020-05-06T08:53:39.429Z",
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
                        "name": "Date_transform",
                        "arguments": {},
                        "content": "    var regex1 = /^\\d{6}$/;\n    \nfunction removeSpace(input){\n    var regex = /^(?:(?:31(|\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(|\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(|\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(|\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$/\n\tif(regex.test(input)){\n\t\tinput = input.replace(/([0-9]{2})([0-9]{2})([0-9]{4})/,'$1$2$3') + '';\n\t}\n\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\n\n\tinput = input.trim();\n\n\treturn input;\n}\nfunction chkDate(date){\n\tvar dd = date.substring(0,2);\n\tvar mm = date.substring(2,4);\n\tvar yy = date.substring(4,6);\n\tvar tmpDate = new Date();\n\tvar y = tmpDate.getFullYear()+\"\";\n\ty = y.substring(2,4)*1 + 1;\n\n\t//Gan gia tri nam la 19YY neu YY > nam hien tai + 1\n\t//Gan gia tri nam la 20YY neu YY <= nam hien tai + 1\n\tif(yy*1>y){ yy = 19+yy;\n\t}else {yy = 20+yy;}\n\n\treturn dd+mm+yy;\t\n}\nvalue = value.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'');\nif(value.length === 6){\n    return chkDate(value)}\nreturn removeSpace(value);",
                        "created_date": "2019-11-28T06:52:45.384Z",
                        "last_modified": "2019-11-28T06:54:20.188Z",
                        "id": "5ddf6ebddedee200147c15f8"
                    },
                    "tooltip": "",
                    "validation": {
                        "name": "Date",
                        "arguments": {},
                        "content": "if(!value){\r\n    return [{\r\n        type : \"warning\",\r\n        message : \"Field đang trống, vui lòng kiểm tra lại\"\r\n    }]\r\n}\r\n\r\n\r\nfunction chkDate(date){\r\n\tvar dd = date.substring(0,2);\r\n\tvar mm = date.substring(2,4);\r\n\tvar yy = date.substring(4,6);\r\n\tvar tmpDate = new Date();\r\n\tvar y = tmpDate.getFullYear()+\"\";\r\n\ty = y.substring(2,4)*1 + 1;\r\n\r\n\t//Gan gia tri nam la 19YY neu YY > nam hien tai + 1\r\n\t//Gan gia tri nam la 20YY neu YY <= nam hien tai + 1\r\n\tif(yy*1>y){ yy = 19+yy;\r\n\t}else {yy = 20+yy;}\r\n\r\n\treturn dd+mm+yy;\t\r\n}\r\n\r\nfunction formatdate(ngay_hieu_luc_in78){\r\nvar fvalue = ngay_hieu_luc_in78;\r\n\tvar regex = /^(?:(?:31(|\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(|\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(|\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(|\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$/\r\n\tvar regex1 = /^\\d{6}$/;\r\n\tvar regex2 = /^(\\s*|[0-9\\.\\/\\-]{0,10})$/ ;\r\n\tvar date;\r\nif(fvalue === \"\") return ;\r\n\tif(regex1.test(fvalue))\r\n\treturn ;\r\n\tif(regex2.test(fvalue)){\r\n\t\r\n\tif(!regex.test(fvalue)){\r\n\t\treturn [{type:\"warning\",message:\"Ngày Tháng Năm không phù hợp, vui lòng kiểm tra lại.\"}]\r\n\t}\r\n}else{\r\n    return [{type:\"error\",message:\"Không đúng định dạng ddmmyyyy\"}]\r\n}\r\nfvalue = fvalue.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'');\r\nif(fvalue.length === 6){\r\n\tfvalue = chkDate(fvalue);\r\n}\r\nvar dd = fvalue.substring(0, 2);\r\nvar mm = fvalue.substring(2, 4);\r\nvar yy = fvalue.substring(4, 8);\r\nvar tmpDate = new Date();\r\nvar d = tmpDate.getDate();\r\nvar m = tmpDate.getMonth();\r\nvar y = tmpDate.getFullYear();\r\nvar inputDate = new Date(yy, mm - 1, dd);\r\nvar curDate = new Date(y, m, d);\r\n\r\n\r\nif (value.length === 4 || value.length === 5 || value.length === 7 || value.length === 9) {\r\n return [{type:\"error\", message:\"Không đúng định dạng ddmmyyyy\"}]\r\n}\r\n\r\n//So sanh ngay nhap voi ngay hien tai\r\nif (inputDate > curDate) {\r\n return [{type:\"warning\", message:\"Năm nhập lớn hơn năm hiện tại\"}]\r\n}\r\n\r\n\r\n}\r\n\r\nreturn formatdate(value);",
                        "created_date": "2019-11-28T06:50:27.116Z",
                        "last_modified": "2019-11-28T06:50:27.116Z",
                        "id": "5ddf6e33dedee200147c15f7"
                    },
                    "value_broadcast": "",
                    "field_setting": {
                        "field_id": "5eb27b047250577ca9b5bb87",
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
                    "_id": "5eb27b047250577ca9b5bb86",
                    "name": "Due_Date",
                    "project_id": "5eb27a96ae6f27001bb9e338",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Due Date",
                    "is_list": false,
                    "last_modified": "2020-05-06T08:53:39.429Z",
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
                        "name": "Date_transform",
                        "arguments": {},
                        "content": "    var regex1 = /^\\d{6}$/;\n    \nfunction removeSpace(input){\n    var regex = /^(?:(?:31(|\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(|\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(|\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(|\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$/\n\tif(regex.test(input)){\n\t\tinput = input.replace(/([0-9]{2})([0-9]{2})([0-9]{4})/,'$1$2$3') + '';\n\t}\n\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\n\n\tinput = input.trim();\n\n\treturn input;\n}\nfunction chkDate(date){\n\tvar dd = date.substring(0,2);\n\tvar mm = date.substring(2,4);\n\tvar yy = date.substring(4,6);\n\tvar tmpDate = new Date();\n\tvar y = tmpDate.getFullYear()+\"\";\n\ty = y.substring(2,4)*1 + 1;\n\n\t//Gan gia tri nam la 19YY neu YY > nam hien tai + 1\n\t//Gan gia tri nam la 20YY neu YY <= nam hien tai + 1\n\tif(yy*1>y){ yy = 19+yy;\n\t}else {yy = 20+yy;}\n\n\treturn dd+mm+yy;\t\n}\nvalue = value.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'');\nif(value.length === 6){\n    return chkDate(value)}\nreturn removeSpace(value);",
                        "created_date": "2019-11-28T06:52:45.384Z",
                        "last_modified": "2019-11-28T06:54:20.188Z",
                        "id": "5ddf6ebddedee200147c15f8"
                    },
                    "tooltip": "",
                    "validation": {
                        "name": "Date",
                        "arguments": {},
                        "content": "function chkDate(date){\r\n\tvar dd = date.substring(0,2);\r\n\tvar mm = date.substring(2,4);\r\n\tvar yy = date.substring(4,6);\r\n\tvar tmpDate = new Date();\r\n\tvar y = tmpDate.getFullYear()+\"\";\r\n\ty = y.substring(2,4)*1 + 1;\r\n\r\n\t//Gan gia tri nam la 19YY neu YY > nam hien tai + 1\r\n\t//Gan gia tri nam la 20YY neu YY <= nam hien tai + 1\r\n\tif(yy*1>y){ yy = 19+yy;\r\n\t}else {yy = 20+yy;}\r\n\r\n\treturn dd+mm+yy;\t\r\n}\r\n\r\nfunction formatdate(ngay_hieu_luc_in78){\r\nvar fvalue = ngay_hieu_luc_in78;\r\n\tvar regex = /^(?:(?:31(|\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(|\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(|\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(|\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$/\r\n\tvar regex1 = /^\\d{6}$/;\r\n\tvar regex2 = /^(\\s*|[0-9\\.\\/\\-]{0,10})$/ ;\r\n\tvar date;\r\nif(fvalue === \"\") return ;\r\n\tif(regex1.test(fvalue))\r\n\treturn ;\r\n\tif(regex2.test(fvalue)){\r\n\t\r\n\tif(!regex.test(fvalue)){\r\n\t\treturn [{type:\"warning\",message:\"Ngày Tháng Năm không phù hợp, vui lòng kiểm tra lại.\"}]\r\n\t}\r\n}else{\r\n    return [{type:\"error\",message:\"Không đúng định dạng ddmmyyyy\"}]\r\n}\r\nfvalue = fvalue.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'');\r\nif(fvalue.length === 6){\r\n\tfvalue = chkDate(fvalue);\r\n}\r\nvar dd = fvalue.substring(0, 2);\r\nvar mm = fvalue.substring(2, 4);\r\nvar yy = fvalue.substring(4, 8);\r\nvar tmpDate = new Date();\r\nvar d = tmpDate.getDate();\r\nvar m = tmpDate.getMonth();\r\nvar y = tmpDate.getFullYear();\r\nvar inputDate = new Date(yy, mm - 1, dd);\r\nvar curDate = new Date(y, m, d);\r\n\r\nif (value.length === 4 || value.length === 5 || value.length === 7 || value.length === 9) {\r\n return [{type:\"error\", message:\"Không đúng định dạng ddmmyyyy\"}]\r\n}\r\n\r\n//So sanh ngay nhap voi ngay hien tai\r\nif (inputDate > curDate) {\r\n return [{type:\"warning\", message:\"Năm nhập lớn hơn năm hiện tại\"}]\r\n}\r\n\r\n\r\n}\r\n\r\nreturn formatdate(value);",
                        "created_date": "2019-11-28T06:50:27.116Z",
                        "last_modified": "2019-11-28T06:50:27.116Z",
                        "id": "5ddf6e33dedee200147c15f7"
                    },
                    "value_broadcast": "",
                    "field_setting": {
                        "field_id": "5eb27b047250577ca9b5bb86",
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
                    "_id": "5eb27b047250577ca9b5bb89",
                    "name": "Kunden_Nr",
                    "project_id": "5eb27a96ae6f27001bb9e338",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Kunden Nr.",
                    "is_list": false,
                    "last_modified": "2020-05-06T08:53:39.429Z",
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
                        "name": "removeSpace_transform",
                        "arguments": {},
                        "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                        "created_date": "2019-11-28T07:25:37.362Z",
                        "last_modified": "2019-11-28T07:25:37.362Z",
                        "id": "5ddf7671dedee200147c15f9"
                    },
                    "tooltip": "",
                    "validation": {
                        "name": "freeTexx_FixCharacter",
                        "arguments": {},
                        "content": "var regex1 = /^.{0,90}$/g\r\n\r\nif(regex1.test(value) && (value.includes(';')) || !regex1.test(value) && (value.includes(';'))){\r\n    \r\n    return [{type : \"error\" , message : \"Không được nhập dấu ; \"}]\r\n}\r\n\r\nif(!regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ được nhập 90 ký tự\"}]\r\n}",
                        "created_date": "2020-02-06T07:54:20.933Z",
                        "last_modified": "2020-02-06T07:54:20.933Z",
                        "id": "5e3bc62cfeed4a001e991cf7"
                    },
                    "value_broadcast": "",
                    "field_setting": {
                        "field_id": "5eb27b047250577ca9b5bb89",
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
                    "_id": "5eb27b047250577ca9b5bb96",
                    "name": "dotuoi",
                    "project_id": "5eb27a96ae6f27001bb9e338",
                    "argument_details": [
                        "18-30",
                        "31-40",
                        ">40"
                    ],
                    "control_type": "RADIOBUTTON",
                    "counted_character": true,
                    "default_value": "18-30",
                    "field_display": "Độ tuổi của bạn",
                    "is_list": false,
                    "last_modified": "2020-05-06T08:53:39.430Z",
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
                        "field_id": "5eb27b047250577ca9b5bb96",
                        "visible": true,
                        "disable": false,
                        "double_typing": false,
                        "argument_details": [
                            {
                                "value": "18-30"
                            },
                            {
                                "value": "31-40"
                            },
                            {
                                "value": ">40"
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
                    "_id": "5eb27b047250577ca9b5bb93",
                    "name": "Reference_1",
                    "project_id": "5eb27a96ae6f27001bb9e338",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Reference 1",
                    "is_list": false,
                    "last_modified": "2020-05-06T08:53:39.429Z",
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
                        "name": "removeSpace_transform",
                        "arguments": {},
                        "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                        "created_date": "2019-11-28T07:25:37.362Z",
                        "last_modified": "2019-11-28T07:25:37.362Z",
                        "id": "5ddf7671dedee200147c15f9"
                    },
                    "tooltip": "",
                    "validation": {
                        "name": "",
                        "content": "var regex1 = /^.{0,90}$/g\r\n\r\nif(regex1.test(value) && (value.includes(';')) || !regex1.test(value) && (value.includes(';'))){\r\n    \r\n    return [{type : \"error\" , message : \"Không được nhập dấu ; \"}]\r\n}\r\n\r\nif(!regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ được nhập 90 ký tự\"}]\r\n}",
                        "arguments": {}
                    },
                    "value_broadcast": "",
                    "field_setting": {
                        "field_id": "5eb27b047250577ca9b5bb93",
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
                    "_id": "5eb27b047250577ca9b5bb83",
                    "name": "Credit_note",
                    "project_id": "5eb27a96ae6f27001bb9e338",
                    "argument_details": [
                        "Rechnung",
                        "Gutschrift"
                    ],
                    "control_type": "COMBOBOX",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Credit Note",
                    "is_list": false,
                    "last_modified": "2020-05-06T08:53:39.429Z",
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
                        "name": "removeSpace_transform",
                        "arguments": {},
                        "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                        "created_date": "2019-11-28T07:25:37.362Z",
                        "last_modified": "2019-11-28T07:25:37.362Z",
                        "id": "5ddf7671dedee200147c15f9"
                    },
                    "tooltip": "",
                    "validation": {
                        "name": "",
                        "content": "if(!value){\r\n    return [{\r\n        type : \"error\",\r\n        message : \"Field đang trống, vui lòng kiểm tra lại\"\r\n    }]\r\n}\r\n",
                        "arguments": {}
                    },
                    "value_broadcast": "",
                    "field_setting": {
                        "field_id": "5eb27b047250577ca9b5bb83",
                        "visible": true,
                        "disable": false,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
                        "argument_details": [
                            {
                                "value": "Rechnung"
                            },
                            {
                                "value": "Gutschrift"
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
                    "_id": "5eb27b047250577ca9b5bba3",
                    "name": "ngaysinh",
                    "project_id": "5eb27a96ae6f27001bb9e338",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Ngày sinh",
                    "is_list": false,
                    "last_modified": "2020-05-06T08:53:39.430Z",
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
                        "content": "",
                        "arguments": {}
                    },
                    "value_broadcast": "",
                    "field_setting": {
                        "field_id": "5eb27b047250577ca9b5bba3",
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
                    "_id": "5eb27b047250577ca9b5bb94",
                    "name": "Total_Amount",
                    "project_id": "5eb27a96ae6f27001bb9e338",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Total Amount",
                    "is_list": false,
                    "last_modified": "2020-05-06T08:53:39.430Z",
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
                        "content": "^(\\s*|[0-9\\.]{0,21})$",
                        "description": "Nhập tối đa 21 ký tự"
                    },
                    "rule_transform": {
                        "name": "removeSpace_transform",
                        "arguments": {},
                        "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                        "created_date": "2019-11-28T07:25:37.362Z",
                        "last_modified": "2019-11-28T07:25:37.362Z",
                        "id": "5ddf7671dedee200147c15f9"
                    },
                    "tooltip": "",
                    "validation": {
                        "name": "decimal_number",
                        "arguments": {},
                        "content": "if(value.split('.').length==2&&(value.split('.')[1].trim().length===0||value.split('.')[0].trim().length===0)){\n    return [{\n            type:'error',\n            message:'Dữ liệu nhập phải là số thập phân'\n    }]\n}\n\n// var num = parseFloat(value).toFixed(3);\nvar tmp = (value*1000 + 0.1*1000 - 0.1*1000)/10 ;\n\nif(!value){\n    return [{type : \"error\",\n        message :\"Total Amount Rỗng, cần kiểm tra lại!\"\n    }]\n}\n\nvar [ng,tp] =value.split('.')\n// if(value.split('.').length>2){\n//     return [{\n//             type:'warning',\n//             message:'Netto nhập quá 2 số thập phân'\n//     }]\n// }\n\nif(tp&&tp.length>2){\n     return [{type : \"error\",\n        message :\"Total Amount nhập quá 2 số thập phân\"\n    }]\n}\n\nif(!tmp&&tmp!==0){\n    return [{\n        type : 'error',\n        message: 'Dữ liệu nhập phải là chuỗi số thập phân'\n    }]\n}\nif(value<0){\n    return [\n        {\n            type:'error',\n            message:'Không được nhập giá trị âm.'\n        }\n        ]\n}\n",
                        "created_date": "2019-12-28T09:47:49.178Z",
                        "last_modified": "2019-12-28T09:47:49.178Z",
                        "id": "5e0724c548fa7900143a5cd0"
                    },
                    "value_broadcast": "",
                    "field_setting": {
                        "field_id": "5eb27b047250577ca9b5bb94",
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
                    "_id": "5eb27b047250577ca9b5bb9b",
                    "name": "VAT_Amount",
                    "project_id": "5eb27a96ae6f27001bb9e338",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "VAT Amount",
                    "is_list": false,
                    "last_modified": "2020-05-06T08:53:39.430Z",
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
                        "content": "^(\\s*|[0-9\\.]{0,21})$",
                        "description": "Nhập tối đa 21 ký tự."
                    },
                    "rule_transform": {
                        "name": "removeSpace_transform",
                        "arguments": {},
                        "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                        "created_date": "2019-11-28T07:25:37.362Z",
                        "last_modified": "2019-11-28T07:25:37.362Z",
                        "id": "5ddf7671dedee200147c15f9"
                    },
                    "tooltip": "",
                    "validation": {
                        "name": "decimal_number",
                        "arguments": {},
                        "content": "if(value.split('.').length==2&&(value.split('.')[1].trim().length===0||value.split('.')[0].trim().length===0)){\n    return [{\n            type:'error',\n            message:'Dữ liệu nhập phải là số thập phân'\n    }]\n}\n\n// var num = parseFloat(value).toFixed(3);\nvar tmp = (value*1000 + 0.1*1000 - 0.1*1000)/10 ;\n\n\nvar [ng,tp] =value.split('.')\n// if(value.split('.').length>2){\n//     return [{\n//             type:'warning',\n//             message:'Netto nhập quá 2 số thập phân'\n//     }]\n// }\n\nif(tp&&tp.length>2){\n     return [{type : \"error\",\n        message :\"VAT Amount nhập quá 2 số thập phân\"\n    }]\n}\n\nif(!tmp&&tmp!==0){\n    return [{\n        type : 'error',\n        message: 'Dữ liệu nhập phải là chuỗi số thập phân'\n    }]\n}\nif(value<0){\n    return [\n        {\n            type:'error',\n            message:'Không được nhập giá trị âm.'\n        }\n        ]\n}\n",
                        "created_date": "2019-12-28T09:47:49.178Z",
                        "last_modified": "2019-12-28T09:47:49.178Z",
                        "id": "5e0724c548fa7900143a5cd0"
                    },
                    "value_broadcast": "",
                    "field_setting": {
                        "field_id": "5eb27b047250577ca9b5bb9b",
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
                    "_id": "5eb27b047250577ca9b5bb8b",
                    "name": "Currency",
                    "project_id": "5eb27a96ae6f27001bb9e338",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Currency",
                    "is_list": false,
                    "last_modified": "2020-05-06T08:53:39.429Z",
                    "lookup_broadcast": [],
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
                        "name": "",
                        "param_set": "var value = data.Currency.split(' '); return [value[value.length - 1],value.join(' ')]",
                        "result_view_config": [
                            {
                                "title": "Currency",
                                "key_value": "currency"
                            }
                        ],
                        "related_columns": [],
                        "specific_project": "0"
                    },
                    "pattern": {
                        "name": "",
                        "arguments": {},
                        "content": "^(\\s*|[\\a-zA-Z]{3})$",
                        "description": "Nhập 3 ký tự chữ"
                    },
                    "rule_transform": {
                        "name": "removeSpace_transform",
                        "arguments": {},
                        "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                        "created_date": "2019-11-28T07:25:37.362Z",
                        "last_modified": "2019-11-28T07:25:37.362Z",
                        "id": "5ddf7671dedee200147c15f9"
                    },
                    "tooltip": "",
                    "validation": {
                        "name": "",
                        "content": "if(!value){\n    return [{type : \"warning\",\n        message :\"Currency Rỗng, cần kiểm tra lại!\"\n    }]\n}\n\n",
                        "arguments": {}
                    },
                    "value_broadcast": "",
                    "field_setting": {
                        "field_id": "5eb27b047250577ca9b5bb8b",
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
                    "_id": "5eb27b047250577ca9b5bb9f",
                    "name": "phuongtien",
                    "project_id": "5eb27a96ae6f27001bb9e338",
                    "argument_details": [
                        "Xe máy",
                        "Ô tô",
                        "Xe đạp",
                        "Xe bus"
                    ],
                    "control_type": "CHECKBOX",
                    "counted_character": true,
                    "default_value": "Xe máy",
                    "field_display": "Phương tiện di chuyển của bạn",
                    "is_list": true,
                    "last_modified": "2020-05-06T08:53:39.431Z",
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
                        "field_id": "5eb27b047250577ca9b5bb9f",
                        "visible": true,
                        "disable": false,
                        "double_typing": false,
                        "argument_details": [
                            {
                                "value": "Xe máy"
                            },
                            {
                                "value": "Ô tô"
                            },
                            {
                                "value": "Xe đạp"
                            },
                            {
                                "value": "Xe bus"
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
                    "_id": "5eba4dd7898352001baffd5d",
                    "name": "moitruong",
                    "field_display": "Bạn muốn môi trường làm việc như thế nào ?",
                    "default_value": "",
                    "control_type": "CHECKBOX",
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
                        "Năng động",
                        "Lương cao",
                        "Vui vẻ",
                        "Luôn cải tiến"
                    ],
                    "project_id": "5eb27a96ae6f27001bb9e338",
                    "created_date": "2020-05-12T07:18:47.960Z",
                    "last_modified": "2020-05-12T07:18:47.960Z",
                    "field_setting": {
                        "field_id": "5eba4dd7898352001baffd5d",
                        "visible": true,
                        "disable": false,
                        "double_typing": false,
                        "argument_details": [
                            {
                                "value": "Năng động"
                            },
                            {
                                "value": "Lương cao"
                            },
                            {
                                "value": "Vui vẻ"
                            },
                            {
                                "value": "Luôn cải tiến"
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
            "id": "5eb27b047250577ca9b5bbbb"
        }
    ]
}