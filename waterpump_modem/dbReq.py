import requests
import json
# import pandas as pd
# from pandas import DataFrame

APIURL = 'http://106.252.42.82:8080/'
JWT = "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImxpbSIsImV4cCI6MTU2NjIwNDg0MCwiZW1haWwiOiJtZWFkZWEyN0BnbWFpbC5jb20ifQ.hSs5xwnp1zugkAVq5ZI4hpbcBcnet7aJaOAtD9_O6Sg"
headers = {'Authorization': JWT, "Content-Type": "application/json"}


def getFcmToken(s):
    URL = APIURL+"users"
    res = requests.get(URL, headers=headers)
    data = res.json()

    for i in data:
        managing = i['managing']
        if managing == s:
            username = i['username']
            fcmToken = []
            fcmToken.append(i['fcmToken'])

            return fcmToken


def getSector(id):
    URL = APIURL+"pumps/sector/"+id+"/"
    res = requests.get(URL, headers=headers)
    data = res.json()
    return data


def postSector(id, form):
    URL = APIURL+"pumps/sector/"+id+"/"
    data = form
    requests.put(URL, headers=headers, data=json.dumps(data))

# form = {"pump_count": 3}
# postSector('JC0001', form)

#postSector('pump_count', '3', "1")
# dataFrame = DataFrame(data)
# print(dataFrame[['username', 'managing']])
