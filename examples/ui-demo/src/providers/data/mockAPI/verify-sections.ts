export function getSections() {
    return [
        {
            "layout_labels": null,
            "name": "OMR",
            "layout_name": "OMR2",
            "index": 0,
            "layout_id": "5f55de0dd9eb72001b4fa273",
            "is_multiple": false,
            "position": {},
            "settings": {
                "is_multiple": false,
                "fieldId": "",
                "sectionsSync": "",
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
                    "_id": "5ef96a1b342c66001bd1d177",
                    "name": "A05",
                    "field_display": "Giới Tính",
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
                        "Nam",
                        "Nữ"
                    ],
                    "project_id": "5ee1cb9ec5c2440014ecba36",
                    "created_date": "2020-06-29T04:12:11.206Z",
                    "last_modified": "2020-09-16T09:33:35.112Z",
                    "field_setting": {
                        "field_id": "5ef96a1b342c66001bd1d177",
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
                                "value": "Nữ"
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
                    "_id": "5ef96ac9342c66001bd1d17c",
                    "name": "A08",
                    "field_display": "Tình trạng hôn nhân",
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
                        "Ly hôn/góa",
                        "Đã kết hôn",
                        "Độc Thân"
                    ],
                    "project_id": "5ee1cb9ec5c2440014ecba36",
                    "created_date": "2020-06-29T04:15:05.805Z",
                    "last_modified": "2020-09-16T10:18:33.405Z",
                    "field_setting": {
                        "field_id": "5ef96ac9342c66001bd1d17c",
                        "visible": true,
                        "disable": false,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
                        "argument_details": [
                            {
                                "value": "Ly hôn/góa"
                            },
                            {
                                "value": "Đã kết hôn"
                            },
                            {
                                "value": "Độc Thân"
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
                    "_id": "5ef96b04342c66001bd1d17d",
                    "name": "A09",
                    "field_display": "Tình trạng học vấn",
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
                        "Tiểu học",
                        "Trung học cơ sở",
                        "Trung học phổ thông",
                        "Đại Học",
                        "Trường kỹ thuật dạy nghề",
                        "Cao đẳng",
                        "Khác"
                    ],
                    "project_id": "5ee1cb9ec5c2440014ecba36",
                    "created_date": "2020-06-29T04:16:04.173Z",
                    "last_modified": "2020-09-16T10:18:45.134Z",
                    "field_setting": {
                        "field_id": "5ef96b04342c66001bd1d17d",
                        "visible": true,
                        "disable": false,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
                        "argument_details": [
                            {
                                "value": "Tiểu học"
                            },
                            {
                                "value": "Trung học cơ sở"
                            },
                            {
                                "value": "Trung học phổ thông"
                            },
                            {
                                "value": "Đại Học"
                            },
                            {
                                "value": "Trường kỹ thuật dạy nghề"
                            },
                            {
                                "value": "Cao đẳng"
                            },
                            {
                                "value": "Khác"
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
                    "_id": "5ef96338342c66001bd1d152",
                    "name": "A72",
                    "field_display": "Địa chỉ liên lạc",
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
                        "name": "removeSpace_transform",
                        "arguments": {},
                        "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                        "created_date": "2020-04-27T07:08:22.358Z",
                        "last_modified": "2020-04-27T07:09:29.160Z",
                        "id": "5ea684e696527c001be0c516"
                    },
                    "lookup_broadcast": [],
                    "value_broadcast": "",
                    "argument_details": [
                        "Current Address",
                        "Family Book Address",
                        "Working Address"
                    ],
                    "project_id": "5ee1cb9ec5c2440014ecba36",
                    "created_date": "2020-06-29T03:42:48.251Z",
                    "last_modified": "2020-09-16T10:19:29.740Z",
                    "field_setting": {
                        "field_id": "5ef96338342c66001bd1d152",
                        "visible": true,
                        "disable": false,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
                        "argument_details": [
                            {
                                "value": "Current Address"
                            },
                            {
                                "value": "Family Book Address"
                            },
                            {
                                "value": "Working Address"
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
                    "_id": "5ef96c53342c66001bd1d185",
                    "name": "A82",
                    "field_display": "Loại thu nhập cá nhân chính_1",
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
                        "Tiền lương",
                        "Tự làm chủ",
                        "Khác"
                    ],
                    "project_id": "5ee1cb9ec5c2440014ecba36",
                    "created_date": "2020-06-29T04:21:39.523Z",
                    "last_modified": "2020-06-29T04:21:39.523Z",
                    "field_setting": {
                        "field_id": "5ef96c53342c66001bd1d185",
                        "visible": true,
                        "disable": false,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
                        "argument_details": [
                            {
                                "value": "Tiền lương"
                            },
                            {
                                "value": "Tự làm chủ"
                            },
                            {
                                "value": "Khác"
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
                    "_id": "5ef96c9a342c66001bd1d187",
                    "name": "A84",
                    "field_display": "Ngành nghề",
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
                        "Nông nghiệp",
                        "Xây Dựng",
                        "Sản Xuất",
                        "Quân đội hoặc cảnh sát",
                        "Khác",
                        "Xã Hội",
                        "Bán lẻ",
                        "Dịch vụ",
                        "Vận chuyển"
                    ],
                    "project_id": "5ee1cb9ec5c2440014ecba36",
                    "created_date": "2020-06-29T04:22:50.005Z",
                    "last_modified": "2020-06-29T04:22:50.005Z",
                    "field_setting": {
                        "field_id": "5ef96c9a342c66001bd1d187",
                        "visible": true,
                        "disable": false,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
                        "argument_details": [
                            {
                                "value": "Nông nghiệp"
                            },
                            {
                                "value": "Xây Dựng"
                            },
                            {
                                "value": "Sản Xuất"
                            },
                            {
                                "value": "Quân đội hoặc cảnh sát"
                            },
                            {
                                "value": "Khác"
                            },
                            {
                                "value": "Xã Hội"
                            },
                            {
                                "value": "Bán lẻ"
                            },
                            {
                                "value": "Dịch vụ"
                            },
                            {
                                "value": "Vận chuyển"
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
                    "_id": "5ef96cd0342c66001bd1d189",
                    "name": "A88",
                    "field_display": "Chức vụ",
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
                        "Nhân Viên",
                        "Chuyên Viên",
                        "Giám Sát/Trưởng Phòng",
                        "Chủ Kinh Doanh"
                    ],
                    "project_id": "5ee1cb9ec5c2440014ecba36",
                    "created_date": "2020-06-29T04:23:44.649Z",
                    "last_modified": "2020-06-29T04:23:44.649Z",
                    "field_setting": {
                        "field_id": "5ef96cd0342c66001bd1d189",
                        "visible": true,
                        "disable": false,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
                        "argument_details": [
                            {
                                "value": "Nhân Viên"
                            },
                            {
                                "value": "Chuyên Viên"
                            },
                            {
                                "value": "Giám Sát/Trưởng Phòng"
                            },
                            {
                                "value": "Chủ Kinh Doanh"
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
                    "_id": "5ef963fd342c66001bd1d154",
                    "name": "A96",
                    "field_display": "Phương thức nhận lương",
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
                        "Tiền mặt",
                        "Thanh toán điện tử",
                        "Các ngân hàng khác",
                        "TPBank"
                    ],
                    "project_id": "5ee1cb9ec5c2440014ecba36",
                    "created_date": "2020-06-29T03:46:05.946Z",
                    "last_modified": "2020-06-29T03:46:05.946Z",
                    "field_setting": {
                        "field_id": "5ef963fd342c66001bd1d154",
                        "visible": true,
                        "disable": false,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
                        "argument_details": [
                            {
                                "value": "Tiền mặt"
                            },
                            {
                                "value": "Thanh toán điện tử"
                            },
                            {
                                "value": "Các ngân hàng khác"
                            },
                            {
                                "value": "TPBank"
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
                    "_id": "5ef96478342c66001bd1d15a",
                    "name": "D04",
                    "field_display": "Tình trạng sở hữu nhà ở",
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
                        "Sở Hữu không thuế chấp",
                        "Từ chủ thuê",
                        "Sở hữu thế chấp",
                        "Thuê"
                    ],
                    "project_id": "5ee1cb9ec5c2440014ecba36",
                    "created_date": "2020-06-29T03:48:08.616Z",
                    "last_modified": "2020-06-29T03:48:08.616Z",
                    "field_setting": {
                        "field_id": "5ef96478342c66001bd1d15a",
                        "visible": true,
                        "disable": false,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
                        "argument_details": [
                            {
                                "value": "Sở Hữu không thuế chấp"
                            },
                            {
                                "value": "Từ chủ thuê"
                            },
                            {
                                "value": "Sở hữu thế chấp"
                            },
                            {
                                "value": "Thuê"
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
                    "_id": "5ef964ea342c66001bd1d15e",
                    "name": "D08",
                    "field_display": "Mục đích vay vốn",
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
                        "Giáo dục, Thể thao",
                        "Hàng hóa điện tử",
                        "Nội thất, thay đổi nhà cửa",
                        "Chăm sóc sức khỏe",
                        "Chi phí sinh hoạt",
                        "Phương tiện vận chuyển",
                        "Khác",
                        "Thanh toán các khoản nợ khác",
                        "Du lịch, giải trí"
                    ],
                    "project_id": "5ee1cb9ec5c2440014ecba36",
                    "created_date": "2020-06-29T03:50:02.698Z",
                    "last_modified": "2020-06-29T03:50:02.698Z",
                    "field_setting": {
                        "field_id": "5ef964ea342c66001bd1d15e",
                        "visible": true,
                        "disable": false,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
                        "argument_details": [
                            {
                                "value": "Giáo dục, Thể thao"
                            },
                            {
                                "value": "Hàng hóa điện tử"
                            },
                            {
                                "value": "Nội thất, thay đổi nhà cửa"
                            },
                            {
                                "value": "Chăm sóc sức khỏe"
                            },
                            {
                                "value": "Chi phí sinh hoạt"
                            },
                            {
                                "value": "Phương tiện vận chuyển"
                            },
                            {
                                "value": "Khác"
                            },
                            {
                                "value": "Thanh toán các khoản nợ khác"
                            },
                            {
                                "value": "Du lịch, giải trí"
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
                    "_id": "5ef9650f342c66001bd1d15f",
                    "name": "D09",
                    "field_display": "Khác",
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
                        "name": "removeSpace_transform",
                        "arguments": {},
                        "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                        "created_date": "2020-04-27T07:08:22.358Z",
                        "last_modified": "2020-04-27T07:09:29.160Z",
                        "id": "5ea684e696527c001be0c516"
                    },
                    "lookup_broadcast": [],
                    "value_broadcast": "",
                    "argument_details": [],
                    "project_id": "5ee1cb9ec5c2440014ecba36",
                    "created_date": "2020-06-29T03:50:39.888Z",
                    "last_modified": "2020-06-29T03:50:39.888Z",
                    "field_setting": {
                        "field_id": "5ef9650f342c66001bd1d15f",
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
            "id": "5f55de0dd9eb72001b4fa274"
        }
    ]
}