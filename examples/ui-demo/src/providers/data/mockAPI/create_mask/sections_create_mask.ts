export const getSections=()=>{
    return [
        {
          "name": "Health_Check1",
          "layout_name": "Health_Check",
          "index": 0,
          "layout_id": "5ea6a7837250577ca9c71850",
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
              "_id": "5ea6a7837250577ca9c7191d",
              "name": "A57",
              "label": "Label1",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 1:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.709Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c7191d",
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
              "_id": "5ea6a7837250577ca9c71a1d",
              "name": "A58",
               "label": "Label2",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [],
              "control_type": "TEXTFIELD",
              "counted_character": true,
              "default_value": "",
              "field_display": "Câu 1: Thành Phố",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.709Z",
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
                "content": "",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71a1d",
                "visible": true,
                "disable": false,
                "dynamic_by_field": {
                  "effect": "visible",
                  "groups": [
                    [
                      {
                        "value": [
                          "Y"
                        ],
                        "section": "Health_Check1",
                        "rule": "must_equal",
                        "field": "A57"
                      }
                    ]
                  ]
                },
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
              "_id": "5ea6a7837250577ca9c719cb",
              "name": "A59",
              "label": "Label3",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [],
              "control_type": "TEXTFIELD",
              "counted_character": true,
              "default_value": "",
              "field_display": "Câu 1: Thời gian và mục đích",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.709Z",
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
                "content": "",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c719cb",
                "visible": true,
                "disable": false,
                "dynamic_by_field": {
                  "effect": "visible",
                  "groups": [
                    [
                      {
                        "value": [
                          "Y"
                        ],
                        "section": "Health_Check1",
                        "rule": "must_equal",
                        "field": "A57"
                      }
                    ]
                  ]
                },
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
              "_id": "5ea6a7837250577ca9c71876",
              "name": "A60",
               "label": "Label3",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [],
              "control_type": "TEXTFIELD",
              "counted_character": true,
              "default_value": "",
              "field_display": "Câu 1: Ngày đi gần nhất",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.709Z",
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
                "content": "    var regex1 = /^\\d{6}$/;\n    \nfunction removeSpace(input){\n    var regex = /^(?:(?:31(|\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(|\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(|\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(|\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$/\n\tif(regex.test(input)){\n\t\tinput = input.replace(/([0-9]{2})([0-9]{2})([0-9]{4})/,'$1/$2/$3') + '';\n\t}\n\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\n\n\tinput = input.trim();\n\n\treturn input;\n}\nfunction chkDate(date){\n\tvar dd = date.substring(0,2);\n\tvar mm = date.substring(2,4);\n\tvar yy = date.substring(4,6);\n\tvar tmpDate = new Date();\n\tvar y = tmpDate.getFullYear()+\"\";\n\ty = y.substring(2,4)*1 + 1;\n\n\t//Gan gia tri nam la 19YY neu YY > nam hien tai + 1\n\t//Gan gia tri nam la 20YY neu YY <= nam hien tai + 1\n\tif(yy*1>y){ yy = 19+yy;\n\t}else {yy = 20+yy;}\n\n\treturn dd+mm+yy;\t\n}\nvalue = value.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'');\nif(value.length === 6){\n    return chkDate(value)}\nreturn removeSpace(value);",
                "created_date": "2019-11-28T06:52:45.384Z",
                "last_modified": "2019-11-28T06:54:20.188Z",
                "id": "5ddf6ebddedee200147c15f8"
              },
              "text_type": "DATE",
              "tooltip": "",
              "validation": {
                "name": "Date",
                "arguments": {},
                "content": "function chkDate(date){\r\n\tvar dd = date.substring(0,2);\r\n\tvar mm = date.substring(2,4);\r\n\tvar yy = date.substring(4,6);\r\n\tvar tmpDate = new Date();\r\n\tvar y = tmpDate.getFullYear()+\"\";\r\n\ty = y.substring(2,4)*1 + 1;\r\n\r\n\t//Gan gia tri nam la 19YY neu YY > nam hien tai + 1\r\n\t//Gan gia tri nam la 20YY neu YY <= nam hien tai + 1\r\n\tif(yy*1>y){ yy = 19+yy;\r\n\t}else {yy = 20+yy;}\r\n\r\n\treturn dd+mm+yy;\t\r\n}\r\n\r\nfunction formatdate(ngay_hieu_luc_in78){\r\nvar fvalue = ngay_hieu_luc_in78;\r\n\tvar regex = /^(?:(?:31(|\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(|\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(|\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(|\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$/\r\n\tvar regex1 = /^\\d{6}$/;\r\n\tvar regex2 = /^(\\s*|[0-9\\.\\/\\-]+)$/ ;\r\n\tvar date;\r\nif(fvalue === \"\") return ;\r\n\tif(regex1.test(fvalue))\r\n\treturn ;\r\n\tif(regex2.test(fvalue)){\r\n\t\r\n\tif(!regex.test(fvalue)){\r\n\t\treturn [{type:\"warning\",message:\"Ngày Tháng Năm không phù hợp, vui lòng kiểm tra lại.\"}]\r\n\t}\r\n}else{\r\n    return [{type:\"error\",message:\"Không đúng định dạng ddmmyyyy\"}]\r\n}\r\nfvalue = fvalue.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'');\r\nif(fvalue.length === 6){\r\n\tfvalue = chkDate(fvalue);\r\n}\r\nvar dd = fvalue.substring(0, 2);\r\nvar mm = fvalue.substring(2, 4);\r\nvar yy = fvalue.substring(4, 8);\r\nvar tmpDate = new Date();\r\nvar d = tmpDate.getDate();\r\nvar m = tmpDate.getMonth();\r\nvar y = tmpDate.getFullYear();\r\nvar inputDate = new Date(yy, mm - 1, dd);\r\nvar curDate = new Date(y, m, d);\r\n\r\n\r\n\r\n//So sanh ngay nhap voi ngay hien tai\r\nif (inputDate > curDate) {\r\n return [{type:\"warning\", message:\"Năm nhập lớn hơn năm hiện tại\"}]\r\n}\r\n\r\n\r\n}\r\n\r\nreturn formatdate(value);",
                "created_date": "2019-11-28T06:50:27.116Z",
                "last_modified": "2019-11-28T06:50:27.116Z",
                "id": "5ddf6e33dedee200147c15f7"
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71876",
                "visible": true,
                "disable": false,
                "dynamic_by_field": {
                  "effect": "visible",
                  "groups": [
                    [
                      {
                        "value": [
                          "Y"
                        ],
                        "section": "Health_Check1",
                        "rule": "must_equal",
                        "field": "A57"
                      }
                    ]
                  ]
                },
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
              "_id": "5ea6a7837250577ca9c719cd",
              "name": "A61",
              "label": "Label3",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [],
              "control_type": "TEXTFIELD",
              "counted_character": true,
              "default_value": "",
              "field_display": "Câu 1: Ngày dự định đi",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.710Z",
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
                "content": "    var regex1 = /^\\d{6}$/;\n    \nfunction removeSpace(input){\n    var regex = /^(?:(?:31(|\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(|\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(|\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(|\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$/\n\tif(regex.test(input)){\n\t\tinput = input.replace(/([0-9]{2})([0-9]{2})([0-9]{4})/,'$1/$2/$3') + '';\n\t}\n\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\n\n\tinput = input.trim();\n\n\treturn input;\n}\nfunction chkDate(date){\n\tvar dd = date.substring(0,2);\n\tvar mm = date.substring(2,4);\n\tvar yy = date.substring(4,6);\n\tvar tmpDate = new Date();\n\tvar y = tmpDate.getFullYear()+\"\";\n\ty = y.substring(2,4)*1 + 1;\n\n\t//Gan gia tri nam la 19YY neu YY > nam hien tai + 1\n\t//Gan gia tri nam la 20YY neu YY <= nam hien tai + 1\n\tif(yy*1>y){ yy = 19+yy;\n\t}else {yy = 20+yy;}\n\n\treturn dd+mm+yy;\t\n}\nvalue = value.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'');\nif(value.length === 6){\n    return chkDate(value)}\nreturn removeSpace(value);",
                "created_date": "2019-11-28T06:52:45.384Z",
                "last_modified": "2019-11-28T06:54:20.188Z",
                "id": "5ddf6ebddedee200147c15f8"
              },
              "text_type": "DATE",
              "tooltip": "",
              "validation": {
                "name": "Date",
                "arguments": {},
                "content": "function chkDate(date){\r\n\tvar dd = date.substring(0,2);\r\n\tvar mm = date.substring(2,4);\r\n\tvar yy = date.substring(4,6);\r\n\tvar tmpDate = new Date();\r\n\tvar y = tmpDate.getFullYear()+\"\";\r\n\ty = y.substring(2,4)*1 + 1;\r\n\r\n\t//Gan gia tri nam la 19YY neu YY > nam hien tai + 1\r\n\t//Gan gia tri nam la 20YY neu YY <= nam hien tai + 1\r\n\tif(yy*1>y){ yy = 19+yy;\r\n\t}else {yy = 20+yy;}\r\n\r\n\treturn dd+mm+yy;\t\r\n}\r\n\r\nfunction formatdate(ngay_hieu_luc_in78){\r\nvar fvalue = ngay_hieu_luc_in78;\r\n\tvar regex = /^(?:(?:31(|\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(|\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(|\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(|\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$/\r\n\tvar regex1 = /^\\d{6}$/;\r\n\tvar regex2 = /^(\\s*|[0-9\\.\\/\\-]+)$/ ;\r\n\tvar date;\r\nif(fvalue === \"\") return ;\r\n\tif(regex1.test(fvalue))\r\n\treturn ;\r\n\tif(regex2.test(fvalue)){\r\n\t\r\n\tif(!regex.test(fvalue)){\r\n\t\treturn [{type:\"warning\",message:\"Ngày Tháng Năm không phù hợp, vui lòng kiểm tra lại.\"}]\r\n\t}\r\n}else{\r\n    return [{type:\"error\",message:\"Không đúng định dạng ddmmyyyy\"}]\r\n}\r\nfvalue = fvalue.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'');\r\nif(fvalue.length === 6){\r\n\tfvalue = chkDate(fvalue);\r\n}\r\nvar dd = fvalue.substring(0, 2);\r\nvar mm = fvalue.substring(2, 4);\r\nvar yy = fvalue.substring(4, 8);\r\nvar tmpDate = new Date();\r\nvar d = tmpDate.getDate();\r\nvar m = tmpDate.getMonth();\r\nvar y = tmpDate.getFullYear();\r\nvar inputDate = new Date(yy, mm - 1, dd);\r\nvar curDate = new Date(y, m, d);\r\n\r\n\r\n\r\n//So sanh ngay nhap voi ngay hien tai\r\nif (inputDate > curDate) {\r\n return [{type:\"warning\", message:\"Năm nhập lớn hơn năm hiện tại\"}]\r\n}\r\n\r\n\r\n}\r\n\r\nreturn formatdate(value);",
                "created_date": "2019-11-28T06:50:27.116Z",
                "last_modified": "2019-11-28T06:50:27.116Z",
                "id": "5ddf6e33dedee200147c15f7"
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c719cd",
                "visible": true,
                "disable": false,
                "dynamic_by_field": {
                  "effect": "visible",
                  "groups": [
                    [
                      {
                        "value": [
                          "Y"
                        ],
                        "section": "Health_Check1",
                        "rule": "must_equal",
                        "field": "A57"
                      }
                    ]
                  ]
                },
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
              "_id": "5ea6a7837250577ca9c71878",
              "name": "A62",
               "label": "Label3",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 2:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.710Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71878",
                "visible": true,
                "disable": false,
                "double_typing": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5ea6a7837250577ca9c7197a",
              "name": "A63",
               "label": "Label3",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 3:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.710Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c7197a",
                "visible": true,
                "disable": false,
                "double_typing": false,
                "argument_details": [
                  {
                    "value": " Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5ea6a7837250577ca9c71acb",
              "name": "A64",
               "label": "Label3",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Cẩu 4:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.711Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71acb",
                "visible": true,
                "disable": false,
                "double_typing": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5ea6a7837250577ca9c71824",
              "name": "A65",
               "label": "Label3",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 5:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.711Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71824",
                "visible": true,
                "disable": false,
                "double_typing": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5ea6a7837250577ca9c71a73",
              "name": "A66",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [],
              "control_type": "TEXTFIELD",
              "counted_character": true,
              "default_value": "",
              "field_display": "Câu 5: Số lượng/ngày",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.711Z",
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
                "content": "var regex1 = /[^\\s0-9]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71a73",
                "visible": true,
                "disable": false,
                "dynamic_by_field": {
                  "effect": "visible",
                  "groups": [
                    [
                      {
                        "value": [
                          "Y"
                        ],
                        "section": "Health_Check1",
                        "rule": "must_equal",
                        "field": "A65"
                      }
                    ]
                  ]
                },
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
              "_id": "5ea6a7837250577ca9c718cc",
              "name": "A67",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 6:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.711Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c718cc",
                "visible": true,
                "disable": false,
                "double_typing": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
          "id": "5ea6a7837250577ca9c71b78"
        },
        {
          "name": "Health_Check_C6_1",
           "type": "grid",
          "layout_name": "Health_Check",
          "index": 1,
          "layout_id": "5ea6a7837250577ca9c71850",
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
              "_id": "5ea6a7837250577ca9c71874",
              "name": "A519",
               "label": "Label1",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Bia nhẹ",
                "Rượu nhẹ",
                "Rượu mạnh"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "",
              "field_display": "Câu 6: Loại",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.706Z",
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
                "content": "",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71874",
                "visible": true,
                "disable": false,
                "dynamic_by_field": {
                  "effect": "visible",
                  "groups": [
                    [
                      {
                        "value": [
                          "Y"
                        ],
                        "section": "Health_Check1",
                        "rule": "must_equal",
                        "field": "A67"
                      }
                    ]
                  ]
                },
                "switch_disable": false,
                "double_typing": false,
                "disable_auto_fill_ocr": false,
                "argument_details": [
                  {
                    "value": "Bia nhẹ"
                  },
                  {
                    "value": "Rượu nhẹ"
                  },
                  {
                    "value": "Rượu mạnh"
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
              "_id": "5ea6a7837250577ca9c71b1f",
              "name": "A68",
               "label": "Label3",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [],
              "control_type": "TEXTFIELD",
              "counted_character": true,
              "default_value": "",
              "field_display": "Câu 6: Số Lượng Uống",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.711Z",
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
                "name": "num",
                "content": "var regex1 = /[^\\s0-9]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71b1f",
                "visible": true,
                "disable": false,
                "dynamic_by_field": {
                  "effect": "visible",
                  "groups": [
                    [
                      {
                        "value": [
                          "Y"
                        ],
                        "section": "Health_Check1",
                        "rule": "must_equal",
                        "field": "A67"
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
              "_id": "5ea6a7837250577ca9c71920",
              "name": "A69",
               "label": "Label2",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Hàng Ngày",
                "Hàng Tuần"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "",
              "field_display": "Câu 6: Tần suất sử dụng",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.711Z",
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
                "content": "",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71920",
                "visible": true,
                "disable": false,
                "dynamic_by_field": {
                  "effect": "visible",
                  "groups": [
                    [
                      {
                        "value": [
                          "Y"
                        ],
                        "section": "Health_Check1",
                        "rule": "must_equal",
                        "field": "A67"
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
            }
          ],
          "id": "5ea6a7837250577ca9c71b9a"
        },
        {
          "name": "Health_Check2",
           "type": "single",
          "layout_name": "Health_Check",
          "index": 2,
          "layout_id": "5ea6a7837250577ca9c71850",
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
              "_id": "5ea6a7837250577ca9c71a21",
              "name": "A70",
              "label": "Label1",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 7:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.711Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71a21",
                "visible": true,
                "disable": false,
                "double_typing": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5ea6a7837250577ca9c719cf",
              "name": "A71",
              "label": "Label1",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                " Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 8:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.711Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c719cf",
                "visible": true,
                "disable": false,
                "double_typing": false,
                "argument_details": [
                  {
                    "value": " Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5ea6a7837250577ca9c7187a",
              "name": "A72",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [],
              "control_type": "TEXTFIELD",
              "counted_character": true,
              "default_value": "",
              "field_display": "Câu 9a: chiều cao",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.711Z",
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
                "name": "decimal_number",
                "arguments": {},
                "content": "\nvar tmp = (value*1000 + 0.1*1000 - 0.1*1000)/10 ;\n\nif(!tmp&&tmp!==0){\n    return [{\n        type : 'error',\n        message: 'Dữ liệu nhập phải là chuỗi số thập phân'\n    }]\n}\n\nif(value<0){\n    return [{\n            type:'error',\n            message:'Không được nhập giá trị âm.'\n        }]\n}\n\nvar [ng,tp] =value.split('.')\n\n// if(ng&&ng.length>=3){\n//      return [{\n//          type : \"error\",\n//         message :\"Field nhập lớn hơn 100\"\n//     }]\n// }\n\n\nif(tp&&tp.length>2){\n     return [{\n         type : \"error\",\n        message :\"Field nhập quá 2 số thập phân\"\n    }]\n}\n\n\nif(!value){\n    return [{type : \"error\",\n        message :\"Field Rỗng, cần kiểm tra lại!\"\n    }]\n}",
                "created_date": "2020-05-06T08:51:25.797Z",
                "last_modified": "2020-05-06T09:12:38.041Z",
                "id": "5eb27a8d3d64d3001bf43ed4"
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c7187a",
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
              "_id": "5ea6a7837250577ca9c7197c",
              "name": "A73",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [],
              "control_type": "TEXTFIELD",
              "counted_character": true,
              "default_value": "",
              "field_display": "Câu 9a: cân nặng",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.711Z",
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
                "name": "decimal_number",
                "arguments": {},
                "content": "if(value.split('.').length==2&&(value.split('.')[1].trim().length===0||value.split('.')[0].trim().length===0)){\n    return [{\n            type:'error',\n            message:'Dữ liệu nhập phải là số thập phân'\n    }]\n}\n\n// var num = parseFloat(value).toFixed(3);\nvar tmp = (value*1000 + 0.1*1000 - 0.1*1000)/10 ;\n\n\nvar [ng,tp] =value.split('.')\n// if(value.split('.').length>2){\n//     return [{\n//             type:'warning',\n//             message:'Netto nhập quá 2 số thập phân'\n//     }]\n// }\n\nif(tp&&tp.length>2){\n     return [{type : \"warning\",\n        message :\"nhập quá 2 số thập phân\"\n    }]\n}\n\nif(!tmp&&tmp!==0){\n    return [{\n        type : 'error',\n        message: 'Dữ liệu nhập phải là chuỗi số thập phân'\n    }]\n}\nif(value<0){\n    return [\n        {\n            type:'error',\n            message:'Không được nhập giá trị âm.'\n        }\n        ]\n}\nif(!value){\n    return [{type : \"error\",\n        message :\"Field Rỗng, cần kiểm tra lại!\"\n    }]\n}",
                "created_date": "2019-12-28T09:47:49.178Z",
                "last_modified": "2019-12-28T09:47:49.178Z",
                "id": "5e0724c548fa7900143a5cd0"
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c7197c",
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
              "_id": "5ea6a7837250577ca9c71acd",
              "name": "A74",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 9b:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.712Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71acd",
                "visible": true,
                "disable": false,
                "double_typing": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5ea6a7837250577ca9c71826",
              "name": "A75",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 10:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.712Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71826",
                "visible": true,
                "disable": false,
                "double_typing": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5ea6a7837250577ca9c71a75",
              "name": "A76",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [],
              "control_type": "TEXTFIELD",
              "counted_character": true,
              "default_value": "",
              "field_display": "Câu 10- tình trạng sức khỏe - cha/me",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.712Z",
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
                "content": "",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71a75",
                "visible": true,
                "disable": false,
                "dynamic_by_field": {
                  "effect": "visible",
                  "groups": [
                    [
                      {
                        "value": [
                          "Y"
                        ],
                        "section": "Health_Check2",
                        "rule": "must_equal",
                        "field": "A75"
                      }
                    ]
                  ]
                },
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
              "_id": "5ea6a7837250577ca9c718ce",
              "name": "A77",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [],
              "control_type": "TEXTFIELD",
              "counted_character": true,
              "default_value": "",
              "field_display": "Câu 10 - tình trạng sức khỏe - anh/chi/em",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.712Z",
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
                "content": "",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c718ce",
                "visible": true,
                "disable": false,
                "dynamic_by_field": {
                  "effect": "visible",
                  "groups": [
                    [
                      {
                        "value": [
                          "Y"
                        ],
                        "section": "Health_Check2",
                        "rule": "must_equal",
                        "field": "A75"
                      }
                    ]
                  ]
                },
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
              "_id": "5ea6a7837250577ca9c71b22",
              "name": "A78",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [],
              "control_type": "TEXTFIELD",
              "counted_character": true,
              "default_value": "",
              "field_display": "Câu 10- tuổi - cha/mẹ",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.712Z",
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
                "name": "Number",
                "arguments": {},
                "content": "var regex1 = /[^\\s0-9]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n",
                "created_date": "2019-11-29T08:49:07.590Z",
                "last_modified": "2019-11-29T08:49:07.590Z",
                "id": "5de0db83dedee200147c1611"
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71b22",
                "visible": true,
                "disable": false,
                "dynamic_by_field": {
                  "effect": "visible",
                  "groups": [
                    [
                      {
                        "value": [
                          "Y"
                        ],
                        "section": "Health_Check2",
                        "rule": "must_equal",
                        "field": "A75"
                      }
                    ]
                  ]
                },
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
              "_id": "5ea6a7837250577ca9c71922",
              "name": "A79",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [],
              "control_type": "TEXTFIELD",
              "counted_character": true,
              "default_value": "",
              "field_display": "Câu 10 - tuổi - anh/chị/em",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.712Z",
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
                "name": "Number",
                "arguments": {},
                "content": "var regex1 = /[^\\s0-9]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n",
                "created_date": "2019-11-29T08:49:07.590Z",
                "last_modified": "2019-11-29T08:49:07.590Z",
                "id": "5de0db83dedee200147c1611"
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71922",
                "visible": true,
                "disable": false,
                "dynamic_by_field": {
                  "effect": "visible",
                  "groups": [
                    [
                      {
                        "value": [
                          "Y"
                        ],
                        "section": "Health_Check2",
                        "rule": "must_equal",
                        "field": "A75"
                      }
                    ]
                  ]
                },
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
              "_id": "5ea6a7837250577ca9c71a23",
              "name": "A80",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [],
              "control_type": "TEXTFIELD",
              "counted_character": true,
              "default_value": "",
              "field_display": "Câu 10 - tuổi qua đời - cha/me",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.712Z",
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
                "name": "Number",
                "arguments": {},
                "content": "var regex1 = /[^\\s0-9]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n",
                "created_date": "2019-11-29T08:49:07.590Z",
                "last_modified": "2019-11-29T08:49:07.590Z",
                "id": "5de0db83dedee200147c1611"
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71a23",
                "visible": true,
                "disable": false,
                "dynamic_by_field": {
                  "effect": "visible",
                  "groups": [
                    [
                      {
                        "value": [
                          "Y"
                        ],
                        "section": "Health_Check2",
                        "rule": "must_equal",
                        "field": "A75"
                      }
                    ]
                  ]
                },
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
              "_id": "5ea6a7837250577ca9c719d1",
              "name": "A81",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [],
              "control_type": "TEXTFIELD",
              "counted_character": true,
              "default_value": "",
              "field_display": "Câu 10- tuổi qua đời - anh/chị/em",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.712Z",
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
                "name": "Number",
                "arguments": {},
                "content": "var regex1 = /[^\\s0-9]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n",
                "created_date": "2019-11-29T08:49:07.590Z",
                "last_modified": "2019-11-29T08:49:07.590Z",
                "id": "5de0db83dedee200147c1611"
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c719d1",
                "visible": true,
                "disable": false,
                "dynamic_by_field": {
                  "effect": "visible",
                  "groups": [
                    [
                      {
                        "value": [
                          "Y"
                        ],
                        "section": "Health_Check2",
                        "rule": "must_equal",
                        "field": "A75"
                      }
                    ]
                  ]
                },
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
              "_id": "5ea6a7837250577ca9c7187c",
              "name": "A82",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 11:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.712Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c7187c",
                "visible": true,
                "disable": false,
                "double_typing": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5ea6a7837250577ca9c71980",
              "name": "A83",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 12:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.712Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71980",
                "visible": true,
                "disable": false,
                "double_typing": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5ea6a7837250577ca9c71acf",
              "name": "A84",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 13:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.713Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71acf",
                "visible": true,
                "disable": false,
                "double_typing": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5ea6a7837250577ca9c71828",
              "name": "A85",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 14:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.713Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71828",
                "visible": true,
                "disable": false,
                "double_typing": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5ea6a7837250577ca9c71a77",
              "name": "A86",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 15:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.713Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71a77",
                "visible": true,
                "disable": false,
                "double_typing": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5ea6a7837250577ca9c718d0",
              "name": "A87",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 16:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.713Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c718d0",
                "visible": true,
                "disable": false,
                "double_typing": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5ea6a7837250577ca9c71b23",
              "name": "A88",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 17:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.713Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71b23",
                "visible": true,
                "disable": false,
                "double_typing": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5ea6a7837250577ca9c71924",
              "name": "A89",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 18:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.713Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71924",
                "visible": true,
                "disable": false,
                "double_typing": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5ea6a7837250577ca9c71a25",
              "name": "A90",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 19:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.713Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71a25",
                "visible": true,
                "disable": false,
                "double_typing": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5ea6a7837250577ca9c719d3",
              "name": "A91",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 20:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.713Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c719d3",
                "visible": true,
                "disable": false,
                "double_typing": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5ea6a7837250577ca9c7187e",
              "name": "A92",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 21:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.713Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c7187e",
                "visible": true,
                "disable": false,
                "double_typing": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5ea6a7837250577ca9c71981",
              "name": "A93",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 22:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.713Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71981",
                "visible": true,
                "disable": false,
                "double_typing": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5ea6a7837250577ca9c71ad2",
              "name": "A94",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 23:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.714Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71ad2",
                "visible": true,
                "disable": false,
                "double_typing": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5ea6a7837250577ca9c7182a",
              "name": "A95",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 24:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.714Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c7182a",
                "visible": true,
                "disable": false,
                "double_typing": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5ea6a7837250577ca9c71a79",
              "name": "A96",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 25:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.714Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71a79",
                "visible": true,
                "disable": false,
                "double_typing": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5ea6a7837250577ca9c718d2",
              "name": "A97",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 26:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.714Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c718d2",
                "visible": true,
                "disable": false,
                "double_typing": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5ea6a7837250577ca9c71b25",
              "name": "A98",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 27:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.714Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71b25",
                "visible": true,
                "disable": false,
                "double_typing": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5ea6a7837250577ca9c71926",
              "name": "A99",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 28:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.714Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71926",
                "visible": true,
                "disable": false,
                "double_typing": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5ea6a7837250577ca9c71956",
              "name": "A100",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 29:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.686Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71956",
                "visible": true,
                "disable": false,
                "double_typing": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5ea6a7837250577ca9c71aa7",
              "name": "A101",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 30:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.687Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71aa7",
                "visible": true,
                "disable": false,
                "double_typing": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5ea6a7837250577ca9c71800",
              "name": "A102",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 31:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.687Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71800",
                "visible": true,
                "disable": false,
                "double_typing": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5eb29359898352001baffcd0",
              "name": "A608",
              "field_display": "Q31_ngày dự sinh",
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
                "content": "if(value.length <8){\r\n     return [{type:\"error\",message:\"Không đúng định dạng ddmmyyyy\"}]\r\n}\r\n\r\nfunction chkDate(date){\r\n\tvar dd = date.substring(0,2);\r\n\tvar mm = date.substring(2,4);\r\n\tvar yy = date.substring(4,6);\r\n\tvar tmpDate = new Date();\r\n\tvar y = tmpDate.getFullYear()+\"\";\r\n\ty = y.substring(2,4)*1 + 1;\r\n\r\n\t//Gan gia tri nam la 19YY neu YY > nam hien tai + 1\r\n\t//Gan gia tri nam la 20YY neu YY <= nam hien tai + 1\r\n\tif(yy*1>y){ yy = 19+yy;\r\n\t}else {yy = 20+yy;}\r\n\r\n\treturn dd+mm+yy;\t\r\n}\r\n\r\nfunction formatdate(ngay_hieu_luc_in78){\r\nvar fvalue = ngay_hieu_luc_in78;\r\n\tvar regex = /^(?:(?:31(|\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(|\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(|\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(|\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$/\r\n\tvar regex1 = /^\\d{6}$/;\r\n\tvar regex2 = /^(\\s*|[0-9\\.\\/\\-]{0,10})$/ ;\r\n\tvar date;\r\nif(fvalue === \"\") return ;\r\n\tif(regex1.test(fvalue))\r\n\treturn ;\r\n\tif(regex2.test(fvalue)){\r\n\t\r\n\tif(!regex.test(fvalue)){\r\n\t\treturn [{type:\"error\",message:\"Ngày Tháng Năm không phù hợp, vui lòng kiểm tra lại.\"}]\r\n\t}\r\n}else{\r\n    return [{type:\"error\",message:\"Không đúng định dạng ddmmyyyy\"}]\r\n}\r\nfvalue = fvalue.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'');\r\nif(fvalue.length === 6){\r\n\tfvalue = chkDate(fvalue);\r\n}\r\nvar dd = fvalue.substring(0, 2);\r\nvar mm = fvalue.substring(2, 4);\r\nvar yy = fvalue.substring(4, 8);\r\nvar tmpDate = new Date();\r\nvar d = tmpDate.getDate();\r\nvar m = tmpDate.getMonth();\r\nvar y = tmpDate.getFullYear();\r\nvar inputDate = new Date(yy, mm - 1, dd);\r\nvar curDate = new Date(y, m, d);\r\n\r\n\r\n\r\n//So sanh ngay nhap voi ngay hien tai\r\nif (inputDate > curDate) {\r\n return [{type:\"warning\", message:\"Năm nhập lớn hơn năm hiện tại\"}]\r\n}\r\n\r\n\r\n}\r\n\r\nreturn formatdate(value);",
                "arguments": {}
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "    var regex1 = /^\\d{6}$/;\n    \nfunction removeSpace(input){\n    var regex = /^(?:(?:31(|\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(|\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(|\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(|\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$/\n\tif(regex.test(input)){\n\t\tinput = input.replace(/([0-9]{2})([0-9]{2})([0-9]{4})/,'$1/$2/$3') + '';\n\t}\n\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\n\n\tinput = input.trim();\n\n\treturn input;\n}\nfunction chkDate(date){\n\tvar dd = date.substring(0,2);\n\tvar mm = date.substring(2,4);\n\tvar yy = date.substring(4,6);\n\tvar tmpDate = new Date();\n\tvar y = tmpDate.getFullYear()+\"\";\n\ty = y.substring(2,4)*1 + 1;\n\n\t//Gan gia tri nam la 19YY neu YY > nam hien tai + 1\n\t//Gan gia tri nam la 20YY neu YY <= nam hien tai + 1\n\tif(yy*1>y){ yy = 19+yy;\n\t}else {yy = 20+yy;}\n\n\treturn dd+mm+yy;\t\n}\nvalue = value.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'');\nif(value.length === 6){\n    return chkDate(value)}\nreturn removeSpace(value);",
                "created_date": "2020-04-27T07:08:22.358Z",
                "last_modified": "2020-04-27T07:09:29.160Z",
                "id": "5ea684e696527c001be0c516"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "created_date": "2020-05-06T10:37:13.677Z",
              "last_modified": "2020-07-06T09:59:31.710Z",
              "text_type": "",
              "field_setting": {
                "field_id": "5eb29359898352001baffcd0",
                "visible": true,
                "disable": false,
                "dynamic_by_field": {
                  "effect": "visible",
                  "groups": [
                    [
                      {
                        "value": [
                          "Y"
                        ],
                        "section": "Health_Check2",
                        "rule": "must_equal",
                        "field": "A102"
                      }
                    ]
                  ]
                },
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
              "_id": "5ea6a7837250577ca9c71a4f",
              "name": "A103",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 32:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.687Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71a4f",
                "visible": true,
                "disable": false,
                "double_typing": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5ea6a7837250577ca9c71802",
              "name": "A111",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Tick : Câu 5 phần Cam kết có tick hay không",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.689Z",
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
                "content": "if(!value){\n    return [{type : \"warning\" , message : \"Field đang trống, vui lòng kiểm tra lại trước khi save\"}];\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71802",
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
              "_id": "5ea6a7837250577ca9c71a54",
              "name": "A112",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [],
              "control_type": "TEXTFIELD",
              "counted_character": true,
              "default_value": "",
              "field_display": "Ngày tháng năm",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.689Z",
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
                "content": "function chkDate(date){\r\n\tvar dd = date.substring(0,2);\r\n\tvar mm = date.substring(2,4);\r\n\tvar yy = date.substring(4,6);\r\n\tvar tmpDate = new Date();\r\n\tvar y = tmpDate.getFullYear()+\"\";\r\n\ty = y.substring(2,4)*1 + 1;\r\n\r\n\t//Gan gia tri nam la 19YY neu YY > nam hien tai + 1\r\n\t//Gan gia tri nam la 20YY neu YY <= nam hien tai + 1\r\n\tif(yy*1>y){ yy = 19+yy;\r\n\t}else {yy = 20+yy;}\r\n\r\n\treturn dd+mm+yy;\t\r\n}\r\n\r\nfunction formatdate(ngay_hieu_luc_in78){\r\nvar fvalue = ngay_hieu_luc_in78;\r\n\tvar regex = /^(?:(?:31(|\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(|\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(|\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(|\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$/\r\n\tvar regex1 = /^\\d{6}$/;\r\n\tvar regex2 = /^(\\s*|[0-9\\.\\/\\-]+)$/ ;\r\n\tvar date;\r\nif(fvalue === \"\") return ;\r\n\tif(regex1.test(fvalue))\r\n\treturn ;\r\n\tif(regex2.test(fvalue)){\r\n\t\r\n\tif(!regex.test(fvalue)){\r\n\t\treturn [{type:\"warning\",message:\"Ngày Tháng Năm không phù hợp, vui lòng kiểm tra lại.\"}]\r\n\t}\r\n}else{\r\n    return [{type:\"error\",message:\"Không đúng định dạng ddmmyyyy\"}]\r\n}\r\nfvalue = fvalue.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'');\r\nif(fvalue.length === 6){\r\n\tfvalue = chkDate(fvalue);\r\n}\r\nvar dd = fvalue.substring(0, 2);\r\nvar mm = fvalue.substring(2, 4);\r\nvar yy = fvalue.substring(4, 8);\r\nvar tmpDate = new Date();\r\nvar d = tmpDate.getDate();\r\nvar m = tmpDate.getMonth();\r\nvar y = tmpDate.getFullYear();\r\nvar inputDate = new Date(yy, mm - 1, dd);\r\nvar curDate = new Date(y, m, d);\r\n\r\n\r\n\r\n//So sanh ngay nhap voi ngay hien tai\r\nif (inputDate > curDate) {\r\n return [{type:\"warning\", message:\"Năm nhập lớn hơn năm hiện tại\"}]\r\n}\r\n\r\n\r\n}\r\n\r\nreturn formatdate(value);",
                "created_date": "2019-11-28T06:50:27.116Z",
                "last_modified": "2019-11-28T06:50:27.116Z",
                "id": "5ddf6e33dedee200147c15f7"
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71a54",
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
              "_id": "5ea6a7837250577ca9c7185e",
              "name": "A145",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 1:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.693Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c7185e",
                "visible": true,
                "disable": false,
                "double_typing": false,
                "argument_details": [
                  {
                    "value": "Có"
                  },
                  {
                    "value": "Không"
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
              "_id": "5ea6a7837250577ca9c71960",
              "name": "A146",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [],
              "control_type": "TEXTFIELD",
              "counted_character": true,
              "default_value": "",
              "field_display": "Câu 1: Thành Phố",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.693Z",
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
                "content": "",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71960",
                "visible": true,
                "disable": false,
                "dynamic_by_field": {
                  "effect": "visible",
                  "groups": [
                    [
                      {
                        "value": [
                          "Y"
                        ],
                        "section": "Health_Check2",
                        "rule": "must_equal",
                        "field": "A145"
                      }
                    ]
                  ]
                },
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
              "_id": "5ea6a7837250577ca9c71ab1",
              "name": "A147",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [],
              "control_type": "TEXTFIELD",
              "counted_character": true,
              "default_value": "",
              "field_display": "Câu 1: Thời gian và mục đích",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.693Z",
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
                "content": "",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71ab1",
                "visible": true,
                "disable": false,
                "dynamic_by_field": {
                  "effect": "visible",
                  "groups": [
                    [
                      {
                        "value": [
                          "Y"
                        ],
                        "section": "Health_Check2",
                        "rule": "must_equal",
                        "field": "A145"
                      }
                    ]
                  ]
                },
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
              "_id": "5ea6a7837250577ca9c7180a",
              "name": "A148",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [],
              "control_type": "TEXTFIELD",
              "counted_character": true,
              "default_value": "",
              "field_display": "Câu 1: Ngày đi gần nhất",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.693Z",
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
                "content": "    var regex1 = /^\\d{6}$/;\n    \nfunction removeSpace(input){\n    var regex = /^(?:(?:31(|\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(|\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(|\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(|\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$/\n\tif(regex.test(input)){\n\t\tinput = input.replace(/([0-9]{2})([0-9]{2})([0-9]{4})/,'$1/$2/$3') + '';\n\t}\n\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\n\n\tinput = input.trim();\n\n\treturn input;\n}\nfunction chkDate(date){\n\tvar dd = date.substring(0,2);\n\tvar mm = date.substring(2,4);\n\tvar yy = date.substring(4,6);\n\tvar tmpDate = new Date();\n\tvar y = tmpDate.getFullYear()+\"\";\n\ty = y.substring(2,4)*1 + 1;\n\n\t//Gan gia tri nam la 19YY neu YY > nam hien tai + 1\n\t//Gan gia tri nam la 20YY neu YY <= nam hien tai + 1\n\tif(yy*1>y){ yy = 19+yy;\n\t}else {yy = 20+yy;}\n\n\treturn dd+mm+yy;\t\n}\nvalue = value.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'');\nif(value.length === 6){\n    return chkDate(value)}\nreturn removeSpace(value);",
                "created_date": "2019-11-28T06:52:45.384Z",
                "last_modified": "2019-11-28T06:54:20.188Z",
                "id": "5ddf6ebddedee200147c15f8"
              },
              "text_type": "DATE",
              "tooltip": "",
              "validation": {
                "name": "Date",
                "arguments": {},
                "content": "function chkDate(date){\r\n\tvar dd = date.substring(0,2);\r\n\tvar mm = date.substring(2,4);\r\n\tvar yy = date.substring(4,6);\r\n\tvar tmpDate = new Date();\r\n\tvar y = tmpDate.getFullYear()+\"\";\r\n\ty = y.substring(2,4)*1 + 1;\r\n\r\n\t//Gan gia tri nam la 19YY neu YY > nam hien tai + 1\r\n\t//Gan gia tri nam la 20YY neu YY <= nam hien tai + 1\r\n\tif(yy*1>y){ yy = 19+yy;\r\n\t}else {yy = 20+yy;}\r\n\r\n\treturn dd+mm+yy;\t\r\n}\r\n\r\nfunction formatdate(ngay_hieu_luc_in78){\r\nvar fvalue = ngay_hieu_luc_in78;\r\n\tvar regex = /^(?:(?:31(|\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(|\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(|\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(|\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$/\r\n\tvar regex1 = /^\\d{6}$/;\r\n\tvar regex2 = /^(\\s*|[0-9\\.\\/\\-]+)$/ ;\r\n\tvar date;\r\nif(fvalue === \"\") return ;\r\n\tif(regex1.test(fvalue))\r\n\treturn ;\r\n\tif(regex2.test(fvalue)){\r\n\t\r\n\tif(!regex.test(fvalue)){\r\n\t\treturn [{type:\"warning\",message:\"Ngày Tháng Năm không phù hợp, vui lòng kiểm tra lại.\"}]\r\n\t}\r\n}else{\r\n    return [{type:\"error\",message:\"Không đúng định dạng ddmmyyyy\"}]\r\n}\r\nfvalue = fvalue.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'');\r\nif(fvalue.length === 6){\r\n\tfvalue = chkDate(fvalue);\r\n}\r\nvar dd = fvalue.substring(0, 2);\r\nvar mm = fvalue.substring(2, 4);\r\nvar yy = fvalue.substring(4, 8);\r\nvar tmpDate = new Date();\r\nvar d = tmpDate.getDate();\r\nvar m = tmpDate.getMonth();\r\nvar y = tmpDate.getFullYear();\r\nvar inputDate = new Date(yy, mm - 1, dd);\r\nvar curDate = new Date(y, m, d);\r\n\r\n\r\n\r\n//So sanh ngay nhap voi ngay hien tai\r\nif (inputDate > curDate) {\r\n return [{type:\"warning\", message:\"Năm nhập lớn hơn năm hiện tại\"}]\r\n}\r\n\r\n\r\n}\r\n\r\nreturn formatdate(value);",
                "created_date": "2019-11-28T06:50:27.116Z",
                "last_modified": "2019-11-28T06:50:27.116Z",
                "id": "5ddf6e33dedee200147c15f7"
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c7180a",
                "visible": true,
                "disable": false,
                "dynamic_by_field": {
                  "effect": "visible",
                  "groups": [
                    [
                      {
                        "value": [
                          "Y"
                        ],
                        "section": "Health_Check2",
                        "rule": "must_equal",
                        "field": "A145"
                      }
                    ]
                  ]
                },
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
              "_id": "5ea6a7837250577ca9c71a59",
              "name": "A149",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [],
              "control_type": "TEXTFIELD",
              "counted_character": true,
              "default_value": "",
              "field_display": "Câu 1: Ngày dự định đi",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.693Z",
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
                "content": "    var regex1 = /^\\d{6}$/;\n    \nfunction removeSpace(input){\n    var regex = /^(?:(?:31(|\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(|\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(|\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(|\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$/\n\tif(regex.test(input)){\n\t\tinput = input.replace(/([0-9]{2})([0-9]{2})([0-9]{4})/,'$1/$2/$3') + '';\n\t}\n\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\n\n\tinput = input.trim();\n\n\treturn input;\n}\nfunction chkDate(date){\n\tvar dd = date.substring(0,2);\n\tvar mm = date.substring(2,4);\n\tvar yy = date.substring(4,6);\n\tvar tmpDate = new Date();\n\tvar y = tmpDate.getFullYear()+\"\";\n\ty = y.substring(2,4)*1 + 1;\n\n\t//Gan gia tri nam la 19YY neu YY > nam hien tai + 1\n\t//Gan gia tri nam la 20YY neu YY <= nam hien tai + 1\n\tif(yy*1>y){ yy = 19+yy;\n\t}else {yy = 20+yy;}\n\n\treturn dd+mm+yy;\t\n}\nvalue = value.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'');\nif(value.length === 6){\n    return chkDate(value)}\nreturn removeSpace(value);",
                "created_date": "2019-11-28T06:52:45.384Z",
                "last_modified": "2019-11-28T06:54:20.188Z",
                "id": "5ddf6ebddedee200147c15f8"
              },
              "text_type": "DATE",
              "tooltip": "",
              "validation": {
                "name": "Date",
                "arguments": {},
                "content": "function chkDate(date){\r\n\tvar dd = date.substring(0,2);\r\n\tvar mm = date.substring(2,4);\r\n\tvar yy = date.substring(4,6);\r\n\tvar tmpDate = new Date();\r\n\tvar y = tmpDate.getFullYear()+\"\";\r\n\ty = y.substring(2,4)*1 + 1;\r\n\r\n\t//Gan gia tri nam la 19YY neu YY > nam hien tai + 1\r\n\t//Gan gia tri nam la 20YY neu YY <= nam hien tai + 1\r\n\tif(yy*1>y){ yy = 19+yy;\r\n\t}else {yy = 20+yy;}\r\n\r\n\treturn dd+mm+yy;\t\r\n}\r\n\r\nfunction formatdate(ngay_hieu_luc_in78){\r\nvar fvalue = ngay_hieu_luc_in78;\r\n\tvar regex = /^(?:(?:31(|\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(|\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(|\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(|\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$/\r\n\tvar regex1 = /^\\d{6}$/;\r\n\tvar regex2 = /^(\\s*|[0-9\\.\\/\\-]+)$/ ;\r\n\tvar date;\r\nif(fvalue === \"\") return ;\r\n\tif(regex1.test(fvalue))\r\n\treturn ;\r\n\tif(regex2.test(fvalue)){\r\n\t\r\n\tif(!regex.test(fvalue)){\r\n\t\treturn [{type:\"warning\",message:\"Ngày Tháng Năm không phù hợp, vui lòng kiểm tra lại.\"}]\r\n\t}\r\n}else{\r\n    return [{type:\"error\",message:\"Không đúng định dạng ddmmyyyy\"}]\r\n}\r\nfvalue = fvalue.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'');\r\nif(fvalue.length === 6){\r\n\tfvalue = chkDate(fvalue);\r\n}\r\nvar dd = fvalue.substring(0, 2);\r\nvar mm = fvalue.substring(2, 4);\r\nvar yy = fvalue.substring(4, 8);\r\nvar tmpDate = new Date();\r\nvar d = tmpDate.getDate();\r\nvar m = tmpDate.getMonth();\r\nvar y = tmpDate.getFullYear();\r\nvar inputDate = new Date(yy, mm - 1, dd);\r\nvar curDate = new Date(y, m, d);\r\n\r\n\r\n\r\n//So sanh ngay nhap voi ngay hien tai\r\nif (inputDate > curDate) {\r\n return [{type:\"warning\", message:\"Năm nhập lớn hơn năm hiện tại\"}]\r\n}\r\n\r\n\r\n}\r\n\r\nreturn formatdate(value);",
                "created_date": "2019-11-28T06:50:27.116Z",
                "last_modified": "2019-11-28T06:50:27.116Z",
                "id": "5ddf6e33dedee200147c15f7"
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71a59",
                "visible": true,
                "disable": false,
                "dynamic_by_field": {
                  "effect": "visible",
                  "groups": [
                    [
                      {
                        "value": [
                          "Y"
                        ],
                        "section": "Health_Check2",
                        "rule": "must_equal",
                        "field": "A145"
                      }
                    ]
                  ]
                },
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
              "_id": "5ea6a7837250577ca9c71b05",
              "name": "A150",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 2:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.694Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71b05",
                "visible": true,
                "disable": false,
                "double_typing": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5ea6a7837250577ca9c71906",
              "name": "A151",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 3:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.694Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71906",
                "visible": true,
                "disable": false,
                "double_typing": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5ea6a7837250577ca9c71a07",
              "name": "A152",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Cẩu 4:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.694Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71a07",
                "visible": true,
                "disable": false,
                "double_typing": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5ea6a7837250577ca9c719b5",
              "name": "A153",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 5:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.694Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c719b5",
                "visible": true,
                "disable": false,
                "double_typing": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5ea6a7837250577ca9c71860",
              "name": "A154",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [],
              "control_type": "TEXTFIELD",
              "counted_character": true,
              "default_value": "",
              "field_display": "Câu 5: Số lượng/ngày",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.694Z",
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
                "content": "var regex1 = /[^\\s0-9]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71860",
                "visible": true,
                "disable": false,
                "dynamic_by_field": {
                  "effect": "visible",
                  "groups": [
                    [
                      {
                        "value": [
                          "Y"
                        ],
                        "section": "Health_Check2",
                        "rule": "must_equal",
                        "field": "A153"
                      }
                    ]
                  ]
                },
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
              "_id": "5ea6a7837250577ca9c71963",
              "name": "A155",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 6:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.694Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71963",
                "visible": true,
                "disable": false,
                "double_typing": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
          "id": "5ea6a7837250577ca9c71b80"
        },
        {
          "name": "Health_Check_C6_2",
          "layout_name": "Health_Check",
          "index": 3,
           "type": "grid",
          "layout_id": "5ea6a7837250577ca9c71850",
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
              "_id": "5ea6a7837250577ca9c71ac7",
              "name": "A520",
              "label": "Label1",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Bia nhẹ",
                "Rượu nhẹ",
                "Rượu mạnh"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "",
              "field_display": "Câu 6: Loại",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.708Z",
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
                "field_id": "5ea6a7837250577ca9c71ac7",
                "visible": true,
                "disable": false,
                "dynamic_by_field": {
                  "effect": "visible",
                  "groups": [
                    [
                      {
                        "value": [
                          "Y"
                        ],
                        "section": "Health_Check2",
                        "rule": "must_equal",
                        "field": "A155"
                      }
                    ]
                  ]
                },
                "switch_disable": false,
                "double_typing": false,
                "disable_auto_fill_ocr": false,
                "argument_details": [
                  {
                    "value": "Bia nhẹ"
                  },
                  {
                    "value": "Rượu nhẹ"
                  },
                  {
                    "value": "Rượu mạnh"
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
              "_id": "5ea6a7837250577ca9c71ab3",
              "name": "A156",
              "label": "Label1",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [],
              "control_type": "TEXTFIELD",
              "counted_character": true,
              "default_value": "",
              "field_display": "Câu 6: Số Lượng Uống",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.694Z",
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
                "content": "var regex1 = /[^\\s0-9]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71ab3",
                "visible": true,
                "disable": false,
                "dynamic_by_field": {
                  "effect": "visible",
                  "groups": [
                    [
                      {
                        "value": [
                          "Y"
                        ],
                        "section": "Health_Check2",
                        "rule": "must_equal",
                        "field": "A155"
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
              "_id": "5ea6a7837250577ca9c7180c",
              "name": "A157",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Hàng Ngày",
                "Hàng Tuần"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "",
              "field_display": "Câu 6: Tần suất sử dụng",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.694Z",
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
                "content": "",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c7180c",
                "visible": true,
                "disable": false,
                "dynamic_by_field": {
                  "effect": "visible",
                  "groups": [
                    [
                      {
                        "value": [
                          "Y"
                        ],
                        "section": "Health_Check2",
                        "rule": "must_equal",
                        "field": "A155"
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
            }
          ],
          "id": "5ea6a7837250577ca9c71bb6"
        },
        {
          "name": "Health_Check3",
          "layout_name": "Health_Check",
          "index": 4,
           "type": "single",
          "layout_id": "5ea6a7837250577ca9c71850",
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
              "_id": "5ea6a7837250577ca9c71a5c",
              "name": "A158",
               "label": "Label1",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 7:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.694Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71a5c",
                "visible": true,
                "disable": false,
                "switch_disable": false,
                "double_typing": false,
                "disable_auto_fill_ocr": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5ea6a7837250577ca9c718b4",
              "name": "A159",
               "label": "Label1",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 8:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.694Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c718b4",
                "visible": true,
                "disable": false,
                "switch_disable": false,
                "double_typing": false,
                "disable_auto_fill_ocr": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5ea6a7837250577ca9c7190a",
              "name": "A160",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [],
              "control_type": "TEXTFIELD",
              "counted_character": true,
              "default_value": "",
              "field_display": "Câu 9a: chiều cao",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.695Z",
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
                "name": "decimal_number",
                "arguments": {},
                "content": "\nvar tmp = (value*1000 + 0.1*1000 - 0.1*1000)/10 ;\n\nif(!tmp&&tmp!==0){\n    return [{\n        type : 'error',\n        message: 'Dữ liệu nhập phải là chuỗi số thập phân'\n    }]\n}\n\nif(value<0){\n    return [{\n            type:'error',\n            message:'Không được nhập giá trị âm.'\n        }]\n}\n\nvar [ng,tp] =value.split('.')\n\n// if(ng&&ng.length>=3){\n//      return [{\n//          type : \"error\",\n//         message :\"Field nhập lớn hơn 100\"\n//     }]\n// }\n\n\nif(tp&&tp.length>2){\n     return [{\n         type : \"error\",\n        message :\"Field nhập quá 2 số thập phân\"\n    }]\n}\n\n\nif(!value){\n    return [{type : \"warning\",\n        message :\"Field Rỗng, cần kiểm tra lại!\"\n    }]\n}",
                "created_date": "2020-05-06T08:51:25.797Z",
                "last_modified": "2020-05-06T09:12:38.041Z",
                "id": "5eb27a8d3d64d3001bf43ed4"
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c7190a",
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
              "_id": "5ea6a7837250577ca9c71a09",
              "name": "A161",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [],
              "control_type": "TEXTFIELD",
              "counted_character": true,
              "default_value": "",
              "field_display": "Câu 9a: cân nặng",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.695Z",
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
                "name": "decimal_number",
                "arguments": {},
                "content": "if(value.split('.').length==2&&(value.split('.')[1].trim().length===0||value.split('.')[0].trim().length===0)){\n    return [{\n            type:'error',\n            message:'Dữ liệu nhập phải là số thập phân'\n    }]\n}\n\n// var num = parseFloat(value).toFixed(3);\nvar tmp = (value*1000 + 0.1*1000 - 0.1*1000)/10 ;\n\n\nvar [ng,tp] =value.split('.')\n// if(value.split('.').length>2){\n//     return [{\n//             type:'warning',\n//             message:'Netto nhập quá 2 số thập phân'\n//     }]\n// }\n\nif(tp&&tp.length>2){\n     return [{type : \"warning\",\n        message :\"nhập quá 2 số thập phân\"\n    }]\n}\n\nif(!tmp&&tmp!==0){\n    return [{\n        type : 'error',\n        message: 'Dữ liệu nhập phải là chuỗi số thập phân'\n    }]\n}\nif(value<0){\n    return [\n        {\n            type:'error',\n            message:'Không được nhập giá trị âm.'\n        }\n        ]\n}\n",
                "created_date": "2019-12-28T09:47:49.178Z",
                "last_modified": "2019-12-28T09:47:49.178Z",
                "id": "5e0724c548fa7900143a5cd0"
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71a09",
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
              "_id": "5ea6a7837250577ca9c719b8",
              "name": "A162",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 9b:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.695Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c719b8",
                "visible": true,
                "disable": false,
                "switch_disable": false,
                "double_typing": false,
                "disable_auto_fill_ocr": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5ea6a7837250577ca9c71862",
              "name": "A163",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 10:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.695Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71862",
                "visible": true,
                "disable": false,
                "switch_disable": false,
                "double_typing": false,
                "disable_auto_fill_ocr": false,
                "argument_details": [
                  {
                    "value": "Có"
                  },
                  {
                    "value": "Không"
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
              "_id": "5ea6a7837250577ca9c71964",
              "name": "A164",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [],
              "control_type": "TEXTFIELD",
              "counted_character": true,
              "default_value": "",
              "field_display": "Câu 10: tình trạng sức khỏe - cha/me",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.695Z",
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
                "content": "",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71964",
                "visible": true,
                "disable": false,
                "dynamic_by_field": {
                  "effect": "visible",
                  "groups": [
                    [
                      {
                        "value": [
                          "Y"
                        ],
                        "section": "Health_Check3",
                        "rule": "must_equal",
                        "field": "A163"
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
              "_id": "5ea6a7837250577ca9c71ab5",
              "name": "A165",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [],
              "control_type": "TEXTFIELD",
              "counted_character": true,
              "default_value": "",
              "field_display": "Câu 10: tình trạng sức khỏe - anh/chi/em",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.695Z",
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
                "content": "",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71ab5",
                "visible": true,
                "disable": false,
                "dynamic_by_field": {
                  "effect": "visible",
                  "groups": [
                    [
                      {
                        "value": [
                          "Y"
                        ],
                        "section": "Health_Check3",
                        "rule": "must_equal",
                        "field": "A163"
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
              "_id": "5ea6a7837250577ca9c7180e",
              "name": "A166",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [],
              "control_type": "TEXTFIELD",
              "counted_character": true,
              "default_value": "",
              "field_display": "Câu 10: tuổi - cha/mẹ",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.695Z",
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
                "name": "Number",
                "arguments": {},
                "content": "var regex1 = /[^\\s0-9]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n",
                "created_date": "2019-11-29T08:49:07.590Z",
                "last_modified": "2019-11-29T08:49:07.590Z",
                "id": "5de0db83dedee200147c1611"
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c7180e",
                "visible": true,
                "disable": false,
                "dynamic_by_field": {
                  "effect": "visible",
                  "groups": [
                    [
                      {
                        "value": [
                          "Y"
                        ],
                        "section": "Health_Check3",
                        "rule": "must_equal",
                        "field": "A163"
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
              "_id": "5ea6a7837250577ca9c71a5d",
              "name": "A167",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [],
              "control_type": "TEXTFIELD",
              "counted_character": true,
              "default_value": "",
              "field_display": "Câu 10: tuổi - anh/chị/em",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.695Z",
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
                "name": "Number",
                "arguments": {},
                "content": "var regex1 = /[^\\s0-9]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n",
                "created_date": "2019-11-29T08:49:07.590Z",
                "last_modified": "2019-11-29T08:49:07.590Z",
                "id": "5de0db83dedee200147c1611"
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71a5d",
                "visible": true,
                "disable": false,
                "dynamic_by_field": {
                  "effect": "visible",
                  "groups": [
                    [
                      {
                        "value": [
                          "Y"
                        ],
                        "section": "Health_Check3",
                        "rule": "must_equal",
                        "field": "A163"
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
              "_id": "5ea6a7837250577ca9c718b7",
              "name": "A168",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [],
              "control_type": "TEXTFIELD",
              "counted_character": true,
              "default_value": "",
              "field_display": "Câu 10: tuổi qua đời - cha/me",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.695Z",
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
                "name": "Number",
                "arguments": {},
                "content": "var regex1 = /[^\\s0-9]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n",
                "created_date": "2019-11-29T08:49:07.590Z",
                "last_modified": "2019-11-29T08:49:07.590Z",
                "id": "5de0db83dedee200147c1611"
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c718b7",
                "visible": true,
                "disable": false,
                "dynamic_by_field": {
                  "effect": "visible",
                  "groups": [
                    [
                      {
                        "value": [
                          "Y"
                        ],
                        "section": "Health_Check3",
                        "rule": "must_equal",
                        "field": "A163"
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
              "_id": "5ea6a7837250577ca9c71b09",
              "name": "A169",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [],
              "control_type": "TEXTFIELD",
              "counted_character": true,
              "default_value": "",
              "field_display": "Câu 10: tuổi qua đời- anh/chị/em",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.696Z",
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
                "name": "Number",
                "arguments": {},
                "content": "var regex1 = /[^\\s0-9]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n",
                "created_date": "2019-11-29T08:49:07.590Z",
                "last_modified": "2019-11-29T08:49:07.590Z",
                "id": "5de0db83dedee200147c1611"
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71b09",
                "visible": true,
                "disable": false,
                "dynamic_by_field": {
                  "effect": "visible",
                  "groups": [
                    [
                      {
                        "value": [
                          "Y"
                        ],
                        "section": "Health_Check3",
                        "rule": "must_equal",
                        "field": "A163"
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
              "_id": "5ea6a7837250577ca9c71a0b",
              "name": "A170",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 11:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.696Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71a0b",
                "visible": true,
                "disable": false,
                "switch_disable": false,
                "double_typing": false,
                "disable_auto_fill_ocr": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5ea6a7837250577ca9c719b9",
              "name": "A171",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 12:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.696Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c719b9",
                "visible": true,
                "disable": false,
                "switch_disable": false,
                "double_typing": false,
                "disable_auto_fill_ocr": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5ea6a7837250577ca9c71864",
              "name": "A172",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 13:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.697Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71864",
                "visible": true,
                "disable": false,
                "switch_disable": false,
                "double_typing": false,
                "disable_auto_fill_ocr": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5ea6a7837250577ca9c71966",
              "name": "A173",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 14:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.697Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71966",
                "visible": true,
                "disable": false,
                "switch_disable": false,
                "double_typing": false,
                "disable_auto_fill_ocr": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5ea6a7837250577ca9c71ab7",
              "name": "A174",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 15:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.697Z",
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
                "field_id": "5ea6a7837250577ca9c71ab7",
                "visible": true,
                "disable": false,
                "switch_disable": false,
                "double_typing": false,
                "disable_auto_fill_ocr": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5ea6a7837250577ca9c71810",
              "name": "A175",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 16:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.697Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71810",
                "visible": true,
                "disable": false,
                "switch_disable": false,
                "double_typing": false,
                "disable_auto_fill_ocr": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5ea6a7837250577ca9c71a5f",
              "name": "A176",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 17:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.698Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71a5f",
                "visible": true,
                "disable": false,
                "switch_disable": false,
                "double_typing": false,
                "disable_auto_fill_ocr": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5ea6a7837250577ca9c718b8",
              "name": "A177",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 18:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.698Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c718b8",
                "visible": true,
                "disable": false,
                "switch_disable": false,
                "double_typing": false,
                "disable_auto_fill_ocr": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5ea6a7837250577ca9c71b0b",
              "name": "A178",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 19:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.698Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71b0b",
                "visible": true,
                "disable": false,
                "switch_disable": false,
                "double_typing": false,
                "disable_auto_fill_ocr": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5ea6a7837250577ca9c7190c",
              "name": "A179",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 20:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.698Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c7190c",
                "visible": true,
                "disable": false,
                "switch_disable": false,
                "double_typing": false,
                "disable_auto_fill_ocr": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5ea6a7837250577ca9c719bb",
              "name": "A180",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 21:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.698Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c719bb",
                "visible": true,
                "disable": false,
                "switch_disable": false,
                "double_typing": false,
                "disable_auto_fill_ocr": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5ea6a7837250577ca9c71867",
              "name": "A181",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 22:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.698Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71867",
                "visible": true,
                "disable": false,
                "switch_disable": false,
                "double_typing": false,
                "disable_auto_fill_ocr": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5ea6a7837250577ca9c71968",
              "name": "A182",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 23",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.698Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71968",
                "visible": true,
                "disable": false,
                "switch_disable": false,
                "double_typing": false,
                "disable_auto_fill_ocr": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5ea6a7837250577ca9c71ab9",
              "name": "A183",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 24:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.699Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71ab9",
                "visible": true,
                "disable": false,
                "switch_disable": false,
                "double_typing": false,
                "disable_auto_fill_ocr": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5ea6a7837250577ca9c71812",
              "name": "A184",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 25:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.699Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71812",
                "visible": true,
                "disable": false,
                "switch_disable": false,
                "double_typing": false,
                "disable_auto_fill_ocr": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5ea6a7837250577ca9c71a61",
              "name": "A185",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 26:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.699Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71a61",
                "visible": true,
                "disable": false,
                "switch_disable": false,
                "double_typing": false,
                "disable_auto_fill_ocr": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5ea6a7837250577ca9c718ba",
              "name": "A186",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 27:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.699Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c718ba",
                "visible": true,
                "disable": false,
                "switch_disable": false,
                "double_typing": false,
                "disable_auto_fill_ocr": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5ea6a7837250577ca9c71b0e",
              "name": "A187",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 28:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.699Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71b0e",
                "visible": true,
                "disable": false,
                "switch_disable": false,
                "double_typing": false,
                "disable_auto_fill_ocr": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5ea6a7837250577ca9c7190e",
              "name": "A188",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 29:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.699Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c7190e",
                "visible": true,
                "disable": false,
                "switch_disable": false,
                "double_typing": false,
                "disable_auto_fill_ocr": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5ea6a7837250577ca9c71a0f",
              "name": "A189",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 30:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.699Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "text_type": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71a0f",
                "visible": true,
                "disable": false,
                "switch_disable": false,
                "double_typing": false,
                "disable_auto_fill_ocr": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5ea6a7837250577ca9c71868",
              "name": "A190",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 31:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.699Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71868",
                "visible": true,
                "disable": false,
                "switch_disable": false,
                "double_typing": false,
                "disable_auto_fill_ocr": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5eb29364898352001baffcd1",
              "name": "A609",
              "field_display": "Q31_ngày dự sinh",
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
                "content": "if(value.length <8){\r\n     return [{type:\"error\",message:\"Không đúng định dạng ddmmyyyy\"}]\r\n}\r\n\r\nfunction chkDate(date){\r\n\tvar dd = date.substring(0,2);\r\n\tvar mm = date.substring(2,4);\r\n\tvar yy = date.substring(4,6);\r\n\tvar tmpDate = new Date();\r\n\tvar y = tmpDate.getFullYear()+\"\";\r\n\ty = y.substring(2,4)*1 + 1;\r\n\r\n\t//Gan gia tri nam la 19YY neu YY > nam hien tai + 1\r\n\t//Gan gia tri nam la 20YY neu YY <= nam hien tai + 1\r\n\tif(yy*1>y){ yy = 19+yy;\r\n\t}else {yy = 20+yy;}\r\n\r\n\treturn dd+mm+yy;\t\r\n}\r\n\r\nfunction formatdate(ngay_hieu_luc_in78){\r\nvar fvalue = ngay_hieu_luc_in78;\r\n\tvar regex = /^(?:(?:31(|\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(|\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(|\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(|\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$/\r\n\tvar regex1 = /^\\d{6}$/;\r\n\tvar regex2 = /^(\\s*|[0-9\\.\\/\\-]{0,10})$/ ;\r\n\tvar date;\r\nif(fvalue === \"\") return ;\r\n\tif(regex1.test(fvalue))\r\n\treturn ;\r\n\tif(regex2.test(fvalue)){\r\n\t\r\n\tif(!regex.test(fvalue)){\r\n\t\treturn [{type:\"error\",message:\"Ngày Tháng Năm không phù hợp, vui lòng kiểm tra lại.\"}]\r\n\t}\r\n}else{\r\n    return [{type:\"error\",message:\"Không đúng định dạng ddmmyyyy\"}]\r\n}\r\nfvalue = fvalue.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'');\r\nif(fvalue.length === 6){\r\n\tfvalue = chkDate(fvalue);\r\n}\r\nvar dd = fvalue.substring(0, 2);\r\nvar mm = fvalue.substring(2, 4);\r\nvar yy = fvalue.substring(4, 8);\r\nvar tmpDate = new Date();\r\nvar d = tmpDate.getDate();\r\nvar m = tmpDate.getMonth();\r\nvar y = tmpDate.getFullYear();\r\nvar inputDate = new Date(yy, mm - 1, dd);\r\nvar curDate = new Date(y, m, d);\r\n\r\n\r\n\r\n//So sanh ngay nhap voi ngay hien tai\r\nif (inputDate > curDate) {\r\n return [{type:\"warning\", message:\"Năm nhập lớn hơn năm hiện tại\"}]\r\n}\r\n\r\n\r\n}\r\n\r\nreturn formatdate(value);",
                "arguments": {}
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "    var regex1 = /^\\d{6}$/;\n    \nfunction removeSpace(input){\n    var regex = /^(?:(?:31(|\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(|\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(|\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(|\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$/\n\tif(regex.test(input)){\n\t\tinput = input.replace(/([0-9]{2})([0-9]{2})([0-9]{4})/,'$1/$2/$3') + '';\n\t}\n\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\n\n\tinput = input.trim();\n\n\treturn input;\n}\nfunction chkDate(date){\n\tvar dd = date.substring(0,2);\n\tvar mm = date.substring(2,4);\n\tvar yy = date.substring(4,6);\n\tvar tmpDate = new Date();\n\tvar y = tmpDate.getFullYear()+\"\";\n\ty = y.substring(2,4)*1 + 1;\n\n\t//Gan gia tri nam la 19YY neu YY > nam hien tai + 1\n\t//Gan gia tri nam la 20YY neu YY <= nam hien tai + 1\n\tif(yy*1>y){ yy = 19+yy;\n\t}else {yy = 20+yy;}\n\n\treturn dd+mm+yy;\t\n}\nvalue = value.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'');\nif(value.length === 6){\n    return chkDate(value)}\nreturn removeSpace(value);",
                "created_date": "2020-04-27T07:08:22.358Z",
                "last_modified": "2020-04-27T07:09:29.160Z",
                "id": "5ea684e696527c001be0c516"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "created_date": "2020-05-06T10:37:24.659Z",
              "last_modified": "2020-07-06T09:59:31.710Z",
              "field_setting": {
                "field_id": "5eb29364898352001baffcd1",
                "visible": true,
                "disable": false,
                "dynamic_by_field": {
                  "effect": "visible",
                  "groups": [
                    [
                      {
                        "value": [
                          "Y"
                        ],
                        "section": "Health_Check3",
                        "rule": "must_equal",
                        "field": "A190"
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
              "_id": "5ea6a7837250577ca9c7196a",
              "name": "A191",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 32:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.699Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c7196a",
                "visible": true,
                "disable": false,
                "switch_disable": false,
                "double_typing": false,
                "disable_auto_fill_ocr": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5ea6a7837250577ca9c71abb",
              "name": "A192",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "N",
              "field_display": "Câu 33:",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.700Z",
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71abb",
                "visible": true,
                "disable": false,
                "switch_disable": false,
                "double_typing": false,
                "disable_auto_fill_ocr": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5ea6a7837250577ca9c71814",
              "name": "A193",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [],
              "control_type": "TEXTFIELD",
              "counted_character": true,
              "default_value": "",
              "field_display": "Câu 33: Đã học xong lớp mấy?",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.700Z",
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
                "content": "^(\\s*|[0-9]+)$",
                "description": "Chỉ được nhập số"
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
                "content": "",
                "arguments": {}
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71814",
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
              "_id": "5ea6a7837250577ca9c71a63",
              "name": "A194",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [],
              "control_type": "TEXTFIELD",
              "counted_character": true,
              "default_value": "",
              "field_display": "33. Số anh chị em ruột hiện có?",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.700Z",
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
                "name": "Number",
                "arguments": {},
                "content": "var regex1 = /[^\\s0-9]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n",
                "created_date": "2019-11-29T08:49:07.590Z",
                "last_modified": "2019-11-29T08:49:07.590Z",
                "id": "5de0db83dedee200147c1611"
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c71a63",
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
              "_id": "5ea6a7837250577ca9c718bc",
              "name": "A195",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [],
              "control_type": "TEXTFIELD",
              "counted_character": true,
              "default_value": "",
              "field_display": "33. Nếu Người được bảo hiểm từ 5 tuổi trở xuống, vui lòng cho biết cân nặng lúc sinh?",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.700Z",
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
                "name": "decimal_number",
                "arguments": {},
                "content": "if(value.split('.').length==2&&(value.split('.')[1].trim().length===0||value.split('.')[0].trim().length===0)){\n    return [{\n            type:'error',\n            message:'Dữ liệu nhập phải là số thập phân'\n    }]\n}\n\n// var num = parseFloat(value).toFixed(3);\nvar tmp = (value*1000 + 0.1*1000 - 0.1*1000)/10 ;\n\nvar [ng,tp] =value.split('.')\n// if(value.split('.').length>2){\n//     return [{\n//             type:'warning',\n//             message:'Netto nhập quá 2 số thập phân'\n//     }]\n// }\n\nif(tp&&tp.length>2){\n     return [{type : \"warning\",\n        message :\"nhập quá 2 số thập phân\"\n    }]\n}\n\nif(!tmp&&tmp!==0){\n    return [{\n        type : 'error',\n        message: 'Dữ liệu nhập phải là chuỗi số thập phân'\n    }]\n}\nif(value<0){\n    return [\n        {\n            type:'error',\n            message:'Không được nhập giá trị âm.'\n        }\n        ]\n}\n",
                "created_date": "2019-12-28T09:47:49.178Z",
                "last_modified": "2019-12-28T09:47:49.178Z",
                "id": "5e0724c548fa7900143a5cd0"
              },
              "value_broadcast": "",
              "field_setting": {
                "field_id": "5ea6a7837250577ca9c718bc",
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
              "_id": "5ea6a7837250577ca9c71b0f",
              "name": "A196",
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "argument_details": [
                "Y",
                "N"
              ],
              "control_type": "COMBOBOX",
              "counted_character": true,
              "default_value": "",
              "field_display": "Câu 33: Có sinh sớm hơn trước 4 tuần so với ngày dự sinh",
              "is_list": false,
              "last_modified": "2020-07-06T09:59:31.700Z",
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
                "field_id": "5ea6a7837250577ca9c71b0f",
                "visible": true,
                "disable": false,
                "dynamic_by_field": null,
                "switch_disable": false,
                "double_typing": false,
                "disable_auto_fill_ocr": false,
                "argument_details": [
                  {
                    "value": "Y"
                  },
                  {
                    "value": "N"
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
              "_id": "5eb29d3d898352001baffce1",
              "name": "RM5",
              "field_display": "Ghi Chú 5",
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
                "content": "if(value.length>23){\n    return [{type: \"error\",\n        message: `Không được nhập quá 23 ký tự `\n    }]\n}",
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
              "project_id": "5ea6a709ae6f27001bb9e2df",
              "created_date": "2020-05-06T11:19:25.877Z",
              "last_modified": "2020-07-06T09:59:31.729Z",
              "field_setting": {
                "field_id": "5eb29d3d898352001baffce1",
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
          "id": "5ea6a7837250577ca9c71ba2"
        }
      ]
}