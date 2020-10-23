export function getSections3() {
    return [
        {
            "layout_labels": null,
            "name": "Personal",
            "layout_name": "Personal2",
            "index": 0,
            "layout_id": "5f192dc0ef3a4d001b598dfd",
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
                    "_id": "5ea6a7837250577ca9c71872",
                    "name": "A510",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Nơi nhận HĐ",
                    "is_list": false,
                    "last_modified": "2020-09-21T02:58:43.759Z",
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
                        "lookup_field": "birthplace",
                        "name": "Sunlife_Province",
                        "param_set": "return [data.A510]",
                        "result_view_config": [
                            {
                                "title": "Province",
                                "key_value": "value"
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
                        "content": "if(!value){\r\n    return [{type : \"error\" , message : \"Field đang trống, vui lòng kiểm tra lại trước khi save\"}];\r\n}\r\n\r\nif (value){\r\n    async function checkValidation(value) {\r\n            let dataLookup =  await fetchJSON(`https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/birthplace/[%22${value}%22]`);\r\n            let _value =value.toLowerCase(); \r\n            if (!Array.isArray(dataLookup.json_single)||dataLookup.json_single.map(item => item.value.toLowerCase()).findIndex(item => item === _value) === -1) {\r\n                            return [{\r\n                              type: \"error\",\r\n                              message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                            }]\r\n                         }\r\n            // if(value.toLowerCase().includes('nhhien'))             \r\n            //              return[{ \r\n            //                   type: 'warning',\r\n            //                   message: `Lookup warning value:${value}`}];\r\n    }\r\n    return await checkValidation(value);\r\n    }",
                        "arguments": {}
                    },
                    "value_broadcast": "",
                    "field_setting": {
                        "field_id": "5ea6a7837250577ca9c71872",
                        "visible": false,
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
                    "visible": false,
                    "disable": false,
                    "double_typing": false
                },
                {
                    "_id": "5ea6a7837250577ca9c71a19",
                    "name": "A509_1",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "Ngày nhận HSYCBH",
                    "is_list": false,
                    "last_modified": "2020-09-21T02:58:43.758Z",
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
                    "tooltip": "",
                    "validation": {
                        "name": "Date",
                        "arguments": {},
                        "content": "if(!value){\r\n    return [{type : \"error\" , message : \"Field đang trống, vui lòng kiểm tra lại trước khi save\"}];\r\n}\r\n\r\n\r\nfunction chkDate(date){\r\n\tvar dd = date.substring(0,2);\r\n\tvar mm = date.substring(2,4);\r\n\tvar yy = date.substring(4,6);\r\n\tvar tmpDate = new Date();\r\n\tvar y = tmpDate.getFullYear()+\"\";\r\n\ty = y.substring(2,4)*1 + 1;\r\n\r\n\t//Gan gia tri nam la 19YY neu YY > nam hien tai + 1\r\n\t//Gan gia tri nam la 20YY neu YY <= nam hien tai + 1\r\n\tif(yy*1>y){ yy = 19+yy;\r\n\t}else {yy = 20+yy;}\r\n\r\n\treturn dd+mm+yy;\t\r\n}\r\n\r\nfunction formatdate(ngay_hieu_luc_in78){\r\nvar fvalue = ngay_hieu_luc_in78;\r\n\tvar regex = /^(?:(?:31(|\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(|\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(|\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(|\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$/\r\n//\tvar regex1 = /^\\d{6}$/;\r\n\tvar regex2 = /^(\\s*|[0-9\\.\\/\\-]{0,10})$/ ;\r\n\tvar date;\r\nif(fvalue === \"\") return ;\r\n// \tif(regex1.test(fvalue))\r\n// \treturn ;\r\n\tif(regex2.test(fvalue)){\r\n\t\r\n\tif(!regex.test(fvalue)){\r\n\t\treturn [{type:\"warning\",message:\"Ngày Tháng Năm không phù hợp, vui lòng kiểm tra lại.\"}]\r\n\t}\r\n\tif(fvalue.length < 8){\r\n\t\treturn [{type:\"error\",message:\"Field ngày không đủ 8 ký tự\"}]\r\n\t}\r\n}else{\r\n    return [{type:\"error\",message:\"Không đúng định dạng ddmmyyyy\"}]\r\n}\r\nfvalue = fvalue.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'');\r\nif(fvalue.length === 6){\r\n\tfvalue = chkDate(fvalue);\r\n}\r\nvar dd = fvalue.substring(0, 2);\r\nvar mm = fvalue.substring(2, 4);\r\nvar yy = fvalue.substring(4, 8);\r\nvar tmpDate = new Date();\r\nvar d = tmpDate.getDate();\r\nvar m = tmpDate.getMonth();\r\nvar y = tmpDate.getFullYear();\r\nvar inputDate = new Date(yy, mm - 1, dd);\r\nvar curDate = new Date(y, m, d);\r\n\r\n\r\n\r\n//So sanh ngay nhap voi ngay hien tai\r\nif (inputDate > curDate) {\r\n return [{type:\"warning\", message:\"Năm nhập lớn hơn năm hiện tại\"}]\r\n}\r\n\r\n\r\n}\r\n\r\nreturn formatdate(value);",
                        "created_date": "2019-11-28T06:50:27.116Z",
                        "last_modified": "2019-11-28T06:50:27.116Z",
                        "id": "5ddf6e33dedee200147c15f7"
                    },
                    "value_broadcast": "",
                    "field_setting": {
                        "field_id": "5ea6a7837250577ca9c71a19",
                        "visible": false,
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
                    "visible": false,
                    "disable": false,
                    "double_typing": false
                },
                {
                    "_id": "5ea6a7837250577ca9c719a9",
                    "name": "A03",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "A03_Họ",
                    "is_list": false,
                    "last_modified": "2020-09-22T10:48:53.650Z",
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
                        "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nfunction toTitleCase(input)\r\n{\r\n    return input.replace(/\\w*/g, function(input){return input.charAt(0).toUpperCase() + input.substr(1).toLowerCase();});\r\n}\r\n\r\n\r\nfunction transformGivenSurname(field_value) {\r\n  field_value = field_value.trim();\r\n  var fullString = '';\r\n  var arr_char = ['ß'];\r\n  if(field_value.includes(' ')){\r\n  \tvar arr = field_value.split(' ');\r\n    for(var i = 0 ; i < arr.length; i++){\r\n    \tvar strChild = arr[i];\r\n        if(strChild === strChild.toLowerCase() || strChild === strChild.toUpperCase()){\r\n \t       \tif(arr_char.includes(strChild.substring(0,1))){\r\n\t\t\t\tstrChild = strChild.substring(0,1) + strChild.substring(1,strChild.length).toLowerCase();\r\n          \t\tfullString += strChild + ' ';\r\n\t\t\t}else{\r\n           \t\tstrChild = strChild.substring(0,1).toUpperCase() + strChild.substring(1,strChild.length).toLowerCase();\r\n          \t\tfullString += strChild + ' ';\r\n            }\r\n          \r\n        }else{\r\n            strChild = strChild.substring(0,1).toUpperCase() + strChild.substring(1,strChild.length).toLowerCase();\r\n            fullString += strChild + ' ';\r\n        }\r\n    }\r\n  }else{\r\n  \tif(field_value === field_value.toLowerCase() || field_value === field_value.toUpperCase()){\r\n    \tif(arr_char.includes(field_value.substring(0,1))){\r\n\t\t\tfield_value = field_value.substring(0,1) + field_value.substring(1,field_value.length).toLowerCase();\r\n     \t\tfullString = field_value;\r\n\t\t}else{\r\n        \tfield_value = field_value.substring(0,1).toUpperCase() + field_value.substring(1,field_value.length).toLowerCase();\r\n      \t\tfullString = field_value;\r\n\t\t}\r\n      \r\n    }else{\r\n        field_value = field_value.substring(0,1).toUpperCase() + field_value.substring(1,field_value.length).toLowerCase();\r\n        fullString = field_value;\r\n    }\r\n  }\r\n  return fullString.trim();\r\n}\r\nreturn transformGivenSurname(removeSpace(value));",
                        "created_date": "2019-11-28T07:25:37.362Z",
                        "last_modified": "2019-11-28T07:25:37.362Z",
                        "id": "5ddf7671dedee200147c15f9"
                    },
                    "tooltip": "",
                    "validation": {
                        "name": "Text",
                        "arguments": {
                            "field": "A10"
                        },
                        "content": "var regex1 = /[^\\sA-Za-zsáàảãạâăắằẳẵặặấầẩẫậéèẻẽẹêếềểễệíìỉĩịóòỏõọôơốồổỗộớờởỡợúùủũụưứừửữựýỳỷỹỵđÁÀẢÃẠÂĂẮẰẲẴẶẶẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔƠỐỒỔỖỘỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴĐ]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập chữ \"}]\r\n}\r\n\r\nfunction checkRuleEqual(value_crr =\"\" , value_brd = \"\"){\r\n    value_crr = value_crr.trim()\r\n    value_brd = value_brd.toUpperCase().trim()\r\n    \r\n    if(value_brd===\"F\" && !value_crr || value_brd===\"M\" && !value_crr ){\r\n       return [{type : \"error\" , message : \"Field giới tính là F hoặc M thì field Họ buộc phải có giá trị\"}];\r\n    }\r\n}\r\n\r\nreturn checkRuleEqual(value, field);",
                        "created_date": "2019-11-29T08:21:01.677Z",
                        "last_modified": "2019-11-29T08:21:01.677Z",
                        "id": "5de0d4eddedee200147c1603"
                    },
                    "value_broadcast": "",
                    "ocr_threshold": {
                        "confidence": "-1",
                        "below": "highlight",
                        "above": "none"
                    },
                    "field_setting": {
                        "field_id": "5ea6a7837250577ca9c719a9",
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
                    "_id": "5ea6a7837250577ca9c71aa6",
                    "name": "A04",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "A04_Tên Lót",
                    "is_list": false,
                    "last_modified": "2020-09-22T10:49:02.754Z",
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
                        "name": "Name_transform",
                        "arguments": {},
                        "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nfunction transformGivenSurname(field_value) {\r\n  field_value = field_value.trim();\r\n  var fullString = '';\r\n  var arr_char = ['ß'];\r\n  if(field_value.includes(' ')){\r\n  \tvar arr = field_value.split(' ');\r\n    for(var i = 0 ; i < arr.length; i++){\r\n    \tvar strChild = arr[i];\r\n        if(strChild === strChild.toLowerCase() || strChild === strChild.toUpperCase()){\r\n \t       \tif(arr_char.includes(strChild.substring(0,1))){\r\n\t\t\t\tstrChild = strChild.substring(0,1) + strChild.substring(1,strChild.length).toLowerCase();\r\n          \t\tfullString += strChild + ' ';\r\n\t\t\t}else{\r\n           \t\tstrChild = strChild.substring(0,1).toUpperCase() + strChild.substring(1,strChild.length).toLowerCase();\r\n          \t\tfullString += strChild + ' ';\r\n            }\r\n          \r\n        }else{\r\n            strChild = strChild.substring(0,1).toUpperCase() + strChild.substring(1,strChild.length).toLowerCase();\r\n            fullString += strChild + ' ';\r\n        }\r\n    }\r\n  }else{\r\n  \tif(field_value === field_value.toLowerCase() || field_value === field_value.toUpperCase()){\r\n    \tif(arr_char.includes(field_value.substring(0,1))){\r\n\t\t\tfield_value = field_value.substring(0,1) + field_value.substring(1,field_value.length).toLowerCase();\r\n     \t\tfullString = field_value;\r\n\t\t}else{\r\n        \tfield_value = field_value.substring(0,1).toUpperCase() + field_value.substring(1,field_value.length).toLowerCase();\r\n      \t\tfullString = field_value;\r\n\t\t}\r\n      \r\n    }else{\r\n        field_value = field_value.substring(0,1).toUpperCase() + field_value.substring(1,field_value.length).toLowerCase();\r\n        fullString = field_value;\r\n    }\r\n  }\r\n  return fullString.trim();\r\n}\r\nreturn transformGivenSurname(removeSpace(value));",
                        "created_date": "2019-11-29T09:40:49.056Z",
                        "last_modified": "2019-11-29T09:40:49.056Z",
                        "id": "5de0e7a1dedee200147c1612"
                    },
                    "text_type": "",
                    "tooltip": "",
                    "validation": {
                        "name": "Text Tiếng Việt",
                        "arguments": {},
                        "content": "var regex1 = /[^\\sA-Za-zsáàảãạâăắằẳẵặặấầẩẫậéèẻẽẹêếềểễệíìỉĩịóòỏõọôơốồổỗộớờởỡợúùủũụưứừửữựýỳỷỹỵđÁÀẢÃẠÂĂẮẰẲẴẶẶẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔƠỐỒỔỖỘỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴĐ]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập chữ \"}]\r\n}\r\n",
                        "created_date": "2019-11-29T08:21:01.677Z",
                        "last_modified": "2019-11-29T08:33:51.062Z",
                        "id": "5de0d4eddedee200147c1603"
                    },
                    "value_broadcast": "",
                    "ocr_threshold": {
                        "confidence": "-1",
                        "below": "highlight",
                        "above": "none"
                    },
                    "field_setting": {
                        "field_id": "5ea6a7837250577ca9c71aa6",
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
                    "_id": "5ea6a7837250577ca9c71af9",
                    "name": "A05",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "A05_Tên",
                    "is_list": false,
                    "last_modified": "2020-09-22T10:49:10.584Z",
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
                        "name": "Name_transform",
                        "arguments": {},
                        "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nfunction transformGivenSurname(field_value) {\r\n  field_value = field_value.trim();\r\n  var fullString = '';\r\n  var arr_char = ['ß'];\r\n  if(field_value.includes(' ')){\r\n  \tvar arr = field_value.split(' ');\r\n    for(var i = 0 ; i < arr.length; i++){\r\n    \tvar strChild = arr[i];\r\n        if(strChild === strChild.toLowerCase() || strChild === strChild.toUpperCase()){\r\n \t       \tif(arr_char.includes(strChild.substring(0,1))){\r\n\t\t\t\tstrChild = strChild.substring(0,1) + strChild.substring(1,strChild.length).toLowerCase();\r\n          \t\tfullString += strChild + ' ';\r\n\t\t\t}else{\r\n           \t\tstrChild = strChild.substring(0,1).toUpperCase() + strChild.substring(1,strChild.length).toLowerCase();\r\n          \t\tfullString += strChild + ' ';\r\n            }\r\n          \r\n        }else{\r\n            strChild = strChild.substring(0,1).toUpperCase() + strChild.substring(1,strChild.length).toLowerCase();\r\n            fullString += strChild + ' ';\r\n        }\r\n    }\r\n  }else{\r\n  \tif(field_value === field_value.toLowerCase() || field_value === field_value.toUpperCase()){\r\n    \tif(arr_char.includes(field_value.substring(0,1))){\r\n\t\t\tfield_value = field_value.substring(0,1) + field_value.substring(1,field_value.length).toLowerCase();\r\n     \t\tfullString = field_value;\r\n\t\t}else{\r\n        \tfield_value = field_value.substring(0,1).toUpperCase() + field_value.substring(1,field_value.length).toLowerCase();\r\n      \t\tfullString = field_value;\r\n\t\t}\r\n      \r\n    }else{\r\n        field_value = field_value.substring(0,1).toUpperCase() + field_value.substring(1,field_value.length).toLowerCase();\r\n        fullString = field_value;\r\n    }\r\n  }\r\n  return fullString.trim();\r\n}\r\nreturn transformGivenSurname(removeSpace(value));",
                        "created_date": "2019-11-29T09:40:49.056Z",
                        "last_modified": "2019-11-29T09:45:36.834Z",
                        "id": "5de0e7a1dedee200147c1612"
                    },
                    "tooltip": "",
                    "validation": {
                        "name": "Text Tiếng Việt",
                        "arguments": {
                            "field": "A10"
                        },
                        "content": "var regex1 = /[^\\sA-Za-zsáàảãạâăắằẳẵặặấầẩẫậéèẻẽẹêếềểễệíìỉĩịóòỏõọôơốồổỗộớờởỡợúùủũụưứừửữựýỳỷỹỵđÁÀẢÃẠÂĂẮẰẲẴẶẶẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔƠỐỒỔỖỘỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴĐ]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập chữ \"}]\r\n}\r\n\r\nfunction checkRuleEqual(value_crr =\"\" , value_brd = \"\"){\r\n    value_crr = value_crr.trim()\r\n    value_brd = value_brd.toUpperCase().trim()\r\n    \r\n    if(value_brd===\"F\" && !value_crr || value_brd===\"M\" && !value_crr ){\r\n       return [{type : \"error\" , message : \"Field giới tính là F hoặc M thì field Tên buộc phải có giá trị\"}];\r\n    }\r\n}\r\n\r\nreturn checkRuleEqual(value, field);",
                        "created_date": "2019-11-29T08:21:01.677Z",
                        "last_modified": "2019-11-29T08:33:51.062Z",
                        "id": "5de0d4eddedee200147c1603"
                    },
                    "value_broadcast": "",
                    "ocr_threshold": {
                        "confidence": "-1",
                        "below": "highlight",
                        "above": "none"
                    },
                    "field_setting": {
                        "field_id": "5ea6a7837250577ca9c71af9",
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
                    "_id": "5ea6a7837250577ca9c71955",
                    "name": "A06",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "A06_Ngày tháng năm sinh",
                    "is_list": false,
                    "last_modified": "2020-09-22T10:49:27.677Z",
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
                        "name": "date",
                        "arguments": {},
                        "content": "function chkDate(date){\r\n\tvar dd = date.substring(0,2);\r\n\tvar mm = date.substring(2,4);\r\n\tvar yy = date.substring(4,6);\r\n\tvar tmpDate = new Date();\r\n\tvar y = tmpDate.getFullYear()+\"\";\r\n\ty = y.substring(2,4)*1 + 1;\r\n\r\n\t//Gan gia tri nam la 19YY neu YY > nam hien tai + 1\r\n\t//Gan gia tri nam la 20YY neu YY <= nam hien tai + 1\r\n\tif(yy*1>y){ yy = 19+yy;\r\n\t}else {yy = 20+yy;}\r\n\r\n\treturn dd+mm+yy;\t\r\n}\r\n\r\nfunction formatdate(ngay_hieu_luc_in78){\r\nvar fvalue = ngay_hieu_luc_in78;\r\n\tvar regex = /^(?:(?:31(|\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(|\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(|\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(|\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$/\r\n//\tvar regex1 = /^\\d{6}$/;\r\n\tvar regex2 = /^(\\s*|[0-9\\.\\/\\-]{0,10})$/ ;\r\n\tvar date;\r\nif(fvalue === \"\") return ;\r\n// \tif(regex1.test(fvalue))\r\n// \treturn ;\r\n\tif(regex2.test(fvalue)){\r\n\t\r\n\tif(!regex.test(fvalue)){\r\n\t\treturn [{type:\"warning\",message:\"Ngày Tháng Năm không phù hợp, vui lòng kiểm tra lại.\"}]\r\n\t}\r\n\tif(fvalue.length < 8){\r\n\t\treturn [{type:\"error\",message:\"Field ngày không đủ 8 ký tự\"}]\r\n\t}\r\n}else{\r\n    return [{type:\"error\",message:\"Không đúng định dạng ddmmyyyy\"}]\r\n}\r\nfvalue = fvalue.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'');\r\nif(fvalue.length === 6){\r\n\tfvalue = chkDate(fvalue);\r\n}\r\nvar dd = fvalue.substring(0, 2);\r\nvar mm = fvalue.substring(2, 4);\r\nvar yy = fvalue.substring(4, 8);\r\nvar tmpDate = new Date();\r\nvar d = tmpDate.getDate();\r\nvar m = tmpDate.getMonth();\r\nvar y = tmpDate.getFullYear();\r\nvar inputDate = new Date(yy, mm - 1, dd);\r\nvar curDate = new Date(y, m, d);\r\n\r\n\r\n\r\n//So sanh ngay nhap voi ngay hien tai\r\nif (inputDate > curDate) {\r\n return [{type:\"warning\", message:\"Năm nhập lớn hơn năm hiện tại\"}]\r\n}\r\n\r\n\r\n}\r\n\r\nreturn formatdate(value);",
                        "created_date": "2019-11-28T06:50:27.116Z",
                        "last_modified": "2019-11-28T06:50:27.116Z",
                        "id": "5ddf6e33dedee200147c15f7"
                    },
                    "value_broadcast": "",
                    "ocr_threshold": {
                        "confidence": "-1",
                        "below": "highlight",
                        "above": "none"
                    },
                    "field_setting": {
                        "field_id": "5ea6a7837250577ca9c71955",
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
                    "_id": "5ea6a7837250577ca9c719fb",
                    "name": "A07",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "A07_Nơi Sinh",
                    "is_list": false,
                    "last_modified": "2020-09-24T10:24:30.168Z",
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
                        "param_set": "return [data.A07]",
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
                        "confidence": "-2",
                        "below": "highlight",
                        "above": "none"
                    },
                    "field_setting": {
                        "field_id": "5ea6a7837250577ca9c719fb",
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
                    "_id": "5ea6a7837250577ca9c71a4d",
                    "name": "A08",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "Việt Nam",
                    "field_display": "A08_Quốc Tịch 1",
                    "is_list": false,
                    "last_modified": "2020-09-22T10:49:52.013Z",
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
                        "param_set": "return [data.A08]",
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
                    "field_setting": {
                        "field_id": "5ea6a7837250577ca9c71a4d",
                        "visible": false,
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
                    "visible": false,
                    "disable": false,
                    "double_typing": false
                },
                {
                    "_id": "5ea6a7837250577ca9c717fe",
                    "name": "A09",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "A09_Quốc tịch 2",
                    "is_list": false,
                    "last_modified": "2020-09-22T10:50:04.874Z",
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
                        "param_set": "return [data.A09]",
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
                    "field_setting": {
                        "field_id": "5ea6a7837250577ca9c717fe",
                        "visible": false,
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
                    "visible": false,
                    "disable": false,
                    "double_typing": false
                },
                {
                    "_id": "5ea6a7837250577ca9c71854",
                    "name": "A10",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "A10_Giới tính",
                    "is_list": false,
                    "last_modified": "2020-09-25T02:56:51.452Z",
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
                        "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value.toUpperCase())",
                        "created_date": "2019-11-28T07:25:37.362Z",
                        "last_modified": "2019-11-28T07:25:37.362Z",
                        "id": "5ddf7671dedee200147c15f9"
                    },
                    "tooltip": "",
                    "validation": {
                        "name": "",
                        "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}\n\nfunction checkEqual(value1 =\"\" , value2 = \"\",value3 = \"\"){\n    value1 = value1.toUpperCase().trim();\n    value2 = value2.toUpperCase().trim();\n    value3 = value3.toUpperCase().trim();\n    \n    if(value1 ==='F' && !value2 ||value1 ==='M' && !value2){\n        return [{type : \"error\" , message : \"Field Giới Tính có dữ liệu F/M, không được bỏ trống Ngày tháng năm sinh\"}];\n    }\n    if(value1 ==='F' && !value3 ||value1 ==='M' && !value3){\n        return [{type : \"error\" , message : \"Field Giới Tính có dữ liệu F/M, không được bỏ trống Nơi Sinh\"}];\n    }\n}\n\nreturn checkEqual(value, farm, farm1);",
                        "arguments": {
                            "farm": "A06",
                            "farm1": "A07"
                        }
                    },
                    "value_broadcast": "",
                    "ocr_threshold": {
                        "confidence": "-1",
                        "below": "highlight",
                        "above": "none"
                    },
                    "field_setting": {
                        "field_id": "5ea6a7837250577ca9c71854",
                        "visible": true,
                        "disable": false,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
                        "argument_details": [
                            {
                                "value": "Male"
                            },
                            {
                                "value": "Female"
                            },
                            {
                                "value": "Company"
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
                    "_id": "5ea6a7837250577ca9c71a37",
                    "name": "O82",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "O82_Fax",
                    "is_list": false,
                    "last_modified": "2020-09-23T09:18:05.118Z",
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
                        "description": "Có ký tự lạ không được nhập trong field hoặc nhập quá 12 ký tự, vui lòng kiểm tra lại.",
                        "content": "^(\\s*|[0-9\\+]{0,12})$"
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
                        "name": "Not_Input_Semicolon",
                        "arguments": {},
                        "content": "",
                        "created_date": "2020-04-27T06:48:30.708Z",
                        "last_modified": "2020-04-27T06:48:30.708Z",
                        "id": "5ea6803e96527c001be0c511"
                    },
                    "value_broadcast": "",
                    "field_setting": {
                        "field_id": "5ea6a7837250577ca9c71a37",
                        "visible": false,
                        "disable": false,
                        "dynamic_by_field": {
                            "effect": "visible",
                            "groups": [
                                [
                                    {
                                        "value": "Company",
                                        "section": "Personal",
                                        "rule": "must_equal",
                                        "field": "A10"
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
                    "visible": false,
                    "disable": false,
                    "double_typing": false
                },
                {
                    "_id": "5ea6a7837250577ca9c7183c",
                    "name": "O87",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "O87_Người đại điện pháp luật công ty",
                    "is_list": false,
                    "last_modified": "2020-09-22T10:50:44.341Z",
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
                        "description": "Có ký tự lạ không được nhập trong field hoặc nhập quá 49 ký tự, vui lòng kiểm tra lại.",
                        "content": "^(\\s*|[0-9A-Za-zsáàảãạâăắằẳẵặặấầẩẫậéèẻẽẹêếềểễệíìỉĩịóòỏõọôơốồổỗộớờởỡợúùủũụưứừửữựýỳỷỹỵđÁÀẢÃẠÂĂẮẰẲẴẶẶẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔƠỐỒỔỖỘỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴĐ\\,\\.\\-\\?\\/\\(\\)\\;\\:\\'\\\"\\&\\=\\\\ ]{0,49})$"
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
                    "field_setting": {
                        "field_id": "5ea6a7837250577ca9c7183c",
                        "visible": false,
                        "disable": false,
                        "dynamic_by_field": {
                            "effect": "visible",
                            "groups": [
                                [
                                    {
                                        "value": "Company",
                                        "section": "Personal",
                                        "rule": "must_equal",
                                        "field": "A10"
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
                    "visible": false,
                    "disable": false,
                    "double_typing": false
                },
                {
                    "_id": "5ea6a7837250577ca9c71958",
                    "name": "A11",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "A11_Tình trạng hôn nhân",
                    "is_list": false,
                    "last_modified": "2020-09-22T10:50:57.534Z",
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
                        "content": "if(!value){\r\n    return [{type:\"error\",message:\"Không được bỏ trống\"}]\r\n}",
                        "arguments": {}
                    },
                    "value_broadcast": "",
                    "field_setting": {
                        "field_id": "5ea6a7837250577ca9c71958",
                        "visible": false,
                        "disable": false,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
                        "argument_details": [
                            {
                                "value": "SINGLE"
                            },
                            {
                                "value": "MARRIED"
                            },
                            {
                                "value": "WIDOWED"
                            },
                            {
                                "value": "DIVORCED"
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
                    "visible": false,
                    "disable": false,
                    "double_typing": false
                },
                {
                    "_id": "5ea6a7837250577ca9c71aac",
                    "name": "A12",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [
                        "CMND",
                        "Passport",
                        "CCCD",
                        "Giấy Khai Sinh"
                    ],
                    "control_type": "COMBOBOX",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "A12_Loại Giấy Tờ",
                    "is_list": false,
                    "last_modified": "2020-09-22T10:51:10.954Z",
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
                    "field_setting": {
                        "field_id": "5ea6a7837250577ca9c71aac",
                        "visible": false,
                        "disable": false,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
                        "argument_details": [
                            {
                                "value": "CMND"
                            },
                            {
                                "value": "Passport"
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
                },
                {
                    "_id": "5ea6a7837250577ca9c71806",
                    "name": "A13",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "A13_Số giấy tờ tùy thân",
                    "is_list": false,
                    "last_modified": "2020-09-22T10:51:23.224Z",
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
                            "given": "A12"
                        },
                        "content": "function checkCharacter(value) {\r\n\r\n    if(!value){\r\n        return false;\r\n    }else{\r\n        return true;\r\n    }\r\n  }\r\nfunction checkEqualGiven(surname_value =\"\" , given_value = \"\"){\r\n      surname_value = surname_value.trim()\r\n      given_value = given_value.trim()\r\n      var regex1 = /^[0-9]{9}$/;\r\n      var regex2 = /^[0-9]{12}$/;\r\n      var regex3 = /^[A-Z0-9]{8,9}$/;\r\n\r\n      if(!regex1.test(surname_value) && given_value === \"CMND\"){\r\n          return [{type : \"error\" , message : \"CMND chỉ nhập 9 số\"}];\r\n      }else\r\n      if(!regex2.test(surname_value) && given_value === \"CCCD\"){\r\n          return [{type : \"error\" , message : \"CCCD chỉ nhập 12 số\"}];\r\n      }else\r\n      if(!regex3.test(surname_value) && given_value === \"Passport\"){\r\n          return [{type : \"error\" , message : \"Passport chỉ nhập chữ in và 8 hoặc 9 số\"}];\r\n      }\r\n     \r\n     return;\r\n  }\r\n  \r\nfunction checkError(value){\r\n      if(checkCharacter(value) === true){\r\n          \r\n             return checkEqualGiven(value, given);\r\n              \r\n      }else{\r\n          return [{type : \"error\" , message : \"Không có số giấy tờ tùy thân\"}];\r\n      }\r\n  }\r\n  \r\nreturn checkError(value);",
                        "created_date": "2019-11-28T06:46:23.478Z",
                        "last_modified": "2019-11-29T08:25:58.570Z",
                        "id": "5ddf6d3fdedee200147c15f6"
                    },
                    "value_broadcast": "",
                    "ocr_threshold": {
                        "confidence": "-1",
                        "below": "highlight",
                        "above": "none"
                    },
                    "field_setting": {
                        "field_id": "5ea6a7837250577ca9c71806",
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
                    "_id": "5ea6a7837250577ca9c71a57",
                    "name": "A14",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "A14_Ngày cấp",
                    "is_list": false,
                    "last_modified": "2020-09-22T10:51:32.465Z",
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
                        "arguments": {
                            "farm": "A06"
                        },
                        "content": "function checkEqual(value1 =\"\" , value2 = \"\"){\r\n    value1 = value1.trim().toUpperCase()\r\n    value2 = value2.trim().toUpperCase()\r\n    \r\n    if(value1 === value2){\r\n        return true;\r\n    }\r\n}\r\n\r\n\r\n\r\nfunction chkDate(date){\r\n\tvar dd = date.substring(0,2);\r\n\tvar mm = date.substring(2,4);\r\n\tvar yy = date.substring(4,6);\r\n\tvar tmpDate = new Date();\r\n\tvar y = tmpDate.getFullYear()+\"\";\r\n\ty = y.substring(2,4)*1 + 1;\r\n\r\n\t//Gan gia tri nam la 19YY neu YY > nam hien tai + 1\r\n\t//Gan gia tri nam la 20YY neu YY <= nam hien tai + 1\r\n\tif(yy*1>y){ yy = 19+yy;\r\n\t}else {yy = 20+yy;}\r\n\r\n\treturn dd+mm+yy;\t\r\n}\r\n\r\nfunction formatdate(ngay_hieu_luc_in78){\r\nvar fvalue = ngay_hieu_luc_in78;\r\n\tvar regex = /^(?:(?:31(|\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(|\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(|\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(|\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$/\r\n//\tvar regex1 = /^\\d{6}$/;\r\n\tvar regex2 = /^(\\s*|[0-9\\.\\/\\-]{0,10})$/ ;\r\n\tvar date;\r\nif(fvalue === \"\") return ;\r\n// \tif(regex1.test(fvalue))\r\n// \treturn ;\r\n\tif(regex2.test(fvalue)){\r\n\t\r\n\tif(!regex.test(fvalue)){\r\n\t\treturn [{type:\"warning\",message:\"Ngày Tháng Năm không phù hợp, vui lòng kiểm tra lại.\"}]\r\n\t}\r\n\tif(fvalue.length < 8){\r\n\t\treturn [{type:\"error\",message:\"Field ngày không đủ 8 ký tự\"}]\r\n\t}\r\n}else{\r\n    return [{type:\"error\",message:\"Không đúng định dạng ddmmyyyy\"}]\r\n}\r\nfvalue = fvalue.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'');\r\nif(fvalue.length === 6){\r\n\tfvalue = chkDate(fvalue);\r\n}\r\nvar dd = fvalue.substring(0, 2);\r\nvar mm = fvalue.substring(2, 4);\r\nvar yy = fvalue.substring(4, 8);\r\nvar tmpDate = new Date();\r\nvar d = tmpDate.getDate();\r\nvar m = tmpDate.getMonth();\r\nvar y = tmpDate.getFullYear();\r\nvar inputDate = new Date(yy, mm - 1, dd);\r\nvar curDate = new Date(y, m, d);\r\n\r\n\r\n\r\n//So sanh ngay nhap voi ngay hien tai\r\nif (inputDate > curDate) {\r\n return [{type:\"warning\", message:\"Năm nhập lớn hơn năm hiện tại\"}]\r\n}\r\n\r\n}\r\n\r\nfunction checkError(value) {\r\n    if (checkEqual(value, farm) === true) {\r\n        return [{type : \"error\" , message : \"A06_Ngày tháng năm sinh giống A14_Ngày cấp \"}];\r\n    } else {\r\n        return formatdate(value);\r\n    }\r\n}\r\n\r\nreturn checkError(value);",
                        "created_date": "2019-11-28T06:50:27.116Z",
                        "last_modified": "2019-11-28T06:50:27.116Z",
                        "id": "5ddf6e33dedee200147c15f7"
                    },
                    "value_broadcast": "",
                    "field_setting": {
                        "field_id": "5ea6a7837250577ca9c71a57",
                        "visible": false,
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
                    "visible": false,
                    "disable": false,
                    "double_typing": false
                },
                {
                    "_id": "5ea6a7837250577ca9c71a13",
                    "name": "A31",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "A31_Mối quan hệ của BMBH với NĐBH",
                    "is_list": false,
                    "last_modified": "2020-09-23T09:22:44.338Z",
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
                        "param_set": "return [\"Owner's Relationship to Insured\",data.A31]",
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
                        "content": "if (value){\r\n    async function checkValidation(value) {\r\n            let params = `[\"Owner's Relationship to Insured\",\"${encodeURIComponent(value)}\"]`\r\n            let dataLookup =  await fetchJSON(`https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/relationship/${params}`);\r\n            let _value =value.toLowerCase(); \r\n            if (!Array.isArray(dataLookup.json_single)||dataLookup.json_single.map(item => item.english.toLowerCase()).findIndex(item => item === _value) === -1) {\r\n                            return [{\r\n                              type: \"error\",\r\n                              message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                            }]\r\n                         }\r\n            // if(value.toLowerCase().includes('nhhien'))             \r\n            //              return[{ \r\n            //                   type: 'warning',\r\n            //                   message: `Lookup warning value:${value}`}];\r\n    }\r\n    return await checkValidation(value);\r\n}else{\r\n    return [{\r\n        type: \"error\",\r\n        message : `Không được phép bỏ trống field `\r\n    }]\r\n}",
                        "arguments": {}
                    },
                    "value_broadcast": "",
                    "ocr_threshold": {
                        "confidence": "-1",
                        "below": "highlight",
                        "above": "none"
                    },
                    "field_setting": {
                        "field_id": "5ea6a7837250577ca9c71a13",
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
                    "_id": "5ea6a7837250577ca9c718aa",
                    "name": "A113",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [
                        " Y",
                        "N"
                    ],
                    "control_type": "COMBOBOX",
                    "counted_character": true,
                    "default_value": "N",
                    "field_display": "A113_PO khác LI?",
                    "is_list": false,
                    "last_modified": "2020-09-22T10:51:54.716Z",
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
                        "confidence": "-1",
                        "below": "highlight",
                        "above": "none"
                    },
                    "field_setting": {
                        "field_id": "5ea6a7837250577ca9c718aa",
                        "visible": true,
                        "disable": false,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
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
                    "_id": "5ea6a7837250577ca9c719ff",
                    "name": "A116",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "A116_Họ",
                    "is_list": false,
                    "last_modified": "2020-09-22T10:52:08.749Z",
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
                        "name": "Name_transform",
                        "arguments": {},
                        "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nfunction transformGivenSurname(field_value) {\r\n  field_value = field_value.trim();\r\n  var fullString = '';\r\n  var arr_char = ['ß'];\r\n  if(field_value.includes(' ')){\r\n  \tvar arr = field_value.split(' ');\r\n    for(var i = 0 ; i < arr.length; i++){\r\n    \tvar strChild = arr[i];\r\n        if(strChild === strChild.toLowerCase() || strChild === strChild.toUpperCase()){\r\n \t       \tif(arr_char.includes(strChild.substring(0,1))){\r\n\t\t\t\tstrChild = strChild.substring(0,1) + strChild.substring(1,strChild.length).toLowerCase();\r\n          \t\tfullString += strChild + ' ';\r\n\t\t\t}else{\r\n           \t\tstrChild = strChild.substring(0,1).toUpperCase() + strChild.substring(1,strChild.length).toLowerCase();\r\n          \t\tfullString += strChild + ' ';\r\n            }\r\n          \r\n        }else{\r\n            strChild = strChild.substring(0,1).toUpperCase() + strChild.substring(1,strChild.length).toLowerCase();\r\n            fullString += strChild + ' ';\r\n        }\r\n    }\r\n  }else{\r\n  \tif(field_value === field_value.toLowerCase() || field_value === field_value.toUpperCase()){\r\n    \tif(arr_char.includes(field_value.substring(0,1))){\r\n\t\t\tfield_value = field_value.substring(0,1) + field_value.substring(1,field_value.length).toLowerCase();\r\n     \t\tfullString = field_value;\r\n\t\t}else{\r\n        \tfield_value = field_value.substring(0,1).toUpperCase() + field_value.substring(1,field_value.length).toLowerCase();\r\n      \t\tfullString = field_value;\r\n\t\t}\r\n      \r\n    }else{\r\n        field_value = field_value.substring(0,1).toUpperCase() + field_value.substring(1,field_value.length).toLowerCase();\r\n        fullString = field_value;\r\n    }\r\n  }\r\n  return fullString.trim();\r\n}\r\nreturn transformGivenSurname(removeSpace(value));",
                        "created_date": "2019-11-29T09:40:49.056Z",
                        "last_modified": "2019-11-29T09:45:36.834Z",
                        "id": "5de0e7a1dedee200147c1612"
                    },
                    "tooltip": "",
                    "validation": {
                        "name": "Text Tiếng Việt",
                        "arguments": {
                            "field": "A123"
                        },
                        "content": "var regex1 = /[^\\sA-Za-zsáàảãạâăắằẳẵặặấầẩẫậéèẻẽẹêếềểễệíìỉĩịóòỏõọôơốồổỗộớờởỡợúùủũụưứừửữựýỳỷỹỵđÁÀẢÃẠÂĂẮẰẲẴẶẶẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔƠỐỒỔỖỘỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴĐ]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập chữ \"}]\r\n}\r\n\r\nfunction checkRuleEqual(value_crr =\"\" , value_brd = \"\"){\r\n    value_crr = value_crr.trim()\r\n    value_brd = value_brd.toUpperCase().trim()\r\n    \r\n    if(value_brd===\"F\" && !value_crr || value_brd===\"M\" && !value_crr ){\r\n       return [{type : \"error\" , message : \"Field giới tính là F hoặc M thì field Họ buộc phải có giá trị\"}];\r\n    }\r\n}\r\n\r\nreturn checkRuleEqual(value, field);",
                        "created_date": "2019-11-29T08:21:01.677Z",
                        "last_modified": "2019-11-29T08:33:51.062Z",
                        "id": "5de0d4eddedee200147c1603"
                    },
                    "value_broadcast": "",
                    "ocr_threshold": {
                        "confidence": "-1",
                        "below": "highlight",
                        "above": "none"
                    },
                    "field_setting": {
                        "field_id": "5ea6a7837250577ca9c719ff",
                        "visible": true,
                        "disable": false,
                        "dynamic_by_field": {
                            "effect": "invisible",
                            "groups": [
                                [
                                    {
                                        "value": [
                                            "N"
                                        ],
                                        "section": "Personal",
                                        "rule": "must_equal",
                                        "field": "A113"
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
                    "_id": "5ea6a7837250577ca9c719ad",
                    "name": "A117",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "A117_Tên Lót",
                    "is_list": false,
                    "last_modified": "2020-09-22T10:52:19.507Z",
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
                        "name": "Name_transform",
                        "arguments": {},
                        "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nfunction transformGivenSurname(field_value) {\r\n  field_value = field_value.trim();\r\n  var fullString = '';\r\n  var arr_char = ['ß'];\r\n  if(field_value.includes(' ')){\r\n  \tvar arr = field_value.split(' ');\r\n    for(var i = 0 ; i < arr.length; i++){\r\n    \tvar strChild = arr[i];\r\n        if(strChild === strChild.toLowerCase() || strChild === strChild.toUpperCase()){\r\n \t       \tif(arr_char.includes(strChild.substring(0,1))){\r\n\t\t\t\tstrChild = strChild.substring(0,1) + strChild.substring(1,strChild.length).toLowerCase();\r\n          \t\tfullString += strChild + ' ';\r\n\t\t\t}else{\r\n           \t\tstrChild = strChild.substring(0,1).toUpperCase() + strChild.substring(1,strChild.length).toLowerCase();\r\n          \t\tfullString += strChild + ' ';\r\n            }\r\n          \r\n        }else{\r\n            strChild = strChild.substring(0,1).toUpperCase() + strChild.substring(1,strChild.length).toLowerCase();\r\n            fullString += strChild + ' ';\r\n        }\r\n    }\r\n  }else{\r\n  \tif(field_value === field_value.toLowerCase() || field_value === field_value.toUpperCase()){\r\n    \tif(arr_char.includes(field_value.substring(0,1))){\r\n\t\t\tfield_value = field_value.substring(0,1) + field_value.substring(1,field_value.length).toLowerCase();\r\n     \t\tfullString = field_value;\r\n\t\t}else{\r\n        \tfield_value = field_value.substring(0,1).toUpperCase() + field_value.substring(1,field_value.length).toLowerCase();\r\n      \t\tfullString = field_value;\r\n\t\t}\r\n      \r\n    }else{\r\n        field_value = field_value.substring(0,1).toUpperCase() + field_value.substring(1,field_value.length).toLowerCase();\r\n        fullString = field_value;\r\n    }\r\n  }\r\n  return fullString.trim();\r\n}\r\nreturn transformGivenSurname(removeSpace(value));",
                        "created_date": "2019-11-29T09:40:49.056Z",
                        "last_modified": "2019-11-29T09:45:36.834Z",
                        "id": "5de0e7a1dedee200147c1612"
                    },
                    "tooltip": "",
                    "validation": {
                        "name": "Text Tiếng Việt",
                        "arguments": {},
                        "content": "var regex1 = /[^\\sA-Za-zsáàảãạâăắằẳẵặặấầẩẫậéèẻẽẹêếềểễệíìỉĩịóòỏõọôơốồổỗộớờởỡợúùủũụưứừửữựýỳỷỹỵđÁÀẢÃẠÂĂẮẰẲẴẶẶẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔƠỐỒỔỖỘỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴĐ]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập chữ \"}]\r\n}\r\n",
                        "created_date": "2019-11-29T08:21:01.677Z",
                        "last_modified": "2019-11-29T08:33:51.062Z",
                        "id": "5de0d4eddedee200147c1603"
                    },
                    "value_broadcast": "",
                    "ocr_threshold": {
                        "confidence": "-1",
                        "below": "highlight",
                        "above": "none"
                    },
                    "field_setting": {
                        "field_id": "5ea6a7837250577ca9c719ad",
                        "visible": true,
                        "disable": false,
                        "dynamic_by_field": {
                            "effect": "invisible",
                            "groups": [
                                [
                                    {
                                        "value": [
                                            "N"
                                        ],
                                        "section": "Personal",
                                        "rule": "must_equal",
                                        "field": "A113"
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
                    "_id": "5ea6a7837250577ca9c71858",
                    "name": "A118",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "A118_Tên",
                    "is_list": false,
                    "last_modified": "2020-09-22T10:52:29.877Z",
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
                        "name": "Name_transform",
                        "arguments": {},
                        "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nfunction transformGivenSurname(field_value) {\r\n  field_value = field_value.trim();\r\n  var fullString = '';\r\n  var arr_char = ['ß'];\r\n  if(field_value.includes(' ')){\r\n  \tvar arr = field_value.split(' ');\r\n    for(var i = 0 ; i < arr.length; i++){\r\n    \tvar strChild = arr[i];\r\n        if(strChild === strChild.toLowerCase() || strChild === strChild.toUpperCase()){\r\n \t       \tif(arr_char.includes(strChild.substring(0,1))){\r\n\t\t\t\tstrChild = strChild.substring(0,1) + strChild.substring(1,strChild.length).toLowerCase();\r\n          \t\tfullString += strChild + ' ';\r\n\t\t\t}else{\r\n           \t\tstrChild = strChild.substring(0,1).toUpperCase() + strChild.substring(1,strChild.length).toLowerCase();\r\n          \t\tfullString += strChild + ' ';\r\n            }\r\n          \r\n        }else{\r\n            strChild = strChild.substring(0,1).toUpperCase() + strChild.substring(1,strChild.length).toLowerCase();\r\n            fullString += strChild + ' ';\r\n        }\r\n    }\r\n  }else{\r\n  \tif(field_value === field_value.toLowerCase() || field_value === field_value.toUpperCase()){\r\n    \tif(arr_char.includes(field_value.substring(0,1))){\r\n\t\t\tfield_value = field_value.substring(0,1) + field_value.substring(1,field_value.length).toLowerCase();\r\n     \t\tfullString = field_value;\r\n\t\t}else{\r\n        \tfield_value = field_value.substring(0,1).toUpperCase() + field_value.substring(1,field_value.length).toLowerCase();\r\n      \t\tfullString = field_value;\r\n\t\t}\r\n      \r\n    }else{\r\n        field_value = field_value.substring(0,1).toUpperCase() + field_value.substring(1,field_value.length).toLowerCase();\r\n        fullString = field_value;\r\n    }\r\n  }\r\n  return fullString.trim();\r\n}\r\nreturn transformGivenSurname(removeSpace(value));",
                        "created_date": "2019-11-29T09:40:49.056Z",
                        "last_modified": "2019-11-29T09:45:36.834Z",
                        "id": "5de0e7a1dedee200147c1612"
                    },
                    "tooltip": "",
                    "validation": {
                        "name": "Text Tiếng Việt",
                        "arguments": {
                            "field": "A123"
                        },
                        "content": "var regex1 = /[^\\sA-Za-zsáàảãạâăắằẳẵặặấầẩẫậéèẻẽẹêếềểễệíìỉĩịóòỏõọôơốồổỗộớờởỡợúùủũụưứừửữựýỳỷỹỵđÁÀẢÃẠÂĂẮẰẲẴẶẶẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔƠỐỒỔỖỘỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴĐ]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập chữ \"}]\r\n}\r\n\r\nfunction checkRuleEqual(value_crr =\"\" , value_brd = \"\"){\r\n    value_crr = value_crr.trim()\r\n    value_brd = value_brd.toUpperCase().trim()\r\n    \r\n    if(value_brd===\"F\" && !value_crr || value_brd===\"M\" && !value_crr ){\r\n        return [{type : \"error\" , message : \"Field giới tính là F hoặc M thì field Tên buộc phải có giá trị\"}];\r\n    }\r\n}\r\n\r\nreturn checkRuleEqual(value, field);",
                        "created_date": "2019-11-29T08:21:01.677Z",
                        "last_modified": "2019-11-29T08:33:51.062Z",
                        "id": "5de0d4eddedee200147c1603"
                    },
                    "value_broadcast": "",
                    "ocr_threshold": {
                        "confidence": "-1",
                        "below": "highlight",
                        "above": "none"
                    },
                    "field_setting": {
                        "field_id": "5ea6a7837250577ca9c71858",
                        "visible": true,
                        "disable": false,
                        "dynamic_by_field": {
                            "effect": "invisible",
                            "groups": [
                                [
                                    {
                                        "value": [
                                            "N"
                                        ],
                                        "section": "Personal",
                                        "rule": "must_equal",
                                        "field": "A113"
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
                    "_id": "5ea6a7837250577ca9c7195a",
                    "name": "A119",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "A119_Ngày tháng năm sinh",
                    "is_list": false,
                    "last_modified": "2020-09-22T10:52:46.523Z",
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
                        "content": "function chkDate(date){\r\n\tvar dd = date.substring(0,2);\r\n\tvar mm = date.substring(2,4);\r\n\tvar yy = date.substring(4,6);\r\n\tvar tmpDate = new Date();\r\n\tvar y = tmpDate.getFullYear()+\"\";\r\n\ty = y.substring(2,4)*1 + 1;\r\n\r\n\t//Gan gia tri nam la 19YY neu YY > nam hien tai + 1\r\n\t//Gan gia tri nam la 20YY neu YY <= nam hien tai + 1\r\n\tif(yy*1>y){ yy = 19+yy;\r\n\t}else {yy = 20+yy;}\r\n\r\n\treturn dd+mm+yy;\t\r\n}\r\n\r\nfunction formatdate(ngay_hieu_luc_in78){\r\nvar fvalue = ngay_hieu_luc_in78;\r\n\tvar regex = /^(?:(?:31(|\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(|\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(|\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(|\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$/\r\n//\tvar regex1 = /^\\d{6}$/;\r\n\tvar regex2 = /^(\\s*|[0-9\\.\\/\\-]{0,10})$/ ;\r\n\tvar date;\r\nif(fvalue === \"\") return ;\r\n// \tif(regex1.test(fvalue))\r\n// \treturn ;\r\n\tif(regex2.test(fvalue)){\r\n\t\r\n\tif(!regex.test(fvalue)){\r\n\t\treturn [{type:\"warning\",message:\"Ngày Tháng Năm không phù hợp, vui lòng kiểm tra lại.\"}]\r\n\t}\r\n\tif(fvalue.length < 8){\r\n\t\treturn [{type:\"error\",message:\"Field ngày không đủ 8 ký tự\"}]\r\n\t}\r\n}else{\r\n    return [{type:\"error\",message:\"Không đúng định dạng ddmmyyyy\"}]\r\n}\r\nfvalue = fvalue.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'');\r\nif(fvalue.length === 6){\r\n\tfvalue = chkDate(fvalue);\r\n}\r\nvar dd = fvalue.substring(0, 2);\r\nvar mm = fvalue.substring(2, 4);\r\nvar yy = fvalue.substring(4, 8);\r\nvar tmpDate = new Date();\r\nvar d = tmpDate.getDate();\r\nvar m = tmpDate.getMonth();\r\nvar y = tmpDate.getFullYear();\r\nvar inputDate = new Date(yy, mm - 1, dd);\r\nvar curDate = new Date(y, m, d);\r\n\r\n\r\n\r\n//So sanh ngay nhap voi ngay hien tai\r\nif (inputDate > curDate) {\r\n return [{type:\"warning\", message:\"Năm nhập lớn hơn năm hiện tại\"}]\r\n}\r\n\r\n\r\n}\r\n\r\nreturn formatdate(value);",
                        "created_date": "2019-11-28T06:50:27.116Z",
                        "last_modified": "2019-11-28T06:50:27.116Z",
                        "id": "5ddf6e33dedee200147c15f7"
                    },
                    "value_broadcast": "",
                    "ocr_threshold": {
                        "confidence": "-1",
                        "below": "highlight",
                        "above": "none"
                    },
                    "field_setting": {
                        "field_id": "5ea6a7837250577ca9c7195a",
                        "visible": true,
                        "disable": false,
                        "dynamic_by_field": {
                            "effect": "invisible",
                            "groups": [
                                [
                                    {
                                        "value": [
                                            "N"
                                        ],
                                        "section": "Personal",
                                        "rule": "must_equal",
                                        "field": "A113"
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
                    "_id": "5ea6a7837250577ca9c71804",
                    "name": "A120",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "A120_Nơi Sinh",
                    "is_list": false,
                    "last_modified": "2020-09-25T02:56:42.169Z",
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
                        "param_set": "return [data.A120]",
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
                        "confidence": "-1",
                        "below": "highlight",
                        "above": "none"
                    },
                    "field_setting": {
                        "field_id": "5ea6a7837250577ca9c71804",
                        "visible": false,
                        "disable": false,
                        "dynamic_by_field": {
                            "effect": "invisible",
                            "groups": [
                                [
                                    {
                                        "value": [
                                            "N"
                                        ],
                                        "section": "Personal",
                                        "rule": "must_equal",
                                        "field": "A113"
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
                    "visible": false,
                    "disable": false,
                    "double_typing": false
                },
                {
                    "_id": "5ea6a7837250577ca9c71a51",
                    "name": "A121",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "Việt Nam",
                    "field_display": "A121_Quốc Tịch 1",
                    "is_list": false,
                    "last_modified": "2020-09-22T10:53:24.146Z",
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
                        "param_set": "return [data.A121]",
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
                    "field_setting": {
                        "field_id": "5ea6a7837250577ca9c71a51",
                        "visible": false,
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
                    "visible": false,
                    "disable": false,
                    "double_typing": false
                },
                {
                    "_id": "5ea6a7837250577ca9c718ac",
                    "name": "A122",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "A122_Quốc tịch 2 (Nếu có)",
                    "is_list": false,
                    "last_modified": "2020-09-22T10:53:36.458Z",
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
                        "param_set": "return [data.A122]",
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
                    "field_setting": {
                        "field_id": "5ea6a7837250577ca9c718ac",
                        "visible": false,
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
                    "visible": false,
                    "disable": false,
                    "double_typing": false
                },
                {
                    "_id": "5ea6a7837250577ca9c71aff",
                    "name": "A123",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "A123_Giới tính",
                    "is_list": false,
                    "last_modified": "2020-09-25T02:57:11.590Z",
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
                        "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}\n\nfunction checkEqual(value1 =\"\" , value2 = \"\",value3 = \"\"){\n    value1 = value1.toUpperCase().trim();\n    value2 = value2.toUpperCase().trim();\n    value3 = value3.toUpperCase().trim();\n    \n    if(value1 ==='F' && !value2 ||value1 ==='M' && !value2){\n        return [{type : \"error\" , message : \"Field Giới Tính có dữ liệu F/M, không được bỏ trống Ngày tháng năm sinh\"}];\n    }\n    if(value1 ==='F' && !value3 ||value1 ==='M' && !value3){\n        return [{type : \"error\" , message : \"Field Giới Tính có dữ liệu F/M, không được bỏ trống Nơi Sinh\"}];\n    }\n}\n\nreturn checkEqual(value, farm, farm1);",
                        "arguments": {
                            "farm": "A119",
                            "farm1": "A120"
                        }
                    },
                    "value_broadcast": "",
                    "ocr_threshold": {
                        "confidence": "-1",
                        "below": "highlight",
                        "above": "none"
                    },
                    "field_setting": {
                        "field_id": "5ea6a7837250577ca9c71aff",
                        "visible": false,
                        "disable": false,
                        "dynamic_by_field": {
                            "effect": "invisible",
                            "groups": [
                                [
                                    {
                                        "value": [
                                            "N"
                                        ],
                                        "section": "Personal",
                                        "rule": "must_equal",
                                        "field": "A113"
                                    }
                                ]
                            ]
                        },
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
                        "argument_details": [
                            {
                                "value": "Male"
                            },
                            {
                                "value": "Female"
                            },
                            {
                                "value": "Company"
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
                },
                {
                    "_id": "5ea6a7837250577ca9c71900",
                    "name": "A124",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "A124_Tình trạng hôn nhân",
                    "is_list": false,
                    "last_modified": "2020-09-22T10:53:55.860Z",
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
                        "content": "if(!value){\r\n    return [{type:\"error\",message:\"Không được bỏ trống\"}]\r\n}",
                        "arguments": {}
                    },
                    "value_broadcast": "",
                    "field_setting": {
                        "field_id": "5ea6a7837250577ca9c71900",
                        "visible": false,
                        "disable": false,
                        "dynamic_by_field": null,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
                        "argument_details": [
                            {
                                "value": "SINGLE"
                            },
                            {
                                "value": "MARRIED"
                            },
                            {
                                "value": "WIDOWED"
                            },
                            {
                                "value": "DIVORCED"
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
                    "visible": false,
                    "disable": false,
                    "double_typing": false
                },
                {
                    "_id": "5ea6a7837250577ca9c71a01",
                    "name": "A125",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [
                        "CMND",
                        "Passport",
                        "CCCD",
                        "Giấy Khai Sinh"
                    ],
                    "control_type": "COMBOBOX",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "A125_Loại Giấy Tờ",
                    "is_list": false,
                    "last_modified": "2020-09-22T10:54:04.104Z",
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
                        "content": "if(!value){\n    return [{type : \"error\", message: \"Vui lòng chọn loại giấy tờ\"}]\n}",
                        "arguments": {}
                    },
                    "value_broadcast": "",
                    "field_setting": {
                        "field_id": "5ea6a7837250577ca9c71a01",
                        "visible": false,
                        "disable": false,
                        "dynamic_by_field": null,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
                        "argument_details": [
                            {
                                "value": "CMND"
                            },
                            {
                                "value": "Passport"
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
                },
                {
                    "_id": "5ea6a7837250577ca9c719af",
                    "name": "A126",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "A126_Số giấy tờ tùy thân",
                    "is_list": false,
                    "last_modified": "2020-09-22T10:54:14.363Z",
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
                            "given": "A125"
                        },
                        "content": "function checkCharacter(value) {\r\n\r\n    if(!value){\r\n        return false;\r\n    }else{\r\n        return true;\r\n    }\r\n  }\r\nfunction checkEqualGiven(surname_value =\"\" , given_value = \"\"){\r\n      surname_value = surname_value.trim()\r\n      given_value = given_value.trim()\r\n      var regex1 = /^[0-9]{9}$/;\r\n      var regex2 = /^[0-9]{12}$/;\r\n      var regex3 = /^[A-Z0-9]{8,9}$/;\r\n\r\n      if(!regex1.test(surname_value) && given_value === \"CMND\"){\r\n          return [{type : \"error\" , message : \"CMND chỉ nhập 9 số\"}];\r\n      }else\r\n      if(!regex2.test(surname_value) && given_value === \"CCCD\"){\r\n          return [{type : \"error\" , message : \"CCCD chỉ nhập 12 số\"}];\r\n      }else\r\n      if(!regex3.test(surname_value) && given_value === \"Passport\"){\r\n          return [{type : \"error\" , message : \"Passport chỉ nhập chữ in và 8 hoặc 9 số\"}];\r\n      }\r\n     \r\n     return;\r\n  }\r\n  \r\nfunction checkError(value){\r\n      if(checkCharacter(value) === true){\r\n          \r\n             return checkEqualGiven(value, given);\r\n              \r\n      }else{\r\n          return [{type : \"error\" , message : \"Không có số giấy tờ tùy thân\"}];\r\n      }\r\n  }\r\n  \r\nreturn checkError(value);",
                        "created_date": "2019-11-28T06:46:23.478Z",
                        "last_modified": "2019-11-29T08:25:58.570Z",
                        "id": "5ddf6d3fdedee200147c15f6"
                    },
                    "value_broadcast": "",
                    "ocr_threshold": {
                        "confidence": "-1",
                        "below": "highlight",
                        "above": "none"
                    },
                    "field_setting": {
                        "field_id": "5ea6a7837250577ca9c719af",
                        "visible": true,
                        "disable": false,
                        "dynamic_by_field": {
                            "effect": "invisible",
                            "groups": [
                                [
                                    {
                                        "value": [
                                            "N"
                                        ],
                                        "section": "Personal",
                                        "rule": "must_equal",
                                        "field": "A113"
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
                    "_id": "5ea6a7837250577ca9c7185a",
                    "name": "A127",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "A127_Ngày cấp",
                    "is_list": false,
                    "last_modified": "2020-09-22T10:54:23.922Z",
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
                        "arguments": {
                            "farm": "A119"
                        },
                        "content": "function checkEqual(value1 =\"\" , value2 = \"\"){\n    value1 = value1.trim().toUpperCase()\n    value2 = value2.trim().toUpperCase()\n    \n    if(value1 === value2){\n        return true;\n    }\n}\n\n\n\nfunction chkDate(date){\n\tvar dd = date.substring(0,2);\n\tvar mm = date.substring(2,4);\n\tvar yy = date.substring(4,6);\n\tvar tmpDate = new Date();\n\tvar y = tmpDate.getFullYear()+\"\";\n\ty = y.substring(2,4)*1 + 1;\n\n\t//Gan gia tri nam la 19YY neu YY > nam hien tai + 1\n\t//Gan gia tri nam la 20YY neu YY <= nam hien tai + 1\n\tif(yy*1>y){ yy = 19+yy;\n\t}else {yy = 20+yy;}\n\n\treturn dd+mm+yy;\t\n}\n\nfunction formatdate(ngay_hieu_luc_in78){\nvar fvalue = ngay_hieu_luc_in78;\n\tvar regex = /^(?:(?:31(|\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(|\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(|\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(|\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$/\n//\tvar regex1 = /^\\d{6}$/;\n\tvar regex2 = /^(\\s*|[0-9\\.\\/\\-]{0,10})$/ ;\n\tvar date;\nif(fvalue === \"\") return ;\n// \tif(regex1.test(fvalue))\n// \treturn ;\n\tif(regex2.test(fvalue)){\n\t\n\tif(!regex.test(fvalue)){\n\t\treturn [{type:\"warning\",message:\"Ngày Tháng Năm không phù hợp, vui lòng kiểm tra lại.\"}]\n\t}\n\tif(fvalue.length < 8){\n\t\treturn [{type:\"error\",message:\"Field ngày không đủ 8 ký tự\"}]\n\t}\n}else{\n    return [{type:\"error\",message:\"Không đúng định dạng ddmmyyyy\"}]\n}\nfvalue = fvalue.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'');\nif(fvalue.length === 6){\n\tfvalue = chkDate(fvalue);\n}\nvar dd = fvalue.substring(0, 2);\nvar mm = fvalue.substring(2, 4);\nvar yy = fvalue.substring(4, 8);\nvar tmpDate = new Date();\nvar d = tmpDate.getDate();\nvar m = tmpDate.getMonth();\nvar y = tmpDate.getFullYear();\nvar inputDate = new Date(yy, mm - 1, dd);\nvar curDate = new Date(y, m, d);\n\n\n\n//So sanh ngay nhap voi ngay hien tai\nif (inputDate > curDate) {\n return [{type:\"warning\", message:\"Năm nhập lớn hơn năm hiện tại\"}]\n}\n\n}\n\nfunction checkError(value) {\n    if (checkEqual(value, farm) === true) {\n        return [{type : \"error\" , message : \"A119_Ngày tháng năm sinh giống A127_Ngày cấp \"}];\n    } else {\n        return formatdate(value);\n    }\n}\n\nreturn checkError(value);",
                        "created_date": "2019-11-28T06:50:27.116Z",
                        "last_modified": "2019-11-28T06:50:27.116Z",
                        "id": "5ddf6e33dedee200147c15f7"
                    },
                    "value_broadcast": "",
                    "field_setting": {
                        "field_id": "5ea6a7837250577ca9c7185a",
                        "visible": false,
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
                    "visible": false,
                    "disable": false,
                    "double_typing": false
                },
                {
                    "_id": "5ea6a7837250577ca9c719c1",
                    "name": "A32",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "N",
                    "field_display": "A32_Khai báo FATCA",
                    "is_list": false,
                    "last_modified": "2020-09-22T10:54:42.446Z",
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
                        "field_id": "5ea6a7837250577ca9c719c1",
                        "visible": false,
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
                    "visible": false,
                    "disable": false,
                    "double_typing": false
                },
                {
                    "_id": "5ea6a7837250577ca9c7186c",
                    "name": "A33",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "A33_MST HOA KỲ(TIN)",
                    "is_list": false,
                    "last_modified": "2020-09-22T10:54:59.985Z",
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
                        "content": "if(value.length > 9){\n    return [{type: \"error\",\n        message :\"Không được nhập quá 9 ký tự.\"\n    }]\n}",
                        "arguments": {}
                    },
                    "value_broadcast": "",
                    "field_setting": {
                        "field_id": "5ea6a7837250577ca9c7186c",
                        "visible": false,
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
                    "visible": false,
                    "disable": false,
                    "double_typing": false
                },
                {
                    "_id": "5ea6a7837250577ca9c7196e",
                    "name": "A34",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "A34_BMBH là tổ chức, nếu có nộp form W8BEN",
                    "is_list": false,
                    "last_modified": "2020-09-22T10:55:11.322Z",
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
                        "field_id": "5ea6a7837250577ca9c7196e",
                        "visible": false,
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
                    "visible": false,
                    "disable": false,
                    "double_typing": false
                },
                {
                    "_id": "5ea6a7837250577ca9c71a67",
                    "name": "A37",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [
                        "01",
                        "03",
                        "06",
                        "12"
                    ],
                    "control_type": "COMBOBOX",
                    "counted_character": true,
                    "default_value": "12",
                    "field_display": "A37_Định kì đóng phí_PO",
                    "is_list": false,
                    "last_modified": "2020-09-22T10:55:38.246Z",
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
                        "content": "if(!value){\n    return [{type : \"error\" , message : \"Field đang trống, vui lòng kiểm tra lại trước khi save\"}];\n}",
                        "arguments": {}
                    },
                    "value_broadcast": "",
                    "field_setting": {
                        "field_id": "5ea6a7837250577ca9c71a67",
                        "visible": false,
                        "disable": false,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
                        "argument_details": [
                            {
                                "value": "01"
                            },
                            {
                                "value": "03"
                            },
                            {
                                "value": "06"
                            },
                            {
                                "value": "12"
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
                },
                {
                    "_id": "5ea6a7837250577ca9c7186e",
                    "name": "A43",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "A43_Tên tổ chức thụ hưởng",
                    "is_list": false,
                    "last_modified": "2020-09-22T10:55:51.823Z",
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
                        "field_id": "5ea6a7837250577ca9c7186e",
                        "visible": false,
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
                    "visible": false,
                    "disable": false,
                    "double_typing": false
                },
                {
                    "_id": "5ea6a7837250577ca9c71970",
                    "name": "A44",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "A44_Tỷ lệ thụ hưởng tổ chức",
                    "is_list": false,
                    "last_modified": "2020-09-22T10:56:11.161Z",
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
                        "content": "^(\\s|[0-9]{0,3})$",
                        "description": "Không được nhập quá 3 ký tự số"
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
                        "arguments": {
                            "field": "A41"
                        },
                        "content": "function checkSumPlus(value_crr =\"\" , value_brd = \"\"){\n    value_crr = parseInt(value_crr.trim()) || 0\n    value_brd = parseInt(value_brd.trim()) || 0\n    sum = value_crr + value_brd\n    if(sum > 100 ){\n       return [{type : \"error\" , message : \"Tổng Tỷ lệ thụ hưởng ben và Tỷ lệ thụ hưởng tổ chức không được lớn hơn 100\"}];\n    }\n}\n\nreturn checkSumPlus(value, field);",
                        "created_date": "2019-11-29T08:49:07.590Z",
                        "last_modified": "2019-11-29T08:49:07.590Z",
                        "id": "5de0db83dedee200147c1611"
                    },
                    "value_broadcast": "",
                    "field_setting": {
                        "field_id": "5ea6a7837250577ca9c71970",
                        "visible": false,
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
                    "visible": false,
                    "disable": false,
                    "double_typing": false
                }
            ],
            "id": "5f192dc0ef3a4d001b598dff"
        },
        {
            "layout_labels": null,
            "name": "Ben",
            "layout_name": "Personal2",
            "index": 1,
            "layout_id": "5f192dc0ef3a4d001b598dfd",
            "is_multiple": true,
            "position": {},
            "settings": {
                "is_multiple": true,
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
                    "_id": "5ea6a7837250577ca9c71b13",
                    "name": "A39",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "A39_Họ và tên_ben",
                    "is_list": false,
                    "last_modified": "2020-09-22T10:56:20.913Z",
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
                        "name": "Name_transform",
                        "arguments": {},
                        "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nfunction transformGivenSurname(field_value) {\r\n  field_value = field_value.trim();\r\n  var fullString = '';\r\n  var arr_char = ['ß'];\r\n  if(field_value.includes(' ')){\r\n  \tvar arr = field_value.split(' ');\r\n    for(var i = 0 ; i < arr.length; i++){\r\n    \tvar strChild = arr[i];\r\n        if(strChild === strChild.toLowerCase() || strChild === strChild.toUpperCase()){\r\n \t       \tif(arr_char.includes(strChild.substring(0,1))){\r\n\t\t\t\tstrChild = strChild.substring(0,1) + strChild.substring(1,strChild.length).toLowerCase();\r\n          \t\tfullString += strChild + ' ';\r\n\t\t\t}else{\r\n           \t\tstrChild = strChild.substring(0,1).toUpperCase() + strChild.substring(1,strChild.length).toLowerCase();\r\n          \t\tfullString += strChild + ' ';\r\n            }\r\n          \r\n        }else{\r\n            strChild = strChild.substring(0,1).toUpperCase() + strChild.substring(1,strChild.length).toLowerCase();\r\n            fullString += strChild + ' ';\r\n        }\r\n    }\r\n  }else{\r\n  \tif(field_value === field_value.toLowerCase() || field_value === field_value.toUpperCase()){\r\n    \tif(arr_char.includes(field_value.substring(0,1))){\r\n\t\t\tfield_value = field_value.substring(0,1) + field_value.substring(1,field_value.length).toLowerCase();\r\n     \t\tfullString = field_value;\r\n\t\t}else{\r\n        \tfield_value = field_value.substring(0,1).toUpperCase() + field_value.substring(1,field_value.length).toLowerCase();\r\n      \t\tfullString = field_value;\r\n\t\t}\r\n      \r\n    }else{\r\n        field_value = field_value.substring(0,1).toUpperCase() + field_value.substring(1,field_value.length).toLowerCase();\r\n        fullString = field_value;\r\n    }\r\n  }\r\n  return fullString.trim();\r\n}\r\nreturn transformGivenSurname(removeSpace(value));",
                        "created_date": "2019-11-29T09:40:49.056Z",
                        "last_modified": "2019-11-29T09:45:36.834Z",
                        "id": "5de0e7a1dedee200147c1612"
                    },
                    "tooltip": "",
                    "validation": {
                        "name": "Text Tiếng Việt",
                        "arguments": {},
                        "content": "var regex1 = /[^\\sA-Za-zsáàảãạâăắằẳẵặặấầẩẫậéèẻẽẹêếềểễệíìỉĩịóòỏõọôơốồổỗộớờởỡợúùủũụưứừửữựýỳỷỹỵđÁÀẢÃẠÂĂẮẰẲẴẶẶẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔƠỐỒỔỖỘỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴĐ]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập chữ \"}]\r\n}\r\n",
                        "created_date": "2019-11-29T08:21:01.677Z",
                        "last_modified": "2019-11-29T08:33:51.062Z",
                        "id": "5de0d4eddedee200147c1603"
                    },
                    "value_broadcast": "",
                    "ocr_threshold": {
                        "confidence": "-1",
                        "below": "highlight",
                        "above": "none"
                    },
                    "field_setting": {
                        "field_id": "5ea6a7837250577ca9c71b13",
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
                    "_id": "5ea6a7837250577ca9c71915",
                    "name": "A40",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "A40_Ngày sinh_ben",
                    "is_list": false,
                    "last_modified": "2020-09-22T10:56:30.499Z",
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
                        "arguments": {
                            "farm": "A39"
                        },
                        "content": "// console.log(arguments,'check validation');\r\nlet farmCurrent = farm;\r\n// try {\r\nfarmCurrent =section[rowId].A39&&section[rowId].A39.text\r\n\r\n// } catch (e) {\r\n    \r\n    // console.log(e,'loi')\r\n    \r\n// }\r\n// console.log(farmCurrent,'farmCurrent');\r\nfunction checkEqual(free_city_value =\"\" , city_value = \"\"){\r\n    free_city_value = free_city_value.trim()\r\n    city_value = city_value.trim()\r\n    \r\n    if(!free_city_value&&!!city_value){\r\n        return [{type : \"error\" , message : \"Field Họ và tên_ben có dữ liệu, không được bỏ trống Field\"}];\r\n    }\r\n      if(!!free_city_value&&!city_value){\r\n        return [{type : \"warning\" , message : \"Field Họ và tên_ben đang trống, vui lòng kiểm tra lại\"}];\r\n    }\r\n}\r\n\r\n\r\nfunction chkDate(date){\r\n\tvar dd = date.substring(0,2);\r\n\tvar mm = date.substring(2,4);\r\n\tvar yy = date.substring(4,6);\r\n\tvar tmpDate = new Date();\r\n\tvar y = tmpDate.getFullYear()+\"\";\r\n\ty = y.substring(2,4)*1 + 1;\r\n\r\n\t//Gan gia tri nam la 19YY neu YY > nam hien tai + 1\r\n\t//Gan gia tri nam la 20YY neu YY <= nam hien tai + 1\r\n\tif(yy*1>y){ yy = 19+yy;\r\n\t}else {yy = 20+yy;}\r\n\r\n\treturn dd+mm+yy;\t\r\n}\r\n\r\nfunction formatdate(ngay_hieu_luc_in78){\r\nvar fvalue = ngay_hieu_luc_in78;\r\n\tvar regex = /^(?:(?:31(|\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(|\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(|\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(|\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$/\r\n//\tvar regex1 = /^\\d{6}$/;\r\n\tvar regex2 = /^(\\s*|[0-9\\.\\/\\-]{0,10})$/ ;\r\n\tvar date;\r\nif(fvalue === \"\") return ;\r\n// \tif(regex1.test(fvalue))\r\n// \treturn ;\r\n\tif(regex2.test(fvalue)){\r\n\t\r\n\tif(!regex.test(fvalue)){\r\n\t\treturn [{type:\"warning\",message:\"Ngày Tháng Năm không phù hợp, vui lòng kiểm tra lại.\"}]\r\n\t}\r\n\tif(fvalue.length < 8){\r\n\t\treturn [{type:\"error\",message:\"Field ngày không đủ 8 ký tự\"}]\r\n\t}\r\n}else{\r\n    return [{type:\"error\",message:\"Không đúng định dạng ddmmyyyy\"}]\r\n}\r\nfvalue = fvalue.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'');\r\nif(fvalue.length === 6){\r\n\tfvalue = chkDate(fvalue);\r\n}\r\nvar dd = fvalue.substring(0, 2);\r\nvar mm = fvalue.substring(2, 4);\r\nvar yy = fvalue.substring(4, 8);\r\nvar tmpDate = new Date();\r\nvar d = tmpDate.getDate();\r\nvar m = tmpDate.getMonth();\r\nvar y = tmpDate.getFullYear();\r\nvar inputDate = new Date(yy, mm - 1, dd);\r\nvar curDate = new Date(y, m, d);\r\n\r\n\r\n\r\n//So sanh ngay nhap voi ngay hien tai\r\nif (inputDate > curDate) {\r\n return [{type:\"warning\", message:\"Năm nhập lớn hơn năm hiện tại\"}]\r\n}\r\n\r\n\r\n}\r\n\r\n\r\nif(!value){\r\n    return checkEqual(value, farmCurrent);\r\n}else {\r\n    \r\n    return formatdate(value);\r\n    \r\n}",
                        "created_date": "2019-11-28T06:50:27.116Z",
                        "last_modified": "2019-11-28T06:50:27.116Z",
                        "id": "5ddf6e33dedee200147c15f7"
                    },
                    "value_broadcast": "",
                    "ocr_threshold": {
                        "confidence": "-1",
                        "below": "highlight",
                        "above": "none"
                    },
                    "field_setting": {
                        "field_id": "5ea6a7837250577ca9c71915",
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
                    "_id": "5ea6a7837250577ca9c71a15",
                    "name": "A41",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "A41_Tỷ lệ thụ hưởng_ben",
                    "is_list": false,
                    "last_modified": "2020-09-22T10:56:39.393Z",
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
                        "content": "^(\\s|[0-9]{0,3})$",
                        "description": "Không được nhập quá 3 ký tự số."
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
                        "content": "function checkSumPlus(value_crr =\"\"){\n    value_crr = parseInt(value_crr.trim()) || 0;\n\n\n    if(value_crr > 100 ){\n       return [{type : \"error\" , message : \"Tổng Tỷ lệ thụ hưởng ben và Tỷ lệ thụ hưởng tổ chức không được lớn hơn 100\"}];\n    }\n}\n\nlet farmCurrent = farm;\n// try {\nfarmCurrent =section[rowId].A39&&section[rowId].A39.text\n\n// } catch (e) {\n    \n    // console.log(e,'loi')\n    \n// }\n// console.log(farmCurrent,'farmCurrent');\nfunction checkEqual(free_city_value =\"\" , city_value = \"\"){\n    free_city_value = free_city_value.trim()\n    city_value = city_value.trim()\n    \n    if(!free_city_value&&!!city_value){\n        return [{type : \"error\" , message : \"Field Họ và tên_ben có dữ liệu, không được bỏ trống Field\"}];\n    }\n      if(!!free_city_value&&!city_value){\n        return [{type : \"warning\" , message : \"Field Họ và tên_ben đang trống, vui lòng kiểm tra lại\"}];\n    }\n}\n\n\nif(!value){\n    return checkEqual(value, farmCurrent);\n}else {\n    \n\nreturn checkSumPlus(value);\n    \n}\n",
                        "arguments": {
                            "farm": "A39"
                        }
                    },
                    "value_broadcast": "",
                    "ocr_threshold": {
                        "confidence": "-1",
                        "below": "highlight",
                        "above": "none"
                    },
                    "field_setting": {
                        "field_id": "5ea6a7837250577ca9c71a15",
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
                    "_id": "5ea6a7837250577ca9c719c3",
                    "name": "A42",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "A42_Mối quan hệ với NĐBH",
                    "is_list": false,
                    "last_modified": "2020-09-22T10:56:48.719Z",
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
                        "param_set": "return [\"Beneficiary' s Relation to Insured\",data.A42]",
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
                        "content": "\r\n    async function checkValidation(value) {\r\n             let params = `[\"Beneficiary' s Relation to Insured\",\"${encodeURIComponent(value)}\"]`\r\n            let dataLookup =  await fetchJSON(`https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/relationship/${params}`);\r\n            let _value =value.toLowerCase(); \r\n            if (!Array.isArray(dataLookup.json_single)||dataLookup.json_single.map(item => item.english.toLowerCase()).findIndex(item => item === _value) === -1) {\r\n                            return [{\r\n                              type: \"error\",\r\n                              message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                            }]\r\n                         }\r\n            // if(value.toLowerCase().includes('nhhien'))             \r\n            //              return[{ \r\n            //                   type: 'warning',\r\n            //                   message: `Lookup warning value:${value}`}];\r\n    }\r\n\r\n\r\n    \r\n// console.log(arguments,'check validation');\r\nlet farmCurrent = farm;\r\n// try {\r\nfarmCurrent =section[rowId].A39&&section[rowId].A39.text\r\n\r\n// } catch (e) {\r\n    \r\n    // console.log(e,'loi')\r\n    \r\n// }\r\n// console.log(farmCurrent,'farmCurrent');\r\nfunction checkEqual(free_city_value =\"\" , city_value = \"\"){\r\n    free_city_value = free_city_value.trim()\r\n    city_value = city_value.trim()\r\n    \r\n    if(!free_city_value&&!!city_value){\r\n        return [{type : \"error\" , message : \"Field Họ và tên_ben có dữ liệu, không được bỏ trống Field\"}];\r\n    }\r\n      if(!!free_city_value&&!city_value){\r\n        return [{type : \"warning\" , message : \"Field Họ và tên_ben đang trống, vui lòng kiểm tra lại\"}];\r\n    }\r\n}\r\n\r\nif(!value){\r\n    return checkEqual(value, farmCurrent);\r\n}else {\r\n    \r\n    return await checkValidation(value);\r\n    \r\n}",
                        "arguments": {
                            "farm": "A39"
                        }
                    },
                    "value_broadcast": "",
                    "ocr_threshold": {
                        "confidence": "-1",
                        "below": "highlight",
                        "above": "none"
                    },
                    "field_setting": {
                        "field_id": "5ea6a7837250577ca9c719c3",
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
                    "_id": "5ea6a7837250577ca9c71a1f",
                    "name": "A607",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [
                        "D",
                        "P"
                    ],
                    "control_type": "COMBOBOX",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "A607_Loại Ben",
                    "is_list": false,
                    "last_modified": "2020-09-25T02:57:34.916Z",
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
                        "name": "Loại Ben",
                        "content": "// console.log(arguments,'check validation');\r\nlet farmCurrent = farm;\r\n// try {\r\nfarmCurrent =section[rowId].A39&&section[rowId].A39.text\r\n\r\n// } catch (e) {\r\n    \r\n    // console.log(e,'loi')\r\n    \r\n// }\r\n// console.log(farmCurrent,'farmCurrent');\r\nfunction checkEqual(free_city_value =\"\" , city_value = \"\"){\r\n    free_city_value = free_city_value.trim()\r\n    city_value = city_value.trim()\r\n    \r\n    if(!free_city_value&&!!city_value){\r\n        return [{type : \"error\" , message : \"Field Họ và tên_ben có dữ liệu, không được bỏ trống Loại Ben\"}];\r\n    }\r\n      if(!!free_city_value&&!city_value){\r\n        return [{type : \"warning\" , message : \"Field Họ và tên_ben đang trống, vui lòng kiểm tra lại\"}];\r\n    }\r\n}\r\n\r\nreturn checkEqual(value, farmCurrent);",
                        "arguments": {
                            "farm": "A39"
                        }
                    },
                    "value_broadcast": "",
                    "ocr_threshold": {
                        "confidence": "-1",
                        "below": "highlight",
                        "above": "none"
                    },
                    "field_setting": {
                        "field_id": "5ea6a7837250577ca9c71a1f",
                        "visible": true,
                        "disable": false,
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
                        "argument_details": [
                            {
                                "value": "D"
                            },
                            {
                                "value": "P"
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
            "id": "5f192dc0ef3a4d001b598dfe"
        },
        {
            "layout_labels": null,
            "name": "Personal1",
            "layout_name": "Personal2",
            "index": 2,
            "layout_id": "5f192dc0ef3a4d001b598dfd",
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
                    "_id": "5ea6a7837250577ca9c71a17",
                    "name": "A500",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "A500_US TIN",
                    "is_list": false,
                    "last_modified": "2020-09-23T09:15:24.902Z",
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
                        "field_id": "5ea6a7837250577ca9c71a17",
                        "visible": false,
                        "disable": false,
                        "dynamic_by_field": {
                            "effect": "visible",
                            "groups": [
                                [
                                    {
                                        "value": "United States",
                                        "section": "Personal",
                                        "rule": "must_equal",
                                        "field": "A08"
                                    }
                                ],
                                [
                                    {
                                        "value": "United States",
                                        "section": "Personal",
                                        "rule": "must_equal",
                                        "field": "A09"
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
                    "visible": false,
                    "disable": false,
                    "double_typing": false
                },
                {
                    "_id": "5ea6a7837250577ca9c719c6",
                    "name": "A501",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [
                        "W8",
                        "W9",
                        "W8E"
                    ],
                    "control_type": "COMBOBOX",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "A501_Type IRS Form",
                    "is_list": false,
                    "last_modified": "2020-09-22T10:57:13.104Z",
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
                        "field_id": "5ea6a7837250577ca9c719c6",
                        "visible": false,
                        "disable": false,
                        "dynamic_by_field": {
                            "effect": "visible",
                            "groups": [
                                [
                                    {
                                        "value": "United States",
                                        "section": "Personal",
                                        "rule": "must_equal",
                                        "field": "A08"
                                    }
                                ],
                                [
                                    {
                                        "value": "United States",
                                        "section": "Personal",
                                        "rule": "must_equal",
                                        "field": "A09"
                                    }
                                ]
                            ]
                        },
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
                        "argument_details": [
                            {
                                "value": "W8E"
                            },
                            {
                                "value": "W9"
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
                },
                {
                    "_id": "5ea6a7837250577ca9c71870",
                    "name": "A502",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [
                        "Complete",
                        "Incomplete"
                    ],
                    "control_type": "COMBOBOX",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "A502_IRS Form Status",
                    "is_list": false,
                    "last_modified": "2020-09-22T10:57:22.608Z",
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
                        "field_id": "5ea6a7837250577ca9c71870",
                        "visible": false,
                        "disable": false,
                        "dynamic_by_field": {
                            "effect": "visible",
                            "groups": [
                                [
                                    {
                                        "value": "United States",
                                        "section": "Personal",
                                        "rule": "must_equal",
                                        "field": "A08"
                                    }
                                ],
                                [
                                    {
                                        "value": "United States",
                                        "section": "Personal",
                                        "rule": "must_equal",
                                        "field": "A09"
                                    }
                                ]
                            ]
                        },
                        "switch_disable": false,
                        "double_typing": false,
                        "disable_auto_fill_ocr": false,
                        "argument_details": [
                            {
                                "value": "Complete"
                            },
                            {
                                "value": "Incomplete"
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
                },
                {
                    "_id": "5ea6a7837250577ca9c71972",
                    "name": "A503",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "A503_Date of IRS Form",
                    "is_list": false,
                    "last_modified": "2020-09-22T10:57:30.639Z",
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
                        "field_id": "5ea6a7837250577ca9c71972",
                        "visible": false,
                        "disable": false,
                        "dynamic_by_field": {
                            "effect": "visible",
                            "groups": [
                                [
                                    {
                                        "value": "United States",
                                        "section": "Personal",
                                        "rule": "must_equal",
                                        "field": "A08"
                                    }
                                ],
                                [
                                    {
                                        "value": "United States",
                                        "section": "Personal",
                                        "rule": "must_equal",
                                        "field": "A09"
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
                    "visible": false,
                    "disable": false,
                    "double_typing": false
                },
                {
                    "_id": "5ea6a7837250577ca9c718c2",
                    "name": "A48",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [
                        "Y",
                        "N"
                    ],
                    "control_type": "COMBOBOX",
                    "counted_character": true,
                    "default_value": "N",
                    "field_display": "A48_Hợp đồng BH hiệu lực_PO",
                    "is_list": false,
                    "last_modified": "2020-09-22T10:58:06.818Z",
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
                        "field_id": "5ea6a7837250577ca9c718c2",
                        "visible": false,
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
                    "visible": false,
                    "disable": false,
                    "double_typing": false
                },
                {
                    "_id": "5ea6a7837250577ca9c71b15",
                    "name": "A49",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "A49_Công ty bảo hiểm_PO",
                    "is_list": false,
                    "last_modified": "2020-09-22T10:58:24.239Z",
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
                    "field_setting": {
                        "field_id": "5ea6a7837250577ca9c71b15",
                        "visible": false,
                        "disable": false,
                        "dynamic_by_field": {
                            "effect": "visible",
                            "groups": [
                                [
                                    {
                                        "value": [
                                            "Y"
                                        ],
                                        "section": "Personal1",
                                        "rule": "must_equal",
                                        "field": "A48"
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
                    "visible": false,
                    "disable": false,
                    "double_typing": false
                },
                {
                    "_id": "5ea6a7837250577ca9c71916",
                    "name": "A50",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "A50_Tên SP bảo hiểm_PO",
                    "is_list": false,
                    "last_modified": "2020-09-22T10:58:35.771Z",
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
                        "field_id": "5ea6a7837250577ca9c71916",
                        "visible": false,
                        "disable": false,
                        "dynamic_by_field": {
                            "effect": "visible",
                            "groups": [
                                [
                                    {
                                        "value": [
                                            "Y"
                                        ],
                                        "section": "Personal1",
                                        "rule": "must_equal",
                                        "field": "A48"
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
                    "visible": false,
                    "disable": false,
                    "double_typing": false
                },
                {
                    "_id": "5ea6a7837250577ca9c719c7",
                    "name": "A51",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "A51_Tổng số tiền bảo hiểm_PO",
                    "is_list": false,
                    "last_modified": "2020-09-22T10:58:45.113Z",
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
                        "name": "",
                        "content": "var regex1 = /[^\\s0-9.+]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n",
                        "arguments": {}
                    },
                    "value_broadcast": "",
                    "field_setting": {
                        "field_id": "5ea6a7837250577ca9c719c7",
                        "visible": false,
                        "disable": false,
                        "dynamic_by_field": {
                            "effect": "visible",
                            "groups": [
                                [
                                    {
                                        "value": [
                                            "Y"
                                        ],
                                        "section": "Personal1",
                                        "rule": "must_equal",
                                        "field": "A48"
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
                    "visible": false,
                    "disable": false,
                    "double_typing": false
                },
                {
                    "_id": "5ea6a7837250577ca9c71976",
                    "name": "A52",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "A52_Năm phát hành HĐ_PO",
                    "is_list": false,
                    "last_modified": "2020-09-22T10:58:55.389Z",
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
                        "field_id": "5ea6a7837250577ca9c71976",
                        "visible": false,
                        "disable": false,
                        "dynamic_by_field": {
                            "effect": "visible",
                            "groups": [
                                [
                                    {
                                        "value": [
                                            "Y"
                                        ],
                                        "section": "Personal1",
                                        "rule": "must_equal",
                                        "field": "A48"
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
                    "visible": false,
                    "disable": false,
                    "double_typing": false
                },
                {
                    "_id": "5ea6a7837250577ca9c71820",
                    "name": "A53",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "A53_Tình trạng HĐ_PO",
                    "is_list": false,
                    "last_modified": "2020-09-22T10:59:04.354Z",
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
                        "field_id": "5ea6a7837250577ca9c71820",
                        "visible": false,
                        "disable": false,
                        "dynamic_by_field": {
                            "effect": "visible",
                            "groups": [
                                [
                                    {
                                        "value": [
                                            "Y"
                                        ],
                                        "section": "Personal1",
                                        "rule": "must_equal",
                                        "field": "A48"
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
                    "visible": false,
                    "disable": false,
                    "double_typing": false
                },
                {
                    "_id": "5ea6a7837250577ca9c7191e",
                    "name": "A606",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [
                        "Y",
                        "N"
                    ],
                    "control_type": "COMBOBOX",
                    "counted_character": true,
                    "default_value": "N",
                    "field_display": "A606_Hợp đồng BH hiệu lực_LI",
                    "is_list": false,
                    "last_modified": "2020-09-22T10:59:24.016Z",
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
                        "field_id": "5ea6a7837250577ca9c7191e",
                        "visible": false,
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
                    "visible": false,
                    "disable": false,
                    "double_typing": false
                },
                {
                    "_id": "5ea6a7837250577ca9c71978",
                    "name": "A600",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "A600_Công ty bảo hiểm_LI",
                    "is_list": false,
                    "last_modified": "2020-09-22T10:59:39.314Z",
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
                        "field_id": "5ea6a7837250577ca9c71978",
                        "visible": false,
                        "disable": false,
                        "dynamic_by_field": {
                            "effect": "visible",
                            "groups": [
                                [
                                    {
                                        "value": [
                                            "Y"
                                        ],
                                        "section": "Personal1",
                                        "rule": "must_equal",
                                        "field": "A606"
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
                    "visible": false,
                    "disable": false,
                    "double_typing": false
                },
                {
                    "_id": "5ea6a7837250577ca9c71a6d",
                    "name": "A513",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "A513_Tên SP bảo hiểm_LI",
                    "is_list": false,
                    "last_modified": "2020-09-22T10:59:49.563Z",
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
                        "field_id": "5ea6a7837250577ca9c71a6d",
                        "visible": false,
                        "disable": false,
                        "dynamic_by_field": {
                            "effect": "visible",
                            "groups": [
                                [
                                    {
                                        "value": [
                                            "Y"
                                        ],
                                        "section": "Personal1",
                                        "rule": "must_equal",
                                        "field": "A606"
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
                    "visible": false,
                    "disable": false,
                    "double_typing": false
                },
                {
                    "_id": "5ea6a7837250577ca9c718c6",
                    "name": "A514",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "A514_Tổng số tiền bảo hiểm_LI",
                    "is_list": false,
                    "last_modified": "2020-09-22T11:00:18.309Z",
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
                        "name": "",
                        "content": "var regex1 = /[^\\s0-9.+]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n",
                        "arguments": {}
                    },
                    "value_broadcast": "",
                    "field_setting": {
                        "field_id": "5ea6a7837250577ca9c718c6",
                        "visible": false,
                        "disable": false,
                        "dynamic_by_field": {
                            "effect": "visible",
                            "groups": [
                                [
                                    {
                                        "value": [
                                            "Y"
                                        ],
                                        "section": "Personal1",
                                        "rule": "must_equal",
                                        "field": "A606"
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
                    "visible": false,
                    "disable": false,
                    "double_typing": false
                },
                {
                    "_id": "5ea6a7837250577ca9c71b19",
                    "name": "A515",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "A515_Năm phát hành HĐ_LI",
                    "is_list": false,
                    "last_modified": "2020-09-22T11:00:31.396Z",
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
                        "field_id": "5ea6a7837250577ca9c71b19",
                        "visible": false,
                        "disable": false,
                        "dynamic_by_field": {
                            "effect": "visible",
                            "groups": [
                                [
                                    {
                                        "value": [
                                            "Y"
                                        ],
                                        "section": "Personal1",
                                        "rule": "must_equal",
                                        "field": "A606"
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
                    "visible": false,
                    "disable": false,
                    "double_typing": false
                },
                {
                    "_id": "5ea6a7837250577ca9c7191a",
                    "name": "A516",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "A516_Tình trạng HĐ_LI",
                    "is_list": false,
                    "last_modified": "2020-09-22T11:00:39.455Z",
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
                        "field_id": "5ea6a7837250577ca9c7191a",
                        "visible": false,
                        "disable": false,
                        "dynamic_by_field": {
                            "effect": "visible",
                            "groups": [
                                [
                                    {
                                        "value": [
                                            "Y"
                                        ],
                                        "section": "Personal1",
                                        "rule": "must_equal",
                                        "field": "A606"
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
                    "visible": false,
                    "disable": false,
                    "double_typing": false
                },
                {
                    "_id": "5ea6a7837250577ca9c7192f",
                    "name": "O41",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [
                        "Y",
                        "N"
                    ],
                    "control_type": "COMBOBOX",
                    "counted_character": true,
                    "default_value": "N",
                    "field_display": "O41_Bên thứ ba/ chủ sở hữu hưởng lợi",
                    "is_list": false,
                    "last_modified": "2020-09-22T11:00:56.974Z",
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
                        "field_id": "5ea6a7837250577ca9c7192f",
                        "visible": false,
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
                    "visible": false,
                    "disable": false,
                    "double_typing": false
                },
                {
                    "_id": "5ea6a7837250577ca9c718c0",
                    "name": "A38",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "A38_Ngày hiệu lực HĐ",
                    "is_list": false,
                    "last_modified": "2020-09-22T11:01:31.342Z",
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
                        "field_id": "5ea6a7837250577ca9c718c0",
                        "visible": false,
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
                    "visible": false,
                    "disable": false,
                    "double_typing": false
                },
                {
                    "_id": "5ea6a7837250577ca9c71ac9",
                    "name": "A601",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "A601_Ngày ký HSYCBH",
                    "is_list": false,
                    "last_modified": "2020-09-22T11:03:15.679Z",
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
                    "tooltip": "",
                    "validation": {
                        "name": "Date",
                        "arguments": {},
                        "content": "if(!value){\r\n    return [{type : \"error\" , message : \"Field đang trống, vui lòng kiểm tra lại trước khi save\"}];\r\n}\r\n\r\nfunction chkDate(date){\r\n\tvar dd = date.substring(0,2);\r\n\tvar mm = date.substring(2,4);\r\n\tvar yy = date.substring(4,6);\r\n\tvar tmpDate = new Date();\r\n\tvar y = tmpDate.getFullYear()+\"\";\r\n\ty = y.substring(2,4)*1 + 1;\r\n\r\n\t//Gan gia tri nam la 19YY neu YY > nam hien tai + 1\r\n\t//Gan gia tri nam la 20YY neu YY <= nam hien tai + 1\r\n\tif(yy*1>y){ yy = 19+yy;\r\n\t}else {yy = 20+yy;}\r\n\r\n\treturn dd+mm+yy;\t\r\n}\r\n\r\nfunction formatdate(ngay_hieu_luc_in78){\r\nvar fvalue = ngay_hieu_luc_in78;\r\n\tvar regex = /^(?:(?:31(|\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(|\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(|\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(|\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$/\r\n//\tvar regex1 = /^\\d{6}$/;\r\n\tvar regex2 = /^(\\s*|[0-9\\.\\/\\-]{0,10})$/ ;\r\n\tvar date;\r\nif(fvalue === \"\") return ;\r\n// \tif(regex1.test(fvalue))\r\n// \treturn ;\r\n\tif(regex2.test(fvalue)){\r\n\t\r\n\tif(!regex.test(fvalue)){\r\n\t\treturn [{type:\"warning\",message:\"Ngày Tháng Năm không phù hợp, vui lòng kiểm tra lại.\"}]\r\n\t}\r\n\tif(fvalue.length < 8){\r\n\t\treturn [{type:\"error\",message:\"Field ngày không đủ 8 ký tự\"}]\r\n\t}\r\n}else{\r\n    return [{type:\"error\",message:\"Không đúng định dạng ddmmyyyy\"}]\r\n}\r\nfvalue = fvalue.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'');\r\nif(fvalue.length === 6){\r\n\tfvalue = chkDate(fvalue);\r\n}\r\nvar dd = fvalue.substring(0, 2);\r\nvar mm = fvalue.substring(2, 4);\r\nvar yy = fvalue.substring(4, 8);\r\nvar tmpDate = new Date();\r\nvar d = tmpDate.getDate();\r\nvar m = tmpDate.getMonth();\r\nvar y = tmpDate.getFullYear();\r\nvar inputDate = new Date(yy, mm - 1, dd);\r\nvar curDate = new Date(y, m, d);\r\n\r\n\r\n\r\n//So sanh ngay nhap voi ngay hien tai\r\nif (inputDate > curDate) {\r\n return [{type:\"warning\", message:\"Năm nhập lớn hơn năm hiện tại\"}]\r\n}\r\n\r\n\r\n}\r\n\r\nreturn formatdate(value);",
                        "created_date": "2019-11-28T06:50:27.116Z",
                        "last_modified": "2019-11-28T06:50:27.116Z",
                        "id": "5ddf6e33dedee200147c15f7"
                    },
                    "value_broadcast": "",
                    "field_setting": {
                        "field_id": "5ea6a7837250577ca9c71ac9",
                        "visible": false,
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
                    "visible": false,
                    "disable": false,
                    "double_typing": false
                },
                {
                    "_id": "5ea6a7837250577ca9c71892",
                    "name": "RM1",
                    "project_id": "5ea6a709ae6f27001bb9e2df",
                    "argument_details": [],
                    "control_type": "TEXTFIELD",
                    "counted_character": true,
                    "default_value": "",
                    "field_display": "RM1_Ghi Chú 1",
                    "is_list": false,
                    "last_modified": "2020-09-22T11:03:27.207Z",
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
                    "field_setting": {
                        "field_id": "5ea6a7837250577ca9c71892",
                        "visible": false,
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
                    "visible": false,
                    "disable": false,
                    "double_typing": false
                }
            ],
            "id": "5f192dc0ef3a4d001b598e00"
        }
    ]
}
