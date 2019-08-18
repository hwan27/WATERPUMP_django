import socket
import threading
import requests
import json
import fcmReq
import dbReq

server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_socket.bind(('127.0.0.1', 8000))
server_socket.listen(0)


def wheh():
    client_socket, addr = server_socket.accept()
    t = threading.Thread(target=wheh)
    t.setDaemon(True)
    t.start()

    while 1:
        puredata = client_socket.recv(65535)
        client_socket.send(puredata)

        data = puredata.decode()

        # pump_id = data[0:6]
        # sector = dbReq.getSector(pump_id)
        # sector_title = sector['title']
        # managing = sector['city']

        print('receive data : ', data)
        print('connected client : ', addr[0], addr[1])
        print(len(data), data[0:6])

        #에러처리
        if data[6:10] == 'FFFF':

            pump_id = data[0:6]
            sector = dbReq.getSector(pump_id)
            sector_title = sector['title']
            managing = sector['city']
            disorder_default = '0000'

            pump_count = data[13]

            if data[11] == '0':

                pump_open = False
                low_pressure = False

            if data[11] == '1':

                pump_open = True
                low_pressure = False

                push_message = '문열림'

                # form = {'pump_open': pump_open,
                #         'low_pressure': low_pressure,
                #         }

                # dbReq.postSector(pump_id, form)
                fcmReq.fcmReq(managing, sector_title, push_message)

            if data[11] == '2':

                pump_open = False
                low_pressure = True

                push_message = '저압'

                # form = {'pump_open': pump_open,
                #         'low_pressure': low_pressure,
                #         }

                # dbReq.postSector(pump_id, form)
                fcmReq.fcmReq(managing, sector_title, push_message)

            if data[11] == '3':

                pump_open = True
                low_pressure = True

                push_message = '문열림/저압'

                # form = {'pump_open': pump_open,
                #         'low_pressure': low_pressure,
                #         }

                # dbReq.postSector(pump_id, form)
                fcmReq.fcmReq(managing, sector_title, push_message)

            if data[14] == '0':

                pump_1_low_water = False

            if data[14] == '1':

                pump_1_low_water = True

                push_message = '1번펌프 저수위'

                fcmReq.fcmReq(managing, sector_title, push_message)

            if data[15] == '0':

                pump_2_low_water = False

            if data[15] == '1':

                pump_2_low_water = True

                push_message = '2번펌프 저수위'

                fcmReq.fcmReq(managing, sector_title, push_message)
                
            if data[16] == '0':

                pump_3_low_water = False

            if data[16] == '1':

                pump_3_low_water = True

                push_message = '3번펌프 저수위'

                fcmReq.fcmReq(managing, sector_title, push_message)
                
            if data[17] == '0':

                pump_4_low_water = False

            if data[17] == '1':

                pump_4_low_water = True

                push_message = '4번펌프 저수위'

                fcmReq.fcmReq(managing, sector_title, push_message)

            if pump_count == '1':

                pump_1_disorder_a = data[18:22]
                pump_1_disorder_b = data[22:26]

                form = {'pump_open': pump_open,
                'low_pressure': low_pressure,
                'pump_1_low_water': pump_1_low_water,
                'pump_1_disorder_a': pump_1_disorder_a,
                'pump_1_disorder_b': pump_1_disorder_b,
                'pump_2_low_water': False,
                'pump_2_disorder_a': disorder_default,
                'pump_2_disorder_b': disorder_default,
                'pump_3_low_water': False,
                'pump_3_disorder_a': disorder_default,
                'pump_3_disorder_b': disorder_default,
                'pump_4_low_water': False,
                'pump_4_disorder_a': disorder_default,
                'pump_4_disorder_b': disorder_default,
                }

                if pump_1_disorder_a != disorder_default:

                    push_message = '1번펌프 고장 A: ' + pump_1_disorder_a
                    fcmReq.fcmReq(managing, sector_title, push_message)

                
                if pump_1_disorder_b != disorder_default:

                    push_message = '1번펌프 고장 B: ' + pump_1_disorder_b
                    fcmReq.fcmReq(managing, sector_title, push_message)

            if pump_count == '2':

                pump_1_disorder_a = data[18:22]
                pump_1_disorder_b = data[22:26]
                pump_2_disorder_a = data[26:30]
                pump_2_disorder_b = data[30:34]

                form = {'pump_open': pump_open,
                'low_pressure': low_pressure,
                'pump_1_low_water': pump_1_low_water,
                'pump_1_disorder_a': pump_1_disorder_a,
                'pump_1_disorder_b': pump_1_disorder_b,
                'pump_2_low_water': pump_2_low_water,
                'pump_2_disorder_a': pump_2_disorder_a,
                'pump_2_disorder_b': pump_2_disorder_b,
                'pump_3_low_water': False,
                'pump_3_disorder_a': disorder_default,
                'pump_3_disorder_b': disorder_default,
                'pump_4_low_water': False,
                'pump_4_disorder_a': disorder_default,
                'pump_4_disorder_b': disorder_default,
                }

                if pump_1_disorder_a != disorder_default:

                    push_message = '1번펌프 고장 A: ' + pump_1_disorder_a
                    fcmReq.fcmReq(managing, sector_title, push_message)

                
                if pump_1_disorder_b != disorder_default:

                    push_message = '1번펌프 고장 B: ' + pump_1_disorder_b
                    fcmReq.fcmReq(managing, sector_title, push_message)

                if pump_2_disorder_a != disorder_default:

                    push_message = '2번펌프 고장 A: ' + pump_2_disorder_a
                    fcmReq.fcmReq(managing, sector_title, push_message)

                
                if pump_2_disorder_b != disorder_default:

                    push_message = '2번펌프 고장 B: ' + pump_2_disorder_b
                    fcmReq.fcmReq(managing, sector_title, push_message)

            if pump_count == '3':

                pump_1_disorder_a = data[18:22]
                pump_1_disorder_b = data[22:26]
                pump_2_disorder_a = data[26:30]
                pump_2_disorder_b = data[30:34]
                pump_3_disorder_a = data[34:38]
                pump_3_disorder_b = data[38:42]

                form = {'pump_open': pump_open,
                'low_pressure': low_pressure,
                'pump_1_low_water': pump_1_low_water,
                'pump_1_disorder_a': pump_1_disorder_a,
                'pump_1_disorder_b': pump_1_disorder_b,
                'pump_2_low_water': pump_2_low_water,
                'pump_2_disorder_a': pump_2_disorder_a,
                'pump_2_disorder_b': pump_2_disorder_b,
                'pump_3_low_water': pump_3_low_water,
                'pump_3_disorder_a': pump_3_disorder_a,
                'pump_3_disorder_b': pump_3_disorder_b,
                'pump_4_low_water': False,
                'pump_4_disorder_a': disorder_default,
                'pump_4_disorder_b': disorder_default,
                }

                if pump_1_disorder_a != disorder_default:

                    push_message = '1번펌프 고장 A: ' + pump_1_disorder_a
                    fcmReq.fcmReq(managing, sector_title, push_message)

                
                if pump_1_disorder_b != disorder_default:

                    push_message = '1번펌프 고장 B: ' + pump_1_disorder_b
                    fcmReq.fcmReq(managing, sector_title, push_message)

                if pump_2_disorder_a != disorder_default:

                    push_message = '2번펌프 고장 A: ' + pump_2_disorder_a
                    fcmReq.fcmReq(managing, sector_title, push_message)

                
                if pump_2_disorder_b != disorder_default:

                    push_message = '2번펌프 고장 B: ' + pump_2_disorder_b
                    fcmReq.fcmReq(managing, sector_title, push_message)

                if pump_3_disorder_a != disorder_default:

                    push_message = '3번펌프 고장 A: ' + pump_3_disorder_a
                    fcmReq.fcmReq(managing, sector_title, push_message)

                
                if pump_3_disorder_b != disorder_default:

                    push_message = '3번펌프 고장 B: ' + pump_3_disorder_b
                    fcmReq.fcmReq(managing, sector_title, push_message)

            if pump_count == '4':

                pump_1_disorder_a = data[18:22]
                pump_1_disorder_b = data[22:26]
                pump_2_disorder_a = data[26:30]
                pump_2_disorder_b = data[30:34]
                pump_3_disorder_a = data[34:38]
                pump_3_disorder_b = data[38:42]
                pump_4_disorder_a = data[42:46]
                pump_4_disorder_b = data[46:50]

                form = {'pump_open': pump_open,
                'low_pressure': low_pressure,
                'pump_1_low_water': pump_1_low_water,
                'pump_1_disorder_a': pump_1_disorder_a,
                'pump_1_disorder_b': pump_1_disorder_b,
                'pump_2_low_water': pump_2_low_water,
                'pump_2_disorder_a': pump_2_disorder_a,
                'pump_2_disorder_b': pump_2_disorder_b,
                'pump_3_low_water': pump_3_low_water,
                'pump_3_disorder_a': pump_3_disorder_a,
                'pump_3_disorder_b': pump_3_disorder_b,
                'pump_4_low_water': pump_4_low_water,
                'pump_4_disorder_a': pump_4_disorder_a,
                'pump_4_disorder_b': pump_4_disorder_b,
                }

                if pump_1_disorder_a != disorder_default:

                    push_message = '1번펌프 고장 A: ' + pump_1_disorder_a
                    fcmReq.fcmReq(managing, sector_title, push_message)

                
                if pump_1_disorder_b != disorder_default:

                    push_message = '1번펌프 고장 B: ' + pump_1_disorder_b
                    fcmReq.fcmReq(managing, sector_title, push_message)

                if pump_2_disorder_a != disorder_default:

                    push_message = '2번펌프 고장 A: ' + pump_2_disorder_a
                    fcmReq.fcmReq(managing, sector_title, push_message)

                
                if pump_2_disorder_b != disorder_default:

                    push_message = '2번펌프 고장 B: ' + pump_2_disorder_b
                    fcmReq.fcmReq(managing, sector_title, push_message)

                if pump_3_disorder_a != disorder_default:

                    push_message = '3번펌프 고장 A: ' + pump_3_disorder_a
                    fcmReq.fcmReq(managing, sector_title, push_message)

                
                if pump_3_disorder_b != disorder_default:

                    push_message = '3번펌프 고장 B: ' + pump_3_disorder_b
                    fcmReq.fcmReq(managing, sector_title, push_message)

                if pump_4_disorder_a != disorder_default:

                    push_message = '4번펌프 고장 A: ' + pump_4_disorder_a
                    fcmReq.fcmReq(managing, sector_title, push_message)

                
                if pump_4_disorder_b != disorder_default:

                    push_message = '4번펌프 고장 B: ' + pump_4_disorder_b
                    fcmReq.fcmReq(managing, sector_title, push_message)

            print(form)

            dbReq.postSector(pump_id, form)
            # if data[12] == '1':

            #     pump_1_low_water = True
            #     push_message = '1번모터 저수위'

            #     form = {
            #         'pump_1_low_water': pump_1_low_water
            #     }

            #     dbReq.postSector(pump_id, form)
            #     fcmReq.fcmReq(managing, sector_title, push_message)

            #dbReq.postSector(pump_id, form)

        # if data[0:6] == 'JC0001':
        # print('식별자: ' + data[0:6])
        # print('모터개수: ' + data[9])
        # print('모터상태: ' + data[10:14])
        # print('토출압력: ' + data[14:18])
        # print('흡입압력: ' + data[18:22])
        # print('유량: ' + data[22:26])
        # print('모터1 전류: ' + data[26:30])
        # print('모터1 주파수: ' + data[30:34])
        # print('모터1 전력: ' + data[34:38])

        #일반 메세지
        elif data[6:9] == '000': 

            pump_id = data[0:6]
            sector = dbReq.getSector(pump_id)
            sector_title = sector['title']
            managing = sector['city']
            #pump_id = data[0:6]
            pump_count = data[9]
            discharge_pressure = data[14:16]+"."+data[16:18]
            suction_pressure = data[18:20]+"."+data[20:22]
            discharge = data[22:26]

            pump_1_status = data[10]
            pump_2_status = data[11]
            pump_3_status = data[12]
            pump_4_status = data[13]

            # pump_1_current = data[26:28]+"."+data[28:30]
            # pump_1_freq = data[30:32]+"."+data[32:34]
            # pump_1_power = data[34:36]+"."+data[36:38]

            # pump_2_current = data[38:40]+"."+data[40:42]
            # pump_2_freq = data[42:44]+"."+data[44:46]
            # pump_2_power = data[46:48]+"."+data[48:50]

            # pump_3_current = data[50:52]+"."+data[52:54]
            # pump_3_freq = data[54:56]+"."+data[56:58]
            # pump_3_power = data[58:60]+"."+data[60:62]

            # pump_4_current = data[62:64]+"."+data[64:66]
            # pump_4_freq = data[66:68]+"."+data[68:70]
            # pump_4_power = data[70:72]+"."+data[72:74]

            if pump_1_status == '1':
                    # 펌프1 on/수동
                pump_1_auto = False
                pump_1_on = True

            if pump_1_status == '2':
                        # 펌프1 on/수동
                pump_1_auto = True
                pump_1_on = False

            if pump_1_status == '3':
                        # 펌프1 on/수동
                pump_1_auto = True
                pump_1_on = True

            if pump_2_status == '1':
                    # 펌프2 on/수동
                pump_2_auto = False
                pump_2_on = True

            if pump_2_status == '2':
                    # 펌프2 on/수동
                pump_2_auto = True
                pump_2_on = False

            if pump_2_status == '3':
                        # 펌프1 on/수동
                pump_2_auto = True
                pump_2_on = True

            if pump_3_status == '1':
                # 펌프1 on/수동
                pump_3_auto = False
                pump_3_on = True

            if pump_3_status == '2':
                        # 펌프1 on/수동
                pump_3_auto = True
                pump_3_on = False

            if pump_3_status == '3':
                        # 펌프1 on/수동
                pump_3_auto = True
                pump_3_on = True

            if pump_4_status == '1':
                    # 펌프1 on/수동
                pump_4_auto = False
                pump_4_on = True

            if pump_4_status == '2':
                        # 펌프1 on/수동
                pump_4_auto = True
                pump_4_on = False

            if pump_4_status == '3':
                        # 펌프1 on/수동
                pump_4_auto = True
                pump_4_on = True

            if pump_count == '1':

                pump_1_current = data[26:28]+"."+data[28:30]
                pump_1_freq = float(data[30:32]+"."+data[32:34])
                pump_1_power = data[34:36]+"."+data[36:38]

                pump_2_current = 0
                pump_2_freq = 0
                pump_2_power = 0

                pump_3_current = 0
                pump_3_freq = 0
                pump_3_power = 0

                pump_4_current = 0
                pump_4_freq = 0
                pump_4_power = 0

                form = {'pump_count': pump_count,
                        'discharge_pressure': discharge_pressure,
                        'suction_pressure': suction_pressure,
                        'discharge': discharge,
                        'pump_1_current': pump_1_current,
                        'pump_2_current': pump_2_current,
                        'pump_3_current': pump_3_current,
                        'pump_4_current': pump_4_current,
                        'pump_1_freq': pump_1_freq,
                        'pump_2_freq': pump_2_freq,
                        'pump_3_freq': pump_3_freq,
                        'pump_4_freq': pump_4_freq,
                        'pump_1_power': pump_1_power,
                        'pump_2_power': pump_2_power,
                        'pump_3_power': pump_3_power,
                        'pump_4_power': pump_4_power,
                        'pump_1_auto': pump_1_auto,
                        'pump_2_auto': pump_2_auto,
                        'pump_3_auto': pump_3_auto,
                        'pump_4_auto': pump_4_auto,
                        'pump_1_on': pump_1_on,
                        'pump_2_on': pump_2_on,
                        'pump_3_on': pump_3_on,
                        'pump_4_on': pump_4_on
                        }

            if pump_count == '2':

                pump_1_current = data[26:28]+"."+data[28:30]
                pump_1_freq = float(data[30:32]+"."+data[32:34])
                pump_1_power = data[34:36]+"."+data[36:38]

                pump_2_current = data[38:40]+"."+data[40:42]
                pump_2_freq = float(data[42:44]+"."+data[44:46])
                pump_2_power = data[46:48]+"."+data[48:50]

                pump_3_current = 0
                pump_3_freq = 0
                pump_3_power = 0

                pump_4_current = 0
                pump_4_freq = 0
                pump_4_power = 0

                form = {'pump_count': pump_count,
                        'discharge_pressure': discharge_pressure,
                        'suction_pressure': suction_pressure,
                        'discharge': discharge,
                        'pump_1_current': pump_1_current,
                        'pump_2_current': pump_2_current,
                        'pump_3_current': pump_3_current,
                        'pump_4_current': pump_4_current,
                        'pump_1_freq': pump_1_freq,
                        'pump_2_freq': pump_2_freq,
                        'pump_3_freq': pump_3_freq,
                        'pump_4_freq': pump_4_freq,
                        'pump_1_power': pump_1_power,
                        'pump_2_power': pump_2_power,
                        'pump_3_power': pump_3_power,
                        'pump_4_power': pump_4_power,
                        'pump_1_auto': pump_1_auto,
                        'pump_2_auto': pump_2_auto,
                        'pump_3_auto': pump_3_auto,
                        'pump_4_auto': pump_4_auto,
                        'pump_1_on': pump_1_on,
                        'pump_2_on': pump_2_on,
                        'pump_3_on': pump_3_on,
                        'pump_4_on': pump_4_on
                        }

            if pump_count == '3':

                pump_1_current = data[26:28]+"."+data[28:30]
                pump_1_freq = float(data[30:32]+"."+data[32:34])
                pump_1_power = data[34:36]+"."+data[36:38]

                pump_2_current = data[38:40]+"."+data[40:42]
                pump_2_freq = float(data[42:44]+"."+data[44:46])
                pump_2_power = data[46:48]+"."+data[48:50]

                pump_3_current = data[50:52]+"."+data[52:54]
                pump_3_freq = float(data[54:56]+"."+data[56:58])
                pump_3_power = data[58:60]+"."+data[60:62]

                pump_4_current = 0
                pump_4_freq = 0
                pump_4_power = 0

                form = {'pump_count': pump_count,
                        'discharge_pressure': discharge_pressure,
                        'suction_pressure': suction_pressure,
                        'discharge': discharge,
                        'pump_1_current': pump_1_current,
                        'pump_2_current': pump_2_current,
                        'pump_3_current': pump_3_current,
                        'pump_4_current': pump_4_current,
                        'pump_1_freq': pump_1_freq,
                        'pump_2_freq': pump_2_freq,
                        'pump_3_freq': pump_3_freq,
                        'pump_4_freq': pump_4_freq,
                        'pump_1_power': pump_1_power,
                        'pump_2_power': pump_2_power,
                        'pump_3_power': pump_3_power,
                        'pump_4_power': pump_4_power,
                        'pump_1_auto': pump_1_auto,
                        'pump_2_auto': pump_2_auto,
                        'pump_3_auto': pump_3_auto,
                        'pump_4_auto': pump_4_auto,
                        'pump_1_on': pump_1_on,
                        'pump_2_on': pump_2_on,
                        'pump_3_on': pump_3_on,
                        'pump_4_on': pump_4_on
                        }

            if pump_count == '4':

                pump_1_current = data[26:28]+"."+data[28:30]
                pump_1_freq = float(data[30:32]+"."+data[32:34])
                pump_1_power = data[34:36]+"."+data[36:38]

                pump_2_current = data[38:40]+"."+data[40:42]
                pump_2_freq = float(data[42:44]+"."+data[44:46])
                pump_2_power = data[46:48]+"."+data[48:50]

                pump_3_current = data[50:52]+"."+data[52:54]
                pump_3_freq = float(data[54:56]+"."+data[56:58])
                pump_3_power = data[58:60]+"."+data[60:62]

                pump_4_current = data[62:64]+"."+data[64:66]
                pump_4_freq = float(data[66:68]+"."+data[68:70])
                pump_4_power = data[70:72]+"."+data[72:74]

                form = {'pump_count': pump_count,
                        'discharge_pressure': discharge_pressure,
                        'suction_pressure': suction_pressure,
                        'discharge': discharge,
                        'pump_1_current': pump_1_current,
                        'pump_2_current': pump_2_current,
                        'pump_3_current': pump_3_current,
                        'pump_4_current': pump_4_current,
                        'pump_1_freq': pump_1_freq,
                        'pump_2_freq': pump_2_freq,
                        'pump_3_freq': pump_3_freq,
                        'pump_4_freq': pump_4_freq,
                        'pump_1_power': pump_1_power,
                        'pump_2_power': pump_2_power,
                        'pump_3_power': pump_3_power,
                        'pump_4_power': pump_4_power,
                        'pump_1_auto': pump_1_auto,
                        'pump_2_auto': pump_2_auto,
                        'pump_3_auto': pump_3_auto,
                        'pump_4_auto': pump_4_auto,
                        'pump_1_on': pump_1_on,
                        'pump_2_on': pump_2_on,
                        'pump_3_on': pump_3_on,
                        'pump_4_on': pump_4_on
                        }
            print(form)

            dbReq.postSector(pump_id, form)

        # if data[9] == '1':
        #     if data[10] == '1':
        #         # print('펌프1 on/수동')
        #         pump_1_auto = False
        #         pump_1_on = True

        #     elif data[10] == '2':
        #         #print('펌프1 off/자동')
        #         pump_1_auto = True
        #         pump_1_on = False

        #     elif data[10] == '3':
        #         #print('펌프1 on/자동')
        #         pump_1_auto = True
        #         pump_1_on = True

        #     form = {'pump_count': pump_count,
        #             'discharge_pressure': discharge_pressure,
        #             'suction_pressure': suction_pressure,
        #             'discharge': discharge,
        #             'pump_1_current': pump_1_current,
        #             'pump_1_freq': pump_1_freq,
        #             'pump_1_power': pump_1_power,
        #             'pump_1_auto': pump_1_auto,
        #             'pump_1_on': pump_1_on
        #             }
        #     print(form)

        #     dbReq.postSector(pump_id, form)

        # if data[9] == '2':

        #     pump_2_current = data[38:40]+"."+data[40:42]
        #     pump_2_freq = data[42:44]+"."+data[44:46]
        #     pump_2_power = data[46:48]+"."+data[48:50]

        #     if data[10] == '1':
        #         # print('펌프1 on/수동')
        #         pump_1_auto = False
        #         pump_1_on = True

        #     if data[10] == '2':
        #         #print('펌프1 off/자동')
        #         pump_1_auto = True
        #         pump_1_on = False

        #     if data[10] == '3':
        #         #print('펌프1 on/자동')
        #         pump_1_auto = True
        #         pump_1_on = True

        #     if data[11] == '1':
        #         # print('펌프1 on/수동')
        #         pump_2_auto = False
        #         pump_2_on = True

        #     if data[11] == '2':
        #         #print('펌프1 off/자동')
        #         pump_2_auto = True
        #         pump_2_on = False

        #     if data[11] == '3':
        #         #print('펌프1 on/자동')
        #         pump_2_auto = True
        #         pump_2_on = True

        #     form = {'pump_count': pump_count,
        #             'discharge_pressure': discharge_pressure,
        #             'suction_pressure': suction_pressure,
        #             'discharge': discharge,
        #             'pump_1_current': pump_1_current,
        #             'pump_1_freq': pump_1_freq,
        #             'pump_1_power': pump_1_power,
        #             'pump_1_auto': pump_1_auto,
        #             'pump_1_on': pump_1_on,
        #             'pump_2_current': pump_2_current,
        #             'pump_2_freq': pump_2_freq,
        #             'pump_2_power': pump_2_power,
        #             'pump_2_auto': pump_2_auto,
        #             'pump_2_on': pump_2_on
        #             }
        #     print(form)

        #     dbReq.postSector(pump_id, form)

        # if data[9] == '4':

        #     if data[10] == '1':
        #         # print('펌프1 on/수동')
        #         pump_1_auto = False
        #         pump_1_on = True

        #     if data[10] == '2':
        #         #print('펌프1 off/자동')
        #         pump_1_auto = True
        #         pump_1_on = False

        #     if data[10] == '3':
        #         #print('펌프1 on/자동')
        #         pump_1_auto = True
        #         pump_1_on = True

        #     if data[11] == '1':
        #         # print('펌프1 on/수동')
        #         pump_2_auto = False
        #         pump_2_on = True

        #     if data[11] == '2':
        #         #print('펌프1 off/자동')
        #         pump_2_auto = True
        #         pump_2_on = False

        #     if data[11] == '3':
        #         #print('펌프1 on/자동')
        #         pump_2_auto = True
        #         pump_2_on = True

        #     form = {'pump_count': pump_count,
        #             'discharge_pressure': discharge_pressure,
        #             'suction_pressure': suction_pressure,
        #             'discharge': discharge,
        #             'pump_1_current': pump_1_current,
        #             'pump_1_freq': pump_1_freq,
        #             'pump_1_power': pump_1_power,
        #             'pump_1_auto': pump_1_auto,
        #             'pump_1_on': pump_1_on,
        #             'pump_2_current': pump_2_current,
        #             'pump_2_freq': pump_2_freq,
        #             'pump_2_power': pump_2_power,
        #             'pump_2_auto': pump_2_auto,
        #             'pump_2_on': pump_2_on
        #             }
        #     print(form)

        #     dbReq.postSector(pump_id, form)


wheh()
