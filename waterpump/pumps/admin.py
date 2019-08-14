from django.contrib import admin
from . import models
# Register your models here.


# @admin.register(models.Pump)
# class PumpAdmin(admin.ModelAdmin):

#     list_display = (
#         'sector',
#         'title',  # 카드뷰에 나오는 펌프이름
#         'auto',  # 통신 상태
#         'operating_rate',  # 가입창명
#         'current',  # 모뎀번호
#         'freq',  # 위도
#         'power',  # 경도
#         'updated_at'
#     )

#     search_fields = (
#         'sector',
#         'title',
#         'name',
#         'modem_number',
#     )

#     list_filter = (
#         'sector',
#     )


@admin.register(models.City)
class CityAdmin(admin.ModelAdmin):
    pass


@admin.register(models.Town)
class TownAdmin(admin.ModelAdmin):
    pass


@admin.register(models.Sector)
class SectorAdmin(admin.ModelAdmin):
    list_display = (
        'town',
        'city',
        'title',  # 카드뷰에 나오는 펌프이름
        'sector_id',
        'lat',  # 통신 상태
        'lon',  # 가입창명
        'modem_number',  # 모뎀번호
        'pump_count',  # 펌프개수
        'discharge_pressure',  # 흡입압력 표시여부
        'suction_pressure',
        'set_pressure',
        'discharge',  # 유량
        'low_pressure',
        'pump_open',
        'pump_1_on',
        'pump_1_disorder_a',
        'pump_1_disorder_b',
        'pump_1_low_water',
        'pump_1_auto',
        'pump_1_operating_rate',
        'pump_1_current',
        'pump_1_freq',
        'pump_1_power',
        'pump_2_on',
        'pump_2_disorder_a',
        'pump_2_disorder_b',
        'pump_2_low_water',
        'pump_2_auto',
        'pump_2_operating_rate',
        'pump_2_current',
        'pump_2_freq',
        'pump_2_power',
        'pump_3_on',
        'pump_3_disorder_a',
        'pump_3_disorder_b',
        'pump_3_low_water',
        'pump_3_auto',
        'pump_3_operating_rate',
        'pump_3_current',
        'pump_3_freq',
        'pump_3_power',
        'pump_4_on',
        'pump_4_disorder_a',
        'pump_4_disorder_b',
        'pump_4_low_water',
        'pump_4_auto',
        'pump_4_operating_rate',
        'pump_4_current',
        'pump_4_freq',
        'pump_4_power',
        'updated_at'
    )
