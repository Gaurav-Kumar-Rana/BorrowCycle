const websettings = {
    "title":"Borrow",
    "header":{
        "navbar_color":"dark",
        "navbar_links":[
            {"link_name":"Login","url":"login"},
            {"link_name":"Register","url":"register"}
        ]
    },
    "body":{
        "home":{
            "buttons":[
                {"button_name":"Login","url":"login"},
                {"button_name":"Register","url":"register"}
            ]
        },
        "login":{
            "labels":{
                "email":{"label_name":"Email"},
                "passowrd":{"label_name":"Passowrd"},
                "rememberme":{"label_name":"Remember me"},
                "signin":{"label_name":"Sign in"}
            },
        },
        "register":{
            "title":"Provide following details for registration.",
            "labels":{
                "fname":{"label_name":"First Name","mandatory":true},
                "lname":{"label_name":"Last Name","mandatory":true},
                "passowrd":{"label_name":"Password","mandatory":false},
                "repassowrd":{"label_name":"Re-password","mandatory":false},
                "actiondescription":{"label_name":"I want to","mandatory":true},
                "action1":{"label_name":"Action 1"},
                "action2":{"label_name":"Action 1"}
            },
        }
    }
};

export default websettings;