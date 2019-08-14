from rest_framework import serializers
from . import models


# class PumpSerializer(serializers.ModelSerializer):

#     #city = CitySerializer()
#     #town = TownSerializer()
#     #sector = SectorSerializer()

#     class Meta:
#         model = models.Pump
#         fields = '__all__'


class SectorSerializer(serializers.ModelSerializer):

    #city = CitySerializer()
    #town = TownSerializer()
    #pump_set = PumpSerializer(many=True)

    class Meta:
        model = models.Sector
        fields = ('id', 'title', 'city', 'sector_id', 'town', 'lat', 'lon', 'modem_number', 'pump_count', 
        'discharge_pressure', 'suction_pressure', 'discharge', 'set_pressure','low_pressure', 'pump_open', 
        'pump_1_on', 'pump_1_disorder_a', 'pump_1_disorder_b', 'pump_1_low_water', 'pump_1_auto', 'pump_1_operating_rate', 'pump_1_current', 'pump_1_freq', 'pump_1_power', 
        'pump_2_on', 'pump_2_disorder_a', 'pump_2_disorder_b', 'pump_2_low_water', 'pump_2_auto', 'pump_2_operating_rate', 'pump_2_current', 'pump_2_freq', 'pump_2_power',
        'pump_3_on', 'pump_3_disorder_a', 'pump_3_disorder_b', 'pump_3_low_water', 'pump_3_auto', 'pump_3_operating_rate', 'pump_3_current', 'pump_3_freq', 'pump_3_power',
        'pump_4_on', 'pump_4_disorder_a', 'pump_4_disorder_b','pump_1_low_water', 'pump_4_auto', 'pump_4_operating_rate', 'pump_4_current', 'pump_4_freq', 'pump_4_power','updated_at')


class TownSerializer(serializers.ModelSerializer):

    #city = CitySerializer()
    sector_set = SectorSerializer(many=True)
    #pump_set = PumpSerializer(many=True)

    class Meta:
        model = models.Town
        fields = ('id', 'title', 'city', 'sector_set')


class CitySerializer(serializers.ModelSerializer):

    town_set = TownSerializer(many=True)
    #sector_set = SectorSerializer(many=True)
    #pump_set = PumpSerializer(many=True)

    class Meta:
        model = models.City
        fields = ('id', 'title', 'town_set')
