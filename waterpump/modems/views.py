from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
import json

import serial
# Create your views here.

class connectModem(APIView):


    def post(self, request):

        number = request.data
        modem_number = str(number['modem_number'])
        # print(modem_number)
        
        ser = serial.Serial('COM9', 115200, timeout=0,
                    parity=serial.PARITY_EVEN, rtscts=1)
        # ser.write(str.encode('AT\r'))
        ser.write(str.encode("AT*MOREQ="+modem_number+", 00000001\r"))
        data = ser.read()
        
        return Response(data)

class setPressure(APIView):


    def post(self, request):

        number = request.data
        modem_number = str(number['modem_number'])
        pressure = str(number['pressure'])
        set_pressure = '{:0>4}'.format(pressure)
        
        ser = serial.Serial('COM9', 115200, timeout=0,
                    parity=serial.PARITY_EVEN, rtscts=1)
        # ser.write(str.encode('AT\r'))
        ser.write(str.encode("AT*MOREQ="+modem_number+", 1111"+set_pressure+"\r"))
        data = ser.read()
        
        return Response(data)

# def index(request):
    
