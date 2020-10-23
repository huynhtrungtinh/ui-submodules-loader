export function dataSection_165() {
  return [
  {
    "layout_labels": null,
    "name": "Personal",
    "layout_name": "Sunlife",
    "index": 0,
    "layout_id": "5ecceed7d13964435adb94fd",
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
        "_id": "5ecceed7d13964435adb928e",
        "name": "A510",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A510_Nơi nhận HĐ",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.646Z",
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
          "field_id": "5ecceed7d13964435adb928e",
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
        "_id": "5ecceed7d13964435adb921e",
        "name": "A509_1",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A509_1_Ngày nhận HSYCBH",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.646Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb921e",
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
        "_id": "5ecceed7d13964435adb93ba",
        "name": "A03",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A03_Họ",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.625Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb93ba",
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
        "_id": "5ecceed7d13964435adb91ff",
        "name": "A04",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A04_Tên Lót",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.626Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb91ff",
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
        "_id": "5ecceed7d13964435adb9424",
        "name": "A05",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A05_Tên",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.626Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9424",
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
        "_id": "5ecceed7d13964435adb948e",
        "name": "A06",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A06_Ngày tháng năm sinh",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.626Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb948e",
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
        "_id": "5ecceed7d13964435adb9504",
        "name": "A07",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A07_Nơi Sinh",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.626Z",
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
          "field_id": "5ecceed7d13964435adb9504",
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
        "_id": "5ecceed7d13964435adb9580",
        "name": "A08",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "Việt Nam",
        "field_display": "A08_Quốc Tịch 1",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.626Z",
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
          "field_id": "5ecceed7d13964435adb9580",
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
        "_id": "5ecceed7d13964435adb95f7",
        "name": "A09",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A09_Quốc tịch 2",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.626Z",
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
          "field_id": "5ecceed7d13964435adb95f7",
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
        "_id": "5ecceed7d13964435adb9262",
        "name": "A10",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A10_Giới tính",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.626Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
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
          "field_id": "5ecceed7d13964435adb9262",
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
        "_id": "5ecceed7d13964435adb9409",
        "name": "O82",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "O82_Fax",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.663Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
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
          "field_id": "5ecceed7d13964435adb9409",
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
        "_id": "5ecceed7d13964435adb9244",
        "name": "O87",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "O87_Người đại điện pháp luật công ty",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.664Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
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
          "field_id": "5ecceed7d13964435adb9244",
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
        "_id": "5ecceed7d13964435adb9345",
        "name": "A11",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A11_Tình trạng hôn nhân",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.627Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
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
          "field_id": "5ecceed7d13964435adb9345",
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
        "_id": "5ecceed7d13964435adb92e4",
        "name": "A12",
        "project_id": "5e44c57f4109de001b9b44de",
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
        "last_modified": "2020-10-13T05:25:46.628Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb92e4",
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
        "_id": "5ecceed7d13964435adb93c5",
        "name": "A13",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A13_Số giấy tờ tùy thân",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.630Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb93c5",
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
        "_id": "5ecceed7d13964435adb942e",
        "name": "A14",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A14_Ngày cấp",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.631Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb942e",
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
        "_id": "5f853a5aaa3d950371528fe8",
        "name": "A201",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A201_Nơi cấp",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.640Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "production",
          "key_value": "description",
          "locale": [
            "165_191128_340_SUNLIFE"
          ],
          "lookup_after_time": 1,
          "lookup_field": "place",
          "name": "",
          "param_set": "return [data.A201]",
          "result_view_config": [
            {
              "title": "Place",
              "key_value": "description"
            },
            {
              "title": "Code",
              "key_value": "code"
            }
          ],
          "related_columns": [],
          "specific_project": "0"
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
          "content": "if (value){\n    async function checkValidation(value) {\n            let dataLookup =  await fetchJSON(`https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/place/[%22${value}%22]`);\n            let _value =value.toLowerCase(); \n            if (!Array.isArray(dataLookup.json_single)||dataLookup.json_single.map(item => item.description.toLowerCase()).findIndex(item => item === _value) === -1) {\n                            return [{\n                              type: \"error\",\n                              message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\n                            }]\n                         }\n            // if(value.toLowerCase().includes('nhhien'))             \n            //              return[{ \n            //                   type: 'warning',\n            //                   message: `Lookup warning value:${value}`}];\n    }\n    return await checkValidation(value);\n    }",
          "arguments": {}
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5f853a5aaa3d950371528fe8",
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
        "_id": "5ecceed7d13964435adb9219",
        "name": "A31",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A31_Mối quan hệ của BMBH với NĐBH",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.641Z",
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
          "field_id": "5ecceed7d13964435adb9219",
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
        "_id": "5ecceed7d13964435adb9492",
        "name": "A113",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          " Y",
          "N"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A113_PO khác LI?",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.628Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9492",
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
        "_id": "5ecceed7d13964435adb9202",
        "name": "A116",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A116_Họ",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.628Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9202",
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
        "_id": "5ecceed7d13964435adb95f6",
        "name": "A117",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A117_Tên Lót",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.628Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb95f6",
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
        "_id": "5ecceed7d13964435adb926a",
        "name": "A118",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A118_Tên",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.628Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb926a",
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
        "_id": "5ecceed7d13964435adb9348",
        "name": "A119",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A119_Ngày tháng năm sinh",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.628Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9348",
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
        "_id": "5ecceed7d13964435adb93c2",
        "name": "A120",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A120_Nơi Sinh",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.629Z",
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
          "field_id": "5ecceed7d13964435adb93c2",
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
        "_id": "5ecceed7d13964435adb942a",
        "name": "A121",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "Việt Nam",
        "field_display": "A121_Quốc Tịch 1",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.629Z",
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
          "field_id": "5ecceed7d13964435adb942a",
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
        "_id": "5ecceed7d13964435adb9496",
        "name": "A122",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A122_Quốc tịch 2 (Nếu có)",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.629Z",
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
          "field_id": "5ecceed7d13964435adb9496",
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
        "_id": "5ecceed7d13964435adb9589",
        "name": "A123",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A123_Giới tính",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.629Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
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
          "field_id": "5ecceed7d13964435adb9589",
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
        "_id": "5ecceed7d13964435adb950b",
        "name": "A124",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A124_Tình trạng hôn nhân",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.629Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
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
          "field_id": "5ecceed7d13964435adb950b",
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
        "_id": "5ecceed7d13964435adb9204",
        "name": "A125",
        "project_id": "5e44c57f4109de001b9b44de",
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
        "last_modified": "2020-10-13T05:25:46.629Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9204",
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
        "_id": "5ecceed7d13964435adb95fc",
        "name": "A126",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A126_Số giấy tờ tùy thân",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.629Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb95fc",
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
        "_id": "5ecceed7d13964435adb9269",
        "name": "A127",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A127_Ngày cấp",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.629Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9269",
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
        "_id": "5f853a5aaa3d950371528fea",
        "name": "A202",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A202_Nơi cấp",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.640Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "production",
          "key_value": "description",
          "locale": [
            "165_191128_340_SUNLIFE"
          ],
          "lookup_after_time": 1,
          "lookup_field": "place",
          "name": "",
          "param_set": "return [data.A202]",
          "result_view_config": [
            {
              "title": "Place",
              "key_value": "description"
            },
            {
              "title": "Code",
              "key_value": "code"
            }
          ],
          "related_columns": [],
          "specific_project": "0"
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
          "content": "if (value){\n    async function checkValidation(value) {\n            let dataLookup =  await fetchJSON(`https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/place/[%22${value}%22]`);\n            let _value =value.toLowerCase(); \n            if (!Array.isArray(dataLookup.json_single)||dataLookup.json_single.map(item => item.description.toLowerCase()).findIndex(item => item === _value) === -1) {\n                            return [{\n                              type: \"error\",\n                              message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\n                            }]\n                         }\n            // if(value.toLowerCase().includes('nhhien'))             \n            //              return[{ \n            //                   type: 'warning',\n            //                   message: `Lookup warning value:${value}`}];\n    }\n    return await checkValidation(value);\n    }",
          "arguments": {}
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5f853a5aaa3d950371528fea",
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
        "_id": "5ecceed7d13964435adb9440",
        "name": "A37",
        "project_id": "5e44c57f4109de001b9b44de",
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
        "last_modified": "2020-10-13T05:25:46.642Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9440",
          "visible": true,
          "disable": false,
          "double_typing": false,
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
        "visible": true,
        "disable": false,
        "double_typing": false
      },
      {
        "_id": "5ecceed7d13964435adb9285",
        "name": "A43",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A43_Tên tổ chức thụ hưởng",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.642Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9285",
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
        "_id": "5ecceed7d13964435adb9363",
        "name": "A44",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A44_Tỷ lệ thụ hưởng tổ chức",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.643Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
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
          "field_id": "5ecceed7d13964435adb9363",
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
    "id": "5ecceed7d13964435adb96bb"
  },
  {
    "layout_labels": null,
    "name": "Ben",
    "layout_name": "Sunlife",
    "index": 1,
    "layout_id": "5ecceed7d13964435adb94fd",
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
        "_id": "5ecceed7d13964435adb95a1",
        "name": "A39",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A39_Họ và tên_ben",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.642Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb95a1",
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
        "_id": "5ecceed7d13964435adb9529",
        "name": "A40",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A40_Ngày sinh_ben",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.642Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9529",
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
        "_id": "5ecceed7d13964435adb921a",
        "name": "A41",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A41_Tỷ lệ thụ hưởng_ben",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.642Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
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
          "field_id": "5ecceed7d13964435adb921a",
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
        "_id": "5ecceed7d13964435adb9612",
        "name": "A42",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A42_Mối quan hệ với NĐBH",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.642Z",
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
          "field_id": "5ecceed7d13964435adb9612",
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
        "_id": "5ecceed7d13964435adb9227",
        "name": "A607",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "D",
          "P"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "",
        "field_display": "A607_Loại Ben",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.649Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9227",
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
    "id": "5ecceed7d13964435adb96e6"
  },
  {
    "layout_labels": null,
    "name": "Personal1",
    "layout_name": "Sunlife",
    "index": 2,
    "layout_id": "5ecceed7d13964435adb94fd",
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
        "_id": "5ecceed7d13964435adb921c",
        "name": "A500",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A500_US TIN",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.645Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb921c",
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
        "_id": "5ecceed7d13964435adb9614",
        "name": "A501",
        "project_id": "5e44c57f4109de001b9b44de",
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
        "last_modified": "2020-10-13T05:25:46.645Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9614",
          "visible": true,
          "disable": false,
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
        "_id": "5ecceed7d13964435adb9288",
        "name": "A502",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Complete",
          "Incomplete"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "",
        "field_display": "A502_IRS Form Status",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.645Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9288",
          "visible": true,
          "disable": false,
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
        "_id": "5ecceed7d13964435adb9366",
        "name": "A503",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A503_Date of IRS Form",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.645Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9366",
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
        "_id": "5ecceed7d13964435adb94b1",
        "name": "A48",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A48_Hợp đồng BH hiệu lực_PO",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.643Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb94b1",
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
        "_id": "5ecceed7d13964435adb95a3",
        "name": "A49",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A49_Công ty bảo hiểm_PO",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.643Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb95a3",
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
        "_id": "5ecceed7d13964435adb952b",
        "name": "A50",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A50_Tên SP bảo hiểm_PO",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.645Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb952b",
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
        "_id": "5ecceed7d13964435adb9616",
        "name": "A51",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A51_Tổng số tiền bảo hiểm_PO",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.646Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9616",
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
        "_id": "5ecceed7d13964435adb936a",
        "name": "A52",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A52_Năm phát hành HĐ_PO",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.647Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb936a",
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
        "_id": "5ecceed7d13964435adb93e8",
        "name": "A53",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A53_Tình trạng HĐ_PO",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.647Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb93e8",
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
        "_id": "5ecceed7d13964435adb9536",
        "name": "A606",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A606_Hợp đồng BH hiệu lực_LI",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.648Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9536",
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
        "_id": "5ecceed7d13964435adb936d",
        "name": "A600",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A600_Công ty bảo hiểm_LI",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.648Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb936d",
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
        "_id": "5ecceed7d13964435adb9447",
        "name": "A513",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A513_Tên SP bảo hiểm_LI",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.646Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9447",
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
        "_id": "5ecceed7d13964435adb94ba",
        "name": "A514",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A514_Tổng số tiền bảo hiểm_LI",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.646Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb94ba",
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
        "_id": "5ecceed7d13964435adb95a8",
        "name": "A515",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A515_Năm phát hành HĐ_LI",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.647Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb95a8",
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
        "_id": "5ecceed7d13964435adb952f",
        "name": "A516",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A516_Tình trạng HĐ_LI",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.647Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb952f",
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
        "_id": "5ecceed7d13964435adb931e",
        "name": "O41",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "O41_Bên thứ ba/ chủ sở hữu hưởng lợi",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.658Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb931e",
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
        "_id": "5ecceed7d13964435adb94ad",
        "name": "A38",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A38_Ngày hiệu lực HĐ",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.642Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb94ad",
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
        "_id": "5ecceed7d13964435adb930b",
        "name": "A601",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A601_Ngày ký HSYCBH",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.648Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb930b",
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
        "_id": "5ecceed7d13964435adb94e3",
        "name": "RM1",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "RM1_Ghi Chú 1",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.664Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb94e3",
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
    "id": "5ecceed7d13964435adb96f1"
  },
  {
    "layout_labels": null,
    "name": "Address",
    "layout_name": "Sunlife",
    "index": 3,
    "layout_id": "5ecceed7d13964435adb94fd",
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
        "_id": "5f853a5aaa3d9503715290a3",
        "name": "O100",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Công ty",
          "Cá nhân"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "",
        "field_display": "O100_Loại hồ sơ",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.655Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "name": "error_null",
          "arguments": {},
          "content": "if(!value){\n    return [{type : \"error\",\n    message :\"Field không được rỗng, cần kiểm tra lại!\"\n    }]\n}",
          "created_date": "2020-05-06T03:03:32.913Z",
          "last_modified": "2020-05-06T03:04:28.425Z",
          "id": "5eb229043d64d3001bf43ec6"
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5f853a5aaa3d9503715290a3",
          "visible": true,
          "disable": false,
          "double_typing": false,
          "argument_details": [
            {
              "value": "Công ty"
            },
            {
              "value": "Cá nhân"
            }
          ],
          "position": {},
          "position_percent": {
            "x": null,
            "y": null,
            "w": null,
            "h": null
          }
        },
        "position": {},
        "visible": true,
        "disable": false,
        "double_typing": false
      },
      {
        "_id": "5ecceed7d13964435adb949e",
        "name": "A15",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A15_Điện thoại nhà riêng_PO",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.632Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb949e",
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
        "_id": "5ecceed7d13964435adb9591",
        "name": "A16",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A16_Điện thoại di động_PO",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.635Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "arguments": {
            "farm": "A15"
          },
          "content": "var regex1 = /[^\\s0-9]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n\r\nfunction checkEqual(value1 =\"\" , value2 = \"\"){\r\n    value1 = value1.trim()\r\n    value2 = value2.trim()\r\n    \r\n    if(!value1&&!value2){\r\n        return [{type : \"error\" , message : \"Phải có ít nhất 1 trong 2 số điện thoại nhà riêng và điện thoại di động\"}];\r\n    }\r\n}\r\n\r\nreturn checkEqual(value, farm);",
          "created_date": "2019-11-29T08:49:07.590Z",
          "last_modified": "2019-11-29T08:49:07.590Z",
          "id": "5de0db83dedee200147c1611"
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb9591",
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
        "_id": "5ecceed7d13964435adb951d",
        "name": "A17",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A17_Email_PO",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.636Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "arguments": {},
          "content": "if(value.length>50){\n    return [{type: \"error\",\n        message: `Không được nhập quá 50 ký tự `\n    }]\n}",
          "created_date": "2019-11-29T08:21:01.677Z",
          "last_modified": "2019-11-29T08:33:51.062Z",
          "id": "5de0d4eddedee200147c1603"
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb951d",
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
        "_id": "5ecceed7d13964435adb9210",
        "name": "A18",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A18_Nghề nghiệp_PO",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.637Z",
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
          "arguments": {},
          "content": "if(!value){\r\n    return [{type : \"error\",\r\n        message :\"Field Rỗng, cần kiểm tra lại!\"\r\n    }]\r\n}\r\n\r\nif (value){\r\n    async function checkValidation(value) {\r\n           let params = `[\"${encodeURIComponent(value)}\"]`\r\n            let dataLookup =  await fetchJSON(`https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/occupation/${params}`);\r\n            let _value =value.toLowerCase(); \r\n            if (!Array.isArray(dataLookup.json_single)||dataLookup.json_single.map(item => item.value.toLowerCase()).findIndex(item => item === _value) === -1) {\r\n                            return [{\r\n                              type: \"error\",\r\n                              message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                            }]\r\n                         }\r\n            // if(value.toLowerCase().includes('nhhien'))             \r\n            //              return[{ \r\n            //                   type: 'warning',\r\n            //                   message: `Lookup warning value:${value}`}];\r\n    }\r\n    return await checkValidation(value);\r\n    }",
          "created_date": "2019-11-29T08:21:01.677Z",
          "last_modified": "2019-11-29T08:33:51.062Z",
          "id": "5de0d4eddedee200147c1603"
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb9210",
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
        "_id": "5ecceed7d13964435adb960b",
        "name": "A19",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A19_Tên cơ quan_PO",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.639Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
          "created_date": "2019-11-28T07:25:37.362Z",
          "last_modified": "2019-11-28T07:25:37.362Z",
          "id": "5ddf7671dedee200147c15f9"
        },
        "tooltip": "",
        "validation": {
          "name": "Text Tiếng Việt",
          "arguments": {},
          "content": "if(value.length > 49){\n    return [{type: \"error\",\n        message :\"Không được nhập quá 49 ký tự.\"\n    }]\n}",
          "created_date": "2019-11-29T08:21:01.677Z",
          "last_modified": "2019-11-29T08:33:51.062Z",
          "id": "5de0d4eddedee200147c1603"
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb960b",
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
        "_id": "5ecceed7d13964435adb9525",
        "name": "A20",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A20_Thu nhập_PO",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.640Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "content": "function removeSpace(input){\r\n    if (input.includes('+')) {\r\n        input = input.replace(/[+]/g, '000');\r\n    }\r\n\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\tinput = input.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'-');\r\n\tinput = input.replace(/[\\s\\t]*(\\()[\\s\\t]*/g,' (');\r\n\tinput = input.replace(/[\\s\\t]*(\\))[\\s\\t]*/g,') ');\r\n    input = input.replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'/');\r\n    input = input.replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'.');\r\n    input = input.replace(/[\\s\\t]*(\\,)[\\s\\t]*/g,',');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
          "created_date": "2019-11-28T07:25:37.362Z",
          "last_modified": "2019-11-28T07:25:37.362Z",
          "id": "5ddf7671dedee200147c15f9"
        },
        "tooltip": "",
        "validation": {
          "name": "Number",
          "arguments": {},
          "content": "var regex1 = /[^\\s0-9+]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\nif(!value){\r\n    return [{type : \"error\",\r\n        message :\"Field Rỗng, cần kiểm tra lại!\"\r\n    }]\r\n}",
          "created_date": "2019-11-29T08:49:07.590Z",
          "last_modified": "2019-11-29T08:49:07.590Z",
          "id": "5de0db83dedee200147c1611"
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb9525",
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
        "_id": "5f853a5aaa3d950371528fe6",
        "name": "A200",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A200_Ngành nghề kinh doanh",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.640Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "production",
          "key_value": "data_value",
          "locale": [
            "165_191128_340_SUNLIFE"
          ],
          "lookup_after_time": 1,
          "lookup_field": "nature_of_business",
          "name": "",
          "param_set": "return [data.A200]",
          "result_view_config": [
            {
              "title": "Ngành nghề kinh doanh",
              "key_value": "data_value"
            },
            {
              "title": "Code",
              "key_value": "code"
            }
          ],
          "related_columns": [],
          "specific_project": "0"
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
          "content": "if (value){\n    async function checkValidation(value) {\n            let dataLookup =  await fetchJSON(`https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/nature_of_business/[%22${value}%22]`);\n            let _value =value.toLowerCase(); \n            if (!Array.isArray(dataLookup.json_single)||dataLookup.json_single.map(item => item.data_value.toLowerCase()).findIndex(item => item === _value) === -1) {\n                            return [{\n                              type: \"error\",\n                              message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\n                            }]\n                         }\n            // if(value.toLowerCase().includes('nhhien'))             \n            //              return[{ \n            //                   type: 'warning',\n            //                   message: `Lookup warning value:${value}`}];\n    }\n    return await checkValidation(value);\n    }",
          "arguments": {}
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5f853a5aaa3d950371528fe6",
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
        "_id": "5ecceed7d13964435adb92f9",
        "name": "A25",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A25_Tỉnh/Thành phố_PO",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.641Z",
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
          "content": "if(!value){\r\n    return [{type : \"error\",\r\n        message :\"Field Rỗng, cần kiểm tra lại!\"\r\n    }]\r\n}\r\n\r\nif (value){\r\n    async function checkValidation(value) {\r\n            let dataLookup =  await fetchJSON(`https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/province/[%22${value}%22]`);\r\n            let _value =value.toLowerCase(); \r\n            if (!Array.isArray(dataLookup.json_single)||dataLookup.json_single.map(item => item.prov_nm.toLowerCase()).findIndex(item => item === _value) === -1) {\r\n                            return [{\r\n                              type: \"error\",\r\n                              message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                            }]\r\n                         }\r\n            // if(value.toLowerCase().includes('nhhien'))             \r\n            //              return[{ \r\n            //                   type: 'warning',\r\n            //                   message: `Lookup warning value:${value}`}];\r\n    }\r\n    return await checkValidation(value);\r\n    }",
          "arguments": {}
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb92f9",
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
        "_id": "5ecceed7d13964435adb935e",
        "name": "A24",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A24_Quận/Huyện_PO",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.641Z",
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
          "content": "if(!value){\r\n    return [{type : \"error\",\r\n        message :\"Field Rỗng, cần kiểm tra lại!\"\r\n    }]\r\n}\r\n\r\n\r\n//console.log(arguments,'asdgasdgasdgasdg')    \r\nasync function checkValidation(value) {\r\n  let params = encodeURIComponent(`[\"${qh}\",\"${value}\"]`)\r\n  let uri = `https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/district/${params}`\r\n  let dataLookup = await fetchJSON(uri);\r\n//   console.log(dataLookup,'dataLookup');\r\n  if (!Array.isArray(dataLookup.json_single) \r\n  || dataLookup.json_single.map(item => item.dist_nm).findIndex(item => item === value.trim()) === -1) {\r\n                      return [{\r\n                         type: \"error\",\r\n                         message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                      }]\r\n                    }\r\n}\r\nif (value){\r\nreturn  await checkValidation(value);\r\n}",
          "arguments": {
            "qh": "A25"
          }
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb935e",
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
        "_id": "5ecceed7d13964435adb927c",
        "name": "A23",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A23_Phường/Xã thường trú_PO",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.641Z",
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
          "content": "if(!value){\r\n    return [{type : \"error\",\r\n        message :\"Field Rỗng, cần kiểm tra lại!\"\r\n    }]\r\n}\r\n\r\n\r\n//console.log(arguments,'asdgasdgasdgasdg')    \r\nasync function checkValidation(value) {\r\n  let params = encodeURIComponent(`[\"${tp}\",\"${qh}\",\"${value}\"]`)\r\n  let uri = `https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/ward/${params}`\r\n  let dataLookup = await fetchJSON(uri);\r\n//   console.log(dataLookup,'dataLookup');\r\n  if (!Array.isArray(dataLookup.json_single) || dataLookup.json_single.map(item => item.ward_nm).findIndex(item => item === value.trim()) === -1) {\r\n                      return [{\r\n                         type: \"error\",\r\n                         message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                      }]\r\n                    }\r\n}\r\nif (value){\r\nreturn  await checkValidation(value);\r\n}",
          "arguments": {
            "tp": "A25",
            "qh": "A24"
          }
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb927c",
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
        "_id": "5ecceed7d13964435adb960d",
        "name": "A22",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A22_Địa chỉ thường trú_PO",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.641Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "content": "function removeSpace(input) {\n\n    input = input.replace(/[\\s\\t]+/g, ' ');\n\n    input = input.trim();\n\n    return input;\n}\n\nfunction transformGivenSurname(field_value) {\n    field_value = field_value.trim();\n    var fullString = '';\n    var arr_char = ['ß'];\n    if (field_value.includes(' ')) {\n        var arr = field_value.split(' ');\n        for (var i = 0; i < arr.length; i++) {\n            var strChild = arr[i];\n            if (strChild === strChild.toLowerCase()) {\n                if (arr_char.includes(strChild.substring(0, 1))) {\n                    strChild = strChild.substring(0, 1) + strChild.substring(1, strChild.length).toLowerCase();\n                    fullString += strChild + ' ';\n                } else {\n                    strChild = strChild.substring(0, 1).toUpperCase() + strChild.substring(1, strChild.length).toLowerCase();\n                    fullString += strChild + ' ';\n                }\n\n            } else if (strChild === strChild.toUpperCase()) {\n                fullString += strChild + ' ';\n            } else {\n                strChild = strChild.substring(0, 1).toUpperCase() + strChild.substring(1, strChild.length).toLowerCase();\n                fullString += strChild + ' ';\n            }\n        }\n    } else {\n        if (field_value === field_value.toLowerCase()) {\n            if (arr_char.includes(field_value.substring(0, 1))) {\n                field_value = field_value.substring(0, 1) + field_value.substring(1, field_value.length).toLowerCase();\n                fullString = field_value;\n            } else {\n                field_value = field_value.substring(0, 1).toUpperCase() + field_value.substring(1, field_value.length).toLowerCase();\n                fullString = field_value;\n            }\n\n        } else if (field_value === field_value.toUpperCase()) {\n            fullString = field_value;\n        } else {\n            field_value = field_value.substring(0, 1).toUpperCase() + field_value.substring(1, field_value.length).toLowerCase();\n            fullString = field_value;\n        }\n    }\n    return fullString.trim();\n}\nreturn transformGivenSurname(removeSpace(value + ','));",
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
        "field_setting": {
          "field_id": "5ecceed7d13964435adb960d",
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
        "_id": "5ecceed7d13964435adb9527",
        "name": "A30",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A30_Tỉnh/Thành phố_nhận thư",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.641Z",
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
          "content": "if(!value){\r\n    return [{type : \"error\",\r\n        message :\"Field Rỗng, cần kiểm tra lại!\"\r\n    }]\r\n}\r\n\r\n\r\nif (value){\r\n    async function checkValidation(value) {\r\n            let dataLookup =  await fetchJSON(`https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/province/[%22${value}%22]`);\r\n            let _value =value.toLowerCase(); \r\n            if (!Array.isArray(dataLookup.json_single)||dataLookup.json_single.map(item => item.prov_nm.toLowerCase()).findIndex(item => item === _value) === -1) {\r\n                            return [{\r\n                              type: \"error\",\r\n                              message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                            }]\r\n                         }\r\n            // if(value.toLowerCase().includes('nhhien'))             \r\n            //              return[{ \r\n            //                   type: 'warning',\r\n            //                   message: `Lookup warning value:${value}`}];\r\n    }\r\n    return await checkValidation(value);\r\n    }",
          "arguments": {}
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb9527",
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
        "_id": "5ecceed7d13964435adb959e",
        "name": "A29",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A29_Quận/Huyện_nhận thư",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.641Z",
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
          "content": "if(!value){\r\n    return [{type : \"error\",\r\n        message :\"Field Rỗng, cần kiểm tra lại!\"\r\n    }]\r\n}\r\n\r\n\r\n//console.log(arguments,'asdgasdgasdgasdg')    \r\nasync function checkValidation(value) {\r\n  let params = encodeURIComponent(`[\"${qh}\",\"${value}\"]`)\r\n  let uri = `https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/district/${params}`\r\n  let dataLookup = await fetchJSON(uri);\r\n//   console.log(dataLookup,'dataLookup');\r\n  if (!Array.isArray(dataLookup.json_single) || dataLookup.json_single.map(item => item.dist_nm).findIndex(item => item === value.trim()) === -1) {\r\n                      return [{\r\n                         type: \"error\",\r\n                         message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                      }]\r\n                    }\r\n}\r\nif (value){\r\nreturn  await checkValidation(value);\r\n}",
          "arguments": {
            "qh": "A30"
          }
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb959e",
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
        "_id": "5ecceed7d13964435adb94ac",
        "name": "A28",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A28_Phường/Xã_nhận thư",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.641Z",
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
          "content": "if(!value){\r\n    return [{type : \"error\",\r\n        message :\"Field Rỗng, cần kiểm tra lại!\"\r\n    }]\r\n}\r\n\r\n\r\n//console.log(arguments,'asdgasdgasdgasdg')    \r\nasync function checkValidation(value) {\r\n  let params = encodeURIComponent(`[\"${tp}\",\"${qh}\",\"${value}\"]`)\r\n  let uri = `https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/ward/${params}`\r\n  let dataLookup = await fetchJSON(uri);\r\n//   console.log(dataLookup,'dataLookup');\r\n  if (!Array.isArray(dataLookup.json_single) || dataLookup.json_single.map(item => item.ward_nm).findIndex(item => item === value.trim()) === -1) {\r\n                      return [{\r\n                         type: \"error\",\r\n                         message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                      }]\r\n                    }\r\n}\r\nif (value){\r\nreturn  await checkValidation(value);\r\n}",
          "arguments": {
            "tp": "A30",
            "qh": "A29"
          }
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb94ac",
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
        "_id": "5ecceed7d13964435adb943e",
        "name": "A27",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A27_Địa chỉ_nhận thư",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.641Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "content": "function removeSpace(input) {\n\n    input = input.replace(/[\\s\\t]+/g, ' ');\n\n    input = input.trim();\n\n    return input;\n}\n\nfunction transformGivenSurname(field_value) {\n    field_value = field_value.trim();\n    var fullString = '';\n    var arr_char = ['ß'];\n    if (field_value.includes(' ')) {\n        var arr = field_value.split(' ');\n        for (var i = 0; i < arr.length; i++) {\n            var strChild = arr[i];\n            if (strChild === strChild.toLowerCase()) {\n                if (arr_char.includes(strChild.substring(0, 1))) {\n                    strChild = strChild.substring(0, 1) + strChild.substring(1, strChild.length).toLowerCase();\n                    fullString += strChild + ' ';\n                } else {\n                    strChild = strChild.substring(0, 1).toUpperCase() + strChild.substring(1, strChild.length).toLowerCase();\n                    fullString += strChild + ' ';\n                }\n\n            } else if (strChild === strChild.toUpperCase()) {\n                fullString += strChild + ' ';\n            } else {\n                strChild = strChild.substring(0, 1).toUpperCase() + strChild.substring(1, strChild.length).toLowerCase();\n                fullString += strChild + ' ';\n            }\n        }\n    } else {\n        if (field_value === field_value.toLowerCase()) {\n            if (arr_char.includes(field_value.substring(0, 1))) {\n                field_value = field_value.substring(0, 1) + field_value.substring(1, field_value.length).toLowerCase();\n                fullString = field_value;\n            } else {\n                field_value = field_value.substring(0, 1).toUpperCase() + field_value.substring(1, field_value.length).toLowerCase();\n                fullString = field_value;\n            }\n\n        } else if (field_value === field_value.toUpperCase()) {\n            fullString = field_value;\n        } else {\n            field_value = field_value.substring(0, 1).toUpperCase() + field_value.substring(1, field_value.length).toLowerCase();\n            fullString = field_value;\n        }\n    }\n    return fullString.trim();\n}\nreturn transformGivenSurname(removeSpace(value + ','));"
        },
        "tooltip": "",
        "validation": {
          "name": "",
          "content": "if(value.length > 35){\n    return [{type: \"error\",\n        message :\"Không được nhập quá 35 ký tự.\"\n    }]\n}",
          "arguments": {}
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb943e",
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
        "_id": "5ecceed7d13964435adb934a",
        "name": "A128",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A128_Điện thoại nhà riêng_LI",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.629Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb934a",
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
        "_id": "5ecceed7d13964435adb92e8",
        "name": "A129",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A129_Điện thoại di động_LI",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.629Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb92e8",
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
        "_id": "5ecceed7d13964435adb942c",
        "name": "A130",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A130_Địa chỉ email_LI",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.630Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
        "field_setting": {
          "field_id": "5ecceed7d13964435adb942c",
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
        "_id": "5ecceed7d13964435adb9499",
        "name": "A131",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A131_Nghề nghiệp_LI",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.630Z",
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
          "content": "if(!value){\r\n    return [{type : \"warning\",\r\n    message :\"Field rỗng, cần kiểm tra lại!\"\r\n    }]\r\n}\r\n\r\nif (value){\r\n    async function checkValidation(value) {\r\n            let params = `[\"${encodeURIComponent(value)}\"]`\r\n            let dataLookup =  await fetchJSON(`https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/occupation/${params}`);\r\n            let _value =value.toLowerCase(); \r\n            if (!Array.isArray(dataLookup.json_single)||dataLookup.json_single.map(item => item.value.toLowerCase()).findIndex(item => item === _value) === -1) {\r\n                            return [{\r\n                              type: \"error\",\r\n                              message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                            }]\r\n                         }\r\n            // if(value.toLowerCase().includes('nhhien'))             \r\n            //              return[{ \r\n            //                   type: 'warning',\r\n            //                   message: `Lookup warning value:${value}`}];\r\n    }\r\n    return await checkValidation(value);\r\n}",
          "arguments": {}
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb9499",
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
        "_id": "5ecceed7d13964435adb958b",
        "name": "A132",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A132_Tên cơ quan_LI",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.630Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "name": "Text Tiếng Việt",
          "arguments": {},
          "content": "var regex1 = /[^\\s0-9A-Za-zsáàảãạâăắằẳẵặặấầẩẫậéèẻẽẹêếềểễệíìỉĩịóòỏõọôơốồổỗộớờởỡợúùủũụưứừửữựýỳỷỹỵđÁÀẢÃẠÂĂẮẰẲẴẶẶẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔƠỐỒỔỖỘỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴĐ]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập chữ và số\"}]\r\n}\r\n\r\nif(value.length > 49){\r\n    return [{type: \"error\",\r\n        message :\"Không được nhập quá 49 ký tự.\"\r\n    }]\r\n}",
          "created_date": "2019-11-29T08:21:01.677Z",
          "last_modified": "2019-11-29T08:33:51.062Z",
          "id": "5de0d4eddedee200147c1603"
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb958b",
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
        "_id": "5ecceed7d13964435adb950e",
        "name": "A133",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A133_Thu nhập_LI",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.630Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "content": "var regex1 = /[^\\s0-9+]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\nif(!value){\r\n    return [{type : \"error\",\r\n        message :\"Field Rỗng, cần kiểm tra lại!\"\r\n    }]\r\n}",
          "created_date": "2019-11-29T08:49:07.590Z",
          "last_modified": "2019-11-29T08:49:07.590Z",
          "id": "5de0db83dedee200147c1611"
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb950e",
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
        "_id": "5ecceed7d13964435adb92eb",
        "name": "A138",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A138_Tỉnh/Thành phố thường trú_LI",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.630Z",
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
          "content": "if (value){\r\n    async function checkValidation(value) {\r\n            let dataLookup =  await fetchJSON(`https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/province/[%22${value}%22]`);\r\n            let _value =value.toLowerCase(); \r\n            if (!Array.isArray(dataLookup.json_single)||dataLookup.json_single.map(item => item.prov_nm.toLowerCase()).findIndex(item => item === _value) === -1) {\r\n                            return [{\r\n                              type: \"error\",\r\n                              message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                            }]\r\n                         }\r\n            // if(value.toLowerCase().includes('nhhien'))             \r\n            //              return[{ \r\n            //                   type: 'warning',\r\n            //                   message: `Lookup warning value:${value}`}];\r\n    }\r\n    return await checkValidation(value);\r\n    }",
          "arguments": {}
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb92eb",
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
        "_id": "5ecceed7d13964435adb934d",
        "name": "A137",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A137_Quận/Huyện thường trú_LI",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.630Z",
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
            "qh": "A138"
          }
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb934d",
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
        "_id": "5ecceed7d13964435adb926c",
        "name": "A136",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A136_Phường/Xã thường trú_LI",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.630Z",
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
            "tp": "A138",
            "qh": "A137"
          }
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb926c",
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
        "_id": "5ecceed7d13964435adb95fe",
        "name": "A135",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A135_Địa chỉ thường trú_LI",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.630Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nfunction transformGivenSurname(field_value) {\r\n  field_value = field_value.trim();\r\n  var fullString = '';\r\n  var arr_char = ['ß'];\r\n  if(field_value.includes(' ')){\r\n  \tvar arr = field_value.split(' ');\r\n    for(var i = 0 ; i < arr.length; i++){\r\n    \tvar strChild = arr[i];\r\n        if(strChild === strChild.toLowerCase() || strChild === strChild.toUpperCase()){\r\n \t       \tif(arr_char.includes(strChild.substring(0,1))){\r\n\t\t\t\tstrChild = strChild.substring(0,1) + strChild.substring(1,strChild.length).toLowerCase();\r\n          \t\tfullString += strChild + ' ';\r\n\t\t\t}else{\r\n           \t\tstrChild = strChild.substring(0,1).toUpperCase() + strChild.substring(1,strChild.length).toLowerCase();\r\n          \t\tfullString += strChild + ' ';\r\n            }\r\n          \r\n        }else{\r\n            strChild = strChild.substring(0,1).toUpperCase() + strChild.substring(1,strChild.length).toLowerCase();\r\n            fullString += strChild + ' ';\r\n        }\r\n    }\r\n  }else{\r\n  \tif(field_value === field_value.toLowerCase() || field_value === field_value.toUpperCase()){\r\n    \tif(arr_char.includes(field_value.substring(0,1))){\r\n\t\t\tfield_value = field_value.substring(0,1) + field_value.substring(1,field_value.length).toLowerCase();\r\n     \t\tfullString = field_value;\r\n\t\t}else{\r\n        \tfield_value = field_value.substring(0,1).toUpperCase() + field_value.substring(1,field_value.length).toLowerCase();\r\n      \t\tfullString = field_value;\r\n\t\t}\r\n      \r\n    }else{\r\n        field_value = field_value.substring(0,1).toUpperCase() + field_value.substring(1,field_value.length).toLowerCase();\r\n        fullString = field_value;\r\n    }\r\n  }\r\n  return fullString.trim();\r\n}\r\nreturn transformGivenSurname(removeSpace(value+','));",
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
        "field_setting": {
          "field_id": "5ecceed7d13964435adb95fe",
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
        "_id": "5ecceed7d13964435adb9246",
        "name": "RM4",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "RM4_Ghi chú",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.665Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "content": "if(value.length>23){\n    return [{type: \"error\",\n        message: `Không được nhập quá 23 ký tự `\n    }]\n}",
          "arguments": {}
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb9246",
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
    "id": "5ecceed7d13964435adb96b3"
  },
  {
    "layout_labels": null,
    "name": "Product1",
    "layout_name": "Sunlife",
    "index": 4,
    "layout_id": "5ecceed7d13964435adb94fd",
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
        "_id": "5ecceed7d13964435adb94b6",
        "name": "A507",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A507_Mục tiêu tài chính",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.646Z",
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
          "content": "if(!value){\r\n    return [{type : \"error\" , message : \"Field đang trống, vui lòng kiểm tra lại trước khi save\"}];\r\n}\r\n\r\nif (value){\r\n    async function checkValidation(value) {\r\n            let params = `[\"${encodeURIComponent(value)}\"]`\r\n            let dataLookup =  await fetchJSON(`https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/insurance_purpose/${params}`);\r\n            let _value =value.toLowerCase(); \r\n            if (!Array.isArray(dataLookup.json_single)||dataLookup.json_single.map(item => item.value.toLowerCase()).findIndex(item => item === _value) === -1) {\r\n                            return [{\r\n                              type: \"error\",\r\n                              message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                            }]\r\n                         }\r\n            // if(value.toLowerCase().includes('nhhien'))             \r\n            //              return[{ \r\n            //                   type: 'warning',\r\n            //                   message: `Lookup warning value:${value}`}];\r\n    }\r\n    return await checkValidation(value);\r\n    }\r\n",
          "arguments": {}
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb94b6",
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
        "_id": "5ecceed7d13964435adb952e",
        "name": "A509",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A509_Khoản thực hiện ",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.646Z",
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
          "content": "if(!value){\r\n    return [{type : \"error\" , message : \"Field đang trống, vui lòng kiểm tra lại trước khi save\"}];\r\n}\r\n\r\nif (value){\r\n    async function checkValidation(value) {\r\n            let dataLookup =  await fetchJSON(`https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/premium_source/[%22${value}%22]`);\r\n            let _value =value.toLowerCase(); \r\n            if (!Array.isArray(dataLookup.json_single)||dataLookup.json_single.map(item => item.value.toLowerCase()).findIndex(item => item === _value) === -1) {\r\n                            return [{\r\n                              type: \"error\",\r\n                              message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                            }]\r\n                         }\r\n            // if(value.toLowerCase().includes('nhhien'))             \r\n            //              return[{ \r\n            //                   type: 'warning',\r\n            //                   message: `Lookup warning value:${value}`}];\r\n    }\r\n    return await checkValidation(value);\r\n    }",
          "arguments": {}
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb952e",
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
        "_id": "5ecceed7d13964435adb9368",
        "name": "A511",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A511_Nguồn khai thác bảo hiểm",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.646Z",
        "lookup_broadcast": [],
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
          "content": "if(!value){\r\n    return [{type : \"error\" , message : \"Field đang trống, vui lòng kiểm tra lại trước khi save\"}];\r\n}\r\n\r\nif (value){\r\n    async function checkValidation(value) {\r\n            let dataLookup =  await fetchJSON(`https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/source_of_sale/[%22${value}%22]`);\r\n            let _value =value.toLowerCase(); \r\n            if (!Array.isArray(dataLookup.json_single)||dataLookup.json_single.map(item => item.value_vietnamese.toLowerCase()).findIndex(item => item === _value) === -1) {\r\n                            return [{\r\n                              type: \"error\",\r\n                              message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                            }]\r\n                         }\r\n            // if(value.toLowerCase().includes('nhhien'))             \r\n            //              return[{ \r\n            //                   type: 'warning',\r\n            //                   message: `Lookup warning value:${value}`}];\r\n    }\r\n    return await checkValidation(value);\r\n    }",
          "arguments": {}
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb9368",
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
        "_id": "5ecceed7d13964435adb94be",
        "name": "A604",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A604_Tên người giới thiệu",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.648Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nfunction transformGivenSurname(field_value) {\r\n  field_value = field_value.trim();\r\n  var fullString = '';\r\n  var arr_char = ['ß'];\r\n  if(field_value.includes(' ')){\r\n  \tvar arr = field_value.split(' ');\r\n    for(var i = 0 ; i < arr.length; i++){\r\n    \tvar strChild = arr[i];\r\n        if(strChild === strChild.toLowerCase() || strChild === strChild.toUpperCase()){\r\n \t       \tif(arr_char.includes(strChild.substring(0,1))){\r\n\t\t\t\tstrChild = strChild.substring(0,1) + strChild.substring(1,strChild.length).toLowerCase();\r\n          \t\tfullString += strChild + ' ';\r\n\t\t\t}else{\r\n           \t\tstrChild = strChild.substring(0,1).toUpperCase() + strChild.substring(1,strChild.length).toLowerCase();\r\n          \t\tfullString += strChild + ' ';\r\n            }\r\n          \r\n        }else{\r\n            strChild = strChild.substring(0,1).toUpperCase() + strChild.substring(1,strChild.length).toLowerCase();\r\n            fullString += strChild + ' ';\r\n        }\r\n    }\r\n  }else{\r\n  \tif(field_value === field_value.toLowerCase() || field_value === field_value.toUpperCase()){\r\n    \tif(arr_char.includes(field_value.substring(0,1))){\r\n\t\t\tfield_value = field_value.substring(0,1) + field_value.substring(1,field_value.length).toLowerCase();\r\n     \t\tfullString = field_value;\r\n\t\t}else{\r\n        \tfield_value = field_value.substring(0,1).toUpperCase() + field_value.substring(1,field_value.length).toLowerCase();\r\n      \t\tfullString = field_value;\r\n\t\t}\r\n      \r\n    }else{\r\n        field_value = field_value.substring(0,1).toUpperCase() + field_value.substring(1,field_value.length).toLowerCase();\r\n        fullString = field_value;\r\n    }\r\n  }\r\n  return fullString.trim();\r\n}\r\nreturn transformGivenSurname(removeSpace(value));"
        },
        "tooltip": "",
        "validation": {
          "name": "",
          "content": "",
          "arguments": {}
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb94be",
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
        "_id": "5ecceed7d13964435adb95ab",
        "name": "A605",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A605_Mã số người giới thiệu",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.648Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "content": "function removeSpace(input){\r\n\r\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nfunction transformGivenSurname(field_value) {\r\n  field_value = field_value.trim();\r\n  var fullString = '';\r\n  var arr_char = ['ß'];\r\n  if(field_value.includes(' ')){\r\n  \tvar arr = field_value.split(' ');\r\n    for(var i = 0 ; i < arr.length; i++){\r\n    \tvar strChild = arr[i];\r\n        if(strChild === strChild.toLowerCase() || strChild === strChild.toUpperCase()){\r\n \t       \tif(arr_char.includes(strChild.substring(0,1))){\r\n\t\t\t\tstrChild = strChild.substring(0,1) + strChild.substring(1,strChild.length).toLowerCase();\r\n          \t\tfullString += strChild + ' ';\r\n\t\t\t}else{\r\n           \t\tstrChild = strChild.substring(0,1).toUpperCase() + strChild.substring(1,strChild.length).toLowerCase();\r\n          \t\tfullString += strChild + ' ';\r\n            }\r\n          \r\n        }else{\r\n            strChild = strChild.substring(0,1).toUpperCase() + strChild.substring(1,strChild.length).toLowerCase();\r\n            fullString += strChild + ' ';\r\n        }\r\n    }\r\n  }else{\r\n  \tif(field_value === field_value.toLowerCase() || field_value === field_value.toUpperCase()){\r\n    \tif(arr_char.includes(field_value.substring(0,1))){\r\n\t\t\tfield_value = field_value.substring(0,1) + field_value.substring(1,field_value.length).toLowerCase();\r\n     \t\tfullString = field_value;\r\n\t\t}else{\r\n        \tfield_value = field_value.substring(0,1).toUpperCase() + field_value.substring(1,field_value.length).toLowerCase();\r\n      \t\tfullString = field_value;\r\n\t\t}\r\n      \r\n    }else{\r\n        field_value = field_value.substring(0,1).toUpperCase() + field_value.substring(1,field_value.length).toLowerCase();\r\n        fullString = field_value;\r\n    }\r\n  }\r\n  return fullString.trim();\r\n}\r\nreturn transformGivenSurname(removeSpace(value));",
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
          "field_id": "5ecceed7d13964435adb95ab",
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
        "_id": "5ecceed7d13964435adb9456",
        "name": "O02",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "O02_Mã số TVTC 1",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.654Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "production",
          "key_value": "ma_so_tvtc",
          "locale": [
            "165_191128_340_SUNLIFE"
          ],
          "lookup_after_time": 1,
          "lookup_field": "tvtc",
          "name": "",
          "param_set": "return [data.O02]",
          "result_view_config": [
            {
              "title": "TVTC Code",
              "key_value": "ma_so_tvtc"
            },
            {
              "title": "TVTC Name",
              "key_value": "ten_tvtc"
            }
          ],
          "related_columns": [],
          "specific_project": "0"
        },
        "pattern": {
          "name": "",
          "arguments": {},
          "content": ""
        },
        "rule_transform": {
          "name": "ancestry_removeSpace",
          "arguments": {},
          "content": "function removeSpace(input){\n\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\n\tinput = input.trim();\n\n\treturn input;\n}\n\nreturn removeSpace(value);",
          "created_date": "2020-04-23T08:27:07.735Z",
          "last_modified": "2020-04-23T08:27:07.735Z",
          "id": "5ea1515b64aab3001e45b03c"
        },
        "tooltip": "",
        "validation": {
          "name": "",
          "content": "var regex1 = /[^\\s0-9]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số \"}]\r\n}\r\nif(!value){\r\n    return [{type : \"error\",\r\n        message :\"Field Rỗng, cần kiểm tra lại!\"\r\n    }]\r\n}\r\nif(value.length <6 ||value.length >6){\r\n    return [{type : \"error\" , message : \"Chỉ được nhập chuỗi 6 kí tự số \"}]\r\n}",
          "arguments": {}
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb9456",
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
        "_id": "5ecceed7d13964435adb94c9",
        "name": "O03",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "O03_Tỷ lệ hoa hồng",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.654Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "content": "var regex1 = /[^\\s0-9]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\nif(!value){\r\n    return [{type : \"error\",\r\n        message :\"Field Rỗng, cần kiểm tra lại!\"\r\n    }]\r\n}\r\n",
          "created_date": "2019-11-29T08:49:07.590Z",
          "last_modified": "2019-11-29T08:49:07.590Z",
          "id": "5de0db83dedee200147c1611"
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb94c9",
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
        "_id": "5ecceed7d13964435adb95ba",
        "name": "O04",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "O04_Mã số TVTC 2",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.654Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "production",
          "key_value": "ma_so_tvtc",
          "locale": [
            "165_191128_340_SUNLIFE"
          ],
          "lookup_after_time": 1,
          "lookup_field": "tvtc",
          "name": "",
          "param_set": "return [data.O04]",
          "result_view_config": [
            {
              "title": "TVTC Code",
              "key_value": "ma_so_tvtc"
            },
            {
              "title": "TVTC Name",
              "key_value": "ten_tvtc"
            }
          ],
          "related_columns": [],
          "specific_project": "0"
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
          "arguments": {},
          "content": "var regex1 = /[^\\s0-9]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số \"}]\r\n}\r\nif(value){\r\n    if(value.length <6 ||value.length >6){\r\n        return [{type : \"error\" , message : \"Chỉ được nhập chuỗi 6 kí tự số \"}]\r\n    }\r\n    \r\n}",
          "created_date": "2019-11-28T06:46:23.478Z",
          "last_modified": "2019-11-29T08:25:58.570Z",
          "id": "5ddf6d3fdedee200147c15f6"
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb95ba",
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
        "_id": "5ecceed7d13964435adb9547",
        "name": "O05",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "O05_Tỷ lệ hoa hồng",
        "is_list": false,
        "last_modified": "2020-10-13T11:36:36.801Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "content": "var regex1 = /[^\\s0-9]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n\r\nlet O03 = record.O03.text;\r\n\r\nlet total = Number(O03) + Number(value);\r\n\r\nif(parseFloat(total)!=100){\r\n    return [{type : \"error\" , message : \"Tổng Tỷ lệ hoa hồng khác 100, vui lòng kiểm tra lại\"}];\r\n}",
          "created_date": "2019-11-29T08:49:07.590Z",
          "last_modified": "2019-11-29T08:49:07.590Z",
          "id": "5de0db83dedee200147c1611"
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb9547",
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
        "_id": "5ecceed7d13964435adb94cb",
        "name": "O13",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "Y",
        "field_display": "O13_Câu 1:BMBH",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.655Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb94cb",
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
        "_id": "5ecceed7d13964435adb95bb",
        "name": "O14",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "Y",
        "field_display": "O14_Câu 1:NDBH",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.655Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb95bb",
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
        "_id": "5ecceed7d13964435adb9549",
        "name": "O15",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "Y",
        "field_display": "O15_Câu 1:NDBHBS1",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.655Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9549",
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
        "_id": "5ecceed7d13964435adb9234",
        "name": "O16",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "Y",
        "field_display": "O16_Câu 1:NDBHBS2",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.655Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9234",
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
        "_id": "5ecceed7d13964435adb962b",
        "name": "O17",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "Y",
        "field_display": "O17_Câu 1:NDBHBS3",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.656Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb962b",
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
        "_id": "5ecceed7d13964435adb929e",
        "name": "O18",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "Y",
        "field_display": "O18_Câu 1:NDBHBS4 ____________________________________",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.656Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb929e",
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
        "_id": "5ecceed7d13964435adb9319",
        "name": "O20",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "Y",
        "field_display": "O20_Câu 2:BMBH",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.656Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9319",
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
        "_id": "5ecceed7d13964435adb93fa",
        "name": "O21",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "Y",
        "field_display": "O21_Câu 2:NDBH",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.656Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb93fa",
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
        "_id": "5ecceed7d13964435adb945c",
        "name": "O22",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "Y",
        "field_display": "O22_Câu 2:NDBHBS1",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.656Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "arguments": {},
          "content": "var regex1 = /[^\\s0-9A-Za-z]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số và chữ \"}]\r\n}\r\n",
          "created_date": "2019-11-28T06:46:23.478Z",
          "last_modified": "2019-11-29T08:25:58.570Z",
          "id": "5ddf6d3fdedee200147c15f6"
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb945c",
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
        "_id": "5ecceed7d13964435adb94ce",
        "name": "O23",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "Y",
        "field_display": "O23_Câu 2:NDBHBS2",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.656Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb94ce",
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
        "_id": "5ecceed7d13964435adb95bd",
        "name": "O24",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "Y",
        "field_display": "O24_Câu 2:NDBHBS3",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.656Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb95bd",
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
        "_id": "5ecceed7d13964435adb954b",
        "name": "O25",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "Y",
        "field_display": "O25_Câu 2:NDBHBS4 ____________________________________",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.656Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb954b",
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
        "_id": "5ecceed7d13964435adb962d",
        "name": "O28",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "O28_Câu 3:BMBH",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.657Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb962d",
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
        "_id": "5ecceed7d13964435adb92a4",
        "name": "O29",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "O29_Câu 3:NDBH",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.657Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb92a4",
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
        "_id": "5ecceed7d13964435adb9380",
        "name": "O30",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "O30_Câu 3:NDBHBS1",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.657Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9380",
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
        "_id": "5ecceed7d13964435adb931b",
        "name": "O31",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "O31_Câu 3:NDBHBS2",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.657Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb931b",
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
        "_id": "5ecceed7d13964435adb9401",
        "name": "O32",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "O32_Câu 3:NDBHBS3",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.657Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9401",
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
        "_id": "5ecceed7d13964435adb9462",
        "name": "O33",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "O33_Câu 3:NDBHBS4 ____________________________________",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.657Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9462",
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
        "_id": "5ecceed7d13964435adb94d2",
        "name": "O34",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "O34_Câu 4: Quốc tịch nước ngoài ____________________________________",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.657Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb94d2",
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
        "_id": "5ecceed7d13964435adb95c0",
        "name": "O35",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "Y",
        "field_display": "O35_Câu 5:BMBH",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.657Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb95c0",
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
        "_id": "5ecceed7d13964435adb954e",
        "name": "O36",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "Y",
        "field_display": "O36_Câu 5:NDBH",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.657Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb954e",
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
        "_id": "5ecceed7d13964435adb9238",
        "name": "O37",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "Y",
        "field_display": "O37_Câu 5:NDBHBS1",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.657Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9238",
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
        "_id": "5ecceed7d13964435adb962f",
        "name": "O38",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "Y",
        "field_display": "O38_Câu 5:NDBHBS2",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.657Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb962f",
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
        "_id": "5ecceed7d13964435adb92a3",
        "name": "O39",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "Y",
        "field_display": "O39_Câu 5:NDBHBS3",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.657Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb92a3",
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
        "_id": "5ecceed7d13964435adb9382",
        "name": "O40",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "Y",
        "field_display": "O40_Câu 5:NDBHBS4 ____________________________________",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.658Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9382",
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
        "_id": "5ecceed7d13964435adb9652",
        "name": "O88",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "O88_Câu 6:BMBH",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.664Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9652",
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
        "_id": "5ecceed7d13964435adb92ae",
        "name": "O89",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "O89_Câu 6:NDBH",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.664Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb92ae",
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
        "_id": "5ecceed7d13964435adb9390",
        "name": "O90",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "O90_Câu 6:NDBHBS1",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.664Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9390",
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
        "_id": "5ecceed7d13964435adb9328",
        "name": "O91",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "O91_Câu 6:NDBHBS2",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.664Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9328",
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
        "_id": "5ecceed7d13964435adb940a",
        "name": "O92",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "O92_Câu 6:NDBHBS3",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.664Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb940a",
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
        "_id": "5ecceed7d13964435adb946f",
        "name": "O93",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "O93_Câu 6:NDBHBS4 ____________________________________",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.664Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb946f",
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
        "_id": "5ecceed7d13964435adb95a5",
        "name": "A508",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A508_Ngày ký của TVTC",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.646Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "content": "if(!value){\r\n    return [{type : \"error\",\r\n        message :\"Field Rỗng, cần kiểm tra lại!\"\r\n    }]\r\n}\r\n\r\n\r\nfunction chkDate(date){\r\n\tvar dd = date.substring(0,2);\r\n\tvar mm = date.substring(2,4);\r\n\tvar yy = date.substring(4,6);\r\n\tvar tmpDate = new Date();\r\n\tvar y = tmpDate.getFullYear()+\"\";\r\n\ty = y.substring(2,4)*1 + 1;\r\n\r\n\t//Gan gia tri nam la 19YY neu YY > nam hien tai + 1\r\n\t//Gan gia tri nam la 20YY neu YY <= nam hien tai + 1\r\n\tif(yy*1>y){ yy = 19+yy;\r\n\t}else {yy = 20+yy;}\r\n\r\n\treturn dd+mm+yy;\t\r\n}\r\n\r\nfunction formatdate(ngay_hieu_luc_in78){\r\nvar fvalue = ngay_hieu_luc_in78;\r\n\tvar regex = /^(?:(?:31(|\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(|\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(|\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(|\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$/\r\n//\tvar regex1 = /^\\d{6}$/;\r\n\tvar regex2 = /^(\\s*|[0-9\\.\\/\\-]{0,10})$/ ;\r\n\tvar date;\r\nif(fvalue === \"\") return ;\r\n// \tif(regex1.test(fvalue))\r\n// \treturn ;\r\n\tif(regex2.test(fvalue)){\r\n\t\r\n\tif(!regex.test(fvalue)){\r\n\t\treturn [{type:\"warning\",message:\"Ngày Tháng Năm không phù hợp, vui lòng kiểm tra lại.\"}]\r\n\t}\r\n\tif(fvalue.length < 8){\r\n\t\treturn [{type:\"error\",message:\"Field ngày không đủ 8 ký tự\"}]\r\n\t}\r\n}else{\r\n    return [{type:\"error\",message:\"Không đúng định dạng ddmmyyyy\"}]\r\n}\r\nfvalue = fvalue.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'');\r\nif(fvalue.length === 6){\r\n\tfvalue = chkDate(fvalue);\r\n}\r\nvar dd = fvalue.substring(0, 2);\r\nvar mm = fvalue.substring(2, 4);\r\nvar yy = fvalue.substring(4, 8);\r\nvar tmpDate = new Date();\r\nvar d = tmpDate.getDate();\r\nvar m = tmpDate.getMonth();\r\nvar y = tmpDate.getFullYear();\r\nvar inputDate = new Date(yy, mm - 1, dd);\r\nvar curDate = new Date(y, m, d);\r\n\r\n\r\n\r\n//So sanh ngay nhap voi ngay hien tai\r\nif (inputDate > curDate) {\r\n return [{type:\"warning\", message:\"Năm nhập lớn hơn năm hiện tại\"}]\r\n}\r\n\r\n\r\n}\r\n\r\nreturn formatdate(value);",
          "created_date": "2019-11-28T06:50:27.116Z",
          "last_modified": "2019-11-28T06:50:27.116Z",
          "id": "5ddf6e33dedee200147c15f7"
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb95a5",
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
        "_id": "5ecceed7d13964435adb93ea",
        "name": "A602",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A602_Ngày Nộp tiền",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.648Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb93ea",
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
        "_id": "5ecceed7d13964435adb930c",
        "name": "A610",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A610_Tổng số tiền đóng lần đầu",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.649Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "created_date": "2020-04-27T07:08:22.358Z",
          "last_modified": "2020-04-27T07:09:29.160Z",
          "id": "5ea684e696527c001be0c516"
        },
        "tooltip": "",
        "validation": {
          "name": "Only_number",
          "arguments": {},
          "content": "var regex1 = /[^\\s0-9.+]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\n\r\nif(!value){\r\n    return [{type : \"error\",\r\n        message :\"Field Rỗng, cần kiểm tra lại!\"\r\n    }]\r\n}",
          "created_date": "2020-05-06T03:10:40.359Z",
          "last_modified": "2020-05-06T04:34:00.076Z",
          "id": "5eb22ab03d64d3001bf43ec7"
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb930c",
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
    "id": "5ecceed7d13964435adb96ab"
  },
  {
    "layout_labels": null,
    "name": "Product_PO",
    "layout_name": "Sunlife",
    "index": 5,
    "layout_id": "5ecceed7d13964435adb94fd",
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
        "_id": "5ecceed7d13964435adb92fc",
        "name": "A35",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A35_Sản phẩm bảo hiểm_PO",
        "is_list": true,
        "last_modified": "2020-10-13T05:25:46.642Z",
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
        "field_setting": {
          "field_id": "5ecceed7d13964435adb92fc",
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
        "_id": "5ecceed7d13964435adb9303",
        "name": "A512",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A512_Số tiền bảo hiểm_PO",
        "is_list": false,
        "last_modified": "2020-10-14T03:03:22.806Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "arguments": {
            "farm": "A35"
          },
          "content": "// console.log(arguments, '----------------------------------')\n\nvar regex1 = /[^\\s0-9.+]/g\n\nif (regex1.test(value)) {\n\n    return [{ type: \"error\", message: \"Chỉ nhập số\" }]\n}\n\nconst condition1 = [\n    'Bảo An Bình',\n    'Bảo An Toàn',\n    'Bảo An Tâm',\n    'Bảo Thịnh Vượng',\n    'Nâng Bước Con Yêu',\n    'Sun - Trọn Vẹn Ước Mơ',\n    'SUN - Sống Vững Vàng - Quyền lợi Cao cấp',\n    'SUN - Sống Vững Vàng - Quyền lợi Phổ thông',\n    'Bảo An Phúc (Quyền lợi cơ bản)',\n    'Bảo An Phúc (Quyền lợi nâng cao)',\n    'Sun-Sống Chủ Động (Quyền lợi gia tăng bảo vệ)',\n    'Sun-Sống Chủ Động (Quyền lợi gia tăng tiết kiệm)',\n    'Bảo An Khang',\n    'SUN - Sống Sung Túc',\n    'SUN - Sống Đẳng Cấp',\n    'Bảo Hiểm Bổ Sung - Bệnh Hiểm Nghèo',\n    'Bảo Hiểm Bổ Sung - Tử Kỳ',\n    'Bảo Hiểm Bổ Sung - Tai Nạn Toàn Diện',\n    'Bảo Hiểm Bổ Sung - Bệnh Hiểm Nghèo Toàn Diện',\n    'Sản Phẩm Bổ Sung - Bảo Vệ Sức Khỏe Toàn Diện',\n    'Sản Phẩm Bổ Sung - Sống An'\n]\n\nconst condition2 = [\n    'Bảo Hiểm Bổ Sung - Hỗ Trợ Đóng Phí',\n    'Bảo Hiểm Bổ Sung - Miễn Đóng Phí Bệnh Hiểm Nghèo'\n]\n\nconst condition3 = [\n    'Bảo Hiểm Bổ Sung - Hỗ Trợ Viện Phí'\n]\n\nfunction isExist(value, conditions) {\n    for (let index = 0; index < conditions.length; index++) {\n        const condition = conditions[index];\n        let id = condition.findIndex(it => it.normalize() == value.normalize())\n\n        if (id !== -1) {\n            return [condition[id], index]\n        }\n    }\n    return [null, -1]\n}\n\nfunction checkEqual(value1 = \"\", value2 = \"\") {\n    value1 = value1.replace(/[+]/g, '000').trim();\n    value2 = value2.trim()\n\n    if (!value1 && value2) {\n        return [{ type: \"error\", message: \"Sản phẩm bảo hiểm chính có dữ liệu, không được bỏ trống Field\" }];\n    }\n\n    \n    let [val, type] = isExist(value2, [condition1, condition2, condition3]);\n\n    if (val) {\n        switch (type) {\n            case 0:\n                if (parseFloat(value1) < 10000000) {\n                    return [{ type: \"warning\", message: `${val}, không được nhập giá trị bé hơn 10.000.000` }];\n                }\n                break;\n            case 1:\n                if (parseFloat(value1) > 50000000) {\n                    return [{ type: \"warning\", message: `${val}, không được nhập giá trị lớn hơn 50.000.000` }];\n                }\n                break;\n            default:\n                if (parseFloat(value1) > 10000000 || parseFloat(value1) < 100000) {\n                    return [{ type: \"error\", message: `${val}, không được nhập giá trị lớn hơn 10.000.000 và bé hơn 100.000` }];\n                }\n                break;\n        }\n    }\n}\n\nreturn checkEqual(value, farm);",
          "created_date": "2019-11-29T08:49:07.590Z",
          "last_modified": "2019-11-29T08:49:07.590Z",
          "id": "5de0db83dedee200147c1611"
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb9303",
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
        "_id": "5ecceed7d13964435adb9220",
        "name": "A517",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A517_Thời hạn đóng phí_PO",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.647Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "content": "function removeSpace(input){\r\n\r\n\tinput = input.replace(/[\\s\\t]+/g,' ');\r\n\tinput = input.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'-');\r\n\tinput = input.replace(/[\\s\\t]*(\\()[\\s\\t]*/g,' (');\r\n\tinput = input.replace(/[\\s\\t]*(\\))[\\s\\t]*/g,') ');\r\n    input = input.replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'/');\r\n    input = input.replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'.');\r\n    input = input.replace(/[\\s\\t]*(\\,)[\\s\\t]*/g,',');\r\n\r\n\tinput = input.trim();\r\n\r\n\treturn input;\r\n}\r\n\r\nreturn removeSpace(value);",
          "created_date": "2019-11-28T07:25:37.362Z",
          "last_modified": "2019-11-28T07:25:37.362Z",
          "id": "5ddf7671dedee200147c15f9"
        },
        "tooltip": "",
        "validation": {
          "name": "Number",
          "arguments": {
            "farm": "A35"
          },
          "content": "var regex1 = /[^\\s0-9]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\nif(value > 100){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ được phép nhập tối đa 100\"}]\r\n}\r\n\r\nfunction checkEqual(value1 =\"\" , value2 = \"\"){\r\n    value1 = value1.trim()\r\n    value2 = value2.toUpperCase().trim()\r\n    \r\n    if(!value1  && value2){\r\n        return [{type : \"error\" , message : \"Sản phẩm bảo hiểm chính có dữ liệu, không được bỏ trống Field\"}];\r\n    }\r\n}\r\n\r\nreturn checkEqual(value, farm);",
          "created_date": "2019-11-29T08:49:07.590Z",
          "last_modified": "2019-11-29T08:49:07.590Z",
          "id": "5de0db83dedee200147c1611"
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb9220",
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
        "_id": "5ecceed7d13964435adb93f1",
        "name": "A611",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Basic",
          "Premium",
          "VIP",
          "VIP Plus"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "",
        "field_display": "A611_Gói sản phẩm MR",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.649Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "content": "function checkEqual(value1 =\"\" , value2 = \"\"){\n    value1 = value1.trim()\n    value2 = value2.trim()\n    \n    if(!value1  && value2 === 'Sản Phẩm Bổ Sung – Bảo Vệ Sức Khỏe Toàn Diện'){\n        return [{type : \"error\" , message : \"Tên sản phẩm là 'Sản Phẩm Bổ Sung – Bảo Vệ Sức Khỏe Toàn Diện', không được bỏ trống Field\"}];\n    }\n}\n\nreturn checkEqual(value, farm);",
          "arguments": {
            "farm": "A35"
          }
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb93f1",
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
    "id": "5ecceed7d13964435adb96e0"
  },
  {
    "layout_labels": null,
    "name": "Product_LI",
    "layout_name": "Sunlife",
    "index": 6,
    "layout_id": "5ecceed7d13964435adb94fd",
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
        "_id": "5ecceed7d13964435adb9300",
        "name": "A504",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A504_Sản phẩm bảo hiểm chính_LI",
        "is_list": true,
        "last_modified": "2020-10-13T05:25:46.645Z",
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
        "field_setting": {
          "field_id": "5ecceed7d13964435adb9300",
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
        "_id": "5ecceed7d13964435adb93e4",
        "name": "A505",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A505_Số tiền bảo hiểm chính_LI",
        "is_list": false,
        "last_modified": "2020-10-14T03:03:38.347Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "arguments": {
            "farm": "A504"
          },
          "content": "// console.log(arguments, '----------------------------------')\n\nvar regex1 = /[^\\s0-9.+]/g\n\nif (regex1.test(value)) {\n\n    return [{ type: \"error\", message: \"Chỉ nhập số\" }]\n}\n\nconst condition1 = [\n    'Bảo An Bình',\n    'Bảo An Toàn',\n    'Bảo An Tâm',\n    'Bảo Thịnh Vượng',\n    'Nâng Bước Con Yêu',\n    'Sun - Trọn Vẹn Ước Mơ',\n    'SUN - Sống Vững Vàng - Quyền lợi Cao cấp',\n    'SUN - Sống Vững Vàng - Quyền lợi Phổ thông',\n    'Bảo An Phúc (Quyền lợi cơ bản)',\n    'Bảo An Phúc (Quyền lợi nâng cao)',\n    'Sun-Sống Chủ Động (Quyền lợi gia tăng bảo vệ)',\n    'Sun-Sống Chủ Động (Quyền lợi gia tăng tiết kiệm)',\n    'Bảo An Khang',\n    'SUN - Sống Sung Túc',\n    'SUN - Sống Đẳng Cấp',\n    'Bảo Hiểm Bổ Sung - Bệnh Hiểm Nghèo',\n    'Bảo Hiểm Bổ Sung - Tử Kỳ',\n    'Bảo Hiểm Bổ Sung - Tai Nạn Toàn Diện',\n    'Bảo Hiểm Bổ Sung - Bệnh Hiểm Nghèo Toàn Diện',\n    'Sản Phẩm Bổ Sung - Bảo Vệ Sức Khỏe Toàn Diện',\n    'Sản Phẩm Bổ Sung - Sống An'\n]\n\nconst condition2 = [\n    'Bảo Hiểm Bổ Sung - Hỗ Trợ Đóng Phí',\n    'Bảo Hiểm Bổ Sung - Miễn Đóng Phí Bệnh Hiểm Nghèo'\n]\n\nconst condition3 = [\n    'Bảo Hiểm Bổ Sung - Hỗ Trợ Viện Phí'\n]\n\nfunction isExist(value, conditions) {\n    for (let index = 0; index < conditions.length; index++) {\n        const condition = conditions[index];\n        let id = condition.findIndex(it => it.normalize() == value.normalize())\n\n        if (id !== -1) {\n            return [condition[id], index]\n        }\n    }\n    return [null, -1]\n}\n\nfunction checkEqual(value1 = \"\", value2 = \"\") {\n    value1 = value1.replace(/[+]/g, '000').trim();\n    value2 = value2.trim()\n\n    if (!value1 && value2) {\n        return [{ type: \"error\", message: \"Sản phẩm bảo hiểm chính có dữ liệu, không được bỏ trống Field\" }];\n    }\n\n    let [val, type] = isExist(value2, [condition1, condition2, condition3]);\n\n    if (val) {\n        switch (type) {\n            case 0:\n                if (parseFloat(value1) < 10000000) {\n                    return [{ type: \"warning\", message: `${val}, không được nhập giá trị bé hơn 10.000.000` }];\n                }\n                break;\n            case 1:\n                if (parseFloat(value1) > 50000000) {\n                    return [{ type: \"warning\", message: `${val}, không được nhập giá trị lớn hơn 50.000.000` }];\n                }\n                break;\n            default:\n                if (parseFloat(value1) > 10000000 || parseFloat(value1) < 100000) {\n                    return [{ type: \"error\", message: `${val}, không được nhập giá trị lớn hơn 10.000.000 và bé hơn 100.000` }];\n                }\n                break;\n        }\n    }\n}\n\nreturn checkEqual(value, farm);",
          "created_date": "2019-11-29T08:49:07.590Z",
          "last_modified": "2019-11-29T08:49:07.590Z",
          "id": "5de0db83dedee200147c1611"
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb93e4",
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
        "_id": "5ecceed7d13964435adb961c",
        "name": "A518",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A518_Thời hạn đóng phí_LI",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.647Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "arguments": {
            "farm": "A504"
          },
          "content": "var regex1 = /[^\\s0-9]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\nif(value > 100){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ được phép nhập tối đa 100\"}]\r\n}\r\n\r\nfunction checkEqual(value1 =\"\" , value2 = \"\"){\r\n    value1 = value1.trim()\r\n    value2 = value2.toUpperCase().trim()\r\n    \r\n    if(!value1  && value2){\r\n        return [{type : \"error\" , message : \"Sản phẩm bảo hiểm chính có dữ liệu, không được bỏ trống Field\"}];\r\n    }\r\n}\r\n\r\nreturn checkEqual(value, farm);",
          "created_date": "2019-11-29T08:49:07.590Z",
          "last_modified": "2019-11-29T08:49:07.590Z",
          "id": "5de0db83dedee200147c1611"
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb961c",
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
        "_id": "5ecceed7d13964435adb944e",
        "name": "A612",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Basic",
          "Premium",
          "VIP",
          "VIP Plus"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "",
        "field_display": "A612_Gói sản phẩm MR",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.649Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "content": "function checkEqual(value1 =\"\" , value2 = \"\"){\n    value1 = value1.trim()\n    value2 = value2.trim()\n    \n    if(!value1  && value2 === 'Sản Phẩm Bổ Sung – Bảo Vệ Sức Khỏe Toàn Diện'){\n        return [{type : \"error\" , message : \"Tên sản phẩm là 'Sản Phẩm Bổ Sung – Bảo Vệ Sức Khỏe Toàn Diện', không được bỏ trống Field\"}];\n    }\n}\n\nreturn checkEqual(value, farm);",
          "arguments": {
            "farm": "A504"
          }
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb944e",
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
    "id": "5ecceed7d13964435adb96cc"
  },
  {
    "layout_labels": null,
    "name": "Product2",
    "layout_name": "Sunlife",
    "index": 7,
    "layout_id": "5ecceed7d13964435adb94fd",
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
        "_id": "5ecceed7d13964435adb944c",
        "name": "A603",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A603_Phí Đóng Thêm Dự Kiến",
        "is_list": false,
        "last_modified": "2020-10-14T02:55:36.222Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
        "field_setting": {
          "field_id": "5ecceed7d13964435adb944c",
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
        "_id": "5ecceed7d13964435adb92c7",
        "name": "O59",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "O59_Quyền lợi chi trả Nâng Bước Con Yêu",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.659Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
          "result_view_config": [],
          "related_columns": []
        },
        "pattern": {
          "name": "",
          "arguments": {},
          "content": "^(\\s*|1|4)$",
          "description": "Chỉ được nhập 1 hoặc 4"
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
          "content": "// console.log(arguments)\n\nconst condition =['Nâng Bước Con Yêu']\nfunction isExist(data,field,value){\n    return  data.findIndex(it=>\n      { if(Array.isArray(value)){\n          return   it[field]&&value.includes(it[field].text)\n        }else{\n            return it[field]&&it[field].text===value\n        }\n    }\n        )!==-1\n}\n\nconst {\n    Product_PO,\n    Product_LI\n} =  layout\n\nlet liCon = isExist(Product_PO,'A35',condition)||isExist(Product_LI,'A504',condition);\n\nif(liCon&&!value.trim()){\n    return [{type : \"error\" , message : \"Có sản phẩm là 'Nâng Bước Con Yêu', không được bỏ trống\"}];\n}\n",
          "arguments": {}
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb92c7",
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
    "id": "5ecceed7d13964435adb96b2"
  },
  {
    "layout_labels": null,
    "name": "Product3",
    "layout_name": "Sunlife",
    "index": 8,
    "layout_id": "5ecceed7d13964435adb94fd",
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
        "_id": "5ecceed7d13964435adb9404",
        "name": "O62",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "O62_% Quỹ tăng trưởng cơ bản",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.660Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
          "result_view_config": [],
          "related_columns": []
        },
        "pattern": {
          "name": "",
          "arguments": {},
          "content": "^(\\s*|[0-9]{1,3})$",
          "description": "Chỉ được phép nhập tối đa 3 số."
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
          "content": "// console.log(arguments)\n\nconst condition =['SUN - Sống Sung Túc', 'SUN - Sống Đẳng Cấp']\nfunction isExist(data,field,value){\n    return  data.findIndex(it=>\n      { if(Array.isArray(value)){\n          return   it[field]&&value.includes(it[field].text)\n        }else{\n            return it[field]&&it[field].text===value\n        }\n    }\n        )!==-1\n}\n\nconst {\n    Product_PO,\n    Product_LI\n} =  layout\n\nlet liCon = isExist(Product_PO,'A35',condition)||isExist(Product_LI,'A504',condition);\n\nif(liCon&&!value.trim()){\n    return [{type : \"error\" , message : \"Có sản phẩm là 'SUN - Sống Sung Túc' hoặc 'SUN - Sống Đẳng Cấp', không được bỏ trống\"}];\n}\n",
          "arguments": {}
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb9404",
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
        "_id": "5ecceed7d13964435adb9467",
        "name": "O63",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "O63_% Quỹ cân bằng cơ bản",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.660Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
          "result_view_config": [],
          "related_columns": []
        },
        "pattern": {
          "name": "",
          "arguments": {},
          "content": "^(\\s*|[0-9]{1,3})$",
          "description": "Chỉ được phép nhập tối đa 3 số."
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
          "content": "// console.log(arguments)\n\nconst condition =['SUN - Sống Sung Túc', 'SUN - Sống Đẳng Cấp']\nfunction isExist(data,field,value){\n    return  data.findIndex(it=>\n      { if(Array.isArray(value)){\n          return   it[field]&&value.includes(it[field].text)\n        }else{\n            return it[field]&&it[field].text===value\n        }\n    }\n        )!==-1\n}\n\nconst {\n    Product_PO,\n    Product_LI\n} =  layout\n\nlet liCon = isExist(Product_PO,'A35',condition)||isExist(Product_LI,'A504',condition);\n\nif(liCon&&!value.trim()){\n    return [{type : \"error\" , message : \"Có sản phẩm là 'SUN - Sống Sung Túc' hoặc 'SUN - Sống Đẳng Cấp', không được bỏ trống\"}];\n}\n",
          "arguments": {}
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb9467",
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
        "_id": "5ecceed7d13964435adb94db",
        "name": "O64",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "O64_% Quỹ bền vững cơ bản",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.660Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
          "result_view_config": [],
          "related_columns": []
        },
        "pattern": {
          "name": "",
          "arguments": {},
          "content": "^(\\s*|[0-9]{1,3})$",
          "description": "Chỉ được phép nhập tối đa 3 số."
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
          "content": "const condition =['SUN - Sống Đẳng Cấp', 'SUN - Sống Sung Túc']\n\nlet O63 = record.O63.text;\nlet O62 = record.O62.text;\n\nfunction isExist(data,field,value){\n    return  data.findIndex(it=>\n      { if(Array.isArray(value)){\n          return   it[field]&&value.includes(it[field].text)\n        }else{\n            return it[field]&&it[field].text===value\n        }\n    }\n        )!==-1\n}\n\nconst {\n    Product_PO,\n    Product_LI\n} =  layout\n\nlet liCon = isExist(Product_PO,'A35',condition)||isExist(Product_LI,'A504',condition);\n\nif(liCon&&!value.trim()){\n    return [{type : \"error\" , message : \"Có sản phẩm là 'SUN - Sống Đẳng Cấp' hoặc 'SUN - Sống Sung Túc', không được bỏ trống\"}];\n}\n\nlet total = Number(O62) + Number(O63) + Number(value);\n\nif(liCon&&parseFloat(total)!=100){\n    return [{type : \"error\" , message : \"Tổng giá trị phí BH khác 100, vui lòng kiểm tra lại\"}];\n}",
          "arguments": {}
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb94db",
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
        "_id": "5ecceed7d13964435adb95c5",
        "name": "O65",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "O65_% Quỹ tăng trưởng đóng thêm",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.660Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
          "result_view_config": [],
          "related_columns": []
        },
        "pattern": {
          "name": "",
          "arguments": {},
          "content": "^(\\s*|[0-9]{1,3})$",
          "description": "Chỉ được phép nhập tối đa 3 số."
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
          "content": "// console.log(arguments)\n\nconst condition =['SUN - Sống Sung Túc', 'SUN - Sống Đẳng Cấp']\nfunction isExist(data,field,value){\n    return  data.findIndex(it=>\n      { if(Array.isArray(value)){\n          return   it[field]&&value.includes(it[field].text)\n        }else{\n            return it[field]&&it[field].text===value\n        }\n    }\n        )!==-1\n}\n\nconst {\n    Product_PO,\n    Product_LI\n} =  layout\n\nlet liCon = isExist(Product_PO,'A35',condition)||isExist(Product_LI,'A504',condition);\n\nif(liCon&&!value.trim()){\n    return [{type : \"error\" , message : \"Có sản phẩm là 'SUN - Sống Sung Túc' hoặc 'SUN - Sống Đẳng Cấp', không được bỏ trống\"}];\n}\n",
          "arguments": {}
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb95c5",
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
        "_id": "5ecceed7d13964435adb9558",
        "name": "O66",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "O66_% Quỹ cân bằng đóng thêm",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.660Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
          "result_view_config": [],
          "related_columns": []
        },
        "pattern": {
          "name": "",
          "arguments": {},
          "content": "^(\\s*|[0-9]{1,3})$",
          "description": "Chỉ được phép nhập tối đa 3 số."
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
          "name": "Only_number",
          "arguments": {},
          "content": "// console.log(arguments)\n\nconst condition =['SUN - Sống Sung Túc', 'SUN - Sống Đẳng Cấp']\nfunction isExist(data,field,value){\n    return  data.findIndex(it=>\n      { if(Array.isArray(value)){\n          return   it[field]&&value.includes(it[field].text)\n        }else{\n            return it[field]&&it[field].text===value\n        }\n    }\n        )!==-1\n}\n\nconst {\n    Product_PO,\n    Product_LI\n} =  layout\n\nlet liCon = isExist(Product_PO,'A35',condition)||isExist(Product_LI,'A504',condition);\n\nif(liCon&&!value.trim()){\n    return [{type : \"error\" , message : \"Có sản phẩm là 'SUN - Sống Sung Túc' hoặc 'SUN - Sống Đẳng Cấp', không được bỏ trống\"}];\n}\n",
          "created_date": "2020-05-06T03:10:40.359Z",
          "last_modified": "2020-05-06T04:34:00.076Z",
          "id": "5eb22ab03d64d3001bf43ec7"
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb9558",
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
        "_id": "5ecceed7d13964435adb923f",
        "name": "O67",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "O67_% Quỹ bền vững đóng thêm",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.660Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
          "result_view_config": [],
          "related_columns": []
        },
        "pattern": {
          "name": "",
          "arguments": {},
          "content": "^(\\s*|[0-9]{1,3})$",
          "description": "Chỉ được phép nhập tối đa 3 số."
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
          "content": "const condition =['SUN - Sống Đẳng Cấp', 'SUN - Sống Sung Túc']\n\nlet O65 = record.O65.text;\nlet O66 = record.O66.text;\n\nfunction isExist(data,field,value){\n    return  data.findIndex(it=>\n      { if(Array.isArray(value)){\n          return   it[field]&&value.includes(it[field].text)\n        }else{\n            return it[field]&&it[field].text===value\n        }\n    }\n        )!==-1\n}\n\nconst {\n    Product_PO,\n    Product_LI\n} =  layout\n\nlet liCon = isExist(Product_PO,'A35',condition)||isExist(Product_LI,'A504',condition);\n\nif(liCon&&!value.trim()){\n    return [{type : \"error\" , message : \"Có sản phẩm là 'SUN - Sống Đẳng Cấp' hoặc 'SUN - Sống Sung Túc', không được bỏ trống\"}];\n}\n\nlet total = Number(O65) + Number(O66) + Number(value);\n\nif(liCon&&parseFloat(total)!=100){\n    return [{type : \"error\" , message : \"Tổng giá trị phí BH khác 100, vui lòng kiểm tra lại\"}];\n}",
          "arguments": {}
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb923f",
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
        "_id": "5ecceed7d13964435adb95cd",
        "name": "RM2",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "RM2_Ghi chú 2",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.664Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb95cd",
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
    "id": "5ecceed7d13964435adb96e9"
  },
  {
    "layout_labels": null,
    "name": "Health_Check1",
    "layout_name": "Sunlife",
    "index": 9,
    "layout_id": "5ecceed7d13964435adb94fd",
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
        "_id": "5ecceed7d13964435adb9533",
        "name": "A57",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A57_Câu 1_PO",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.648Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9533",
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
        "_id": "5ecceed7d13964435adb9223",
        "name": "A58",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A58_Câu 1_PO: Thành Phố",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.648Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9223",
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
        "_id": "5ecceed7d13964435adb961b",
        "name": "A59",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A59_Câu 1_PO: Thời gian và mục đích",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.648Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb961b",
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
        "_id": "5ecceed7d13964435adb928f",
        "name": "A60",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A60_Câu 1_PO: Ngày đi gần nhất",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.648Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb928f",
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
        "_id": "5ecceed7d13964435adb9371",
        "name": "A61",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A61_Câu 1_PO: Ngày dự định đi",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.649Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9371",
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
        "_id": "5ecceed7d13964435adb94c0",
        "name": "A62",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A62_Câu 2_PO",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.649Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb94c0",
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
        "_id": "5ecceed7d13964435adb95b1",
        "name": "A63",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A63_Câu 3_PO",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.649Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb95b1",
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
        "_id": "5ecceed7d13964435adb953a",
        "name": "A64",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A64_Câu 4_PO",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.649Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb953a",
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
        "_id": "5ecceed7d13964435adb9228",
        "name": "A65",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A65_Câu 5_PO",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.649Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9228",
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
        "_id": "5ecceed7d13964435adb9620",
        "name": "A66",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A66_Câu 5: Số lượng/ngày",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.650Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9620",
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
        "_id": "5ecceed7d13964435adb9292",
        "name": "A67",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A67_Câu 6_PO",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.650Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9292",
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
    "id": "5ecceed7d13964435adb96c9"
  },
  {
    "layout_labels": null,
    "name": "Health_Check_C6_1",
    "layout_name": "Sunlife",
    "index": 10,
    "layout_id": "5ecceed7d13964435adb94fd",
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
        "_id": "5ecceed7d13964435adb928b",
        "name": "A519",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Bia nhẹ",
          "Rượu nhẹ",
          "Rượu mạnh"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "",
        "field_display": "A519_Câu 6: Loại",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.647Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb928b",
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
        "_id": "5ecceed7d13964435adb9373",
        "name": "A68",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A68_Câu 6: Số Lượng Uống",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.650Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9373",
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
        "_id": "5ecceed7d13964435adb930e",
        "name": "A69",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Hàng Ngày",
          "Hàng Tuần"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "",
        "field_display": "A69_Câu 6: Tần suất sử dụng",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.650Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb930e",
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
    "id": "5ecceed7d13964435adb96d3"
  },
  {
    "layout_labels": null,
    "name": "Health_Check2",
    "layout_name": "Sunlife",
    "index": 11,
    "layout_id": "5ecceed7d13964435adb94fd",
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
        "_id": "5ecceed7d13964435adb93f2",
        "name": "A70",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A70_Câu 7",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.650Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb93f2",
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
        "_id": "5ecceed7d13964435adb9450",
        "name": "A71",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          " Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A71_Câu 8",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.650Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9450",
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
        "_id": "5ecceed7d13964435adb94c3",
        "name": "A72",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A72_Câu 9a_PO:chiều cao",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.650Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "content": "\nvar tmp = (value*1000 + 0.1*1000 - 0.1*1000)/10 ;\n\nif(!tmp&&tmp!==0){\n    return [{\n        type : 'error',\n        message: 'Dữ liệu nhập phải là chuỗi số thập phân'\n    }]\n}\n\nif(value<0){\n    return [{\n            type:'error',\n            message:'Không được nhập giá trị âm.'\n        }]\n}\n\nvar [ng,tp] =value.split('.')\n\n// if(ng&&ng.length>=3){\n//      return [{\n//          type : \"error\",\n//         message :\"Field nhập lớn hơn 100\"\n//     }]\n// }\n\n\nif(tp&&tp.length>1){\n     return [{\n         type : \"error\",\n        message :\"Field nhập quá 1 số thập phân\"\n    }]\n}\n\n\nif(!value){\n    return [{type : \"error\",\n        message :\"Field Rỗng, cần kiểm tra lại!\"\n    }]\n}",
          "created_date": "2020-05-06T08:51:25.797Z",
          "last_modified": "2020-05-06T09:12:38.041Z",
          "id": "5eb27a8d3d64d3001bf43ed4"
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb94c3",
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
        "_id": "5ecceed7d13964435adb95b5",
        "name": "A73",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A73_Câu 9a_PO:cân nặng",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.650Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "content": "if(value.split('.').length==2&&(value.split('.')[1].trim().length===0||value.split('.')[0].trim().length===0)){\n    return [{\n            type:'error',\n            message:'Dữ liệu nhập phải là số thập phân'\n    }]\n}\n\n// var num = parseFloat(value).toFixed(3);\nvar tmp = (value*1000 + 0.1*1000 - 0.1*1000)/10 ;\n\n\nvar [ng,tp] =value.split('.')\n// if(value.split('.').length>2){\n//     return [{\n//             type:'warning',\n//             message:'Netto nhập quá 2 số thập phân'\n//     }]\n// }\n\nif(tp&&tp.length>1){\n     return [{type : \"warning\",\n        message :\"nhập quá 1 số thập phân\"\n    }]\n}\n\nif(!tmp&&tmp!==0){\n    return [{\n        type : 'error',\n        message: 'Dữ liệu nhập phải là chuỗi số thập phân'\n    }]\n}\nif(value<0){\n    return [\n        {\n            type:'error',\n            message:'Không được nhập giá trị âm.'\n        }\n        ]\n}\nif(!value){\n    return [{type : \"error\",\n        message :\"Field Rỗng, cần kiểm tra lại!\"\n    }]\n}",
          "created_date": "2019-12-28T09:47:49.178Z",
          "last_modified": "2019-12-28T09:47:49.178Z",
          "id": "5e0724c548fa7900143a5cd0"
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb95b5",
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
        "_id": "5ecceed7d13964435adb953b",
        "name": "A74",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A74_Câu 9b_PO",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.650Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb953b",
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
        "_id": "5ecceed7d13964435adb922a",
        "name": "A75",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A75_Câu 10_PO",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.650Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb922a",
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
        "_id": "5ecceed7d13964435adb9622",
        "name": "A76",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A76_Tình trạng sức khỏe cha/mẹ",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.651Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9622",
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
        "_id": "5ecceed7d13964435adb9296",
        "name": "A77",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A77_Tình trạng sức khỏe anh/chi/em",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.651Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9296",
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
        "_id": "5ecceed7d13964435adb9375",
        "name": "A78",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A78_Tuổi cha/mẹ",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.651Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9375",
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
        "_id": "5ecceed7d13964435adb9311",
        "name": "A79",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A79_Tuổi anh/chị/em",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.651Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9311",
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
        "_id": "5ecceed7d13964435adb93f4",
        "name": "A80",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A80_Tuổi qua đời cha/me",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.651Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb93f4",
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
        "_id": "5ecceed7d13964435adb9454",
        "name": "A81",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A81_Tuổi qua đời anh/chị/em",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.651Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9454",
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
        "_id": "5ecceed7d13964435adb94c5",
        "name": "A82",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A82_Câu 11_PO",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.651Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb94c5",
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
        "_id": "5ecceed7d13964435adb95b4",
        "name": "A83",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A83_Câu 12_PO",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.651Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb95b4",
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
        "_id": "5ecceed7d13964435adb9543",
        "name": "A84",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A84_Câu 13_PO",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.651Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9543",
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
        "_id": "5ecceed7d13964435adb922d",
        "name": "A85",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A85_Câu 14_PO",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.651Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb922d",
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
        "_id": "5ecceed7d13964435adb9625",
        "name": "A86",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A86_Câu 15_PO",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.651Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9625",
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
        "_id": "5ecceed7d13964435adb9297",
        "name": "A87",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A87_Câu 16_PO",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.652Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9297",
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
        "_id": "5ecceed7d13964435adb9377",
        "name": "A88",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A88_Câu 17_PO",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.652Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9377",
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
        "_id": "5ecceed7d13964435adb9312",
        "name": "A89",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A89_Câu 18_PO",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.652Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9312",
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
        "_id": "5ecceed7d13964435adb93f3",
        "name": "A90",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A90_Câu 19_PO",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.652Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb93f3",
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
        "_id": "5ecceed7d13964435adb9453",
        "name": "A91",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A91_Câu 20_PO",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.652Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9453",
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
        "_id": "5ecceed7d13964435adb94c7",
        "name": "A92",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A92_Câu 21_PO",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.652Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb94c7",
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
        "_id": "5ecceed7d13964435adb95b7",
        "name": "A93",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A93_Câu 22_PO",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.652Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb95b7",
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
        "_id": "5ecceed7d13964435adb9545",
        "name": "A94",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A94_Câu 23_PO",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.653Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9545",
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
        "_id": "5ecceed7d13964435adb922f",
        "name": "A95",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A95_Câu 24_PO",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.654Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb922f",
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
        "_id": "5ecceed7d13964435adb9628",
        "name": "A96",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A96_Câu 25_PO",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.654Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9628",
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
        "_id": "5ecceed7d13964435adb929a",
        "name": "A97",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A97_Câu 26_PO",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.654Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb929a",
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
        "_id": "5ecceed7d13964435adb937a",
        "name": "A98",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A98_Câu 27_PO",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.654Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb937a",
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
        "_id": "5ecceed7d13964435adb9314",
        "name": "A99",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A99_Câu 28_PO",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.654Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9314",
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
        "_id": "5ecceed7d13964435adb9344",
        "name": "A100",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A100_Câu 29_PO",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.626Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9344",
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
        "_id": "5ecceed7d13964435adb92e0",
        "name": "A101",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A101_Câu 30_PO",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.626Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb92e0",
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
        "_id": "5ecceed7d13964435adb93bd",
        "name": "A102",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A102_Câu 31_PO",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.627Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb93bd",
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
        "_id": "5ecceed7d13964435adb961e",
        "name": "A608",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A608_Ngày dự sinh_PO",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.649Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "content": "    var regex1 = /^\\d{6}$/;\n    \nfunction removeSpace(input){\n    var regex = /^(?:(?:31(|\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(|\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(|\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(|\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$/\n\tif(regex.test(input)){\n\t\tinput = input.replace(/([0-9]{2})([0-9]{2})([0-9]{4})/,'$1/$2/$3') + '';\n\t}\n\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\n\n\tinput = input.trim();\n\n\treturn input;\n}\nfunction chkDate(date){\n\tvar dd = date.substring(0,2);\n\tvar mm = date.substring(2,4);\n\tvar yy = date.substring(4,6);\n\tvar tmpDate = new Date();\n\tvar y = tmpDate.getFullYear()+\"\";\n\ty = y.substring(2,4)*1 + 1;\n\n\t//Gan gia tri nam la 19YY neu YY > nam hien tai + 1\n\t//Gan gia tri nam la 20YY neu YY <= nam hien tai + 1\n\tif(yy*1>y){ yy = 19+yy;\n\t}else {yy = 20+yy;}\n\n\treturn dd+mm+yy;\t\n}\nvalue = value.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'');\nif(value.length === 6){\n    return chkDate(value)}\nreturn removeSpace(value);",
          "created_date": "2020-04-27T07:08:22.358Z",
          "last_modified": "2020-04-27T07:09:29.160Z",
          "id": "5ea684e696527c001be0c516"
        },
        "tooltip": "",
        "validation": {
          "name": "",
          "content": "if(value.length <8){\r\n     return [{type:\"error\",message:\"Không đúng định dạng ddmmyyyy\"}]\r\n}\r\n\r\nfunction chkDate(date){\r\n\tvar dd = date.substring(0,2);\r\n\tvar mm = date.substring(2,4);\r\n\tvar yy = date.substring(4,6);\r\n\tvar tmpDate = new Date();\r\n\tvar y = tmpDate.getFullYear()+\"\";\r\n\ty = y.substring(2,4)*1 + 1;\r\n\r\n\t//Gan gia tri nam la 19YY neu YY > nam hien tai + 1\r\n\t//Gan gia tri nam la 20YY neu YY <= nam hien tai + 1\r\n\tif(yy*1>y){ yy = 19+yy;\r\n\t}else {yy = 20+yy;}\r\n\r\n\treturn dd+mm+yy;\t\r\n}\r\n\r\nfunction formatdate(ngay_hieu_luc_in78){\r\nvar fvalue = ngay_hieu_luc_in78;\r\n\tvar regex = /^(?:(?:31(|\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(|\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(|\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(|\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$/\r\n\tvar regex1 = /^\\d{6}$/;\r\n\tvar regex2 = /^(\\s*|[0-9\\.\\/\\-]{0,10})$/ ;\r\n\tvar date;\r\nif(fvalue === \"\") return ;\r\n\tif(regex1.test(fvalue))\r\n\treturn ;\r\n\tif(regex2.test(fvalue)){\r\n\t\r\n\tif(!regex.test(fvalue)){\r\n\t\treturn [{type:\"error\",message:\"Ngày Tháng Năm không phù hợp, vui lòng kiểm tra lại.\"}]\r\n\t}\r\n}else{\r\n    return [{type:\"error\",message:\"Không đúng định dạng ddmmyyyy\"}]\r\n}\r\nfvalue = fvalue.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'');\r\nif(fvalue.length === 6){\r\n\tfvalue = chkDate(fvalue);\r\n}\r\nvar dd = fvalue.substring(0, 2);\r\nvar mm = fvalue.substring(2, 4);\r\nvar yy = fvalue.substring(4, 8);\r\nvar tmpDate = new Date();\r\nvar d = tmpDate.getDate();\r\nvar m = tmpDate.getMonth();\r\nvar y = tmpDate.getFullYear();\r\nvar inputDate = new Date(yy, mm - 1, dd);\r\nvar curDate = new Date(y, m, d);\r\n\r\n\r\n\r\n//So sanh ngay nhap voi ngay hien tai\r\nif (inputDate > curDate) {\r\n return [{type:\"warning\", message:\"Năm nhập lớn hơn năm hiện tại\"}]\r\n}\r\n\r\n\r\n}\r\n\r\nreturn formatdate(value);",
          "arguments": {}
        },
        "value_broadcast": "",
        "text_type": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb961e",
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
        "_id": "5ecceed7d13964435adb9426",
        "name": "A103",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A103_Câu 32_PO",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.627Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9426",
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
        "_id": "5ecceed7d13964435adb93c0",
        "name": "A111",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A111_Tick : Câu 5 phần Cam kết ",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.628Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb93c0",
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
        "_id": "5ecceed7d13964435adb926f",
        "name": "A145",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A145_Câu 1_LI",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.631Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb926f",
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
        "_id": "5ecceed7d13964435adb934e",
        "name": "A146",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A146_Câu 1_LI: Thành Phố",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.631Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb934e",
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
        "_id": "5ecceed7d13964435adb92ee",
        "name": "A147",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A147_Câu 1_LI: Thời gian và mục đích",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.631Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb92ee",
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
        "_id": "5ecceed7d13964435adb93cd",
        "name": "A148",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A148_Câu 1_LI: Ngày đi gần nhất",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.631Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb93cd",
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
        "_id": "5ecceed7d13964435adb9433",
        "name": "A149",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A149_Câu 1_LI: Ngày dự định đi",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.631Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9433",
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
        "_id": "5ecceed7d13964435adb958f",
        "name": "A150",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A150_Câu 2_LI",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.632Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb958f",
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
        "_id": "5ecceed7d13964435adb9515",
        "name": "A151",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A151_Câu 3_LI",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.632Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9515",
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
        "_id": "5ecceed7d13964435adb920a",
        "name": "A152",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A152_Câu 4_LI",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.634Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb920a",
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
        "_id": "5ecceed7d13964435adb9601",
        "name": "A153",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A153_Câu 5_LI",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.635Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9601",
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
        "_id": "5ecceed7d13964435adb9274",
        "name": "A154",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A154_Câu 5: Số lượng/ngày",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.635Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9274",
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
        "_id": "5ecceed7d13964435adb9350",
        "name": "A155",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A155_Câu 6_LI",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.635Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9350",
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
    "id": "5ecceed7d13964435adb96dd"
  },
  {
    "layout_labels": null,
    "name": "Health_Check_C6_2",
    "layout_name": "Sunlife",
    "index": 12,
    "layout_id": "5ecceed7d13964435adb94fd",
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
        "_id": "5ecceed7d13964435adb9307",
        "name": "A520",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Bia nhẹ",
          "Rượu nhẹ",
          "Rượu mạnh"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "",
        "field_display": "A520_Câu 6: Loại",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.647Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9307",
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
        "_id": "5ecceed7d13964435adb92f1",
        "name": "A156",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A156_Câu 6: Số Lượng Uống",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.635Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb92f1",
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
        "_id": "5ecceed7d13964435adb93d1",
        "name": "A157",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Hàng Ngày",
          "Hàng Tuần"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "",
        "field_display": "A157_Câu 6: Tần suất sử dụng",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.635Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb93d1",
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
    "id": "5ecceed7d13964435adb96c0"
  },
  {
    "layout_labels": null,
    "name": "Health_Check3",
    "layout_name": "Sunlife",
    "index": 13,
    "layout_id": "5ecceed7d13964435adb94fd",
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
        "_id": "5ecceed7d13964435adb9434",
        "name": "A158",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A158_Câu 7_LI",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.635Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9434",
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
        "_id": "5ecceed7d13964435adb94a0",
        "name": "A159",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A159_Câu 8_LI",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.635Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb94a0",
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
        "_id": "5ecceed7d13964435adb9517",
        "name": "A160",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A160_Câu 9a_LI:chiều cao",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.635Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "content": "\nvar tmp = (value*1000 + 0.1*1000 - 0.1*1000)/10 ;\n\nif(!tmp&&tmp!==0){\n    return [{\n        type : 'error',\n        message: 'Dữ liệu nhập phải là chuỗi số thập phân'\n    }]\n}\n\nif(value<0){\n    return [{\n            type:'error',\n            message:'Không được nhập giá trị âm.'\n        }]\n}\n\nvar [ng,tp] =value.split('.')\n\n// if(ng&&ng.length>=3){\n//      return [{\n//          type : \"error\",\n//         message :\"Field nhập lớn hơn 100\"\n//     }]\n// }\n\n\nif(tp&&tp.length>1){\n     return [{\n         type : \"error\",\n        message :\"Field nhập quá 1 số thập phân\"\n    }]\n}\n\n\nif(!value){\n    return [{type : \"warning\",\n        message :\"Field Rỗng, cần kiểm tra lại!\"\n    }]\n}",
          "created_date": "2020-05-06T08:51:25.797Z",
          "last_modified": "2020-05-06T09:12:38.041Z",
          "id": "5eb27a8d3d64d3001bf43ed4"
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb9517",
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
        "_id": "5ecceed7d13964435adb920c",
        "name": "A161",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A161_Câu 9a_LI:cân nặng",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.635Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "content": "if(value.split('.').length==2&&(value.split('.')[1].trim().length===0||value.split('.')[0].trim().length===0)){\n    return [{\n            type:'error',\n            message:'Dữ liệu nhập phải là số thập phân'\n    }]\n}\n\n// var num = parseFloat(value).toFixed(3);\nvar tmp = (value*1000 + 0.1*1000 - 0.1*1000)/10 ;\n\n\nvar [ng,tp] =value.split('.')\n// if(value.split('.').length>2){\n//     return [{\n//             type:'warning',\n//             message:'Netto nhập quá 2 số thập phân'\n//     }]\n// }\n\nif(tp&&tp.length>1){\n     return [{type : \"error\",\n        message :\"nhập quá 1 số thập phân\"\n    }]\n}\n\nif(!tmp&&tmp!==0){\n    return [{\n        type : 'error',\n        message: 'Dữ liệu nhập phải là chuỗi số thập phân'\n    }]\n}\nif(value<0){\n    return [\n        {\n            type:'error',\n            message:'Không được nhập giá trị âm.'\n        }\n        ]\n}\n",
          "created_date": "2019-12-28T09:47:49.178Z",
          "last_modified": "2019-12-28T09:47:49.178Z",
          "id": "5e0724c548fa7900143a5cd0"
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb920c",
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
        "_id": "5ecceed7d13964435adb9603",
        "name": "A162",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A162_Câu 9b_LI",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.636Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9603",
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
        "_id": "5ecceed7d13964435adb9271",
        "name": "A163",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A163_Câu 10_LI",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.636Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9271",
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
        "_id": "5ecceed7d13964435adb9352",
        "name": "A164",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A164_Tình trạng sức khỏe cha/mẹ",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.636Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9352",
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
        "_id": "5ecceed7d13964435adb9304",
        "name": "A165",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A165_Tình trạng sức khỏe anh/chi/em",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.636Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9304",
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
        "_id": "5ecceed7d13964435adb93d3",
        "name": "A166",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A166_Tuổi cha/mẹ",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.636Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb93d3",
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
        "_id": "5ecceed7d13964435adb9436",
        "name": "A167",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A167_Tuổi anh/chị/em",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.636Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9436",
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
        "_id": "5ecceed7d13964435adb94a2",
        "name": "A168",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A168_Tuổi qua đời - cha/mẹ",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.636Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb94a2",
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
        "_id": "5ecceed7d13964435adb9593",
        "name": "A169",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A169_Tuổi qua đời anh/chị/em",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.636Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9593",
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
        "_id": "5ecceed7d13964435adb920e",
        "name": "A170",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A170_Câu 11_LI",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.636Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb920e",
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
        "_id": "5ecceed7d13964435adb9605",
        "name": "A171",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A171_Câu 12_LI",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.636Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9605",
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
        "_id": "5ecceed7d13964435adb92be",
        "name": "A172",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A172_Câu 13_LI",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.637Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb92be",
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
        "_id": "5ecceed7d13964435adb9355",
        "name": "A173",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A173_Câu 14_LI",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.637Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9355",
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
        "_id": "5ecceed7d13964435adb92f3",
        "name": "A174",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A174_Câu 15_LI",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.637Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb92f3",
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
        "_id": "5ecceed7d13964435adb93d7",
        "name": "A175",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A175_Câu 16_LI",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.637Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb93d7",
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
        "_id": "5ecceed7d13964435adb9438",
        "name": "A176",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A176_Câu 17_LI",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.637Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9438",
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
        "_id": "5ecceed7d13964435adb94a4",
        "name": "A177",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A177_Câu 18_LI",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.637Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb94a4",
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
        "_id": "5ecceed7d13964435adb959b",
        "name": "A178",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A178_Câu 19_LI",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.637Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb959b",
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
        "_id": "5ecceed7d13964435adb951f",
        "name": "A179",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A179_Câu 20_LI",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.637Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb951f",
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
        "_id": "5ecceed7d13964435adb960a",
        "name": "A180",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A180_Câu 21_LI",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.637Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb960a",
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
        "_id": "5ecceed7d13964435adb9276",
        "name": "A181",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A181_Câu 22_LI",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.638Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9276",
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
        "_id": "5ecceed7d13964435adb9358",
        "name": "A182",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A182_Câu 23_LI",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.638Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9358",
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
        "_id": "5ecceed7d13964435adb92f5",
        "name": "A183",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A183_Câu 24_LI",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.638Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb92f5",
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
        "_id": "5ecceed7d13964435adb93d9",
        "name": "A184",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A184_Câu 25_LI",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.638Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb93d9",
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
        "_id": "5ecceed7d13964435adb943a",
        "name": "A185",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A185_Câu 26_LI",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.638Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb943a",
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
        "_id": "5ecceed7d13964435adb94a6",
        "name": "A186",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A186_Câu 27_LI",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.638Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb94a6",
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
        "_id": "5ecceed7d13964435adb959a",
        "name": "A187",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A187_Câu 28_LI",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.638Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb959a",
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
        "_id": "5ecceed7d13964435adb9523",
        "name": "A188",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A188_Câu 29_LI",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.638Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9523",
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
        "_id": "5ecceed7d13964435adb9213",
        "name": "A189",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A189_Câu 30_LI",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.639Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9213",
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
        "_id": "5ecceed7d13964435adb9279",
        "name": "A190",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A190_Câu 31_LI",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.639Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9279",
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
        "_id": "5ecceed7d13964435adb92c3",
        "name": "A609",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A609_31. Ngày dự sinh_LI",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.649Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "content": "    var regex1 = /^\\d{6}$/;\n    \nfunction removeSpace(input){\n    var regex = /^(?:(?:31(|\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(|\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(|\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(|\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$/\n\tif(regex.test(input)){\n\t\tinput = input.replace(/([0-9]{2})([0-9]{2})([0-9]{4})/,'$1/$2/$3') + '';\n\t}\n\n\t\tinput = input.replace(/[\\s\\t]+/g,' ');\n\n\tinput = input.trim();\n\n\treturn input;\n}\nfunction chkDate(date){\n\tvar dd = date.substring(0,2);\n\tvar mm = date.substring(2,4);\n\tvar yy = date.substring(4,6);\n\tvar tmpDate = new Date();\n\tvar y = tmpDate.getFullYear()+\"\";\n\ty = y.substring(2,4)*1 + 1;\n\n\t//Gan gia tri nam la 19YY neu YY > nam hien tai + 1\n\t//Gan gia tri nam la 20YY neu YY <= nam hien tai + 1\n\tif(yy*1>y){ yy = 19+yy;\n\t}else {yy = 20+yy;}\n\n\treturn dd+mm+yy;\t\n}\nvalue = value.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'');\nif(value.length === 6){\n    return chkDate(value)}\nreturn removeSpace(value);",
          "created_date": "2020-04-27T07:08:22.358Z",
          "last_modified": "2020-04-27T07:09:29.160Z",
          "id": "5ea684e696527c001be0c516"
        },
        "tooltip": "",
        "validation": {
          "name": "",
          "content": "if(value.length <8){\r\n     return [{type:\"error\",message:\"Không đúng định dạng ddmmyyyy\"}]\r\n}\r\n\r\nfunction chkDate(date){\r\n\tvar dd = date.substring(0,2);\r\n\tvar mm = date.substring(2,4);\r\n\tvar yy = date.substring(4,6);\r\n\tvar tmpDate = new Date();\r\n\tvar y = tmpDate.getFullYear()+\"\";\r\n\ty = y.substring(2,4)*1 + 1;\r\n\r\n\t//Gan gia tri nam la 19YY neu YY > nam hien tai + 1\r\n\t//Gan gia tri nam la 20YY neu YY <= nam hien tai + 1\r\n\tif(yy*1>y){ yy = 19+yy;\r\n\t}else {yy = 20+yy;}\r\n\r\n\treturn dd+mm+yy;\t\r\n}\r\n\r\nfunction formatdate(ngay_hieu_luc_in78){\r\nvar fvalue = ngay_hieu_luc_in78;\r\n\tvar regex = /^(?:(?:31(|\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(|\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(|\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(|\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$/\r\n\tvar regex1 = /^\\d{6}$/;\r\n\tvar regex2 = /^(\\s*|[0-9\\.\\/\\-]{0,10})$/ ;\r\n\tvar date;\r\nif(fvalue === \"\") return ;\r\n\tif(regex1.test(fvalue))\r\n\treturn ;\r\n\tif(regex2.test(fvalue)){\r\n\t\r\n\tif(!regex.test(fvalue)){\r\n\t\treturn [{type:\"error\",message:\"Ngày Tháng Năm không phù hợp, vui lòng kiểm tra lại.\"}]\r\n\t}\r\n}else{\r\n    return [{type:\"error\",message:\"Không đúng định dạng ddmmyyyy\"}]\r\n}\r\nfvalue = fvalue.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'');\r\nif(fvalue.length === 6){\r\n\tfvalue = chkDate(fvalue);\r\n}\r\nvar dd = fvalue.substring(0, 2);\r\nvar mm = fvalue.substring(2, 4);\r\nvar yy = fvalue.substring(4, 8);\r\nvar tmpDate = new Date();\r\nvar d = tmpDate.getDate();\r\nvar m = tmpDate.getMonth();\r\nvar y = tmpDate.getFullYear();\r\nvar inputDate = new Date(yy, mm - 1, dd);\r\nvar curDate = new Date(y, m, d);\r\n\r\n\r\n\r\n//So sanh ngay nhap voi ngay hien tai\r\nif (inputDate > curDate) {\r\n return [{type:\"warning\", message:\"Năm nhập lớn hơn năm hiện tại\"}]\r\n}\r\n\r\n\r\n}\r\n\r\nreturn formatdate(value);",
          "arguments": {}
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb92c3",
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
        "_id": "5ecceed7d13964435adb935b",
        "name": "A191",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A191_Câu 32_LI",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.639Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb935b",
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
        "_id": "5ecceed7d13964435adb92f7",
        "name": "A192",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A192_Câu 33_LI",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.639Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb92f7",
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
        "_id": "5ecceed7d13964435adb93dc",
        "name": "A193",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A193_33.Học xong lớp mấy",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.639Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
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
          "field_id": "5ecceed7d13964435adb93dc",
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
        "_id": "5ecceed7d13964435adb943c",
        "name": "A194",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A194_33.Số anh chị em ruột",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.640Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb943c",
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
        "_id": "5ecceed7d13964435adb94aa",
        "name": "A195",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "A195_33.Cân nặng lúc sinh",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.640Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "content": "if(value.split('.').length==2&&(value.split('.')[1].trim().length===0||value.split('.')[0].trim().length===0)){\n    return [{\n            type:'error',\n            message:'Dữ liệu nhập phải là số thập phân'\n    }]\n}\n\n// var num = parseFloat(value).toFixed(3);\nvar tmp = (value*1000 + 0.1*1000 - 0.1*1000)/10 ;\n\nvar [ng,tp] =value.split('.')\n// if(value.split('.').length>2){\n//     return [{\n//             type:'warning',\n//             message:'Netto nhập quá 2 số thập phân'\n//     }]\n// }\n\nif(tp&&tp.length>1){\n     return [{type : \"error\",\n        message :\"nhập quá 1 số thập phân\"\n    }]\n}\n\nif(!tmp&&tmp!==0){\n    return [{\n        type : 'error',\n        message: 'Dữ liệu nhập phải là chuỗi số thập phân'\n    }]\n}\nif(value<0){\n    return [\n        {\n            type:'error',\n            message:'Không được nhập giá trị âm.'\n        }\n        ]\n}\n",
          "created_date": "2019-12-28T09:47:49.178Z",
          "last_modified": "2019-12-28T09:47:49.178Z",
          "id": "5e0724c548fa7900143a5cd0"
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb94aa",
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
        "_id": "5ecceed7d13964435adb95a0",
        "name": "A196",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "A196_33.Có sinh sớm hơn trước 4 tuần",
        "is_list": false,
        "last_modified": "2020-10-14T02:54:57.752Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb95a0",
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
      },
      {
        "_id": "5ecceed7d13964435adb9640",
        "name": "RM5",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "RM5_Ghi chú",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.665Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "content": "if(value.length>23){\n    return [{type: \"error\",\n        message: `Không được nhập quá 23 ký tự `\n    }]\n}",
          "arguments": {}
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb9640",
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
    "id": "5ecceed7d13964435adb96ff"
  },
  {
    "layout_labels": null,
    "name": "Sub_Form1",
    "layout_name": "Sunlife",
    "index": 14,
    "layout_id": "5ecceed7d13964435adb94fd",
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
        "_id": "5ecceed7d13964435adb9472",
        "name": "SP01_05",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "SP01_05_Họ và Tên",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.665Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
        "field_setting": {
          "field_id": "5ecceed7d13964435adb9472",
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
        "_id": "5ecceed7d13964435adb94e5",
        "name": "SP01_06",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "SP01_06_Ngày tháng năm sinh",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.665Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "content": "let SP01_11 = record.SP01_11.text.toUpperCase();\r\n\r\nif(!value&&(SP01_11=='F'||SP01_11=='M')){\r\n\treturn [{type:\"error\",message:\"Giới tính có giá trị F hoặc M, không được bỏ trống field\"}]\r\n}\r\n\r\nfunction chkDate(date){\r\n\tvar dd = date.substring(0,2);\r\n\tvar mm = date.substring(2,4);\r\n\tvar yy = date.substring(4,6);\r\n\tvar tmpDate = new Date();\r\n\tvar y = tmpDate.getFullYear()+\"\";\r\n\ty = y.substring(2,4)*1 + 1;\r\n\r\n\t//Gan gia tri nam la 19YY neu YY > nam hien tai + 1\r\n\t//Gan gia tri nam la 20YY neu YY <= nam hien tai + 1\r\n\tif(yy*1>y){ yy = 19+yy;\r\n\t}else {yy = 20+yy;}\r\n\r\n\treturn dd+mm+yy;\t\r\n}\r\n\r\nfunction formatdate(ngay_hieu_luc_in78){\r\nvar fvalue = ngay_hieu_luc_in78;\r\n\tvar regex = /^(?:(?:31(|\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(|\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(|\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(|\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$/\r\n//\tvar regex1 = /^\\d{6}$/;\r\n\tvar regex2 = /^(\\s*|[0-9\\.\\/\\-]{0,10})$/ ;\r\n\tvar date;\r\nif(fvalue === \"\") return ;\r\n// \tif(regex1.test(fvalue))\r\n// \treturn ;\r\n\tif(regex2.test(fvalue)){\r\n\t\r\n\tif(!regex.test(fvalue)){\r\n\t\treturn [{type:\"warning\",message:\"Ngày Tháng Năm không phù hợp, vui lòng kiểm tra lại.\"}]\r\n\t}\r\n\tif(fvalue.length < 8){\r\n\t\treturn [{type:\"error\",message:\"Field ngày không đủ 8 ký tự\"}]\r\n\t}\r\n}else{\r\n    return [{type:\"error\",message:\"Không đúng định dạng ddmmyyyy\"}]\r\n}\r\nfvalue = fvalue.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'');\r\nif(fvalue.length === 6){\r\n\tfvalue = chkDate(fvalue);\r\n}\r\nvar dd = fvalue.substring(0, 2);\r\nvar mm = fvalue.substring(2, 4);\r\nvar yy = fvalue.substring(4, 8);\r\nvar tmpDate = new Date();\r\nvar d = tmpDate.getDate();\r\nvar m = tmpDate.getMonth();\r\nvar y = tmpDate.getFullYear();\r\nvar inputDate = new Date(yy, mm - 1, dd);\r\nvar curDate = new Date(y, m, d);\r\n\r\n\r\n\r\n//So sanh ngay nhap voi ngay hien tai\r\nif (inputDate > curDate) {\r\n return [{type:\"warning\", message:\"Năm nhập lớn hơn năm hiện tại\"}]\r\n}\r\n\r\n\r\n}\r\n\r\nreturn formatdate(value);",
          "created_date": "2019-11-28T06:50:27.116Z",
          "last_modified": "2019-11-28T06:50:27.116Z",
          "id": "5ddf6e33dedee200147c15f7"
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb94e5",
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
        "_id": "5ecceed7d13964435adb9560",
        "name": "SP01_08",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "SP01_08_Nơi Sinh",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.666Z",
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
          "content": "let SP01_11 = record.SP01_11.text.toUpperCase();\n\nif(!value&&(SP01_11=='F'||SP01_11=='M')){\n\treturn [{type:\"error\",message:\"Giới tính có giá trị F hoặc M, không được bỏ trống field\"}]\n}\n\nif (value){\n    async function checkValidation(value) {\n            let dataLookup =  await fetchJSON(`https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/province/[%22${value}%22]`);\n            let _value =value.toLowerCase(); \n            if (!Array.isArray(dataLookup.json_single)||dataLookup.json_single.map(item => item.prov_nm.toLowerCase()).findIndex(item => item === _value) === -1) {\n                            return [{\n                              type: \"error\",\n                              message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\n                            }]\n                         }\n            // if(value.toLowerCase().includes('nhhien'))             \n            //              return[{ \n            //                   type: 'warning',\n            //                   message: `Lookup warning value:${value}`}];\n    }\n    return await checkValidation(value);\n}",
          "arguments": {}
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb9560",
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
        "_id": "5ecceed7d13964435adb9248",
        "name": "SP01_09",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "Việt Nam",
        "field_display": "SP01_09_Quốc Tịch 1",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.666Z",
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
        "field_setting": {
          "field_id": "5ecceed7d13964435adb9248",
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
        "_id": "5ecceed7d13964435adb9641",
        "name": "SP01_10",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "SP01_10_Quốc tịch 2 (Nếu có)",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.666Z",
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
        "field_setting": {
          "field_id": "5ecceed7d13964435adb9641",
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
        "_id": "5ecceed7d13964435adb92b5",
        "name": "SP01_11",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "SP01_11_Giới tính",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.666Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
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
          "content": "if(!value){\n    return [{type:\"error\",message:\"Không được trống\"}]\n}\n\nfunction checkEqual(value1 =\"\" , value2 = \"\",value3 = \"\"){\n    value1 = value1.toUpperCase().trim();\n    value2 = value2.toUpperCase().trim();\n    value3 = value3.toUpperCase().trim();\n    \n    if(value1 ==='F' && !value2 ||value1 ==='M' && !value2){\n        return [{type : \"error\" , message : \"Field Giới Tính có dữ liệu F/M, không được bỏ trống Ngày tháng năm sinh\"}];\n    }\n    if(value1 ==='F' && !value3 ||value1 ==='M' && !value3){\n        return [{type : \"error\" , message : \"Field Giới Tính có dữ liệu F/M, không được bỏ trống Nơi Sinh\"}];\n    }\n}\n\nreturn checkEqual(value, farm, farm1);",
          "arguments": {
            "farm": "SP01_06",
            "farm1": "SP01_08"
          }
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb92b5",
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
        "_id": "5ecceed7d13964435adb9394",
        "name": "SP01_12",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "SP01_12_Tình trạng hôn nhân",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.666Z",
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
          "content": "let SP01_11 = record.SP01_11.text.toUpperCase();\n\nif(!value&&(SP01_11=='F'||SP01_11=='M')){\n    return [{type:\"error\",message:\"Không được bỏ trống\"}]\n}",
          "arguments": {}
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb9394",
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
        "_id": "5ecceed7d13964435adb932c",
        "name": "SP01_13",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "CMND",
          "Passport",
          "CCCD",
          "Giấy Khai Sinh"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "",
        "field_display": "SP01_13_Loại Giấy Tờ",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.666Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "content": "let SP01_11 = record.SP01_11.text.toUpperCase();\n\nif(!value&&(SP01_11=='F'||SP01_11=='M')){\n    return [{type : \"error\", message: \"Vui lòng chọn loại giấy tờ\"}]\n}",
          "arguments": {}
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb932c",
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
        "_id": "5ecceed7d13964435adb940e",
        "name": "SP01_14",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "SP01_14_Số giấy tờ tùy thân",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.666Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "content": "function checkCharacter(value) {\r\n\r\nlet SP01_11 = record.SP01_11.text.toUpperCase();\r\n\r\n    if(!value&&(SP01_11=='F'||SP01_11=='M')){\r\n        return false;\r\n    }else{\r\n        return true;\r\n    }\r\n  }\r\nfunction checkEqualGiven(surname_value =\"\" , given_value = \"\"){\r\n      surname_value = surname_value.trim()\r\n      given_value = given_value.trim()\r\n      var regex1 = /^[0-9]{9}$/;\r\n      var regex2 = /^[0-9]{12}$/;\r\n      var regex3 = /^[A-Z0-9]{8,9}$/;\r\n\r\n      if(!regex1.test(surname_value) && given_value === \"CMND\"){\r\n          return [{type : \"error\" , message : \"CMND chỉ nhập 9 số\"}];\r\n      }else\r\n      if(!regex2.test(surname_value) && given_value === \"CCCD\"){\r\n          return [{type : \"error\" , message : \"CCCD chỉ nhập 12 số\"}];\r\n      }else\r\n      if(!regex3.test(surname_value) && given_value === \"Passport\"){\r\n          return [{type : \"error\" , message : \"Passport chỉ nhập chữ in và 8 hoặc 9 số\"}];\r\n      }\r\n     \r\n     return;\r\n  }\r\n  \r\nfunction checkError(value){\r\n      if(checkCharacter(value) === true){\r\n          \r\n             return checkEqualGiven(value, given);\r\n              \r\n      }else{\r\n          return [{type : \"error\" , message : \"Không có số giấy tờ tùy thân\"}];\r\n      }\r\n  }\r\n  \r\nreturn checkError(value);",
          "created_date": "2019-11-28T06:46:23.478Z",
          "last_modified": "2019-11-29T08:25:58.570Z",
          "id": "5ddf6d3fdedee200147c15f6"
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb940e",
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
        "_id": "5ecceed7d13964435adb9474",
        "name": "SP01_15",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "SP01_15_Ngày cấp",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.666Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
            "farm": "SP01_06"
          },
          "content": "function checkEqual(value1 =\"\" , value2 = \"\"){\n    value1 = value1.trim().toUpperCase()\n    value2 = value2.trim().toUpperCase()\n    \n    if(value1 === value2){\n        return true;\n    }\n}\n\n\n\nfunction chkDate(date){\n\tvar dd = date.substring(0,2);\n\tvar mm = date.substring(2,4);\n\tvar yy = date.substring(4,6);\n\tvar tmpDate = new Date();\n\tvar y = tmpDate.getFullYear()+\"\";\n\ty = y.substring(2,4)*1 + 1;\n\n\t//Gan gia tri nam la 19YY neu YY > nam hien tai + 1\n\t//Gan gia tri nam la 20YY neu YY <= nam hien tai + 1\n\tif(yy*1>y){ yy = 19+yy;\n\t}else {yy = 20+yy;}\n\n\treturn dd+mm+yy;\t\n}\n\nfunction formatdate(ngay_hieu_luc_in78){\nvar fvalue = ngay_hieu_luc_in78;\n\tvar regex = /^(?:(?:31(|\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(|\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(|\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(|\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$/\n//\tvar regex1 = /^\\d{6}$/;\n\tvar regex2 = /^(\\s*|[0-9\\.\\/\\-]{0,10})$/ ;\n\tvar date;\nif(fvalue === \"\") return ;\n// \tif(regex1.test(fvalue))\n// \treturn ;\n\tif(regex2.test(fvalue)){\n\t\n\tif(!regex.test(fvalue)){\n\t\treturn [{type:\"warning\",message:\"Ngày Tháng Năm không phù hợp, vui lòng kiểm tra lại.\"}]\n\t}\n\tif(fvalue.length < 8){\n\t\treturn [{type:\"error\",message:\"Field ngày không đủ 8 ký tự\"}]\n\t}\n}else{\n    return [{type:\"error\",message:\"Không đúng định dạng ddmmyyyy\"}]\n}\nfvalue = fvalue.replace(/[\\s\\t]*(\\-)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\/)[\\s\\t]*/g,'').replace(/[\\s\\t]*(\\.)[\\s\\t]*/g,'');\nif(fvalue.length === 6){\n\tfvalue = chkDate(fvalue);\n}\nvar dd = fvalue.substring(0, 2);\nvar mm = fvalue.substring(2, 4);\nvar yy = fvalue.substring(4, 8);\nvar tmpDate = new Date();\nvar d = tmpDate.getDate();\nvar m = tmpDate.getMonth();\nvar y = tmpDate.getFullYear();\nvar inputDate = new Date(yy, mm - 1, dd);\nvar curDate = new Date(y, m, d);\n\n\n\n//So sanh ngay nhap voi ngay hien tai\nif (inputDate > curDate) {\n return [{type:\"warning\", message:\"Năm nhập lớn hơn năm hiện tại\"}]\n}\n\n}\n\nfunction checkError(value) {\n    if (checkEqual(value, farm) === true) {\n        return [{type : \"error\" , message : \"SP01_06_Ngày tháng năm sinh giống SP01_15_Ngày cấp \"}];\n    } else {\n        return formatdate(value);\n    }\n}\n\nreturn checkError(value);",
          "created_date": "2019-11-28T06:50:27.116Z",
          "last_modified": "2019-11-28T06:50:27.116Z",
          "id": "5ddf6e33dedee200147c15f7"
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb9474",
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
        "_id": "5f853a5baa3d9503715291d6",
        "name": "SP01_91",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "SP01_91_Nơi cấp",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.674Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "production",
          "key_value": "description",
          "locale": [
            "165_191128_340_SUNLIFE"
          ],
          "lookup_after_time": 1,
          "lookup_field": "place",
          "name": "",
          "param_set": "return [data.SP01_91]",
          "result_view_config": [
            {
              "title": "Place",
              "key_value": "description"
            },
            {
              "title": "Code",
              "key_value": "code"
            }
          ],
          "related_columns": [],
          "specific_project": "0"
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
          "content": "if (value){\n    async function checkValidation(value) {\n            let dataLookup =  await fetchJSON(`https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/place/[%22${value}%22]`);\n            let _value =value.toLowerCase(); \n            if (!Array.isArray(dataLookup.json_single)||dataLookup.json_single.map(item => item.description.toLowerCase()).findIndex(item => item === _value) === -1) {\n                            return [{\n                              type: \"error\",\n                              message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\n                            }]\n                         }\n            // if(value.toLowerCase().includes('nhhien'))             \n            //              return[{ \n            //                   type: 'warning',\n            //                   message: `Lookup warning value:${value}`}];\n    }\n    return await checkValidation(value);\n    }",
          "arguments": {}
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5f853a5baa3d9503715291d6",
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
        "_id": "5ecceed7d13964435adb94e7",
        "name": "SP01_16",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "SP01_16_Điện thoại nhà riêng",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.666Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb94e7",
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
        "_id": "5ecceed7d13964435adb95d4",
        "name": "SP01_17",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "SP01_17_Điện thoại di động",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.666Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb95d4",
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
        "_id": "5ecceed7d13964435adb9563",
        "name": "SP01_18",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "SP01_18_Email",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.667Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
        "field_setting": {
          "field_id": "5ecceed7d13964435adb9563",
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
        "_id": "5ecceed7d13964435adb924a",
        "name": "SP01_19",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "SP01_19_Nghề nghiệp",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.667Z",
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
          "content": "\r\nasync function checkValidation(value) {\r\n            let params = `[\"${encodeURIComponent(value)}\"]`\r\n            let dataLookup =  await fetchJSON(`https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/occupation/${params}`);\r\n            let _value =value.toLowerCase(); \r\n            if (!Array.isArray(dataLookup.json_single)||dataLookup.json_single.map(item => item.value.toLowerCase()).findIndex(item => item === _value) === -1) {\r\n                            return [{\r\n                              type: \"error\",\r\n                              message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                            }]\r\n                         }\r\n            // if(value.toLowerCase().includes('nhhien'))             \r\n            //              return[{ \r\n            //                   type: 'warning',\r\n            //                   message: `Lookup warning value:${value}`}];\r\n    }\r\n\r\n    \r\n    function checkEqual(value1 =\"\" , value2 = \"\"){\r\n    value1 = value1.trim()\r\n    value2 = value2.toUpperCase().trim()\r\n    \r\n    if(!value1  && value2 ==='F' ||!value1  && value2 ==='M'){\r\n        return [{type : \"error\" , message : \"Field Giới Tính có dữ liệu, không được bỏ trống Nghề nghiệp\"}];\r\n    }\r\n}\r\n    \r\n\r\nif(!value){\r\n    return checkEqual(value, farm);\r\n\r\n}else{\r\n    return await checkValidation(value);\r\n    \r\n}",
          "arguments": {
            "farm": "SP01_11"
          }
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb924a",
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
        "_id": "5ecceed7d13964435adb92b8",
        "name": "SP01_21",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "SP01_21_Tên cơ quan",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.667Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
        "field_setting": {
          "field_id": "5ecceed7d13964435adb92b8",
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
        "_id": "5ecceed7d13964435adb9397",
        "name": "SP01_22",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "SP01_22_Thu nhập",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.667Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "content": "var regex1 = /[^\\s0-9+]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\nif(!value){\r\n    return [{type : \"error\",\r\n        message :\"Field Rỗng, cần kiểm tra lại!\"\r\n    }]\r\n}",
          "created_date": "2019-11-29T08:49:07.590Z",
          "last_modified": "2019-11-29T08:49:07.590Z",
          "id": "5de0db83dedee200147c1611"
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb9397",
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
        "_id": "5ecceed7d13964435adb92c4",
        "name": "SP01_500",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "SP01_500_Giống địa chỉ BMBH hay không?",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.670Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb92c4",
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
        "_id": "5ecceed7d13964435adb95d1",
        "name": "SP01_27",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "SP01_27_Tỉnh/Thành phố",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.667Z",
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
          "content": "\r\n    async function checkValidation(value) {\r\n            let dataLookup =  await fetchJSON(`https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/province/${encodeURIComponent(`[\"${value}\"]`)}`);\r\n            let _value =value.toLowerCase(); \r\n            if (!Array.isArray(dataLookup.json_single)||dataLookup.json_single.map(item => item.prov_nm.toLowerCase()).findIndex(item => item === _value) === -1) {\r\n                            return [{\r\n                              type: \"error\",\r\n                              message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                            }]\r\n                         }\r\n            // if(value.toLowerCase().includes('nhhien'))             \r\n            //              return[{ \r\n            //                   type: 'warning',\r\n            //                   message: `Lookup warning value:${value}`}];\r\n    }\r\n    \r\n    \r\n    function checkEqual(value1 =\"\" , value2 = \"\"){\r\n    value1 = value1.trim()\r\n    value2 = value2.toUpperCase().trim()\r\n    \r\n    if(!value1  && value2 ==='F' ||!value1  && value2 ==='M'){\r\n        return [{type : \"error\" , message : \"Field Giới Tính có dữ liệu, không được bỏ trống Tỉnh/Thành phố\"}];\r\n    }\r\n}\r\n\r\nif(!value){\r\n    return checkEqual(value, farm);\r\n}else {\r\n    \r\n    return await checkValidation(value);\r\n    \r\n}",
          "arguments": {
            "farm": "SP01_11"
          }
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb95d1",
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
        "_id": "5ecceed7d13964435adb94ea",
        "name": "SP01_26",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "SP01_26_Quận/Huyện",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.667Z",
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
          "content": "//console.log(arguments,'asdgasdgasdgasdg')    \r\nasync function checkValidation(value) {\r\n  let params = encodeURIComponent(`[\"${qh}\",\"${value}\"]`)\r\n  let uri = `https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/district/${params}`\r\n  let dataLookup = await fetchJSON(uri);\r\n//   console.log(dataLookup,'dataLookup');\r\n  if (!Array.isArray(dataLookup.json_single) || dataLookup.json_single.map(item => item.dist_nm).findIndex(item => item === value.trim()) === -1) {\r\n                      return [{\r\n                         type: \"error\",\r\n                         message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                      }]\r\n                    }\r\n}\r\n\r\nfunction checkEqual(value1 =\"\" , value2 = \"\"){\r\n    value1 = value1.trim()\r\n    value2 = value2.toUpperCase().trim()\r\n    \r\n    if(!value1  && value2 ==='F' ||!value1  && value2 ==='M'){\r\n        return [{type : \"error\" , message : \"Field Giới Tính có dữ liệu F/M, không được bỏ trống Quận/Huyện\"}];\r\n    }\r\n}\r\n\r\n\r\n\r\nif (value){\r\n    return  await checkValidation(value);\r\n}else{\r\n    return checkEqual(value, farm);\r\n}",
          "arguments": {
            "qh": "SP01_27",
            "farm": "SP01_11"
          }
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb94ea",
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
        "_id": "5ecceed7d13964435adb9477",
        "name": "SP01_25",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "SP01_25_Phường/Xã thường trú",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.667Z",
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
          "content": "//console.log(arguments,'asdgasdgasdgasdg')    \r\nasync function checkValidation(value) {\r\n  let params = encodeURIComponent(`[\"${tp}\",\"${qh}\",\"${value}\"]`)\r\n  let uri = `https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/ward/${params}`\r\n  let dataLookup = await fetchJSON(uri);\r\n//   console.log(dataLookup,'dataLookup');\r\n  if (!Array.isArray(dataLookup.json_single) || dataLookup.json_single.map(item => item.ward_nm).findIndex(item => item === value.trim()) === -1) {\r\n                      return [{\r\n                         type: \"error\",\r\n                         message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                      }]\r\n                    }\r\n}\r\n\r\nfunction checkEqual(value1 =\"\" , value2 = \"\"){\r\n    value1 = value1.trim()\r\n    value2 = value2.toUpperCase().trim()\r\n    \r\n    if(!value1  && value2 ==='F' ||!value1  && value2 ==='M'){\r\n        return [{type : \"error\" , message : \"Field Giới Tính có dữ liệu F/M, không được bỏ trống Phường/Xã\"}];\r\n    }\r\n}\r\n\r\n\r\nif (value){\r\nreturn  await checkValidation(value);\r\n}else{\r\n    \r\n    return checkEqual(value, farm);\r\n}",
          "arguments": {
            "tp": "SP01_27",
            "qh": "SP01_26",
            "farm": "SP01_11"
          }
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb9477",
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
        "_id": "5ecceed7d13964435adb9410",
        "name": "SP01_24",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "SP01_24_Địa chỉ thường trú",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.667Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "content": "function removeSpace(input) {\n\n    input = input.replace(/[\\s\\t]+/g, ' ');\n\n    input = input.trim();\n\n    return input;\n}\n\nfunction transformGivenSurname(field_value) {\n    field_value = field_value.trim();\n    var fullString = '';\n    var arr_char = ['ß'];\n    if (field_value.includes(' ')) {\n        var arr = field_value.split(' ');\n        for (var i = 0; i < arr.length; i++) {\n            var strChild = arr[i];\n            if (strChild === strChild.toLowerCase()) {\n                if (arr_char.includes(strChild.substring(0, 1))) {\n                    strChild = strChild.substring(0, 1) + strChild.substring(1, strChild.length).toLowerCase();\n                    fullString += strChild + ' ';\n                } else {\n                    strChild = strChild.substring(0, 1).toUpperCase() + strChild.substring(1, strChild.length).toLowerCase();\n                    fullString += strChild + ' ';\n                }\n\n            } else if (strChild === strChild.toUpperCase()) {\n                fullString += strChild + ' ';\n            } else {\n                strChild = strChild.substring(0, 1).toUpperCase() + strChild.substring(1, strChild.length).toLowerCase();\n                fullString += strChild + ' ';\n            }\n        }\n    } else {\n        if (field_value === field_value.toLowerCase()) {\n            if (arr_char.includes(field_value.substring(0, 1))) {\n                field_value = field_value.substring(0, 1) + field_value.substring(1, field_value.length).toLowerCase();\n                fullString = field_value;\n            } else {\n                field_value = field_value.substring(0, 1).toUpperCase() + field_value.substring(1, field_value.length).toLowerCase();\n                fullString = field_value;\n            }\n\n        } else if (field_value === field_value.toUpperCase()) {\n            fullString = field_value;\n        } else {\n            field_value = field_value.substring(0, 1).toUpperCase() + field_value.substring(1, field_value.length).toLowerCase();\n            fullString = field_value;\n        }\n    }\n    return fullString.trim();\n}\nreturn transformGivenSurname(removeSpace(value + ','));",
          "created_date": "2019-11-28T07:25:37.362Z",
          "last_modified": "2019-11-28T07:25:37.362Z",
          "id": "5ddf7671dedee200147c15f9"
        },
        "tooltip": "",
        "validation": {
          "name": "",
          "content": "if(value.length > 35){\n    return [{type: \"error\",\n        message :\"Không được nhập quá 35 ký tự.\"\n    }]\n}\n",
          "arguments": {}
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb9410",
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
        "_id": "5ecceed7d13964435adb9566",
        "name": "SP01_28",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "SP01_28_Mối quan hệ của NĐBH với BMBH",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.667Z",
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
          "content": "let SP01_11 = record.SP01_11.text.toUpperCase();\r\n\r\nif(!value&&(SP01_11=='F'||SP01_11=='M')){\r\n\treturn [{type:\"error\",message:\"Giới tính có giá trị F hoặc M, không được bỏ trống field\"}]\r\n}\r\n\r\nif (value){\r\n    async function checkValidation(value) {\r\n             let params = `[\"Owner's Relationship to Insured\",\"${encodeURIComponent(value)}\"]`\r\n      let dataLookup = await fetchJSON(`https://lookups.digi-texx.vn/lookups/production/165_191128_340_SUNLIFE/0/relationship/${params}`);\r\n            if (!Array.isArray(dataLookup.json_single)||\r\n            dataLookup.json_single.map(item => item.english).findIndex(item => item === value.trim()) === -1) {\r\n                            return [{\r\n                              type: \"error\",\r\n                              message: `Dữ liệu nhập: ${value} khác với lookup, cần kiểm tra lại!`\r\n                            }]\r\n                         }\r\n            // if(value.toLowerCase().includes('nhhien'))             \r\n            //              return[{ \r\n            //                   type: 'warning',\r\n            //                   message: `Lookup warning value:${value}`}];\r\n    }\r\n    return await checkValidation(value);\r\n    }",
          "arguments": {}
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb9566",
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
        "_id": "5ecceed7d13964435adb924d",
        "name": "SP01_29",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "SP01_29_Hợp đồng BH hiệu lực",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.668Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb924d",
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
        "_id": "5ecceed7d13964435adb9648",
        "name": "SP01_30",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "SP01_30_Công ty bảo hiểm",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.668Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9648",
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
        "_id": "5ecceed7d13964435adb92ba",
        "name": "SP01_31",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "SP01_31_Tên SP bảo hiểm",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.668Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb92ba",
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
        "_id": "5ecceed7d13964435adb9399",
        "name": "SP01_32",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "SP01_32_Tổng số tiền bảo hiểm",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.668Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
        "field_setting": {
          "field_id": "5ecceed7d13964435adb9399",
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
        "_id": "5ecceed7d13964435adb9330",
        "name": "SP01_33",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "SP01_33_Năm phát hành HĐ",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.668Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9330",
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
        "_id": "5ecceed7d13964435adb9412",
        "name": "SP01_34",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "SP01_34_Tình trạng HĐ",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.668Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9412",
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
        "_id": "5ecceed7d13964435adb9479",
        "name": "SP01_35",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "SP01_35_Câu 1",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.668Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9479",
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
        "_id": "5ecceed7d13964435adb94ed",
        "name": "SP01_36",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "SP01_36_Câu 2",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.668Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb94ed",
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
        "_id": "5ecceed7d13964435adb95d5",
        "name": "SP01_37",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "SP01_37_Câu 3",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.668Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb95d5",
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
        "_id": "5ecceed7d13964435adb9568",
        "name": "SP01_38",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "SP01_38_Câu 4",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.668Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9568",
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
        "_id": "5ecceed7d13964435adb924f",
        "name": "SP01_39",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "SP01_39_Câu 5",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.668Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb924f",
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
        "_id": "5ecceed7d13964435adb964a",
        "name": "SP01_40",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "SP01_40_Câu 5: Số lượng/ngày",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.669Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb964a",
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
        "_id": "5ecceed7d13964435adb92bf",
        "name": "SP01_41",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "SP01_41_Câu 6",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.669Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb92bf",
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
    "id": "5ecceed7d13964435adb9705"
  },
  {
    "layout_labels": null,
    "name": "Sub_Form_C6",
    "layout_name": "Sunlife",
    "index": 15,
    "layout_id": "5ecceed7d13964435adb94fd",
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
        "_id": "5ecceed7d13964435adb9332",
        "name": "SP01_43",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Bia nhẹ",
          "Rượu nhẹ",
          "Rượu mạnh"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "",
        "field_display": "SP01_43_Câu 6: Loại",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.669Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9332",
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
        "_id": "5ecceed7d13964435adb9414",
        "name": "SP01_44",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "SP01_44_Câu 6: Số Lượng Uống",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.669Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9414",
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
        "_id": "5ecceed7d13964435adb947b",
        "name": "SP01_45",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Ngày",
          "Tuần"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "",
        "field_display": "SP01_45_Câu 6: Tần suất sử dụng",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.669Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb947b",
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
    "id": "5ecceed7d13964435adb96bd"
  },
  {
    "layout_labels": null,
    "name": "Sub_Form2",
    "layout_name": "Sunlife",
    "index": 16,
    "layout_id": "5ecceed7d13964435adb94fd",
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
        "_id": "5ecceed7d13964435adb94f0",
        "name": "SP01_46",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "SP01_46_Câu 7",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.669Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb94f0",
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
        "_id": "5ecceed7d13964435adb95d7",
        "name": "SP01_47",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "SP01_47_Câu 8",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.669Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb95d7",
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
        "_id": "5ecceed7d13964435adb956c",
        "name": "SP01_48",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "SP01_48_Câu 9a:chiều cao",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.669Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "content": "let SP01_11 = layout.Sub_Form1[0].SP01_11.text.toUpperCase();\n\nif(!value&&(SP01_11=='F'||SP01_11=='M')){\n    return [{type : \"error\" , message : \"Field Giới Tính có dữ liệu F/M, không được bỏ trống chiều cao\"}];\n}\n\n\nvar tmp = (value*1000 + 0.1*1000 - 0.1*1000)/10 ;\n\nif(!tmp&&tmp!==0){\n    return [{\n        type : 'error',\n        message: 'Dữ liệu nhập phải là chuỗi số thập phân'\n    }]\n}\n\nif(value<0){\n    return [{\n            type:'error',\n            message:'Không được nhập giá trị âm.'\n        }]\n}\n\nvar [ng,tp] =value.split('.')\n\n// if(ng&&ng.length>=3){\n//      return [{\n//          type : \"error\",\n//         message :\"Field nhập lớn hơn 100\"\n//     }]\n// }\n\n\nif(tp&&tp.length>1){\n     return [{\n         type : \"error\",\n        message :\"Field nhập quá 1 số thập phân\"\n    }]\n}\n\n\n// function checkEqual(value1 =\"\" , value2 = \"\"){\n//     value1 = value1.trim()\n//     value2 = value2.toUpperCase().trim()\n    \n//     if(!value1  && value2 ==='F' ||!value1  && value2 ==='M'){\n//         return [{type : \"error\" , message : \"Field Giới Tính có dữ liệu F/M, không được bỏ trống chiều cao\"}];\n//     }\n// }\n\n// return checkEqual(value, farm);",
          "created_date": "2020-05-06T08:51:25.797Z",
          "last_modified": "2020-05-06T09:12:38.041Z",
          "id": "5eb27a8d3d64d3001bf43ed4"
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb956c",
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
        "_id": "5ecceed7d13964435adb9252",
        "name": "SP01_49",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "SP01_49_Câu 9a:cân nặng",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.669Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "content": "let SP01_11 = layout.Sub_Form1[0].SP01_11.text.toUpperCase();\n\nif(!value&&(SP01_11=='F'||SP01_11=='M')){\n    return [{type : \"error\" , message : \"Field Giới Tính có dữ liệu F/M, không được bỏ trống cân nặng\"}];\n}\n\nif(value.split('.').length==2&&(value.split('.')[1].trim().length===0||value.split('.')[0].trim().length===0)){\n    return [{\n            type:'error',\n            message:'Dữ liệu nhập phải là số thập phân'\n    }]\n}\n\n// var num = parseFloat(value).toFixed(3);\nvar tmp = (value*1000 + 0.1*1000 - 0.1*1000)/10 ;\n\n\nvar [ng,tp] =value.split('.')\n// if(value.split('.').length>2){\n//     return [{\n//             type:'warning',\n//             message:'Netto nhập quá 2 số thập phân'\n//     }]\n// }\n\nif(tp&&tp.length>1){\n     return [{type : \"error\",\n        message :\"nhập quá 1 số thập phân\"\n    }]\n}\n\nif(!tmp&&tmp!==0){\n    return [{\n        type : 'error',\n        message: 'Dữ liệu nhập phải là chuỗi số thập phân'\n    }]\n}\nif(value<0){\n    return [\n        {\n            type:'error',\n            message:'Không được nhập giá trị âm.'\n        }\n        ]\n}\n\n// function checkEqual(value1 =\"\" , value2 = \"\"){\n//     value1 = value1.trim()\n//     value2 = value2.toUpperCase().trim()\n    \n//     if(!value1  && value2 ==='F' ||!value1  && value2 ==='M'){\n//         return [{type : \"error\" , message : \"Field Giới Tính có dữ liệu F/M, không được bỏ trống cân nặng\"}];\n//     }\n// }\n\n\n// return checkEqual(value, farm);",
          "created_date": "2019-12-28T09:47:49.178Z",
          "last_modified": "2019-12-28T09:47:49.178Z",
          "id": "5e0724c548fa7900143a5cd0"
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb9252",
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
        "_id": "5ecceed7d13964435adb9653",
        "name": "SP01_50",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "SP01_50_Câu 9b",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.669Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9653",
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
        "_id": "5ecceed7d13964435adb93a0",
        "name": "SP01_51",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "SP01_51_Câu 10",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.670Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb93a0",
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
        "_id": "5ecceed7d13964435adb9336",
        "name": "SP01_52",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "SP01_52_Tình trạng sức khỏe cha/mẹ",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.670Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9336",
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
        "_id": "5ecceed7d13964435adb9416",
        "name": "SP01_53",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "SP01_53_Tình trạng sức khỏe anh/chi/em",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.670Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9416",
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
        "_id": "5ecceed7d13964435adb947e",
        "name": "SP01_54",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "SP01_54_Tuổi cha/mẹ",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.670Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb947e",
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
        "_id": "5ecceed7d13964435adb94f3",
        "name": "SP01_55",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "SP01_55_Tuổi anh/chị/em",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.670Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb94f3",
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
        "_id": "5ecceed7d13964435adb95da",
        "name": "SP01_56",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "SP01_56_Tuổi qua đời cha/me",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.670Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb95da",
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
        "_id": "5ecceed7d13964435adb956d",
        "name": "SP01_57",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "SP01_57_Tuổi qua đời anh/chị/em",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.670Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb956d",
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
        "_id": "5ecceed7d13964435adb9254",
        "name": "SP01_58",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "SP01_58_Câu 11",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.670Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9254",
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
        "_id": "5ecceed7d13964435adb964d",
        "name": "SP01_59",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "SP01_59_Câu 12",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.670Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb964d",
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
        "_id": "5ecceed7d13964435adb92cc",
        "name": "SP01_60",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "SP01_60_Câu 13",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.672Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb92cc",
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
        "_id": "5ecceed7d13964435adb93a1",
        "name": "SP01_61",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "SP01_61_Câu 14",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.672Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb93a1",
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
        "_id": "5ecceed7d13964435adb9339",
        "name": "SP01_62",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "SP01_62_Câu 15",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.672Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9339",
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
        "_id": "5ecceed7d13964435adb9419",
        "name": "SP01_63",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "SP01_63_Câu 16",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.672Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9419",
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
        "_id": "5ecceed7d13964435adb9481",
        "name": "SP01_64",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "SP01_64_Câu 17",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.672Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9481",
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
        "_id": "5ecceed7d13964435adb94f6",
        "name": "SP01_65",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "SP01_65_Câu 18",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.672Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb94f6",
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
        "_id": "5ecceed7d13964435adb95dc",
        "name": "SP01_66",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "SP01_66_Câu 19",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.672Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb95dc",
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
        "_id": "5ecceed7d13964435adb9570",
        "name": "SP01_67",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "SP01_67_Câu 20",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.672Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9570",
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
        "_id": "5ecceed7d13964435adb9256",
        "name": "SP01_68",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "SP01_68_Câu 21",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.673Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9256",
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
        "_id": "5ecceed7d13964435adb9651",
        "name": "SP01_69",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "SP01_69_Câu 22",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.673Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9651",
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
        "_id": "5ecceed7d13964435adb92c8",
        "name": "SP01_70",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "SP01_70_Câu 23",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.673Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb92c8",
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
        "_id": "5ecceed7d13964435adb93a5",
        "name": "SP01_71",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "SP01_71_Câu 24",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.673Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb93a5",
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
        "_id": "5ecceed7d13964435adb933a",
        "name": "SP01_72",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "SP01_72_Câu 25",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.673Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb933a",
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
        "_id": "5ecceed7d13964435adb941c",
        "name": "SP01_73",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "SP01_73_Câu 26",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.673Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb941c",
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
        "_id": "5ecceed7d13964435adb9488",
        "name": "SP01_74",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "SP01_74_Câu 27",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.673Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9488",
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
        "_id": "5ecceed7d13964435adb94f8",
        "name": "SP01_75",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "SP01_75_Câu 28",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.673Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb94f8",
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
        "_id": "5ecceed7d13964435adb95de",
        "name": "SP01_76",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "SP01_76_Câu 29",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.673Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb95de",
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
        "_id": "5ecceed7d13964435adb9571",
        "name": "SP01_77",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "SP01_77_Câu 30",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.673Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb9571",
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
        "_id": "5ecceed7d13964435adb9258",
        "name": "SP01_78",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "SP01_78_Câu 31",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.673Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
          "arguments": {}
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb9258",
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
        "_id": "5ecceed7d13964435adb9658",
        "name": "SP01_79",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "SP01_79_Ngày dự sinh",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.674Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
        "field_setting": {
          "field_id": "5ecceed7d13964435adb9658",
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
        "_id": "5ecceed7d13964435adb92cd",
        "name": "SP01_80",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "SP01_80_Câu 32",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.674Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb92cd",
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
        "_id": "5ecceed7d13964435adb93a7",
        "name": "SP01_81",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "SP01_81_Câu 33",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.674Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb93a7",
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
        "_id": "5ecceed7d13964435adb933c",
        "name": "SP01_82",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "SP01_82_33.Học xong lớp mấy",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.674Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
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
          "field_id": "5ecceed7d13964435adb933c",
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
        "_id": "5ecceed7d13964435adb941e",
        "name": "SP01_83",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "SP01_83_33.Số anh chị em ruột",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.674Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb941e",
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
        "_id": "5ecceed7d13964435adb9487",
        "name": "SP01_84",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "SP01_84_33.Cân nặng lúc sinh",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.674Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "content": "if(value.split('.').length==2&&(value.split('.')[1].trim().length===0||value.split('.')[0].trim().length===0)){\n    return [{\n            type:'error',\n            message:'Dữ liệu nhập phải là số thập phân'\n    }]\n}\n\n// var num = parseFloat(value).toFixed(3);\nvar tmp = (value*1000 + 0.1*1000 - 0.1*1000)/10 ;\n\nvar [ng,tp] =value.split('.')\n// if(value.split('.').length>2){\n//     return [{\n//             type:'warning',\n//             message:'Netto nhập quá 2 số thập phân'\n//     }]\n// }\n\nif(tp&&tp.length>1){\n     return [{type : \"error\",\n        message :\"nhập quá 1 số thập phân\"\n    }]\n}\n\nif(!tmp&&tmp!==0){\n    return [{\n        type : 'error',\n        message: 'Dữ liệu nhập phải là chuỗi số thập phân'\n    }]\n}\nif(value<0){\n    return [\n        {\n            type:'error',\n            message:'Không được nhập giá trị âm.'\n        }\n        ]\n}\n",
          "created_date": "2019-12-28T09:47:49.178Z",
          "last_modified": "2019-12-28T09:47:49.178Z",
          "id": "5e0724c548fa7900143a5cd0"
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb9487",
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
        "_id": "5ecceed7d13964435adb94fa",
        "name": "SP01_85",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "SP01_85_33.Có sinh sớm hơn trước 4 tuần",
        "is_list": false,
        "last_modified": "2020-10-14T02:54:37.411Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb94fa",
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
        "_id": "5ecceed7d13964435adb9574",
        "name": "SP01_87",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Y",
          "N",
          "*"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "N",
        "field_display": "SP01_87_Câu 34",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.674Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "content": "if(!value){\n    return [{type: \"error\", message:\"Không được bỏ trống\"}]\n}",
          "created_date": "2019-11-29T08:49:07.590Z",
          "last_modified": "2019-11-29T08:49:07.590Z",
          "id": "5de0db83dedee200147c1611"
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb9574",
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
        "_id": "5ecceed7d13964435adb955e",
        "name": "RM3",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "RM3_Ghi chú 3",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.664Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "field_id": "5ecceed7d13964435adb955e",
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
    "id": "5ecceed7d13964435adb96d6"
  },
  {
    "layout_labels": null,
    "name": "Sub_Form3",
    "layout_name": "Sunlife",
    "index": 17,
    "layout_id": "5ecceed7d13964435adb94fd",
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
        "_id": "5ecceed7d13964435adb94d8",
        "name": "O54",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "O54_Tên SP bảo hiểm bổ sung",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.659Z",
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
        "field_setting": {
          "field_id": "5ecceed7d13964435adb94d8",
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
        "_id": "5ecceed7d13964435adb95cb",
        "name": "O55",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "O55_Số tiền SP bảo hiểm bố sung",
        "is_list": false,
        "last_modified": "2020-10-14T03:03:56.587Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "content": "// console.log(arguments, '----------------------------------')\n\nvar regex1 = /[^\\s0-9.+]/g\n\nif (regex1.test(value)) {\n\n    return [{ type: \"error\", message: \"Chỉ nhập số\" }]\n}\n\nconst condition1 = [\n\n    'Bảo Hiểm Bổ Sung - Bệnh Hiểm Nghèo',\n    'Bảo Hiểm Bổ Sung - Tử Kỳ',\n    'Bảo Hiểm Bổ Sung - Tai Nạn Toàn Diện',\n    'Bảo Hiểm Bổ Sung - Bệnh Hiểm Nghèo Toàn Diện',\n    'Sản Phẩm Bổ Sung - Bảo Vệ Sức Khỏe Toàn Diện',\n    'Sản Phẩm Bổ Sung - Sống An'\n]\n\nconst condition2 = [\n    'Bảo Hiểm Bổ Sung - Hỗ Trợ Đóng Phí',\n    'Bảo Hiểm Bổ Sung - Miễn Đóng Phí Bệnh Hiểm Nghèo'\n]\n\nconst condition3 = [\n    'Bảo Hiểm Bổ Sung - Hỗ Trợ Viện Phí'\n]\n\nfunction isExist(value, conditions) {\n    for (let index = 0; index < conditions.length; index++) {\n        const condition = conditions[index];\n        let id = condition.findIndex(it => it.normalize() == value.normalize())\n        \n        if (id !== -1) {\n            return [condition[id], index]\n        }\n    }\n    return [null, -1]\n}\n\nfunction checkEqual(value1 = \"\", value2 = \"\") {\n    value1 = value1.replace(/[+]/g, '000').trim();\n    value2 = value2.trim()\n\n    if (!value1 && value2) {\n        return [{ type: \"error\", message: \"Sản phẩm bảo hiểm chính có dữ liệu, không được bỏ trống Field\" }];\n    }\n    \n    let [val, type] = isExist(value2, [condition1, condition2, condition3]);\n\n    if (val) {\n        switch (type) {\n            case 0:\n                if (parseFloat(value1) < 10000000) {\n                    return [{ type: \"warning\", message: `${val}, không được nhập giá trị bé hơn 10.000.000` }];\n                }\n                break;\n            case 1:\n                if (parseFloat(value1) > 50000000) {\n                    return [{ type: \"warning\", message: `${val}, không được nhập giá trị lớn hơn 50.000.000` }];\n                }\n                break;\n            default:\n                if (parseFloat(value1) > 10000000 || parseFloat(value1) < 100000) {\n                    return [{ type: \"error\", message: `${val}, không được nhập giá trị lớn hơn 10.000.000 và bé hơn 100.000` }];\n                }\n                break;\n        }\n    }\n}\n\nreturn checkEqual(value, farm);",
          "arguments": {
            "farm": "O54"
          }
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb95cb",
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
        "_id": "5ecceed7d13964435adb923d",
        "name": "O57",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [],
        "control_type": "TEXTFIELD",
        "counted_character": true,
        "default_value": "",
        "field_display": "O57_Thời hạn đóng phí",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.659Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "arguments": {
            "farm": "O54"
          },
          "content": "var regex1 = /[^\\s0-9]/g\r\n\r\nif(regex1.test(value)){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ nhập số\"}]\r\n}\r\nif(value > 100){\r\n    \r\n    return [{type : \"error\" , message : \"Chỉ được phép nhập tối đa 100\"}]\r\n}\r\n\r\nfunction checkEqual(value1 =\"\" , value2 = \"\"){\r\n    value1 = value1.trim()\r\n    value2 = value2.toUpperCase().trim()\r\n    \r\n    if(!value1  && value2){\r\n        return [{type : \"error\" , message : \"Tên sản phẩm bổ sung có dữ liệu, không được bỏ trống Field\"}];\r\n    }\r\n}\r\n\r\nreturn checkEqual(value, farm);",
          "created_date": "2019-11-29T08:49:07.590Z",
          "last_modified": "2019-11-29T08:49:07.590Z",
          "id": "5de0db83dedee200147c1611"
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb923d",
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
        "_id": "5ecceed7d13964435adb925a",
        "name": "SP01_90",
        "project_id": "5e44c57f4109de001b9b44de",
        "argument_details": [
          "Basic",
          "Premium",
          "VIP",
          "VIP Plus"
        ],
        "control_type": "COMBOBOX",
        "counted_character": true,
        "default_value": "",
        "field_display": "SP01_90 _Gói sản phẩm MR",
        "is_list": false,
        "last_modified": "2020-10-13T05:25:46.674Z",
        "lookup_broadcast": [],
        "lookup_source": {
          "allow_multiple": false,
          "characters_trigger_lookup": 1,
          "group_project": "ancestry",
          "key_value": "data_value",
          "locale": [],
          "lookup_after_time": 1,
          "lookup_field": "",
          "name": "",
          "param_set": "return []",
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
          "content": "function checkEqual(value1 =\"\" , value2 = \"\"){\n    value1 = value1.trim()\n    value2 = value2.trim()\n    \n    if(!value1  && value2 === 'Sản Phẩm Bổ Sung – Bảo Vệ Sức Khỏe Toàn Diện'){\n        return [{type : \"error\" , message : \"Tên sản phẩm là 'Sản Phẩm Bổ Sung – Bảo Vệ Sức Khỏe Toàn Diện', không được bỏ trống Field\"}];\n    }\n}\n\nreturn checkEqual(value, farm);",
          "arguments": {
            "farm": "O54"
          }
        },
        "value_broadcast": "",
        "field_setting": {
          "field_id": "5ecceed7d13964435adb925a",
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
    "id": "5ecceed7d13964435adb96c5"
  }
]
}
