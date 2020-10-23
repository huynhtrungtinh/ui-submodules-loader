export function getSections2() {
    return [
        {
            "layout_labels": null,
            "name": "Sub_Form1",
            "layout_name": "Sub_Form",
            "index": 0,
            "layout_id": "5ee3007c7250577ca96cbb28",
            "is_multiple": false,
            "position": {},
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
                "x": null,
                "y": null,
                "w": null,
                "h": null
            },
            "fields": [
                {
                    "_id": "5ee3007c7250577ca96cba6a",
                    "name": "SP01_05",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Họ và tên",
                    "is_list": false,
                    "last_modified": "2020-09-10T07:04:32.281Z",
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
                        "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nfunction transformGivenSurname(field_value) {\r\n  field_value = field_value.trim();\r\n  var fullString = '';\r\n  var arr_char = ['ß'];\r\n  if(field_value.includes(' ')){\r\n  \tvar arr = field_value.split(' ');\r\n    for(var i = 0 ; i < arr.length; i++){\r\n    \tvar strChild = arr[i];\r\n        if(strChild === strChild.toLowerCase() || strChild === strChild.toUpperCase()){\r\n \t       \tif(arr_char.includes(strChild.substring(0,1))){\r\n\t\t\t\tstrChild = strChild.substring(0,1) + strChild.substring(1,strChild.length).toLowerCase();\r\n          \t\tfullString += strChild + ' ';\r\n\t\t\t}else{\r\n           \t\tstrChild = strChild.substring(0,1).toUpperCase() + strChild.substring(1,strChild.length).toLowerCase();\r\n          \t\tfullString += strChild + ' ';\r\n            }\r\n          \r\n        }else{\r\n            strChild = strChild.substring(0,1).toUpperCase() + strChild.substring(1,strChild.length).toLowerCase();\r\n            fullString += strChild + ' ';\r\n        }\r\n    }\r\n  }else{\r\n  \tif(field_value === field_value.toLowerCase() || field_value === field_value.toUpperCase()){\r\n    \tif(arr_char.includes(field_value.substring(0,1))){\r\n\t\t\tfield_value = field_value.substring(0,1) + field_value.substring(1,field_value.length).toLowerCase();\r\n     \t\tfullString = field_value;\r\n\t\t}else{\r\n        \tfield_value = field_value.substring(0,1).toUpperCase() + field_value.substring(1,field_value.length).toLowerCase();\r\n      \t\tfullString = field_value;\r\n\t\t}\r\n      \r\n    }else{\r\n        field_value = field_value.substring(0,1).toUpperCase() + field_value.substring(1,field_value.length).toLowerCase();\r\n        fullString = field_value;\r\n    }\r\n  }\r\n  return fullString.trim();\r\n}\r\nreturn transformGivenSurname(removeSpace(value));",
                        "created_date": "2019-11-28T07:25:37.362Z",
                        "last_modified": "2019-11-28T07:25:37.362Z",
                        "id": "5ddf7671dedee200147c15f9"
                    },
                    "tooltip": "",
                    "validation": {
                        "name": "Text Tiếng Việt",
                        "arguments": {
                            "field": "SP01_11"
                        },
                        "content": "var regex1 = /[^\\sA-Za-zsáàảãạâăắằẳẵặặấầẩẫậéèẻẽẹêếềểễệíìỉĩịóòỏõọôơốồổỗộớờởỡợúùủũụưứừửữựýỳỷỹỵđÁÀẢÃẠÂĂẮẰẲẴẶẶẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔƠỐỒỔỖỘỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴĐ]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập chữ \"}]\r\n}\r\n\r\nfunction checkRuleEqual(value_crr =\"\" , value_brd = \"\"){\r\n    value_crr = value_crr.trim()\r\n    value_brd = value_brd.toUpperCase().trim()\r\n    \r\n    if(value_brd===\"F\" && !value_crr || value_brd===\"M\" && !value_crr ){\r\n       return [{type : \"error\" , message : \"Field giới tính là F hoặc M thì field Họ và Tên buộc phải có giá trị\"}];\r\n    }\r\n}\r\n\r\nreturn checkRuleEqual(value, field);",
                        "created_date": "2019-11-29T08:21:01.677Z",
                        "last_modified": "2019-11-29T08:33:51.062Z",
                        "id": "5de0d4eddedee200147c1603"
                    },
                    "value_broadcast": "",
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cba6a",
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
                    "_id": "5ee3007c7250577ca96cba70",
                    "name": "SP01_06",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Ngày tháng năm sinh",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.489Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cba70",
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
                    "_id": "5ee3007c7250577ca96cba76",
                    "name": "SP01_08",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Nơi Sinh",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.489Z",
                    "lookup_broadcast": [],
                    "lookup_source": {
                        "allow_multiple": false,
                        "characters_trigger_lookup": 1,
                        "group_project": "production",
                        "key_value": "prov_nm",
                        "locale": [
                            "165_191128_340_SUNLIFE"
                        ],
                        "lookup_after_time": 1,
                        "lookup_field": "province",
                        "name": "Sunlife_BirthPlace",
                        "param_set": "return [data.SP01_08]",
                        "result_view_config": [
                            {
                                "title": "Birth Place",
                                "key_value": "prov_nm"
                            }
                        ],
                        "related_columns": [],
                        "specific_project": "0",
                        "created_date": "2019-12-10T02:44:01.404Z",
                        "last_modified": "2019-12-10T02:44:01.404Z",
                        "id": "5def0671d3f551001f8958b4"
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
                        "content": "if (value){\n    async function checkValidation(value) {\n            let dataLookup =  await fetchJSON(`https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/province/[%22${value}%22]`);\n            let _value =value.toLowerCase(); \n            if (!Array.isArray(dataLookup.json_single)||dataLookup.json_single.map(item => item.prov_nm.toLowerCase()).findIndex(item => item === _value) === -1) {\n                            return [{\n                              type: \"error\",\n                              message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\n                            }]\n                         }\n            // if(value.toLowerCase().includes('nhhien'))             \n            //              return[{ \n            //                   type: 'warning',\n            //                   message: `Lookup warning value:${value}`}];\n    }\n    return await checkValidation(value);\n    }",
                        "arguments": {}
                    },
                    "value_broadcast": "",
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cba76",
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
                    "_id": "5ee3007c7250577ca96cba78",
                    "name": "SP01_09",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "Việt Nam",
                    "field_display": "Quốc Tịch 1",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.489Z",
                    "lookup_broadcast": [],
                    "lookup_source": {
                        "allow_multiple": false,
                        "characters_trigger_lookup": 1,
                        "group_project": "production",
                        "key_value": "value",
                        "locale": [
                            "165_191128_340_SUNLIFE"
                        ],
                        "lookup_after_time": 1,
                        "lookup_field": "nationality",
                        "name": "Sunlife_Nationality",
                        "param_set": "return [data.SP01_09]",
                        "result_view_config": [
                            {
                                "title": "Nationality",
                                "key_value": "value"
                            }
                        ],
                        "related_columns": [],
                        "specific_project": "0",
                        "created_date": "2019-12-10T02:45:11.614Z",
                        "last_modified": "2019-12-10T02:45:11.614Z",
                        "id": "5def06b7d3f551001f8958b5"
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
                        "content": "if (value){\r\n    async function checkValidation(value) {\r\n            let dataLookup =  await fetchJSON(`https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/nationality/[%22${value}%22]`);\r\n            let _value =value.toLowerCase(); \r\n            if (!Array.isArray(dataLookup.json_single)||dataLookup.json_single.map(item => item.value.toLowerCase()).findIndex(item => item === _value) === -1) {\r\n                            return [{\r\n                              type: \"error\",\r\n                              message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                            }]\r\n                         }\r\n            // if(value.toLowerCase().includes('nhhien'))             \r\n            //              return[{ \r\n            //                   type: 'warning',\r\n            //                   message: `Lookup warning value:${value}`}];\r\n    }\r\n    return await checkValidation(value);\r\n    }",
                        "arguments": {}
                    },
                    "value_broadcast": "",
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cba78",
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
                    "_id": "5ee3007c7250577ca96cba74",
                    "name": "SP01_10",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Quốc tịch 2 (nếu có)",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.489Z",
                    "lookup_broadcast": [],
                    "lookup_source": {
                        "allow_multiple": false,
                        "characters_trigger_lookup": 1,
                        "group_project": "production",
                        "key_value": "value",
                        "locale": [
                            "165_191128_340_SUNLIFE"
                        ],
                        "lookup_after_time": 1,
                        "lookup_field": "nationality",
                        "name": "Sunlife_Nationality",
                        "param_set": "return [data.SP01_10]",
                        "result_view_config": [
                            {
                                "title": "Nationality",
                                "key_value": "value"
                            }
                        ],
                        "related_columns": [],
                        "specific_project": "0",
                        "created_date": "2019-12-10T02:45:11.614Z",
                        "last_modified": "2019-12-10T02:45:11.614Z",
                        "id": "5def06b7d3f551001f8958b5"
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
                        "content": "if (value){\r\n    async function checkValidation(value) {\r\n            let dataLookup =  await fetchJSON(`https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/nationality/[%22${value}%22]`);\r\n            let _value =value.toLowerCase(); \r\n            if (!Array.isArray(dataLookup.json_single)||dataLookup.json_single.map(item => item.value.toLowerCase()).findIndex(item => item === _value) === -1) {\r\n                            return [{\r\n                              type: \"error\",\r\n                              message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                            }]\r\n                         }\r\n            // if(value.toLowerCase().includes('nhhien'))             \r\n            //              return[{ \r\n            //                   type: 'warning',\r\n            //                   message: `Lookup warning value:${value}`}];\r\n    }\r\n    return await checkValidation(value);\r\n    }",
                        "arguments": {}
                    },
                    "value_broadcast": "",
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cba74",
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
                    "_id": "5ee3007c7250577ca96cba72",
                    "name": "SP01_11",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Giới tính",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.489Z",
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
                        "content": "^[MmFfCc]{0,1}$",
                        "description": "Chỉ được nhập M hoặc F hoặc C"
                    },
                    "rule_transform": {
                        "name": "removeSpace_transform",
                        "arguments": {},
                        "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value.toUpperCase());",
                        "created_date": "2019-11-28T07:25:37.362Z",
                        "last_modified": "2019-11-28T07:25:37.362Z",
                        "id": "5ddf7671dedee200147c15f9"
                    },
                    "tooltip": "",
                    "validation": {
                        "name": "",
                        "content": "if(!value){\n    return [{type:\"error\",message:\"Không được trống\"}]\n}",
                        "arguments": {}
                    },
                    "value_broadcast": "",
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cba72",
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
                    "_id": "5ee3007c7250577ca96cba8a",
                    "name": "SP01_12",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Tình trạng hôn nhân",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.489Z",
                    "lookup_broadcast": [],
                    "lookup_source": {
                        "allow_multiple": false,
                        "characters_trigger_lookup": 1,
                        "group_project": "production",
                        "key_value": "",
                        "locale": [],
                        "lookup_after_time": 1,
                        "lookup_field": "",
                        "name": "",
                        "param_set": "",
                        "result_view_config": [],
                        "related_columns": [],
                        "specific_project": "0",
                        "created_date": "2019-12-10T02:46:42.282Z",
                        "last_modified": "2019-12-10T02:46:42.282Z",
                        "id": "5def0712d3f551001f8958b6"
                    },
                    "pattern": {
                        "name": "",
                        "arguments": {},
                        "content": "^[DdMmSsWwOo]{0,1}$",
                        "description": "Chỉ được nhập 1 trong các ký tự: D M S W O"
                    },
                    "rule_transform": {
                        "name": "removeSpace_transform",
                        "arguments": {},
                        "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value.toUpperCase());",
                        "created_date": "2019-11-28T07:25:37.362Z",
                        "last_modified": "2019-11-28T07:25:37.362Z",
                        "id": "5ddf7671dedee200147c15f9"
                    },
                    "tooltip": "",
                    "validation": {
                        "name": "",
                        "content": "if(!value){\n    return [{type:\"error\",message:\"Không được bỏ trống\"}]\n}",
                        "arguments": {}
                    },
                    "value_broadcast": "",
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cba8a",
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
                    "_id": "5ee3007c7250577ca96cba8c",
                    "name": "SP01_13",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [
                        "CMND",
                        "Passport",
                        "CCCD",
                        "Giấy Khai Sinh"
                    ],
                    "control_type": "CHECKBOX",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Loại Giấy Tờ",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.489Z",
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
                        "content": "if(!value){\n    return [{type : \"error\", message: \"Vui lòng chọn loại giấy tờ\"}]\n}",
                        "arguments": {}
                    },
                    "value_broadcast": "",
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cba8c",
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
                    "_id": "5ee3007c7250577ca96cba88",
                    "name": "SP01_14",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Số giấy tờ tùy thân",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.489Z",
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
                        "name": "Text + Number",
                        "arguments": {
                            "given": "SP01_13"
                        },
                        "content": "function checkCharacter(value) {\r\n\r\n    if(!value){\r\n        return false;\r\n    }else{\r\n        return true;\r\n    }\r\n  }\r\nfunction checkEqualGiven(surname_value =\"\" , given_value = \"\"){\r\n      surname_value = surname_value.trim()\r\n      given_value = given_value.trim()\r\n      var regex1 = /^[0-9]{9}$/;\r\n      var regex2 = /^[0-9]{12}$/;\r\n      var regex3 = /^[A-Z0-9]{8,9}$/;\r\n\r\n      if(!regex1.test(surname_value) && given_value === \"CMND\"){\r\n          return [{type : \"error\" , message : \"CMND chỉ nhập 9 số\"}];\r\n      }else\r\n      if(!regex2.test(surname_value) && given_value === \"CCCD\"){\r\n          return [{type : \"error\" , message : \"CCCD chỉ nhập 12 số\"}];\r\n      }else\r\n      if(!regex3.test(surname_value) && given_value === \"Passport\"){\r\n          return [{type : \"error\" , message : \"Passport chỉ nhập chữ in và 8 hoặc 9 số\"}];\r\n      }\r\n     \r\n     return;\r\n  }\r\n  \r\nfunction checkError(value){\r\n      if(checkCharacter(value) === true){\r\n          \r\n             return checkEqualGiven(value, given);\r\n              \r\n      }else{\r\n          return [{type : \"warning\" , message : \"Không có số giấy tờ tùy thân\"}];\r\n      }\r\n  }\r\n  \r\nreturn checkError(value);",
                        "created_date": "2019-11-28T06:46:23.478Z",
                        "last_modified": "2019-11-29T08:25:58.570Z",
                        "id": "5ddf6d3fdedee200147c15f6"
                    },
                    "value_broadcast": "",
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cba88",
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
                    "_id": "5ee3007c7250577ca96cba7a",
                    "name": "SP01_15",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Ngày cấp",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.489Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cba7a",
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
                    "_id": "5ee3007c7250577ca96cba7c",
                    "name": "SP01_16",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Điện thoại nhà riêng",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.489Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cba7c",
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
                    "_id": "5ee3007c7250577ca96cba7e",
                    "name": "SP01_17",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Điện thoại di động",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.490Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cba7e",
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
                    "_id": "5ee3007c7250577ca96cba80",
                    "name": "SP01_18",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Địa chỉ email",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.490Z",
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
                        "content": "if(value.length>50){\n    return [{type: \"error\",\n        message: `Không được nhập quá 50 ký tự `\n    }]\n}",
                        "arguments": {}
                    },
                    "value_broadcast": "",
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cba80",
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
                    "_id": "5f439cb1cbd2023af3fdee80",
                    "name": "phuongtiendichuyen",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [
                        "Xe máy",
                        "Ô tô"
                    ],
                    "control_type": "CHECKBOX",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Phương tiện chính mà bạn di chuyển ?",
                    "is_list": true,
                    "last_modified": "2020-09-04T04:40:17.496Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5f439cb1cbd2023af3fdee80",
                        "visible": true,
                        "disable": false,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
                        "argument_details": [
                            {
                                "value": "Xe máy"
                            },
                            {
                                "value": "Ô tô"
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
                    "_id": "5ee3007c7250577ca96cba82",
                    "name": "SP01_19",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Nghề nghiệp",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.490Z",
                    "lookup_broadcast": [],
                    "lookup_source": {
                        "allow_multiple": false,
                        "characters_trigger_lookup": 1,
                        "group_project": "production",
                        "key_value": "value",
                        "locale": [
                            "165_191128_340_SUNLIFE"
                        ],
                        "lookup_after_time": 1,
                        "lookup_field": "occupation",
                        "name": "Sunlife_Occupation",
                        "param_set": "return [data.SP01_19]",
                        "result_view_config": [
                            {
                                "title": "Occupation",
                                "key_value": "value"
                            }
                        ],
                        "related_columns": [],
                        "specific_project": "0",
                        "created_date": "2019-12-10T02:51:42.850Z",
                        "last_modified": "2019-12-10T02:51:42.850Z",
                        "id": "5def083ed3f551001f8958b8"
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
                        "content": "if (value){\r\n    async function checkValidation(value) {\r\n            let params = `[\"${encodeURIComponent(value)}\"]`\r\n            let dataLookup =  await fetchJSON(`https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/occupation/${params}`);\r\n            let _value =value.toLowerCase(); \r\n            if (!Array.isArray(dataLookup.json_single)||dataLookup.json_single.map(item => item.value.toLowerCase()).findIndex(item => item === _value) === -1) {\r\n                            return [{\r\n                              type: \"error\",\r\n                              message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                            }]\r\n                         }\r\n            // if(value.toLowerCase().includes('nhhien'))             \r\n            //              return[{ \r\n            //                   type: 'warning',\r\n            //                   message: `Lookup warning value:${value}`}];\r\n    }\r\n    return await checkValidation(value);\r\n    }",
                        "arguments": {}
                    },
                    "value_broadcast": "",
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cba82",
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
                    "_id": "5ee3007c7250577ca96cba86",
                    "name": "SP01_21",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Tên cơ quan",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.490Z",
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
                        "content": "if(value.length > 49){\n    return [{type: \"error\",\n        message :\"Không được nhập quá 49 ký tự.\"\n    }]\n}",
                        "arguments": {}
                    },
                    "value_broadcast": "",
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cba86",
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
                    "_id": "5ee3007c7250577ca96cba8e",
                    "name": "SP01_22",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Thu nhập ước tính hàng năm",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.490Z",
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
                        "content": "function removeSpace(input){\r\n    if (input.includes('+')) {\r\n        input = input.replace(/[+]/g, '000');\r\n    }\r\n\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\tinput = input.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'-');\r\n\tinput = input.replace(/[\\s\\t]*(\\()[\\s\\t]*/g,' (');\r\n\tinput = input.replace(/[\\s\\t]*(\\))[\\s\\t]*/g,') ');\r\n    input = input.replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'/');\r\n    input = input.replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'.');\r\n    input = input.replace(/[\\s\\t]*(\\,)[\\s\\t]*/g,',');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                        "created_date": "2019-11-28T07:25:37.362Z",
                        "last_modified": "2019-11-28T07:25:37.362Z",
                        "id": "5ddf7671dedee200147c15f9"
                    },
                    "tooltip": "",
                    "validation": {
                        "name": "Number",
                        "arguments": {},
                        "content": "var regex1 = /[^\\s0-9.+]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n",
                        "created_date": "2019-11-29T08:49:07.590Z",
                        "last_modified": "2019-11-29T08:49:07.590Z",
                        "id": "5de0db83dedee200147c1611"
                    },
                    "value_broadcast": "",
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cba8e",
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
                    "_id": "5ee3007c7250577ca96cbacc",
                    "name": "SP01_500",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [
                        "Y",
                        "N"
                    ],
                    "control_type": "COMBOBOX",
                    "counted_character": true,
                    "default_value": "N",
                    "field_display": "Giống địa chỉ BMBH hay không",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.492Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cbacc",
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
                    "_id": "5ee3007c7250577ca96cba9c",
                    "name": "SP01_27",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Tỉnh/Thành phố",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.490Z",
                    "lookup_broadcast": [],
                    "lookup_source": {
                        "allow_multiple": false,
                        "characters_trigger_lookup": 1,
                        "group_project": "production",
                        "key_value": "prov_nm",
                        "locale": [
                            "165_191128_340_SUNLIFE"
                        ],
                        "lookup_after_time": 1,
                        "lookup_field": "province",
                        "name": "Sunlife_Province",
                        "param_set": "return [data.SP01_27]",
                        "result_view_config": [
                            {
                                "title": "Province",
                                "key_value": "prov_nm"
                            }
                        ],
                        "related_columns": [],
                        "specific_project": "0",
                        "created_date": "2019-12-10T02:54:53.697Z",
                        "last_modified": "2019-12-10T02:54:53.697Z",
                        "id": "5def08fdd3f551001f8958ba"
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
                        "content": "if (value){\r\n    async function checkValidation(value) {\r\n            let dataLookup =  await fetchJSON(`https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/province/${encodeURIComponent(`[\"${value}\"]`)}`);\r\n            let _value =value.toLowerCase(); \r\n            if (!Array.isArray(dataLookup.json_single)||dataLookup.json_single.map(item => item.prov_nm.toLowerCase()).findIndex(item => item === _value) === -1) {\r\n                            return [{\r\n                              type: \"error\",\r\n                              message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                            }]\r\n                         }\r\n            // if(value.toLowerCase().includes('nhhien'))             \r\n            //              return[{ \r\n            //                   type: 'warning',\r\n            //                   message: `Lookup warning value:${value}`}];\r\n    }\r\n    return await checkValidation(value);\r\n    }",
                        "arguments": {}
                    },
                    "value_broadcast": "",
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cba9c",
                        "visible": true,
                        "disable": false,
                        "dynamic_by_field": {
                            "effect": "invisible",
                            "groups": [
                                [
                                    {
                                        "value": [
                                            "Y"
                                        ],
                                        "section": "Sub_Form1",
                                        "rule": "must_equal",
                                        "field": "SP01_500"
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
                    "_id": "5ee3007c7250577ca96cba9a",
                    "name": "SP01_26",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Quận/Huyện",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.490Z",
                    "lookup_broadcast": [],
                    "lookup_source": {
                        "allow_multiple": false,
                        "characters_trigger_lookup": 1,
                        "group_project": "production",
                        "key_value": "dist_nm",
                        "locale": [
                            "165_191128_340_SUNLIFE"
                        ],
                        "lookup_after_time": 1,
                        "lookup_field": "district",
                        "name": "Sunlife_District",
                        "param_set": "return [data.SP01_27,data.SP01_26]",
                        "result_view_config": [
                            {
                                "title": "District",
                                "key_value": "dist_nm"
                            }
                        ],
                        "related_columns": [],
                        "specific_project": "0",
                        "created_date": "2019-12-10T10:03:59.280Z",
                        "last_modified": "2019-12-10T10:03:59.280Z",
                        "id": "5def6d8f8eff190014a6bc28"
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
                        "content": "//console.log(arguments,'asdgasdgasdgasdg')    \r\nasync function checkValidation(value) {\r\n  let params = encodeURIComponent(`[\"${qh}\",\"${value}\"]`)\r\n  let uri = `https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/district/${params}`\r\n  let dataLookup = await fetchJSON(uri);\r\n//   console.log(dataLookup,'dataLookup');\r\n  if (!Array.isArray(dataLookup.json_single) || dataLookup.json_single.map(item => item.dist_nm).findIndex(item => item === value.trim()) === -1) {\r\n                      return [{\r\n                         type: \"error\",\r\n                         message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                      }]\r\n                    }\r\n}\r\nif (value){\r\nreturn  await checkValidation(value);\r\n}",
                        "arguments": {
                            "qh": "SP01_27"
                        }
                    },
                    "value_broadcast": "",
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cba9a",
                        "visible": true,
                        "disable": false,
                        "dynamic_by_field": {
                            "effect": "invisible",
                            "groups": [
                                [
                                    {
                                        "value": [
                                            "Y"
                                        ],
                                        "section": "Sub_Form1",
                                        "rule": "must_equal",
                                        "field": "SP01_500"
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
                    "_id": "5ee3007c7250577ca96cba90",
                    "name": "SP01_25",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Phường/Xã",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.490Z",
                    "lookup_broadcast": [],
                    "lookup_source": {
                        "allow_multiple": false,
                        "characters_trigger_lookup": 1,
                        "group_project": "production",
                        "key_value": "ward_nm",
                        "locale": [
                            "165_191128_340_SUNLIFE"
                        ],
                        "lookup_after_time": 1,
                        "lookup_field": "ward",
                        "name": "Sunlife_ward",
                        "param_set": "return [data.SP01_27,data.SP01_26,data.SP01_25]",
                        "result_view_config": [
                            {
                                "title": "Ward",
                                "key_value": "ward_nm"
                            }
                        ],
                        "related_columns": [],
                        "specific_project": "0",
                        "created_date": "2019-12-10T02:53:21.452Z",
                        "last_modified": "2019-12-10T02:53:21.452Z",
                        "id": "5def08a1d3f551001f8958b9"
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
                        "content": "//console.log(arguments,'asdgasdgasdgasdg')    \r\nasync function checkValidation(value) {\r\n  let params = encodeURIComponent(`[\"${tp}\",\"${qh}\",\"${value}\"]`)\r\n  let uri = `https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/ward/${params}`\r\n  let dataLookup = await fetchJSON(uri);\r\n//   console.log(dataLookup,'dataLookup');\r\n  if (!Array.isArray(dataLookup.json_single) || dataLookup.json_single.map(item => item.ward_nm).findIndex(item => item === value.trim()) === -1) {\r\n                      return [{\r\n                         type: \"error\",\r\n                         message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                      }]\r\n                    }\r\n}\r\nif (value){\r\nreturn  await checkValidation(value);\r\n}",
                        "arguments": {
                            "tp": "SP01_27",
                            "qh": "SP01_26"
                        }
                    },
                    "value_broadcast": "",
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cba90",
                        "visible": true,
                        "disable": false,
                        "dynamic_by_field": {
                            "effect": "invisible",
                            "groups": [
                                [
                                    {
                                        "value": [
                                            "Y"
                                        ],
                                        "section": "Sub_Form1",
                                        "rule": "must_equal",
                                        "field": "SP01_500"
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
                    "_id": "5ee3007c7250577ca96cba92",
                    "name": "SP01_24",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Số nhà hoặc Thôn/Xóm/Tổ/Làng/Đường",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.490Z",
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
                        "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nfunction transformGivenSurname(field_value) {\r\n  field_value = field_value.trim();\r\n  var fullString = '';\r\n  var arr_char = ['ß'];\r\n  if(field_value.includes(' ')){\r\n  \tvar arr = field_value.split(' ');\r\n    for(var i = 0 ; i < arr.length; i++){\r\n    \tvar strChild = arr[i];\r\n        if(strChild === strChild.toLowerCase() || strChild === strChild.toUpperCase()){\r\n \t       \tif(arr_char.includes(strChild.substring(0,1))){\r\n\t\t\t\tstrChild = strChild.substring(0,1) + strChild.substring(1,strChild.length).toLowerCase();\r\n          \t\tfullString += strChild + ' ';\r\n\t\t\t}else{\r\n           \t\tstrChild = strChild.substring(0,1).toUpperCase() + strChild.substring(1,strChild.length).toLowerCase();\r\n          \t\tfullString += strChild + ' ';\r\n            }\r\n          \r\n        }else{\r\n            strChild = strChild.substring(0,1).toUpperCase() + strChild.substring(1,strChild.length).toLowerCase();\r\n            fullString += strChild + ' ';\r\n        }\r\n    }\r\n  }else{\r\n  \tif(field_value === field_value.toLowerCase() || field_value === field_value.toUpperCase()){\r\n    \tif(arr_char.includes(field_value.substring(0,1))){\r\n\t\t\tfield_value = field_value.substring(0,1) + field_value.substring(1,field_value.length).toLowerCase();\r\n     \t\tfullString = field_value;\r\n\t\t}else{\r\n        \tfield_value = field_value.substring(0,1).toUpperCase() + field_value.substring(1,field_value.length).toLowerCase();\r\n      \t\tfullString = field_value;\r\n\t\t}\r\n      \r\n    }else{\r\n        field_value = field_value.substring(0,1).toUpperCase() + field_value.substring(1,field_value.length).toLowerCase();\r\n        fullString = field_value;\r\n    }\r\n  }\r\n  return fullString.trim();\r\n}\r\nreturn transformGivenSurname(removeSpace(value));",
                        "created_date": "2019-11-28T07:25:37.362Z",
                        "last_modified": "2019-11-28T07:25:37.362Z",
                        "id": "5ddf7671dedee200147c15f9"
                    },
                    "tooltip": "",
                    "validation": {
                        "name": "",
                        "content": "if(value.length > 35){\n    return [{type: \"error\",\n        message :\"Không được nhập quá 35 ký tự.\"\n    }]\n}",
                        "arguments": {}
                    },
                    "value_broadcast": "",
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cba92",
                        "visible": true,
                        "disable": false,
                        "dynamic_by_field": {
                            "effect": "invisible",
                            "groups": [
                                [
                                    {
                                        "value": [
                                            "Y"
                                        ],
                                        "section": "Sub_Form1",
                                        "rule": "must_equal",
                                        "field": "SP01_500"
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
                    "_id": "5ee3007c7250577ca96cba96",
                    "name": "SP01_28",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Mối quan hệ của NĐBH với BMBH",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.490Z",
                    "lookup_broadcast": [],
                    "lookup_source": {
                        "allow_multiple": false,
                        "characters_trigger_lookup": 1,
                        "group_project": "production",
                        "key_value": "english",
                        "locale": [
                            "165_191128_340_SUNLIFE"
                        ],
                        "lookup_after_time": 1,
                        "lookup_field": "relationship",
                        "name": "Sunlife_Relationship",
                        "param_set": "return [\"Owner's Relationship to Insured\",data.SP01_28]",
                        "result_view_config": [
                            {
                                "title": "Relationship",
                                "key_value": "english"
                            }
                        ],
                        "related_columns": [],
                        "specific_project": "0",
                        "created_date": "2019-12-10T02:49:19.558Z",
                        "last_modified": "2019-12-10T02:49:19.558Z",
                        "id": "5def07afd3f551001f8958b7"
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
                        "content": "if (value){\r\n    async function checkValidation(value) {\r\n             let params = `[\"Owner's Relationship to Insured\",\"${encodeURIComponent(value)}\"]`\r\n      let dataLookup = await fetchJSON(`https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/relationship/${params}`);\r\n            if (!Array.isArray(dataLookup.json_single)||\r\n            dataLookup.json_single.map(item => item.english).findIndex(item => item === value.trim()) === -1) {\r\n                            return [{\r\n                              type: \"error\",\r\n                              message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                            }]\r\n                         }\r\n            // if(value.toLowerCase().includes('nhhien'))             \r\n            //              return[{ \r\n            //                   type: 'warning',\r\n            //                   message: `Lookup warning value:${value}`}];\r\n    }\r\n    return await checkValidation(value);\r\n    }",
                        "arguments": {}
                    },
                    "value_broadcast": "",
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cba96",
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
                    "_id": "5f439cb1cbd2023af3fdee7e",
                    "name": "hutthuoc",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [
                        "Có",
                        "Không"
                    ],
                    "control_type": "RADIOBUTTON",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Bạn có hút thuốc không ?",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.496Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5f439cb1cbd2023af3fdee7e",
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
                    "_id": "5ee3007c7250577ca96cba98",
                    "name": "SP01_29",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [
                        "Y",
                        "N"
                    ],
                    "control_type": "CHECKBOX",
                    "counted_character": true,
                    "default_value": "N",
                    "field_display": "Quý khách có các hợp đồng bảo hiểm còn đang hiệu lực",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.491Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cba98",
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
                    "_id": "5ee3007c7250577ca96cbaa5",
                    "name": "SP01_30",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Công ty bảo hiểm",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.491Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cbaa5",
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
                                        "section": "Sub_Form1",
                                        "rule": "must_equal",
                                        "field": "SP01_29"
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
                    "_id": "5ee3007c7250577ca96cba9e",
                    "name": "SP01_31",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Tên sản phẩm bảo hiểm",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.491Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cba9e",
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
                                        "section": "Sub_Form1",
                                        "rule": "must_equal",
                                        "field": "SP01_29"
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
                    "_id": "5ee3007c7250577ca96cbaa0",
                    "name": "SP01_32",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Tổng số tiền bảo hiểm",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.491Z",
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
                        "content": "function removeSpace(input){\r\n    if (input.includes('+')) {\r\n        input = input.replace(/[+]/g, '000');\r\n    }\r\n\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\tinput = input.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'-');\r\n\tinput = input.replace(/[\\s\\t]*(\\()[\\s\\t]*/g,' (');\r\n\tinput = input.replace(/[\\s\\t]*(\\))[\\s\\t]*/g,') ');\r\n    input = input.replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'/');\r\n    input = input.replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'.');\r\n    input = input.replace(/[\\s\\t]*(\\,)[\\s\\t]*/g,',');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                        "created_date": "2019-11-28T07:25:37.362Z",
                        "last_modified": "2019-11-28T07:25:37.362Z",
                        "id": "5ddf7671dedee200147c15f9"
                    },
                    "tooltip": "",
                    "validation": {
                        "name": "Number",
                        "arguments": {},
                        "content": "var regex1 = /[^\\s0-9.+]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n",
                        "created_date": "2019-11-29T08:49:07.590Z",
                        "last_modified": "2019-11-29T08:49:07.590Z",
                        "id": "5de0db83dedee200147c1611"
                    },
                    "value_broadcast": "",
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cbaa0",
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
                                        "section": "Sub_Form1",
                                        "rule": "must_equal",
                                        "field": "SP01_29"
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
                    "_id": "5ee3007c7250577ca96cbaa2",
                    "name": "SP01_33",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Năm phát hành hợp đồng",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.491Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cbaa2",
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
                                        "section": "Sub_Form1",
                                        "rule": "must_equal",
                                        "field": "SP01_29"
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
                    "_id": "5ee3007c7250577ca96cbab0",
                    "name": "SP01_34",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Tình trạng hợp đồng",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.491Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cbab0",
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
                                        "section": "Sub_Form1",
                                        "rule": "must_equal",
                                        "field": "SP01_29"
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
                    "_id": "5ee3007c7250577ca96cbaa9",
                    "name": "SP01_35",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [
                        "Y",
                        "N"
                    ],
                    "control_type": "CHECKBOX",
                    "counted_character": true,
                    "default_value": "N",
                    "field_display": "Câu 1:",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.491Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cbaa9",
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
                    "_id": "5ee3007c7250577ca96cbaac",
                    "name": "SP01_36",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [
                        "Y",
                        "N"
                    ],
                    "control_type": "COMBOBOX",
                    "counted_character": true,
                    "default_value": "N",
                    "field_display": "Câu 2:",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.491Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cbaac",
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
                    "_id": "5ee3007c7250577ca96cbab1",
                    "name": "SP01_37",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [
                        "Y",
                        "N"
                    ],
                    "control_type": "COMBOBOX",
                    "counted_character": true,
                    "default_value": "N",
                    "field_display": "Câu 3:",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.491Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cbab1",
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
                    "_id": "5ee3007c7250577ca96cbaba",
                    "name": "SP01_38",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [
                        "Y",
                        "N"
                    ],
                    "control_type": "CHECKBOX",
                    "counted_character": true,
                    "default_value": "N",
                    "field_display": "Câu 4:",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.491Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cbaba",
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
                    "_id": "5ee3007c7250577ca96cbab3",
                    "name": "SP01_39",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [
                        "Y",
                        "N"
                    ],
                    "control_type": "CHECKBOX",
                    "counted_character": true,
                    "default_value": "N",
                    "field_display": "Câu 5:",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.491Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cbab3",
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
                    "_id": "5ee3007c7250577ca96cbab5",
                    "name": "SP01_40",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "5- Số lượng/ngày",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.491Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cbab5",
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
                                        "section": "Sub_Form1",
                                        "rule": "must_equal",
                                        "field": "SP01_39"
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
                    "_id": "5f439cb1cbd2023af3fdee85",
                    "name": "tienantiensu",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [
                        "Có"
                    ],
                    "control_type": "CHECKBOX",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Bạn có tiền án tiền sự không ?",
                    "is_list": true,
                    "last_modified": "2020-09-04T04:40:17.496Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5f439cb1cbd2023af3fdee85",
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
                    "_id": "5ee3007c7250577ca96cbab8",
                    "name": "SP01_41",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [
                        "Y",
                        "N"
                    ],
                    "control_type": "COMBOBOX",
                    "counted_character": true,
                    "default_value": "N",
                    "field_display": "Câu 6:",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.491Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cbab8",
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
                }
            ],
            "id": "5ee3007c7250577ca96cbb9e"
        },
        {
            "layout_labels": null,
            "name": "Sub_Form_C6",
            "layout_name": "Sub_Form",
            "index": 1,
            "layout_id": "5ee3007c7250577ca96cbb28",
            "is_multiple": true,
            "position": {},
            "settings": {
                "is_multiple": true,
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
                    "_id": "5ee3007c7250577ca96cbabc",
                    "name": "SP01_43",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [
                        "Bia nhẹ",
                        "Rượu nhẹ",
                        "Rượu mạnh"
                    ],
                    "control_type": "COMBOBOX",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Loại",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.492Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cbabc",
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
                                        "section": "Sub_Form1",
                                        "rule": "must_equal",
                                        "field": "SP01_41"
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
                    "_id": "5ee3007c7250577ca96cbabe",
                    "name": "SP01_44",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Số lượng uống  ",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.492Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cbabe",
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
                                        "section": "Sub_Form1",
                                        "rule": "must_equal",
                                        "field": "SP01_41"
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
                    "_id": "5ee3007c7250577ca96cbac0",
                    "name": "SP01_45",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [
                        "Ngày",
                        "Tuần"
                    ],
                    "control_type": "COMBOBOX",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Tần suất sử dụng",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.492Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cbac0",
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
                                        "section": "Sub_Form1",
                                        "rule": "must_equal",
                                        "field": "SP01_41"
                                    }
                                ]
                            ]
                        },
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
                        "argument_details": [
                            {
                                "value": "Ngày"
                            },
                            {
                                "value": "Tuần"
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
            "id": "5ee3007c7250577ca96cbba4"
        },
        {
            "layout_labels": null,
            "name": "Sub_Form2",
            "layout_name": "Sub_Form",
            "index": 2,
            "layout_id": "5ee3007c7250577ca96cbb28",
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
                    "_id": "5ee3007c7250577ca96cbaca",
                    "name": "SP01_46",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [
                        "Y",
                        "N"
                    ],
                    "control_type": "COMBOBOX",
                    "counted_character": true,
                    "default_value": "N",
                    "field_display": "Câu 7:",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.492Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cbaca",
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
                    "_id": "5ee3007c7250577ca96cbac4",
                    "name": "SP01_47",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [
                        "Y",
                        "N"
                    ],
                    "control_type": "COMBOBOX",
                    "counted_character": true,
                    "default_value": "N",
                    "field_display": "Câu 8:",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.492Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cbac4",
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
                    "_id": "5ee3007c7250577ca96cbac6",
                    "name": "SP01_48",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Câu 9a) chiều cao",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.492Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cbac6",
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
                    "_id": "5ee3007c7250577ca96cbac8",
                    "name": "SP01_49",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Câu 9a) cân nặng",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.492Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cbac8",
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
                    "_id": "5ee3007c7250577ca96cbad2",
                    "name": "SP01_50",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [
                        "Y",
                        "N"
                    ],
                    "control_type": "CHECKBOX",
                    "counted_character": true,
                    "default_value": "N",
                    "field_display": "Câu 9b:",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.492Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cbad2",
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
                    "_id": "5ee3007c7250577ca96cbace",
                    "name": "SP01_51",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [
                        "Y",
                        "N"
                    ],
                    "control_type": "CHECKBOX",
                    "counted_character": true,
                    "default_value": "N",
                    "field_display": "Câu 10:",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.492Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cbace",
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
                    "_id": "5ee3007c7250577ca96cbad0",
                    "name": "SP01_52",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "10- tình trạng sức khỏe - cha/me",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.492Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cbad0",
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
                                        "section": "Sub_Form2",
                                        "rule": "must_equal",
                                        "field": "SP01_51"
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
                    "_id": "5ee3007c7250577ca96cbada",
                    "name": "SP01_53",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "10 - tình trạng sức khỏe - anh/chi/em",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.492Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cbada",
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
                                        "section": "Sub_Form2",
                                        "rule": "must_equal",
                                        "field": "SP01_51"
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
                    "_id": "5ee3007c7250577ca96cbad4",
                    "name": "SP01_54",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "10- tuổi - cha/mẹ",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.493Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cbad4",
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
                                        "section": "Sub_Form2",
                                        "rule": "must_equal",
                                        "field": "SP01_51"
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
                    "_id": "5ee3007c7250577ca96cbad6",
                    "name": "SP01_55",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "10 - tuổi - anh/chị/em",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.493Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cbad6",
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
                                        "section": "Sub_Form2",
                                        "rule": "must_equal",
                                        "field": "SP01_51"
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
                    "_id": "5ee3007c7250577ca96cbad8",
                    "name": "SP01_56",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "10 - tuổi qua đời - cha/me",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.493Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cbad8",
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
                                        "section": "Sub_Form2",
                                        "rule": "must_equal",
                                        "field": "SP01_51"
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
                    "_id": "5ee3007c7250577ca96cbae2",
                    "name": "SP01_57",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "10- tuổi qua đời - anh/chị/em",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.493Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cbae2",
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
                                        "section": "Sub_Form2",
                                        "rule": "must_equal",
                                        "field": "SP01_51"
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
                    "_id": "5ee3007c7250577ca96cbadc",
                    "name": "SP01_58",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [
                        "Y",
                        "N"
                    ],
                    "control_type": "CHECKBOX",
                    "counted_character": true,
                    "default_value": "N",
                    "field_display": "Câu 11:",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.493Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cbadc",
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
                    "_id": "5ee3007c7250577ca96cbade",
                    "name": "SP01_59",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [
                        "Y",
                        "N"
                    ],
                    "control_type": "CHECKBOX",
                    "counted_character": true,
                    "default_value": "N",
                    "field_display": "Câu 12",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.493Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cbade",
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
                    "_id": "5ee3007c7250577ca96cbae0",
                    "name": "SP01_60",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [
                        "Y",
                        "N"
                    ],
                    "control_type": "CHECKBOX",
                    "counted_character": true,
                    "default_value": "N",
                    "field_display": "Câu 13:",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.493Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cbae0",
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
                    "_id": "5ee3007c7250577ca96cbae8",
                    "name": "SP01_61",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [
                        "Y",
                        "N"
                    ],
                    "control_type": "COMBOBOX",
                    "counted_character": true,
                    "default_value": "N",
                    "field_display": "Câu 14:",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.493Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cbae8",
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
                    "_id": "5ee3007c7250577ca96cbae4",
                    "name": "SP01_62",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [
                        "Y",
                        "N"
                    ],
                    "control_type": "COMBOBOX",
                    "counted_character": true,
                    "default_value": "N",
                    "field_display": "Câu 15:",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.493Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cbae4",
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
                    "_id": "5ee3007c7250577ca96cbae6",
                    "name": "SP01_63",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [
                        "Y",
                        "N"
                    ],
                    "control_type": "COMBOBOX",
                    "counted_character": true,
                    "default_value": "N",
                    "field_display": "Câu 16:",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.493Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cbae6",
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
                    "_id": "5ee3007c7250577ca96cbaee",
                    "name": "SP01_64",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [
                        "Y",
                        "N"
                    ],
                    "control_type": "COMBOBOX",
                    "counted_character": true,
                    "default_value": "N",
                    "field_display": "Câu 17:",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.493Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cbaee",
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
                    "_id": "5ee3007c7250577ca96cbaec",
                    "name": "SP01_65",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [
                        "Y",
                        "N"
                    ],
                    "control_type": "CHECKBOX",
                    "counted_character": true,
                    "default_value": "N",
                    "field_display": "Câu 18:",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.493Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cbaec",
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
                    "_id": "5ee3007c7250577ca96cbaf4",
                    "name": "SP01_66",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [
                        "Y",
                        "N"
                    ],
                    "control_type": "COMBOBOX",
                    "counted_character": true,
                    "default_value": "N",
                    "field_display": "Câu 19:",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.494Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cbaf4",
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
                    "_id": "5ee3007c7250577ca96cbaea",
                    "name": "SP01_67",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [
                        "Y",
                        "N"
                    ],
                    "control_type": "COMBOBOX",
                    "counted_character": true,
                    "default_value": "N",
                    "field_display": "Câu 20:",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.494Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cbaea",
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
                    "_id": "5ee3007c7250577ca96cbaf6",
                    "name": "SP01_68",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [
                        "Y",
                        "N"
                    ],
                    "control_type": "COMBOBOX",
                    "counted_character": true,
                    "default_value": "N",
                    "field_display": "Câu 21:",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.494Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cbaf6",
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
                    "_id": "5f439cb1cbd2023af3fdee88",
                    "name": "ruoubia",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [
                        "Có",
                        "Không"
                    ],
                    "control_type": "RADIOBUTTON",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Bạn có uống rượu bia không ?",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.496Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5f439cb1cbd2023af3fdee88",
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
                    "_id": "5ee3007c7250577ca96cbaf0",
                    "name": "SP01_69",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [
                        "Y",
                        "N"
                    ],
                    "control_type": "COMBOBOX",
                    "counted_character": true,
                    "default_value": "N",
                    "field_display": "Câu 22:",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.494Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cbaf0",
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
                    "_id": "5ee3007c7250577ca96cbaf2",
                    "name": "SP01_70",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [
                        "Y",
                        "N"
                    ],
                    "control_type": "COMBOBOX",
                    "counted_character": true,
                    "default_value": "N",
                    "field_display": "Câu 23:",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.494Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cbaf2",
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
                    "_id": "5ee3007c7250577ca96cbafe",
                    "name": "SP01_71",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [
                        "Y",
                        "N"
                    ],
                    "control_type": "COMBOBOX",
                    "counted_character": true,
                    "default_value": "N",
                    "field_display": "Câu 24:",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.494Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cbafe",
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
                    "_id": "5ee3007c7250577ca96cbaf8",
                    "name": "SP01_72",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [
                        "Y",
                        "N"
                    ],
                    "control_type": "CHECKBOX",
                    "counted_character": true,
                    "default_value": "N",
                    "field_display": "Câu 25:",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.494Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cbaf8",
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
                    "_id": "5ee3007c7250577ca96cbafa",
                    "name": "SP01_73",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [
                        "Y",
                        "N"
                    ],
                    "control_type": "COMBOBOX",
                    "counted_character": true,
                    "default_value": "N",
                    "field_display": "Câu 26",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.494Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cbafa",
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
                    "_id": "5ee3007c7250577ca96cbafc",
                    "name": "SP01_74",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [
                        "Y",
                        "N"
                    ],
                    "control_type": "COMBOBOX",
                    "counted_character": true,
                    "default_value": "N",
                    "field_display": "Câu 27",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.494Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cbafc",
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
                    "_id": "5ee3007c7250577ca96cbb04",
                    "name": "SP01_75",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [
                        "Y",
                        "N"
                    ],
                    "control_type": "COMBOBOX",
                    "counted_character": true,
                    "default_value": "N",
                    "field_display": "Câu 28:",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.494Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cbb04",
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
                    "_id": "5ee3007c7250577ca96cbb00",
                    "name": "SP01_76",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [
                        "Y",
                        "N"
                    ],
                    "control_type": "COMBOBOX",
                    "counted_character": true,
                    "default_value": "N",
                    "field_display": "Câu 29",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.494Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cbb00",
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
                    "_id": "5ee3007c7250577ca96cbb02",
                    "name": "SP01_77",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [
                        "Y",
                        "N"
                    ],
                    "control_type": "COMBOBOX",
                    "counted_character": true,
                    "default_value": "N",
                    "field_display": "Câu 30:",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.494Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cbb02",
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
                    "_id": "5ee3007c7250577ca96cbb0a",
                    "name": "SP01_78",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [
                        "Y",
                        "N"
                    ],
                    "control_type": "COMBOBOX",
                    "counted_character": true,
                    "default_value": "N",
                    "field_display": "Câu 31:",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.494Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cbb0a",
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
                    "_id": "5ee3007c7250577ca96cbb0c",
                    "name": "SP01_79",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Câu 31- Nếu có vui lòng cho biết ngày dự sinh: dd/mm/yyyy",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.495Z",
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
                        "content": "if(value.length <8){\r\n     return [{type:\"error\",message:\"Không đúng định dạng ddmmyyyy\"}]\r\n}\r\n\r\nfunction chkDate(date){\r\n\tvar dd = date.substring(0,2);\r\n\tvar mm = date.substring(2,4);\r\n\tvar yy = date.substring(4,6);\r\n\tvar tmpDate = new Date();\r\n\tvar y = tmpDate.getFullYear()+\"\";\r\n\ty = y.substring(2,4)*1 + 1;\r\n\r\n\t//Gan gia tri nam la 19YY neu YY > nam hien tai + 1\r\n\t//Gan gia tri nam la 20YY neu YY <= nam hien tai + 1\r\n\tif(yy*1>y){ yy = 19+yy;\r\n\t}else {yy = 20+yy;}\r\n\r\n\treturn dd+mm+yy;\t\r\n}\r\n\r\nfunction formatdate(ngay_hieu_luc_in78){\r\nvar fvalue = ngay_hieu_luc_in78;\r\n\tvar regex = /^(?:(?:31(|\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(|\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(|\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(|\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$/\r\n\tvar regex1 = /^\\d{6}$/;\r\n\tvar regex2 = /^(\\s*|[0-9\\.\\/\\-]+)$/ ;\r\n\tvar date;\r\nif(fvalue === \"\") return ;\r\n\tif(regex1.test(fvalue))\r\n\treturn ;\r\n\tif(regex2.test(fvalue)){\r\n\t\r\n\tif(!regex.test(fvalue)){\r\n\t\treturn [{type:\"warning\",message:\"Ngày Tháng Năm không phù hợp, vui lòng kiểm tra lại.\"}]\r\n\t}\r\n}else{\r\n    return [{type:\"error\",message:\"Không đúng định dạng ddmmyyyy\"}]\r\n}\r\nfvalue = fvalue.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'');\r\nif(fvalue.length === 6){\r\n\tfvalue = chkDate(fvalue);\r\n}\r\nvar dd = fvalue.substring(0, 2);\r\nvar mm = fvalue.substring(2, 4);\r\nvar yy = fvalue.substring(4, 8);\r\nvar tmpDate = new Date();\r\nvar d = tmpDate.getDate();\r\nvar m = tmpDate.getMonth();\r\nvar y = tmpDate.getFullYear();\r\nvar inputDate = new Date(yy, mm - 1, dd);\r\nvar curDate = new Date(y, m, d);\r\n\r\n\r\n\r\n//So sanh ngay nhap voi ngay hien tai\r\nif (inputDate > curDate) {\r\n return [{type:\"warning\", message:\"Năm nhập lớn hơn năm hiện tại\"}]\r\n}\r\n\r\n\r\n}\r\n\r\nreturn formatdate(value);",
                        "created_date": "2019-11-28T06:50:27.116Z",
                        "last_modified": "2019-11-28T06:50:27.116Z",
                        "id": "5ddf6e33dedee200147c15f7"
                    },
                    "value_broadcast": "",
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cbb0c",
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
                                        "section": "Sub_Form2",
                                        "rule": "must_equal",
                                        "field": "SP01_78"
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
                    "_id": "5ee3007c7250577ca96cbb06",
                    "name": "SP01_80",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [
                        "Y",
                        "N"
                    ],
                    "control_type": "COMBOBOX",
                    "counted_character": true,
                    "default_value": "N",
                    "field_display": "Câu 32:",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.495Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cbb06",
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
                    "_id": "5ee3007c7250577ca96cbb08",
                    "name": "SP01_81",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [
                        "Y",
                        "N"
                    ],
                    "control_type": "COMBOBOX",
                    "counted_character": true,
                    "default_value": "N",
                    "field_display": "Câu 33:",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.495Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cbb08",
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
                    "_id": "5ee3007c7250577ca96cbb14",
                    "name": "SP01_82",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "33- đã học xong lớp mấy?",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.495Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cbb14",
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
                    "_id": "5ee3007c7250577ca96cbb0e",
                    "name": "SP01_83",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "33- số anh chị em ruột hiện có",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.495Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cbb0e",
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
                    "_id": "5ee3007c7250577ca96cbb10",
                    "name": "SP01_84",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "33- nếu người được bảo hiểm từ 5t trờ xuống, vui lòng cho biết cân nặng",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.495Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cbb10",
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
                    "_id": "5ee3007c7250577ca96cbb12",
                    "name": "SP01_85",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [
                        "Y",
                        "N"
                    ],
                    "control_type": "COMBOBOX",
                    "counted_character": true,
                    "default_value": "N",
                    "field_display": "33 - có sinh sớm hơn trước 4 tuần không",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.495Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cbb12",
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
                    "_id": "5ee3007c7250577ca96cbb16",
                    "name": "SP01_87",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [
                        "Y",
                        "N"
                    ],
                    "control_type": "COMBOBOX",
                    "counted_character": true,
                    "default_value": "N",
                    "field_display": "Câu 34:",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.495Z",
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
                        "content": "",
                        "created_date": "2019-11-29T08:49:07.590Z",
                        "last_modified": "2019-11-29T08:49:07.590Z",
                        "id": "5de0db83dedee200147c1611"
                    },
                    "value_broadcast": "",
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cbb16",
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
                    "_id": "5ee3007c7250577ca96cba63",
                    "name": "RM3",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Ghi Chú 3",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.487Z",
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
                        "content": "if(value.length>23){\n    return [{type: \"error\",\n        message: `Không được nhập quá 23 ký tự `\n    }]\n}",
                        "arguments": {}
                    },
                    "value_broadcast": "",
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cba63",
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
                    "_id": "5f439cb1cbd2023af3fdee83",
                    "name": "sothich",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [
                        "Nghe nhạc",
                        "Xem phim",
                        "Du lịch",
                        "Others"
                    ],
                    "control_type": "CHECKBOX",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Sở thích của bạn ?",
                    "is_list": true,
                    "last_modified": "2020-09-04T04:40:17.496Z",
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5f439cb1cbd2023af3fdee83",
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
                }
            ],
            "id": "5ee3007c7250577ca96cbba6"
        },
        {
            "layout_labels": null,
            "name": "Sub_Form3",
            "layout_name": "Sub_Form",
            "index": 3,
            "layout_id": "5ee3007c7250577ca96cbb28",
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
                    "_id": "5ee3007c7250577ca96cba05",
                    "name": "O54",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Tên sản phẩm bổ sung",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.483Z",
                    "lookup_broadcast": [],
                    "lookup_source": {
                        "allow_multiple": false,
                        "characters_trigger_lookup": 1,
                        "group_project": "production",
                        "key_value": "value",
                        "locale": [
                            "165_191128_340_SUNLIFE"
                        ],
                        "lookup_after_time": 1,
                        "lookup_field": "product",
                        "name": "Sunlife_Product",
                        "param_set": "return [data.O54]",
                        "result_view_config": [
                            {
                                "title": "Product",
                                "key_value": "value"
                            }
                        ],
                        "related_columns": [],
                        "specific_project": "0",
                        "created_date": "2019-12-10T03:03:40.734Z",
                        "last_modified": "2019-12-10T03:03:40.734Z",
                        "id": "5def0b0cd3f551001f8958be"
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
                        "content": "if (value){\r\n    async function checkValidation(value) {\r\n            let dataLookup =  await fetchJSON(`https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/product/[%22${value}%22]`);\r\n            let _value =value.toLowerCase(); \r\n            if (!Array.isArray(dataLookup.json_single)||dataLookup.json_single.map(item => item.value.toLowerCase()).findIndex(item => item === _value) === -1) {\r\n                            return [{\r\n                              type: \"error\",\r\n                              message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                            }]\r\n                         }\r\n            // if(value.toLowerCase().includes('nhhien'))             \r\n            //              return[{ \r\n            //                   type: 'warning',\r\n            //                   message: `Lookup warning value:${value}`}];\r\n    }\r\n    return await checkValidation(value);\r\n    }\r\n",
                        "arguments": {}
                    },
                    "value_broadcast": "",
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cba05",
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
                    "_id": "5ee3007c7250577ca96cba07",
                    "name": "O55",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Số tiền bảo hiểm sản phẩm bổ sung",
                    "is_list": false,
                    "last_modified": "2020-09-11T03:11:43.555Z",
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
                        "content": "function removeSpace(input){\r\n    if (input.includes('+')) {\r\n        input = input.replace(/[+]/g, '000');\r\n    }\r\n\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\tinput = input.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'-');\r\n\tinput = input.replace(/[\\s\\t]*(\\()[\\s\\t]*/g,' (');\r\n\tinput = input.replace(/[\\s\\t]*(\\))[\\s\\t]*/g,') ');\r\n    input = input.replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'/');\r\n    input = input.replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'.');\r\n    input = input.replace(/[\\s\\t]*(\\,)[\\s\\t]*/g,',');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);"
                    },
                    "tooltip": "",
                    "validation": {
                        "name": "",
                        "content": "var regex1 = /[^\\s0-9.+]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n",
                        "arguments": {}
                    },
                    "value_broadcast": "",
                    "ocr_threshold": {
                        "confidence": "",
                        "below": "none"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cba07",
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
                    "_id": "5ee3007c7250577ca96cba0b",
                    "name": "O57",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Thời hạn đóng phí",
                    "is_list": false,
                    "last_modified": "2020-09-04T04:40:17.484Z",
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
                        "content": "function removeSpace(input){\r\n\r\n\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\tinput = input.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'-');\r\n\tinput = input.replace(/[\\s\\t]*(\\()[\\s\\t]*/g,' (');\r\n\tinput = input.replace(/[\\s\\t]*(\\))[\\s\\t]*/g,') ');\r\n    input = input.replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'/');\r\n    input = input.replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'.');\r\n    input = input.replace(/[\\s\\t]*(\\,)[\\s\\t]*/g,',');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);"
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
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cba0b",
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
                    "_id": "5ee3007c7250577ca96cbb18",
                    "name": "SP01_90",
                    "project_id": "5ee2f173c5c2440014ecba3d",
                    "argument_details": [
                        "Basic",
                        "Premium",
                        "VIP",
                        "VIP Plus"
                    ],
                    "control_type": "CHECKBOX",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Gói sản phẩm MR",
                    "is_list": true,
                    "last_modified": "2020-09-18T02:31:24.720Z",
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
                        "created_date": "2020-04-27T07:08:22.358Z",
                        "last_modified": "2020-04-27T07:09:29.160Z",
                        "id": "5ea684e696527c001be0c516"
                    },
                    "tooltip": "",
                    "validation": {
                        "name": "",
                        "content": "",
                        "arguments": {}
                    },
                    "value_broadcast": "",
                    "ocr_threshold": {
                        "confidence": "0",
                        "below": "highlight"
                    },
                    "field_setting": {
                        "field_id": "5ee3007c7250577ca96cbb18",
                        "visible": true,
                        "disable": false,
                        "double_typing": false,
                        "argument_details": [
                            {
                                "value": "Basic"
                            },
                            {
                                "value": "Premium"
                            },
                            {
                                "value": "VIP"
                            },
                            {
                                "value": "VIP Plus"
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
            "id": "5ee3007c7250577ca96cbba3"
        }
    ]
}