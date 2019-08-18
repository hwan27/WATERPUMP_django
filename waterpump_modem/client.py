import socket

# PORT = 'COM9'
# BaudRate = 115200

# ser = serial.Serial(PORT, BaudRate, timeout=0, parity=serial.PARITY_EVEN, rtscts=1)

# ser.write(str.encode("AT*TCPop=61.74.249.192,8000\r"))
# response =ser.readline
# print(response)
socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
socket.connect(('127.0.0.1', 8000))

while 1:
    data = input()
    socket.send(data.encode())
    data2 = socket.recv(65535)
    print('data received : ', data2.decode())

socket.close()
