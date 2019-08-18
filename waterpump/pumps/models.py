from django.db import models
from django.utils.encoding import python_2_unicode_compatible
from waterpump.users import models as user_models
#from waterpump.users import models as user_models
# Create your models here.


@python_2_unicode_compatible
class TimeStampedModel(models.Model):

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


@python_2_unicode_compatible
class City(TimeStampedModel):

    class Meta:
        ordering = ['id']

    """ City Model """

    title = models.CharField(max_length=120)
    
    #manager = models.ForeignKey(user_models.User, null=True, on_delete='CASCADE', related_name='manager')
    #creator = models.ForeignKey(user_models.User, null=True, on_delete='CASCADE', related_name='creator')

    def __str__(self):
        return '{}'.format(self.title)


@python_2_unicode_compatible
class Town(TimeStampedModel):

    class Meta:
        ordering = ['id']

    """ Town Model """
    city = models.ForeignKey(City, null=True, on_delete='CASCADE', related_name='town_set')
    title = models.CharField(max_length=120)
    #creator = models.ForeignKey(user_models.User, null=True, on_delete='CASCADE')

    def __str__(self):
        return '{} - {}'.format(self.city, self.title)


@python_2_unicode_compatible
class Sector(TimeStampedModel):

    class Meta:
        ordering = ['id']

    """ Sector Model """
    city = models.ForeignKey(City, null=True, on_delete='CASCADE', related_name='sector_set')
    town = models.ForeignKey(Town, null=True, on_delete='CASCADE', related_name='sector_set')
    title = models.CharField(max_length=120)
    sector_id = models.CharField(max_length=120)
    lat = models.CharField(max_length=120)  # 위도
    lon = models.CharField(max_length=120)  # 경도
    # comstate = models.BooleanField(default=False)  # 통신 상태
    # name = models.CharField(max_length=120)  # 가입창명
    modem_number = models.CharField(max_length=120)  # 모뎀번호
    pump_count = models.CharField(max_length=120)  # 펌프개수

    discharge = models.CharField(max_length=120, blank=True)  # 유량 표시여부
    discharge_pressure = models.CharField(max_length=120, blank=True)  # 흡입압력 표시여부
    suction_pressure = models.CharField(max_length=120)  # 토출압력
    set_pressure = models.CharField(max_length=120, blank=True)  # 설정압력

    low_pressure = models.BooleanField(default=False)
    pump_open = models.BooleanField(default=False)

    pump_1_on = models.BooleanField(default=False)
    pump_1_disorder_a = models.CharField(max_length=120, blank=True)
    pump_1_disorder_b = models.CharField(max_length=120, blank=True)
    pump_1_low_water = models.BooleanField(default=False)
    pump_1_auto = models.BooleanField(default=False)  # 수동/자동
    #pump_1_operating_rate = models.FloatField()  # 가동률
    pump_1_current = models.CharField(max_length=120, blank=True)  # 전류
    pump_1_freq = models.FloatField(default=0)  # 주파수
    pump_1_power = models.CharField(max_length=120, blank=True) # 전력

    pump_2_on = models.BooleanField(default=False)
    pump_2_disorder_a = models.CharField(max_length=120, blank=True)
    pump_2_disorder_b = models.CharField(max_length=120, blank=True)
    pump_2_low_water = models.BooleanField(default=False)
    pump_2_auto = models.BooleanField(default=False)  # 수동/자동
    #pump_2_operating_rate = models.CharField(max_length=120, blank=True)  # 가동률
    pump_2_current = models.CharField(max_length=120, blank=True) # 전류
    pump_2_freq = models.FloatField(default=0)  # 주파수
    pump_2_power = models.CharField(max_length=120, blank=True)  # 전력

    pump_3_on = models.BooleanField(default=False)  
    pump_3_disorder_a = models.CharField(max_length=120, blank=True)
    pump_3_disorder_b = models.CharField(max_length=120, blank=True)
    pump_3_low_water = models.BooleanField(default=False)
    pump_3_auto = models.BooleanField(default=False)  # 수동/자동
    #pump_3_operating_rate = models.CharField(max_length=120, blank=True)  # 가동률
    pump_3_current = models.CharField(max_length=120, blank=True)  # 전류
    pump_3_freq = models.FloatField(default=0)  # 주파수
    pump_3_power = models.CharField(max_length=120, blank=True)  # 전력

    pump_4_on = models.BooleanField(default=False)
    pump_4_disorder_a = models.CharField(max_length=120, blank=True)
    pump_4_disorder_b = models.CharField(max_length=120, blank=True)
    pump_4_low_water = models.BooleanField(default=False)
    pump_4_auto = models.BooleanField(default=False)  # 수동/자동
    #pump_4_operating_rate = models.CharField(max_length=120, blank=True)  # 가동률
    pump_4_current = models.CharField(max_length=120, blank=True)
    pump_4_freq = models.FloatField(default=0)  # 주파수
    pump_4_power = models.CharField(max_length=120, blank=True)

    #creator = models.ForeignKey(user_models.User, null=True, on_delete='CASCADE')

    def __str__(self):
        return '{} - {}'.format(self.town, self.title)
    
    def pump_1_operating_rate(self):
        if self.pump_1_freq != 0:
            pump_1_rate = self.pump_1_freq / 60
            return round(pump_1_rate, 2)
        else: 
            return 0

    def pump_2_operating_rate(self):
        if self.pump_2_freq != 0:
            pump_2_rate = self.pump_2_freq / 60
            return round(pump_2_rate, 2)
        else: 
            return 0

    def pump_3_operating_rate(self):
        if self.pump_3_freq != 0:
            pump_3_rate = self.pump_3_freq / 60
            return round(pump_3_rate, 2)
            #return 1
        else: 
            return 0

    def pump_4_operating_rate(self):
        if self.pump_4_freq != 0:
            pump_4_rate = self.pump_4_freq / 60
            return round(pump_4_rate, 2)
            #return 1
        else: 
            return 0    
    # def rate_count(self):
    #     self.pump_1_operating_rate = self.pump_1_freq
    #     self.save()


# @python_2_unicode_compatible
# class Pump(TimeStampedModel):

#     class Meta:
#         ordering = ['id']

#     """ Pump Model """

#     # city = models.ForeignKey(City, null=True, on_delete='CASCADE')  # 시
#     # town = models.ForeignKey(Town, null=True, on_delete='CASCADE')  # 면읍동
#     sector = models.ForeignKey(Sector, null=True, on_delete='CASCADE', related_name='pump_set')  # 리
#     title = models.CharField(max_length=120)  # 카드뷰에 나오는 펌프이름
#     auto = models.BooleanField(default=False)  # 수동/자동
#     operating_rate = models.CharField(max_length=120)  # 가동률
#     current = models.CharField(max_length=120)  # 전류
#     freq = models.CharField(max_length=120)  # 주파수
#     power = models.CharField(max_length=120)  # 전력
    # pump_1_current = models.CharField(max_length=120)  # 1번 펌프 전류
    # pump_2_freq = models.CharField(max_length=120, null=True)  # 2번 펌프 주파수
    # pump_2_current = models.CharField(max_length=120, null=True)  # 2번 펌프 전류
    # pump_3_freq = models.CharField(max_length=120, null=True)  # 3번 펌프 주파수
    # pump_3_current = models.CharField(max_length=120, null=True)  # 3번 펌프 전류

    #creator = models.ForeignKey(user_models.User, null=True, on_delete='CASCADE')

    #file = models.ImageField()


# @python_2_unicode_compatible
# class Pump(TimeStampedModel):

#     """ Sector Model """
#     #city = models.ForeignKey(City, null=True, on_delete='CASCADE')
#     modem = models.ForeignKey(Modem, null=True, on_delete='CASCADE', related_name='pump_set')
#     title = models.CharField(max_length=120)
#     #creator = models.ForeignKey(user_models.User, null=True, on_delete='CASCADE')
