# Waterpump

Management of Pumps with Django and React/ReactNative

# 설치 및 설정

0. python / node install
1. pip install pipenv
2. pipenv shell
3. pipenv install -r requirements/local.txt
4. pipenv install django
5. pgadmin install
6. name: waterpump, localhost, port 5432, 9315, waterpump_db
7. frontend: .env NODE_PATH=src
8. python manage.py makemigrations, migrate, createsuperuser
9. python manage.py runserver
10. frontend: npm i, yarn build, yarn start

# 실행

1. django server(database)
- WATERPUMP 디렉토리에서 python manage.py runserver 192.168.0.26:8080 입력

2. frontend 
- WATERPUMP/frontend 디렉토리에서 yarn start 입력

3. modem server(모뎀에서 보내는 data 수신해서 database 변경)
- WATERPUMP/waterpump_modem 디렉토리에서 python server.py 입력
- HOST? 나오면 192.168.0.26 입력
- PROT? 나오면 8079 입력




서버 아이피: python manage.py runserver 192.168.0.26:8080/
어드민: 106.252.42.82:8080/admin
프론트: yarn start => http://106.252.42.82:8000
모뎀 서버: Host: 192.168.0.26 Port: 8079 
모뎀 클라이언트 접속주소: 106.252.42.82.8079

- 어드민 계정: lim / cjswl8182
- user 생성 시 managing 설정 필수(관리도시)
- sector(모뎀 소재지) 생성 시 sector_id가 식별자(ex: JC0001)

#sector database field

city: 해당 sector가 속한 city의 id
town: 해당 sector가 속한 town의 id
sector_id: 해당 소재지의 식별자
lat/lon: 해당 소재지의 위/경도
modem_number: 해당 소재지의 모뎀 전화번호
pump_count: 해당 소재지의 펌프 갯수
discharge_pressure: 해당 소재지의 토출압력
suction_pressure: 해당 소재지의 흡입압력
discharge: 해당 소재지의 유량
set_pressure: 해당 소재지의 설정압력 
low_pressure: 해당 소재지 저압
pump_open: 해당 소재지의 1번 펌프 문열림
pump_1_on: 해당 소재지의 1번 펌프 온
pump_1_disorder_a: 해당 소재지의 1번 펌프 고장 a
pump_1_disorder_b: 해당 소재지의 1번 펌프 고장 b
pump_1_low_water: 해당 소재지의 1번 펌프 저수위
pump_1_auto: 해당 소재지의 1번 펌프 자동(true)/수동(false)
pump_1_operating_rate: 해당 소재지의 1번 펌프 가동률(freq/60)
pump_1_current: 해당 소재지의 1번 펌프 전류
pump_1_freq: 해당 소재지의 1번 펌프 주파수
pump_1_power: 해당 소재지의 1번 펌프 전력
    
updated_at: 해당 소재지의 최종 업데이트 시간

