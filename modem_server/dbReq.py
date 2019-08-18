import requests
import json
# import pandas as pd
# from pandas import DataFrame

APIURL = 'http://61.74.249.192:8080/'
JWT = "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwiZXhwIjoxNTYxODczNzE0LCJlbWFpbCI6Im1lYWRlYTI3QGdtYWlsLmNvbSJ9.9jtkmi-UCWy0RgeQIqLmsCTNXST3pksJsI9gzBjkkAU"
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

def postSector(id, field, param):
        URL = APIURL+"pumps/sector/"+id+"/"
        data = {field: param}
        requests.put(URL, headers=headers, data=json.dumps(data))

def postPump(id, field, param):
        URL = APIURL+"pumps/pump/"+id+"/"
        data = {field: param}
        requests.put(URL, headers=headers, data=json.dumps(data))
        
postSector('1', 'pump_1_freq', '6')
#      dataFrame = DataFrame(data)
#      print(dataFrame[['username', 'managing']])
