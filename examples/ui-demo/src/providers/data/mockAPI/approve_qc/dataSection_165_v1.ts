export const dataSection_165_v1 = () => {
    return [
        {
          "name": "Personal",
          "layout_name": "Sunlife",
          "index": 0,
          "layout_id": "5de0d7d9dedee200147c1605",
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
              "_id": "5de4aba5dedee200147c161b",
              "name": "A510",
              "field_display": "Nơi nhận HĐ",
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
                "key_value": "prov_nm",
                "locale": [
                  "165_191128_340_SUNLIFE"
                ],
                "lookup_after_time": 1,
                "lookup_field": "province",
                "name": "Sunlife_Province",
                "param_set": "return [data.A510]",
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
              "validation": {
                "name": "",
                "content": "if(!value){\r\n    return [{type : \"warning\" , message : \"Field đang trống, vui lòng kiểm tra lại trước khi save\"}];\r\n}\r\n\r\nif (value){\r\n    async function checkValidation(value) {\r\n            let dataLookup =  await fetchJSON(`https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/province/[%22${value}%22]`);\r\n            let _value =value.toLowerCase(); \r\n            if (!Array.isArray(dataLookup.json_single)||dataLookup.json_single.map(item => item.prov_nm.toLowerCase()).findIndex(item => item === _value) === -1) {\r\n                            return [{\r\n                              type: \"error\",\r\n                              message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                            }]\r\n                         }\r\n            // if(value.toLowerCase().includes('nhhien'))             \r\n            //              return[{ \r\n            //                   type: 'warning',\r\n            //                   message: `Lookup warning value:${value}`}];\r\n    }\r\n    return await checkValidation(value);\r\n    }",
                "arguments": {}
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T06:13:57.371Z",
              "last_modified": "2020-01-14T04:38:15.528Z",
              "field_setting": {
                "field_id": "5de4aba5dedee200147c161b",
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
              "_id": "5de4d3bbdedee200147c162a",
              "name": "A509_1",
              "field_display": "Ngày nhận HSYCBH",
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
                "name": "Date",
                "arguments": {},
                "content": "function chkDate(date){\r\n\tvar dd = date.substring(0,2);\r\n\tvar mm = date.substring(2,4);\r\n\tvar yy = date.substring(4,6);\r\n\tvar tmpDate = new Date();\r\n\tvar y = tmpDate.getFullYear()+\"\";\r\n\ty = y.substring(2,4)*1 + 1;\r\n\r\n\t//Gan gia tri nam la 19YY neu YY > nam hien tai + 1\r\n\t//Gan gia tri nam la 20YY neu YY <= nam hien tai + 1\r\n\tif(yy*1>y){ yy = 19+yy;\r\n\t}else {yy = 20+yy;}\r\n\r\n\treturn dd+mm+yy;\t\r\n}\r\n\r\nfunction formatdate(ngay_hieu_luc_in78){\r\nvar fvalue = ngay_hieu_luc_in78;\r\n\tvar regex = /^(?:(?:31(|\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(|\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(|\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(|\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$/\r\n\tvar regex1 = /^\\d{6}$/;\r\n\tvar regex2 = /^(\\s*|[0-9\\.\\/\\-]+)$/ ;\r\n\tvar date;\r\nif(fvalue === \"\") return ;\r\n\tif(regex1.test(fvalue))\r\n\treturn ;\r\n\tif(regex2.test(fvalue)){\r\n\t\r\n\tif(!regex.test(fvalue)){\r\n\t\treturn [{type:\"warning\",message:\"Ngày Tháng Năm không phù hợp, vui lòng kiểm tra lại.\"}]\r\n\t}\r\n}else{\r\n    return [{type:\"error\",message:\"Không đúng định dạng ddmmyyyy\"}]\r\n}\r\nfvalue = fvalue.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'');\r\nif(fvalue.length === 6){\r\n\tfvalue = chkDate(fvalue);\r\n}\r\nvar dd = fvalue.substring(0, 2);\r\nvar mm = fvalue.substring(2, 4);\r\nvar yy = fvalue.substring(4, 8);\r\nvar tmpDate = new Date();\r\nvar d = tmpDate.getDate();\r\nvar m = tmpDate.getMonth();\r\nvar y = tmpDate.getFullYear();\r\nvar inputDate = new Date(yy, mm - 1, dd);\r\nvar curDate = new Date(y, m, d);\r\n\r\n\r\n\r\n//So sanh ngay nhap voi ngay hien tai\r\nif (inputDate > curDate) {\r\n return [{type:\"warning\", message:\"Năm nhập lớn hơn năm hiện tại\"}]\r\n}\r\n\r\n\r\n}\r\n\r\nreturn formatdate(value);",
                "created_date": "2019-11-28T06:50:27.116Z",
                "last_modified": "2019-11-28T06:50:27.116Z",
                "id": "5ddf6e33dedee200147c15f7"
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
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T09:04:59.359Z",
              "last_modified": "2019-12-18T03:12:33.629Z",
              "field_setting": {
                "field_id": "5de4d3bbdedee200147c162a",
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
              "_id": "5dd4e710dedee200147c147e",
              "name": "A03",
              "field_display": "Họ",
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
                "name": "Text",
                "arguments": {
                  "field": "A10"
                },
                "content": "var regex1 = /[^\\sA-Za-zsáàảãạâăắằẳẵặặấầẩẫậéèẻẽẹêếềểễệíìỉĩịóòỏõọôơốồổỗộớờởỡợúùủũụưứừửữựýỳỷỹỵđÁÀẢÃẠÂĂẮẰẲẴẶẶẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔƠỐỒỔỖỘỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴĐ]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập chữ \"}]\r\n}\r\n\r\nfunction checkRuleEqual(value_crr =\"\" , value_brd = \"\"){\r\n    value_crr = value_crr.trim()\r\n    value_brd = value_brd.toUpperCase().trim()\r\n    \r\n    if(value_brd===\"F\" && !value_crr || value_brd===\"M\" && !value_crr ){\r\n       return [{type : \"error\" , message : \"Field giới tính là F hoặc M thì field Họ buộc phải có giá trị\"}];\r\n    }\r\n}\r\n\r\nreturn checkRuleEqual(value, field);",
                "created_date": "2019-11-29T08:21:01.677Z",
                "last_modified": "2019-11-29T08:21:01.677Z",
                "id": "5de0d4eddedee200147c1603"
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nfunction toTitleCase(input)\r\n{\r\n    return input.replace(/\\w*/g, function(input){return input.charAt(0).toUpperCase() + input.substr(1).toLowerCase();});\r\n}\r\n\r\n\r\nfunction transformGivenSurname(field_value) {\r\n  field_value = field_value.trim();\r\n  var fullString = '';\r\n  var arr_char = ['ß'];\r\n  if(field_value.includes(' ')){\r\n  \tvar arr = field_value.split(' ');\r\n    for(var i = 0 ; i < arr.length; i++){\r\n    \tvar strChild = arr[i];\r\n        if(strChild === strChild.toLowerCase() || strChild === strChild.toUpperCase()){\r\n \t       \tif(arr_char.includes(strChild.substring(0,1))){\r\n\t\t\t\tstrChild = strChild.substring(0,1) + strChild.substring(1,strChild.length).toLowerCase();\r\n          \t\tfullString += strChild + ' ';\r\n\t\t\t}else{\r\n           \t\tstrChild = strChild.substring(0,1).toUpperCase() + strChild.substring(1,strChild.length).toLowerCase();\r\n          \t\tfullString += strChild + ' ';\r\n            }\r\n          \r\n        }else{\r\n            strChild = strChild.substring(0,1).toUpperCase() + strChild.substring(1,strChild.length).toLowerCase();\r\n            fullString += strChild + ' ';\r\n        }\r\n    }\r\n  }else{\r\n  \tif(field_value === field_value.toLowerCase() || field_value === field_value.toUpperCase()){\r\n    \tif(arr_char.includes(field_value.substring(0,1))){\r\n\t\t\tfield_value = field_value.substring(0,1) + field_value.substring(1,field_value.length).toLowerCase();\r\n     \t\tfullString = field_value;\r\n\t\t}else{\r\n        \tfield_value = field_value.substring(0,1).toUpperCase() + field_value.substring(1,field_value.length).toLowerCase();\r\n      \t\tfullString = field_value;\r\n\t\t}\r\n      \r\n    }else{\r\n        field_value = field_value.substring(0,1).toUpperCase() + field_value.substring(1,field_value.length).toLowerCase();\r\n        fullString = field_value;\r\n    }\r\n  }\r\n  return fullString.trim();\r\n}\r\nreturn transformGivenSurname(removeSpace(value));",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-20T07:11:12.237Z",
              "last_modified": "2020-01-14T03:51:33.592Z",
              "field_setting": {
                "field_id": "5dd4e710dedee200147c147e",
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
              "_id": "5dd4e94adedee200147c1481",
              "name": "A04",
              "field_display": "Tên Lót",
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
                "name": "Text Tiếng Việt",
                "arguments": {},
                "content": "var regex1 = /[^\\sA-Za-zsáàảãạâăắằẳẵặặấầẩẫậéèẻẽẹêếềểễệíìỉĩịóòỏõọôơốồổỗộớờởỡợúùủũụưứừửữựýỳỷỹỵđÁÀẢÃẠÂĂẮẰẲẴẶẶẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔƠỐỒỔỖỘỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴĐ]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập chữ \"}]\r\n}\r\n",
                "created_date": "2019-11-29T08:21:01.677Z",
                "last_modified": "2019-11-29T08:33:51.062Z",
                "id": "5de0d4eddedee200147c1603"
              },
              "rule_transform": {
                "name": "Name_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nfunction transformGivenSurname(field_value) {\r\n  field_value = field_value.trim();\r\n  var fullString = '';\r\n  var arr_char = ['ß'];\r\n  if(field_value.includes(' ')){\r\n  \tvar arr = field_value.split(' ');\r\n    for(var i = 0 ; i < arr.length; i++){\r\n    \tvar strChild = arr[i];\r\n        if(strChild === strChild.toLowerCase() || strChild === strChild.toUpperCase()){\r\n \t       \tif(arr_char.includes(strChild.substring(0,1))){\r\n\t\t\t\tstrChild = strChild.substring(0,1) + strChild.substring(1,strChild.length).toLowerCase();\r\n          \t\tfullString += strChild + ' ';\r\n\t\t\t}else{\r\n           \t\tstrChild = strChild.substring(0,1).toUpperCase() + strChild.substring(1,strChild.length).toLowerCase();\r\n          \t\tfullString += strChild + ' ';\r\n            }\r\n          \r\n        }else{\r\n            strChild = strChild.substring(0,1).toUpperCase() + strChild.substring(1,strChild.length).toLowerCase();\r\n            fullString += strChild + ' ';\r\n        }\r\n    }\r\n  }else{\r\n  \tif(field_value === field_value.toLowerCase() || field_value === field_value.toUpperCase()){\r\n    \tif(arr_char.includes(field_value.substring(0,1))){\r\n\t\t\tfield_value = field_value.substring(0,1) + field_value.substring(1,field_value.length).toLowerCase();\r\n     \t\tfullString = field_value;\r\n\t\t}else{\r\n        \tfield_value = field_value.substring(0,1).toUpperCase() + field_value.substring(1,field_value.length).toLowerCase();\r\n      \t\tfullString = field_value;\r\n\t\t}\r\n      \r\n    }else{\r\n        field_value = field_value.substring(0,1).toUpperCase() + field_value.substring(1,field_value.length).toLowerCase();\r\n        fullString = field_value;\r\n    }\r\n  }\r\n  return fullString.trim();\r\n}\r\nreturn transformGivenSurname(removeSpace(value));",
                "created_date": "2019-11-29T09:40:49.056Z",
                "last_modified": "2019-11-29T09:40:49.056Z",
                "id": "5de0e7a1dedee200147c1612"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "text_type": "",
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-20T07:20:42.514Z",
              "last_modified": "2019-11-29T09:45:22.343Z",
              "field_setting": {
                "field_id": "5dd4e94adedee200147c1481",
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
              "_id": "5dd4e95cdedee200147c1482",
              "name": "A05",
              "field_display": "Tên",
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
                "name": "Text Tiếng Việt",
                "arguments": {
                  "field": "A10"
                },
                "content": "var regex1 = /[^\\sA-Za-zsáàảãạâăắằẳẵặặấầẩẫậéèẻẽẹêếềểễệíìỉĩịóòỏõọôơốồổỗộớờởỡợúùủũụưứừửữựýỳỷỹỵđÁÀẢÃẠÂĂẮẰẲẴẶẶẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔƠỐỒỔỖỘỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴĐ]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập chữ \"}]\r\n}\r\n\r\nfunction checkRuleEqual(value_crr =\"\" , value_brd = \"\"){\r\n    value_crr = value_crr.trim()\r\n    value_brd = value_brd.toUpperCase().trim()\r\n    \r\n    if(value_brd===\"F\" && !value_crr || value_brd===\"M\" && !value_crr ){\r\n       return [{type : \"error\" , message : \"Field giới tính là F hoặc M thì field Tên buộc phải có giá trị\"}];\r\n    }\r\n}\r\n\r\nreturn checkRuleEqual(value, field);",
                "created_date": "2019-11-29T08:21:01.677Z",
                "last_modified": "2019-11-29T08:33:51.062Z",
                "id": "5de0d4eddedee200147c1603"
              },
              "rule_transform": {
                "name": "Name_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nfunction transformGivenSurname(field_value) {\r\n  field_value = field_value.trim();\r\n  var fullString = '';\r\n  var arr_char = ['ß'];\r\n  if(field_value.includes(' ')){\r\n  \tvar arr = field_value.split(' ');\r\n    for(var i = 0 ; i < arr.length; i++){\r\n    \tvar strChild = arr[i];\r\n        if(strChild === strChild.toLowerCase() || strChild === strChild.toUpperCase()){\r\n \t       \tif(arr_char.includes(strChild.substring(0,1))){\r\n\t\t\t\tstrChild = strChild.substring(0,1) + strChild.substring(1,strChild.length).toLowerCase();\r\n          \t\tfullString += strChild + ' ';\r\n\t\t\t}else{\r\n           \t\tstrChild = strChild.substring(0,1).toUpperCase() + strChild.substring(1,strChild.length).toLowerCase();\r\n          \t\tfullString += strChild + ' ';\r\n            }\r\n          \r\n        }else{\r\n            strChild = strChild.substring(0,1).toUpperCase() + strChild.substring(1,strChild.length).toLowerCase();\r\n            fullString += strChild + ' ';\r\n        }\r\n    }\r\n  }else{\r\n  \tif(field_value === field_value.toLowerCase() || field_value === field_value.toUpperCase()){\r\n    \tif(arr_char.includes(field_value.substring(0,1))){\r\n\t\t\tfield_value = field_value.substring(0,1) + field_value.substring(1,field_value.length).toLowerCase();\r\n     \t\tfullString = field_value;\r\n\t\t}else{\r\n        \tfield_value = field_value.substring(0,1).toUpperCase() + field_value.substring(1,field_value.length).toLowerCase();\r\n      \t\tfullString = field_value;\r\n\t\t}\r\n      \r\n    }else{\r\n        field_value = field_value.substring(0,1).toUpperCase() + field_value.substring(1,field_value.length).toLowerCase();\r\n        fullString = field_value;\r\n    }\r\n  }\r\n  return fullString.trim();\r\n}\r\nreturn transformGivenSurname(removeSpace(value));",
                "created_date": "2019-11-29T09:40:49.056Z",
                "last_modified": "2019-11-29T09:45:36.834Z",
                "id": "5de0e7a1dedee200147c1612"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-20T07:21:00.640Z",
              "last_modified": "2020-01-14T03:48:33.416Z",
              "field_setting": {
                "field_id": "5dd4e95cdedee200147c1482",
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
              "_id": "5dd4ea5bdedee200147c1483",
              "name": "A06",
              "field_display": "Ngày tháng năm sinh",
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
                "name": "Date",
                "arguments": {},
                "content": "function chkDate(date){\r\n\tvar dd = date.substring(0,2);\r\n\tvar mm = date.substring(2,4);\r\n\tvar yy = date.substring(4,6);\r\n\tvar tmpDate = new Date();\r\n\tvar y = tmpDate.getFullYear()+\"\";\r\n\ty = y.substring(2,4)*1 + 1;\r\n\r\n\t//Gan gia tri nam la 19YY neu YY > nam hien tai + 1\r\n\t//Gan gia tri nam la 20YY neu YY <= nam hien tai + 1\r\n\tif(yy*1>y){ yy = 19+yy;\r\n\t}else {yy = 20+yy;}\r\n\r\n\treturn dd+mm+yy;\t\r\n}\r\n\r\nfunction formatdate(ngay_hieu_luc_in78){\r\nvar fvalue = ngay_hieu_luc_in78;\r\n\tvar regex = /^(?:(?:31(|\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(|\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(|\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(|\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$/\r\n\tvar regex1 = /^\\d{6}$/;\r\n\tvar regex2 = /^(\\s*|[0-9\\.\\/\\-]+)$/ ;\r\n\tvar date;\r\nif(fvalue === \"\") return ;\r\n\tif(regex1.test(fvalue))\r\n\treturn ;\r\n\tif(regex2.test(fvalue)){\r\n\t\r\n\tif(!regex.test(fvalue)){\r\n\t\treturn [{type:\"warning\",message:\"Ngày Tháng Năm không phù hợp, vui lòng kiểm tra lại.\"}]\r\n\t}\r\n}else{\r\n    return [{type:\"error\",message:\"Không đúng định dạng ddmmyyyy\"}]\r\n}\r\nfvalue = fvalue.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'');\r\nif(fvalue.length === 6){\r\n\tfvalue = chkDate(fvalue);\r\n}\r\nvar dd = fvalue.substring(0, 2);\r\nvar mm = fvalue.substring(2, 4);\r\nvar yy = fvalue.substring(4, 8);\r\nvar tmpDate = new Date();\r\nvar d = tmpDate.getDate();\r\nvar m = tmpDate.getMonth();\r\nvar y = tmpDate.getFullYear();\r\nvar inputDate = new Date(yy, mm - 1, dd);\r\nvar curDate = new Date(y, m, d);\r\n\r\n\r\n\r\n//So sanh ngay nhap voi ngay hien tai\r\nif (inputDate > curDate) {\r\n return [{type:\"warning\", message:\"Năm nhập lớn hơn năm hiện tại\"}]\r\n}\r\n\r\n\r\n}\r\n\r\nreturn formatdate(value);",
                "created_date": "2019-11-28T06:50:27.116Z",
                "last_modified": "2019-11-28T06:50:27.116Z",
                "id": "5ddf6e33dedee200147c15f7"
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
              "text_type": "DATE",
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-20T07:25:15.822Z",
              "last_modified": "2019-12-18T03:09:58.774Z",
              "field_setting": {
                "field_id": "5dd4ea5bdedee200147c1483",
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
              "_id": "5dd4ea68dedee200147c1484",
              "name": "A07",
              "field_display": "Nơi Sinh",
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
                "key_value": "value",
                "locale": [
                  "165_191128_340_SUNLIFE"
                ],
                "lookup_after_time": 1,
                "lookup_field": "birthplace",
                "name": "Sunlife_BirthPlace",
                "param_set": "return [data.A07]",
                "result_view_config": [
                  {
                    "title": "Birth Place",
                    "key_value": "value"
                  }
                ],
                "related_columns": [],
                "specific_project": "0",
                "created_date": "2019-12-10T02:44:01.404Z",
                "last_modified": "2019-12-10T02:44:01.404Z",
                "id": "5def0671d3f551001f8958b4"
              },
              "validation": {
                "name": "",
                "content": "if (value){\r\n    async function checkValidation(value) {\r\n            let dataLookup =  await fetchJSON(`https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/birthplace/[%22${value}%22]`);\r\n            let _value =value.toLowerCase(); \r\n            if (!Array.isArray(dataLookup.json_single)||dataLookup.json_single.map(item => item.value.toLowerCase()).findIndex(item => item === _value) === -1) {\r\n                            return [{\r\n                              type: \"error\",\r\n                              message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                            }]\r\n                         }\r\n            // if(value.toLowerCase().includes('nhhien'))             \r\n            //              return[{ \r\n            //                   type: 'warning',\r\n            //                   message: `Lookup warning value:${value}`}];\r\n    }\r\n    return await checkValidation(value);\r\n    }\r\n",
                "arguments": {}
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-20T07:25:28.330Z",
              "last_modified": "2019-12-18T06:36:38.798Z",
              "field_setting": {
                "field_id": "5dd4ea68dedee200147c1484",
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
              "_id": "5dd4ea7bdedee200147c1485",
              "name": "A08",
              "field_display": "Quốc Tịch 1",
              "default_value": "Việt Nam",
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
              "validation": {
                "name": "",
                "content": "if (value){\r\n    async function checkValidation(value) {\r\n            let dataLookup =  await fetchJSON(`https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/nationality/[%22${value}%22]`);\r\n            let _value =value.toLowerCase(); \r\n            if (!Array.isArray(dataLookup.json_single)||dataLookup.json_single.map(item => item.value.toLowerCase()).findIndex(item => item === _value) === -1) {\r\n                            return [{\r\n                              type: \"error\",\r\n                              message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                            }]\r\n                         }\r\n            // if(value.toLowerCase().includes('nhhien'))             \r\n            //              return[{ \r\n            //                   type: 'warning',\r\n            //                   message: `Lookup warning value:${value}`}];\r\n    }\r\n    return await checkValidation(value);\r\n    }",
                "arguments": {}
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-20T07:25:47.234Z",
              "last_modified": "2020-01-14T03:14:00.910Z",
              "field_setting": {
                "field_id": "5dd4ea7bdedee200147c1485",
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
              "_id": "5dd4eae1dedee200147c1486",
              "name": "A09",
              "field_display": "Quốc tịch 2 (Nếu có)",
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
              "validation": {
                "name": "",
                "content": "if (value){\r\n    async function checkValidation(value) {\r\n            let dataLookup =  await fetchJSON(`https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/nationality/[%22${value}%22]`);\r\n            let _value =value.toLowerCase(); \r\n            if (!Array.isArray(dataLookup.json_single)||dataLookup.json_single.map(item => item.value.toLowerCase()).findIndex(item => item === _value) === -1) {\r\n                            return [{\r\n                              type: \"error\",\r\n                              message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                            }]\r\n                         }\r\n            // if(value.toLowerCase().includes('nhhien'))             \r\n            //              return[{ \r\n            //                   type: 'warning',\r\n            //                   message: `Lookup warning value:${value}`}];\r\n    }\r\n    return await checkValidation(value);\r\n    }",
                "arguments": {}
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-20T07:27:29.416Z",
              "last_modified": "2019-12-18T06:39:26.056Z",
              "field_setting": {
                "field_id": "5dd4eae1dedee200147c1486",
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
              "_id": "5dd4f2f9dedee200147c1487",
              "name": "A10",
              "field_display": "Giới tính",
              "default_value": "",
              "control_type": "TEXTFIELD",
              "tooltip": "",
              "is_list": false,
              "counted_character": true,
              "pattern": {
                "name": "",
                "arguments": {},
                "content": "^[MmFfCc]{0,1}$",
                "description": "Chỉ được nhập M hoặc F hoặc C"
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value.toUpperCase())",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-20T08:02:01.830Z",
              "last_modified": "2019-12-31T06:37:48.819Z",
              "field_setting": {
                "field_id": "5dd4f2f9dedee200147c1487",
                "visible": true,
                "disable": false,
                "double_typing": false,
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
              "_id": "5dd4f496dedee200147c1488",
              "name": "A11",
              "field_display": "Tình trạng hôn nhân",
              "default_value": "",
              "control_type": "TEXTFIELD",
              "tooltip": "",
              "is_list": false,
              "counted_character": true,
              "pattern": {
                "name": "",
                "arguments": {},
                "content": "^[DdMmSsWwOo]{0,1}$",
                "description": "Chỉ được nhập 1 trong các ký tự: D M S W O"
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
                "content": "if(!value){\r\n    return [{type:\"error\",message:\"Không được bỏ trống\"}]\r\n}",
                "arguments": {}
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value.toUpperCase());",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-20T08:08:54.515Z",
              "last_modified": "2019-12-24T08:44:01.469Z",
              "field_setting": {
                "field_id": "5dd4f496dedee200147c1488",
                "visible": true,
                "disable": false,
                "double_typing": false,
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
              "visible": true,
              "disable": false,
              "double_typing": false
            },
            {
              "_id": "5dd4f4c0dedee200147c1489",
              "name": "A12",
              "field_display": "Loại Giấy Tờ",
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
                "content": "if(!value){\n    return [{type : \"error\", message: \"Vui lòng chọn loại giấy tờ\"}]\n}",
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
                "CMND",
                "Passport",
                "CCCD",
                "Giấy Khai Sinh"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-20T08:09:36.217Z",
              "last_modified": "2020-01-16T09:38:33.510Z",
              "field_setting": {
                "field_id": "5dd4f4c0dedee200147c1489",
                "visible": true,
                "disable": false,
                "double_typing": false,
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
              "visible": true,
              "disable": false,
              "double_typing": false
            },
            {
              "_id": "5dd4f4d9dedee200147c148a",
              "name": "A13",
              "field_display": "Số giấy tờ tùy thân",
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
                "name": "Text + Number",
                "arguments": {
                  "given": "A12"
                },
                "content": "function checkCharacter(value) {\r\n\r\n    if(!value){\r\n        return false;\r\n    }else{\r\n        return true;\r\n    }\r\n  }\r\nfunction checkEqualGiven(surname_value =\"\" , given_value = \"\"){\r\n      surname_value = surname_value.trim()\r\n      given_value = given_value.trim()\r\n      var regex1 = /^[0-9]{9}$/;\r\n      var regex2 = /^[0-9]{12}$/;\r\n      var regex3 = /^[A-Z0-9]{8,9}$/;\r\n\r\n      if(!regex1.test(surname_value) && given_value === \"CMND\"){\r\n          return [{type : \"error\" , message : \"CMND chỉ nhập 9 số\"}];\r\n      }else\r\n      if(!regex2.test(surname_value) && given_value === \"CCCD\"){\r\n          return [{type : \"error\" , message : \"CCCD chỉ nhập 12 số\"}];\r\n      }else\r\n      if(!regex3.test(surname_value) && given_value === \"Passport\"){\r\n          return [{type : \"error\" , message : \"Passport chỉ nhập chữ in và 8 hoặc 9 số\"}];\r\n      }\r\n     \r\n     return;\r\n  }\r\n  \r\nfunction checkError(value){\r\n      if(checkCharacter(value) === true){\r\n          \r\n             return checkEqualGiven(value, given);\r\n              \r\n      }else{\r\n          return [{type : \"warning\" , message : \"Không có số giấy tờ tùy thân\"}];\r\n      }\r\n  }\r\n  \r\nreturn checkError(value);",
                "created_date": "2019-11-28T06:46:23.478Z",
                "last_modified": "2019-11-29T08:25:58.570Z",
                "id": "5ddf6d3fdedee200147c15f6"
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-20T08:10:01.367Z",
              "last_modified": "2019-12-24T11:34:57.133Z",
              "field_setting": {
                "field_id": "5dd4f4d9dedee200147c148a",
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
              "_id": "5dd4f4f5dedee200147c148b",
              "name": "A14",
              "field_display": "Ngày cấp",
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
                "name": "Date",
                "arguments": {},
                "content": "function chkDate(date){\r\n\tvar dd = date.substring(0,2);\r\n\tvar mm = date.substring(2,4);\r\n\tvar yy = date.substring(4,6);\r\n\tvar tmpDate = new Date();\r\n\tvar y = tmpDate.getFullYear()+\"\";\r\n\ty = y.substring(2,4)*1 + 1;\r\n\r\n\t//Gan gia tri nam la 19YY neu YY > nam hien tai + 1\r\n\t//Gan gia tri nam la 20YY neu YY <= nam hien tai + 1\r\n\tif(yy*1>y){ yy = 19+yy;\r\n\t}else {yy = 20+yy;}\r\n\r\n\treturn dd+mm+yy;\t\r\n}\r\n\r\nfunction formatdate(ngay_hieu_luc_in78){\r\nvar fvalue = ngay_hieu_luc_in78;\r\n\tvar regex = /^(?:(?:31(|\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(|\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(|\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(|\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$/\r\n\tvar regex1 = /^\\d{6}$/;\r\n\tvar regex2 = /^(\\s*|[0-9\\.\\/\\-]+)$/ ;\r\n\tvar date;\r\nif(fvalue === \"\") return ;\r\n\tif(regex1.test(fvalue))\r\n\treturn ;\r\n\tif(regex2.test(fvalue)){\r\n\t\r\n\tif(!regex.test(fvalue)){\r\n\t\treturn [{type:\"warning\",message:\"Ngày Tháng Năm không phù hợp, vui lòng kiểm tra lại.\"}]\r\n\t}\r\n}else{\r\n    return [{type:\"error\",message:\"Không đúng định dạng ddmmyyyy\"}]\r\n}\r\nfvalue = fvalue.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'');\r\nif(fvalue.length === 6){\r\n\tfvalue = chkDate(fvalue);\r\n}\r\nvar dd = fvalue.substring(0, 2);\r\nvar mm = fvalue.substring(2, 4);\r\nvar yy = fvalue.substring(4, 8);\r\nvar tmpDate = new Date();\r\nvar d = tmpDate.getDate();\r\nvar m = tmpDate.getMonth();\r\nvar y = tmpDate.getFullYear();\r\nvar inputDate = new Date(yy, mm - 1, dd);\r\nvar curDate = new Date(y, m, d);\r\n\r\n\r\n\r\n//So sanh ngay nhap voi ngay hien tai\r\nif (inputDate > curDate) {\r\n return [{type:\"warning\", message:\"Năm nhập lớn hơn năm hiện tại\"}]\r\n}\r\n\r\n\r\n}\r\n\r\nreturn formatdate(value);",
                "created_date": "2019-11-28T06:50:27.116Z",
                "last_modified": "2019-11-28T06:50:27.116Z",
                "id": "5ddf6e33dedee200147c15f7"
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
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-20T08:10:29.327Z",
              "last_modified": "2019-12-18T03:10:24.747Z",
              "text_type": "DATE",
              "field_setting": {
                "field_id": "5dd4f4f5dedee200147c148b",
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
              "_id": "5dd4faf1dedee200147c149c",
              "name": "A31",
              "field_display": "Mối quan hệ của BMBH với NĐBH",
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
                "key_value": "english",
                "locale": [
                  "165_191128_340_SUNLIFE"
                ],
                "lookup_after_time": 1,
                "lookup_field": "relationship",
                "name": "Sunlife_Relationship",
                "param_set": "return [data.A31]",
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
              "validation": {
                "name": "",
                "content": "if (value){\r\n    async function checkValidation(value) {\r\n            let dataLookup =  await fetchJSON(`https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/relationship/[%22${value}%22]`);\r\n            let _value =value.toLowerCase(); \r\n            if (!Array.isArray(dataLookup.json_single)||dataLookup.json_single.map(item => item.english.toLowerCase()).findIndex(item => item === _value) === -1) {\r\n                            return [{\r\n                              type: \"error\",\r\n                              message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                            }]\r\n                         }\r\n            // if(value.toLowerCase().includes('nhhien'))             \r\n            //              return[{ \r\n            //                   type: 'warning',\r\n            //                   message: `Lookup warning value:${value}`}];\r\n    }\r\n    return await checkValidation(value);\r\n    }",
                "arguments": {}
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-20T08:36:01.247Z",
              "last_modified": "2019-12-18T06:42:19.187Z",
              "field_setting": {
                "field_id": "5dd4faf1dedee200147c149c",
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
              "_id": "5dd62f2cdedee200147c1501",
              "name": "A113",
              "field_display": "PO khác LI?",
              "default_value": "N",
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
                " Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T06:31:08.566Z",
              "last_modified": "2019-12-18T13:08:18.309Z",
              "field_setting": {
                "field_id": "5dd62f2cdedee200147c1501",
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
              "_id": "5dd63058dedee200147c1504",
              "name": "A116",
              "field_display": "Họ",
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
                "name": "Text Tiếng Việt",
                "arguments": {
                  "field": "A123"
                },
                "content": "var regex1 = /[^\\sA-Za-zsáàảãạâăắằẳẵặặấầẩẫậéèẻẽẹêếềểễệíìỉĩịóòỏõọôơốồổỗộớờởỡợúùủũụưứừửữựýỳỷỹỵđÁÀẢÃẠÂĂẮẰẲẴẶẶẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔƠỐỒỔỖỘỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴĐ]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập chữ \"}]\r\n}\r\n\r\nfunction checkRuleEqual(value_crr =\"\" , value_brd = \"\"){\r\n    value_crr = value_crr.trim()\r\n    value_brd = value_brd.toUpperCase().trim()\r\n    \r\n    if(value_brd===\"F\" && !value_crr || value_brd===\"M\" && !value_crr ){\r\n       return [{type : \"error\" , message : \"Field giới tính là F hoặc M thì field Họ buộc phải có giá trị\"}];\r\n    }\r\n}\r\n\r\nreturn checkRuleEqual(value, field);",
                "created_date": "2019-11-29T08:21:01.677Z",
                "last_modified": "2019-11-29T08:33:51.062Z",
                "id": "5de0d4eddedee200147c1603"
              },
              "rule_transform": {
                "name": "Name_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nfunction transformGivenSurname(field_value) {\r\n  field_value = field_value.trim();\r\n  var fullString = '';\r\n  var arr_char = ['ß'];\r\n  if(field_value.includes(' ')){\r\n  \tvar arr = field_value.split(' ');\r\n    for(var i = 0 ; i < arr.length; i++){\r\n    \tvar strChild = arr[i];\r\n        if(strChild === strChild.toLowerCase() || strChild === strChild.toUpperCase()){\r\n \t       \tif(arr_char.includes(strChild.substring(0,1))){\r\n\t\t\t\tstrChild = strChild.substring(0,1) + strChild.substring(1,strChild.length).toLowerCase();\r\n          \t\tfullString += strChild + ' ';\r\n\t\t\t}else{\r\n           \t\tstrChild = strChild.substring(0,1).toUpperCase() + strChild.substring(1,strChild.length).toLowerCase();\r\n          \t\tfullString += strChild + ' ';\r\n            }\r\n          \r\n        }else{\r\n            strChild = strChild.substring(0,1).toUpperCase() + strChild.substring(1,strChild.length).toLowerCase();\r\n            fullString += strChild + ' ';\r\n        }\r\n    }\r\n  }else{\r\n  \tif(field_value === field_value.toLowerCase() || field_value === field_value.toUpperCase()){\r\n    \tif(arr_char.includes(field_value.substring(0,1))){\r\n\t\t\tfield_value = field_value.substring(0,1) + field_value.substring(1,field_value.length).toLowerCase();\r\n     \t\tfullString = field_value;\r\n\t\t}else{\r\n        \tfield_value = field_value.substring(0,1).toUpperCase() + field_value.substring(1,field_value.length).toLowerCase();\r\n      \t\tfullString = field_value;\r\n\t\t}\r\n      \r\n    }else{\r\n        field_value = field_value.substring(0,1).toUpperCase() + field_value.substring(1,field_value.length).toLowerCase();\r\n        fullString = field_value;\r\n    }\r\n  }\r\n  return fullString.trim();\r\n}\r\nreturn transformGivenSurname(removeSpace(value));",
                "created_date": "2019-11-29T09:40:49.056Z",
                "last_modified": "2019-11-29T09:45:36.834Z",
                "id": "5de0e7a1dedee200147c1612"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T06:36:08.979Z",
              "last_modified": "2020-01-14T03:53:22.794Z",
              "field_setting": {
                "field_id": "5dd63058dedee200147c1504",
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
              "_id": "5dd63067dedee200147c1505",
              "name": "A117",
              "field_display": "Tên Lót",
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
                "name": "Text Tiếng Việt",
                "arguments": {},
                "content": "var regex1 = /[^\\sA-Za-zsáàảãạâăắằẳẵặặấầẩẫậéèẻẽẹêếềểễệíìỉĩịóòỏõọôơốồổỗộớờởỡợúùủũụưứừửữựýỳỷỹỵđÁÀẢÃẠÂĂẮẰẲẴẶẶẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔƠỐỒỔỖỘỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴĐ]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập chữ \"}]\r\n}\r\n",
                "created_date": "2019-11-29T08:21:01.677Z",
                "last_modified": "2019-11-29T08:33:51.062Z",
                "id": "5de0d4eddedee200147c1603"
              },
              "rule_transform": {
                "name": "Name_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nfunction transformGivenSurname(field_value) {\r\n  field_value = field_value.trim();\r\n  var fullString = '';\r\n  var arr_char = ['ß'];\r\n  if(field_value.includes(' ')){\r\n  \tvar arr = field_value.split(' ');\r\n    for(var i = 0 ; i < arr.length; i++){\r\n    \tvar strChild = arr[i];\r\n        if(strChild === strChild.toLowerCase() || strChild === strChild.toUpperCase()){\r\n \t       \tif(arr_char.includes(strChild.substring(0,1))){\r\n\t\t\t\tstrChild = strChild.substring(0,1) + strChild.substring(1,strChild.length).toLowerCase();\r\n          \t\tfullString += strChild + ' ';\r\n\t\t\t}else{\r\n           \t\tstrChild = strChild.substring(0,1).toUpperCase() + strChild.substring(1,strChild.length).toLowerCase();\r\n          \t\tfullString += strChild + ' ';\r\n            }\r\n          \r\n        }else{\r\n            strChild = strChild.substring(0,1).toUpperCase() + strChild.substring(1,strChild.length).toLowerCase();\r\n            fullString += strChild + ' ';\r\n        }\r\n    }\r\n  }else{\r\n  \tif(field_value === field_value.toLowerCase() || field_value === field_value.toUpperCase()){\r\n    \tif(arr_char.includes(field_value.substring(0,1))){\r\n\t\t\tfield_value = field_value.substring(0,1) + field_value.substring(1,field_value.length).toLowerCase();\r\n     \t\tfullString = field_value;\r\n\t\t}else{\r\n        \tfield_value = field_value.substring(0,1).toUpperCase() + field_value.substring(1,field_value.length).toLowerCase();\r\n      \t\tfullString = field_value;\r\n\t\t}\r\n      \r\n    }else{\r\n        field_value = field_value.substring(0,1).toUpperCase() + field_value.substring(1,field_value.length).toLowerCase();\r\n        fullString = field_value;\r\n    }\r\n  }\r\n  return fullString.trim();\r\n}\r\nreturn transformGivenSurname(removeSpace(value));",
                "created_date": "2019-11-29T09:40:49.056Z",
                "last_modified": "2019-11-29T09:45:36.834Z",
                "id": "5de0e7a1dedee200147c1612"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T06:36:23.189Z",
              "last_modified": "2019-11-29T09:49:23.758Z",
              "field_setting": {
                "field_id": "5dd63067dedee200147c1505",
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
              "_id": "5dd63077dedee200147c1506",
              "name": "A118",
              "field_display": "Tên",
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
                "name": "Text Tiếng Việt",
                "arguments": {
                  "field": "A123"
                },
                "content": "var regex1 = /[^\\sA-Za-zsáàảãạâăắằẳẵặặấầẩẫậéèẻẽẹêếềểễệíìỉĩịóòỏõọôơốồổỗộớờởỡợúùủũụưứừửữựýỳỷỹỵđÁÀẢÃẠÂĂẮẰẲẴẶẶẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔƠỐỒỔỖỘỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴĐ]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập chữ \"}]\r\n}\r\n\r\nfunction checkRuleEqual(value_crr =\"\" , value_brd = \"\"){\r\n    value_crr = value_crr.trim()\r\n    value_brd = value_brd.toUpperCase().trim()\r\n    \r\n    if(value_brd===\"F\" && !value_crr || value_brd===\"M\" && !value_crr ){\r\n        return [{type : \"error\" , message : \"Field giới tính là F hoặc M thì field Tên buộc phải có giá trị\"}];\r\n    }\r\n}\r\n\r\nreturn checkRuleEqual(value, field);",
                "created_date": "2019-11-29T08:21:01.677Z",
                "last_modified": "2019-11-29T08:33:51.062Z",
                "id": "5de0d4eddedee200147c1603"
              },
              "rule_transform": {
                "name": "Name_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nfunction transformGivenSurname(field_value) {\r\n  field_value = field_value.trim();\r\n  var fullString = '';\r\n  var arr_char = ['ß'];\r\n  if(field_value.includes(' ')){\r\n  \tvar arr = field_value.split(' ');\r\n    for(var i = 0 ; i < arr.length; i++){\r\n    \tvar strChild = arr[i];\r\n        if(strChild === strChild.toLowerCase() || strChild === strChild.toUpperCase()){\r\n \t       \tif(arr_char.includes(strChild.substring(0,1))){\r\n\t\t\t\tstrChild = strChild.substring(0,1) + strChild.substring(1,strChild.length).toLowerCase();\r\n          \t\tfullString += strChild + ' ';\r\n\t\t\t}else{\r\n           \t\tstrChild = strChild.substring(0,1).toUpperCase() + strChild.substring(1,strChild.length).toLowerCase();\r\n          \t\tfullString += strChild + ' ';\r\n            }\r\n          \r\n        }else{\r\n            strChild = strChild.substring(0,1).toUpperCase() + strChild.substring(1,strChild.length).toLowerCase();\r\n            fullString += strChild + ' ';\r\n        }\r\n    }\r\n  }else{\r\n  \tif(field_value === field_value.toLowerCase() || field_value === field_value.toUpperCase()){\r\n    \tif(arr_char.includes(field_value.substring(0,1))){\r\n\t\t\tfield_value = field_value.substring(0,1) + field_value.substring(1,field_value.length).toLowerCase();\r\n     \t\tfullString = field_value;\r\n\t\t}else{\r\n        \tfield_value = field_value.substring(0,1).toUpperCase() + field_value.substring(1,field_value.length).toLowerCase();\r\n      \t\tfullString = field_value;\r\n\t\t}\r\n      \r\n    }else{\r\n        field_value = field_value.substring(0,1).toUpperCase() + field_value.substring(1,field_value.length).toLowerCase();\r\n        fullString = field_value;\r\n    }\r\n  }\r\n  return fullString.trim();\r\n}\r\nreturn transformGivenSurname(removeSpace(value));",
                "created_date": "2019-11-29T09:40:49.056Z",
                "last_modified": "2019-11-29T09:45:36.834Z",
                "id": "5de0e7a1dedee200147c1612"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T06:36:39.854Z",
              "last_modified": "2020-01-14T03:52:47.611Z",
              "field_setting": {
                "field_id": "5dd63077dedee200147c1506",
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
              "_id": "5dd6309ddedee200147c1507",
              "name": "A119",
              "field_display": "Ngày tháng năm sinh",
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
                "name": "Date",
                "arguments": {},
                "content": "function chkDate(date){\r\n\tvar dd = date.substring(0,2);\r\n\tvar mm = date.substring(2,4);\r\n\tvar yy = date.substring(4,6);\r\n\tvar tmpDate = new Date();\r\n\tvar y = tmpDate.getFullYear()+\"\";\r\n\ty = y.substring(2,4)*1 + 1;\r\n\r\n\t//Gan gia tri nam la 19YY neu YY > nam hien tai + 1\r\n\t//Gan gia tri nam la 20YY neu YY <= nam hien tai + 1\r\n\tif(yy*1>y){ yy = 19+yy;\r\n\t}else {yy = 20+yy;}\r\n\r\n\treturn dd+mm+yy;\t\r\n}\r\n\r\nfunction formatdate(ngay_hieu_luc_in78){\r\nvar fvalue = ngay_hieu_luc_in78;\r\n\tvar regex = /^(?:(?:31(|\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(|\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(|\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(|\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$/\r\n\tvar regex1 = /^\\d{6}$/;\r\n\tvar regex2 = /^(\\s*|[0-9\\.\\/\\-]+)$/ ;\r\n\tvar date;\r\nif(fvalue === \"\") return ;\r\n\tif(regex1.test(fvalue))\r\n\treturn ;\r\n\tif(regex2.test(fvalue)){\r\n\t\r\n\tif(!regex.test(fvalue)){\r\n\t\treturn [{type:\"warning\",message:\"Ngày Tháng Năm không phù hợp, vui lòng kiểm tra lại.\"}]\r\n\t}\r\n}else{\r\n    return [{type:\"error\",message:\"Không đúng định dạng ddmmyyyy\"}]\r\n}\r\nfvalue = fvalue.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'');\r\nif(fvalue.length === 6){\r\n\tfvalue = chkDate(fvalue);\r\n}\r\nvar dd = fvalue.substring(0, 2);\r\nvar mm = fvalue.substring(2, 4);\r\nvar yy = fvalue.substring(4, 8);\r\nvar tmpDate = new Date();\r\nvar d = tmpDate.getDate();\r\nvar m = tmpDate.getMonth();\r\nvar y = tmpDate.getFullYear();\r\nvar inputDate = new Date(yy, mm - 1, dd);\r\nvar curDate = new Date(y, m, d);\r\n\r\n\r\n\r\n//So sanh ngay nhap voi ngay hien tai\r\nif (inputDate > curDate) {\r\n return [{type:\"warning\", message:\"Năm nhập lớn hơn năm hiện tại\"}]\r\n}\r\n\r\n\r\n}\r\n\r\nreturn formatdate(value);",
                "created_date": "2019-11-28T06:50:27.116Z",
                "last_modified": "2019-11-28T06:50:27.116Z",
                "id": "5ddf6e33dedee200147c15f7"
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
              "text_type": "DATE",
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T06:37:17.507Z",
              "last_modified": "2019-12-18T03:10:39.435Z",
              "field_setting": {
                "field_id": "5dd6309ddedee200147c1507",
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
              "_id": "5dd641e9dedee200147c1508",
              "name": "A120",
              "field_display": "Nơi Sinh",
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
                "key_value": "value",
                "locale": [
                  "165_191128_340_SUNLIFE"
                ],
                "lookup_after_time": 1,
                "lookup_field": "birthplace",
                "name": "Sunlife_BirthPlace",
                "param_set": "return [data.A120]",
                "result_view_config": [
                  {
                    "title": "Birth Place",
                    "key_value": "value"
                  }
                ],
                "related_columns": [],
                "specific_project": "0",
                "created_date": "2019-12-10T02:44:01.404Z",
                "last_modified": "2019-12-10T02:44:01.404Z",
                "id": "5def0671d3f551001f8958b4"
              },
              "validation": {
                "name": "",
                "content": "if (value){\r\n    async function checkValidation(value) {\r\n            let dataLookup =  await fetchJSON(`https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/birthplace/[%22${value}%22]`);\r\n            let _value =value.toLowerCase(); \r\n            if (!Array.isArray(dataLookup.json_single)||dataLookup.json_single.map(item => item.value.toLowerCase()).findIndex(item => item === _value) === -1) {\r\n                            return [{\r\n                              type: \"error\",\r\n                              message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                            }]\r\n                         }\r\n            // if(value.toLowerCase().includes('nhhien'))             \r\n            //              return[{ \r\n            //                   type: 'warning',\r\n            //                   message: `Lookup warning value:${value}`}];\r\n    }\r\n    return await checkValidation(value);\r\n    }\r\n",
                "arguments": {}
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T07:51:05.598Z",
              "last_modified": "2019-12-18T06:54:46.302Z",
              "field_setting": {
                "field_id": "5dd641e9dedee200147c1508",
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
              "_id": "5dd641f7dedee200147c1509",
              "name": "A121",
              "field_display": "Quốc Tịch 1",
              "default_value": "Việt Nam",
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
              "validation": {
                "name": "",
                "content": "if (value){\r\n    async function checkValidation(value) {\r\n            let dataLookup =  await fetchJSON(`https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/nationality/[%22${value}%22]`);\r\n            let _value =value.toLowerCase(); \r\n            if (!Array.isArray(dataLookup.json_single)||dataLookup.json_single.map(item => item.value.toLowerCase()).findIndex(item => item === _value) === -1) {\r\n                            return [{\r\n                              type: \"error\",\r\n                              message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                            }]\r\n                         }\r\n            // if(value.toLowerCase().includes('nhhien'))             \r\n            //              return[{ \r\n            //                   type: 'warning',\r\n            //                   message: `Lookup warning value:${value}`}];\r\n    }\r\n    return await checkValidation(value);\r\n    }",
                "arguments": {}
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T07:51:19.215Z",
              "last_modified": "2020-01-14T03:14:09.269Z",
              "field_setting": {
                "field_id": "5dd641f7dedee200147c1509",
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
              "_id": "5dd64207dedee200147c150a",
              "name": "A122",
              "field_display": "Quốc tịch 2 (Nếu có)",
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
              "validation": {
                "name": "",
                "content": "if (value){\r\n    async function checkValidation(value) {\r\n            let dataLookup =  await fetchJSON(`https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/nationality/[%22${value}%22]`);\r\n            let _value =value.toLowerCase(); \r\n            if (!Array.isArray(dataLookup.json_single)||dataLookup.json_single.map(item => item.value.toLowerCase()).findIndex(item => item === _value) === -1) {\r\n                            return [{\r\n                              type: \"error\",\r\n                              message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                            }]\r\n                         }\r\n            // if(value.toLowerCase().includes('nhhien'))             \r\n            //              return[{ \r\n            //                   type: 'warning',\r\n            //                   message: `Lookup warning value:${value}`}];\r\n    }\r\n    return await checkValidation(value);\r\n    }",
                "arguments": {}
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T07:51:35.487Z",
              "last_modified": "2019-12-18T06:39:44.082Z",
              "field_setting": {
                "field_id": "5dd64207dedee200147c150a",
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
              "_id": "5dd6425ededee200147c150b",
              "name": "A123",
              "field_display": "Giới tính",
              "default_value": "",
              "control_type": "TEXTFIELD",
              "tooltip": "",
              "is_list": false,
              "counted_character": true,
              "pattern": {
                "name": "",
                "arguments": {},
                "content": "^[MmFfCc]{0,1}$",
                "description": "Chỉ được nhập M hoặc F hoặc C"
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
                "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value.toUpperCase());",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T07:53:02.611Z",
              "last_modified": "2019-12-24T08:29:00.490Z",
              "field_setting": {
                "field_id": "5dd6425ededee200147c150b",
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
                "double_typing": false,
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
              "_id": "5dd64267dedee200147c150c",
              "name": "A124",
              "field_display": "Tình trạng hôn nhân",
              "default_value": "",
              "control_type": "TEXTFIELD",
              "tooltip": "",
              "is_list": false,
              "counted_character": true,
              "pattern": {
                "name": "",
                "arguments": {},
                "content": "^[DdMmSsWwOo]{0,1}$",
                "description": "Chỉ được nhập 1 trong các ký tự: D M S W O"
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
                "content": "if(!value){\r\n    return [{type:\"error\",message:\"Không được bỏ trống\"}]\r\n}",
                "arguments": {}
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value.toUpperCase());",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T07:53:11.677Z",
              "last_modified": "2019-12-24T08:53:05.111Z",
              "field_setting": {
                "field_id": "5dd64267dedee200147c150c",
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
                "double_typing": false,
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
              "visible": true,
              "disable": false,
              "double_typing": false
            },
            {
              "_id": "5dd64282dedee200147c150d",
              "name": "A125",
              "field_display": "Loại Giấy Tờ",
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
                "content": "if(!value){\n    return [{type : \"error\", message: \"Vui lòng chọn loại giấy tờ\"}]\n}",
                "arguments": {}
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [
                "CMND",
                "Passport",
                "CCCD",
                "Giấy Khai Sinh"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T07:53:38.594Z",
              "last_modified": "2020-01-16T09:38:55.273Z",
              "field_setting": {
                "field_id": "5dd64282dedee200147c150d",
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
                "double_typing": false,
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
              "visible": true,
              "disable": false,
              "double_typing": false
            },
            {
              "_id": "5dd648f7dedee200147c150e",
              "name": "A126",
              "field_display": "Số giấy tờ tùy thân",
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
                "name": "Text + Number",
                "arguments": {
                  "given": "A125"
                },
                "content": "function checkCharacter(value) {\r\n\r\n    if(!value){\r\n        return false;\r\n    }else{\r\n        return true;\r\n    }\r\n  }\r\nfunction checkEqualGiven(surname_value =\"\" , given_value = \"\"){\r\n      surname_value = surname_value.trim()\r\n      given_value = given_value.trim()\r\n      var regex1 = /^[0-9]{9}$/;\r\n      var regex2 = /^[0-9]{12}$/;\r\n      var regex3 = /^[A-Z0-9]{8,9}$/;\r\n\r\n      if(!regex1.test(surname_value) && given_value === \"CMND\"){\r\n          return [{type : \"error\" , message : \"CMND chỉ nhập 9 số\"}];\r\n      }else\r\n      if(!regex2.test(surname_value) && given_value === \"CCCD\"){\r\n          return [{type : \"error\" , message : \"CCCD chỉ nhập 12 số\"}];\r\n      }else\r\n      if(!regex3.test(surname_value) && given_value === \"Passport\"){\r\n          return [{type : \"error\" , message : \"Passport chỉ nhập chữ in và 8 hoặc 9 số\"}];\r\n      }\r\n     \r\n     return;\r\n  }\r\n  \r\nfunction checkError(value){\r\n      if(checkCharacter(value) === true){\r\n          \r\n             return checkEqualGiven(value, given);\r\n              \r\n      }else{\r\n          return [{type : \"warning\" , message : \"Không có số giấy tờ tùy thân\"}];\r\n      }\r\n  }\r\n  \r\nreturn checkError(value);",
                "created_date": "2019-11-28T06:46:23.478Z",
                "last_modified": "2019-11-29T08:25:58.570Z",
                "id": "5ddf6d3fdedee200147c15f6"
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T08:21:11.577Z",
              "last_modified": "2019-12-24T11:38:40.124Z",
              "field_setting": {
                "field_id": "5dd648f7dedee200147c150e",
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
              "_id": "5dd6490ddedee200147c150f",
              "name": "A127",
              "field_display": "Ngày cấp",
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
                "name": "Date",
                "arguments": {},
                "content": "function chkDate(date){\r\n\tvar dd = date.substring(0,2);\r\n\tvar mm = date.substring(2,4);\r\n\tvar yy = date.substring(4,6);\r\n\tvar tmpDate = new Date();\r\n\tvar y = tmpDate.getFullYear()+\"\";\r\n\ty = y.substring(2,4)*1 + 1;\r\n\r\n\t//Gan gia tri nam la 19YY neu YY > nam hien tai + 1\r\n\t//Gan gia tri nam la 20YY neu YY <= nam hien tai + 1\r\n\tif(yy*1>y){ yy = 19+yy;\r\n\t}else {yy = 20+yy;}\r\n\r\n\treturn dd+mm+yy;\t\r\n}\r\n\r\nfunction formatdate(ngay_hieu_luc_in78){\r\nvar fvalue = ngay_hieu_luc_in78;\r\n\tvar regex = /^(?:(?:31(|\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(|\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(|\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(|\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$/\r\n\tvar regex1 = /^\\d{6}$/;\r\n\tvar regex2 = /^(\\s*|[0-9\\.\\/\\-]+)$/ ;\r\n\tvar date;\r\nif(fvalue === \"\") return ;\r\n\tif(regex1.test(fvalue))\r\n\treturn ;\r\n\tif(regex2.test(fvalue)){\r\n\t\r\n\tif(!regex.test(fvalue)){\r\n\t\treturn [{type:\"warning\",message:\"Ngày Tháng Năm không phù hợp, vui lòng kiểm tra lại.\"}]\r\n\t}\r\n}else{\r\n    return [{type:\"error\",message:\"Không đúng định dạng ddmmyyyy\"}]\r\n}\r\nfvalue = fvalue.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'');\r\nif(fvalue.length === 6){\r\n\tfvalue = chkDate(fvalue);\r\n}\r\nvar dd = fvalue.substring(0, 2);\r\nvar mm = fvalue.substring(2, 4);\r\nvar yy = fvalue.substring(4, 8);\r\nvar tmpDate = new Date();\r\nvar d = tmpDate.getDate();\r\nvar m = tmpDate.getMonth();\r\nvar y = tmpDate.getFullYear();\r\nvar inputDate = new Date(yy, mm - 1, dd);\r\nvar curDate = new Date(y, m, d);\r\n\r\n\r\n\r\n//So sanh ngay nhap voi ngay hien tai\r\nif (inputDate > curDate) {\r\n return [{type:\"warning\", message:\"Năm nhập lớn hơn năm hiện tại\"}]\r\n}\r\n\r\n\r\n}\r\n\r\nreturn formatdate(value);",
                "created_date": "2019-11-28T06:50:27.116Z",
                "last_modified": "2019-11-28T06:50:27.116Z",
                "id": "5ddf6e33dedee200147c15f7"
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
              "text_type": "DATE",
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T08:21:33.209Z",
              "last_modified": "2019-12-18T03:11:04.950Z",
              "field_setting": {
                "field_id": "5dd6490ddedee200147c150f",
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
              "_id": "5dd50058dedee200147c14a6",
              "name": "A37",
              "field_display": "Định kì đóng phí_PO",
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
                "content": "if(!value){\n    return [{type : \"warning\" , message : \"Field đang trống, vui lòng kiểm tra lại trước khi save\"}];\n}",
                "arguments": {}
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [
                "01",
                "03",
                "06",
                "12"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-20T08:59:04.692Z",
              "last_modified": "2020-02-04T06:35:32.958Z",
              "field_setting": {
                "field_id": "5dd50058dedee200147c14a6",
                "visible": true,
                "disable": false,
                "double_typing": false,
                "argument_details": [
                  {
                    "value": "1"
                  },
                  {
                    "value": "3"
                  },
                  {
                    "value": "6"
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
              "visible": true,
              "disable": false,
              "double_typing": false
            },
            {
              "_id": "5dd508e7dedee200147c14af",
              "name": "A43",
              "field_display": "Tên tổ chức",
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
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-20T09:35:35.440Z",
              "last_modified": "2019-12-02T03:53:12.771Z",
              "field_setting": {
                "field_id": "5dd508e7dedee200147c14af",
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
              "_id": "5dd5092ededee200147c14b0",
              "name": "A44",
              "field_display": "Tỷ lệ thụ hưởng",
              "default_value": "",
              "control_type": "TEXTFIELD",
              "tooltip": "",
              "is_list": false,
              "counted_character": true,
              "pattern": {
                "name": "",
                "arguments": {},
                "content": "^(\\s|[0-9]{0,3})$",
                "description": "Không được nhập quá 3 ký tự số"
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
                "arguments": {
                  "field": "A41"
                },
                "content": "function checkSumPlus(value_crr =\"\" , value_brd = \"\"){\n    value_crr = parseInt(value_crr.trim()) || 0\n    value_brd = parseInt(value_brd.trim()) || 0\n    sum = value_crr + value_brd\n    if(sum > 100 ){\n       return [{type : \"error\" , message : \"Tổng Tỷ lệ thụ hưởng ben và Tỷ lệ thụ hưởng tổ chức không được lớn hơn 100\"}];\n    }\n}\n\nreturn checkSumPlus(value, field);",
                "created_date": "2019-11-29T08:49:07.590Z",
                "last_modified": "2019-11-29T08:49:07.590Z",
                "id": "5de0db83dedee200147c1611"
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-20T09:36:46.422Z",
              "last_modified": "2020-01-16T09:43:50.111Z",
              "field_setting": {
                "field_id": "5dd5092ededee200147c14b0",
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
              "_id": "5dd4faffdedee200147c149d",
              "name": "A500",
              "field_display": "US TIN",
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
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-20T08:36:15.040Z",
              "last_modified": "2019-12-02T06:15:27.445Z",
              "field_setting": {
                "field_id": "5dd4faffdedee200147c149d",
                "visible": true,
                "disable": false,
                "dynamic_by_field": {
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
                  ],
                  "effect": "visible"
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
              "_id": "5dd4fb10dedee200147c149e",
              "name": "A501",
              "field_display": "Type IRS Form",
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
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [
                "W8E",
                "W9"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-20T08:36:32.120Z",
              "last_modified": "2019-12-02T06:16:04.105Z",
              "field_setting": {
                "field_id": "5dd4fb10dedee200147c149e",
                "visible": true,
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
                "double_typing": false,
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
              "visible": true,
              "disable": false,
              "double_typing": false
            },
            {
              "_id": "5dd4fc54dedee200147c149f",
              "name": "A502",
              "field_display": "IRS Form Status",
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
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [
                "Complete",
                "Incomplete"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-20T08:41:56.532Z",
              "last_modified": "2019-12-02T06:16:22.294Z",
              "field_setting": {
                "field_id": "5dd4fc54dedee200147c149f",
                "visible": true,
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
                "double_typing": false,
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
              "visible": true,
              "disable": false,
              "double_typing": false
            },
            {
              "_id": "5dd4ffb6dedee200147c14a0",
              "name": "A503",
              "field_display": "Date of IRS Form",
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
                "name": "Date",
                "arguments": {},
                "content": "function chkDate(date){\r\n\tvar dd = date.substring(0,2);\r\n\tvar mm = date.substring(2,4);\r\n\tvar yy = date.substring(4,6);\r\n\tvar tmpDate = new Date();\r\n\tvar y = tmpDate.getFullYear()+\"\";\r\n\ty = y.substring(2,4)*1 + 1;\r\n\r\n\t//Gan gia tri nam la 19YY neu YY > nam hien tai + 1\r\n\t//Gan gia tri nam la 20YY neu YY <= nam hien tai + 1\r\n\tif(yy*1>y){ yy = 19+yy;\r\n\t}else {yy = 20+yy;}\r\n\r\n\treturn dd+mm+yy;\t\r\n}\r\n\r\nfunction formatdate(ngay_hieu_luc_in78){\r\nvar fvalue = ngay_hieu_luc_in78;\r\n\tvar regex = /^(?:(?:31(|\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(|\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(|\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(|\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$/\r\n\tvar regex1 = /^\\d{6}$/;\r\n\tvar regex2 = /^(\\s*|[0-9\\.\\/\\-]+)$/ ;\r\n\tvar date;\r\nif(fvalue === \"\") return ;\r\n\tif(regex1.test(fvalue))\r\n\treturn ;\r\n\tif(regex2.test(fvalue)){\r\n\t\r\n\tif(!regex.test(fvalue)){\r\n\t\treturn [{type:\"warning\",message:\"Ngày Tháng Năm không phù hợp, vui lòng kiểm tra lại.\"}]\r\n\t}\r\n}else{\r\n    return [{type:\"error\",message:\"Không đúng định dạng ddmmyyyy\"}]\r\n}\r\nfvalue = fvalue.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'');\r\nif(fvalue.length === 6){\r\n\tfvalue = chkDate(fvalue);\r\n}\r\nvar dd = fvalue.substring(0, 2);\r\nvar mm = fvalue.substring(2, 4);\r\nvar yy = fvalue.substring(4, 8);\r\nvar tmpDate = new Date();\r\nvar d = tmpDate.getDate();\r\nvar m = tmpDate.getMonth();\r\nvar y = tmpDate.getFullYear();\r\nvar inputDate = new Date(yy, mm - 1, dd);\r\nvar curDate = new Date(y, m, d);\r\n\r\n\r\n\r\n//So sanh ngay nhap voi ngay hien tai\r\nif (inputDate > curDate) {\r\n return [{type:\"warning\", message:\"Năm nhập lớn hơn năm hiện tại\"}]\r\n}\r\n\r\n\r\n}\r\n\r\nreturn formatdate(value);",
                "created_date": "2019-11-28T06:50:27.116Z",
                "last_modified": "2019-11-28T06:50:27.116Z",
                "id": "5ddf6e33dedee200147c15f7"
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
              "text_type": "DATE",
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-20T08:56:22.416Z",
              "last_modified": "2019-12-18T03:11:17.848Z",
              "field_setting": {
                "field_id": "5dd4ffb6dedee200147c14a0",
                "visible": true,
                "disable": false,
                "dynamic_by_field": {
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
                  ],
                  "effect": "visible"
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
              "_id": "5dd4ffe6dedee200147c14a1",
              "name": "A32",
              "field_display": "Khai báo FATCA",
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
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-20T08:57:10.934Z",
              "last_modified": "2019-12-02T06:25:52.487Z",
              "field_setting": {
                "field_id": "5dd4ffe6dedee200147c14a1",
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
              "_id": "5dd50011dedee200147c14a2",
              "name": "A33",
              "field_display": "Nếu có, Vui lòng cung cấp mã số thuế Hoa Kỳ (TIN)",
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
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-20T08:57:53.418Z",
              "last_modified": "2019-12-02T06:27:55.484Z",
              "field_setting": {
                "field_id": "5dd50011dedee200147c14a2",
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
              "_id": "5dd50024dedee200147c14a3",
              "name": "A34",
              "field_display": "BMBH Là tổ chức, nếu có nộp form W8BEN",
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
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-20T08:58:12.342Z",
              "last_modified": "2019-12-02T06:28:21.726Z",
              "field_setting": {
                "field_id": "5dd50024dedee200147c14a3",
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
              "_id": "5dd509fededee200147c14b4",
              "name": "A48",
              "field_display": "Quý khách có các hợp đồng bảo hiểm còn đang hiệu lực",
              "default_value": "N",
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
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-20T09:40:14.445Z",
              "last_modified": "2019-12-18T13:07:29.323Z",
              "field_setting": {
                "field_id": "5dd509fededee200147c14b4",
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
              "_id": "5dd50a3ededee200147c14b5",
              "name": "A49",
              "field_display": "Công ty bảo hiểm",
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
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-20T09:41:18.377Z",
              "last_modified": "2019-11-20T09:41:18.377Z",
              "field_setting": {
                "field_id": "5dd50a3ededee200147c14b5",
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
                        "section": "Personal",
                        "rule": "must_equal",
                        "field": "A48"
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
              "_id": "5dd50a79dedee200147c14b6",
              "name": "A50",
              "field_display": "Tên sản phẩm bảo hiểm_PO",
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
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-20T09:42:17.166Z",
              "last_modified": "2019-12-02T06:37:10.071Z",
              "field_setting": {
                "field_id": "5dd50a79dedee200147c14b6",
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
                        "section": "Personal",
                        "rule": "must_equal",
                        "field": "A48"
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
              "_id": "5dd50a86dedee200147c14b7",
              "name": "A51",
              "field_display": "Tổng số tiền bảo hiểm_PO",
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
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-20T09:42:30.255Z",
              "last_modified": "2019-12-02T06:37:41.470Z",
              "field_setting": {
                "field_id": "5dd50a86dedee200147c14b7",
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
                        "section": "Personal",
                        "rule": "must_equal",
                        "field": "A48"
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
              "_id": "5dd50a8fdedee200147c14b8",
              "name": "A52",
              "field_display": "Năm phát hành hợp đồng_PO",
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
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-20T09:42:39.081Z",
              "last_modified": "2019-12-02T06:38:07.743Z",
              "field_setting": {
                "field_id": "5dd50a8fdedee200147c14b8",
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
                        "section": "Personal",
                        "rule": "must_equal",
                        "field": "A48"
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
              "_id": "5dd50d1adedee200147c14bb",
              "name": "A53",
              "field_display": "Tình trạng hợp đồng_PO",
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
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-20T09:53:30.066Z",
              "last_modified": "2019-12-02T06:38:32.559Z",
              "field_setting": {
                "field_id": "5dd50d1adedee200147c14bb",
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
                        "section": "Personal",
                        "rule": "must_equal",
                        "field": "A48"
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
              "_id": "5dece19fd3f551001f89589f",
              "name": "A606",
              "field_display": "Quý khách có các hợp đồng bảo hiểm còn đang hiệu lực",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-08T11:42:23.038Z",
              "last_modified": "2019-12-18T13:07:38.445Z",
              "field_setting": {
                "field_id": "5dece19fd3f551001f89589f",
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
              "_id": "5dece116d3f551001f89589e",
              "name": "A600",
              "field_display": "Công ty bảo hiểm_LI",
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
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-08T11:40:06.278Z",
              "last_modified": "2019-12-08T11:40:06.278Z",
              "field_setting": {
                "field_id": "5dece116d3f551001f89589e",
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
                        "section": "Personal",
                        "rule": "must_equal",
                        "field": "A606"
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
              "_id": "5de4b1b3dedee200147c1620",
              "name": "A513",
              "field_display": "Tên sản phẩm bảo hiểm_LI",
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
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T06:39:47.424Z",
              "last_modified": "2019-12-02T06:39:47.424Z",
              "field_setting": {
                "field_id": "5de4b1b3dedee200147c1620",
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
                        "section": "Personal",
                        "rule": "must_equal",
                        "field": "A606"
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
              "_id": "5de4b1dfdedee200147c1623",
              "name": "A514",
              "field_display": "Tổng số tiền bảo hiểm_LI",
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
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T06:40:31.976Z",
              "last_modified": "2019-12-02T06:40:31.976Z",
              "field_setting": {
                "field_id": "5de4b1dfdedee200147c1623",
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
                        "section": "Personal",
                        "rule": "must_equal",
                        "field": "A606"
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
              "_id": "5de4b1f1dedee200147c1624",
              "name": "A515",
              "field_display": "Năm phát hành hợp đồng_LI",
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
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T06:40:49.297Z",
              "last_modified": "2019-12-02T06:40:49.297Z",
              "field_setting": {
                "field_id": "5de4b1f1dedee200147c1624",
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
                        "section": "Personal",
                        "rule": "must_equal",
                        "field": "A606"
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
              "_id": "5de4b201dedee200147c1625",
              "name": "A516",
              "field_display": "Tình trạng hợp đồng_LI",
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
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T06:41:05.082Z",
              "last_modified": "2019-12-02T06:41:05.082Z",
              "field_setting": {
                "field_id": "5de4b201dedee200147c1625",
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
                        "section": "Personal",
                        "rule": "must_equal",
                        "field": "A606"
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
              "_id": "5dde2e85dedee200147c15b4",
              "name": "O41",
              "field_display": "Xác định bên thứ ba/ chủ sỡ hữu hưởng lợi",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-27T08:06:29.202Z",
              "last_modified": "2019-12-18T13:26:56.336Z",
              "field_setting": {
                "field_id": "5dde2e85dedee200147c15b4",
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
              "_id": "5dd50345dedee200147c14aa",
              "name": "A38",
              "field_display": "Ngày hiệu lực của HĐ bảo hiểm",
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
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-20T09:11:33.166Z",
              "last_modified": "2019-12-02T06:34:33.220Z",
              "field_setting": {
                "field_id": "5dd50345dedee200147c14aa",
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
              "_id": "5dece019d3f551001f89589a",
              "name": "A601",
              "field_display": "Ngày ký HSYCBH",
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
                "name": "Date",
                "arguments": {},
                "content": "if(!value){\r\n    return [{type : \"warning\" , message : \"Field đang trống, vui lòng kiểm tra lại trước khi save\"}];\r\n}\r\n\r\nfunction chkDate(date){\r\n\tvar dd = date.substring(0,2);\r\n\tvar mm = date.substring(2,4);\r\n\tvar yy = date.substring(4,6);\r\n\tvar tmpDate = new Date();\r\n\tvar y = tmpDate.getFullYear()+\"\";\r\n\ty = y.substring(2,4)*1 + 1;\r\n\r\n\t//Gan gia tri nam la 19YY neu YY > nam hien tai + 1\r\n\t//Gan gia tri nam la 20YY neu YY <= nam hien tai + 1\r\n\tif(yy*1>y){ yy = 19+yy;\r\n\t}else {yy = 20+yy;}\r\n\r\n\treturn dd+mm+yy;\t\r\n}\r\n\r\nfunction formatdate(ngay_hieu_luc_in78){\r\nvar fvalue = ngay_hieu_luc_in78;\r\n\tvar regex = /^(?:(?:31(|\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(|\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(|\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(|\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$/\r\n\tvar regex1 = /^\\d{6}$/;\r\n\tvar regex2 = /^(\\s*|[0-9\\.\\/\\-]+)$/ ;\r\n\tvar date;\r\nif(fvalue === \"\") return ;\r\n\tif(regex1.test(fvalue))\r\n\treturn ;\r\n\tif(regex2.test(fvalue)){\r\n\t\r\n\tif(!regex.test(fvalue)){\r\n\t\treturn [{type:\"warning\",message:\"Ngày Tháng Năm không phù hợp, vui lòng kiểm tra lại.\"}]\r\n\t}\r\n}else{\r\n    return [{type:\"error\",message:\"Không đúng định dạng ddmmyyyy\"}]\r\n}\r\nfvalue = fvalue.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'');\r\nif(fvalue.length === 6){\r\n\tfvalue = chkDate(fvalue);\r\n}\r\nvar dd = fvalue.substring(0, 2);\r\nvar mm = fvalue.substring(2, 4);\r\nvar yy = fvalue.substring(4, 8);\r\nvar tmpDate = new Date();\r\nvar d = tmpDate.getDate();\r\nvar m = tmpDate.getMonth();\r\nvar y = tmpDate.getFullYear();\r\nvar inputDate = new Date(yy, mm - 1, dd);\r\nvar curDate = new Date(y, m, d);\r\n\r\n\r\n\r\n//So sanh ngay nhap voi ngay hien tai\r\nif (inputDate > curDate) {\r\n return [{type:\"warning\", message:\"Năm nhập lớn hơn năm hiện tại\"}]\r\n}\r\n\r\n\r\n}\r\n\r\nreturn formatdate(value);",
                "created_date": "2019-11-28T06:50:27.116Z",
                "last_modified": "2019-11-28T06:50:27.116Z",
                "id": "5ddf6e33dedee200147c15f7"
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
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-08T11:35:53.070Z",
              "last_modified": "2020-01-14T04:37:32.065Z",
              "field_setting": {
                "field_id": "5dece019d3f551001f89589a",
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
              "_id": "5e202d624b5de3001add6319",
              "name": "RM1",
              "field_display": "Ghi Chú 1",
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
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2020-01-16T09:31:14.559Z",
              "last_modified": "2020-01-16T09:31:14.560Z",
              "field_setting": {
                "field_id": "5e202d624b5de3001add6319",
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
          "id": "5de0d7d9dedee200147c1606"
        },
        {
          "name": "Address",
          "layout_name": "Sunlife",
          "index": 1,
          "layout_id": "5de0d7d9dedee200147c1605",
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
              "_id": "5dd4f679dedee200147c148c",
              "name": "A15",
              "field_display": "Điện thoại nhà riêng",
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
                "name": "Number",
                "arguments": {},
                "content": "var regex1 = /[^\\s0-9]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n",
                "created_date": "2019-11-29T08:49:07.590Z",
                "last_modified": "2019-11-29T08:49:07.590Z",
                "id": "5de0db83dedee200147c1611"
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-20T08:16:57.864Z",
              "last_modified": "2019-11-29T08:51:22.273Z",
              "field_setting": {
                "field_id": "5dd4f679dedee200147c148c",
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
              "_id": "5dd4f680dedee200147c148d",
              "name": "A16",
              "field_display": "Điện thoại di động",
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
                "name": "Number",
                "arguments": {},
                "content": "var regex1 = /[^\\s0-9]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n",
                "created_date": "2019-11-29T08:49:07.590Z",
                "last_modified": "2019-11-29T08:49:07.590Z",
                "id": "5de0db83dedee200147c1611"
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-20T08:17:04.297Z",
              "last_modified": "2019-11-29T08:53:11.893Z",
              "field_setting": {
                "field_id": "5dd4f680dedee200147c148d",
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
              "_id": "5dd4f68fdedee200147c148e",
              "name": "A17",
              "field_display": "Địa chỉ email",
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
                "arguments": {},
                "content": "",
                "created_date": "2019-11-29T08:21:01.677Z",
                "last_modified": "2019-11-29T08:33:51.062Z",
                "id": "5de0d4eddedee200147c1603"
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-20T08:17:19.681Z",
              "last_modified": "2019-12-02T03:56:18.394Z",
              "field_setting": {
                "field_id": "5dd4f68fdedee200147c148e",
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
              "_id": "5dd4f917dedee200147c148f",
              "name": "A18",
              "field_display": "Nghề nghiệp",
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
                "key_value": "value",
                "locale": [
                  "165_191128_340_SUNLIFE"
                ],
                "lookup_after_time": 1,
                "lookup_field": "occupation",
                "name": "Sunlife_Occupation",
                "param_set": "return [data.A18]",
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
              "validation": {
                "name": "",
                "arguments": {},
                "content": "if (value){\r\n    async function checkValidation(value) {\r\n            let dataLookup =  await fetchJSON(`https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/occupation/[%22${value}%22]`);\r\n            let _value =value.toLowerCase(); \r\n            if (!Array.isArray(dataLookup.json_single)||dataLookup.json_single.map(item => item.value.toLowerCase()).findIndex(item => item === _value) === -1) {\r\n                            return [{\r\n                              type: \"error\",\r\n                              message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                            }]\r\n                         }\r\n            // if(value.toLowerCase().includes('nhhien'))             \r\n            //              return[{ \r\n            //                   type: 'warning',\r\n            //                   message: `Lookup warning value:${value}`}];\r\n    }\r\n    return await checkValidation(value);\r\n    }",
                "created_date": "2019-11-29T08:21:01.677Z",
                "last_modified": "2019-11-29T08:33:51.062Z",
                "id": "5de0d4eddedee200147c1603"
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-20T08:28:07.484Z",
              "last_modified": "2020-01-16T09:22:23.416Z",
              "field_setting": {
                "field_id": "5dd4f917dedee200147c148f",
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
              "_id": "5dd4f924dedee200147c1490",
              "name": "A19",
              "field_display": "Tên cơ quan",
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
                "name": "Text Tiếng Việt",
                "arguments": {},
                "content": "",
                "created_date": "2019-11-29T08:21:01.677Z",
                "last_modified": "2019-11-29T08:33:51.062Z",
                "id": "5de0d4eddedee200147c1603"
              },
              "rule_transform": {
                "name": "",
                "arguments": {},
                "content": "function removeSpace(input){\r\n    if (input.includes('?')) {\r\n        input = input.replace(/[?]{1,1000000}/g, '?');\r\n    }\r\n\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\tinput = input.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'-');\r\n\tinput = input.replace(/[\\s\\t]*(\\()[\\s\\t]*/g,' (');\r\n\tinput = input.replace(/[\\s\\t]*(\\))[\\s\\t]*/g,') ');\r\n    input = input.replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'/');\r\n    input = input.replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'. ');\r\n    input = input.replace(/[\\s\\t]*(\\,)[\\s\\t]*/g,', ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-20T08:28:20.864Z",
              "last_modified": "2019-12-17T06:59:44.617Z",
              "field_setting": {
                "field_id": "5dd4f924dedee200147c1490",
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
              "_id": "5dd4f930dedee200147c1491",
              "name": "A20",
              "field_display": "Thu nhập ước tính hàng năm",
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
                "name": "Number",
                "arguments": {},
                "content": "var regex1 = /[^\\s0-9.+]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n",
                "created_date": "2019-11-29T08:49:07.590Z",
                "last_modified": "2019-11-29T08:49:07.590Z",
                "id": "5de0db83dedee200147c1611"
              },
              "rule_transform": {
                "name": "",
                "arguments": {},
                "content": "function removeSpace(input){\r\n    if (input.includes('+')) {\r\n        input = input.replace(/[+]/g, '000');\r\n    }\r\n\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\tinput = input.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'-');\r\n\tinput = input.replace(/[\\s\\t]*(\\()[\\s\\t]*/g,' (');\r\n\tinput = input.replace(/[\\s\\t]*(\\))[\\s\\t]*/g,') ');\r\n    input = input.replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'/');\r\n    input = input.replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'.');\r\n    input = input.replace(/[\\s\\t]*(\\,)[\\s\\t]*/g,',');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-20T08:28:32.512Z",
              "last_modified": "2019-12-24T06:42:13.717Z",
              "field_setting": {
                "field_id": "5dd4f930dedee200147c1491",
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
              "_id": "5dd4f9cfdedee200147c1496",
              "name": "A25",
              "field_display": "Tỉnh/Thành phố thường trú",
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
                "key_value": "prov_nm",
                "locale": [
                  "165_191128_340_SUNLIFE"
                ],
                "lookup_after_time": 1,
                "lookup_field": "province",
                "name": "Sunlife_Province",
                "param_set": "return [data.A25]",
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
              "validation": {
                "name": "",
                "content": "if (value){\r\n    async function checkValidation(value) {\r\n            let dataLookup =  await fetchJSON(`https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/province/[%22${value}%22]`);\r\n            let _value =value.toLowerCase(); \r\n            if (!Array.isArray(dataLookup.json_single)||dataLookup.json_single.map(item => item.prov_nm.toLowerCase()).findIndex(item => item === _value) === -1) {\r\n                            return [{\r\n                              type: \"error\",\r\n                              message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                            }]\r\n                         }\r\n            // if(value.toLowerCase().includes('nhhien'))             \r\n            //              return[{ \r\n            //                   type: 'warning',\r\n            //                   message: `Lookup warning value:${value}`}];\r\n    }\r\n    return await checkValidation(value);\r\n    }",
                "arguments": {}
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-20T08:31:11.629Z",
              "last_modified": "2020-01-16T09:23:05.478Z",
              "field_setting": {
                "field_id": "5dd4f9cfdedee200147c1496",
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
              "_id": "5dd4f9bddedee200147c1495",
              "name": "A24",
              "field_display": "Quận/Huyện thường trú",
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
                "key_value": "dist_nm",
                "locale": [
                  "165_191128_340_SUNLIFE"
                ],
                "lookup_after_time": 1,
                "lookup_field": "district",
                "name": "Sunlife_District",
                "param_set": "return [data.A25,data.A24]",
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
              "validation": {
                "name": "",
                "content": "//console.log(arguments,'asdgasdgasdgasdg')    \r\nasync function checkValidation(value) {\r\n  let params = encodeURIComponent(`[\"${qh}\",\"${value}\"]`)\r\n  let uri = `https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/district/${params}`\r\n  let dataLookup = await fetchJSON(uri);\r\n//   console.log(dataLookup,'dataLookup');\r\n  if (!Array.isArray(dataLookup.json_single) \r\n  || dataLookup.json_single.map(item => item.dist_nm).findIndex(item => item === value.trim()) === -1) {\r\n                      return [{\r\n                         type: \"error\",\r\n                         message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                      }]\r\n                    }\r\n}\r\nif (value){\r\nreturn  await checkValidation(value);\r\n}",
                "arguments": {
                  "qh": "A25"
                }
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-20T08:30:53.260Z",
              "last_modified": "2020-02-12T07:01:32.354Z",
              "field_setting": {
                "field_id": "5dd4f9bddedee200147c1495",
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
              "_id": "5dd4f9afdedee200147c1494",
              "name": "A23",
              "field_display": "Phường/Xã thường trú",
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
                "key_value": "ward_nm",
                "locale": [
                  "165_191128_340_SUNLIFE"
                ],
                "lookup_after_time": 1,
                "lookup_field": "ward",
                "name": "Sunlife_ward",
                "param_set": "return [data.A25,data.A24,data.A23]",
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
              "validation": {
                "name": "",
                "content": "//console.log(arguments,'asdgasdgasdgasdg')    \r\nasync function checkValidation(value) {\r\n  let params = encodeURIComponent(`[\"${tp}\",\"${qh}\",\"${value}\"]`)\r\n  let uri = `https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/ward/${params}`\r\n  let dataLookup = await fetchJSON(uri);\r\n//   console.log(dataLookup,'dataLookup');\r\n  if (!Array.isArray(dataLookup.json_single) || dataLookup.json_single.map(item => item.ward_nm).findIndex(item => item === value.trim()) === -1) {\r\n                      return [{\r\n                         type: \"error\",\r\n                         message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                      }]\r\n                    }\r\n}\r\nif (value){\r\nreturn  await checkValidation(value);\r\n}",
                "arguments": {
                  "tp": "A25",
                  "qh": "A24"
                }
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-20T08:30:39.773Z",
              "last_modified": "2020-02-12T07:02:08.607Z",
              "field_setting": {
                "field_id": "5dd4f9afdedee200147c1494",
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
              "_id": "5dd4f9a3dedee200147c1493",
              "name": "A22",
              "field_display": "Số nhà, tên đường thường trú",
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
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-20T08:30:27.849Z",
              "last_modified": "2019-12-09T07:00:01.765Z",
              "field_setting": {
                "field_id": "5dd4f9a3dedee200147c1493",
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
              "_id": "5dd4fac0dedee200147c149b",
              "name": "A30",
              "field_display": "Tỉnh/Thành phố_nhận thư",
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
                "key_value": "prov_nm",
                "locale": [
                  "165_191128_340_SUNLIFE"
                ],
                "lookup_after_time": 1,
                "lookup_field": "province",
                "name": "Sunlife_Province",
                "param_set": "return [data.A30]",
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
              "validation": {
                "name": "",
                "content": "if (value){\r\n    async function checkValidation(value) {\r\n            let dataLookup =  await fetchJSON(`https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/province/[%22${value}%22]`);\r\n            let _value =value.toLowerCase(); \r\n            if (!Array.isArray(dataLookup.json_single)||dataLookup.json_single.map(item => item.prov_nm.toLowerCase()).findIndex(item => item === _value) === -1) {\r\n                            return [{\r\n                              type: \"error\",\r\n                              message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                            }]\r\n                         }\r\n            // if(value.toLowerCase().includes('nhhien'))             \r\n            //              return[{ \r\n            //                   type: 'warning',\r\n            //                   message: `Lookup warning value:${value}`}];\r\n    }\r\n    return await checkValidation(value);\r\n    }",
                "arguments": {}
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-20T08:35:12.296Z",
              "last_modified": "2019-12-18T07:16:27.955Z",
              "field_setting": {
                "field_id": "5dd4fac0dedee200147c149b",
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
              "_id": "5dd4faafdedee200147c149a",
              "name": "A29",
              "field_display": "Quận/Huyện_nhận thư",
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
                "key_value": "dist_nm",
                "locale": [
                  "165_191128_340_SUNLIFE"
                ],
                "lookup_after_time": 1,
                "lookup_field": "district",
                "name": "Sunlife_District",
                "param_set": "return [data.A30,data.A29]",
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
              "validation": {
                "name": "",
                "content": "//console.log(arguments,'asdgasdgasdgasdg')    \r\nasync function checkValidation(value) {\r\n  let params = encodeURIComponent(`[\"${qh}\",\"${value}\"]`)\r\n  let uri = `https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/district/${params}`\r\n  let dataLookup = await fetchJSON(uri);\r\n//   console.log(dataLookup,'dataLookup');\r\n  if (!Array.isArray(dataLookup.json_single) || dataLookup.json_single.map(item => item.dist_nm).findIndex(item => item === value.trim()) === -1) {\r\n                      return [{\r\n                         type: \"error\",\r\n                         message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                      }]\r\n                    }\r\n}\r\nif (value){\r\nreturn  await checkValidation(value);\r\n}",
                "arguments": {
                  "qh": "A30"
                }
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-20T08:34:55.875Z",
              "last_modified": "2020-02-12T07:06:10.143Z",
              "field_setting": {
                "field_id": "5dd4faafdedee200147c149a",
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
              "_id": "5dd4fa9cdedee200147c1499",
              "name": "A28",
              "field_display": "Phường/Xã_nhận thư",
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
                "key_value": "ward_nm",
                "locale": [
                  "165_191128_340_SUNLIFE"
                ],
                "lookup_after_time": 1,
                "lookup_field": "ward",
                "name": "Sunlife_ward",
                "param_set": "return [data.A30,data.A29,data.A28]",
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
              "validation": {
                "name": "",
                "content": "//console.log(arguments,'asdgasdgasdgasdg')    \r\nasync function checkValidation(value) {\r\n  let params = encodeURIComponent(`[\"${tp}\",\"${qh}\",\"${value}\"]`)\r\n  let uri = `https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/ward/${params}`\r\n  let dataLookup = await fetchJSON(uri);\r\n//   console.log(dataLookup,'dataLookup');\r\n  if (!Array.isArray(dataLookup.json_single) || dataLookup.json_single.map(item => item.ward_nm).findIndex(item => item === value.trim()) === -1) {\r\n                      return [{\r\n                         type: \"error\",\r\n                         message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                      }]\r\n                    }\r\n}\r\nif (value){\r\nreturn  await checkValidation(value);\r\n}",
                "arguments": {
                  "tp": "A30",
                  "qh": "A29"
                }
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-20T08:34:36.340Z",
              "last_modified": "2020-02-12T07:06:49.885Z",
              "field_setting": {
                "field_id": "5dd4fa9cdedee200147c1499",
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
              "_id": "5dd4fa75dedee200147c1498",
              "name": "A27",
              "field_display": "Số nhà tên đường_nhận thư",
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
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-20T08:33:57.326Z",
              "last_modified": "2019-12-09T06:59:49.482Z",
              "field_setting": {
                "field_id": "5dd4fa75dedee200147c1498",
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
              "_id": "5dd64915dedee200147c1510",
              "name": "A128",
              "field_display": "Điện thoại nhà riêng_LI",
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
                "name": "Number",
                "arguments": {},
                "content": "var regex1 = /[^\\s0-9]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n",
                "created_date": "2019-11-29T08:49:07.590Z",
                "last_modified": "2019-11-29T08:49:07.590Z",
                "id": "5de0db83dedee200147c1611"
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T08:21:41.973Z",
              "last_modified": "2019-12-18T13:32:44.651Z",
              "field_setting": {
                "field_id": "5dd64915dedee200147c1510",
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
              "_id": "5dd64931dedee200147c1511",
              "name": "A129",
              "field_display": "Điện thoại di động_LI",
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
                "name": "Number",
                "arguments": {},
                "content": "var regex1 = /[^\\s0-9]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n",
                "created_date": "2019-11-29T08:49:07.590Z",
                "last_modified": "2019-11-29T08:49:07.590Z",
                "id": "5de0db83dedee200147c1611"
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T08:22:09.550Z",
              "last_modified": "2019-12-18T13:33:00.172Z",
              "field_setting": {
                "field_id": "5dd64931dedee200147c1511",
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
              "_id": "5dd64944dedee200147c1512",
              "name": "A130",
              "field_display": "Địa chỉ email_LI",
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
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T08:22:28.642Z",
              "last_modified": "2019-12-18T13:33:11.483Z",
              "field_setting": {
                "field_id": "5dd64944dedee200147c1512",
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
              "_id": "5dd64954dedee200147c1513",
              "name": "A131",
              "field_display": "Nghề nghiệp_LI",
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
                "key_value": "value",
                "locale": [
                  "165_191128_340_SUNLIFE"
                ],
                "lookup_after_time": 1,
                "lookup_field": "occupation",
                "name": "Sunlife_Occupation",
                "param_set": "return [data.A131]",
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
              "validation": {
                "name": "",
                "content": "if (value){\r\n    async function checkValidation(value) {\r\n            let dataLookup =  await fetchJSON(`https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/occupation/[%22${value}%22]`);\r\n            let _value =value.toLowerCase(); \r\n            if (!Array.isArray(dataLookup.json_single)||dataLookup.json_single.map(item => item.value.toLowerCase()).findIndex(item => item === _value) === -1) {\r\n                            return [{\r\n                              type: \"error\",\r\n                              message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                            }]\r\n                         }\r\n            // if(value.toLowerCase().includes('nhhien'))             \r\n            //              return[{ \r\n            //                   type: 'warning',\r\n            //                   message: `Lookup warning value:${value}`}];\r\n    }\r\n    return await checkValidation(value);\r\n    }",
                "arguments": {}
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T08:22:44.734Z",
              "last_modified": "2019-12-18T13:33:23.952Z",
              "field_setting": {
                "field_id": "5dd64954dedee200147c1513",
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
              "_id": "5dd6496bdedee200147c1514",
              "name": "A132",
              "field_display": "Tên cơ quan_LI",
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
                "name": "Text Tiếng Việt",
                "arguments": {},
                "content": "var regex1 = /[^\\s0-9A-Za-zsáàảãạâăắằẳẵặặấầẩẫậéèẻẽẹêếềểễệíìỉĩịóòỏõọôơốồổỗộớờởỡợúùủũụưứừửữựýỳỷỹỵđÁÀẢÃẠÂĂẮẰẲẴẶẶẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔƠỐỒỔỖỘỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴĐ]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập chữ và số\"}]\r\n}\r\n",
                "created_date": "2019-11-29T08:21:01.677Z",
                "last_modified": "2019-11-29T08:33:51.062Z",
                "id": "5de0d4eddedee200147c1603"
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T08:23:07.948Z",
              "last_modified": "2019-12-18T13:33:32.384Z",
              "field_setting": {
                "field_id": "5dd6496bdedee200147c1514",
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
              "_id": "5dd6497cdedee200147c1515",
              "name": "A133",
              "field_display": "Thu nhập ước tính hàng năm_LI",
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
                "name": "Number",
                "arguments": {},
                "content": "var regex1 = /[^\\s0-9.+]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n",
                "created_date": "2019-11-29T08:49:07.590Z",
                "last_modified": "2019-11-29T08:49:07.590Z",
                "id": "5de0db83dedee200147c1611"
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n    if (input.includes('+')) {\r\n        input = input.replace(/[+]/g, '000');\r\n    }\r\n\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\tinput = input.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'-');\r\n\tinput = input.replace(/[\\s\\t]*(\\()[\\s\\t]*/g,' (');\r\n\tinput = input.replace(/[\\s\\t]*(\\))[\\s\\t]*/g,') ');\r\n    input = input.replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'/');\r\n    input = input.replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'.');\r\n    input = input.replace(/[\\s\\t]*(\\,)[\\s\\t]*/g,',');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T08:23:24.722Z",
              "last_modified": "2019-12-24T06:42:39.436Z",
              "field_setting": {
                "field_id": "5dd6497cdedee200147c1515",
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
              "_id": "5dd64cd7dedee200147c151a",
              "name": "A138",
              "field_display": "Tỉnh/Thành phố thường trú_LI",
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
                "key_value": "prov_nm",
                "locale": [
                  "165_191128_340_SUNLIFE"
                ],
                "lookup_after_time": 1,
                "lookup_field": "province",
                "name": "Sunlife_Province",
                "param_set": "return [data.A138]",
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
              "validation": {
                "name": "",
                "content": "if (value){\r\n    async function checkValidation(value) {\r\n            let dataLookup =  await fetchJSON(`https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/province/[%22${value}%22]`);\r\n            let _value =value.toLowerCase(); \r\n            if (!Array.isArray(dataLookup.json_single)||dataLookup.json_single.map(item => item.prov_nm.toLowerCase()).findIndex(item => item === _value) === -1) {\r\n                            return [{\r\n                              type: \"error\",\r\n                              message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                            }]\r\n                         }\r\n            // if(value.toLowerCase().includes('nhhien'))             \r\n            //              return[{ \r\n            //                   type: 'warning',\r\n            //                   message: `Lookup warning value:${value}`}];\r\n    }\r\n    return await checkValidation(value);\r\n    }",
                "arguments": {}
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T08:37:43.092Z",
              "last_modified": "2019-12-18T07:13:19.899Z",
              "field_setting": {
                "field_id": "5dd64cd7dedee200147c151a",
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
              "_id": "5dd64cc8dedee200147c1519",
              "name": "A137",
              "field_display": "Quận/Huyện thường trú_LI",
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
                "key_value": "dist_nm",
                "locale": [
                  "165_191128_340_SUNLIFE"
                ],
                "lookup_after_time": 1,
                "lookup_field": "district",
                "name": "Sunlife_District",
                "param_set": "return [data.A138,data.A137]",
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
              "validation": {
                "name": "",
                "content": "//console.log(arguments,'asdgasdgasdgasdg')    \r\nasync function checkValidation(value) {\r\n  let params = encodeURIComponent(`[\"${qh}\",\"${value}\"]`)\r\n  let uri = `https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/district/${params}`\r\n  let dataLookup = await fetchJSON(uri);\r\n//   console.log(dataLookup,'dataLookup');\r\n  if (!Array.isArray(dataLookup.json_single) || dataLookup.json_single.map(item => item.dist_nm).findIndex(item => item === value.trim()) === -1) {\r\n                      return [{\r\n                         type: \"error\",\r\n                         message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                      }]\r\n                    }\r\n}\r\nif (value){\r\nreturn  await checkValidation(value);\r\n}",
                "arguments": {
                  "qh": "A138"
                }
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T08:37:28.540Z",
              "last_modified": "2020-02-12T07:04:33.905Z",
              "field_setting": {
                "field_id": "5dd64cc8dedee200147c1519",
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
              "_id": "5dd64cb0dedee200147c1518",
              "name": "A136",
              "field_display": "Phường/Xã thường trú_LI",
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
                "key_value": "ward_nm",
                "locale": [
                  "165_191128_340_SUNLIFE"
                ],
                "lookup_after_time": 1,
                "lookup_field": "ward",
                "name": "Sunlife_ward",
                "param_set": "return [data.A138,data.A137,data.A136]",
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
              "validation": {
                "name": "",
                "content": "//console.log(arguments,'asdgasdgasdgasdg')    \r\nasync function checkValidation(value) {\r\n  let params = encodeURIComponent(`[\"${tp}\",\"${qh}\",\"${value}\"]`)\r\n  let uri = `https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/ward/${params}`\r\n  let dataLookup = await fetchJSON(uri);\r\n//   console.log(dataLookup,'dataLookup');\r\n  if (!Array.isArray(dataLookup.json_single) || dataLookup.json_single.map(item => item.ward_nm).findIndex(item => item === value.trim()) === -1) {\r\n                      return [{\r\n                         type: \"error\",\r\n                         message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                      }]\r\n                    }\r\n}\r\nif (value){\r\nreturn  await checkValidation(value);\r\n}",
                "arguments": {
                  "tp": "A138",
                  "qh": "A137"
                }
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T08:37:04.581Z",
              "last_modified": "2020-02-12T07:05:25.716Z",
              "field_setting": {
                "field_id": "5dd64cb0dedee200147c1518",
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
              "_id": "5dd64c95dedee200147c1517",
              "name": "A135",
              "field_display": "Số nhà, tên đường thường trú_LI",
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
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T08:36:37.973Z",
              "last_modified": "2019-12-09T07:03:45.049Z",
              "field_setting": {
                "field_id": "5dd64c95dedee200147c1517",
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
          "id": "5dece62cd3f551001f8958a2"
        },
        {
          "name": "Product1",
          "layout_name": "Sunlife",
          "index": 2,
          "layout_id": "5de0d7d9dedee200147c1605",
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
              "_id": "5de4ab61dedee200147c1619",
              "name": "A507",
              "field_display": "Mục tiêu tài chính",
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
                "key_value": "value",
                "locale": [
                  "165_191128_340_SUNLIFE"
                ],
                "lookup_after_time": 1,
                "lookup_field": "insurance_purpose",
                "name": "Sunlife_Insurance_Purpose",
                "param_set": "return [data.A507]",
                "result_view_config": [
                  {
                    "title": "Insurance Purpose",
                    "key_value": "value"
                  }
                ],
                "related_columns": [],
                "specific_project": "0",
                "created_date": "2019-12-10T02:56:31.089Z",
                "last_modified": "2019-12-10T02:56:31.089Z",
                "id": "5def095fd3f551001f8958bb"
              },
              "validation": {
                "name": "",
                "content": "if(!value){\r\n    return [{type : \"warning\" , message : \"Field đang trống, vui lòng kiểm tra lại trước khi save\"}];\r\n}\r\n\r\nif (value){\r\n    async function checkValidation(value) {\r\n            let dataLookup =  await fetchJSON(`https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/insurance_purpose/[%22${value}%22]`);\r\n            let _value =value.toLowerCase(); \r\n            if (!Array.isArray(dataLookup.json_single)||dataLookup.json_single.map(item => item.value.toLowerCase()).findIndex(item => item === _value) === -1) {\r\n                            return [{\r\n                              type: \"error\",\r\n                              message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                            }]\r\n                         }\r\n            // if(value.toLowerCase().includes('nhhien'))             \r\n            //              return[{ \r\n            //                   type: 'warning',\r\n            //                   message: `Lookup warning value:${value}`}];\r\n    }\r\n    return await checkValidation(value);\r\n    }\r\n",
                "arguments": {}
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T06:12:49.172Z",
              "last_modified": "2020-01-14T04:38:50.644Z",
              "field_setting": {
                "field_id": "5de4ab61dedee200147c1619",
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
              "_id": "5de4ab84dedee200147c161a",
              "name": "A509",
              "field_display": "Khoản thực hiện mục tiêu tài chính",
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
                "key_value": "value",
                "locale": [
                  "165_191128_340_SUNLIFE"
                ],
                "lookup_after_time": 1,
                "lookup_field": "premium_source",
                "name": "Sunlife_Premium_Source",
                "param_set": "return [data.A509]",
                "result_view_config": [
                  {
                    "title": "Premium Source",
                    "key_value": "value"
                  }
                ],
                "related_columns": [],
                "specific_project": "0",
                "created_date": "2019-12-10T02:59:45.324Z",
                "last_modified": "2019-12-10T02:59:45.324Z",
                "id": "5def0a21d3f551001f8958bc"
              },
              "validation": {
                "name": "",
                "content": "if(!value){\r\n    return [{type : \"warning\" , message : \"Field đang trống, vui lòng kiểm tra lại trước khi save\"}];\r\n}\r\n\r\nif (value){\r\n    async function checkValidation(value) {\r\n            let dataLookup =  await fetchJSON(`https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/premium_source/[%22${value}%22]`);\r\n            let _value =value.toLowerCase(); \r\n            if (!Array.isArray(dataLookup.json_single)||dataLookup.json_single.map(item => item.value.toLowerCase()).findIndex(item => item === _value) === -1) {\r\n                            return [{\r\n                              type: \"error\",\r\n                              message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                            }]\r\n                         }\r\n            // if(value.toLowerCase().includes('nhhien'))             \r\n            //              return[{ \r\n            //                   type: 'warning',\r\n            //                   message: `Lookup warning value:${value}`}];\r\n    }\r\n    return await checkValidation(value);\r\n    }",
                "arguments": {}
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T06:13:24.533Z",
              "last_modified": "2020-01-16T09:23:57.052Z",
              "field_setting": {
                "field_id": "5de4ab84dedee200147c161a",
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
              "_id": "5de4abefdedee200147c161c",
              "name": "A511",
              "field_display": "Nguồn khai thác bảo hiểm",
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
                "key_value": "value_vietnamese",
                "locale": [
                  "165_191128_340_SUNLIFE"
                ],
                "lookup_after_time": 1,
                "lookup_field": "source_of_sale",
                "name": "Sunlife_Source_of_Sale",
                "param_set": "return [data.A511]",
                "result_view_config": [
                  {
                    "title": "Source of Sale",
                    "key_value": "value_vietnamese"
                  }
                ],
                "related_columns": [],
                "specific_project": "0",
                "created_date": "2019-12-10T03:02:48.247Z",
                "last_modified": "2019-12-10T03:02:48.247Z",
                "id": "5def0ad8d3f551001f8958bd"
              },
              "validation": {
                "name": "",
                "content": "if(!value){\r\n    return [{type : \"warning\" , message : \"Field đang trống, vui lòng kiểm tra lại trước khi save\"}];\r\n}\r\n\r\nif (value){\r\n    async function checkValidation(value) {\r\n            let dataLookup =  await fetchJSON(`https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/source_of_sale/[%22${value}%22]`);\r\n            let _value =value.toLowerCase(); \r\n            if (!Array.isArray(dataLookup.json_single)||dataLookup.json_single.map(item => item.value_vietnamese.toLowerCase()).findIndex(item => item === _value) === -1) {\r\n                            return [{\r\n                              type: \"error\",\r\n                              message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                            }]\r\n                         }\r\n            // if(value.toLowerCase().includes('nhhien'))             \r\n            //              return[{ \r\n            //                   type: 'warning',\r\n            //                   message: `Lookup warning value:${value}`}];\r\n    }\r\n    return await checkValidation(value);\r\n    }",
                "arguments": {}
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T06:15:11.254Z",
              "last_modified": "2020-01-14T04:38:36.819Z",
              "field_setting": {
                "field_id": "5de4abefdedee200147c161c",
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
              "_id": "5dddf9eddedee200147c1586",
              "name": "O01",
              "field_display": "Mã số TVTC (TVTC phục vụ hợp đồng)",
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
                "name": "Text + Number",
                "arguments": {},
                "content": "var regex1 = /[^\\s0-9A-Za-z]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số và chữ \"}]\r\n}\r\n",
                "created_date": "2019-11-28T06:46:23.478Z",
                "last_modified": "2019-11-29T08:25:58.570Z",
                "id": "5ddf6d3fdedee200147c15f6"
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-27T04:22:05.317Z",
              "last_modified": "2019-12-04T03:17:12.312Z",
              "field_setting": {
                "field_id": "5dddf9eddedee200147c1586",
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
              "_id": "5dddf9f9dedee200147c1587",
              "name": "O02",
              "field_display": "Mã số TVTC 1  (TVTC chia hoa hồng)",
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
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-27T04:22:17.271Z",
              "last_modified": "2019-11-27T04:22:17.271Z",
              "field_setting": {
                "field_id": "5dddf9f9dedee200147c1587",
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
              "_id": "5dddfa05dedee200147c1588",
              "name": "O03",
              "field_display": "Tỷ lệ hoa hồng",
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
                "name": "Number",
                "arguments": {},
                "content": "var regex1 = /[^\\s0-9]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n",
                "created_date": "2019-11-29T08:49:07.590Z",
                "last_modified": "2019-11-29T08:49:07.590Z",
                "id": "5de0db83dedee200147c1611"
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-27T04:22:29.140Z",
              "last_modified": "2019-12-04T03:17:58.424Z",
              "field_setting": {
                "field_id": "5dddfa05dedee200147c1588",
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
              "_id": "5dddfa10dedee200147c1589",
              "name": "O04",
              "field_display": "Mã số TVTC 2  (TVTC chia hoa hồng, nếu có 2 TVTC)",
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
                "name": "Text + Number",
                "arguments": {},
                "content": "var regex1 = /[^\\s0-9A-Za-z]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số và chữ \"}]\r\n}\r\n",
                "created_date": "2019-11-28T06:46:23.478Z",
                "last_modified": "2019-11-29T08:25:58.570Z",
                "id": "5ddf6d3fdedee200147c15f6"
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-27T04:22:40.532Z",
              "last_modified": "2019-12-04T03:18:20.401Z",
              "field_setting": {
                "field_id": "5dddfa10dedee200147c1589",
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
              "_id": "5dddfa1bdedee200147c158a",
              "name": "O05",
              "field_display": "Tỷ lệ hoa hồng",
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
                "name": "Number",
                "arguments": {},
                "content": "var regex1 = /[^\\s0-9]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n",
                "created_date": "2019-11-29T08:49:07.590Z",
                "last_modified": "2019-11-29T08:49:07.590Z",
                "id": "5de0db83dedee200147c1611"
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-27T04:22:51.631Z",
              "last_modified": "2019-12-04T03:18:48.225Z",
              "field_setting": {
                "field_id": "5dddfa1bdedee200147c158a",
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
              "_id": "5dde2affdedee200147c1598",
              "name": "O13",
              "field_display": "Câu 1:BMBH",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-27T07:51:27.963Z",
              "last_modified": "2019-12-18T13:23:09.454Z",
              "field_setting": {
                "field_id": "5dde2affdedee200147c1598",
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
              "_id": "5dde2b0ddedee200147c1599",
              "name": "O14",
              "field_display": "Câu 1:NDBH",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-27T07:51:41.829Z",
              "last_modified": "2019-12-18T13:23:20.481Z",
              "field_setting": {
                "field_id": "5dde2b0ddedee200147c1599",
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
              "_id": "5dde2b18dedee200147c159a",
              "name": "O15",
              "field_display": "Câu 1:NDBHBS1",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-27T07:51:52.895Z",
              "last_modified": "2019-12-18T13:23:31.618Z",
              "field_setting": {
                "field_id": "5dde2b18dedee200147c159a",
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
              "_id": "5dde2b25dedee200147c159b",
              "name": "O16",
              "field_display": "Câu 1:NDBHBS2",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-27T07:52:05.108Z",
              "last_modified": "2019-12-18T13:23:37.321Z",
              "field_setting": {
                "field_id": "5dde2b25dedee200147c159b",
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
              "_id": "5dde2b33dedee200147c159c",
              "name": "O17",
              "field_display": "Câu 1:NDBHBS3",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-27T07:52:19.914Z",
              "last_modified": "2019-12-18T13:23:43.362Z",
              "field_setting": {
                "field_id": "5dde2b33dedee200147c159c",
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
              "_id": "5dde2b40dedee200147c159d",
              "name": "O18",
              "field_display": "Câu 1:NDBHBS4",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-27T07:52:32.378Z",
              "last_modified": "2019-12-18T13:23:49.911Z",
              "field_setting": {
                "field_id": "5dde2b40dedee200147c159d",
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
              "_id": "5dde2b5cdedee200147c159f",
              "name": "O20",
              "field_display": "Câu 2:BMBH",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-27T07:53:00.029Z",
              "last_modified": "2019-12-18T13:24:07.401Z",
              "field_setting": {
                "field_id": "5dde2b5cdedee200147c159f",
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
              "_id": "5dde2b68dedee200147c15a0",
              "name": "O21",
              "field_display": "Câu 2:NDBH",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-27T07:53:12.390Z",
              "last_modified": "2019-12-18T13:29:57.450Z",
              "field_setting": {
                "field_id": "5dde2b68dedee200147c15a0",
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
              "_id": "5dde2b77dedee200147c15a1",
              "name": "O22",
              "field_display": "Câu 2:NDBHBS1",
              "default_value": "N",
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
                "name": "Text + Number",
                "arguments": {},
                "content": "var regex1 = /[^\\s0-9A-Za-z]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số và chữ \"}]\r\n}\r\n",
                "created_date": "2019-11-28T06:46:23.478Z",
                "last_modified": "2019-11-29T08:25:58.570Z",
                "id": "5ddf6d3fdedee200147c15f6"
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-27T07:53:27.416Z",
              "last_modified": "2019-12-18T13:24:23.232Z",
              "field_setting": {
                "field_id": "5dde2b77dedee200147c15a1",
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
              "_id": "5dde2b9cdedee200147c15a2",
              "name": "O23",
              "field_display": "Câu 2:NDBHBS2",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-27T07:54:04.909Z",
              "last_modified": "2019-12-18T13:24:29.155Z",
              "field_setting": {
                "field_id": "5dde2b9cdedee200147c15a2",
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
              "_id": "5dde2ba7dedee200147c15a3",
              "name": "O24",
              "field_display": "Câu 2:NDBHBS3",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-27T07:54:15.508Z",
              "last_modified": "2019-12-18T13:24:36.078Z",
              "field_setting": {
                "field_id": "5dde2ba7dedee200147c15a3",
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
              "_id": "5dde2bb2dedee200147c15a4",
              "name": "O25",
              "field_display": "Câu 2:NDBHBS4",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-27T07:54:26.341Z",
              "last_modified": "2019-12-18T13:24:45.979Z",
              "field_setting": {
                "field_id": "5dde2bb2dedee200147c15a4",
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
              "_id": "5dde2be4dedee200147c15a7",
              "name": "O28",
              "field_display": "Câu 3:BMBH",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-27T07:55:16.180Z",
              "last_modified": "2019-12-18T13:25:00.604Z",
              "field_setting": {
                "field_id": "5dde2be4dedee200147c15a7",
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
              "_id": "5dde2bf1dedee200147c15a8",
              "name": "O29",
              "field_display": "Câu 3:NDBH",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-27T07:55:29.239Z",
              "last_modified": "2019-12-18T13:25:07.215Z",
              "field_setting": {
                "field_id": "5dde2bf1dedee200147c15a8",
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
              "_id": "5dde2c00dedee200147c15a9",
              "name": "O30",
              "field_display": "Câu 3:NDBHBS1",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-27T07:55:44.294Z",
              "last_modified": "2019-12-18T13:25:13.924Z",
              "field_setting": {
                "field_id": "5dde2c00dedee200147c15a9",
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
              "_id": "5dde2cbfdedee200147c15aa",
              "name": "O31",
              "field_display": "Câu 3:NDBHBS2",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-27T07:58:55.237Z",
              "last_modified": "2019-12-18T13:25:19.567Z",
              "field_setting": {
                "field_id": "5dde2cbfdedee200147c15aa",
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
              "_id": "5dde2ccddedee200147c15ab",
              "name": "O32",
              "field_display": "Câu 3:NDBHBS3",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-27T07:59:09.414Z",
              "last_modified": "2019-12-18T13:25:24.843Z",
              "field_setting": {
                "field_id": "5dde2ccddedee200147c15ab",
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
              "_id": "5dde2ceadedee200147c15ac",
              "name": "O33",
              "field_display": "Câu 3:NDBHBS4",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-27T07:59:38.262Z",
              "last_modified": "2019-12-18T13:25:30.273Z",
              "field_setting": {
                "field_id": "5dde2ceadedee200147c15ac",
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
              "_id": "5dde2d05dedee200147c15ad",
              "name": "O34",
              "field_display": "Câu 4: Quốc tịch nước ngoài hay không",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-27T08:00:05.621Z",
              "last_modified": "2019-12-18T13:25:37.267Z",
              "field_setting": {
                "field_id": "5dde2d05dedee200147c15ad",
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
              "_id": "5dde2d12dedee200147c15ae",
              "name": "O35",
              "field_display": "Câu 5:BMBH",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-27T08:00:18.522Z",
              "last_modified": "2019-12-18T13:25:45.487Z",
              "field_setting": {
                "field_id": "5dde2d12dedee200147c15ae",
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
              "_id": "5dde2d37dedee200147c15af",
              "name": "O36",
              "field_display": "Câu 5:NDBH",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-27T08:00:55.031Z",
              "last_modified": "2019-12-18T13:25:52.083Z",
              "field_setting": {
                "field_id": "5dde2d37dedee200147c15af",
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
              "_id": "5dde2dd1dedee200147c15b0",
              "name": "O37",
              "field_display": "Câu 5:NDBHBS1",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-27T08:03:29.129Z",
              "last_modified": "2019-12-18T13:25:58.289Z",
              "field_setting": {
                "field_id": "5dde2dd1dedee200147c15b0",
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
              "_id": "5dde2ddddedee200147c15b1",
              "name": "O38",
              "field_display": "Câu 5:NDBHBS2",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-27T08:03:41.174Z",
              "last_modified": "2019-12-18T13:26:04.302Z",
              "field_setting": {
                "field_id": "5dde2ddddedee200147c15b1",
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
              "_id": "5dde2de8dedee200147c15b2",
              "name": "O39",
              "field_display": "Câu 5:NDBHBS3",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-27T08:03:52.236Z",
              "last_modified": "2019-12-18T13:26:13.982Z",
              "field_setting": {
                "field_id": "5dde2de8dedee200147c15b2",
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
              "_id": "5dde2df3dedee200147c15b3",
              "name": "O40",
              "field_display": "Câu 5:NDBHBS4",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-27T08:04:03.396Z",
              "last_modified": "2019-12-18T13:26:20.893Z",
              "field_setting": {
                "field_id": "5dde2df3dedee200147c15b3",
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
              "_id": "5de752a9dedee200147c1688",
              "name": "O88",
              "field_display": "Câu 6:BMBH",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-04T06:31:05.204Z",
              "last_modified": "2019-12-18T13:28:52.743Z",
              "field_setting": {
                "field_id": "5de752a9dedee200147c1688",
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
              "_id": "5de752dededee200147c1689",
              "name": "O89",
              "field_display": "Câu 6:NDBH",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-04T06:31:58.690Z",
              "last_modified": "2019-12-18T13:28:58.309Z",
              "field_setting": {
                "field_id": "5de752dededee200147c1689",
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
              "_id": "5de752f8dedee200147c168a",
              "name": "O90",
              "field_display": "Câu 6:NDBHBS1",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-04T06:32:24.432Z",
              "last_modified": "2019-12-18T13:29:28.042Z",
              "field_setting": {
                "field_id": "5de752f8dedee200147c168a",
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
              "_id": "5de75330dedee200147c168b",
              "name": "O91",
              "field_display": "Câu 6:NDBHBS2",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-04T06:33:20.162Z",
              "last_modified": "2019-12-18T13:29:19.205Z",
              "field_setting": {
                "field_id": "5de75330dedee200147c168b",
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
              "_id": "5de75346dedee200147c168c",
              "name": "O92",
              "field_display": "Câu 6:NDBHBS3",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-04T06:33:42.290Z",
              "last_modified": "2019-12-18T13:29:07.890Z",
              "field_setting": {
                "field_id": "5de75346dedee200147c168c",
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
              "_id": "5de75376dedee200147c168d",
              "name": "O93",
              "field_display": "Câu 6:NDBHBS4",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-04T06:34:30.244Z",
              "last_modified": "2019-12-18T13:29:13.222Z",
              "field_setting": {
                "field_id": "5de75376dedee200147c168d",
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
              "_id": "5de4b265dedee200147c1626",
              "name": "A508",
              "field_display": "Ngày ký của TVTC",
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
                "name": "Date",
                "arguments": {},
                "content": "function chkDate(date){\r\n\tvar dd = date.substring(0,2);\r\n\tvar mm = date.substring(2,4);\r\n\tvar yy = date.substring(4,6);\r\n\tvar tmpDate = new Date();\r\n\tvar y = tmpDate.getFullYear()+\"\";\r\n\ty = y.substring(2,4)*1 + 1;\r\n\r\n\t//Gan gia tri nam la 19YY neu YY > nam hien tai + 1\r\n\t//Gan gia tri nam la 20YY neu YY <= nam hien tai + 1\r\n\tif(yy*1>y){ yy = 19+yy;\r\n\t}else {yy = 20+yy;}\r\n\r\n\treturn dd+mm+yy;\t\r\n}\r\n\r\nfunction formatdate(ngay_hieu_luc_in78){\r\nvar fvalue = ngay_hieu_luc_in78;\r\n\tvar regex = /^(?:(?:31(|\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(|\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(|\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(|\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$/\r\n\tvar regex1 = /^\\d{6}$/;\r\n\tvar regex2 = /^(\\s*|[0-9\\.\\/\\-]+)$/ ;\r\n\tvar date;\r\nif(fvalue === \"\") return ;\r\n\tif(regex1.test(fvalue))\r\n\treturn ;\r\n\tif(regex2.test(fvalue)){\r\n\t\r\n\tif(!regex.test(fvalue)){\r\n\t\treturn [{type:\"warning\",message:\"Ngày Tháng Năm không phù hợp, vui lòng kiểm tra lại.\"}]\r\n\t}\r\n}else{\r\n    return [{type:\"error\",message:\"Không đúng định dạng ddmmyyyy\"}]\r\n}\r\nfvalue = fvalue.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'');\r\nif(fvalue.length === 6){\r\n\tfvalue = chkDate(fvalue);\r\n}\r\nvar dd = fvalue.substring(0, 2);\r\nvar mm = fvalue.substring(2, 4);\r\nvar yy = fvalue.substring(4, 8);\r\nvar tmpDate = new Date();\r\nvar d = tmpDate.getDate();\r\nvar m = tmpDate.getMonth();\r\nvar y = tmpDate.getFullYear();\r\nvar inputDate = new Date(yy, mm - 1, dd);\r\nvar curDate = new Date(y, m, d);\r\n\r\n\r\n\r\n//So sanh ngay nhap voi ngay hien tai\r\nif (inputDate > curDate) {\r\n return [{type:\"warning\", message:\"Năm nhập lớn hơn năm hiện tại\"}]\r\n}\r\n\r\n\r\n}\r\n\r\nreturn formatdate(value);",
                "created_date": "2019-11-28T06:50:27.116Z",
                "last_modified": "2019-11-28T06:50:27.116Z",
                "id": "5ddf6e33dedee200147c15f7"
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
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T06:42:45.533Z",
              "last_modified": "2019-12-18T03:16:43.546Z",
              "field_setting": {
                "field_id": "5de4b265dedee200147c1626",
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
              "_id": "5dece024d3f551001f89589b",
              "name": "A602",
              "field_display": "Ngày Nộp tiền trên phiếu thu",
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
                "name": "Date",
                "arguments": {},
                "content": "if(!value){\r\n    return [{type : \"warning\" , message : \"Field đang trống, vui lòng kiểm tra lại trước khi save\"}];\r\n}\r\n\r\nfunction chkDate(date){\r\n\tvar dd = date.substring(0,2);\r\n\tvar mm = date.substring(2,4);\r\n\tvar yy = date.substring(4,6);\r\n\tvar tmpDate = new Date();\r\n\tvar y = tmpDate.getFullYear()+\"\";\r\n\ty = y.substring(2,4)*1 + 1;\r\n\r\n\t//Gan gia tri nam la 19YY neu YY > nam hien tai + 1\r\n\t//Gan gia tri nam la 20YY neu YY <= nam hien tai + 1\r\n\tif(yy*1>y){ yy = 19+yy;\r\n\t}else {yy = 20+yy;}\r\n\r\n\treturn dd+mm+yy;\t\r\n}\r\n\r\nfunction formatdate(ngay_hieu_luc_in78){\r\nvar fvalue = ngay_hieu_luc_in78;\r\n\tvar regex = /^(?:(?:31(|\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(|\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(|\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(|\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$/\r\n\tvar regex1 = /^\\d{6}$/;\r\n\tvar regex2 = /^(\\s*|[0-9\\.\\/\\-]+)$/ ;\r\n\tvar date;\r\nif(fvalue === \"\") return ;\r\n\tif(regex1.test(fvalue))\r\n\treturn ;\r\n\tif(regex2.test(fvalue)){\r\n\t\r\n\tif(!regex.test(fvalue)){\r\n\t\treturn [{type:\"warning\",message:\"Ngày Tháng Năm không phù hợp, vui lòng kiểm tra lại.\"}]\r\n\t}\r\n}else{\r\n    return [{type:\"error\",message:\"Không đúng định dạng ddmmyyyy\"}]\r\n}\r\nfvalue = fvalue.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'');\r\nif(fvalue.length === 6){\r\n\tfvalue = chkDate(fvalue);\r\n}\r\nvar dd = fvalue.substring(0, 2);\r\nvar mm = fvalue.substring(2, 4);\r\nvar yy = fvalue.substring(4, 8);\r\nvar tmpDate = new Date();\r\nvar d = tmpDate.getDate();\r\nvar m = tmpDate.getMonth();\r\nvar y = tmpDate.getFullYear();\r\nvar inputDate = new Date(yy, mm - 1, dd);\r\nvar curDate = new Date(y, m, d);\r\n\r\n\r\n\r\n//So sanh ngay nhap voi ngay hien tai\r\nif (inputDate > curDate) {\r\n return [{type:\"warning\", message:\"Năm nhập lớn hơn năm hiện tại\"}]\r\n}\r\n\r\n\r\n}\r\n\r\nreturn formatdate(value);",
                "created_date": "2019-11-28T06:50:27.116Z",
                "last_modified": "2019-11-28T06:50:27.116Z",
                "id": "5ddf6e33dedee200147c15f7"
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
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-08T11:36:04.812Z",
              "last_modified": "2020-01-14T04:37:45.171Z",
              "field_setting": {
                "field_id": "5dece024d3f551001f89589b",
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
          "id": "5dece816d3f551001f8958a5"
        },
        {
          "name": "Product_PO",
          "layout_name": "Sunlife",
          "index": 3,
          "layout_id": "5de0d7d9dedee200147c1605",
          "is_multiple": true,
          "position": {},
          "settings": {
            "is_multiple": true
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
              "_id": "5dd50035dedee200147c14a4",
              "name": "A35",
              "field_display": "Sản phẩm bảo hiểm chính_PO",
              "default_value": "",
              "control_type": "TEXTFIELD",
              "tooltip": "",
              "is_list": true,
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
                "key_value": "value",
                "locale": [
                  "165_191128_340_SUNLIFE"
                ],
                "lookup_after_time": 1,
                "lookup_field": "product",
                "name": "Sunlife_Product",
                "param_set": "return [data.A35]",
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
              "validation": {
                "name": "",
                "content": "if (value){\r\n    async function checkValidation(value) {\r\n            let dataLookup =  await fetchJSON(`https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/product/[%22${value}%22]`);\r\n            let _value =value.toLowerCase(); \r\n            if (!Array.isArray(dataLookup.json_single)||dataLookup.json_single.map(item => item.value.toLowerCase()).findIndex(item => item === _value) === -1) {\r\n                            return [{\r\n                              type: \"error\",\r\n                              message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                            }]\r\n                         }\r\n            // if(value.toLowerCase().includes('nhhien'))             \r\n            //              return[{ \r\n            //                   type: 'warning',\r\n            //                   message: `Lookup warning value:${value}`}];\r\n    }\r\n    return await checkValidation(value);\r\n    }\r\n",
                "arguments": {}
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-20T08:58:29.699Z",
              "last_modified": "2019-12-18T07:11:44.614Z",
              "field_setting": {
                "field_id": "5dd50035dedee200147c14a4",
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
              "_id": "5de4af78dedee200147c161d",
              "name": "A512",
              "field_display": "Số tiền bảo hiểm chính_PO",
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
                "arguments": {},
                "content": "var regex1 = /[^\\s0-9.+]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n",
                "created_date": "2019-11-29T08:49:07.590Z",
                "last_modified": "2019-11-29T08:49:07.590Z",
                "id": "5de0db83dedee200147c1611"
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n    if (input.includes('+')) {\r\n        input = input.replace(/[+]/g, '000');\r\n    }\r\n\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\tinput = input.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'-');\r\n\tinput = input.replace(/[\\s\\t]*(\\()[\\s\\t]*/g,' (');\r\n\tinput = input.replace(/[\\s\\t]*(\\))[\\s\\t]*/g,') ');\r\n    input = input.replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'/');\r\n    input = input.replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'.');\r\n    input = input.replace(/[\\s\\t]*(\\,)[\\s\\t]*/g,',');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T06:30:16.844Z",
              "last_modified": "2019-12-24T06:39:50.707Z",
              "field_setting": {
                "field_id": "5de4af78dedee200147c161d",
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
              "_id": "5de4afb7dedee200147c161e",
              "name": "A517",
              "field_display": "Thời hạn đóng phí_PO",
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
                "name": "Number",
                "arguments": {},
                "content": "var regex1 = /[^\\s0-9]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n",
                "created_date": "2019-11-29T08:49:07.590Z",
                "last_modified": "2019-11-29T08:49:07.590Z",
                "id": "5de0db83dedee200147c1611"
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\tinput = input.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'-');\r\n\tinput = input.replace(/[\\s\\t]*(\\()[\\s\\t]*/g,' (');\r\n\tinput = input.replace(/[\\s\\t]*(\\))[\\s\\t]*/g,') ');\r\n    input = input.replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'/');\r\n    input = input.replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'.');\r\n    input = input.replace(/[\\s\\t]*(\\,)[\\s\\t]*/g,',');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T06:31:19.482Z",
              "last_modified": "2019-12-18T03:58:43.902Z",
              "field_setting": {
                "field_id": "5de4afb7dedee200147c161e",
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
          "id": "5dece816d3f551001f8958a6"
        },
        {
          "name": "Product2",
          "layout_name": "Sunlife",
          "index": 4,
          "layout_id": "5de0d7d9dedee200147c1605",
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
              "_id": "5dece03bd3f551001f89589c",
              "name": "A603",
              "field_display": "Phí dự tính - Sun Sống Chủ Động",
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
                "content": "var regex1 = /[^\\s0-9.*]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n",
                "arguments": {}
              },
              "rule_transform": {
                "name": "",
                "arguments": {},
                "content": "function removeSpace(input){\r\n    if (input.includes('*')) {\r\n        input = input.replace(/[*]/g, '000');\r\n    }\r\n\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\tinput = input.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'-');\r\n\tinput = input.replace(/[\\s\\t]*(\\()[\\s\\t]*/g,' (');\r\n\tinput = input.replace(/[\\s\\t]*(\\))[\\s\\t]*/g,') ');\r\n    input = input.replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'/');\r\n    input = input.replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'.');\r\n    input = input.replace(/[\\s\\t]*(\\,)[\\s\\t]*/g,',');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-08T11:36:27.911Z",
              "last_modified": "2019-12-18T03:27:45.002Z",
              "field_setting": {
                "field_id": "5dece03bd3f551001f89589c",
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
          "id": "5dece816d3f551001f8958a4"
        },
        {
          "name": "Product_LI",
          "layout_name": "Sunlife",
          "index": 5,
          "layout_id": "5de0d7d9dedee200147c1605",
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
              "_id": "5dd5024cdedee200147c14a7",
              "name": "A504",
              "field_display": "Sản phẩm bảo hiểm chính_LI",
              "default_value": "",
              "control_type": "TEXTFIELD",
              "tooltip": "",
              "is_list": true,
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
                "key_value": "value",
                "locale": [
                  "165_191128_340_SUNLIFE"
                ],
                "lookup_after_time": 1,
                "lookup_field": "product",
                "name": "Sunlife_Product",
                "param_set": "return [data.A504]",
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
              "validation": {
                "name": "",
                "content": "if (value){\r\n    async function checkValidation(value) {\r\n            let dataLookup =  await fetchJSON(`https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/product/[%22${value}%22]`);\r\n            let _value =value.toLowerCase(); \r\n            if (!Array.isArray(dataLookup.json_single)||dataLookup.json_single.map(item => item.value.toLowerCase()).findIndex(item => item === _value) === -1) {\r\n                            return [{\r\n                              type: \"error\",\r\n                              message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                            }]\r\n                         }\r\n            // if(value.toLowerCase().includes('nhhien'))             \r\n            //              return[{ \r\n            //                   type: 'warning',\r\n            //                   message: `Lookup warning value:${value}`}];\r\n    }\r\n    return await checkValidation(value);\r\n    }\r\n",
                "arguments": {}
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-20T09:07:24.147Z",
              "last_modified": "2019-12-18T07:11:58.606Z",
              "field_setting": {
                "field_id": "5dd5024cdedee200147c14a7",
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
              "_id": "5dd5025ddedee200147c14a8",
              "name": "A505",
              "field_display": "Số tiền bảo hiểm chính_LI",
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
                "name": "Number",
                "arguments": {},
                "content": "var regex1 = /[^\\s0-9.+]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n",
                "created_date": "2019-11-29T08:49:07.590Z",
                "last_modified": "2019-11-29T08:49:07.590Z",
                "id": "5de0db83dedee200147c1611"
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n    if (input.includes('+')) {\r\n        input = input.replace(/[+]/g, '000');\r\n    }\r\n\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\tinput = input.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'-');\r\n\tinput = input.replace(/[\\s\\t]*(\\()[\\s\\t]*/g,' (');\r\n\tinput = input.replace(/[\\s\\t]*(\\))[\\s\\t]*/g,') ');\r\n    input = input.replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'/');\r\n    input = input.replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'.');\r\n    input = input.replace(/[\\s\\t]*(\\,)[\\s\\t]*/g,',');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-20T09:07:41.320Z",
              "last_modified": "2019-12-24T06:41:50.207Z",
              "field_setting": {
                "field_id": "5dd5025ddedee200147c14a8",
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
              "_id": "5de4b055dedee200147c161f",
              "name": "A518",
              "field_display": "Thời hạn đóng phí_LI",
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
                "name": "Number",
                "arguments": {},
                "content": "var regex1 = /[^\\s0-9]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n",
                "created_date": "2019-11-29T08:49:07.590Z",
                "last_modified": "2019-11-29T08:49:07.590Z",
                "id": "5de0db83dedee200147c1611"
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T06:33:57.967Z",
              "last_modified": "2019-12-02T06:33:57.967Z",
              "field_setting": {
                "field_id": "5de4b055dedee200147c161f",
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
          "id": "5dece816d3f551001f8958a7"
        },
        {
          "name": "Product3",
          "layout_name": "Sunlife",
          "index": 6,
          "layout_id": "5de0d7d9dedee200147c1605",
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
              "_id": "5dece04ad3f551001f89589d",
              "name": "A604",
              "field_display": "Refer Name",
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
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-08T11:36:42.626Z",
              "last_modified": "2019-12-08T11:36:42.626Z",
              "field_setting": {
                "field_id": "5dece04ad3f551001f89589d",
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
              "_id": "5e39149538af75001e86ab52",
              "name": "A605",
              "field_display": "Reffer Code",
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
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2020-02-04T06:52:05.946Z",
              "last_modified": "2020-02-04T06:52:05.946Z",
              "field_setting": {
                "field_id": "5e39149538af75001e86ab52",
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
              "_id": "5e202d704b5de3001add631a",
              "name": "RM2",
              "field_display": "Ghi Chú 2",
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
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2020-01-16T09:31:28.719Z",
              "last_modified": "2020-01-16T09:31:28.719Z",
              "field_setting": {
                "field_id": "5e202d704b5de3001add631a",
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
          "id": "5dece816d3f551001f8958a8"
        },
        {
          "name": "Health_Check1",
          "layout_name": "Sunlife",
          "index": 7,
          "layout_id": "5de0d7d9dedee200147c1605",
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
              "_id": "5dd5183adedee200147c14c2",
              "name": "A57",
              "field_display": "Câu 1:",
              "default_value": "N",
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
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-20T10:40:58.827Z",
              "last_modified": "2019-12-18T12:53:59.826Z",
              "field_setting": {
                "field_id": "5dd5183adedee200147c14c2",
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
              "_id": "5dd51855dedee200147c14c3",
              "name": "A58",
              "field_display": "Câu 1: Thành Phố",
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
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-20T10:41:25.881Z",
              "last_modified": "2019-12-02T06:44:25.102Z",
              "field_setting": {
                "field_id": "5dd51855dedee200147c14c3",
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
              "_id": "5dd5f988dedee200147c14c6",
              "name": "A59",
              "field_display": "Câu 1: Thời gian và mục đích",
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
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T02:42:16.405Z",
              "last_modified": "2019-12-02T06:44:58.933Z",
              "field_setting": {
                "field_id": "5dd5f988dedee200147c14c6",
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
              "_id": "5dd5f9a3dedee200147c14c7",
              "name": "A60",
              "field_display": "Câu 1: Ngày đi gần nhất",
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
                "name": "Date",
                "arguments": {},
                "content": "function chkDate(date){\r\n\tvar dd = date.substring(0,2);\r\n\tvar mm = date.substring(2,4);\r\n\tvar yy = date.substring(4,6);\r\n\tvar tmpDate = new Date();\r\n\tvar y = tmpDate.getFullYear()+\"\";\r\n\ty = y.substring(2,4)*1 + 1;\r\n\r\n\t//Gan gia tri nam la 19YY neu YY > nam hien tai + 1\r\n\t//Gan gia tri nam la 20YY neu YY <= nam hien tai + 1\r\n\tif(yy*1>y){ yy = 19+yy;\r\n\t}else {yy = 20+yy;}\r\n\r\n\treturn dd+mm+yy;\t\r\n}\r\n\r\nfunction formatdate(ngay_hieu_luc_in78){\r\nvar fvalue = ngay_hieu_luc_in78;\r\n\tvar regex = /^(?:(?:31(|\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(|\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(|\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(|\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$/\r\n\tvar regex1 = /^\\d{6}$/;\r\n\tvar regex2 = /^(\\s*|[0-9\\.\\/\\-]+)$/ ;\r\n\tvar date;\r\nif(fvalue === \"\") return ;\r\n\tif(regex1.test(fvalue))\r\n\treturn ;\r\n\tif(regex2.test(fvalue)){\r\n\t\r\n\tif(!regex.test(fvalue)){\r\n\t\treturn [{type:\"warning\",message:\"Ngày Tháng Năm không phù hợp, vui lòng kiểm tra lại.\"}]\r\n\t}\r\n}else{\r\n    return [{type:\"error\",message:\"Không đúng định dạng ddmmyyyy\"}]\r\n}\r\nfvalue = fvalue.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'');\r\nif(fvalue.length === 6){\r\n\tfvalue = chkDate(fvalue);\r\n}\r\nvar dd = fvalue.substring(0, 2);\r\nvar mm = fvalue.substring(2, 4);\r\nvar yy = fvalue.substring(4, 8);\r\nvar tmpDate = new Date();\r\nvar d = tmpDate.getDate();\r\nvar m = tmpDate.getMonth();\r\nvar y = tmpDate.getFullYear();\r\nvar inputDate = new Date(yy, mm - 1, dd);\r\nvar curDate = new Date(y, m, d);\r\n\r\n\r\n\r\n//So sanh ngay nhap voi ngay hien tai\r\nif (inputDate > curDate) {\r\n return [{type:\"warning\", message:\"Năm nhập lớn hơn năm hiện tại\"}]\r\n}\r\n\r\n\r\n}\r\n\r\nreturn formatdate(value);",
                "created_date": "2019-11-28T06:50:27.116Z",
                "last_modified": "2019-11-28T06:50:27.116Z",
                "id": "5ddf6e33dedee200147c15f7"
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
              "text_type": "DATE",
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T02:42:43.428Z",
              "last_modified": "2019-12-18T03:17:05.302Z",
              "field_setting": {
                "field_id": "5dd5f9a3dedee200147c14c7",
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
              "_id": "5dd5f9c4dedee200147c14c8",
              "name": "A61",
              "field_display": "Câu 1: Ngày dự định đi",
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
                "name": "Date",
                "arguments": {},
                "content": "function chkDate(date){\r\n\tvar dd = date.substring(0,2);\r\n\tvar mm = date.substring(2,4);\r\n\tvar yy = date.substring(4,6);\r\n\tvar tmpDate = new Date();\r\n\tvar y = tmpDate.getFullYear()+\"\";\r\n\ty = y.substring(2,4)*1 + 1;\r\n\r\n\t//Gan gia tri nam la 19YY neu YY > nam hien tai + 1\r\n\t//Gan gia tri nam la 20YY neu YY <= nam hien tai + 1\r\n\tif(yy*1>y){ yy = 19+yy;\r\n\t}else {yy = 20+yy;}\r\n\r\n\treturn dd+mm+yy;\t\r\n}\r\n\r\nfunction formatdate(ngay_hieu_luc_in78){\r\nvar fvalue = ngay_hieu_luc_in78;\r\n\tvar regex = /^(?:(?:31(|\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(|\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(|\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(|\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$/\r\n\tvar regex1 = /^\\d{6}$/;\r\n\tvar regex2 = /^(\\s*|[0-9\\.\\/\\-]+)$/ ;\r\n\tvar date;\r\nif(fvalue === \"\") return ;\r\n\tif(regex1.test(fvalue))\r\n\treturn ;\r\n\tif(regex2.test(fvalue)){\r\n\t\r\n\tif(!regex.test(fvalue)){\r\n\t\treturn [{type:\"warning\",message:\"Ngày Tháng Năm không phù hợp, vui lòng kiểm tra lại.\"}]\r\n\t}\r\n}else{\r\n    return [{type:\"error\",message:\"Không đúng định dạng ddmmyyyy\"}]\r\n}\r\nfvalue = fvalue.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'');\r\nif(fvalue.length === 6){\r\n\tfvalue = chkDate(fvalue);\r\n}\r\nvar dd = fvalue.substring(0, 2);\r\nvar mm = fvalue.substring(2, 4);\r\nvar yy = fvalue.substring(4, 8);\r\nvar tmpDate = new Date();\r\nvar d = tmpDate.getDate();\r\nvar m = tmpDate.getMonth();\r\nvar y = tmpDate.getFullYear();\r\nvar inputDate = new Date(yy, mm - 1, dd);\r\nvar curDate = new Date(y, m, d);\r\n\r\n\r\n\r\n//So sanh ngay nhap voi ngay hien tai\r\nif (inputDate > curDate) {\r\n return [{type:\"warning\", message:\"Năm nhập lớn hơn năm hiện tại\"}]\r\n}\r\n\r\n\r\n}\r\n\r\nreturn formatdate(value);",
                "created_date": "2019-11-28T06:50:27.116Z",
                "last_modified": "2019-11-28T06:50:27.116Z",
                "id": "5ddf6e33dedee200147c15f7"
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
              "text_type": "DATE",
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T02:43:16.699Z",
              "last_modified": "2019-12-18T03:17:24.924Z",
              "field_setting": {
                "field_id": "5dd5f9c4dedee200147c14c8",
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
              "_id": "5dd5fa94dedee200147c14c9",
              "name": "A62",
              "field_display": "Câu 2:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T02:46:44.583Z",
              "last_modified": "2019-12-18T12:54:29.660Z",
              "field_setting": {
                "field_id": "5dd5fa94dedee200147c14c9",
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
              "_id": "5dd5faafdedee200147c14ca",
              "name": "A63",
              "field_display": "Câu 3:",
              "default_value": "N",
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
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [
                " Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T02:47:11.733Z",
              "last_modified": "2019-12-18T12:54:40.997Z",
              "field_setting": {
                "field_id": "5dd5faafdedee200147c14ca",
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
              "_id": "5dd5fac4dedee200147c14cb",
              "name": "A64",
              "field_display": "Cẩu 4:",
              "default_value": "N",
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
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T02:47:32.427Z",
              "last_modified": "2019-12-18T12:54:51.573Z",
              "field_setting": {
                "field_id": "5dd5fac4dedee200147c14cb",
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
              "_id": "5dd5fde0dedee200147c14cc",
              "name": "A65",
              "field_display": "Câu 5:",
              "default_value": "N",
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
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T03:00:48.218Z",
              "last_modified": "2019-12-18T13:06:00.543Z",
              "field_setting": {
                "field_id": "5dd5fde0dedee200147c14cc",
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
              "_id": "5dd5fdf2dedee200147c14cd",
              "name": "A66",
              "field_display": "Câu 5: Số lượng/ngày",
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
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T03:01:06.741Z",
              "last_modified": "2019-12-02T06:48:33.344Z",
              "field_setting": {
                "field_id": "5dd5fdf2dedee200147c14cd",
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
              "_id": "5dd5fe04dedee200147c14ce",
              "name": "A67",
              "field_display": "Câu 6:",
              "default_value": "N",
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
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T03:01:24.635Z",
              "last_modified": "2019-12-18T13:06:07.982Z",
              "field_setting": {
                "field_id": "5dd5fe04dedee200147c14ce",
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
          "id": "5dece816d3f551001f8958ab"
        },
        {
          "name": "Health_Check_C6_1",
          "layout_name": "Sunlife",
          "index": 8,
          "layout_id": "5de0d7d9dedee200147c1605",
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
              "_id": "5de4d6e4dedee200147c162c",
              "name": "A519",
              "field_display": "Câu 6: Loại",
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
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [
                "Bia nhẹ",
                "Rượu nhẹ",
                "Rượu mạnh"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T09:18:28.635Z",
              "last_modified": "2019-12-02T09:18:42.311Z",
              "field_setting": {
                "field_id": "5de4d6e4dedee200147c162c",
                "visible": true,
                "disable": false,
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
              "_id": "5dd5fe1adedee200147c14cf",
              "name": "A68",
              "field_display": "Câu 6: Số Lượng Uống",
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
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T03:01:46.725Z",
              "last_modified": "2019-12-02T09:19:11.984Z",
              "field_setting": {
                "field_id": "5dd5fe1adedee200147c14cf",
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
              "_id": "5dd5fe36dedee200147c14d0",
              "name": "A69",
              "field_display": "Câu 6: Tần suất sử dụng",
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
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [
                "Hàng Ngày",
                "Hàng Tuần"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T03:02:14.116Z",
              "last_modified": "2019-12-09T04:48:29.923Z",
              "field_setting": {
                "field_id": "5dd5fe36dedee200147c14d0",
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
          "id": "5dece816d3f551001f8958a9"
        },
        {
          "name": "Health_Check2",
          "layout_name": "Sunlife",
          "index": 9,
          "layout_id": "5de0d7d9dedee200147c1605",
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
              "_id": "5dd5fe52dedee200147c14d1",
              "name": "A70",
              "field_display": "Câu 7:",
              "default_value": "N",
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
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T03:02:42.348Z",
              "last_modified": "2019-12-18T12:55:22.618Z",
              "field_setting": {
                "field_id": "5dd5fe52dedee200147c14d1",
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
              "_id": "5dd5fe61dedee200147c14d2",
              "name": "A71",
              "field_display": "Câu 8:",
              "default_value": "N",
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
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [
                " Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T03:02:57.904Z",
              "last_modified": "2019-12-18T12:55:40.520Z",
              "field_setting": {
                "field_id": "5dd5fe61dedee200147c14d2",
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
              "_id": "5dd5feacdedee200147c14d3",
              "name": "A72",
              "field_display": "Câu 9a: chiều cao",
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
                "name": "Number",
                "arguments": {},
                "content": "var regex1 = /[^\\s0-9]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n",
                "created_date": "2019-11-29T08:49:07.590Z",
                "last_modified": "2019-11-29T08:49:07.590Z",
                "id": "5de0db83dedee200147c1611"
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T03:04:12.828Z",
              "last_modified": "2020-02-04T07:43:29.368Z",
              "field_setting": {
                "field_id": "5dd5feacdedee200147c14d3",
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
              "_id": "5dd5febadedee200147c14d4",
              "name": "A73",
              "field_display": "Câu 9a: cân nặng",
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
                "name": "decimal_number",
                "arguments": {},
                "content": "if(value.split('.').length==2&&(value.split('.')[1].trim().length===0||value.split('.')[0].trim().length===0)){\n    return [{\n            type:'error',\n            message:'Dữ liệu nhập phải là số thập phân'\n    }]\n}\n\n// var num = parseFloat(value).toFixed(3);\nvar tmp = (value*1000 + 0.1*1000 - 0.1*1000)/10 ;\n\n\nvar [ng,tp] =value.split('.')\n// if(value.split('.').length>2){\n//     return [{\n//             type:'warning',\n//             message:'Netto nhập quá 2 số thập phân'\n//     }]\n// }\n\nif(tp&&tp.length>2){\n     return [{type : \"warning\",\n        message :\"nhập quá 2 số thập phân\"\n    }]\n}\n\nif(!tmp&&tmp!==0){\n    return [{\n        type : 'error',\n        message: 'Dữ liệu nhập phải là chuỗi số thập phân'\n    }]\n}\nif(value<0){\n    return [\n        {\n            type:'error',\n            message:'Không được nhập giá trị âm.'\n        }\n        ]\n}\n",
                "created_date": "2019-12-28T09:47:49.178Z",
                "last_modified": "2019-12-28T09:47:49.178Z",
                "id": "5e0724c548fa7900143a5cd0"
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T03:04:26.026Z",
              "last_modified": "2020-02-04T07:42:43.546Z",
              "field_setting": {
                "field_id": "5dd5febadedee200147c14d4",
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
              "_id": "5dd5ff16dedee200147c14d5",
              "name": "A74",
              "field_display": "Câu 9b:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T03:05:58.857Z",
              "last_modified": "2019-12-18T12:56:59.014Z",
              "field_setting": {
                "field_id": "5dd5ff16dedee200147c14d5",
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
              "_id": "5dd5ff32dedee200147c14d6",
              "name": "A75",
              "field_display": "Câu 10:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T03:06:26.002Z",
              "last_modified": "2019-12-18T12:57:12.589Z",
              "field_setting": {
                "field_id": "5dd5ff32dedee200147c14d6",
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
              "_id": "5dd5ff54dedee200147c14d7",
              "name": "A76",
              "field_display": "Câu 10- tình trạng sức khỏe - cha/me",
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
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T03:07:00.715Z",
              "last_modified": "2019-12-02T09:31:03.845Z",
              "field_setting": {
                "field_id": "5dd5ff54dedee200147c14d7",
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
              "_id": "5dd5fff2dedee200147c14d8",
              "name": "A77",
              "field_display": "Câu 10 - tình trạng sức khỏe - anh/chi/em",
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
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T03:09:38.957Z",
              "last_modified": "2019-12-02T09:31:15.370Z",
              "field_setting": {
                "field_id": "5dd5fff2dedee200147c14d8",
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
              "_id": "5dd5fffcdedee200147c14d9",
              "name": "A78",
              "field_display": "Câu 10- tuổi - cha/mẹ",
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
                "name": "Number",
                "arguments": {},
                "content": "var regex1 = /[^\\s0-9]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n",
                "created_date": "2019-11-29T08:49:07.590Z",
                "last_modified": "2019-11-29T08:49:07.590Z",
                "id": "5de0db83dedee200147c1611"
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T03:09:48.257Z",
              "last_modified": "2019-12-19T07:15:14.500Z",
              "field_setting": {
                "field_id": "5dd5fffcdedee200147c14d9",
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
              "_id": "5dd6000ededee200147c14da",
              "name": "A79",
              "field_display": "Câu 10 - tuổi - anh/chị/em",
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
                "name": "Number",
                "arguments": {},
                "content": "var regex1 = /[^\\s0-9]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n",
                "created_date": "2019-11-29T08:49:07.590Z",
                "last_modified": "2019-11-29T08:49:07.590Z",
                "id": "5de0db83dedee200147c1611"
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T03:10:06.313Z",
              "last_modified": "2019-12-19T07:15:26.056Z",
              "field_setting": {
                "field_id": "5dd6000ededee200147c14da",
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
              "_id": "5dd60023dedee200147c14db",
              "name": "A80",
              "field_display": "Câu 10 - tuổi qua đời - cha/me",
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
                "name": "Number",
                "arguments": {},
                "content": "var regex1 = /[^\\s0-9]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n",
                "created_date": "2019-11-29T08:49:07.590Z",
                "last_modified": "2019-11-29T08:49:07.590Z",
                "id": "5de0db83dedee200147c1611"
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T03:10:27.666Z",
              "last_modified": "2019-12-19T07:15:40.345Z",
              "field_setting": {
                "field_id": "5dd60023dedee200147c14db",
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
              "_id": "5dd6003adedee200147c14dc",
              "name": "A81",
              "field_display": "Câu 10- tuổi qua đời - anh/chị/em",
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
                "name": "Number",
                "arguments": {},
                "content": "var regex1 = /[^\\s0-9]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n",
                "created_date": "2019-11-29T08:49:07.590Z",
                "last_modified": "2019-11-29T08:49:07.590Z",
                "id": "5de0db83dedee200147c1611"
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T03:10:50.337Z",
              "last_modified": "2019-12-19T07:15:50.637Z",
              "field_setting": {
                "field_id": "5dd6003adedee200147c14dc",
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
              "_id": "5dd6048adedee200147c14dd",
              "name": "A82",
              "field_display": "Câu 11:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T03:29:14.578Z",
              "last_modified": "2019-12-18T12:57:46.607Z",
              "field_setting": {
                "field_id": "5dd6048adedee200147c14dd",
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
              "_id": "5dd604a0dedee200147c14de",
              "name": "A83",
              "field_display": "Câu 12:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T03:29:36.052Z",
              "last_modified": "2019-12-18T13:01:56.470Z",
              "field_setting": {
                "field_id": "5dd604a0dedee200147c14de",
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
              "_id": "5dd60a5bdedee200147c14df",
              "name": "A84",
              "field_display": "Câu 13:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T03:54:03.579Z",
              "last_modified": "2019-12-18T12:57:58.954Z",
              "field_setting": {
                "field_id": "5dd60a5bdedee200147c14df",
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
              "_id": "5dd60a76dedee200147c14e0",
              "name": "A85",
              "field_display": "Câu 14:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T03:54:30.102Z",
              "last_modified": "2019-12-18T12:58:09.493Z",
              "field_setting": {
                "field_id": "5dd60a76dedee200147c14e0",
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
              "_id": "5dd60a8bdedee200147c14e1",
              "name": "A86",
              "field_display": "Câu 15:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T03:54:51.915Z",
              "last_modified": "2019-12-18T12:58:20.011Z",
              "field_setting": {
                "field_id": "5dd60a8bdedee200147c14e1",
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
              "_id": "5dd60abfdedee200147c14e2",
              "name": "A87",
              "field_display": "Câu 16:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T03:55:43.173Z",
              "last_modified": "2019-12-18T12:58:30.439Z",
              "field_setting": {
                "field_id": "5dd60abfdedee200147c14e2",
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
              "_id": "5dd60acfdedee200147c14e3",
              "name": "A88",
              "field_display": "Câu 17:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T03:55:59.295Z",
              "last_modified": "2019-12-18T12:58:40.429Z",
              "field_setting": {
                "field_id": "5dd60acfdedee200147c14e3",
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
              "_id": "5dd60af7dedee200147c14e4",
              "name": "A89",
              "field_display": "Câu 18:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T03:56:39.915Z",
              "last_modified": "2019-12-18T12:58:50.694Z",
              "field_setting": {
                "field_id": "5dd60af7dedee200147c14e4",
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
              "_id": "5dd60b12dedee200147c14e5",
              "name": "A90",
              "field_display": "Câu 19:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T03:57:06.597Z",
              "last_modified": "2019-12-18T12:59:00.944Z",
              "field_setting": {
                "field_id": "5dd60b12dedee200147c14e5",
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
              "_id": "5dd60b59dedee200147c14e6",
              "name": "A91",
              "field_display": "Câu 20:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T03:58:17.951Z",
              "last_modified": "2019-12-18T12:59:10.065Z",
              "field_setting": {
                "field_id": "5dd60b59dedee200147c14e6",
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
              "_id": "5dd60e2ddedee200147c14e7",
              "name": "A92",
              "field_display": "Câu 21:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T04:10:21.531Z",
              "last_modified": "2019-12-18T12:59:19.247Z",
              "field_setting": {
                "field_id": "5dd60e2ddedee200147c14e7",
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
              "_id": "5dd60ec4dedee200147c14e8",
              "name": "A93",
              "field_display": "Câu 22:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T04:12:52.450Z",
              "last_modified": "2019-12-18T12:59:29.046Z",
              "field_setting": {
                "field_id": "5dd60ec4dedee200147c14e8",
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
              "_id": "5dd60edededee200147c14e9",
              "name": "A94",
              "field_display": "Câu 23:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T04:13:18.331Z",
              "last_modified": "2019-12-18T12:59:39.206Z",
              "field_setting": {
                "field_id": "5dd60edededee200147c14e9",
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
              "_id": "5dd60fa1dedee200147c14ea",
              "name": "A95",
              "field_display": "Câu 24:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T04:16:33.814Z",
              "last_modified": "2019-12-18T12:59:49.046Z",
              "field_setting": {
                "field_id": "5dd60fa1dedee200147c14ea",
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
              "_id": "5dd60fc0dedee200147c14eb",
              "name": "A96",
              "field_display": "Câu 25:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T04:17:04.714Z",
              "last_modified": "2019-12-18T12:59:58.992Z",
              "field_setting": {
                "field_id": "5dd60fc0dedee200147c14eb",
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
              "_id": "5dd60fd6dedee200147c14ec",
              "name": "A97",
              "field_display": "Câu 26:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T04:17:26.665Z",
              "last_modified": "2019-12-18T13:00:09.130Z",
              "field_setting": {
                "field_id": "5dd60fd6dedee200147c14ec",
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
              "_id": "5dd60ff7dedee200147c14ed",
              "name": "A98",
              "field_display": "Câu 27:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T04:17:59.087Z",
              "last_modified": "2019-12-18T13:00:17.669Z",
              "field_setting": {
                "field_id": "5dd60ff7dedee200147c14ed",
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
              "_id": "5dd61012dedee200147c14ee",
              "name": "A99",
              "field_display": "Câu 28:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T04:18:26.476Z",
              "last_modified": "2019-12-18T13:02:05.824Z",
              "field_setting": {
                "field_id": "5dd61012dedee200147c14ee",
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
              "_id": "5dd6102cdedee200147c14ef",
              "name": "A100",
              "field_display": "Câu 29:",
              "default_value": "N",
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
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T04:18:52.252Z",
              "last_modified": "2019-12-18T13:00:36.835Z",
              "field_setting": {
                "field_id": "5dd6102cdedee200147c14ef",
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
              "_id": "5dd611aededee200147c14f0",
              "name": "A101",
              "field_display": "Câu 30:",
              "default_value": "N",
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
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T04:25:18.753Z",
              "last_modified": "2019-12-18T13:00:48.338Z",
              "field_setting": {
                "field_id": "5dd611aededee200147c14f0",
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
              "_id": "5dd61318dedee200147c14f1",
              "name": "A102",
              "field_display": "Câu 31:",
              "default_value": "N",
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
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [
                "Y",
                "N",
                "*"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T04:31:20.554Z",
              "last_modified": "2019-12-31T06:43:36.317Z",
              "field_setting": {
                "field_id": "5dd61318dedee200147c14f1",
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
              "_id": "5dd61346dedee200147c14f2",
              "name": "A103",
              "field_display": "Câu 32:",
              "default_value": "N",
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
                "Y",
                "N",
                "*"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T04:32:06.744Z",
              "last_modified": "2019-12-31T06:48:17.633Z",
              "field_setting": {
                "field_id": "5dd61346dedee200147c14f2",
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
              "_id": "5dd62eacdedee200147c14ff",
              "name": "A111",
              "field_display": "Tick : Câu 5 phần Cam kết có tick hay không",
              "default_value": "N",
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
                "content": "if(!value){\n    return [{type : \"warning\" , message : \"Field đang trống, vui lòng kiểm tra lại trước khi save\"}];\n}",
                "arguments": {}
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T06:29:00.660Z",
              "last_modified": "2020-01-14T04:38:58.513Z",
              "field_setting": {
                "field_id": "5dd62eacdedee200147c14ff",
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
              "_id": "5dd62ef5dedee200147c1500",
              "name": "A112",
              "field_display": "Ngày tháng năm",
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
                "name": "Date",
                "arguments": {},
                "content": "function chkDate(date){\r\n\tvar dd = date.substring(0,2);\r\n\tvar mm = date.substring(2,4);\r\n\tvar yy = date.substring(4,6);\r\n\tvar tmpDate = new Date();\r\n\tvar y = tmpDate.getFullYear()+\"\";\r\n\ty = y.substring(2,4)*1 + 1;\r\n\r\n\t//Gan gia tri nam la 19YY neu YY > nam hien tai + 1\r\n\t//Gan gia tri nam la 20YY neu YY <= nam hien tai + 1\r\n\tif(yy*1>y){ yy = 19+yy;\r\n\t}else {yy = 20+yy;}\r\n\r\n\treturn dd+mm+yy;\t\r\n}\r\n\r\nfunction formatdate(ngay_hieu_luc_in78){\r\nvar fvalue = ngay_hieu_luc_in78;\r\n\tvar regex = /^(?:(?:31(|\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(|\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(|\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(|\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$/\r\n\tvar regex1 = /^\\d{6}$/;\r\n\tvar regex2 = /^(\\s*|[0-9\\.\\/\\-]+)$/ ;\r\n\tvar date;\r\nif(fvalue === \"\") return ;\r\n\tif(regex1.test(fvalue))\r\n\treturn ;\r\n\tif(regex2.test(fvalue)){\r\n\t\r\n\tif(!regex.test(fvalue)){\r\n\t\treturn [{type:\"warning\",message:\"Ngày Tháng Năm không phù hợp, vui lòng kiểm tra lại.\"}]\r\n\t}\r\n}else{\r\n    return [{type:\"error\",message:\"Không đúng định dạng ddmmyyyy\"}]\r\n}\r\nfvalue = fvalue.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'');\r\nif(fvalue.length === 6){\r\n\tfvalue = chkDate(fvalue);\r\n}\r\nvar dd = fvalue.substring(0, 2);\r\nvar mm = fvalue.substring(2, 4);\r\nvar yy = fvalue.substring(4, 8);\r\nvar tmpDate = new Date();\r\nvar d = tmpDate.getDate();\r\nvar m = tmpDate.getMonth();\r\nvar y = tmpDate.getFullYear();\r\nvar inputDate = new Date(yy, mm - 1, dd);\r\nvar curDate = new Date(y, m, d);\r\n\r\n\r\n\r\n//So sanh ngay nhap voi ngay hien tai\r\nif (inputDate > curDate) {\r\n return [{type:\"warning\", message:\"Năm nhập lớn hơn năm hiện tại\"}]\r\n}\r\n\r\n\r\n}\r\n\r\nreturn formatdate(value);",
                "created_date": "2019-11-28T06:50:27.116Z",
                "last_modified": "2019-11-28T06:50:27.116Z",
                "id": "5ddf6e33dedee200147c15f7"
              },
              "rule_transform": {
                "name": "Date_transform",
                "arguments": {},
                "content": "    var regex1 = /^\\d{6}$/;\n    \nfunction removeSpace(input){\n    var regex = /^(?:(?:31(|\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(|\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(|\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(|\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$/\n\tif(regex.test(input)){\n\t\tinput = input.replace(/([0-9]{2})([0-9]{2})([0-9]{4})/,'$1$2$3') + '';\n\t}\n\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\n\n\tinput = input.trim();\n\n\treturn input;\n}\nfunction chkDate(date){\n\tvar dd = date.substring(0,2);\n\tvar mm = date.substring(2,4);\n\tvar yy = date.substring(4,6);\n\tvar tmpDate = new Date();\n\tvar y = tmpDate.getFullYear()+\"\";\n\ty = y.substring(2,4)*1 + 1;\n\n\t//Gan gia tri nam la 19YY neu YY > nam hien tai + 1\n\t//Gan gia tri nam la 20YY neu YY <= nam hien tai + 1\n\tif(yy*1>y){ yy = 19+yy;\n\t}else {yy = 20+yy;}\n\n\treturn dd+mm+yy;\t\n}\nvalue = value.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'');\nif(value.length === 6){\n    return chkDate(value)}\nreturn removeSpace(value);",
                "created_date": "2019-11-28T06:52:45.384Z",
                "last_modified": "2019-11-28T06:54:20.188Z",
                "id": "5ddf6ebddedee200147c15f8"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T06:30:13.541Z",
              "last_modified": "2019-12-03T03:37:58.651Z",
              "field_setting": {
                "field_id": "5dd62ef5dedee200147c1500",
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
              "_id": "5dd64ebadedee200147c1521",
              "name": "A145",
              "field_display": "Câu 1:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T08:45:46.031Z",
              "last_modified": "2019-12-18T13:02:40.294Z",
              "field_setting": {
                "field_id": "5dd64ebadedee200147c1521",
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
              "_id": "5dd64ed5dedee200147c1522",
              "name": "A146",
              "field_display": "Câu 1: Thành Phố",
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
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T08:46:13.125Z",
              "last_modified": "2019-12-03T03:58:50.214Z",
              "field_setting": {
                "field_id": "5dd64ed5dedee200147c1522",
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
              "_id": "5dd64ee7dedee200147c1523",
              "name": "A147",
              "field_display": "Câu 1: Thời gian và mục đích",
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
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T08:46:31.956Z",
              "last_modified": "2019-12-03T04:05:27.762Z",
              "field_setting": {
                "field_id": "5dd64ee7dedee200147c1523",
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
              "_id": "5dd64efddedee200147c1524",
              "name": "A148",
              "field_display": "Câu 1: Ngày đi gần nhất",
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
                "name": "Date",
                "arguments": {},
                "content": "function chkDate(date){\r\n\tvar dd = date.substring(0,2);\r\n\tvar mm = date.substring(2,4);\r\n\tvar yy = date.substring(4,6);\r\n\tvar tmpDate = new Date();\r\n\tvar y = tmpDate.getFullYear()+\"\";\r\n\ty = y.substring(2,4)*1 + 1;\r\n\r\n\t//Gan gia tri nam la 19YY neu YY > nam hien tai + 1\r\n\t//Gan gia tri nam la 20YY neu YY <= nam hien tai + 1\r\n\tif(yy*1>y){ yy = 19+yy;\r\n\t}else {yy = 20+yy;}\r\n\r\n\treturn dd+mm+yy;\t\r\n}\r\n\r\nfunction formatdate(ngay_hieu_luc_in78){\r\nvar fvalue = ngay_hieu_luc_in78;\r\n\tvar regex = /^(?:(?:31(|\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(|\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(|\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(|\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$/\r\n\tvar regex1 = /^\\d{6}$/;\r\n\tvar regex2 = /^(\\s*|[0-9\\.\\/\\-]+)$/ ;\r\n\tvar date;\r\nif(fvalue === \"\") return ;\r\n\tif(regex1.test(fvalue))\r\n\treturn ;\r\n\tif(regex2.test(fvalue)){\r\n\t\r\n\tif(!regex.test(fvalue)){\r\n\t\treturn [{type:\"warning\",message:\"Ngày Tháng Năm không phù hợp, vui lòng kiểm tra lại.\"}]\r\n\t}\r\n}else{\r\n    return [{type:\"error\",message:\"Không đúng định dạng ddmmyyyy\"}]\r\n}\r\nfvalue = fvalue.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'');\r\nif(fvalue.length === 6){\r\n\tfvalue = chkDate(fvalue);\r\n}\r\nvar dd = fvalue.substring(0, 2);\r\nvar mm = fvalue.substring(2, 4);\r\nvar yy = fvalue.substring(4, 8);\r\nvar tmpDate = new Date();\r\nvar d = tmpDate.getDate();\r\nvar m = tmpDate.getMonth();\r\nvar y = tmpDate.getFullYear();\r\nvar inputDate = new Date(yy, mm - 1, dd);\r\nvar curDate = new Date(y, m, d);\r\n\r\n\r\n\r\n//So sanh ngay nhap voi ngay hien tai\r\nif (inputDate > curDate) {\r\n return [{type:\"warning\", message:\"Năm nhập lớn hơn năm hiện tại\"}]\r\n}\r\n\r\n\r\n}\r\n\r\nreturn formatdate(value);",
                "created_date": "2019-11-28T06:50:27.116Z",
                "last_modified": "2019-11-28T06:50:27.116Z",
                "id": "5ddf6e33dedee200147c15f7"
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
              "text_type": "DATE",
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T08:46:53.813Z",
              "last_modified": "2019-12-18T03:17:37.931Z",
              "field_setting": {
                "field_id": "5dd64efddedee200147c1524",
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
              "_id": "5dd64f10dedee200147c1525",
              "name": "A149",
              "field_display": "Câu 1: Ngày dự định đi",
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
                "name": "Date",
                "arguments": {},
                "content": "function chkDate(date){\r\n\tvar dd = date.substring(0,2);\r\n\tvar mm = date.substring(2,4);\r\n\tvar yy = date.substring(4,6);\r\n\tvar tmpDate = new Date();\r\n\tvar y = tmpDate.getFullYear()+\"\";\r\n\ty = y.substring(2,4)*1 + 1;\r\n\r\n\t//Gan gia tri nam la 19YY neu YY > nam hien tai + 1\r\n\t//Gan gia tri nam la 20YY neu YY <= nam hien tai + 1\r\n\tif(yy*1>y){ yy = 19+yy;\r\n\t}else {yy = 20+yy;}\r\n\r\n\treturn dd+mm+yy;\t\r\n}\r\n\r\nfunction formatdate(ngay_hieu_luc_in78){\r\nvar fvalue = ngay_hieu_luc_in78;\r\n\tvar regex = /^(?:(?:31(|\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(|\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(|\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(|\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$/\r\n\tvar regex1 = /^\\d{6}$/;\r\n\tvar regex2 = /^(\\s*|[0-9\\.\\/\\-]+)$/ ;\r\n\tvar date;\r\nif(fvalue === \"\") return ;\r\n\tif(regex1.test(fvalue))\r\n\treturn ;\r\n\tif(regex2.test(fvalue)){\r\n\t\r\n\tif(!regex.test(fvalue)){\r\n\t\treturn [{type:\"warning\",message:\"Ngày Tháng Năm không phù hợp, vui lòng kiểm tra lại.\"}]\r\n\t}\r\n}else{\r\n    return [{type:\"error\",message:\"Không đúng định dạng ddmmyyyy\"}]\r\n}\r\nfvalue = fvalue.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'');\r\nif(fvalue.length === 6){\r\n\tfvalue = chkDate(fvalue);\r\n}\r\nvar dd = fvalue.substring(0, 2);\r\nvar mm = fvalue.substring(2, 4);\r\nvar yy = fvalue.substring(4, 8);\r\nvar tmpDate = new Date();\r\nvar d = tmpDate.getDate();\r\nvar m = tmpDate.getMonth();\r\nvar y = tmpDate.getFullYear();\r\nvar inputDate = new Date(yy, mm - 1, dd);\r\nvar curDate = new Date(y, m, d);\r\n\r\n\r\n\r\n//So sanh ngay nhap voi ngay hien tai\r\nif (inputDate > curDate) {\r\n return [{type:\"warning\", message:\"Năm nhập lớn hơn năm hiện tại\"}]\r\n}\r\n\r\n\r\n}\r\n\r\nreturn formatdate(value);",
                "created_date": "2019-11-28T06:50:27.116Z",
                "last_modified": "2019-11-28T06:50:27.116Z",
                "id": "5ddf6e33dedee200147c15f7"
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
              "text_type": "DATE",
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T08:47:12.387Z",
              "last_modified": "2019-12-18T03:17:54.616Z",
              "field_setting": {
                "field_id": "5dd64f10dedee200147c1525",
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
              "_id": "5dd6501bdedee200147c1526",
              "name": "A150",
              "field_display": "Câu 2:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T08:51:39.453Z",
              "last_modified": "2019-12-18T13:03:14.025Z",
              "field_setting": {
                "field_id": "5dd6501bdedee200147c1526",
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
              "_id": "5dd65030dedee200147c1527",
              "name": "A151",
              "field_display": "Câu 3:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T08:52:00.274Z",
              "last_modified": "2019-12-18T13:03:50.667Z",
              "field_setting": {
                "field_id": "5dd65030dedee200147c1527",
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
              "_id": "5dd65043dedee200147c1528",
              "name": "A152",
              "field_display": "Cẩu 4:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T08:52:19.434Z",
              "last_modified": "2019-12-18T13:03:58.708Z",
              "field_setting": {
                "field_id": "5dd65043dedee200147c1528",
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
              "_id": "5dd65059dedee200147c1529",
              "name": "A153",
              "field_display": "Câu 5:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T08:52:41.391Z",
              "last_modified": "2019-12-18T13:04:16.215Z",
              "field_setting": {
                "field_id": "5dd65059dedee200147c1529",
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
              "_id": "5dd6506ddedee200147c152a",
              "name": "A154",
              "field_display": "Câu 5: Số lượng/ngày",
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
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T08:53:01.412Z",
              "last_modified": "2019-12-03T04:08:47.360Z",
              "field_setting": {
                "field_id": "5dd6506ddedee200147c152a",
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
              "_id": "5dd6507cdedee200147c152b",
              "name": "A155",
              "field_display": "Câu 6:",
              "default_value": "N",
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
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T08:53:16.122Z",
              "last_modified": "2019-12-18T13:04:41.328Z",
              "field_setting": {
                "field_id": "5dd6507cdedee200147c152b",
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
          "id": "5dece816d3f551001f8958ac"
        },
        {
          "name": "Health_Check_C6_2",
          "layout_name": "Sunlife",
          "index": 10,
          "layout_id": "5de0d7d9dedee200147c1605",
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
              "_id": "5de5e01fdedee200147c1685",
              "name": "A520",
              "field_display": "Câu 6: Loại",
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
                "Bia nhẹ",
                "Rượu nhẹ",
                "Rượu mạnh"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-03T04:10:07.190Z",
              "last_modified": "2019-12-03T04:10:07.190Z",
              "field_setting": {
                "field_id": "5de5e01fdedee200147c1685",
                "visible": true,
                "disable": false,
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
              "_id": "5dd65321dedee200147c152c",
              "name": "A156",
              "field_display": "Câu 6: Số Lượng Uống",
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
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T09:04:33.177Z",
              "last_modified": "2019-12-03T04:10:28.926Z",
              "field_setting": {
                "field_id": "5dd65321dedee200147c152c",
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
              "_id": "5dd6533cdedee200147c152d",
              "name": "A157",
              "field_display": "Câu 6: Tần suất sử dụng",
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
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [
                "Hàng Ngày",
                "Hàng Tuần"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T09:05:00.923Z",
              "last_modified": "2019-12-24T06:35:55.181Z",
              "field_setting": {
                "field_id": "5dd6533cdedee200147c152d",
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
          "id": "5dece816d3f551001f8958ad"
        },
        {
          "name": "Health_Check3",
          "layout_name": "Sunlife",
          "index": 11,
          "layout_id": "5de0d7d9dedee200147c1605",
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
              "_id": "5dd65351dedee200147c152e",
              "name": "A158",
              "field_display": "Câu 7:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T09:05:21.876Z",
              "last_modified": "2019-12-18T12:45:24.180Z",
              "field_setting": {
                "field_id": "5dd65351dedee200147c152e",
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
              "_id": "5dd65367dedee200147c152f",
              "name": "A159",
              "field_display": "Câu 8:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T09:05:43.679Z",
              "last_modified": "2019-12-18T12:44:56.261Z",
              "field_setting": {
                "field_id": "5dd65367dedee200147c152f",
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
              "_id": "5dd65fe8dedee200147c1540",
              "name": "A160",
              "field_display": "Câu 9a: chiều cao",
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
                "name": "Number",
                "arguments": {},
                "content": "var regex1 = /[^\\s0-9]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n",
                "created_date": "2019-11-29T08:49:07.590Z",
                "last_modified": "2019-11-29T08:49:07.590Z",
                "id": "5de0db83dedee200147c1611"
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T09:59:04.307Z",
              "last_modified": "2020-02-04T07:45:24.648Z",
              "field_setting": {
                "field_id": "5dd65fe8dedee200147c1540",
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
              "_id": "5dd65ff7dedee200147c1541",
              "name": "A161",
              "field_display": "Câu 9a: cân nặng",
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
                "name": "decimal_number",
                "arguments": {},
                "content": "if(value.split('.').length==2&&(value.split('.')[1].trim().length===0||value.split('.')[0].trim().length===0)){\n    return [{\n            type:'error',\n            message:'Dữ liệu nhập phải là số thập phân'\n    }]\n}\n\n// var num = parseFloat(value).toFixed(3);\nvar tmp = (value*1000 + 0.1*1000 - 0.1*1000)/10 ;\n\n\nvar [ng,tp] =value.split('.')\n// if(value.split('.').length>2){\n//     return [{\n//             type:'warning',\n//             message:'Netto nhập quá 2 số thập phân'\n//     }]\n// }\n\nif(tp&&tp.length>2){\n     return [{type : \"warning\",\n        message :\"nhập quá 2 số thập phân\"\n    }]\n}\n\nif(!tmp&&tmp!==0){\n    return [{\n        type : 'error',\n        message: 'Dữ liệu nhập phải là chuỗi số thập phân'\n    }]\n}\nif(value<0){\n    return [\n        {\n            type:'error',\n            message:'Không được nhập giá trị âm.'\n        }\n        ]\n}\n",
                "created_date": "2019-12-28T09:47:49.178Z",
                "last_modified": "2019-12-28T09:47:49.178Z",
                "id": "5e0724c548fa7900143a5cd0"
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T09:59:19.565Z",
              "last_modified": "2020-02-04T07:43:50.899Z",
              "field_setting": {
                "field_id": "5dd65ff7dedee200147c1541",
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
              "_id": "5dd66009dedee200147c1542",
              "name": "A162",
              "field_display": "Câu 9b:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T09:59:37.597Z",
              "last_modified": "2019-12-18T13:06:51.651Z",
              "field_setting": {
                "field_id": "5dd66009dedee200147c1542",
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
              "_id": "5dd661fbdedee200147c1543",
              "name": "A163",
              "field_display": "Câu 10:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T10:07:55.348Z",
              "last_modified": "2019-12-18T13:06:42.914Z",
              "field_setting": {
                "field_id": "5dd661fbdedee200147c1543",
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
              "_id": "5dd66235dedee200147c1544",
              "name": "A164",
              "field_display": "Câu 10: tình trạng sức khỏe - cha/me",
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
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T10:08:53.100Z",
              "last_modified": "2019-12-03T04:15:10.587Z",
              "field_setting": {
                "field_id": "5dd66235dedee200147c1544",
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
              "_id": "5dd66245dedee200147c1545",
              "name": "A165",
              "field_display": "Câu 10: tình trạng sức khỏe - anh/chi/em",
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
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T10:09:09.197Z",
              "last_modified": "2019-12-03T04:15:18.630Z",
              "field_setting": {
                "field_id": "5dd66245dedee200147c1545",
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
              "_id": "5dd6625bdedee200147c1546",
              "name": "A166",
              "field_display": "Câu 10: tuổi - cha/mẹ",
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
                "name": "Number",
                "arguments": {},
                "content": "var regex1 = /[^\\s0-9]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n",
                "created_date": "2019-11-29T08:49:07.590Z",
                "last_modified": "2019-11-29T08:49:07.590Z",
                "id": "5de0db83dedee200147c1611"
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T10:09:31.709Z",
              "last_modified": "2019-12-19T07:16:17.016Z",
              "field_setting": {
                "field_id": "5dd6625bdedee200147c1546",
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
              "_id": "5dd66267dedee200147c1547",
              "name": "A167",
              "field_display": "Câu 10: tuổi - anh/chị/em",
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
                "name": "Number",
                "arguments": {},
                "content": "var regex1 = /[^\\s0-9]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n",
                "created_date": "2019-11-29T08:49:07.590Z",
                "last_modified": "2019-11-29T08:49:07.590Z",
                "id": "5de0db83dedee200147c1611"
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T10:09:43.291Z",
              "last_modified": "2019-12-19T07:16:24.533Z",
              "field_setting": {
                "field_id": "5dd66267dedee200147c1547",
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
              "_id": "5dd66305dedee200147c1548",
              "name": "A168",
              "field_display": "Câu 10: tuổi qua đời - cha/me",
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
                "name": "Number",
                "arguments": {},
                "content": "var regex1 = /[^\\s0-9]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n",
                "created_date": "2019-11-29T08:49:07.590Z",
                "last_modified": "2019-11-29T08:49:07.590Z",
                "id": "5de0db83dedee200147c1611"
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T10:12:21.400Z",
              "last_modified": "2019-12-19T07:16:33.298Z",
              "field_setting": {
                "field_id": "5dd66305dedee200147c1548",
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
              "_id": "5dd6631ededee200147c1549",
              "name": "A169",
              "field_display": "Câu 10: tuổi qua đời- anh/chị/em",
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
                "name": "Number",
                "arguments": {},
                "content": "var regex1 = /[^\\s0-9]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n",
                "created_date": "2019-11-29T08:49:07.590Z",
                "last_modified": "2019-11-29T08:49:07.590Z",
                "id": "5de0db83dedee200147c1611"
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T10:12:46.622Z",
              "last_modified": "2019-12-19T07:16:41.029Z",
              "field_setting": {
                "field_id": "5dd6631ededee200147c1549",
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
              "_id": "5dd66331dedee200147c154a",
              "name": "A170",
              "field_display": "Câu 11:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T10:13:05.865Z",
              "last_modified": "2019-12-18T12:48:21.040Z",
              "field_setting": {
                "field_id": "5dd66331dedee200147c154a",
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
              "_id": "5dd66342dedee200147c154b",
              "name": "A171",
              "field_display": "Câu 12:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T10:13:22.352Z",
              "last_modified": "2019-12-18T12:48:35.259Z",
              "field_setting": {
                "field_id": "5dd66342dedee200147c154b",
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
              "_id": "5dd66353dedee200147c154c",
              "name": "A172",
              "field_display": "Câu 13:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T10:13:39.362Z",
              "last_modified": "2019-12-18T12:48:49.903Z",
              "field_setting": {
                "field_id": "5dd66353dedee200147c154c",
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
              "_id": "5dd66365dedee200147c154d",
              "name": "A173",
              "field_display": "Câu 14:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T10:13:57.417Z",
              "last_modified": "2019-12-18T12:49:09.449Z",
              "field_setting": {
                "field_id": "5dd66365dedee200147c154d",
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
              "_id": "5dd66377dedee200147c154e",
              "name": "A174",
              "field_display": "Câu 15:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T10:14:15.637Z",
              "last_modified": "2019-12-18T12:49:19.138Z",
              "field_setting": {
                "field_id": "5dd66377dedee200147c154e",
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
              "_id": "5dd6638bdedee200147c154f",
              "name": "A175",
              "field_display": "Câu 16:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T10:14:35.367Z",
              "last_modified": "2019-12-18T12:49:29.635Z",
              "field_setting": {
                "field_id": "5dd6638bdedee200147c154f",
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
              "_id": "5dd6639cdedee200147c1550",
              "name": "A176",
              "field_display": "Câu 17:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T10:14:52.691Z",
              "last_modified": "2019-12-18T12:49:41.214Z",
              "field_setting": {
                "field_id": "5dd6639cdedee200147c1550",
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
              "_id": "5dd663addedee200147c1551",
              "name": "A177",
              "field_display": "Câu 18:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T10:15:09.940Z",
              "last_modified": "2019-12-18T12:49:53.288Z",
              "field_setting": {
                "field_id": "5dd663addedee200147c1551",
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
              "_id": "5dd663c3dedee200147c1552",
              "name": "A178",
              "field_display": "Câu 19:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T10:15:31.393Z",
              "last_modified": "2019-12-18T12:50:03.546Z",
              "field_setting": {
                "field_id": "5dd663c3dedee200147c1552",
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
              "_id": "5dd663d3dedee200147c1553",
              "name": "A179",
              "field_display": "Câu 20:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T10:15:47.930Z",
              "last_modified": "2019-12-18T12:50:14.212Z",
              "field_setting": {
                "field_id": "5dd663d3dedee200147c1553",
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
              "_id": "5dd663e1dedee200147c1554",
              "name": "A180",
              "field_display": "Câu 21:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T10:16:01.836Z",
              "last_modified": "2019-12-18T12:50:24.265Z",
              "field_setting": {
                "field_id": "5dd663e1dedee200147c1554",
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
              "_id": "5dd663f0dedee200147c1555",
              "name": "A181",
              "field_display": "Câu 22:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T10:16:16.805Z",
              "last_modified": "2019-12-18T12:50:33.270Z",
              "field_setting": {
                "field_id": "5dd663f0dedee200147c1555",
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
              "_id": "5dd66450dedee200147c1556",
              "name": "A182",
              "field_display": "Câu 23",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T10:17:52.597Z",
              "last_modified": "2019-12-18T12:50:45.331Z",
              "field_setting": {
                "field_id": "5dd66450dedee200147c1556",
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
              "_id": "5dd66473dedee200147c1557",
              "name": "A183",
              "field_display": "Câu 24:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T10:18:27.814Z",
              "last_modified": "2019-12-18T12:51:02.314Z",
              "field_setting": {
                "field_id": "5dd66473dedee200147c1557",
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
              "_id": "5dd66488dedee200147c1558",
              "name": "A184",
              "field_display": "Câu 25:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T10:18:48.628Z",
              "last_modified": "2019-12-18T12:51:11.221Z",
              "field_setting": {
                "field_id": "5dd66488dedee200147c1558",
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
              "_id": "5dd664a2dedee200147c1559",
              "name": "A185",
              "field_display": "Câu 26:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T10:19:14.542Z",
              "last_modified": "2019-12-18T12:51:24.018Z",
              "field_setting": {
                "field_id": "5dd664a2dedee200147c1559",
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
              "_id": "5dd664bfdedee200147c155a",
              "name": "A186",
              "field_display": "Câu 27:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T10:19:43.138Z",
              "last_modified": "2019-12-18T12:51:35.902Z",
              "field_setting": {
                "field_id": "5dd664bfdedee200147c155a",
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
              "_id": "5dd664d1dedee200147c155b",
              "name": "A187",
              "field_display": "Câu 28:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T10:20:01.129Z",
              "last_modified": "2019-12-18T12:51:46.174Z",
              "field_setting": {
                "field_id": "5dd664d1dedee200147c155b",
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
              "_id": "5dd664e5dedee200147c155c",
              "name": "A188",
              "field_display": "Câu 29:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T10:20:21.946Z",
              "last_modified": "2019-12-18T12:51:59.770Z",
              "field_setting": {
                "field_id": "5dd664e5dedee200147c155c",
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
              "_id": "5dd664f7dedee200147c155d",
              "name": "A189",
              "field_display": "Câu 30:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T10:20:39.363Z",
              "last_modified": "2019-12-18T12:52:10.689Z",
              "field_setting": {
                "field_id": "5dd664f7dedee200147c155d",
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
              "_id": "5dd6650bdedee200147c155e",
              "name": "A190",
              "field_display": "Câu 31:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T10:20:59.802Z",
              "last_modified": "2019-12-18T12:52:19.613Z",
              "field_setting": {
                "field_id": "5dd6650bdedee200147c155e",
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
              "_id": "5dd66523dedee200147c155f",
              "name": "A191",
              "field_display": "Câu 32:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T10:21:23.578Z",
              "last_modified": "2019-12-18T12:52:29.555Z",
              "field_setting": {
                "field_id": "5dd66523dedee200147c155f",
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
              "_id": "5dd66536dedee200147c1560",
              "name": "A192",
              "field_display": "Câu 33:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T10:21:42.063Z",
              "last_modified": "2019-12-18T12:52:39.463Z",
              "field_setting": {
                "field_id": "5dd66536dedee200147c1560",
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
              "_id": "5dd66544dedee200147c1561",
              "name": "A193",
              "field_display": "Câu 33: Đã học xong lớp mấy?",
              "default_value": "*",
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
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T10:21:56.604Z",
              "last_modified": "2019-12-31T06:43:24.659Z",
              "field_setting": {
                "field_id": "5dd66544dedee200147c1561",
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
                        "field": "A192"
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
              "_id": "5dd66553dedee200147c1562",
              "name": "A194",
              "field_display": "33. Số anh chị em ruột hiện có?",
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
                "name": "Number",
                "arguments": {},
                "content": "var regex1 = /[^\\s0-9]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n",
                "created_date": "2019-11-29T08:49:07.590Z",
                "last_modified": "2019-11-29T08:49:07.590Z",
                "id": "5de0db83dedee200147c1611"
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T10:22:11.178Z",
              "last_modified": "2019-12-09T10:11:22.670Z",
              "field_setting": {
                "field_id": "5dd66553dedee200147c1562",
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
                        "field": "A192"
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
              "_id": "5de5e3fededee200147c1686",
              "name": "A195",
              "field_display": "33. Nếu Người được bảo hiểm từ 5 tuổi trở xuống, vui lòng cho biết cân nặng lúc sinh?",
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
                "name": "decimal_number",
                "arguments": {},
                "content": "if(value.split('.').length==2&&(value.split('.')[1].trim().length===0||value.split('.')[0].trim().length===0)){\n    return [{\n            type:'error',\n            message:'Dữ liệu nhập phải là số thập phân'\n    }]\n}\n\n// var num = parseFloat(value).toFixed(3);\nvar tmp = (value*1000 + 0.1*1000 - 0.1*1000)/10 ;\n\nvar [ng,tp] =value.split('.')\n// if(value.split('.').length>2){\n//     return [{\n//             type:'warning',\n//             message:'Netto nhập quá 2 số thập phân'\n//     }]\n// }\n\nif(tp&&tp.length>2){\n     return [{type : \"warning\",\n        message :\"nhập quá 2 số thập phân\"\n    }]\n}\n\nif(!tmp&&tmp!==0){\n    return [{\n        type : 'error',\n        message: 'Dữ liệu nhập phải là chuỗi số thập phân'\n    }]\n}\nif(value<0){\n    return [\n        {\n            type:'error',\n            message:'Không được nhập giá trị âm.'\n        }\n        ]\n}\n",
                "created_date": "2019-12-28T09:47:49.178Z",
                "last_modified": "2019-12-28T09:47:49.178Z",
                "id": "5e0724c548fa7900143a5cd0"
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-03T04:26:38.887Z",
              "last_modified": "2020-02-04T06:49:47.817Z",
              "field_setting": {
                "field_id": "5de5e3fededee200147c1686",
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
                        "field": "A192"
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
              "_id": "5dd66568dedee200147c1563",
              "name": "A196",
              "field_display": "Câu 33: Có sinh sớm hơn trước 4 tuần so với ngày dự sinh",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-21T10:22:32.854Z",
              "last_modified": "2019-12-03T04:27:12.881Z",
              "field_setting": {
                "field_id": "5dd66568dedee200147c1563",
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
                        "field": "A192"
                      }
                    ]
                  ]
                },
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
          "id": "5dece816d3f551001f8958ae"
        },
        {
          "name": "Sub_Form1",
          "layout_name": "Sunlife",
          "index": 12,
          "layout_id": "5de0d7d9dedee200147c1605",
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
              "_id": "5de4df67dedee200147c1632",
              "name": "SP01_05",
              "field_display": "Họ và tên",
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
                "name": "Text Tiếng Việt",
                "arguments": {
                  "field": "SP01_11"
                },
                "content": "var regex1 = /[^\\sA-Za-zsáàảãạâăắằẳẵặặấầẩẫậéèẻẽẹêếềểễệíìỉĩịóòỏõọôơốồổỗộớờởỡợúùủũụưứừửữựýỳỷỹỵđÁÀẢÃẠÂĂẮẰẲẴẶẶẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔƠỐỒỔỖỘỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴĐ]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập chữ \"}]\r\n}\r\n\r\nfunction checkRuleEqual(value_crr =\"\" , value_brd = \"\"){\r\n    value_crr = value_crr.trim()\r\n    value_brd = value_brd.toUpperCase().trim()\r\n    \r\n    if(value_brd===\"F\" && !value_crr || value_brd===\"M\" && !value_crr ){\r\n       return [{type : \"error\" , message : \"Field giới tính là F hoặc M thì field Họ và Tên buộc phải có giá trị\"}];\r\n    }\r\n}\r\n\r\nreturn checkRuleEqual(value, field);",
                "created_date": "2019-11-29T08:21:01.677Z",
                "last_modified": "2019-11-29T08:33:51.062Z",
                "id": "5de0d4eddedee200147c1603"
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T09:54:47.894Z",
              "last_modified": "2020-01-14T03:57:45.784Z",
              "field_setting": {
                "field_id": "5de4df67dedee200147c1632",
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
              "_id": "5de4df76dedee200147c1633",
              "name": "SP01_06",
              "field_display": "Ngày tháng năm sinh",
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
                "name": "Date",
                "arguments": {},
                "content": "function chkDate(date){\r\n\tvar dd = date.substring(0,2);\r\n\tvar mm = date.substring(2,4);\r\n\tvar yy = date.substring(4,6);\r\n\tvar tmpDate = new Date();\r\n\tvar y = tmpDate.getFullYear()+\"\";\r\n\ty = y.substring(2,4)*1 + 1;\r\n\r\n\t//Gan gia tri nam la 19YY neu YY > nam hien tai + 1\r\n\t//Gan gia tri nam la 20YY neu YY <= nam hien tai + 1\r\n\tif(yy*1>y){ yy = 19+yy;\r\n\t}else {yy = 20+yy;}\r\n\r\n\treturn dd+mm+yy;\t\r\n}\r\n\r\nfunction formatdate(ngay_hieu_luc_in78){\r\nvar fvalue = ngay_hieu_luc_in78;\r\n\tvar regex = /^(?:(?:31(|\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(|\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(|\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(|\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$/\r\n\tvar regex1 = /^\\d{6}$/;\r\n\tvar regex2 = /^(\\s*|[0-9\\.\\/\\-]+)$/ ;\r\n\tvar date;\r\nif(fvalue === \"\") return ;\r\n\tif(regex1.test(fvalue))\r\n\treturn ;\r\n\tif(regex2.test(fvalue)){\r\n\t\r\n\tif(!regex.test(fvalue)){\r\n\t\treturn [{type:\"warning\",message:\"Ngày Tháng Năm không phù hợp, vui lòng kiểm tra lại.\"}]\r\n\t}\r\n}else{\r\n    return [{type:\"error\",message:\"Không đúng định dạng ddmmyyyy\"}]\r\n}\r\nfvalue = fvalue.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'');\r\nif(fvalue.length === 6){\r\n\tfvalue = chkDate(fvalue);\r\n}\r\nvar dd = fvalue.substring(0, 2);\r\nvar mm = fvalue.substring(2, 4);\r\nvar yy = fvalue.substring(4, 8);\r\nvar tmpDate = new Date();\r\nvar d = tmpDate.getDate();\r\nvar m = tmpDate.getMonth();\r\nvar y = tmpDate.getFullYear();\r\nvar inputDate = new Date(yy, mm - 1, dd);\r\nvar curDate = new Date(y, m, d);\r\n\r\n\r\n\r\n//So sanh ngay nhap voi ngay hien tai\r\nif (inputDate > curDate) {\r\n return [{type:\"warning\", message:\"Năm nhập lớn hơn năm hiện tại\"}]\r\n}\r\n\r\n\r\n}\r\n\r\nreturn formatdate(value);",
                "created_date": "2019-11-28T06:50:27.116Z",
                "last_modified": "2019-11-28T06:50:27.116Z",
                "id": "5ddf6e33dedee200147c15f7"
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
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T09:55:02.650Z",
              "last_modified": "2019-12-18T03:18:10.474Z",
              "text_type": "DATE",
              "field_setting": {
                "field_id": "5de4df76dedee200147c1633",
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
              "_id": "5de4df8ededee200147c1635",
              "name": "SP01_08",
              "field_display": "Nơi Sinh",
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
                "key_value": "value",
                "locale": [
                  "165_191128_340_SUNLIFE"
                ],
                "lookup_after_time": 1,
                "lookup_field": "birthplace",
                "name": "Sunlife_BirthPlace",
                "param_set": "return [data.SP01_08]",
                "result_view_config": [
                  {
                    "title": "Birth Place",
                    "key_value": "value"
                  }
                ],
                "related_columns": [],
                "specific_project": "0",
                "created_date": "2019-12-10T02:44:01.404Z",
                "last_modified": "2019-12-10T02:44:01.404Z",
                "id": "5def0671d3f551001f8958b4"
              },
              "validation": {
                "name": "",
                "content": "if (value){\r\n    async function checkValidation(value) {\r\n            let dataLookup =  await fetchJSON(`https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/birthplace/[%22${value}%22]`);\r\n            let _value =value.toLowerCase(); \r\n            if (!Array.isArray(dataLookup.json_single)||dataLookup.json_single.map(item => item.value.toLowerCase()).findIndex(item => item === _value) === -1) {\r\n                            return [{\r\n                              type: \"error\",\r\n                              message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                            }]\r\n                         }\r\n            // if(value.toLowerCase().includes('nhhien'))             \r\n            //              return[{ \r\n            //                   type: 'warning',\r\n            //                   message: `Lookup warning value:${value}`}];\r\n    }\r\n    return await checkValidation(value);\r\n    }\r\n",
                "arguments": {}
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T09:55:26.349Z",
              "last_modified": "2020-01-16T09:24:42.959Z",
              "field_setting": {
                "field_id": "5de4df8ededee200147c1635",
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
              "_id": "5de4df99dedee200147c1636",
              "name": "SP01_09",
              "field_display": "Quốc Tịch 1",
              "default_value": "Việt Nam",
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
              "validation": {
                "name": "",
                "content": "if (value){\r\n    async function checkValidation(value) {\r\n            let dataLookup =  await fetchJSON(`https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/nationality/[%22${value}%22]`);\r\n            let _value =value.toLowerCase(); \r\n            if (!Array.isArray(dataLookup.json_single)||dataLookup.json_single.map(item => item.value.toLowerCase()).findIndex(item => item === _value) === -1) {\r\n                            return [{\r\n                              type: \"error\",\r\n                              message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                            }]\r\n                         }\r\n            // if(value.toLowerCase().includes('nhhien'))             \r\n            //              return[{ \r\n            //                   type: 'warning',\r\n            //                   message: `Lookup warning value:${value}`}];\r\n    }\r\n    return await checkValidation(value);\r\n    }",
                "arguments": {}
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T09:55:37.212Z",
              "last_modified": "2020-01-16T09:24:57.772Z",
              "field_setting": {
                "field_id": "5de4df99dedee200147c1636",
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
              "_id": "5de4dfa6dedee200147c1637",
              "name": "SP01_10",
              "field_display": "Quốc tịch 2 (nếu có)",
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
              "validation": {
                "name": "",
                "content": "if (value){\r\n    async function checkValidation(value) {\r\n            let dataLookup =  await fetchJSON(`https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/nationality/[%22${value}%22]`);\r\n            let _value =value.toLowerCase(); \r\n            if (!Array.isArray(dataLookup.json_single)||dataLookup.json_single.map(item => item.value.toLowerCase()).findIndex(item => item === _value) === -1) {\r\n                            return [{\r\n                              type: \"error\",\r\n                              message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                            }]\r\n                         }\r\n            // if(value.toLowerCase().includes('nhhien'))             \r\n            //              return[{ \r\n            //                   type: 'warning',\r\n            //                   message: `Lookup warning value:${value}`}];\r\n    }\r\n    return await checkValidation(value);\r\n    }",
                "arguments": {}
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T09:55:50.444Z",
              "last_modified": "2020-01-16T09:25:10.912Z",
              "field_setting": {
                "field_id": "5de4dfa6dedee200147c1637",
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
              "_id": "5de4dfb1dedee200147c1638",
              "name": "SP01_11",
              "field_display": "Giới tính",
              "default_value": "",
              "control_type": "TEXTFIELD",
              "tooltip": "",
              "is_list": false,
              "counted_character": true,
              "pattern": {
                "name": "",
                "arguments": {},
                "content": "^[MmFfCc]{0,1}$",
                "description": "Chỉ được nhập M hoặc F hoặc C"
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
                "content": "if(!value){\n    return [{type:\"error\",message:\"Không được trống\"}]\n}",
                "arguments": {}
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value.toUpperCase());",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T09:56:01.393Z",
              "last_modified": "2019-12-24T08:30:53.508Z",
              "field_setting": {
                "field_id": "5de4dfb1dedee200147c1638",
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
              "_id": "5de4dfc3dedee200147c1639",
              "name": "SP01_12",
              "field_display": "Tình trạng hôn nhân",
              "default_value": "",
              "control_type": "TEXTFIELD",
              "tooltip": "",
              "is_list": false,
              "counted_character": true,
              "pattern": {
                "name": "",
                "arguments": {},
                "content": "^[DdMmSsWwOo]{0,1}$",
                "description": "Chỉ được nhập 1 trong các ký tự: D M S W O"
              },
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
              "validation": {
                "name": "",
                "content": "if(!value){\n    return [{type:\"error\",message:\"Không được bỏ trống\"}]\n}",
                "arguments": {}
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value.toUpperCase());",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T09:56:19.049Z",
              "last_modified": "2019-12-24T08:36:21.289Z",
              "field_setting": {
                "field_id": "5de4dfc3dedee200147c1639",
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
              "_id": "5de4dfcddedee200147c163a",
              "name": "SP01_13",
              "field_display": "Loại Giấy Tờ",
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
                "content": "if(!value){\n    return [{type : \"error\", message: \"Vui lòng chọn loại giấy tờ\"}]\n}",
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
                "CMND",
                "Passport",
                "CCCD",
                "Giấy Khai Sinh"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T09:56:29.547Z",
              "last_modified": "2020-01-16T09:39:12.092Z",
              "field_setting": {
                "field_id": "5de4dfcddedee200147c163a",
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
              "_id": "5de4dfdbdedee200147c163b",
              "name": "SP01_14",
              "field_display": "Số giấy tờ tùy thân",
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
                "name": "Text + Number",
                "arguments": {
                  "given": "SP01_13"
                },
                "content": "function checkCharacter(value) {\r\n\r\n    if(!value){\r\n        return false;\r\n    }else{\r\n        return true;\r\n    }\r\n  }\r\nfunction checkEqualGiven(surname_value =\"\" , given_value = \"\"){\r\n      surname_value = surname_value.trim()\r\n      given_value = given_value.trim()\r\n      var regex1 = /^[0-9]{9}$/;\r\n      var regex2 = /^[0-9]{12}$/;\r\n      var regex3 = /^[A-Z0-9]{8,9}$/;\r\n\r\n      if(!regex1.test(surname_value) && given_value === \"CMND\"){\r\n          return [{type : \"error\" , message : \"CMND chỉ nhập 9 số\"}];\r\n      }else\r\n      if(!regex2.test(surname_value) && given_value === \"CCCD\"){\r\n          return [{type : \"error\" , message : \"CCCD chỉ nhập 12 số\"}];\r\n      }else\r\n      if(!regex3.test(surname_value) && given_value === \"Passport\"){\r\n          return [{type : \"error\" , message : \"Passport chỉ nhập chữ in và 8 hoặc 9 số\"}];\r\n      }\r\n     \r\n     return;\r\n  }\r\n  \r\nfunction checkError(value){\r\n      if(checkCharacter(value) === true){\r\n          \r\n             return checkEqualGiven(value, given);\r\n              \r\n      }else{\r\n          return [{type : \"warning\" , message : \"Không có số giấy tờ tùy thân\"}];\r\n      }\r\n  }\r\n  \r\nreturn checkError(value);",
                "created_date": "2019-11-28T06:46:23.478Z",
                "last_modified": "2019-11-29T08:25:58.570Z",
                "id": "5ddf6d3fdedee200147c15f6"
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T09:56:43.158Z",
              "last_modified": "2019-12-24T11:37:37.304Z",
              "field_setting": {
                "field_id": "5de4dfdbdedee200147c163b",
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
              "_id": "5de4dfe7dedee200147c163c",
              "name": "SP01_15",
              "field_display": "Ngày cấp",
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
                "name": "Date",
                "arguments": {},
                "content": "function chkDate(date){\r\n\tvar dd = date.substring(0,2);\r\n\tvar mm = date.substring(2,4);\r\n\tvar yy = date.substring(4,6);\r\n\tvar tmpDate = new Date();\r\n\tvar y = tmpDate.getFullYear()+\"\";\r\n\ty = y.substring(2,4)*1 + 1;\r\n\r\n\t//Gan gia tri nam la 19YY neu YY > nam hien tai + 1\r\n\t//Gan gia tri nam la 20YY neu YY <= nam hien tai + 1\r\n\tif(yy*1>y){ yy = 19+yy;\r\n\t}else {yy = 20+yy;}\r\n\r\n\treturn dd+mm+yy;\t\r\n}\r\n\r\nfunction formatdate(ngay_hieu_luc_in78){\r\nvar fvalue = ngay_hieu_luc_in78;\r\n\tvar regex = /^(?:(?:31(|\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(|\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(|\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(|\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$/\r\n\tvar regex1 = /^\\d{6}$/;\r\n\tvar regex2 = /^(\\s*|[0-9\\.\\/\\-]+)$/ ;\r\n\tvar date;\r\nif(fvalue === \"\") return ;\r\n\tif(regex1.test(fvalue))\r\n\treturn ;\r\n\tif(regex2.test(fvalue)){\r\n\t\r\n\tif(!regex.test(fvalue)){\r\n\t\treturn [{type:\"warning\",message:\"Ngày Tháng Năm không phù hợp, vui lòng kiểm tra lại.\"}]\r\n\t}\r\n}else{\r\n    return [{type:\"error\",message:\"Không đúng định dạng ddmmyyyy\"}]\r\n}\r\nfvalue = fvalue.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'');\r\nif(fvalue.length === 6){\r\n\tfvalue = chkDate(fvalue);\r\n}\r\nvar dd = fvalue.substring(0, 2);\r\nvar mm = fvalue.substring(2, 4);\r\nvar yy = fvalue.substring(4, 8);\r\nvar tmpDate = new Date();\r\nvar d = tmpDate.getDate();\r\nvar m = tmpDate.getMonth();\r\nvar y = tmpDate.getFullYear();\r\nvar inputDate = new Date(yy, mm - 1, dd);\r\nvar curDate = new Date(y, m, d);\r\n\r\n\r\n\r\n//So sanh ngay nhap voi ngay hien tai\r\nif (inputDate > curDate) {\r\n return [{type:\"warning\", message:\"Năm nhập lớn hơn năm hiện tại\"}]\r\n}\r\n\r\n\r\n}\r\n\r\nreturn formatdate(value);",
                "created_date": "2019-11-28T06:50:27.116Z",
                "last_modified": "2019-11-28T06:50:27.116Z",
                "id": "5ddf6e33dedee200147c15f7"
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
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T09:56:55.270Z",
              "last_modified": "2019-12-18T03:18:23.299Z",
              "text_type": "DATE",
              "field_setting": {
                "field_id": "5de4dfe7dedee200147c163c",
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
              "_id": "5de4dff0dedee200147c163d",
              "name": "SP01_16",
              "field_display": "Điện thoại nhà riêng",
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
                "name": "Number",
                "arguments": {},
                "content": "var regex1 = /[^\\s0-9]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n",
                "created_date": "2019-11-29T08:49:07.590Z",
                "last_modified": "2019-11-29T08:49:07.590Z",
                "id": "5de0db83dedee200147c1611"
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T09:57:04.938Z",
              "last_modified": "2019-12-04T07:14:42.481Z",
              "field_setting": {
                "field_id": "5de4dff0dedee200147c163d",
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
              "_id": "5de4dffbdedee200147c163e",
              "name": "SP01_17",
              "field_display": "Điện thoại di động",
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
                "name": "Number",
                "arguments": {},
                "content": "var regex1 = /[^\\s0-9]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n",
                "created_date": "2019-11-29T08:49:07.590Z",
                "last_modified": "2019-11-29T08:49:07.590Z",
                "id": "5de0db83dedee200147c1611"
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T09:57:15.227Z",
              "last_modified": "2019-12-04T07:44:46.095Z",
              "field_setting": {
                "field_id": "5de4dffbdedee200147c163e",
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
              "_id": "5de4e004dedee200147c163f",
              "name": "SP01_18",
              "field_display": "Địa chỉ email",
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
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T09:57:24.528Z",
              "last_modified": "2019-12-04T07:48:32.116Z",
              "field_setting": {
                "field_id": "5de4e004dedee200147c163f",
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
              "_id": "5de4e00ededee200147c1640",
              "name": "SP01_19",
              "field_display": "Nghề nghiệp",
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
              "validation": {
                "name": "",
                "content": "if (value){\r\n    async function checkValidation(value) {\r\n            let dataLookup =  await fetchJSON(`https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/occupation/[%22${value}%22]`);\r\n            let _value =value.toLowerCase(); \r\n            if (!Array.isArray(dataLookup.json_single)||dataLookup.json_single.map(item => item.value.toLowerCase()).findIndex(item => item === _value) === -1) {\r\n                            return [{\r\n                              type: \"error\",\r\n                              message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                            }]\r\n                         }\r\n            // if(value.toLowerCase().includes('nhhien'))             \r\n            //              return[{ \r\n            //                   type: 'warning',\r\n            //                   message: `Lookup warning value:${value}`}];\r\n    }\r\n    return await checkValidation(value);\r\n    }",
                "arguments": {}
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T09:57:34.655Z",
              "last_modified": "2019-12-18T06:58:18.183Z",
              "field_setting": {
                "field_id": "5de4e00ededee200147c1640",
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
              "_id": "5de4e030dedee200147c1642",
              "name": "SP01_21",
              "field_display": "Tên cơ quan",
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
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T09:58:08.518Z",
              "last_modified": "2019-12-04T07:49:03.360Z",
              "field_setting": {
                "field_id": "5de4e030dedee200147c1642",
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
              "_id": "5de4e03ddedee200147c1643",
              "name": "SP01_22",
              "field_display": "Thu nhập ước tính hàng năm",
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
                "name": "Number",
                "arguments": {},
                "content": "var regex1 = /[^\\s0-9.+]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n",
                "created_date": "2019-11-29T08:49:07.590Z",
                "last_modified": "2019-11-29T08:49:07.590Z",
                "id": "5de0db83dedee200147c1611"
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n    if (input.includes('+')) {\r\n        input = input.replace(/[+]/g, '000');\r\n    }\r\n\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\tinput = input.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'-');\r\n\tinput = input.replace(/[\\s\\t]*(\\()[\\s\\t]*/g,' (');\r\n\tinput = input.replace(/[\\s\\t]*(\\))[\\s\\t]*/g,') ');\r\n    input = input.replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'/');\r\n    input = input.replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'.');\r\n    input = input.replace(/[\\s\\t]*(\\,)[\\s\\t]*/g,',');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T09:58:21.203Z",
              "last_modified": "2019-12-24T06:43:21.602Z",
              "field_setting": {
                "field_id": "5de4e03ddedee200147c1643",
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
              "_id": "5e202d364b5de3001add6316",
              "name": "SP01_500",
              "field_display": "Giống địa chỉ BMBH hay không",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2020-01-16T09:30:30.440Z",
              "last_modified": "2020-01-16T09:30:30.440Z",
              "field_setting": {
                "field_id": "5e202d364b5de3001add6316",
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
              "_id": "5de4e07cdedee200147c1648",
              "name": "SP01_27",
              "field_display": "Tỉnh/Thành phố",
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
              "validation": {
                "name": "",
                "content": "if (value){\r\n    async function checkValidation(value) {\r\n            let dataLookup =  await fetchJSON(`https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/province/${encodeURIComponent(`[\"${value}\"]`)}`);\r\n            let _value =value.toLowerCase(); \r\n            if (!Array.isArray(dataLookup.json_single)||dataLookup.json_single.map(item => item.prov_nm.toLowerCase()).findIndex(item => item === _value) === -1) {\r\n                            return [{\r\n                              type: \"error\",\r\n                              message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                            }]\r\n                         }\r\n            // if(value.toLowerCase().includes('nhhien'))             \r\n            //              return[{ \r\n            //                   type: 'warning',\r\n            //                   message: `Lookup warning value:${value}`}];\r\n    }\r\n    return await checkValidation(value);\r\n    }",
                "arguments": {}
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T09:59:24.037Z",
              "last_modified": "2020-02-11T07:56:41.647Z",
              "field_setting": {
                "field_id": "5de4e07cdedee200147c1648",
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
              "_id": "5de4e070dedee200147c1647",
              "name": "SP01_26",
              "field_display": "Quận/Huyện",
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
              "validation": {
                "name": "",
                "content": "//console.log(arguments,'asdgasdgasdgasdg')    \r\nasync function checkValidation(value) {\r\n  let params = encodeURIComponent(`[\"${qh}\",\"${value}\"]`)\r\n  let uri = `https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/district/${params}`\r\n  let dataLookup = await fetchJSON(uri);\r\n//   console.log(dataLookup,'dataLookup');\r\n  if (!Array.isArray(dataLookup.json_single) || dataLookup.json_single.map(item => item.dist_nm).findIndex(item => item === value.trim()) === -1) {\r\n                      return [{\r\n                         type: \"error\",\r\n                         message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                      }]\r\n                    }\r\n}\r\nif (value){\r\nreturn  await checkValidation(value);\r\n}",
                "arguments": {
                  "qh": "SP01_27"
                }
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T09:59:12.155Z",
              "last_modified": "2020-02-12T07:07:30.871Z",
              "field_setting": {
                "field_id": "5de4e070dedee200147c1647",
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
              "_id": "5de4e066dedee200147c1646",
              "name": "SP01_25",
              "field_display": "Phường/Xã",
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
              "validation": {
                "name": "",
                "content": "//console.log(arguments,'asdgasdgasdgasdg')    \r\nasync function checkValidation(value) {\r\n  let params = encodeURIComponent(`[\"${tp}\",\"${qh}\",\"${value}\"]`)\r\n  let uri = `https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/ward/${params}`\r\n  let dataLookup = await fetchJSON(uri);\r\n//   console.log(dataLookup,'dataLookup');\r\n  if (!Array.isArray(dataLookup.json_single) || dataLookup.json_single.map(item => item.ward_nm).findIndex(item => item === value.trim()) === -1) {\r\n                      return [{\r\n                         type: \"error\",\r\n                         message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                      }]\r\n                    }\r\n}\r\nif (value){\r\nreturn  await checkValidation(value);\r\n}",
                "arguments": {
                  "tp": "SP01_27",
                  "qh": "SP01_26"
                }
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T09:59:02.214Z",
              "last_modified": "2020-02-12T07:08:04.824Z",
              "field_setting": {
                "field_id": "5de4e066dedee200147c1646",
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
              "_id": "5de4e05ddedee200147c1645",
              "name": "SP01_24",
              "field_display": "Số nhà hoặc Thôn/Xóm/Tổ/Làng/Đường",
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
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T09:58:53.253Z",
              "last_modified": "2019-12-04T07:56:39.626Z",
              "field_setting": {
                "field_id": "5de4e05ddedee200147c1645",
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
              "_id": "5de4e086dedee200147c1649",
              "name": "SP01_28",
              "field_display": "Mối quan hệ của NĐBH với BMBH",
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
                "key_value": "english",
                "locale": [
                  "165_191128_340_SUNLIFE"
                ],
                "lookup_after_time": 1,
                "lookup_field": "relationship",
                "name": "Sunlife_Relationship",
                "param_set": "return [data.SP01_28]",
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
              "validation": {
                "name": "",
                "content": "// if (value){\r\n//     async function checkValidation(value) {\r\n//             let dataLookup =  await fetchJSON(`https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/relationship/[%22${value}%22]`);\r\n//             let _value =value.toLowerCase(); \r\n//             if (!Array.isArray(dataLookup.json_single)||\r\n//             dataLookup.json_single.map(item => item.english).findIndex(item => item === _value.trim()) === -1) {\r\n//                             return [{\r\n//                               type: \"error\",\r\n//                               message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n//                             }]\r\n//                          }\r\n//             // if(value.toLowerCase().includes('nhhien'))             \r\n//             //              return[{ \r\n//             //                   type: 'warning',\r\n//             //                   message: `Lookup warning value:${value}`}];\r\n//     }\r\n//     return await checkValidation(value);\r\n//     }",
                "arguments": {}
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T09:59:34.974Z",
              "last_modified": "2020-02-12T12:06:44.860Z",
              "field_setting": {
                "field_id": "5de4e086dedee200147c1649",
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
              "_id": "5de4e092dedee200147c164a",
              "name": "SP01_29",
              "field_display": "Quý khách có các hợp đồng bảo hiểm còn đang hiệu lực",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T09:59:46.439Z",
              "last_modified": "2019-12-18T13:10:55.562Z",
              "field_setting": {
                "field_id": "5de4e092dedee200147c164a",
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
              "_id": "5de4e0a0dedee200147c164b",
              "name": "SP01_30",
              "field_display": "Công ty bảo hiểm",
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
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T10:00:00.667Z",
              "last_modified": "2019-12-18T13:11:07.379Z",
              "field_setting": {
                "field_id": "5de4e0a0dedee200147c164b",
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
              "_id": "5de4e0aadedee200147c164c",
              "name": "SP01_31",
              "field_display": "Tên sản phẩm bảo hiểm",
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
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T10:00:10.470Z",
              "last_modified": "2019-12-18T13:11:15.828Z",
              "field_setting": {
                "field_id": "5de4e0aadedee200147c164c",
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
              "_id": "5de4e0b3dedee200147c164d",
              "name": "SP01_32",
              "field_display": "Tổng số tiền bảo hiểm",
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
                "name": "Number",
                "arguments": {},
                "content": "var regex1 = /[^\\s0-9]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n",
                "created_date": "2019-11-29T08:49:07.590Z",
                "last_modified": "2019-11-29T08:49:07.590Z",
                "id": "5de0db83dedee200147c1611"
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T10:00:19.798Z",
              "last_modified": "2019-12-18T13:11:22.878Z",
              "field_setting": {
                "field_id": "5de4e0b3dedee200147c164d",
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
              "_id": "5de4e0bddedee200147c164e",
              "name": "SP01_33",
              "field_display": "Năm phát hành hợp đồng",
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
                "name": "Number",
                "arguments": {},
                "content": "var regex1 = /[^\\s0-9]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n",
                "created_date": "2019-11-29T08:49:07.590Z",
                "last_modified": "2019-11-29T08:49:07.590Z",
                "id": "5de0db83dedee200147c1611"
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T10:00:29.593Z",
              "last_modified": "2019-12-18T13:11:34.404Z",
              "field_setting": {
                "field_id": "5de4e0bddedee200147c164e",
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
              "_id": "5de4e0cadedee200147c164f",
              "name": "SP01_34",
              "field_display": "Tình trạng hợp đồng",
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
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T10:00:42.212Z",
              "last_modified": "2019-12-18T13:11:45.230Z",
              "field_setting": {
                "field_id": "5de4e0cadedee200147c164f",
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
              "_id": "5de4e0eddedee200147c1650",
              "name": "SP01_35",
              "field_display": "Câu 1:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T10:01:17.917Z",
              "last_modified": "2019-12-18T13:12:01.811Z",
              "field_setting": {
                "field_id": "5de4e0eddedee200147c1650",
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
              "_id": "5de4e10bdedee200147c1651",
              "name": "SP01_36",
              "field_display": "Câu 2:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T10:01:47.674Z",
              "last_modified": "2019-12-18T13:12:14.727Z",
              "field_setting": {
                "field_id": "5de4e10bdedee200147c1651",
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
              "_id": "5de4e12adedee200147c1652",
              "name": "SP01_37",
              "field_display": "Câu 3:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T10:02:18.880Z",
              "last_modified": "2019-12-18T13:12:23.572Z",
              "field_setting": {
                "field_id": "5de4e12adedee200147c1652",
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
              "_id": "5de4e157dedee200147c1653",
              "name": "SP01_38",
              "field_display": "Câu 4:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T10:03:03.121Z",
              "last_modified": "2019-12-18T13:12:39.375Z",
              "field_setting": {
                "field_id": "5de4e157dedee200147c1653",
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
              "_id": "5de4e175dedee200147c1654",
              "name": "SP01_39",
              "field_display": "Câu 5:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T10:03:33.542Z",
              "last_modified": "2019-12-18T13:12:54.712Z",
              "field_setting": {
                "field_id": "5de4e175dedee200147c1654",
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
              "_id": "5de4e193dedee200147c1655",
              "name": "SP01_40",
              "field_display": "5- Số lượng/ngày",
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
                "name": "Number",
                "arguments": {},
                "content": "var regex1 = /[^\\s0-9]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n",
                "created_date": "2019-11-29T08:49:07.590Z",
                "last_modified": "2019-11-29T08:49:07.590Z",
                "id": "5de0db83dedee200147c1611"
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T10:04:03.637Z",
              "last_modified": "2019-12-02T10:09:26.709Z",
              "field_setting": {
                "field_id": "5de4e193dedee200147c1655",
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
              "_id": "5de4e1addedee200147c1656",
              "name": "SP01_41",
              "field_display": "Câu 6:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T10:04:29.498Z",
              "last_modified": "2019-12-18T13:14:01.494Z",
              "field_setting": {
                "field_id": "5de4e1addedee200147c1656",
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
          "id": "5dece816d3f551001f8958af"
        },
        {
          "name": "Sub_Form_C6",
          "layout_name": "Sunlife",
          "index": 13,
          "layout_id": "5de0d7d9dedee200147c1605",
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
              "_id": "5de4e1e4dedee200147c1658",
              "name": "SP01_43",
              "field_display": "Loại",
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
                "Bia nhẹ",
                "Rượu nhẹ",
                "Rượu mạnh"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T10:05:24.832Z",
              "last_modified": "2019-12-02T10:05:24.832Z",
              "field_setting": {
                "field_id": "5de4e1e4dedee200147c1658",
                "visible": true,
                "disable": false,
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
              "_id": "5de4e1f3dedee200147c1659",
              "name": "SP01_44",
              "field_display": "Số lượng uống  ",
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
                "name": "Number",
                "arguments": {},
                "content": "var regex1 = /[^\\s0-9]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n",
                "created_date": "2019-11-29T08:49:07.590Z",
                "last_modified": "2019-11-29T08:49:07.590Z",
                "id": "5de0db83dedee200147c1611"
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T10:05:39.946Z",
              "last_modified": "2019-12-04T08:05:37.836Z",
              "field_setting": {
                "field_id": "5de4e1f3dedee200147c1659",
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
              "_id": "5de4e20bdedee200147c165a",
              "name": "SP01_45",
              "field_display": "Tần suất sử dụng",
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
                "Ngày",
                "Tuần"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T10:06:03.378Z",
              "last_modified": "2019-12-02T10:06:03.378Z",
              "field_setting": {
                "field_id": "5de4e20bdedee200147c165a",
                "visible": true,
                "disable": false,
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
          "id": "5dece816d3f551001f8958b1"
        },
        {
          "name": "Sub_Form2",
          "layout_name": "Sunlife",
          "index": 14,
          "layout_id": "5de0d7d9dedee200147c1605",
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
              "_id": "5de4e22ddedee200147c165b",
              "name": "SP01_46",
              "field_display": "Câu 7:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T10:06:37.452Z",
              "last_modified": "2019-12-18T13:14:43.723Z",
              "field_setting": {
                "field_id": "5de4e22ddedee200147c165b",
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
              "_id": "5de4e240dedee200147c165c",
              "name": "SP01_47",
              "field_display": "Câu 8:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T10:06:56.523Z",
              "last_modified": "2019-12-18T13:14:54.719Z",
              "field_setting": {
                "field_id": "5de4e240dedee200147c165c",
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
              "_id": "5de4e253dedee200147c165d",
              "name": "SP01_48",
              "field_display": "Câu 9a) chiều cao",
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
                "name": "Number",
                "arguments": {},
                "content": "var regex1 = /[^\\s0-9]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n",
                "created_date": "2019-11-29T08:49:07.590Z",
                "last_modified": "2019-11-29T08:49:07.590Z",
                "id": "5de0db83dedee200147c1611"
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T10:07:15.580Z",
              "last_modified": "2020-02-04T07:45:04.391Z",
              "field_setting": {
                "field_id": "5de4e253dedee200147c165d",
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
              "_id": "5de4e25ddedee200147c165e",
              "name": "SP01_49",
              "field_display": "Câu 9a) cân nặng",
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
                "name": "decimal_number",
                "arguments": {},
                "content": "if(value.split('.').length==2&&(value.split('.')[1].trim().length===0||value.split('.')[0].trim().length===0)){\n    return [{\n            type:'error',\n            message:'Dữ liệu nhập phải là số thập phân'\n    }]\n}\n\n// var num = parseFloat(value).toFixed(3);\nvar tmp = (value*1000 + 0.1*1000 - 0.1*1000)/10 ;\n\n\nvar [ng,tp] =value.split('.')\n// if(value.split('.').length>2){\n//     return [{\n//             type:'warning',\n//             message:'Netto nhập quá 2 số thập phân'\n//     }]\n// }\n\nif(tp&&tp.length>2){\n     return [{type : \"warning\",\n        message :\"nhập quá 2 số thập phân\"\n    }]\n}\n\nif(!tmp&&tmp!==0){\n    return [{\n        type : 'error',\n        message: 'Dữ liệu nhập phải là chuỗi số thập phân'\n    }]\n}\nif(value<0){\n    return [\n        {\n            type:'error',\n            message:'Không được nhập giá trị âm.'\n        }\n        ]\n}\n",
                "created_date": "2019-12-28T09:47:49.178Z",
                "last_modified": "2019-12-28T09:47:49.178Z",
                "id": "5e0724c548fa7900143a5cd0"
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T10:07:25.025Z",
              "last_modified": "2020-02-04T07:44:08.906Z",
              "field_setting": {
                "field_id": "5de4e25ddedee200147c165e",
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
              "_id": "5de4e272dedee200147c165f",
              "name": "SP01_50",
              "field_display": "Câu 9b:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T10:07:46.684Z",
              "last_modified": "2019-12-18T13:15:13.525Z",
              "field_setting": {
                "field_id": "5de4e272dedee200147c165f",
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
              "_id": "5de4e291dedee200147c1660",
              "name": "SP01_51",
              "field_display": "Câu 10:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T10:08:17.953Z",
              "last_modified": "2019-12-18T13:15:40.556Z",
              "field_setting": {
                "field_id": "5de4e291dedee200147c1660",
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
              "_id": "5de4e318dedee200147c1661",
              "name": "SP01_52",
              "field_display": "10- tình trạng sức khỏe - cha/me",
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
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T10:10:32.024Z",
              "last_modified": "2019-12-04T08:13:54.641Z",
              "field_setting": {
                "field_id": "5de4e318dedee200147c1661",
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
              "_id": "5de4e322dedee200147c1662",
              "name": "SP01_53",
              "field_display": "10 - tình trạng sức khỏe - anh/chi/em",
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
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T10:10:42.266Z",
              "last_modified": "2019-12-04T08:18:53.026Z",
              "field_setting": {
                "field_id": "5de4e322dedee200147c1662",
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
              "_id": "5de4e330dedee200147c1663",
              "name": "SP01_54",
              "field_display": "10- tuổi - cha/mẹ",
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
                "name": "Number",
                "arguments": {},
                "content": "var regex1 = /[^\\s0-9]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n",
                "created_date": "2019-11-29T08:49:07.590Z",
                "last_modified": "2019-11-29T08:49:07.590Z",
                "id": "5de0db83dedee200147c1611"
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T10:10:56.955Z",
              "last_modified": "2019-12-04T08:19:28.995Z",
              "field_setting": {
                "field_id": "5de4e330dedee200147c1663",
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
              "_id": "5de4e33cdedee200147c1664",
              "name": "SP01_55",
              "field_display": "10 - tuổi - anh/chị/em",
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
                "name": "Number",
                "arguments": {},
                "content": "var regex1 = /[^\\s0-9]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n",
                "created_date": "2019-11-29T08:49:07.590Z",
                "last_modified": "2019-11-29T08:49:07.590Z",
                "id": "5de0db83dedee200147c1611"
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T10:11:08.260Z",
              "last_modified": "2019-12-04T08:19:47.405Z",
              "field_setting": {
                "field_id": "5de4e33cdedee200147c1664",
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
              "_id": "5de4e34bdedee200147c1665",
              "name": "SP01_56",
              "field_display": "10 - tuổi qua đời - cha/me",
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
                "name": "Number",
                "arguments": {},
                "content": "var regex1 = /[^\\s0-9]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n",
                "created_date": "2019-11-29T08:49:07.590Z",
                "last_modified": "2019-11-29T08:49:07.590Z",
                "id": "5de0db83dedee200147c1611"
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T10:11:23.520Z",
              "last_modified": "2019-12-04T08:20:35.804Z",
              "field_setting": {
                "field_id": "5de4e34bdedee200147c1665",
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
              "_id": "5de4e357dedee200147c1666",
              "name": "SP01_57",
              "field_display": "10- tuổi qua đời - anh/chị/em",
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
                "name": "Number",
                "arguments": {},
                "content": "var regex1 = /[^\\s0-9]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n",
                "created_date": "2019-11-29T08:49:07.590Z",
                "last_modified": "2019-11-29T08:49:07.590Z",
                "id": "5de0db83dedee200147c1611"
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T10:11:35.785Z",
              "last_modified": "2019-12-04T08:21:08.135Z",
              "field_setting": {
                "field_id": "5de4e357dedee200147c1666",
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
              "_id": "5de4e378dedee200147c1667",
              "name": "SP01_58",
              "field_display": "Câu 11:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T10:12:08.195Z",
              "last_modified": "2019-12-18T13:16:17.540Z",
              "field_setting": {
                "field_id": "5de4e378dedee200147c1667",
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
              "_id": "5de4e39ededee200147c1668",
              "name": "SP01_59",
              "field_display": "Câu 12",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T10:12:46.307Z",
              "last_modified": "2019-12-18T13:16:32.118Z",
              "field_setting": {
                "field_id": "5de4e39ededee200147c1668",
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
              "_id": "5de4e3b6dedee200147c1669",
              "name": "SP01_60",
              "field_display": "Câu 13:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T10:13:10.188Z",
              "last_modified": "2019-12-18T13:16:45.217Z",
              "field_setting": {
                "field_id": "5de4e3b6dedee200147c1669",
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
              "_id": "5de4e3d4dedee200147c166a",
              "name": "SP01_61",
              "field_display": "Câu 14:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T10:13:40.288Z",
              "last_modified": "2019-12-18T13:16:56.191Z",
              "field_setting": {
                "field_id": "5de4e3d4dedee200147c166a",
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
              "_id": "5de4e3f4dedee200147c166b",
              "name": "SP01_62",
              "field_display": "Câu 15:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T10:14:12.190Z",
              "last_modified": "2019-12-18T13:17:14.909Z",
              "field_setting": {
                "field_id": "5de4e3f4dedee200147c166b",
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
              "_id": "5de4e41adedee200147c166c",
              "name": "SP01_63",
              "field_display": "Câu 16:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T10:14:50.475Z",
              "last_modified": "2019-12-18T13:17:24.898Z",
              "field_setting": {
                "field_id": "5de4e41adedee200147c166c",
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
              "_id": "5de4e441dedee200147c166d",
              "name": "SP01_64",
              "field_display": "Câu 17:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T10:15:29.760Z",
              "last_modified": "2019-12-18T13:17:40.820Z",
              "field_setting": {
                "field_id": "5de4e441dedee200147c166d",
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
              "_id": "5de4e47adedee200147c166e",
              "name": "SP01_65",
              "field_display": "Câu 18:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T10:16:26.412Z",
              "last_modified": "2019-12-18T13:17:55.082Z",
              "field_setting": {
                "field_id": "5de4e47adedee200147c166e",
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
              "_id": "5de4e495dedee200147c166f",
              "name": "SP01_66",
              "field_display": "Câu 19:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T10:16:53.899Z",
              "last_modified": "2019-12-18T13:18:06.855Z",
              "field_setting": {
                "field_id": "5de4e495dedee200147c166f",
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
              "_id": "5de4e4abdedee200147c1670",
              "name": "SP01_67",
              "field_display": "Câu 20:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T10:17:15.694Z",
              "last_modified": "2019-12-18T13:18:29.911Z",
              "field_setting": {
                "field_id": "5de4e4abdedee200147c1670",
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
              "_id": "5de4e4c2dedee200147c1671",
              "name": "SP01_68",
              "field_display": "Câu 21:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T10:17:38.160Z",
              "last_modified": "2019-12-18T13:18:40.067Z",
              "field_setting": {
                "field_id": "5de4e4c2dedee200147c1671",
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
              "_id": "5de4e4d8dedee200147c1672",
              "name": "SP01_69",
              "field_display": "Câu 22:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T10:18:00.129Z",
              "last_modified": "2019-12-18T13:19:12.526Z",
              "field_setting": {
                "field_id": "5de4e4d8dedee200147c1672",
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
              "_id": "5de4e6b9dedee200147c1673",
              "name": "SP01_70",
              "field_display": "Câu 23:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T10:26:01.158Z",
              "last_modified": "2019-12-18T13:19:34.608Z",
              "field_setting": {
                "field_id": "5de4e6b9dedee200147c1673",
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
              "_id": "5de4e6d5dedee200147c1674",
              "name": "SP01_71",
              "field_display": "Câu 24:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T10:26:29.329Z",
              "last_modified": "2019-12-18T13:19:52.937Z",
              "field_setting": {
                "field_id": "5de4e6d5dedee200147c1674",
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
              "_id": "5de4e6f0dedee200147c1675",
              "name": "SP01_72",
              "field_display": "Câu 25:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T10:26:56.461Z",
              "last_modified": "2019-12-18T13:20:02.703Z",
              "field_setting": {
                "field_id": "5de4e6f0dedee200147c1675",
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
              "_id": "5de4e711dedee200147c1676",
              "name": "SP01_73",
              "field_display": "Câu 26",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T10:27:29.097Z",
              "last_modified": "2019-12-18T13:20:17.268Z",
              "field_setting": {
                "field_id": "5de4e711dedee200147c1676",
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
              "_id": "5de4e73bdedee200147c1677",
              "name": "SP01_74",
              "field_display": "Câu 27",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T10:28:11.610Z",
              "last_modified": "2019-12-18T13:20:36.639Z",
              "field_setting": {
                "field_id": "5de4e73bdedee200147c1677",
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
              "_id": "5de4e754dedee200147c1678",
              "name": "SP01_75",
              "field_display": "Câu 28:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T10:28:36.747Z",
              "last_modified": "2019-12-18T13:21:13.561Z",
              "field_setting": {
                "field_id": "5de4e754dedee200147c1678",
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
              "_id": "5de4e778dedee200147c1679",
              "name": "SP01_76",
              "field_display": "Câu 29",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T10:29:12.667Z",
              "last_modified": "2019-12-18T13:21:28.485Z",
              "field_setting": {
                "field_id": "5de4e778dedee200147c1679",
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
              "_id": "5de4e792dedee200147c167a",
              "name": "SP01_77",
              "field_display": "Câu 30:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T10:29:38.143Z",
              "last_modified": "2019-12-18T13:21:39.713Z",
              "field_setting": {
                "field_id": "5de4e792dedee200147c167a",
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
              "_id": "5de4e83ededee200147c167b",
              "name": "SP01_78",
              "field_display": "Câu 31:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "text_type": "",
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T10:32:30.675Z",
              "last_modified": "2019-12-18T13:21:51.507Z",
              "field_setting": {
                "field_id": "5de4e83ededee200147c167b",
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
              "_id": "5de4e85adedee200147c167c",
              "name": "SP01_79",
              "field_display": "Câu 31- Nếu có vui lòng cho biết ngày dự sinh: dd/mm/yyyy",
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
                "name": "Date",
                "arguments": {},
                "content": "function chkDate(date){\r\n\tvar dd = date.substring(0,2);\r\n\tvar mm = date.substring(2,4);\r\n\tvar yy = date.substring(4,6);\r\n\tvar tmpDate = new Date();\r\n\tvar y = tmpDate.getFullYear()+\"\";\r\n\ty = y.substring(2,4)*1 + 1;\r\n\r\n\t//Gan gia tri nam la 19YY neu YY > nam hien tai + 1\r\n\t//Gan gia tri nam la 20YY neu YY <= nam hien tai + 1\r\n\tif(yy*1>y){ yy = 19+yy;\r\n\t}else {yy = 20+yy;}\r\n\r\n\treturn dd+mm+yy;\t\r\n}\r\n\r\nfunction formatdate(ngay_hieu_luc_in78){\r\nvar fvalue = ngay_hieu_luc_in78;\r\n\tvar regex = /^(?:(?:31(|\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(|\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(|\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(|\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$/\r\n\tvar regex1 = /^\\d{6}$/;\r\n\tvar regex2 = /^(\\s*|[0-9\\.\\/\\-]+)$/ ;\r\n\tvar date;\r\nif(fvalue === \"\") return ;\r\n\tif(regex1.test(fvalue))\r\n\treturn ;\r\n\tif(regex2.test(fvalue)){\r\n\t\r\n\tif(!regex.test(fvalue)){\r\n\t\treturn [{type:\"warning\",message:\"Ngày Tháng Năm không phù hợp, vui lòng kiểm tra lại.\"}]\r\n\t}\r\n}else{\r\n    return [{type:\"error\",message:\"Không đúng định dạng ddmmyyyy\"}]\r\n}\r\nfvalue = fvalue.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'');\r\nif(fvalue.length === 6){\r\n\tfvalue = chkDate(fvalue);\r\n}\r\nvar dd = fvalue.substring(0, 2);\r\nvar mm = fvalue.substring(2, 4);\r\nvar yy = fvalue.substring(4, 8);\r\nvar tmpDate = new Date();\r\nvar d = tmpDate.getDate();\r\nvar m = tmpDate.getMonth();\r\nvar y = tmpDate.getFullYear();\r\nvar inputDate = new Date(yy, mm - 1, dd);\r\nvar curDate = new Date(y, m, d);\r\n\r\n\r\n\r\n//So sanh ngay nhap voi ngay hien tai\r\nif (inputDate > curDate) {\r\n return [{type:\"warning\", message:\"Năm nhập lớn hơn năm hiện tại\"}]\r\n}\r\n\r\n\r\n}\r\n\r\nreturn formatdate(value);",
                "created_date": "2019-11-28T06:50:27.116Z",
                "last_modified": "2019-11-28T06:50:27.116Z",
                "id": "5ddf6e33dedee200147c15f7"
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
              "text_type": "DATE",
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T10:32:58.090Z",
              "last_modified": "2019-12-18T03:18:35.522Z",
              "field_setting": {
                "field_id": "5de4e85adedee200147c167c",
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
              "_id": "5de4e874dedee200147c167d",
              "name": "SP01_80",
              "field_display": "Câu 32:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T10:33:24.394Z",
              "last_modified": "2019-12-18T13:22:04.953Z",
              "field_setting": {
                "field_id": "5de4e874dedee200147c167d",
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
              "_id": "5de4e890dedee200147c167e",
              "name": "SP01_81",
              "field_display": "Câu 33:",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T10:33:52.858Z",
              "last_modified": "2019-12-18T13:22:17.467Z",
              "field_setting": {
                "field_id": "5de4e890dedee200147c167e",
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
              "_id": "5de4e89ededee200147c167f",
              "name": "SP01_82",
              "field_display": "33- đã học xong lớp mấy?",
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
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T10:34:06.501Z",
              "last_modified": "2019-12-04T08:24:57.207Z",
              "field_setting": {
                "field_id": "5de4e89ededee200147c167f",
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
                        "field": "SP01_81"
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
              "_id": "5de4e8a9dedee200147c1680",
              "name": "SP01_83",
              "field_display": "33- số anh chị em ruột hiện có",
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
                "name": "Number",
                "arguments": {},
                "content": "var regex1 = /[^\\s0-9]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n",
                "created_date": "2019-11-29T08:49:07.590Z",
                "last_modified": "2019-11-29T08:49:07.590Z",
                "id": "5de0db83dedee200147c1611"
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T10:34:17.597Z",
              "last_modified": "2019-12-04T08:25:21.041Z",
              "field_setting": {
                "field_id": "5de4e8a9dedee200147c1680",
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
                        "field": "SP01_81"
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
              "_id": "5de4e8badedee200147c1681",
              "name": "SP01_84",
              "field_display": "33- nếu người được bảo hiểm từ 5t trờ xuống, vui lòng cho biết cân nặng",
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
                "name": "decimal_number",
                "arguments": {},
                "content": "if(value.split('.').length==2&&(value.split('.')[1].trim().length===0||value.split('.')[0].trim().length===0)){\n    return [{\n            type:'error',\n            message:'Dữ liệu nhập phải là số thập phân'\n    }]\n}\n\n// var num = parseFloat(value).toFixed(3);\nvar tmp = (value*1000 + 0.1*1000 - 0.1*1000)/10 ;\n\nvar [ng,tp] =value.split('.')\n// if(value.split('.').length>2){\n//     return [{\n//             type:'warning',\n//             message:'Netto nhập quá 2 số thập phân'\n//     }]\n// }\n\nif(tp&&tp.length>2){\n     return [{type : \"warning\",\n        message :\"nhập quá 2 số thập phân\"\n    }]\n}\n\nif(!tmp&&tmp!==0){\n    return [{\n        type : 'error',\n        message: 'Dữ liệu nhập phải là chuỗi số thập phân'\n    }]\n}\nif(value<0){\n    return [\n        {\n            type:'error',\n            message:'Không được nhập giá trị âm.'\n        }\n        ]\n}\n",
                "created_date": "2019-12-28T09:47:49.178Z",
                "last_modified": "2019-12-28T09:47:49.178Z",
                "id": "5e0724c548fa7900143a5cd0"
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T10:34:34.462Z",
              "last_modified": "2020-02-04T07:44:26.751Z",
              "field_setting": {
                "field_id": "5de4e8badedee200147c1681",
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
                        "field": "SP01_81"
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
              "_id": "5de4e8d7dedee200147c1682",
              "name": "SP01_85",
              "field_display": "33 - có sinh sớm hơn trước 4 tuần không",
              "default_value": "N",
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
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T10:35:03.531Z",
              "last_modified": "2019-12-18T13:22:49.064Z",
              "field_setting": {
                "field_id": "5de4e8d7dedee200147c1682",
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
                        "field": "SP01_81"
                      }
                    ]
                  ]
                },
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
              "_id": "5de4e901dedee200147c1684",
              "name": "SP01_87",
              "field_display": "Câu 34:",
              "default_value": "N",
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
                "name": "Number",
                "arguments": {},
                "content": "",
                "created_date": "2019-11-29T08:49:07.590Z",
                "last_modified": "2019-11-29T08:49:07.590Z",
                "id": "5de0db83dedee200147c1611"
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [
                "Y",
                "N"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-12-02T10:35:45.005Z",
              "last_modified": "2020-02-05T02:57:21.318Z",
              "field_setting": {
                "field_id": "5de4e901dedee200147c1684",
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
              "_id": "5e202d7f4b5de3001add631b",
              "name": "RM3",
              "field_display": "Ghi Chú 3",
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
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2020-01-16T09:31:43.228Z",
              "last_modified": "2020-01-16T09:31:43.228Z",
              "field_setting": {
                "field_id": "5e202d7f4b5de3001add631b",
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
          "id": "5dece816d3f551001f8958b0"
        },
        {
          "name": "Sub_Form3",
          "layout_name": "Sunlife",
          "index": 15,
          "layout_id": "5de0d7d9dedee200147c1605",
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
              "_id": "5dde3a93dedee200147c15c5",
              "name": "O54",
              "field_display": "Tên sản phẩm bổ sung",
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
              "validation": {
                "name": "",
                "content": "if (value){\r\n    async function checkValidation(value) {\r\n            let dataLookup =  await fetchJSON(`https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/product/[%22${value}%22]`);\r\n            let _value =value.toLowerCase(); \r\n            if (!Array.isArray(dataLookup.json_single)||dataLookup.json_single.map(item => item.value.toLowerCase()).findIndex(item => item === _value) === -1) {\r\n                            return [{\r\n                              type: \"error\",\r\n                              message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                            }]\r\n                         }\r\n            // if(value.toLowerCase().includes('nhhien'))             \r\n            //              return[{ \r\n            //                   type: 'warning',\r\n            //                   message: `Lookup warning value:${value}`}];\r\n    }\r\n    return await checkValidation(value);\r\n    }\r\n",
                "arguments": {}
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-27T08:57:55.523Z",
              "last_modified": "2020-01-16T09:26:01.346Z",
              "field_setting": {
                "field_id": "5dde3a93dedee200147c15c5",
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
              "_id": "5dde3aa0dedee200147c15c6",
              "name": "O55",
              "field_display": "Số tiền bảo hiểm sản phẩm bổ sung",
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
                "content": "var regex1 = /[^\\s0-9.*]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n",
                "arguments": {}
              },
              "rule_transform": {
                "name": "",
                "arguments": {},
                "content": "function removeSpace(input){\r\n    if (input.includes('*')) {\r\n        input = input.replace(/[*]/g, '000');\r\n    }\r\n\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\tinput = input.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'-');\r\n\tinput = input.replace(/[\\s\\t]*(\\()[\\s\\t]*/g,' (');\r\n\tinput = input.replace(/[\\s\\t]*(\\))[\\s\\t]*/g,') ');\r\n    input = input.replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'/');\r\n    input = input.replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'.');\r\n    input = input.replace(/[\\s\\t]*(\\,)[\\s\\t]*/g,',');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-27T08:58:08.725Z",
              "last_modified": "2019-12-18T03:28:11.128Z",
              "field_setting": {
                "field_id": "5dde3aa0dedee200147c15c6",
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
              "_id": "5dde3baededee200147c15c8",
              "name": "O57",
              "field_display": "Thời hạn bảo hiểm sản phẩm bổ sung",
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
                "name": "Number",
                "arguments": {},
                "content": "var regex1 = /[^\\s0-9]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n",
                "created_date": "2019-11-29T08:49:07.590Z",
                "last_modified": "2019-11-29T08:49:07.590Z",
                "id": "5de0db83dedee200147c1611"
              },
              "rule_transform": {
                "name": "",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\tinput = input.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'-');\r\n\tinput = input.replace(/[\\s\\t]*(\\()[\\s\\t]*/g,' (');\r\n\tinput = input.replace(/[\\s\\t]*(\\))[\\s\\t]*/g,') ');\r\n    input = input.replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'/');\r\n    input = input.replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'.');\r\n    input = input.replace(/[\\s\\t]*(\\,)[\\s\\t]*/g,',');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-27T09:02:38.843Z",
              "last_modified": "2019-12-18T03:59:37.052Z",
              "field_setting": {
                "field_id": "5dde3baededee200147c15c8",
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
          "id": "5dece816d3f551001f8958aa"
        },
        {
          "name": "Ben",
          "layout_name": "Sunlife",
          "index": 16,
          "layout_id": "5de0d7d9dedee200147c1605",
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
              "_id": "5dd5055adedee200147c14ab",
              "name": "A39",
              "field_display": "Họ và tên_ben",
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
                "name": "Text Tiếng Việt",
                "arguments": {},
                "content": "var regex1 = /[^\\sA-Za-zsáàảãạâăắằẳẵặặấầẩẫậéèẻẽẹêếềểễệíìỉĩịóòỏõọôơốồổỗộớờởỡợúùủũụưứừửữựýỳỷỹỵđÁÀẢÃẠÂĂẮẰẲẴẶẶẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔƠỐỒỔỖỘỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴĐ]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập chữ \"}]\r\n}\r\n",
                "created_date": "2019-11-29T08:21:01.677Z",
                "last_modified": "2019-11-29T08:33:51.062Z",
                "id": "5de0d4eddedee200147c1603"
              },
              "rule_transform": {
                "name": "Name_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nfunction transformGivenSurname(field_value) {\r\n  field_value = field_value.trim();\r\n  var fullString = '';\r\n  var arr_char = ['ß'];\r\n  if(field_value.includes(' ')){\r\n  \tvar arr = field_value.split(' ');\r\n    for(var i = 0 ; i < arr.length; i++){\r\n    \tvar strChild = arr[i];\r\n        if(strChild === strChild.toLowerCase() || strChild === strChild.toUpperCase()){\r\n \t       \tif(arr_char.includes(strChild.substring(0,1))){\r\n\t\t\t\tstrChild = strChild.substring(0,1) + strChild.substring(1,strChild.length).toLowerCase();\r\n          \t\tfullString += strChild + ' ';\r\n\t\t\t}else{\r\n           \t\tstrChild = strChild.substring(0,1).toUpperCase() + strChild.substring(1,strChild.length).toLowerCase();\r\n          \t\tfullString += strChild + ' ';\r\n            }\r\n          \r\n        }else{\r\n            strChild = strChild.substring(0,1).toUpperCase() + strChild.substring(1,strChild.length).toLowerCase();\r\n            fullString += strChild + ' ';\r\n        }\r\n    }\r\n  }else{\r\n  \tif(field_value === field_value.toLowerCase() || field_value === field_value.toUpperCase()){\r\n    \tif(arr_char.includes(field_value.substring(0,1))){\r\n\t\t\tfield_value = field_value.substring(0,1) + field_value.substring(1,field_value.length).toLowerCase();\r\n     \t\tfullString = field_value;\r\n\t\t}else{\r\n        \tfield_value = field_value.substring(0,1).toUpperCase() + field_value.substring(1,field_value.length).toLowerCase();\r\n      \t\tfullString = field_value;\r\n\t\t}\r\n      \r\n    }else{\r\n        field_value = field_value.substring(0,1).toUpperCase() + field_value.substring(1,field_value.length).toLowerCase();\r\n        fullString = field_value;\r\n    }\r\n  }\r\n  return fullString.trim();\r\n}\r\nreturn transformGivenSurname(removeSpace(value));",
                "created_date": "2019-11-29T09:40:49.056Z",
                "last_modified": "2019-11-29T09:45:36.834Z",
                "id": "5de0e7a1dedee200147c1612"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-20T09:20:26.228Z",
              "last_modified": "2019-12-02T03:27:04.391Z",
              "field_setting": {
                "field_id": "5dd5055adedee200147c14ab",
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
              "_id": "5dd505badedee200147c14ac",
              "name": "A40",
              "field_display": "Ngày sinh_ben",
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
                "name": "Date",
                "arguments": {},
                "content": "function chkDate(date){\r\n\tvar dd = date.substring(0,2);\r\n\tvar mm = date.substring(2,4);\r\n\tvar yy = date.substring(4,6);\r\n\tvar tmpDate = new Date();\r\n\tvar y = tmpDate.getFullYear()+\"\";\r\n\ty = y.substring(2,4)*1 + 1;\r\n\r\n\t//Gan gia tri nam la 19YY neu YY > nam hien tai + 1\r\n\t//Gan gia tri nam la 20YY neu YY <= nam hien tai + 1\r\n\tif(yy*1>y){ yy = 19+yy;\r\n\t}else {yy = 20+yy;}\r\n\r\n\treturn dd+mm+yy;\t\r\n}\r\n\r\nfunction formatdate(ngay_hieu_luc_in78){\r\nvar fvalue = ngay_hieu_luc_in78;\r\n\tvar regex = /^(?:(?:31(|\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(|\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(|\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(|\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$/\r\n\tvar regex1 = /^\\d{6}$/;\r\n\tvar regex2 = /^(\\s*|[0-9\\.\\/\\-]+)$/ ;\r\n\tvar date;\r\nif(fvalue === \"\") return ;\r\n\tif(regex1.test(fvalue))\r\n\treturn ;\r\n\tif(regex2.test(fvalue)){\r\n\t\r\n\tif(!regex.test(fvalue)){\r\n\t\treturn [{type:\"warning\",message:\"Ngày Tháng Năm không phù hợp, vui lòng kiểm tra lại.\"}]\r\n\t}\r\n}else{\r\n    return [{type:\"error\",message:\"Không đúng định dạng ddmmyyyy\"}]\r\n}\r\nfvalue = fvalue.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'');\r\nif(fvalue.length === 6){\r\n\tfvalue = chkDate(fvalue);\r\n}\r\nvar dd = fvalue.substring(0, 2);\r\nvar mm = fvalue.substring(2, 4);\r\nvar yy = fvalue.substring(4, 8);\r\nvar tmpDate = new Date();\r\nvar d = tmpDate.getDate();\r\nvar m = tmpDate.getMonth();\r\nvar y = tmpDate.getFullYear();\r\nvar inputDate = new Date(yy, mm - 1, dd);\r\nvar curDate = new Date(y, m, d);\r\n\r\n\r\n\r\n//So sanh ngay nhap voi ngay hien tai\r\nif (inputDate > curDate) {\r\n return [{type:\"warning\", message:\"Năm nhập lớn hơn năm hiện tại\"}]\r\n}\r\n\r\n\r\n}\r\n\r\nreturn formatdate(value);",
                "created_date": "2019-11-28T06:50:27.116Z",
                "last_modified": "2019-11-28T06:50:27.116Z",
                "id": "5ddf6e33dedee200147c15f7"
              },
              "rule_transform": {
                "name": "Date_transform",
                "arguments": {},
                "content": "    var regex1 = /^\\d{6}$/;\n    \nfunction removeSpace(input){\n    var regex = /^(?:(?:31(|\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(|\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(|\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(|\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$/\n\tif(regex.test(input)){\n\t\tinput = input.replace(/([0-9]{2})([0-9]{2})([0-9]{4})/,'$1$2$3') + '';\n\t}\n\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\n\n\tinput = input.trim();\n\n\treturn input;\n}\nfunction chkDate(date){\n\tvar dd = date.substring(0,2);\n\tvar mm = date.substring(2,4);\n\tvar yy = date.substring(4,6);\n\tvar tmpDate = new Date();\n\tvar y = tmpDate.getFullYear()+\"\";\n\ty = y.substring(2,4)*1 + 1;\n\n\t//Gan gia tri nam la 19YY neu YY > nam hien tai + 1\n\t//Gan gia tri nam la 20YY neu YY <= nam hien tai + 1\n\tif(yy*1>y){ yy = 19+yy;\n\t}else {yy = 20+yy;}\n\n\treturn dd+mm+yy;\t\n}\nvalue = value.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'');\nif(value.length === 6){\n    return chkDate(value)}\nreturn removeSpace(value);",
                "created_date": "2019-11-28T06:52:45.384Z",
                "last_modified": "2019-11-28T06:54:20.188Z",
                "id": "5ddf6ebddedee200147c15f8"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-20T09:22:02.446Z",
              "last_modified": "2019-12-02T03:27:59.266Z",
              "field_setting": {
                "field_id": "5dd505badedee200147c14ac",
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
              "_id": "5dd505ccdedee200147c14ad",
              "name": "A41",
              "field_display": "Tỷ lệ thụ hưởng_ben",
              "default_value": "",
              "control_type": "TEXTFIELD",
              "tooltip": "",
              "is_list": false,
              "counted_character": true,
              "pattern": {
                "name": "",
                "arguments": {},
                "content": "^(\\s|[0-9]{0,3})$",
                "description": "Không được nhập quá 3 ký tự số."
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
                "content": "function checkSumPlus(value_crr =\"\"){\n    value_crr = parseInt(value_crr.trim()) || 0;\n\n\n    if(value_crr > 100 ){\n       return [{type : \"error\" , message : \"Tổng Tỷ lệ thụ hưởng ben và Tỷ lệ thụ hưởng tổ chức không được lớn hơn 100\"}];\n    }\n}\n\nreturn checkSumPlus(value);",
                "arguments": {}
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-20T09:22:20.618Z",
              "last_modified": "2020-01-16T09:42:51.094Z",
              "field_setting": {
                "field_id": "5dd505ccdedee200147c14ad",
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
              "_id": "5dd508d7dedee200147c14ae",
              "name": "A42",
              "field_display": "Mối quan hệ  với NĐBH:",
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
                "key_value": "english",
                "locale": [
                  "165_191128_340_SUNLIFE"
                ],
                "lookup_after_time": 1,
                "lookup_field": "relationship",
                "name": "Sunlife_Relationship",
                "param_set": "return [data.A42]",
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
              "validation": {
                "name": "",
                "content": "if (value){\r\n    async function checkValidation(value) {\r\n            let dataLookup =  await fetchJSON(`https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/relationship/[%22${value}%22]`);\r\n            let _value =value.toLowerCase(); \r\n            if (!Array.isArray(dataLookup.json_single)||dataLookup.json_single.map(item => item.english.toLowerCase()).findIndex(item => item === _value) === -1) {\r\n                            return [{\r\n                              type: \"error\",\r\n                              message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                            }]\r\n                         }\r\n            // if(value.toLowerCase().includes('nhhien'))             \r\n            //              return[{ \r\n            //                   type: 'warning',\r\n            //                   message: `Lookup warning value:${value}`}];\r\n    }\r\n    return await checkValidation(value);\r\n    }",
                "arguments": {}
              },
              "rule_transform": {
                "name": "removeSpace_transform",
                "arguments": {},
                "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
                "created_date": "2019-11-28T07:25:37.362Z",
                "last_modified": "2019-11-28T07:25:37.362Z",
                "id": "5ddf7671dedee200147c15f9"
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2019-11-20T09:35:19.903Z",
              "last_modified": "2020-01-16T09:22:08.250Z",
              "field_setting": {
                "field_id": "5dd508d7dedee200147c14ae",
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
              "_id": "5e39128b5e4520001efe5809",
              "name": "A607",
              "field_display": "Loại Ben",
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
                "name": "Loại Ben",
                "content": "console.log(arguments,'check validation');\r\nlet farmCurrent = farm;\r\ntry {\r\nfarmCurrent =section[rowId].A39&&section[rowId].A39.text\r\n\r\n} catch (e) {\r\n    \r\n    console.log(e,'loi')\r\n    \r\n}\r\nconsole.log(farmCurrent,'farmCurrent');\r\nfunction checkEqual(free_city_value =\"\" , city_value = \"\"){\r\n    free_city_value = free_city_value.trim()\r\n    city_value = city_value.trim()\r\n    \r\n    if(!free_city_value&&!!city_value){\r\n        return [{type : \"error\" , message : \"Field Họ và tên_ben có dữ liệu, không được bỏ trống Loại Ben\"}];\r\n    }\r\n      if(!!free_city_value&&!city_value){\r\n        return [{type : \"warning\" , message : \"Field Họ và tên_ben đang trống, vui lòng kiểm tra lại\"}];\r\n    }\r\n}\r\n\r\nreturn checkEqual(value, farmCurrent);",
                "arguments": {
                  "farm": "A39"
                }
              },
              "rule_transform": {
                "name": "",
                "arguments": {},
                "content": ""
              },
              "lookup_broadcast": [],
              "value_broadcast": "",
              "argument_details": [
                "D",
                "P"
              ],
              "project_id": "5dd4b5e5dedee200147c1473",
              "created_date": "2020-02-04T06:43:23.182Z",
              "last_modified": "2020-02-07T04:18:23.954Z",
              "field_setting": {
                "field_id": "5e39128b5e4520001efe5809",
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
          "id": "5e3922e3003d2d001e813abc"
        }
      ]
}