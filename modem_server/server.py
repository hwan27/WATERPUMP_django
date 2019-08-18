import socket
import threading
import serial
import serial.threaded
import requests
import json
import fcmReq

server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_socket.bind(('172.30.1.38', 8000))
server_socket.listen(0)

def wheh():
    client_socket, addr = server_socket.accept()
    t = threading.Thread(target=wheh)
    t.setDaemon(True)
    t.start()

    while 1:
        data = client_socket.recv(65535)
        
        client_socket.send(data)

        datadeco = data.decode()

        print('receive data : ', datadeco)
        print('connected client : ', addr[0], addr[1])
        print('data length: ', len(datadeco))
        #print(datadeco[0:5])

        if datadeco[0:5] == 'seoul':
                fcmReq.fcmReq(1, datadeco, "hello")


wheh()
     
