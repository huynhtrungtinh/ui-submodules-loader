export function dataSection_148() {
  return [
    {
      "layout_labels": null,
      "name": "NBDOC",
      "layout_name": "NBDOC",
      "index": 0,
      "layout_id": "5f323537aa3d9503719448e0",
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
          "_id": "5db5c8a2d61421001e24a17c",
          "name": "Fullname",
          "field_display": "Fullname",
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
            "content": "    value = value+\"\"\n\n\n    if(value ===\"\"){\n        return [{type : \"error\",message :`Field rỗng kiểm tra lại!`}]\n    }",
            "arguments": {}
          },
          "rule_transform": {
            "name": "",
            "arguments": {},
            "content": "function toTitleCase(str) {\r\n    str = str.replace(/[\\s\\t]+/g,' ');\r\n    str = str.trim();\r\n    str = str.toLowerCase().split(' ');\r\n    for (var i = 0; i < str.length; i++) {\r\n      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); \r\n    }\r\n    return str.join(' ');\r\n}\r\n\r\n\r\n\r\nreturn toTitleCase(value);"
          },
          "lookup_broadcast": [],
          "value_broadcast": "",
          "argument_details": [],
          "project_id": "5db5c87345052400142992e9",
          "created_date": "2019-10-27T16:41:06.988Z",
          "last_modified": "2020-08-31T02:34:49.780Z",
          "ocr_threshold": {
            "confidence": "80",
            "below": "highlight",
            "above": "switch_disable"
          },
          "field_setting": {
            "field_id": "5db5c8a2d61421001e24a17c",
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
          "_id": "5db5c8a2d61421001e24a17d",
          "name": "Gender",
          "field_display": "Gender",
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
            "content": "    value = value+\"\"\n\n\n    if(value ===\"\"){\n        return [{type : \"error\",message :`Field rỗng kiểm tra lại!`}]\n    }\n    \n    let regex = /^[mfc]$/i\n    \n    if(!regex.test(value)){\n        return [{type : \"error\",message :`Chỉ được nhập M, F, C`}]\n        \n    }",
            "arguments": {}
          },
          "rule_transform": {
            "name": "",
            "arguments": {},
            "content": "function removeSpace(input){\r\n\r\n\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\tinput = input.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'-');\r\n\tinput = input.replace(/[\\s\\t]*(\\()[\\s\\t]*/g,' (');\r\n\tinput = input.replace(/[\\s\\t]*(\\))[\\s\\t]*/g,') ');\r\n\tinput = input.replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'/');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input.toUpperCase();\r\n}\r\n\r\nreturn removeSpace(value);"
          },
          "lookup_broadcast": [],
          "value_broadcast": "",
          "argument_details": [
            "M",
            "F",
            "C"
          ],
          "project_id": "5db5c87345052400142992e9",
          "created_date": "2019-10-27T16:41:06.988Z",
          "last_modified": "2020-08-25T04:48:24.632Z",
          "ocr_threshold": {
            "confidence": "80",
            "below": "highlight",
            "above": "switch_disable"
          },
          "field_setting": {
            "field_id": "5db5c8a2d61421001e24a17d",
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
          "_id": "5db5c8a2d61421001e24a17a",
          "name": "Date_of_Birth",
          "field_display": "Date of Birth",
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
            "content": "    value = value+\"\"\n\n\n    if(value ===\"\"){\n        return [{type : \"error\",message :`Field rỗng kiểm tra lại!`}]\n    }\n    let regex_date1 = /^(((0[1-9]|[12]\\d|3[01])(0[13578]|1[02])((1[6-9]|[2-9]\\d)\\d{2}))|((0[1-9]|[12]\\d|30)(0[13456789]|1[012])((1[6-9]|[2-9]\\d)\\d{2}))|((0[1-9]|1\\d|2[0-8])02((1[6-9]|[2-9]\\d)\\d{2}))|(2902((1[6-9]|[2-9]\\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/\n    let regex_date = /^(((0[1-9]|[12]\\d|3[01])\\/(0[13578]|1[02])\\/((1[6-9]|[2-9]\\d)\\d{2}))|((0[1-9]|[12]\\d|30)\\/(0[13456789]|1[012])\\/((1[6-9]|[2-9]\\d)\\d{2}))|((0[1-9]|1\\d|2[0-8])\\/02\\/((1[6-9]|[2-9]\\d)\\d{2}))|(29\\/02\\/((1[6-9]|[2-9]\\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/;\n    \n    if(regex_date.test(value) || regex_date1.test(value)){\n        return;\n    }else{\n        return [{type : \"error\",message :`Sai định dạng DD/MM/YYYY hoac DDMMYYYY`}]\n    }\n",
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
          "project_id": "5db5c87345052400142992e9",
          "created_date": "2019-10-27T16:41:06.988Z",
          "last_modified": "2020-08-25T04:48:24.631Z",
          "ocr_threshold": {
            "confidence": "80",
            "below": "highlight",
            "above": "switch_disable"
          },
          "field_setting": {
            "field_id": "5db5c8a2d61421001e24a17a",
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
          "_id": "5edf650e0b8b5f001e5bce70",
          "name": "ID_Type",
          "field_display": "ID Type",
          "default_value": "",
          "control_type": "TEXTFIELD",
          "tooltip": "1: CMND (9 số or 12 số)  6: Giấy khai sinh: Theo format GKS hoặc 12 số (nếu có số định danh cá nhân) ddmmyyF/M ddmmyyF/Mddmmyy  2: Hộ chiếu/PP 3: Quân đội 4: Khác 5: Công ty",
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
            "key_value": "id_code",
            "locale": [
              "148_191004_124_MVL_STP_OCR"
            ],
            "lookup_after_time": 1,
            "lookup_field": "id_type",
            "name": "",
            "param_set": "return [data.ID_Type]",
            "result_view_config": [
              {
                "title": "id_type",
                "key_value": "id_type"
              },
              {
                "title": "id_code",
                "key_value": "id_code"
              }
            ],
            "related_columns": [],
            "specific_project": "0"
          },
          "validation": {
            "name": "error_null",
            "arguments": {},
            "content": "if(!value){\n    return [{type : \"error\",\n    message :\"Field không được rỗng, cần kiểm tra lại!\"\n    }]\n}\n\n\n    let list_value = [\n        \"1\",\n        \"2\",\n        \"3\",\n        \"4\",\n        \"5\",\n        \"6\"\n    ]\n\n   if(list_value.indexOf(value) < 0){\n        return [{type : \"error\",message :`Chỉ được nhập 1 -> 6`}]\n   }\n    ",
            "created_date": "2020-05-06T03:03:32.913Z",
            "last_modified": "2020-05-06T03:04:28.425Z",
            "id": "5eb229043d64d3001bf43ec6"
          },
          "rule_transform": {
            "name": "",
            "arguments": {},
            "content": "function removeSpace(input){\r\n\r\n\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\tinput = input.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'-');\r\n\tinput = input.replace(/[\\s\\t]*(\\()[\\s\\t]*/g,' (');\r\n\tinput = input.replace(/[\\s\\t]*(\\))[\\s\\t]*/g,') ');\r\n\tinput = input.replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'/');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input.toUpperCase();\r\n}\r\n\r\nreturn removeSpace(value);"
          },
          "lookup_broadcast": [],
          "value_broadcast": "",
          "argument_details": [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6"
          ],
          "project_id": "5db5c87345052400142992e9",
          "created_date": "2020-06-09T10:31:42.950Z",
          "last_modified": "2020-08-25T04:48:24.632Z",
          "field_setting": {
            "field_id": "5edf650e0b8b5f001e5bce70",
            "visible": true,
            "disable": false,
            "switch_disable": false,
            "double_typing": false,
            "disable_auto_fill_ocr": false,
            "argument_details": [
              {
                "value": "CMND"
              },
              {
                "value": "Giấy khai sinh"
              },
              {
                "value": "Hộ chiếu/PP"
              },
              {
                "value": "Quân đội"
              },
              {
                "value": "Khác"
              },
              {
                "value": "Công ty"
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
          "_id": "5db5c8a2d61421001e24a17e",
          "name": "ID_Number",
          "field_display": "ID Number",
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
            "content": "let r = value+\"\";\nidtype = idtype+\"\";\nlet regex_date1 = /^(((0[1-9]|[12]\\d|3[01])(0[13578]|1[02])((1[6-9]|[2-9]\\d)\\d{2}))|((0[1-9]|[12]\\d|30)(0[13456789]|1[012])((1[6-9]|[2-9]\\d)\\d{2}))|((0[1-9]|1\\d|2[0-8])02((1[6-9]|[2-9]\\d)\\d{2}))|(2902((1[6-9]|[2-9]\\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/\n\n   \nif (r === \"\") {\n    return [{\n        type: \"error\",\n        message: `Field trống`\n    }];\n}\n\n\nif (idtype == \"1\" && r.length != 9 && r.length != 12) {\n    return [{\n        type: \"error\",\n        message: `ID TYPE = ${idtype}.  Id Number: ${r}  phải 9 và 12 ký tự!`\n    }];\n}\n\nif (idtype == \"6\") {\n    if (/^[0-9]{12}$/.test(r) || /^[0-9]{6}[mfcMFC]{1}$/.test(r) || /^[0-9]{6}[mfcMFC]{1}[0-9]{6}$/.test(r) || /^[0-9]{6}[mfcMFC]{1}[0-9]{6}[aAbB]{1}$/.test(r)) {\n\n        if (/^[0-9]{12}$/.test(r)) {\n\n        } else {\n            let arr_date_check = []\n            let array = r.split(/[mfcMFC]/);\n            for (let index = 0; index < array.length; index++) {\n                if(array[index] !== ''){\n                    arr_date_check.push(array[index])\n                }  \n            }\n\n            for (let index = 0; index < arr_date_check.length; index++) {\n                let element = arr_date_check[index];\n                let date = element.substring(0, 6);\n                let date19 = (element.substring(0, 4) + '19' + element.substring(4, 6));\n                let date20 = (element.substring(0, 4) + '20' + element.substring(4, 6));\n                if (!regex_date1.test(date19) && !regex_date1.test(date20)) {\n                    console.log(`ID TYPE = ${idtype}. Id Number: ${r}. Phần ngày tháng ${date} không đúng định dạng`)\n                    return [{\n                        type: \"error\",\n                        message: `ID TYPE = ${idtype}. Id Number: ${r}. Phần ngày tháng ${date} không đúng định dạng`\n                    }];\n                }\n            }\n        }\n    } else {\n        return [{\n            type: \"error\",\n            message: `ID TYPE = ${idtype}. Id Number: ${r} phải đúng một trong những dạng sau:  * 7 ký tự (gồm 6 số và 1 chữ m/f/c) hoặc * 12 ký tự (gồm 12 số) hoặc * 13 ký tự (gồm 6 số và 1 chữ (m/f/c) và 6 số)`\n        }];\n    }\n}\n\n",
            "arguments": {
              "idtype": "ID_Type"
            }
          },
          "rule_transform": {
            "name": "",
            "arguments": {},
            "content": "function removeSpace(input){\r\n\r\n\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\tinput = input.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'-');\r\n\tinput = input.replace(/[\\s\\t]*(\\()[\\s\\t]*/g,' (');\r\n\tinput = input.replace(/[\\s\\t]*(\\))[\\s\\t]*/g,') ');\r\n\tinput = input.replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'/');\r\n\r\n\tinput = input.trim();\r\n    input = input.toUpperCase();\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);"
          },
          "lookup_broadcast": [],
          "value_broadcast": "",
          "argument_details": [],
          "project_id": "5db5c87345052400142992e9",
          "created_date": "2019-10-27T16:41:06.988Z",
          "last_modified": "2020-08-25T04:48:24.632Z",
          "ocr_threshold": {
            "confidence": "80",
            "below": "highlight",
            "above": "switch_disable"
          },
          "field_setting": {
            "field_id": "5db5c8a2d61421001e24a17e",
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
          "_id": "5db5c8a2d61421001e24a17b",
          "name": "Date_of_Issue",
          "field_display": "Date of Issue",
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
            "content": "    value = value+\"\"\n\n\n    if(value ===\"\"){\n        return [{type : \"error\",message :`Field rỗng kiểm tra lại!`}]\n    }\n    let regex_date1 = /^(((0[1-9]|[12]\\d|3[01])(0[13578]|1[02])((1[6-9]|[2-9]\\d)\\d{2}))|((0[1-9]|[12]\\d|30)(0[13456789]|1[012])((1[6-9]|[2-9]\\d)\\d{2}))|((0[1-9]|1\\d|2[0-8])02((1[6-9]|[2-9]\\d)\\d{2}))|(2902((1[6-9]|[2-9]\\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/\n    let regex_date = /^(((0[1-9]|[12]\\d|3[01])\\/(0[13578]|1[02])\\/((1[6-9]|[2-9]\\d)\\d{2}))|((0[1-9]|[12]\\d|30)\\/(0[13456789]|1[012])\\/((1[6-9]|[2-9]\\d)\\d{2}))|((0[1-9]|1\\d|2[0-8])\\/02\\/((1[6-9]|[2-9]\\d)\\d{2}))|(29\\/02\\/((1[6-9]|[2-9]\\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/;\n    \n    if(regex_date.test(value) || regex_date1.test(value)){\n        return;\n    }else{\n        return [{type : \"error\",message :`Sai định dạng DD/MM/YYYY hoac DDMMYYYY`}]\n    }\n",
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
          "project_id": "5db5c87345052400142992e9",
          "created_date": "2019-10-27T16:41:06.988Z",
          "last_modified": "2020-08-25T04:48:24.632Z",
          "ocr_threshold": {
            "confidence": "80",
            "below": "highlight",
            "above": "switch_disable"
          },
          "field_setting": {
            "field_id": "5db5c8a2d61421001e24a17b",
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
          "_id": "5db5c8a2d61421001e24a181",
          "name": "Place_of_Issue",
          "field_display": "Place of Issue",
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
            "key_value": "name",
            "locale": [
              "148_191004_124_MVL_STP_OCR"
            ],
            "lookup_after_time": 1,
            "lookup_field": "city_code",
            "name": "",
            "param_set": "return [data.Place_of_Issue]",
            "result_view_config": [
              {
                "title": "name",
                "key_value": "name"
              },
              {
                "title": "ten_viet_tat",
                "key_value": "ten_viet_tat"
              }
            ],
            "related_columns": [],
            "specific_project": "0"
          },
          "validation": {
            "name": "",
            "content": "    value = value+\"\"\n\n\n    if(value ===\"\"){\n        return [{type : \"error\",message :`Field rỗng kiểm tra lại!`}]\n    }",
            "arguments": {}
          },
          "rule_transform": {
            "name": "",
            "arguments": {},
            "content": "function removeSpace(input){\n\n\tif(input.includes('?')){\n        input = input.replace(/[?]{1,1000000}/g, '??');\n\t}\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\n\t\tinput = input.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'-');\n\t\tinput = input.replace(/[\\s\\t]*(\\()[\\s\\t]*/g,' (');\n\t\tinput = input.replace(/[\\s\\t]*(\\))[\\s\\t]*/g,') ');\n\t\tinput = input.replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'/');\n\n\tinput = input.trim();\n\n    if(input == \"Cục CS ĐKQL Cư Trú Và DLQG Về Dân Cư\"){\n        input = \"Cục trưởng Cục CS ĐKQL Cư Trú Và DLQG Về Dân Cư\"\n    }\n    if(input == \"Cục CSQLHC Về TTXH\"){\n        input = \"Cục Trưởng Cục CSQLHC Về TTXH\"\n    }\n\n\treturn input;\n}\n\n\n\nreturn removeSpace(value);"
          },
          "lookup_broadcast": [],
          "value_broadcast": "",
          "argument_details": [],
          "project_id": "5db5c87345052400142992e9",
          "created_date": "2019-10-27T16:41:06.988Z",
          "last_modified": "2020-08-25T04:48:24.633Z",
          "ocr_threshold": {
            "confidence": "",
            "below": "none",
            "above": "none"
          },
          "field_setting": {
            "field_id": "5db5c8a2d61421001e24a181",
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
          "_id": "5edf64d7acb6d8001e11b310",
          "name": "Birth_Country",
          "field_display": "Birth Country",
          "default_value": "VN",
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
            "key_value": "code",
            "locale": [
              "148_191004_124_MVL_STP_OCR"
            ],
            "lookup_after_time": 1,
            "lookup_field": "nat_code",
            "name": "",
            "param_set": "var value = data.Birth_Country; return [value]",
            "result_view_config": [
              {
                "title": "Birth Country",
                "key_value": "name"
              },
              {
                "title": "Code",
                "key_value": "code"
              }
            ],
            "related_columns": [],
            "specific_project": "0"
          },
          "validation": {
            "name": "",
            "content": "value = value+\"\";\n\nif(value ===\"\"){\n        return [{type : \"error\",message :`Field rỗng kiểm tra lại!`}];\n    }\n    \n    \nasync function checkValidation(value) {\n    let params = `[\"${encodeURIComponent(value)}\"]`;\n    let dataLookup =  await fetchJSON(`https://lookups.digi-texx.vn/lookups/production/148_191004_124_MVL_STP_OCR/0/nat_code/${params}`);\n    let _value =value;\n    \n    if (!Array.isArray(dataLookup.json_single) || dataLookup.json_single.filter(it => it.code === _value).length === 0) {\n        return [{\n                type: \"error\",\n                              message: `Dữ liệu nhập: ${_value} khác với lookup, cần kiểm tra lại!`\n                            }];\n    } \n  }\n    return await checkValidation(value);",
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
          "project_id": "5db5c87345052400142992e9",
          "created_date": "2020-06-09T10:30:47.052Z",
          "last_modified": "2020-08-25T04:48:24.631Z",
          "field_setting": {
            "field_id": "5edf64d7acb6d8001e11b310",
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
          "_id": "5db5c8a2d61421001e24a180",
          "name": "Nationality",
          "field_display": "Nationality",
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
            "key_value": "code",
            "locale": [
              "148_191004_124_MVL_STP_OCR"
            ],
            "lookup_after_time": 1,
            "lookup_field": "nat_code",
            "name": "",
            "param_set": "var value = data.Nationality; return [value]",
            "result_view_config": [
              {
                "title": "Nationality",
                "key_value": "name"
              },
              {
                "title": "Code",
                "key_value": "code"
              }
            ],
            "related_columns": [],
            "specific_project": "0"
          },
          "validation": {
            "name": "",
            "content": "    value = value+\"\"\n\n\n    if(value ===\"\"){\n        return [{type : \"error\",message :`Field rỗng kiểm tra lại!`}]\n    }\n    \n    async function checkValidation(value) {\n    let params = `[\"${encodeURIComponent(value)}\"]`;\n    let dataLookup =  await fetchJSON(`https://lookups.digi-texx.vn/lookups/production/148_191004_124_MVL_STP_OCR/0/nat_code/${params}`);\n    let _value =value;\n    \n    if (!Array.isArray(dataLookup.json_single) || dataLookup.json_single.filter(it => it.code === _value).length === 0) {\n        return [{\n                type: \"error\",\n                              message: `Dữ liệu nhập: ${_value} khác với lookup, cần kiểm tra lại!`\n                            }];\n    } \n  }\n    return await checkValidation(value);",
            "arguments": {}
          },
          "rule_transform": {
            "name": "",
            "arguments": {},
            "content": "function removeSpace(input){\r\n\r\n\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\tinput = input.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'-');\r\n\tinput = input.replace(/[\\s\\t]*(\\()[\\s\\t]*/g,' (');\r\n\tinput = input.replace(/[\\s\\t]*(\\))[\\s\\t]*/g,') ');\r\n\tinput = input.replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'/');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);"
          },
          "lookup_broadcast": [],
          "value_broadcast": "",
          "argument_details": [],
          "project_id": "5db5c87345052400142992e9",
          "created_date": "2019-10-27T16:41:06.988Z",
          "last_modified": "2020-08-25T04:48:24.632Z",
          "ocr_threshold": {
            "confidence": "80",
            "below": "highlight",
            "above": "switch_disable"
          },
          "field_setting": {
            "field_id": "5db5c8a2d61421001e24a180",
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
          "_id": "5f323537aa3d9503719448cf",
          "name": "SIGN",
          "project_id": "5db5c87345052400142992e9",
          "argument_details": [
            "Y",
            "N"
          ],
          "control_type": "TEXTFIELD",
          "counted_character": true,
          "default_value": "",
          "field_display": "SIGN",
          "is_list": false,
          "last_modified": "2020-08-25T04:48:24.633Z",
          "lookup_broadcast": [],
          "lookup_source": {
            "allow_multiple": false,
            "characters_trigger_lookup": 1,
            "group_project": "ancestry",
            "key_value": "data_value",
            "locale": [],
            "lookup_after_time": 1,
            "lookup_field": "",
            "name": "",
            "param_set": "return []",
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
            "content": "function removeSpace(input){\r\n\r\n\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\tinput = input.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'-');\r\n\tinput = input.replace(/[\\s\\t]*(\\()[\\s\\t]*/g,' (');\r\n\tinput = input.replace(/[\\s\\t]*(\\))[\\s\\t]*/g,') ');\r\n\tinput = input.replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'/');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input.toUpperCase();\r\n}\r\n\r\nreturn removeSpace(value);"
          },
          "tooltip": "",
          "validation": {
            "name": "",
            "content": "value = value+\"\"\n\nif(value ===\"\"){\n    return [{type:\"error\", message:\"SIGN rỗng. kiểm tra lại\"}]\n}\n\n    let regex = /^[yn]$/i\n    \n    if(!regex.test(value)){\n        return [{type : \"error\",message :`Chỉ được nhập Y, N`}]\n        \n    }",
            "arguments": {}
          },
          "value_broadcast": "",
          "field_setting": {
            "field_id": "5f323537aa3d9503719448cf",
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
          "_id": "5db5c8a2d61421001e24a17f",
          "name": "Linktype",
          "field_display": "Link Type",
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
            "content": "    value = value+\"\"\n\n\n    if(value ===\"\"){\n        return [{type : \"error\",message :`Field rỗng kiểm tra lại!`}]\n    }",
            "arguments": {}
          },
          "rule_transform": {
            "name": "",
            "arguments": {},
            "content": "function removeSpace(input){\r\n\r\n\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\tinput = input.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'-');\r\n\tinput = input.replace(/[\\s\\t]*(\\()[\\s\\t]*/g,' (');\r\n\tinput = input.replace(/[\\s\\t]*(\\))[\\s\\t]*/g,') ');\r\n\tinput = input.replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'/');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);"
          },
          "lookup_broadcast": [],
          "value_broadcast": "",
          "argument_details": [],
          "project_id": "5db5c87345052400142992e9",
          "created_date": "2019-10-27T16:41:06.988Z",
          "last_modified": "2020-08-25T07:01:42.817Z",
          "ocr_threshold": {
            "confidence": "80",
            "below": "highlight",
            "above": "none"
          },
          "field_setting": {
            "field_id": "5db5c8a2d61421001e24a17f",
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
        }
      ],
      "id": "5f323537aa3d95037194490e"
    },
    {
      "layout_labels": null,
      "name": "nbdoc_remark",
      "layout_name": "NBDOC",
      "index": 1,
      "layout_id": "5f323537aa3d9503719448e0",
      "is_multiple": true,
      "position": {},
      "settings": {
        "is_multiple": true,
        "fieldId": "nbdoc_remark",
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
          "_id": "5f323537aa3d9503719448d1",
          "name": "nbdoc_remark",
          "project_id": "5db5c87345052400142992e9",
          "argument_details": [],
          "control_type": "TEXTFIELD",
          "counted_character": true,
          "default_value": "",
          "field_display": "NB Doc Remark",
          "is_list": true,
          "last_modified": "2020-08-25T04:48:24.633Z",
          "lookup_broadcast": [],
          "lookup_source": {
            "allow_multiple": true,
            "characters_trigger_lookup": 1,
            "group_project": "production",
            "key_value": "remark",
            "locale": [
              "148_191004_124_MVL_STP_OCR"
            ],
            "lookup_after_time": 1,
            "lookup_field": "remark",
            "name": "",
            "param_set": "return [data.nbdoc_remark]",
            "result_view_config": [
              {
                "title": "remark",
                "key_value": "remark"
              }
            ],
            "related_columns": [],
            "specific_project": "0",
            "lookup_space_after_choosen": false
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
            "field_id": "5f323537aa3d9503719448d1",
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
      "id": "5f323537aa3d950371944910"
    }
  ]
}
