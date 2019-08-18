import dbReq
import requests
import json



fcmURL = "https://fcm.googleapis.com/fcm/send"
fcmHeaders = {
        'Authorization': "key=AAAAreglT90:APA91bGut2A29ChlHrD3ysRJ_wvbe0Sp_dMo_5ycwbq712UIvI-ynld72ObB5Sw3XE6TpbuKPY16lgH8oXNewGpMf4YZM8XqdoSSOjUnlY4s0u1y-axPTHHULZDlMLT5i6d5N36sm-Pu",
        'Content-Type': "application/json;  UTF-8"
}


def fcmReq(m, title, body):
    fcmToken = dbReq.getFcmToken(m)

    for i in fcmToken:

        fcmData = {
            "to": i,  
            "priority": "high", 
            "notification": {
                "title": title,
                "body": body
                }
            }
        requests.post(fcmURL, data=json.dumps(fcmData), headers=fcmHeaders)


fcmReq(1, 'hello', 'hi')